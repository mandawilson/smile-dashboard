import { Express } from "express";
import fs from "fs";
import https from "https";
import { props } from "./constants";
import { buildNeo4jDbSchema, driver } from "../schemas/neo4j";
import { mergeSchemas } from "@graphql-tools/schema";
import { oracleDbSchema } from "../schemas/oracle";
import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";
import { updateActiveUserSessions } from "./session";
import { corsOptions } from "./constants";
import NodeCache from "node-cache";
import { fetchAndCacheOncotreeData } from "./oncotree";
import { createSamplesLoader } from "./dataloader";

export function initializeHttpsServer(app: Express) {
  const httpsServer = https.createServer(
    {
      key: fs.readFileSync(props.web_key_pem),
      cert: fs.readFileSync(props.web_cert_pem),
    },
    app
  );

  return httpsServer;
}

export interface ApolloServerContext {
  req: {
    user: any;
    isAuthenticated: boolean;
  };
  oncotreeCache: NodeCache;
  samplesLoader: ReturnType<typeof createSamplesLoader>;
}

export async function initializeApolloServer(
  httpsServer: https.Server,
  app: Express
) {
  const { neo4jDbSchema, ogm } = await buildNeo4jDbSchema();
  const mergedSchema = mergeSchemas({
    schemas: [neo4jDbSchema, oracleDbSchema],
  });

  const oncotreeCache = new NodeCache({ stdTTL: 86400 }); // 1 day
  await fetchAndCacheOncotreeData(oncotreeCache);

  const apolloServer = new ApolloServer<ApolloServerContext>({
    schema: mergedSchema,
    context: async ({ req }: { req: any }) => {
      updateActiveUserSessions(req);

      return {
        req: {
          user: req.user,
          isAuthenticated: req.isAuthenticated,
        },
        oncotreeCache: oncotreeCache,
        samplesLoader: createSamplesLoader(ogm, oncotreeCache),
      };
    },
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer: httpsServer }),
      ApolloServerPluginLandingPageLocalDefault({
        embed: true,
        includeCookies: true,
      }),
    ],
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app, cors: corsOptions });

  return apolloServer;
}
