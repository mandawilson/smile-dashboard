import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BamComplete = {
  __typename?: "BamComplete";
  date: Scalars["String"];
  status: Scalars["String"];
  temposHasEvent: Array<Tempo>;
  temposHasEventAggregate?: Maybe<BamCompleteTempoTemposHasEventAggregationSelection>;
  temposHasEventConnection: BamCompleteTemposHasEventConnection;
};

export type BamCompleteTemposHasEventArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<TempoOptions>;
  where?: InputMaybe<TempoWhere>;
};

export type BamCompleteTemposHasEventAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<TempoWhere>;
};

export type BamCompleteTemposHasEventConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<BamCompleteTemposHasEventConnectionSort>>;
  where?: InputMaybe<BamCompleteTemposHasEventConnectionWhere>;
};

export type BamCompleteAggregateSelection = {
  __typename?: "BamCompleteAggregateSelection";
  count: Scalars["Int"];
  date: StringAggregateSelectionNonNullable;
  status: StringAggregateSelectionNonNullable;
};

export type BamCompleteConnectInput = {
  temposHasEvent?: InputMaybe<
    Array<BamCompleteTemposHasEventConnectFieldInput>
  >;
};

export type BamCompleteConnectWhere = {
  node: BamCompleteWhere;
};

export type BamCompleteCreateInput = {
  date: Scalars["String"];
  status: Scalars["String"];
  temposHasEvent?: InputMaybe<BamCompleteTemposHasEventFieldInput>;
};

export type BamCompleteDeleteInput = {
  temposHasEvent?: InputMaybe<Array<BamCompleteTemposHasEventDeleteFieldInput>>;
};

export type BamCompleteDisconnectInput = {
  temposHasEvent?: InputMaybe<
    Array<BamCompleteTemposHasEventDisconnectFieldInput>
  >;
};

export type BamCompleteEdge = {
  __typename?: "BamCompleteEdge";
  cursor: Scalars["String"];
  node: BamComplete;
};

export type BamCompleteOptions = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more BamCompleteSort objects to sort BamCompletes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<BamCompleteSort>>;
};

export type BamCompleteRelationInput = {
  temposHasEvent?: InputMaybe<Array<BamCompleteTemposHasEventCreateFieldInput>>;
};

/** Fields to sort BamCompletes by. The order in which sorts are applied is not guaranteed when specifying many fields in one BamCompleteSort object. */
export type BamCompleteSort = {
  date?: InputMaybe<SortDirection>;
  status?: InputMaybe<SortDirection>;
};

export type BamCompleteTempoTemposHasEventAggregationSelection = {
  __typename?: "BamCompleteTempoTemposHasEventAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<BamCompleteTempoTemposHasEventNodeAggregateSelection>;
};

export type BamCompleteTempoTemposHasEventNodeAggregateSelection = {
  __typename?: "BamCompleteTempoTemposHasEventNodeAggregateSelection";
  accessLevel: StringAggregateSelectionNullable;
  billedBy: StringAggregateSelectionNullable;
  costCenter: StringAggregateSelectionNullable;
  custodianInformation: StringAggregateSelectionNullable;
  smileTempoId: StringAggregateSelectionNonNullable;
};

export type BamCompleteTemposHasEventAggregateInput = {
  AND?: InputMaybe<Array<BamCompleteTemposHasEventAggregateInput>>;
  OR?: InputMaybe<Array<BamCompleteTemposHasEventAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<BamCompleteTemposHasEventNodeAggregationWhereInput>;
};

export type BamCompleteTemposHasEventConnectFieldInput = {
  connect?: InputMaybe<Array<TempoConnectInput>>;
  where?: InputMaybe<TempoConnectWhere>;
};

export type BamCompleteTemposHasEventConnection = {
  __typename?: "BamCompleteTemposHasEventConnection";
  edges: Array<BamCompleteTemposHasEventRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type BamCompleteTemposHasEventConnectionSort = {
  node?: InputMaybe<TempoSort>;
};

export type BamCompleteTemposHasEventConnectionWhere = {
  AND?: InputMaybe<Array<BamCompleteTemposHasEventConnectionWhere>>;
  OR?: InputMaybe<Array<BamCompleteTemposHasEventConnectionWhere>>;
  node?: InputMaybe<TempoWhere>;
  node_NOT?: InputMaybe<TempoWhere>;
};

export type BamCompleteTemposHasEventCreateFieldInput = {
  node: TempoCreateInput;
};

export type BamCompleteTemposHasEventDeleteFieldInput = {
  delete?: InputMaybe<TempoDeleteInput>;
  where?: InputMaybe<BamCompleteTemposHasEventConnectionWhere>;
};

export type BamCompleteTemposHasEventDisconnectFieldInput = {
  disconnect?: InputMaybe<TempoDisconnectInput>;
  where?: InputMaybe<BamCompleteTemposHasEventConnectionWhere>;
};

export type BamCompleteTemposHasEventFieldInput = {
  connect?: InputMaybe<Array<BamCompleteTemposHasEventConnectFieldInput>>;
  create?: InputMaybe<Array<BamCompleteTemposHasEventCreateFieldInput>>;
};

export type BamCompleteTemposHasEventNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<BamCompleteTemposHasEventNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<BamCompleteTemposHasEventNodeAggregationWhereInput>>;
  accessLevel_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  accessLevel_EQUAL?: InputMaybe<Scalars["String"]>;
  accessLevel_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  billedBy_EQUAL?: InputMaybe<Scalars["String"]>;
  billedBy_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  costCenter_EQUAL?: InputMaybe<Scalars["String"]>;
  costCenter_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  custodianInformation_EQUAL?: InputMaybe<Scalars["String"]>;
  custodianInformation_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  smileTempoId_EQUAL?: InputMaybe<Scalars["String"]>;
  smileTempoId_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type BamCompleteTemposHasEventRelationship = {
  __typename?: "BamCompleteTemposHasEventRelationship";
  cursor: Scalars["String"];
  node: Tempo;
};

export type BamCompleteTemposHasEventUpdateConnectionInput = {
  node?: InputMaybe<TempoUpdateInput>;
};

export type BamCompleteTemposHasEventUpdateFieldInput = {
  connect?: InputMaybe<Array<BamCompleteTemposHasEventConnectFieldInput>>;
  create?: InputMaybe<Array<BamCompleteTemposHasEventCreateFieldInput>>;
  delete?: InputMaybe<Array<BamCompleteTemposHasEventDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<BamCompleteTemposHasEventDisconnectFieldInput>>;
  update?: InputMaybe<BamCompleteTemposHasEventUpdateConnectionInput>;
  where?: InputMaybe<BamCompleteTemposHasEventConnectionWhere>;
};

export type BamCompleteUpdateInput = {
  date?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  temposHasEvent?: InputMaybe<Array<BamCompleteTemposHasEventUpdateFieldInput>>;
};

export type BamCompleteWhere = {
  AND?: InputMaybe<Array<BamCompleteWhere>>;
  OR?: InputMaybe<Array<BamCompleteWhere>>;
  date?: InputMaybe<Scalars["String"]>;
  date_CONTAINS?: InputMaybe<Scalars["String"]>;
  date_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  date_IN?: InputMaybe<Array<Scalars["String"]>>;
  date_NOT?: InputMaybe<Scalars["String"]>;
  date_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  date_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  date_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  date_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  date_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  status_CONTAINS?: InputMaybe<Scalars["String"]>;
  status_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  status_IN?: InputMaybe<Array<Scalars["String"]>>;
  status_NOT?: InputMaybe<Scalars["String"]>;
  status_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  status_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  status_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  status_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  status_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  temposHasEventAggregate?: InputMaybe<BamCompleteTemposHasEventAggregateInput>;
  temposHasEventConnection_ALL?: InputMaybe<BamCompleteTemposHasEventConnectionWhere>;
  temposHasEventConnection_NONE?: InputMaybe<BamCompleteTemposHasEventConnectionWhere>;
  temposHasEventConnection_SINGLE?: InputMaybe<BamCompleteTemposHasEventConnectionWhere>;
  temposHasEventConnection_SOME?: InputMaybe<BamCompleteTemposHasEventConnectionWhere>;
  /** Return BamCompletes where all of the related Tempos match this filter */
  temposHasEvent_ALL?: InputMaybe<TempoWhere>;
  /** Return BamCompletes where none of the related Tempos match this filter */
  temposHasEvent_NONE?: InputMaybe<TempoWhere>;
  /** Return BamCompletes where one of the related Tempos match this filter */
  temposHasEvent_SINGLE?: InputMaybe<TempoWhere>;
  /** Return BamCompletes where some of the related Tempos match this filter */
  temposHasEvent_SOME?: InputMaybe<TempoWhere>;
};

export type BamCompletesConnection = {
  __typename?: "BamCompletesConnection";
  edges: Array<BamCompleteEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type Cohort = {
  __typename?: "Cohort";
  billed?: Maybe<Scalars["String"]>;
  cohortId: Scalars["String"];
  endUsers?: Maybe<Scalars["String"]>;
  hasCohortCompleteCohortCompletes: Array<CohortComplete>;
  hasCohortCompleteCohortCompletesAggregate?: Maybe<CohortCohortCompleteHasCohortCompleteCohortCompletesAggregationSelection>;
  hasCohortCompleteCohortCompletesConnection: CohortHasCohortCompleteCohortCompletesConnection;
  hasCohortSampleSamples: Array<Sample>;
  hasCohortSampleSamplesAggregate?: Maybe<CohortSampleHasCohortSampleSamplesAggregationSelection>;
  hasCohortSampleSamplesConnection: CohortHasCohortSampleSamplesConnection;
  initialCohortDeliveryDate?: Maybe<Scalars["String"]>;
  pmUsers?: Maybe<Scalars["String"]>;
  projectSubtitle?: Maybe<Scalars["String"]>;
  projectTitle?: Maybe<Scalars["String"]>;
  smileSampleIds?: Maybe<Array<Maybe<Scalars["String"]>>>;
  status?: Maybe<Scalars["String"]>;
  totalSampleCount?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
};

export type CohortHasCohortCompleteCohortCompletesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<CohortCompleteOptions>;
  where?: InputMaybe<CohortCompleteWhere>;
};

export type CohortHasCohortCompleteCohortCompletesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<CohortCompleteWhere>;
};

export type CohortHasCohortCompleteCohortCompletesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesConnectionSort>
  >;
  where?: InputMaybe<CohortHasCohortCompleteCohortCompletesConnectionWhere>;
};

export type CohortHasCohortSampleSamplesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<SampleOptions>;
  where?: InputMaybe<SampleWhere>;
};

export type CohortHasCohortSampleSamplesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<SampleWhere>;
};

export type CohortHasCohortSampleSamplesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<CohortHasCohortSampleSamplesConnectionSort>>;
  where?: InputMaybe<CohortHasCohortSampleSamplesConnectionWhere>;
};

export type CohortAggregateSelection = {
  __typename?: "CohortAggregateSelection";
  billed: StringAggregateSelectionNullable;
  cohortId: StringAggregateSelectionNonNullable;
  count: Scalars["Int"];
  endUsers: StringAggregateSelectionNullable;
  initialCohortDeliveryDate: StringAggregateSelectionNullable;
  pmUsers: StringAggregateSelectionNullable;
  projectSubtitle: StringAggregateSelectionNullable;
  projectTitle: StringAggregateSelectionNullable;
  status: StringAggregateSelectionNullable;
  totalSampleCount: IntAggregateSelectionNullable;
  type: StringAggregateSelectionNullable;
};

export type CohortCohortCompleteHasCohortCompleteCohortCompletesAggregationSelection =
  {
    __typename?: "CohortCohortCompleteHasCohortCompleteCohortCompletesAggregationSelection";
    count: Scalars["Int"];
    node?: Maybe<CohortCohortCompleteHasCohortCompleteCohortCompletesNodeAggregateSelection>;
  };

export type CohortCohortCompleteHasCohortCompleteCohortCompletesNodeAggregateSelection =
  {
    __typename?: "CohortCohortCompleteHasCohortCompleteCohortCompletesNodeAggregateSelection";
    date: StringAggregateSelectionNonNullable;
    endUsers: StringAggregateSelectionNonNullable;
    pmUsers: StringAggregateSelectionNonNullable;
    projectSubtitle: StringAggregateSelectionNonNullable;
    projectTitle: StringAggregateSelectionNonNullable;
    status: StringAggregateSelectionNonNullable;
    type: StringAggregateSelectionNonNullable;
  };

export type CohortComplete = {
  __typename?: "CohortComplete";
  cohortsHasCohortComplete: Array<Cohort>;
  cohortsHasCohortCompleteAggregate?: Maybe<CohortCompleteCohortCohortsHasCohortCompleteAggregationSelection>;
  cohortsHasCohortCompleteConnection: CohortCompleteCohortsHasCohortCompleteConnection;
  date: Scalars["String"];
  endUsers: Scalars["String"];
  pmUsers: Scalars["String"];
  projectSubtitle: Scalars["String"];
  projectTitle: Scalars["String"];
  status: Scalars["String"];
  type: Scalars["String"];
};

export type CohortCompleteCohortsHasCohortCompleteArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<CohortOptions>;
  where?: InputMaybe<CohortWhere>;
};

export type CohortCompleteCohortsHasCohortCompleteAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<CohortWhere>;
};

export type CohortCompleteCohortsHasCohortCompleteConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteConnectionSort>
  >;
  where?: InputMaybe<CohortCompleteCohortsHasCohortCompleteConnectionWhere>;
};

export type CohortCompleteAggregateSelection = {
  __typename?: "CohortCompleteAggregateSelection";
  count: Scalars["Int"];
  date: StringAggregateSelectionNonNullable;
  endUsers: StringAggregateSelectionNonNullable;
  pmUsers: StringAggregateSelectionNonNullable;
  projectSubtitle: StringAggregateSelectionNonNullable;
  projectTitle: StringAggregateSelectionNonNullable;
  status: StringAggregateSelectionNonNullable;
  type: StringAggregateSelectionNonNullable;
};

export type CohortCompleteCohortCohortsHasCohortCompleteAggregationSelection = {
  __typename?: "CohortCompleteCohortCohortsHasCohortCompleteAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<CohortCompleteCohortCohortsHasCohortCompleteNodeAggregateSelection>;
};

export type CohortCompleteCohortCohortsHasCohortCompleteNodeAggregateSelection =
  {
    __typename?: "CohortCompleteCohortCohortsHasCohortCompleteNodeAggregateSelection";
    billed: StringAggregateSelectionNullable;
    cohortId: StringAggregateSelectionNonNullable;
    endUsers: StringAggregateSelectionNullable;
    initialCohortDeliveryDate: StringAggregateSelectionNullable;
    pmUsers: StringAggregateSelectionNullable;
    projectSubtitle: StringAggregateSelectionNullable;
    projectTitle: StringAggregateSelectionNullable;
    status: StringAggregateSelectionNullable;
    totalSampleCount: IntAggregateSelectionNullable;
    type: StringAggregateSelectionNullable;
  };

export type CohortCompleteCohortsHasCohortCompleteAggregateInput = {
  AND?: InputMaybe<Array<CohortCompleteCohortsHasCohortCompleteAggregateInput>>;
  OR?: InputMaybe<Array<CohortCompleteCohortsHasCohortCompleteAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<CohortCompleteCohortsHasCohortCompleteNodeAggregationWhereInput>;
};

export type CohortCompleteCohortsHasCohortCompleteConnectFieldInput = {
  connect?: InputMaybe<Array<CohortConnectInput>>;
  where?: InputMaybe<CohortConnectWhere>;
};

export type CohortCompleteCohortsHasCohortCompleteConnection = {
  __typename?: "CohortCompleteCohortsHasCohortCompleteConnection";
  edges: Array<CohortCompleteCohortsHasCohortCompleteRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type CohortCompleteCohortsHasCohortCompleteConnectionSort = {
  node?: InputMaybe<CohortSort>;
};

export type CohortCompleteCohortsHasCohortCompleteConnectionWhere = {
  AND?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteConnectionWhere>
  >;
  OR?: InputMaybe<Array<CohortCompleteCohortsHasCohortCompleteConnectionWhere>>;
  node?: InputMaybe<CohortWhere>;
  node_NOT?: InputMaybe<CohortWhere>;
};

export type CohortCompleteCohortsHasCohortCompleteCreateFieldInput = {
  node: CohortCreateInput;
};

export type CohortCompleteCohortsHasCohortCompleteDeleteFieldInput = {
  delete?: InputMaybe<CohortDeleteInput>;
  where?: InputMaybe<CohortCompleteCohortsHasCohortCompleteConnectionWhere>;
};

export type CohortCompleteCohortsHasCohortCompleteDisconnectFieldInput = {
  disconnect?: InputMaybe<CohortDisconnectInput>;
  where?: InputMaybe<CohortCompleteCohortsHasCohortCompleteConnectionWhere>;
};

export type CohortCompleteCohortsHasCohortCompleteFieldInput = {
  connect?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteConnectFieldInput>
  >;
  create?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteCreateFieldInput>
  >;
};

export type CohortCompleteCohortsHasCohortCompleteNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteNodeAggregationWhereInput>
  >;
  billed_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  billed_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  billed_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  billed_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  billed_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  billed_EQUAL?: InputMaybe<Scalars["String"]>;
  billed_GT?: InputMaybe<Scalars["Int"]>;
  billed_GTE?: InputMaybe<Scalars["Int"]>;
  billed_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  billed_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  billed_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  billed_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  billed_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  billed_LT?: InputMaybe<Scalars["Int"]>;
  billed_LTE?: InputMaybe<Scalars["Int"]>;
  billed_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  billed_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  billed_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  billed_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  billed_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cohortId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cohortId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cohortId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cohortId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cohortId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cohortId_EQUAL?: InputMaybe<Scalars["String"]>;
  cohortId_GT?: InputMaybe<Scalars["Int"]>;
  cohortId_GTE?: InputMaybe<Scalars["Int"]>;
  cohortId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cohortId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cohortId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cohortId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cohortId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cohortId_LT?: InputMaybe<Scalars["Int"]>;
  cohortId_LTE?: InputMaybe<Scalars["Int"]>;
  cohortId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cohortId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cohortId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cohortId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cohortId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  endUsers_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  endUsers_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  endUsers_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  endUsers_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  endUsers_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  endUsers_EQUAL?: InputMaybe<Scalars["String"]>;
  endUsers_GT?: InputMaybe<Scalars["Int"]>;
  endUsers_GTE?: InputMaybe<Scalars["Int"]>;
  endUsers_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  endUsers_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  endUsers_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  endUsers_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  endUsers_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  endUsers_LT?: InputMaybe<Scalars["Int"]>;
  endUsers_LTE?: InputMaybe<Scalars["Int"]>;
  endUsers_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  endUsers_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  endUsers_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  endUsers_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  endUsers_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  initialCohortDeliveryDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  initialCohortDeliveryDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  initialCohortDeliveryDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  initialCohortDeliveryDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  initialCohortDeliveryDate_EQUAL?: InputMaybe<Scalars["String"]>;
  initialCohortDeliveryDate_GT?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_GTE?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_LT?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_LTE?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  pmUsers_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  pmUsers_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  pmUsers_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  pmUsers_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  pmUsers_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  pmUsers_EQUAL?: InputMaybe<Scalars["String"]>;
  pmUsers_GT?: InputMaybe<Scalars["Int"]>;
  pmUsers_GTE?: InputMaybe<Scalars["Int"]>;
  pmUsers_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  pmUsers_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  pmUsers_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  pmUsers_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  pmUsers_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  pmUsers_LT?: InputMaybe<Scalars["Int"]>;
  pmUsers_LTE?: InputMaybe<Scalars["Int"]>;
  pmUsers_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  pmUsers_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  pmUsers_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  pmUsers_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  pmUsers_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  projectSubtitle_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  projectSubtitle_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  projectSubtitle_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  projectSubtitle_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  projectSubtitle_EQUAL?: InputMaybe<Scalars["String"]>;
  projectSubtitle_GT?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_GTE?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_LT?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_LTE?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  projectTitle_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  projectTitle_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  projectTitle_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  projectTitle_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  projectTitle_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  projectTitle_EQUAL?: InputMaybe<Scalars["String"]>;
  projectTitle_GT?: InputMaybe<Scalars["Int"]>;
  projectTitle_GTE?: InputMaybe<Scalars["Int"]>;
  projectTitle_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  projectTitle_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  projectTitle_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  projectTitle_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  projectTitle_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  projectTitle_LT?: InputMaybe<Scalars["Int"]>;
  projectTitle_LTE?: InputMaybe<Scalars["Int"]>;
  projectTitle_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  projectTitle_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  projectTitle_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  projectTitle_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  projectTitle_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  status_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  status_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  status_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  status_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  status_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  status_EQUAL?: InputMaybe<Scalars["String"]>;
  status_GT?: InputMaybe<Scalars["Int"]>;
  status_GTE?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  status_LT?: InputMaybe<Scalars["Int"]>;
  status_LTE?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_LTE?: InputMaybe<Scalars["Int"]>;
  type_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  type_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  type_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  type_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  type_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  type_EQUAL?: InputMaybe<Scalars["String"]>;
  type_GT?: InputMaybe<Scalars["Int"]>;
  type_GTE?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  type_LT?: InputMaybe<Scalars["Int"]>;
  type_LTE?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type CohortCompleteCohortsHasCohortCompleteRelationship = {
  __typename?: "CohortCompleteCohortsHasCohortCompleteRelationship";
  cursor: Scalars["String"];
  node: Cohort;
};

export type CohortCompleteCohortsHasCohortCompleteUpdateConnectionInput = {
  node?: InputMaybe<CohortUpdateInput>;
};

export type CohortCompleteCohortsHasCohortCompleteUpdateFieldInput = {
  connect?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteConnectFieldInput>
  >;
  create?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteCreateFieldInput>
  >;
  delete?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteDeleteFieldInput>
  >;
  disconnect?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteDisconnectFieldInput>
  >;
  update?: InputMaybe<CohortCompleteCohortsHasCohortCompleteUpdateConnectionInput>;
  where?: InputMaybe<CohortCompleteCohortsHasCohortCompleteConnectionWhere>;
};

export type CohortCompleteConnectInput = {
  cohortsHasCohortComplete?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteConnectFieldInput>
  >;
};

export type CohortCompleteConnectWhere = {
  node: CohortCompleteWhere;
};

export type CohortCompleteCreateInput = {
  cohortsHasCohortComplete?: InputMaybe<CohortCompleteCohortsHasCohortCompleteFieldInput>;
  date: Scalars["String"];
  endUsers: Scalars["String"];
  pmUsers: Scalars["String"];
  projectSubtitle: Scalars["String"];
  projectTitle: Scalars["String"];
  status: Scalars["String"];
  type: Scalars["String"];
};

export type CohortCompleteDeleteInput = {
  cohortsHasCohortComplete?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteDeleteFieldInput>
  >;
};

export type CohortCompleteDisconnectInput = {
  cohortsHasCohortComplete?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteDisconnectFieldInput>
  >;
};

export type CohortCompleteEdge = {
  __typename?: "CohortCompleteEdge";
  cursor: Scalars["String"];
  node: CohortComplete;
};

export type CohortCompleteOptions = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more CohortCompleteSort objects to sort CohortCompletes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CohortCompleteSort>>;
};

export type CohortCompleteRelationInput = {
  cohortsHasCohortComplete?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteCreateFieldInput>
  >;
};

/** Fields to sort CohortCompletes by. The order in which sorts are applied is not guaranteed when specifying many fields in one CohortCompleteSort object. */
export type CohortCompleteSort = {
  date?: InputMaybe<SortDirection>;
  endUsers?: InputMaybe<SortDirection>;
  pmUsers?: InputMaybe<SortDirection>;
  projectSubtitle?: InputMaybe<SortDirection>;
  projectTitle?: InputMaybe<SortDirection>;
  status?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
};

export type CohortCompleteUpdateInput = {
  cohortsHasCohortComplete?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteUpdateFieldInput>
  >;
  date?: InputMaybe<Scalars["String"]>;
  endUsers?: InputMaybe<Scalars["String"]>;
  pmUsers?: InputMaybe<Scalars["String"]>;
  projectSubtitle?: InputMaybe<Scalars["String"]>;
  projectTitle?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

export type CohortCompleteWhere = {
  AND?: InputMaybe<Array<CohortCompleteWhere>>;
  OR?: InputMaybe<Array<CohortCompleteWhere>>;
  cohortsHasCohortCompleteAggregate?: InputMaybe<CohortCompleteCohortsHasCohortCompleteAggregateInput>;
  cohortsHasCohortCompleteConnection_ALL?: InputMaybe<CohortCompleteCohortsHasCohortCompleteConnectionWhere>;
  cohortsHasCohortCompleteConnection_NONE?: InputMaybe<CohortCompleteCohortsHasCohortCompleteConnectionWhere>;
  cohortsHasCohortCompleteConnection_SINGLE?: InputMaybe<CohortCompleteCohortsHasCohortCompleteConnectionWhere>;
  cohortsHasCohortCompleteConnection_SOME?: InputMaybe<CohortCompleteCohortsHasCohortCompleteConnectionWhere>;
  /** Return CohortCompletes where all of the related Cohorts match this filter */
  cohortsHasCohortComplete_ALL?: InputMaybe<CohortWhere>;
  /** Return CohortCompletes where none of the related Cohorts match this filter */
  cohortsHasCohortComplete_NONE?: InputMaybe<CohortWhere>;
  /** Return CohortCompletes where one of the related Cohorts match this filter */
  cohortsHasCohortComplete_SINGLE?: InputMaybe<CohortWhere>;
  /** Return CohortCompletes where some of the related Cohorts match this filter */
  cohortsHasCohortComplete_SOME?: InputMaybe<CohortWhere>;
  date?: InputMaybe<Scalars["String"]>;
  date_CONTAINS?: InputMaybe<Scalars["String"]>;
  date_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  date_IN?: InputMaybe<Array<Scalars["String"]>>;
  date_NOT?: InputMaybe<Scalars["String"]>;
  date_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  date_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  date_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  date_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  date_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  endUsers?: InputMaybe<Scalars["String"]>;
  endUsers_CONTAINS?: InputMaybe<Scalars["String"]>;
  endUsers_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  endUsers_IN?: InputMaybe<Array<Scalars["String"]>>;
  endUsers_NOT?: InputMaybe<Scalars["String"]>;
  endUsers_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  endUsers_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  endUsers_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  endUsers_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  endUsers_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  pmUsers?: InputMaybe<Scalars["String"]>;
  pmUsers_CONTAINS?: InputMaybe<Scalars["String"]>;
  pmUsers_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  pmUsers_IN?: InputMaybe<Array<Scalars["String"]>>;
  pmUsers_NOT?: InputMaybe<Scalars["String"]>;
  pmUsers_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  pmUsers_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  pmUsers_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  pmUsers_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  pmUsers_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  projectSubtitle?: InputMaybe<Scalars["String"]>;
  projectSubtitle_CONTAINS?: InputMaybe<Scalars["String"]>;
  projectSubtitle_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  projectSubtitle_IN?: InputMaybe<Array<Scalars["String"]>>;
  projectSubtitle_NOT?: InputMaybe<Scalars["String"]>;
  projectSubtitle_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  projectSubtitle_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  projectSubtitle_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  projectSubtitle_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  projectSubtitle_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  projectTitle?: InputMaybe<Scalars["String"]>;
  projectTitle_CONTAINS?: InputMaybe<Scalars["String"]>;
  projectTitle_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  projectTitle_IN?: InputMaybe<Array<Scalars["String"]>>;
  projectTitle_NOT?: InputMaybe<Scalars["String"]>;
  projectTitle_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  projectTitle_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  projectTitle_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  projectTitle_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  projectTitle_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  status_CONTAINS?: InputMaybe<Scalars["String"]>;
  status_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  status_IN?: InputMaybe<Array<Scalars["String"]>>;
  status_NOT?: InputMaybe<Scalars["String"]>;
  status_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  status_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  status_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  status_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  status_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  type_CONTAINS?: InputMaybe<Scalars["String"]>;
  type_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  type_IN?: InputMaybe<Array<Scalars["String"]>>;
  type_NOT?: InputMaybe<Scalars["String"]>;
  type_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  type_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  type_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  type_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  type_STARTS_WITH?: InputMaybe<Scalars["String"]>;
};

export type CohortCompletesConnection = {
  __typename?: "CohortCompletesConnection";
  edges: Array<CohortCompleteEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type CohortConnectInput = {
  hasCohortCompleteCohortCompletes?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesConnectFieldInput>
  >;
  hasCohortSampleSamples?: InputMaybe<
    Array<CohortHasCohortSampleSamplesConnectFieldInput>
  >;
};

export type CohortConnectWhere = {
  node: CohortWhere;
};

export type CohortCreateInput = {
  billed?: InputMaybe<Scalars["String"]>;
  cohortId: Scalars["String"];
  endUsers?: InputMaybe<Scalars["String"]>;
  hasCohortCompleteCohortCompletes?: InputMaybe<CohortHasCohortCompleteCohortCompletesFieldInput>;
  hasCohortSampleSamples?: InputMaybe<CohortHasCohortSampleSamplesFieldInput>;
  initialCohortDeliveryDate?: InputMaybe<Scalars["String"]>;
  pmUsers?: InputMaybe<Scalars["String"]>;
  projectSubtitle?: InputMaybe<Scalars["String"]>;
  projectTitle?: InputMaybe<Scalars["String"]>;
  smileSampleIds?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  status?: InputMaybe<Scalars["String"]>;
  totalSampleCount?: InputMaybe<Scalars["Int"]>;
  type?: InputMaybe<Scalars["String"]>;
};

export type CohortDeleteInput = {
  hasCohortCompleteCohortCompletes?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesDeleteFieldInput>
  >;
  hasCohortSampleSamples?: InputMaybe<
    Array<CohortHasCohortSampleSamplesDeleteFieldInput>
  >;
};

export type CohortDisconnectInput = {
  hasCohortCompleteCohortCompletes?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesDisconnectFieldInput>
  >;
  hasCohortSampleSamples?: InputMaybe<
    Array<CohortHasCohortSampleSamplesDisconnectFieldInput>
  >;
};

export type CohortEdge = {
  __typename?: "CohortEdge";
  cursor: Scalars["String"];
  node: Cohort;
};

export type CohortHasCohortCompleteCohortCompletesAggregateInput = {
  AND?: InputMaybe<Array<CohortHasCohortCompleteCohortCompletesAggregateInput>>;
  OR?: InputMaybe<Array<CohortHasCohortCompleteCohortCompletesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<CohortHasCohortCompleteCohortCompletesNodeAggregationWhereInput>;
};

export type CohortHasCohortCompleteCohortCompletesConnectFieldInput = {
  connect?: InputMaybe<Array<CohortCompleteConnectInput>>;
  where?: InputMaybe<CohortCompleteConnectWhere>;
};

export type CohortHasCohortCompleteCohortCompletesConnection = {
  __typename?: "CohortHasCohortCompleteCohortCompletesConnection";
  edges: Array<CohortHasCohortCompleteCohortCompletesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type CohortHasCohortCompleteCohortCompletesConnectionSort = {
  node?: InputMaybe<CohortCompleteSort>;
};

export type CohortHasCohortCompleteCohortCompletesConnectionWhere = {
  AND?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesConnectionWhere>
  >;
  OR?: InputMaybe<Array<CohortHasCohortCompleteCohortCompletesConnectionWhere>>;
  node?: InputMaybe<CohortCompleteWhere>;
  node_NOT?: InputMaybe<CohortCompleteWhere>;
};

export type CohortHasCohortCompleteCohortCompletesCreateFieldInput = {
  node: CohortCompleteCreateInput;
};

export type CohortHasCohortCompleteCohortCompletesDeleteFieldInput = {
  delete?: InputMaybe<CohortCompleteDeleteInput>;
  where?: InputMaybe<CohortHasCohortCompleteCohortCompletesConnectionWhere>;
};

export type CohortHasCohortCompleteCohortCompletesDisconnectFieldInput = {
  disconnect?: InputMaybe<CohortCompleteDisconnectInput>;
  where?: InputMaybe<CohortHasCohortCompleteCohortCompletesConnectionWhere>;
};

export type CohortHasCohortCompleteCohortCompletesFieldInput = {
  connect?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesConnectFieldInput>
  >;
  create?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesCreateFieldInput>
  >;
};

export type CohortHasCohortCompleteCohortCompletesNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesNodeAggregationWhereInput>
  >;
  date_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  date_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  date_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  date_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  date_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  date_EQUAL?: InputMaybe<Scalars["String"]>;
  date_GT?: InputMaybe<Scalars["Int"]>;
  date_GTE?: InputMaybe<Scalars["Int"]>;
  date_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  date_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  date_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  date_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  date_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  date_LT?: InputMaybe<Scalars["Int"]>;
  date_LTE?: InputMaybe<Scalars["Int"]>;
  date_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  date_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  date_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  date_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  date_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  endUsers_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  endUsers_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  endUsers_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  endUsers_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  endUsers_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  endUsers_EQUAL?: InputMaybe<Scalars["String"]>;
  endUsers_GT?: InputMaybe<Scalars["Int"]>;
  endUsers_GTE?: InputMaybe<Scalars["Int"]>;
  endUsers_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  endUsers_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  endUsers_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  endUsers_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  endUsers_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  endUsers_LT?: InputMaybe<Scalars["Int"]>;
  endUsers_LTE?: InputMaybe<Scalars["Int"]>;
  endUsers_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  endUsers_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  endUsers_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  endUsers_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  endUsers_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  pmUsers_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  pmUsers_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  pmUsers_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  pmUsers_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  pmUsers_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  pmUsers_EQUAL?: InputMaybe<Scalars["String"]>;
  pmUsers_GT?: InputMaybe<Scalars["Int"]>;
  pmUsers_GTE?: InputMaybe<Scalars["Int"]>;
  pmUsers_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  pmUsers_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  pmUsers_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  pmUsers_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  pmUsers_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  pmUsers_LT?: InputMaybe<Scalars["Int"]>;
  pmUsers_LTE?: InputMaybe<Scalars["Int"]>;
  pmUsers_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  pmUsers_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  pmUsers_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  pmUsers_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  pmUsers_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  projectSubtitle_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  projectSubtitle_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  projectSubtitle_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  projectSubtitle_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  projectSubtitle_EQUAL?: InputMaybe<Scalars["String"]>;
  projectSubtitle_GT?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_GTE?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_LT?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_LTE?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  projectTitle_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  projectTitle_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  projectTitle_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  projectTitle_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  projectTitle_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  projectTitle_EQUAL?: InputMaybe<Scalars["String"]>;
  projectTitle_GT?: InputMaybe<Scalars["Int"]>;
  projectTitle_GTE?: InputMaybe<Scalars["Int"]>;
  projectTitle_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  projectTitle_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  projectTitle_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  projectTitle_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  projectTitle_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  projectTitle_LT?: InputMaybe<Scalars["Int"]>;
  projectTitle_LTE?: InputMaybe<Scalars["Int"]>;
  projectTitle_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  projectTitle_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  projectTitle_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  projectTitle_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  projectTitle_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  status_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  status_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  status_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  status_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  status_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  status_EQUAL?: InputMaybe<Scalars["String"]>;
  status_GT?: InputMaybe<Scalars["Int"]>;
  status_GTE?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  status_LT?: InputMaybe<Scalars["Int"]>;
  status_LTE?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  type_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  type_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  type_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  type_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  type_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  type_EQUAL?: InputMaybe<Scalars["String"]>;
  type_GT?: InputMaybe<Scalars["Int"]>;
  type_GTE?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  type_LT?: InputMaybe<Scalars["Int"]>;
  type_LTE?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type CohortHasCohortCompleteCohortCompletesRelationship = {
  __typename?: "CohortHasCohortCompleteCohortCompletesRelationship";
  cursor: Scalars["String"];
  node: CohortComplete;
};

export type CohortHasCohortCompleteCohortCompletesUpdateConnectionInput = {
  node?: InputMaybe<CohortCompleteUpdateInput>;
};

export type CohortHasCohortCompleteCohortCompletesUpdateFieldInput = {
  connect?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesConnectFieldInput>
  >;
  create?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesCreateFieldInput>
  >;
  delete?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesDeleteFieldInput>
  >;
  disconnect?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesDisconnectFieldInput>
  >;
  update?: InputMaybe<CohortHasCohortCompleteCohortCompletesUpdateConnectionInput>;
  where?: InputMaybe<CohortHasCohortCompleteCohortCompletesConnectionWhere>;
};

export type CohortHasCohortSampleSamplesAggregateInput = {
  AND?: InputMaybe<Array<CohortHasCohortSampleSamplesAggregateInput>>;
  OR?: InputMaybe<Array<CohortHasCohortSampleSamplesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<CohortHasCohortSampleSamplesNodeAggregationWhereInput>;
};

export type CohortHasCohortSampleSamplesConnectFieldInput = {
  connect?: InputMaybe<Array<SampleConnectInput>>;
  where?: InputMaybe<SampleConnectWhere>;
};

export type CohortHasCohortSampleSamplesConnection = {
  __typename?: "CohortHasCohortSampleSamplesConnection";
  edges: Array<CohortHasCohortSampleSamplesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type CohortHasCohortSampleSamplesConnectionSort = {
  node?: InputMaybe<SampleSort>;
};

export type CohortHasCohortSampleSamplesConnectionWhere = {
  AND?: InputMaybe<Array<CohortHasCohortSampleSamplesConnectionWhere>>;
  OR?: InputMaybe<Array<CohortHasCohortSampleSamplesConnectionWhere>>;
  node?: InputMaybe<SampleWhere>;
  node_NOT?: InputMaybe<SampleWhere>;
};

export type CohortHasCohortSampleSamplesCreateFieldInput = {
  node: SampleCreateInput;
};

export type CohortHasCohortSampleSamplesDeleteFieldInput = {
  delete?: InputMaybe<SampleDeleteInput>;
  where?: InputMaybe<CohortHasCohortSampleSamplesConnectionWhere>;
};

export type CohortHasCohortSampleSamplesDisconnectFieldInput = {
  disconnect?: InputMaybe<SampleDisconnectInput>;
  where?: InputMaybe<CohortHasCohortSampleSamplesConnectionWhere>;
};

export type CohortHasCohortSampleSamplesFieldInput = {
  connect?: InputMaybe<Array<CohortHasCohortSampleSamplesConnectFieldInput>>;
  create?: InputMaybe<Array<CohortHasCohortSampleSamplesCreateFieldInput>>;
};

export type CohortHasCohortSampleSamplesNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<CohortHasCohortSampleSamplesNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<Array<CohortHasCohortSampleSamplesNodeAggregationWhereInput>>;
  accessLevel_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  accessLevel_EQUAL?: InputMaybe<Scalars["String"]>;
  accessLevel_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  additionalProperties_EQUAL?: InputMaybe<Scalars["String"]>;
  additionalProperties_GT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_GTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  baitSet_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  baitSet_EQUAL?: InputMaybe<Scalars["String"]>;
  baitSet_GT?: InputMaybe<Scalars["Int"]>;
  baitSet_GTE?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  baitSet_LT?: InputMaybe<Scalars["Int"]>;
  baitSet_LTE?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_EQUAL?: InputMaybe<Scalars["String"]>;
  bamCompleteDate_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_EQUAL?: InputMaybe<Scalars["String"]>;
  bamCompleteStatus_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  billedBy_EQUAL?: InputMaybe<Scalars["String"]>;
  billedBy_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_EQUAL?: InputMaybe<Scalars["String"]>;
  cancerTypeDetailed_GT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_GTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cancerType_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cancerType_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cancerType_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cancerType_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cancerType_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cancerType_EQUAL?: InputMaybe<Scalars["String"]>;
  cancerType_GT?: InputMaybe<Scalars["Int"]>;
  cancerType_GTE?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cancerType_LT?: InputMaybe<Scalars["Int"]>;
  cancerType_LTE?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_EQUAL?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode_GT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_GTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId_GT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_GTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoPatientId_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoSampleName_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  collectionYear_EQUAL?: InputMaybe<Scalars["String"]>;
  collectionYear_GT?: InputMaybe<Scalars["Int"]>;
  collectionYear_GTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_LT?: InputMaybe<Scalars["Int"]>;
  collectionYear_LTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  costCenter_EQUAL?: InputMaybe<Scalars["String"]>;
  costCenter_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  custodianInformation_EQUAL?: InputMaybe<Scalars["String"]>;
  custodianInformation_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  datasource_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  datasource_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  datasource_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  datasource_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  datasource_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  datasource_EQUAL?: InputMaybe<Scalars["String"]>;
  datasource_GT?: InputMaybe<Scalars["Int"]>;
  datasource_GTE?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  datasource_LT?: InputMaybe<Scalars["Int"]>;
  datasource_LTE?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_EQUAL?: InputMaybe<Scalars["String"]>;
  dmpPatientId_GT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_GTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  embargoDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  embargoDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  embargoDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  embargoDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  embargoDate_EQUAL?: InputMaybe<Scalars["String"]>;
  embargoDate_GT?: InputMaybe<Scalars["Int"]>;
  embargoDate_GTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_LT?: InputMaybe<Scalars["Int"]>;
  embargoDate_LTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  genePanel_EQUAL?: InputMaybe<Scalars["String"]>;
  genePanel_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_EQUAL?: InputMaybe<Scalars["String"]>;
  igoRequestId_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  importDate_EQUAL?: InputMaybe<Scalars["String"]>;
  importDate_GT?: InputMaybe<Scalars["Int"]>;
  importDate_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_EQUAL?: InputMaybe<Scalars["String"]>;
  initialPipelineRunDate_GT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_GTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_EQUAL?: InputMaybe<Scalars["String"]>;
  investigatorSampleId_GT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  libraries_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  libraries_EQUAL?: InputMaybe<Scalars["String"]>;
  libraries_GT?: InputMaybe<Scalars["Int"]>;
  libraries_GTE?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  libraries_LT?: InputMaybe<Scalars["Int"]>;
  libraries_LTE?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_EQUAL?: InputMaybe<Scalars["String"]>;
  mafCompleteDate_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_EQUAL?: InputMaybe<Scalars["String"]>;
  mafCompleteNormalPrimaryId_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_EQUAL?: InputMaybe<Scalars["String"]>;
  mafCompleteStatus_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_EQUAL?: InputMaybe<Scalars["String"]>;
  oncotreeCode_GT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_GTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  preservation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  preservation_EQUAL?: InputMaybe<Scalars["String"]>;
  preservation_GT?: InputMaybe<Scalars["Int"]>;
  preservation_GTE?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  preservation_LT?: InputMaybe<Scalars["Int"]>;
  preservation_LTE?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  primaryId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  primaryId_EQUAL?: InputMaybe<Scalars["String"]>;
  primaryId_GT?: InputMaybe<Scalars["Int"]>;
  primaryId_GTE?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  primaryId_LT?: InputMaybe<Scalars["Int"]>;
  primaryId_LTE?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_EQUAL?: InputMaybe<Scalars["String"]>;
  qcCompleteDate_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_EQUAL?: InputMaybe<Scalars["String"]>;
  qcCompleteReason_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_EQUAL?: InputMaybe<Scalars["String"]>;
  qcCompleteResult_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_EQUAL?: InputMaybe<Scalars["String"]>;
  qcCompleteStatus_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcReports_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcReports_EQUAL?: InputMaybe<Scalars["String"]>;
  qcReports_GT?: InputMaybe<Scalars["Int"]>;
  qcReports_GTE?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcReports_LT?: InputMaybe<Scalars["Int"]>;
  qcReports_LTE?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  recipe_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  recipe_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  recipe_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  recipe_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  recipe_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  recipe_EQUAL?: InputMaybe<Scalars["String"]>;
  recipe_GT?: InputMaybe<Scalars["Int"]>;
  recipe_GTE?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  recipe_LT?: InputMaybe<Scalars["Int"]>;
  recipe_LTE?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleCategory_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleCategory_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleCategory_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleCategory_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleCategory_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleCategory_GT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_GTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleClass_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleClass_GT?: InputMaybe<Scalars["Int"]>;
  sampleClass_GTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_LT?: InputMaybe<Scalars["Int"]>;
  sampleClass_LTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleName_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleName_GT?: InputMaybe<Scalars["Int"]>;
  sampleName_GTE?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleName_LT?: InputMaybe<Scalars["Int"]>;
  sampleName_LTE?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleOrigin_GT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_GTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleType_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleType_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleType_GT?: InputMaybe<Scalars["Int"]>;
  sampleType_GTE?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleType_LT?: InputMaybe<Scalars["Int"]>;
  sampleType_LTE?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sex_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sex_EQUAL?: InputMaybe<Scalars["String"]>;
  sex_GT?: InputMaybe<Scalars["Int"]>;
  sex_GTE?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sex_LT?: InputMaybe<Scalars["Int"]>;
  sex_LTE?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  smileSampleId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  smileSampleId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  smileSampleId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  smileSampleId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  smileSampleId_EQUAL?: InputMaybe<Scalars["String"]>;
  smileSampleId_GT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_GTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  smileTempoId_EQUAL?: InputMaybe<Scalars["String"]>;
  smileTempoId_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  species_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  species_EQUAL?: InputMaybe<Scalars["String"]>;
  species_GT?: InputMaybe<Scalars["Int"]>;
  species_GTE?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  species_LT?: InputMaybe<Scalars["Int"]>;
  species_LTE?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  tissueLocation_EQUAL?: InputMaybe<Scalars["String"]>;
  tissueLocation_GT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_GTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  tubeId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  tubeId_EQUAL?: InputMaybe<Scalars["String"]>;
  tubeId_GT?: InputMaybe<Scalars["Int"]>;
  tubeId_GTE?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  tubeId_LT?: InputMaybe<Scalars["Int"]>;
  tubeId_LTE?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_EQUAL?: InputMaybe<Scalars["String"]>;
  tumorOrNormal_GT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_GTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  validationReport_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  validationReport_EQUAL?: InputMaybe<Scalars["String"]>;
  validationReport_GT?: InputMaybe<Scalars["Int"]>;
  validationReport_GTE?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  validationReport_LT?: InputMaybe<Scalars["Int"]>;
  validationReport_LTE?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type CohortHasCohortSampleSamplesRelationship = {
  __typename?: "CohortHasCohortSampleSamplesRelationship";
  cursor: Scalars["String"];
  node: Sample;
};

export type CohortHasCohortSampleSamplesUpdateConnectionInput = {
  node?: InputMaybe<SampleUpdateInput>;
};

export type CohortHasCohortSampleSamplesUpdateFieldInput = {
  connect?: InputMaybe<Array<CohortHasCohortSampleSamplesConnectFieldInput>>;
  create?: InputMaybe<Array<CohortHasCohortSampleSamplesCreateFieldInput>>;
  delete?: InputMaybe<Array<CohortHasCohortSampleSamplesDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<CohortHasCohortSampleSamplesDisconnectFieldInput>
  >;
  update?: InputMaybe<CohortHasCohortSampleSamplesUpdateConnectionInput>;
  where?: InputMaybe<CohortHasCohortSampleSamplesConnectionWhere>;
};

export type CohortOptions = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more CohortSort objects to sort Cohorts by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CohortSort>>;
};

export type CohortRelationInput = {
  hasCohortCompleteCohortCompletes?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesCreateFieldInput>
  >;
  hasCohortSampleSamples?: InputMaybe<
    Array<CohortHasCohortSampleSamplesCreateFieldInput>
  >;
};

export type CohortSampleHasCohortSampleSamplesAggregationSelection = {
  __typename?: "CohortSampleHasCohortSampleSamplesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<CohortSampleHasCohortSampleSamplesNodeAggregateSelection>;
};

export type CohortSampleHasCohortSampleSamplesNodeAggregateSelection = {
  __typename?: "CohortSampleHasCohortSampleSamplesNodeAggregateSelection";
  accessLevel: StringAggregateSelectionNullable;
  additionalProperties: StringAggregateSelectionNullable;
  baitSet: StringAggregateSelectionNullable;
  bamCompleteDate: StringAggregateSelectionNullable;
  bamCompleteStatus: StringAggregateSelectionNullable;
  billedBy: StringAggregateSelectionNullable;
  cancerType: StringAggregateSelectionNullable;
  cancerTypeDetailed: StringAggregateSelectionNullable;
  cfDNA2dBarcode: StringAggregateSelectionNullable;
  cmoInfoIgoId: StringAggregateSelectionNullable;
  cmoPatientId: StringAggregateSelectionNullable;
  cmoSampleIdFields: StringAggregateSelectionNullable;
  cmoSampleName: StringAggregateSelectionNullable;
  collectionYear: StringAggregateSelectionNullable;
  costCenter: StringAggregateSelectionNullable;
  custodianInformation: StringAggregateSelectionNullable;
  datasource: StringAggregateSelectionNonNullable;
  dmpPatientId: StringAggregateSelectionNullable;
  embargoDate: StringAggregateSelectionNullable;
  genePanel: StringAggregateSelectionNullable;
  igoRequestId: StringAggregateSelectionNullable;
  importDate: StringAggregateSelectionNullable;
  initialPipelineRunDate: StringAggregateSelectionNullable;
  investigatorSampleId: StringAggregateSelectionNullable;
  libraries: StringAggregateSelectionNullable;
  mafCompleteDate: StringAggregateSelectionNullable;
  mafCompleteNormalPrimaryId: StringAggregateSelectionNullable;
  mafCompleteStatus: StringAggregateSelectionNullable;
  oncotreeCode: StringAggregateSelectionNullable;
  preservation: StringAggregateSelectionNullable;
  primaryId: StringAggregateSelectionNullable;
  qcCompleteDate: StringAggregateSelectionNullable;
  qcCompleteReason: StringAggregateSelectionNullable;
  qcCompleteResult: StringAggregateSelectionNullable;
  qcCompleteStatus: StringAggregateSelectionNullable;
  qcReports: StringAggregateSelectionNullable;
  recipe: StringAggregateSelectionNullable;
  sampleCategory: StringAggregateSelectionNonNullable;
  sampleClass: StringAggregateSelectionNonNullable;
  sampleName: StringAggregateSelectionNullable;
  sampleOrigin: StringAggregateSelectionNullable;
  sampleType: StringAggregateSelectionNullable;
  sex: StringAggregateSelectionNullable;
  smileSampleId: StringAggregateSelectionNonNullable;
  smileTempoId: StringAggregateSelectionNullable;
  species: StringAggregateSelectionNullable;
  tissueLocation: StringAggregateSelectionNullable;
  tubeId: StringAggregateSelectionNullable;
  tumorOrNormal: StringAggregateSelectionNullable;
  validationReport: StringAggregateSelectionNullable;
};

/** Fields to sort Cohorts by. The order in which sorts are applied is not guaranteed when specifying many fields in one CohortSort object. */
export type CohortSort = {
  billed?: InputMaybe<SortDirection>;
  cohortId?: InputMaybe<SortDirection>;
  endUsers?: InputMaybe<SortDirection>;
  initialCohortDeliveryDate?: InputMaybe<SortDirection>;
  pmUsers?: InputMaybe<SortDirection>;
  projectSubtitle?: InputMaybe<SortDirection>;
  projectTitle?: InputMaybe<SortDirection>;
  status?: InputMaybe<SortDirection>;
  totalSampleCount?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
};

export type CohortUpdateInput = {
  billed?: InputMaybe<Scalars["String"]>;
  cohortId?: InputMaybe<Scalars["String"]>;
  endUsers?: InputMaybe<Scalars["String"]>;
  hasCohortCompleteCohortCompletes?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesUpdateFieldInput>
  >;
  hasCohortSampleSamples?: InputMaybe<
    Array<CohortHasCohortSampleSamplesUpdateFieldInput>
  >;
  initialCohortDeliveryDate?: InputMaybe<Scalars["String"]>;
  pmUsers?: InputMaybe<Scalars["String"]>;
  projectSubtitle?: InputMaybe<Scalars["String"]>;
  projectTitle?: InputMaybe<Scalars["String"]>;
  smileSampleIds?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  smileSampleIds_POP?: InputMaybe<Scalars["Int"]>;
  smileSampleIds_PUSH?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  status?: InputMaybe<Scalars["String"]>;
  totalSampleCount?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_DECREMENT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_INCREMENT?: InputMaybe<Scalars["Int"]>;
  type?: InputMaybe<Scalars["String"]>;
};

export type CohortWhere = {
  AND?: InputMaybe<Array<CohortWhere>>;
  OR?: InputMaybe<Array<CohortWhere>>;
  billed?: InputMaybe<Scalars["String"]>;
  billed_CONTAINS?: InputMaybe<Scalars["String"]>;
  billed_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  billed_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  billed_NOT?: InputMaybe<Scalars["String"]>;
  billed_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  billed_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  billed_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  billed_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  billed_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cohortId?: InputMaybe<Scalars["String"]>;
  cohortId_CONTAINS?: InputMaybe<Scalars["String"]>;
  cohortId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cohortId_IN?: InputMaybe<Array<Scalars["String"]>>;
  cohortId_NOT?: InputMaybe<Scalars["String"]>;
  cohortId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  cohortId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cohortId_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  cohortId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cohortId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  endUsers?: InputMaybe<Scalars["String"]>;
  endUsers_CONTAINS?: InputMaybe<Scalars["String"]>;
  endUsers_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  endUsers_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  endUsers_NOT?: InputMaybe<Scalars["String"]>;
  endUsers_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  endUsers_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  endUsers_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  endUsers_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  endUsers_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  hasCohortCompleteCohortCompletesAggregate?: InputMaybe<CohortHasCohortCompleteCohortCompletesAggregateInput>;
  hasCohortCompleteCohortCompletesConnection_ALL?: InputMaybe<CohortHasCohortCompleteCohortCompletesConnectionWhere>;
  hasCohortCompleteCohortCompletesConnection_NONE?: InputMaybe<CohortHasCohortCompleteCohortCompletesConnectionWhere>;
  hasCohortCompleteCohortCompletesConnection_SINGLE?: InputMaybe<CohortHasCohortCompleteCohortCompletesConnectionWhere>;
  hasCohortCompleteCohortCompletesConnection_SOME?: InputMaybe<CohortHasCohortCompleteCohortCompletesConnectionWhere>;
  /** Return Cohorts where all of the related CohortCompletes match this filter */
  hasCohortCompleteCohortCompletes_ALL?: InputMaybe<CohortCompleteWhere>;
  /** Return Cohorts where none of the related CohortCompletes match this filter */
  hasCohortCompleteCohortCompletes_NONE?: InputMaybe<CohortCompleteWhere>;
  /** Return Cohorts where one of the related CohortCompletes match this filter */
  hasCohortCompleteCohortCompletes_SINGLE?: InputMaybe<CohortCompleteWhere>;
  /** Return Cohorts where some of the related CohortCompletes match this filter */
  hasCohortCompleteCohortCompletes_SOME?: InputMaybe<CohortCompleteWhere>;
  hasCohortSampleSamplesAggregate?: InputMaybe<CohortHasCohortSampleSamplesAggregateInput>;
  hasCohortSampleSamplesConnection_ALL?: InputMaybe<CohortHasCohortSampleSamplesConnectionWhere>;
  hasCohortSampleSamplesConnection_NONE?: InputMaybe<CohortHasCohortSampleSamplesConnectionWhere>;
  hasCohortSampleSamplesConnection_SINGLE?: InputMaybe<CohortHasCohortSampleSamplesConnectionWhere>;
  hasCohortSampleSamplesConnection_SOME?: InputMaybe<CohortHasCohortSampleSamplesConnectionWhere>;
  /** Return Cohorts where all of the related Samples match this filter */
  hasCohortSampleSamples_ALL?: InputMaybe<SampleWhere>;
  /** Return Cohorts where none of the related Samples match this filter */
  hasCohortSampleSamples_NONE?: InputMaybe<SampleWhere>;
  /** Return Cohorts where one of the related Samples match this filter */
  hasCohortSampleSamples_SINGLE?: InputMaybe<SampleWhere>;
  /** Return Cohorts where some of the related Samples match this filter */
  hasCohortSampleSamples_SOME?: InputMaybe<SampleWhere>;
  initialCohortDeliveryDate?: InputMaybe<Scalars["String"]>;
  initialCohortDeliveryDate_CONTAINS?: InputMaybe<Scalars["String"]>;
  initialCohortDeliveryDate_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  initialCohortDeliveryDate_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >;
  initialCohortDeliveryDate_NOT?: InputMaybe<Scalars["String"]>;
  initialCohortDeliveryDate_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  initialCohortDeliveryDate_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  initialCohortDeliveryDate_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >;
  initialCohortDeliveryDate_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  initialCohortDeliveryDate_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  pmUsers?: InputMaybe<Scalars["String"]>;
  pmUsers_CONTAINS?: InputMaybe<Scalars["String"]>;
  pmUsers_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  pmUsers_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  pmUsers_NOT?: InputMaybe<Scalars["String"]>;
  pmUsers_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  pmUsers_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  pmUsers_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  pmUsers_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  pmUsers_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  projectSubtitle?: InputMaybe<Scalars["String"]>;
  projectSubtitle_CONTAINS?: InputMaybe<Scalars["String"]>;
  projectSubtitle_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  projectSubtitle_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  projectSubtitle_NOT?: InputMaybe<Scalars["String"]>;
  projectSubtitle_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  projectSubtitle_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  projectSubtitle_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  projectSubtitle_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  projectSubtitle_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  projectTitle?: InputMaybe<Scalars["String"]>;
  projectTitle_CONTAINS?: InputMaybe<Scalars["String"]>;
  projectTitle_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  projectTitle_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  projectTitle_NOT?: InputMaybe<Scalars["String"]>;
  projectTitle_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  projectTitle_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  projectTitle_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  projectTitle_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  projectTitle_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  smileSampleIds?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  smileSampleIds_INCLUDES?: InputMaybe<Scalars["String"]>;
  smileSampleIds_NOT?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  smileSampleIds_NOT_INCLUDES?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  status_CONTAINS?: InputMaybe<Scalars["String"]>;
  status_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  status_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  status_NOT?: InputMaybe<Scalars["String"]>;
  status_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  status_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  status_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  status_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  status_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  totalSampleCount?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  totalSampleCount_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_NOT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  type?: InputMaybe<Scalars["String"]>;
  type_CONTAINS?: InputMaybe<Scalars["String"]>;
  type_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  type_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  type_NOT?: InputMaybe<Scalars["String"]>;
  type_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  type_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  type_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  type_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  type_STARTS_WITH?: InputMaybe<Scalars["String"]>;
};

export type CohortsConnection = {
  __typename?: "CohortsConnection";
  edges: Array<CohortEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type CreateBamCompletesMutationResponse = {
  __typename?: "CreateBamCompletesMutationResponse";
  bamCompletes: Array<BamComplete>;
  info: CreateInfo;
};

export type CreateCohortCompletesMutationResponse = {
  __typename?: "CreateCohortCompletesMutationResponse";
  cohortCompletes: Array<CohortComplete>;
  info: CreateInfo;
};

export type CreateCohortsMutationResponse = {
  __typename?: "CreateCohortsMutationResponse";
  cohorts: Array<Cohort>;
  info: CreateInfo;
};

export type CreateInfo = {
  __typename?: "CreateInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesCreated: Scalars["Int"];
  relationshipsCreated: Scalars["Int"];
};

export type CreateMafCompletesMutationResponse = {
  __typename?: "CreateMafCompletesMutationResponse";
  info: CreateInfo;
  mafCompletes: Array<MafComplete>;
};

export type CreatePatientAliasesMutationResponse = {
  __typename?: "CreatePatientAliasesMutationResponse";
  info: CreateInfo;
  patientAliases: Array<PatientAlias>;
};

export type CreatePatientsMutationResponse = {
  __typename?: "CreatePatientsMutationResponse";
  info: CreateInfo;
  patients: Array<Patient>;
};

export type CreateProjectsMutationResponse = {
  __typename?: "CreateProjectsMutationResponse";
  info: CreateInfo;
  projects: Array<Project>;
};

export type CreateQcCompletesMutationResponse = {
  __typename?: "CreateQcCompletesMutationResponse";
  info: CreateInfo;
  qcCompletes: Array<QcComplete>;
};

export type CreateRequestMetadataMutationResponse = {
  __typename?: "CreateRequestMetadataMutationResponse";
  info: CreateInfo;
  requestMetadata: Array<RequestMetadata>;
};

export type CreateRequestsMutationResponse = {
  __typename?: "CreateRequestsMutationResponse";
  info: CreateInfo;
  requests: Array<Request>;
};

export type CreateSampleAliasesMutationResponse = {
  __typename?: "CreateSampleAliasesMutationResponse";
  info: CreateInfo;
  sampleAliases: Array<SampleAlias>;
};

export type CreateSampleMetadataMutationResponse = {
  __typename?: "CreateSampleMetadataMutationResponse";
  info: CreateInfo;
  sampleMetadata: Array<SampleMetadata>;
};

export type CreateSamplesMutationResponse = {
  __typename?: "CreateSamplesMutationResponse";
  info: CreateInfo;
  samples: Array<Sample>;
};

export type CreateStatusesMutationResponse = {
  __typename?: "CreateStatusesMutationResponse";
  info: CreateInfo;
  statuses: Array<Status>;
};

export type CreateTemposMutationResponse = {
  __typename?: "CreateTemposMutationResponse";
  info: CreateInfo;
  tempos: Array<Tempo>;
};

export type DeleteInfo = {
  __typename?: "DeleteInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesDeleted: Scalars["Int"];
  relationshipsDeleted: Scalars["Int"];
};

export type IntAggregateSelectionNullable = {
  __typename?: "IntAggregateSelectionNullable";
  average?: Maybe<Scalars["Float"]>;
  max?: Maybe<Scalars["Int"]>;
  min?: Maybe<Scalars["Int"]>;
  sum?: Maybe<Scalars["Int"]>;
};

export type MafComplete = {
  __typename?: "MafComplete";
  date: Scalars["String"];
  normalPrimaryId: Scalars["String"];
  status: Scalars["String"];
  temposHasEvent: Array<Tempo>;
  temposHasEventAggregate?: Maybe<MafCompleteTempoTemposHasEventAggregationSelection>;
  temposHasEventConnection: MafCompleteTemposHasEventConnection;
};

export type MafCompleteTemposHasEventArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<TempoOptions>;
  where?: InputMaybe<TempoWhere>;
};

export type MafCompleteTemposHasEventAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<TempoWhere>;
};

export type MafCompleteTemposHasEventConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<MafCompleteTemposHasEventConnectionSort>>;
  where?: InputMaybe<MafCompleteTemposHasEventConnectionWhere>;
};

export type MafCompleteAggregateSelection = {
  __typename?: "MafCompleteAggregateSelection";
  count: Scalars["Int"];
  date: StringAggregateSelectionNonNullable;
  normalPrimaryId: StringAggregateSelectionNonNullable;
  status: StringAggregateSelectionNonNullable;
};

export type MafCompleteConnectInput = {
  temposHasEvent?: InputMaybe<
    Array<MafCompleteTemposHasEventConnectFieldInput>
  >;
};

export type MafCompleteConnectWhere = {
  node: MafCompleteWhere;
};

export type MafCompleteCreateInput = {
  date: Scalars["String"];
  normalPrimaryId: Scalars["String"];
  status: Scalars["String"];
  temposHasEvent?: InputMaybe<MafCompleteTemposHasEventFieldInput>;
};

export type MafCompleteDeleteInput = {
  temposHasEvent?: InputMaybe<Array<MafCompleteTemposHasEventDeleteFieldInput>>;
};

export type MafCompleteDisconnectInput = {
  temposHasEvent?: InputMaybe<
    Array<MafCompleteTemposHasEventDisconnectFieldInput>
  >;
};

export type MafCompleteEdge = {
  __typename?: "MafCompleteEdge";
  cursor: Scalars["String"];
  node: MafComplete;
};

export type MafCompleteOptions = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more MafCompleteSort objects to sort MafCompletes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MafCompleteSort>>;
};

export type MafCompleteRelationInput = {
  temposHasEvent?: InputMaybe<Array<MafCompleteTemposHasEventCreateFieldInput>>;
};

/** Fields to sort MafCompletes by. The order in which sorts are applied is not guaranteed when specifying many fields in one MafCompleteSort object. */
export type MafCompleteSort = {
  date?: InputMaybe<SortDirection>;
  normalPrimaryId?: InputMaybe<SortDirection>;
  status?: InputMaybe<SortDirection>;
};

export type MafCompleteTempoTemposHasEventAggregationSelection = {
  __typename?: "MafCompleteTempoTemposHasEventAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<MafCompleteTempoTemposHasEventNodeAggregateSelection>;
};

export type MafCompleteTempoTemposHasEventNodeAggregateSelection = {
  __typename?: "MafCompleteTempoTemposHasEventNodeAggregateSelection";
  accessLevel: StringAggregateSelectionNullable;
  billedBy: StringAggregateSelectionNullable;
  costCenter: StringAggregateSelectionNullable;
  custodianInformation: StringAggregateSelectionNullable;
  smileTempoId: StringAggregateSelectionNonNullable;
};

export type MafCompleteTemposHasEventAggregateInput = {
  AND?: InputMaybe<Array<MafCompleteTemposHasEventAggregateInput>>;
  OR?: InputMaybe<Array<MafCompleteTemposHasEventAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<MafCompleteTemposHasEventNodeAggregationWhereInput>;
};

export type MafCompleteTemposHasEventConnectFieldInput = {
  connect?: InputMaybe<Array<TempoConnectInput>>;
  where?: InputMaybe<TempoConnectWhere>;
};

export type MafCompleteTemposHasEventConnection = {
  __typename?: "MafCompleteTemposHasEventConnection";
  edges: Array<MafCompleteTemposHasEventRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type MafCompleteTemposHasEventConnectionSort = {
  node?: InputMaybe<TempoSort>;
};

export type MafCompleteTemposHasEventConnectionWhere = {
  AND?: InputMaybe<Array<MafCompleteTemposHasEventConnectionWhere>>;
  OR?: InputMaybe<Array<MafCompleteTemposHasEventConnectionWhere>>;
  node?: InputMaybe<TempoWhere>;
  node_NOT?: InputMaybe<TempoWhere>;
};

export type MafCompleteTemposHasEventCreateFieldInput = {
  node: TempoCreateInput;
};

export type MafCompleteTemposHasEventDeleteFieldInput = {
  delete?: InputMaybe<TempoDeleteInput>;
  where?: InputMaybe<MafCompleteTemposHasEventConnectionWhere>;
};

export type MafCompleteTemposHasEventDisconnectFieldInput = {
  disconnect?: InputMaybe<TempoDisconnectInput>;
  where?: InputMaybe<MafCompleteTemposHasEventConnectionWhere>;
};

export type MafCompleteTemposHasEventFieldInput = {
  connect?: InputMaybe<Array<MafCompleteTemposHasEventConnectFieldInput>>;
  create?: InputMaybe<Array<MafCompleteTemposHasEventCreateFieldInput>>;
};

export type MafCompleteTemposHasEventNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MafCompleteTemposHasEventNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MafCompleteTemposHasEventNodeAggregationWhereInput>>;
  accessLevel_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  accessLevel_EQUAL?: InputMaybe<Scalars["String"]>;
  accessLevel_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  billedBy_EQUAL?: InputMaybe<Scalars["String"]>;
  billedBy_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  costCenter_EQUAL?: InputMaybe<Scalars["String"]>;
  costCenter_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  custodianInformation_EQUAL?: InputMaybe<Scalars["String"]>;
  custodianInformation_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  smileTempoId_EQUAL?: InputMaybe<Scalars["String"]>;
  smileTempoId_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type MafCompleteTemposHasEventRelationship = {
  __typename?: "MafCompleteTemposHasEventRelationship";
  cursor: Scalars["String"];
  node: Tempo;
};

export type MafCompleteTemposHasEventUpdateConnectionInput = {
  node?: InputMaybe<TempoUpdateInput>;
};

export type MafCompleteTemposHasEventUpdateFieldInput = {
  connect?: InputMaybe<Array<MafCompleteTemposHasEventConnectFieldInput>>;
  create?: InputMaybe<Array<MafCompleteTemposHasEventCreateFieldInput>>;
  delete?: InputMaybe<Array<MafCompleteTemposHasEventDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MafCompleteTemposHasEventDisconnectFieldInput>>;
  update?: InputMaybe<MafCompleteTemposHasEventUpdateConnectionInput>;
  where?: InputMaybe<MafCompleteTemposHasEventConnectionWhere>;
};

export type MafCompleteUpdateInput = {
  date?: InputMaybe<Scalars["String"]>;
  normalPrimaryId?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  temposHasEvent?: InputMaybe<Array<MafCompleteTemposHasEventUpdateFieldInput>>;
};

export type MafCompleteWhere = {
  AND?: InputMaybe<Array<MafCompleteWhere>>;
  OR?: InputMaybe<Array<MafCompleteWhere>>;
  date?: InputMaybe<Scalars["String"]>;
  date_CONTAINS?: InputMaybe<Scalars["String"]>;
  date_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  date_IN?: InputMaybe<Array<Scalars["String"]>>;
  date_NOT?: InputMaybe<Scalars["String"]>;
  date_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  date_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  date_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  date_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  date_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  normalPrimaryId?: InputMaybe<Scalars["String"]>;
  normalPrimaryId_CONTAINS?: InputMaybe<Scalars["String"]>;
  normalPrimaryId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  normalPrimaryId_IN?: InputMaybe<Array<Scalars["String"]>>;
  normalPrimaryId_NOT?: InputMaybe<Scalars["String"]>;
  normalPrimaryId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  normalPrimaryId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  normalPrimaryId_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  normalPrimaryId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  normalPrimaryId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  status_CONTAINS?: InputMaybe<Scalars["String"]>;
  status_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  status_IN?: InputMaybe<Array<Scalars["String"]>>;
  status_NOT?: InputMaybe<Scalars["String"]>;
  status_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  status_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  status_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  status_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  status_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  temposHasEventAggregate?: InputMaybe<MafCompleteTemposHasEventAggregateInput>;
  temposHasEventConnection_ALL?: InputMaybe<MafCompleteTemposHasEventConnectionWhere>;
  temposHasEventConnection_NONE?: InputMaybe<MafCompleteTemposHasEventConnectionWhere>;
  temposHasEventConnection_SINGLE?: InputMaybe<MafCompleteTemposHasEventConnectionWhere>;
  temposHasEventConnection_SOME?: InputMaybe<MafCompleteTemposHasEventConnectionWhere>;
  /** Return MafCompletes where all of the related Tempos match this filter */
  temposHasEvent_ALL?: InputMaybe<TempoWhere>;
  /** Return MafCompletes where none of the related Tempos match this filter */
  temposHasEvent_NONE?: InputMaybe<TempoWhere>;
  /** Return MafCompletes where one of the related Tempos match this filter */
  temposHasEvent_SINGLE?: InputMaybe<TempoWhere>;
  /** Return MafCompletes where some of the related Tempos match this filter */
  temposHasEvent_SOME?: InputMaybe<TempoWhere>;
};

export type MafCompletesConnection = {
  __typename?: "MafCompletesConnection";
  edges: Array<MafCompleteEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type Mutation = {
  __typename?: "Mutation";
  createBamCompletes: CreateBamCompletesMutationResponse;
  createCohortCompletes: CreateCohortCompletesMutationResponse;
  createCohorts: CreateCohortsMutationResponse;
  createMafCompletes: CreateMafCompletesMutationResponse;
  createPatientAliases: CreatePatientAliasesMutationResponse;
  createPatients: CreatePatientsMutationResponse;
  createProjects: CreateProjectsMutationResponse;
  createQcCompletes: CreateQcCompletesMutationResponse;
  createRequestMetadata: CreateRequestMetadataMutationResponse;
  createRequests: CreateRequestsMutationResponse;
  createSampleAliases: CreateSampleAliasesMutationResponse;
  createSampleMetadata: CreateSampleMetadataMutationResponse;
  createSamples: CreateSamplesMutationResponse;
  createStatuses: CreateStatusesMutationResponse;
  createTempos: CreateTemposMutationResponse;
  deleteBamCompletes: DeleteInfo;
  deleteCohortCompletes: DeleteInfo;
  deleteCohorts: DeleteInfo;
  deleteMafCompletes: DeleteInfo;
  deletePatientAliases: DeleteInfo;
  deletePatients: DeleteInfo;
  deleteProjects: DeleteInfo;
  deleteQcCompletes: DeleteInfo;
  deleteRequestMetadata: DeleteInfo;
  deleteRequests: DeleteInfo;
  deleteSampleAliases: DeleteInfo;
  deleteSampleMetadata: DeleteInfo;
  deleteSamples: DeleteInfo;
  deleteStatuses: DeleteInfo;
  deleteTempos: DeleteInfo;
  updateBamCompletes: UpdateBamCompletesMutationResponse;
  updateCohortCompletes: UpdateCohortCompletesMutationResponse;
  updateCohorts: UpdateCohortsMutationResponse;
  updateMafCompletes: UpdateMafCompletesMutationResponse;
  updatePatientAliases: UpdatePatientAliasesMutationResponse;
  updatePatients: UpdatePatientsMutationResponse;
  updateProjects: UpdateProjectsMutationResponse;
  updateQcCompletes: UpdateQcCompletesMutationResponse;
  updateRequestMetadata: UpdateRequestMetadataMutationResponse;
  updateRequests: UpdateRequestsMutationResponse;
  updateSampleAliases: UpdateSampleAliasesMutationResponse;
  updateSampleMetadata: UpdateSampleMetadataMutationResponse;
  updateSamples: UpdateSamplesMutationResponse;
  updateStatuses: UpdateStatusesMutationResponse;
  updateTempos: UpdateTemposMutationResponse;
};

export type MutationCreateBamCompletesArgs = {
  input: Array<BamCompleteCreateInput>;
};

export type MutationCreateCohortCompletesArgs = {
  input: Array<CohortCompleteCreateInput>;
};

export type MutationCreateCohortsArgs = {
  input: Array<CohortCreateInput>;
};

export type MutationCreateMafCompletesArgs = {
  input: Array<MafCompleteCreateInput>;
};

export type MutationCreatePatientAliasesArgs = {
  input: Array<PatientAliasCreateInput>;
};

export type MutationCreatePatientsArgs = {
  input: Array<PatientCreateInput>;
};

export type MutationCreateProjectsArgs = {
  input: Array<ProjectCreateInput>;
};

export type MutationCreateQcCompletesArgs = {
  input: Array<QcCompleteCreateInput>;
};

export type MutationCreateRequestMetadataArgs = {
  input: Array<RequestMetadataCreateInput>;
};

export type MutationCreateRequestsArgs = {
  input: Array<RequestCreateInput>;
};

export type MutationCreateSampleAliasesArgs = {
  input: Array<SampleAliasCreateInput>;
};

export type MutationCreateSampleMetadataArgs = {
  input: Array<SampleMetadataCreateInput>;
};

export type MutationCreateSamplesArgs = {
  input: Array<SampleCreateInput>;
};

export type MutationCreateStatusesArgs = {
  input: Array<StatusCreateInput>;
};

export type MutationCreateTemposArgs = {
  input: Array<TempoCreateInput>;
};

export type MutationDeleteBamCompletesArgs = {
  delete?: InputMaybe<BamCompleteDeleteInput>;
  where?: InputMaybe<BamCompleteWhere>;
};

export type MutationDeleteCohortCompletesArgs = {
  delete?: InputMaybe<CohortCompleteDeleteInput>;
  where?: InputMaybe<CohortCompleteWhere>;
};

export type MutationDeleteCohortsArgs = {
  delete?: InputMaybe<CohortDeleteInput>;
  where?: InputMaybe<CohortWhere>;
};

export type MutationDeleteMafCompletesArgs = {
  delete?: InputMaybe<MafCompleteDeleteInput>;
  where?: InputMaybe<MafCompleteWhere>;
};

export type MutationDeletePatientAliasesArgs = {
  delete?: InputMaybe<PatientAliasDeleteInput>;
  where?: InputMaybe<PatientAliasWhere>;
};

export type MutationDeletePatientsArgs = {
  delete?: InputMaybe<PatientDeleteInput>;
  where?: InputMaybe<PatientWhere>;
};

export type MutationDeleteProjectsArgs = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<ProjectWhere>;
};

export type MutationDeleteQcCompletesArgs = {
  delete?: InputMaybe<QcCompleteDeleteInput>;
  where?: InputMaybe<QcCompleteWhere>;
};

export type MutationDeleteRequestMetadataArgs = {
  delete?: InputMaybe<RequestMetadataDeleteInput>;
  where?: InputMaybe<RequestMetadataWhere>;
};

export type MutationDeleteRequestsArgs = {
  delete?: InputMaybe<RequestDeleteInput>;
  where?: InputMaybe<RequestWhere>;
};

export type MutationDeleteSampleAliasesArgs = {
  delete?: InputMaybe<SampleAliasDeleteInput>;
  where?: InputMaybe<SampleAliasWhere>;
};

export type MutationDeleteSampleMetadataArgs = {
  delete?: InputMaybe<SampleMetadataDeleteInput>;
  where?: InputMaybe<SampleMetadataWhere>;
};

export type MutationDeleteSamplesArgs = {
  delete?: InputMaybe<SampleDeleteInput>;
  where?: InputMaybe<SampleWhere>;
};

export type MutationDeleteStatusesArgs = {
  delete?: InputMaybe<StatusDeleteInput>;
  where?: InputMaybe<StatusWhere>;
};

export type MutationDeleteTemposArgs = {
  delete?: InputMaybe<TempoDeleteInput>;
  where?: InputMaybe<TempoWhere>;
};

export type MutationUpdateBamCompletesArgs = {
  connect?: InputMaybe<BamCompleteConnectInput>;
  create?: InputMaybe<BamCompleteRelationInput>;
  delete?: InputMaybe<BamCompleteDeleteInput>;
  disconnect?: InputMaybe<BamCompleteDisconnectInput>;
  update?: InputMaybe<BamCompleteUpdateInput>;
  where?: InputMaybe<BamCompleteWhere>;
};

export type MutationUpdateCohortCompletesArgs = {
  connect?: InputMaybe<CohortCompleteConnectInput>;
  create?: InputMaybe<CohortCompleteRelationInput>;
  delete?: InputMaybe<CohortCompleteDeleteInput>;
  disconnect?: InputMaybe<CohortCompleteDisconnectInput>;
  update?: InputMaybe<CohortCompleteUpdateInput>;
  where?: InputMaybe<CohortCompleteWhere>;
};

export type MutationUpdateCohortsArgs = {
  connect?: InputMaybe<CohortConnectInput>;
  create?: InputMaybe<CohortRelationInput>;
  delete?: InputMaybe<CohortDeleteInput>;
  disconnect?: InputMaybe<CohortDisconnectInput>;
  update?: InputMaybe<CohortUpdateInput>;
  where?: InputMaybe<CohortWhere>;
};

export type MutationUpdateMafCompletesArgs = {
  connect?: InputMaybe<MafCompleteConnectInput>;
  create?: InputMaybe<MafCompleteRelationInput>;
  delete?: InputMaybe<MafCompleteDeleteInput>;
  disconnect?: InputMaybe<MafCompleteDisconnectInput>;
  update?: InputMaybe<MafCompleteUpdateInput>;
  where?: InputMaybe<MafCompleteWhere>;
};

export type MutationUpdatePatientAliasesArgs = {
  connect?: InputMaybe<PatientAliasConnectInput>;
  create?: InputMaybe<PatientAliasRelationInput>;
  delete?: InputMaybe<PatientAliasDeleteInput>;
  disconnect?: InputMaybe<PatientAliasDisconnectInput>;
  update?: InputMaybe<PatientAliasUpdateInput>;
  where?: InputMaybe<PatientAliasWhere>;
};

export type MutationUpdatePatientsArgs = {
  connect?: InputMaybe<PatientConnectInput>;
  create?: InputMaybe<PatientRelationInput>;
  delete?: InputMaybe<PatientDeleteInput>;
  disconnect?: InputMaybe<PatientDisconnectInput>;
  update?: InputMaybe<PatientUpdateInput>;
  where?: InputMaybe<PatientWhere>;
};

export type MutationUpdateProjectsArgs = {
  connect?: InputMaybe<ProjectConnectInput>;
  create?: InputMaybe<ProjectRelationInput>;
  delete?: InputMaybe<ProjectDeleteInput>;
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  update?: InputMaybe<ProjectUpdateInput>;
  where?: InputMaybe<ProjectWhere>;
};

export type MutationUpdateQcCompletesArgs = {
  connect?: InputMaybe<QcCompleteConnectInput>;
  create?: InputMaybe<QcCompleteRelationInput>;
  delete?: InputMaybe<QcCompleteDeleteInput>;
  disconnect?: InputMaybe<QcCompleteDisconnectInput>;
  update?: InputMaybe<QcCompleteUpdateInput>;
  where?: InputMaybe<QcCompleteWhere>;
};

export type MutationUpdateRequestMetadataArgs = {
  connect?: InputMaybe<RequestMetadataConnectInput>;
  create?: InputMaybe<RequestMetadataRelationInput>;
  delete?: InputMaybe<RequestMetadataDeleteInput>;
  disconnect?: InputMaybe<RequestMetadataDisconnectInput>;
  update?: InputMaybe<RequestMetadataUpdateInput>;
  where?: InputMaybe<RequestMetadataWhere>;
};

export type MutationUpdateRequestsArgs = {
  connect?: InputMaybe<RequestConnectInput>;
  create?: InputMaybe<RequestRelationInput>;
  delete?: InputMaybe<RequestDeleteInput>;
  disconnect?: InputMaybe<RequestDisconnectInput>;
  update?: InputMaybe<RequestUpdateInput>;
  where?: InputMaybe<RequestWhere>;
};

export type MutationUpdateSampleAliasesArgs = {
  connect?: InputMaybe<SampleAliasConnectInput>;
  create?: InputMaybe<SampleAliasRelationInput>;
  delete?: InputMaybe<SampleAliasDeleteInput>;
  disconnect?: InputMaybe<SampleAliasDisconnectInput>;
  update?: InputMaybe<SampleAliasUpdateInput>;
  where?: InputMaybe<SampleAliasWhere>;
};

export type MutationUpdateSampleMetadataArgs = {
  connect?: InputMaybe<SampleMetadataConnectInput>;
  create?: InputMaybe<SampleMetadataRelationInput>;
  delete?: InputMaybe<SampleMetadataDeleteInput>;
  disconnect?: InputMaybe<SampleMetadataDisconnectInput>;
  update?: InputMaybe<SampleMetadataUpdateInput>;
  where?: InputMaybe<SampleMetadataWhere>;
};

export type MutationUpdateSamplesArgs = {
  connect?: InputMaybe<SampleConnectInput>;
  create?: InputMaybe<SampleRelationInput>;
  delete?: InputMaybe<SampleDeleteInput>;
  disconnect?: InputMaybe<SampleDisconnectInput>;
  update?: InputMaybe<SampleUpdateInput>;
  where?: InputMaybe<SampleWhere>;
};

export type MutationUpdateStatusesArgs = {
  connect?: InputMaybe<StatusConnectInput>;
  create?: InputMaybe<StatusRelationInput>;
  delete?: InputMaybe<StatusDeleteInput>;
  disconnect?: InputMaybe<StatusDisconnectInput>;
  update?: InputMaybe<StatusUpdateInput>;
  where?: InputMaybe<StatusWhere>;
};

export type MutationUpdateTemposArgs = {
  connect?: InputMaybe<TempoConnectInput>;
  create?: InputMaybe<TempoRelationInput>;
  delete?: InputMaybe<TempoDeleteInput>;
  disconnect?: InputMaybe<TempoDisconnectInput>;
  update?: InputMaybe<TempoUpdateInput>;
  where?: InputMaybe<TempoWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]>;
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
};

export type Patient = {
  __typename?: "Patient";
  cmoPatientId?: Maybe<Scalars["String"]>;
  cmoSampleIds?: Maybe<Scalars["String"]>;
  consentPartA?: Maybe<Scalars["String"]>;
  consentPartC?: Maybe<Scalars["String"]>;
  dmpPatientId?: Maybe<Scalars["String"]>;
  hasSampleSamples: Array<Sample>;
  hasSampleSamplesAggregate?: Maybe<PatientSampleHasSampleSamplesAggregationSelection>;
  hasSampleSamplesConnection: PatientHasSampleSamplesConnection;
  patientAliasesIsAlias: Array<PatientAlias>;
  patientAliasesIsAliasAggregate?: Maybe<PatientPatientAliasPatientAliasesIsAliasAggregationSelection>;
  patientAliasesIsAliasConnection: PatientPatientAliasesIsAliasConnection;
  smilePatientId: Scalars["String"];
  totalSampleCount?: Maybe<Scalars["Int"]>;
};

export type PatientHasSampleSamplesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<SampleOptions>;
  where?: InputMaybe<SampleWhere>;
};

export type PatientHasSampleSamplesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<SampleWhere>;
};

export type PatientHasSampleSamplesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<PatientHasSampleSamplesConnectionSort>>;
  where?: InputMaybe<PatientHasSampleSamplesConnectionWhere>;
};

export type PatientPatientAliasesIsAliasArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<PatientAliasOptions>;
  where?: InputMaybe<PatientAliasWhere>;
};

export type PatientPatientAliasesIsAliasAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<PatientAliasWhere>;
};

export type PatientPatientAliasesIsAliasConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<PatientPatientAliasesIsAliasConnectionSort>>;
  where?: InputMaybe<PatientPatientAliasesIsAliasConnectionWhere>;
};

export type PatientAggregateSelection = {
  __typename?: "PatientAggregateSelection";
  cmoPatientId: StringAggregateSelectionNullable;
  cmoSampleIds: StringAggregateSelectionNullable;
  consentPartA: StringAggregateSelectionNullable;
  consentPartC: StringAggregateSelectionNullable;
  count: Scalars["Int"];
  dmpPatientId: StringAggregateSelectionNullable;
  smilePatientId: StringAggregateSelectionNonNullable;
  totalSampleCount: IntAggregateSelectionNullable;
};

export type PatientAlias = {
  __typename?: "PatientAlias";
  isAliasPatients: Array<Patient>;
  isAliasPatientsAggregate?: Maybe<PatientAliasPatientIsAliasPatientsAggregationSelection>;
  isAliasPatientsConnection: PatientAliasIsAliasPatientsConnection;
  namespace: Scalars["String"];
  value: Scalars["String"];
};

export type PatientAliasIsAliasPatientsArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<PatientOptions>;
  where?: InputMaybe<PatientWhere>;
};

export type PatientAliasIsAliasPatientsAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<PatientWhere>;
};

export type PatientAliasIsAliasPatientsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<PatientAliasIsAliasPatientsConnectionSort>>;
  where?: InputMaybe<PatientAliasIsAliasPatientsConnectionWhere>;
};

export type PatientAliasAggregateSelection = {
  __typename?: "PatientAliasAggregateSelection";
  count: Scalars["Int"];
  namespace: StringAggregateSelectionNonNullable;
  value: StringAggregateSelectionNonNullable;
};

export type PatientAliasConnectInput = {
  isAliasPatients?: InputMaybe<
    Array<PatientAliasIsAliasPatientsConnectFieldInput>
  >;
};

export type PatientAliasConnectWhere = {
  node: PatientAliasWhere;
};

export type PatientAliasCreateInput = {
  isAliasPatients?: InputMaybe<PatientAliasIsAliasPatientsFieldInput>;
  namespace: Scalars["String"];
  value: Scalars["String"];
};

export type PatientAliasDeleteInput = {
  isAliasPatients?: InputMaybe<
    Array<PatientAliasIsAliasPatientsDeleteFieldInput>
  >;
};

export type PatientAliasDisconnectInput = {
  isAliasPatients?: InputMaybe<
    Array<PatientAliasIsAliasPatientsDisconnectFieldInput>
  >;
};

export type PatientAliasEdge = {
  __typename?: "PatientAliasEdge";
  cursor: Scalars["String"];
  node: PatientAlias;
};

export type PatientAliasIsAliasPatientsAggregateInput = {
  AND?: InputMaybe<Array<PatientAliasIsAliasPatientsAggregateInput>>;
  OR?: InputMaybe<Array<PatientAliasIsAliasPatientsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<PatientAliasIsAliasPatientsNodeAggregationWhereInput>;
};

export type PatientAliasIsAliasPatientsConnectFieldInput = {
  connect?: InputMaybe<Array<PatientConnectInput>>;
  where?: InputMaybe<PatientConnectWhere>;
};

export type PatientAliasIsAliasPatientsConnection = {
  __typename?: "PatientAliasIsAliasPatientsConnection";
  edges: Array<PatientAliasIsAliasPatientsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PatientAliasIsAliasPatientsConnectionSort = {
  node?: InputMaybe<PatientSort>;
};

export type PatientAliasIsAliasPatientsConnectionWhere = {
  AND?: InputMaybe<Array<PatientAliasIsAliasPatientsConnectionWhere>>;
  OR?: InputMaybe<Array<PatientAliasIsAliasPatientsConnectionWhere>>;
  node?: InputMaybe<PatientWhere>;
  node_NOT?: InputMaybe<PatientWhere>;
};

export type PatientAliasIsAliasPatientsCreateFieldInput = {
  node: PatientCreateInput;
};

export type PatientAliasIsAliasPatientsDeleteFieldInput = {
  delete?: InputMaybe<PatientDeleteInput>;
  where?: InputMaybe<PatientAliasIsAliasPatientsConnectionWhere>;
};

export type PatientAliasIsAliasPatientsDisconnectFieldInput = {
  disconnect?: InputMaybe<PatientDisconnectInput>;
  where?: InputMaybe<PatientAliasIsAliasPatientsConnectionWhere>;
};

export type PatientAliasIsAliasPatientsFieldInput = {
  connect?: InputMaybe<Array<PatientAliasIsAliasPatientsConnectFieldInput>>;
  create?: InputMaybe<Array<PatientAliasIsAliasPatientsCreateFieldInput>>;
};

export type PatientAliasIsAliasPatientsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PatientAliasIsAliasPatientsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PatientAliasIsAliasPatientsNodeAggregationWhereInput>>;
  cmoPatientId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoPatientId_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoSampleIds_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoSampleIds_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleIds_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoSampleIds_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleIds_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoSampleIds_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  consentPartA_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  consentPartA_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  consentPartA_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  consentPartA_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  consentPartA_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  consentPartA_EQUAL?: InputMaybe<Scalars["String"]>;
  consentPartA_GT?: InputMaybe<Scalars["Int"]>;
  consentPartA_GTE?: InputMaybe<Scalars["Int"]>;
  consentPartA_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  consentPartA_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  consentPartA_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  consentPartA_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  consentPartA_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  consentPartA_LT?: InputMaybe<Scalars["Int"]>;
  consentPartA_LTE?: InputMaybe<Scalars["Int"]>;
  consentPartA_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  consentPartA_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  consentPartA_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  consentPartA_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  consentPartA_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  consentPartC_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  consentPartC_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  consentPartC_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  consentPartC_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  consentPartC_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  consentPartC_EQUAL?: InputMaybe<Scalars["String"]>;
  consentPartC_GT?: InputMaybe<Scalars["Int"]>;
  consentPartC_GTE?: InputMaybe<Scalars["Int"]>;
  consentPartC_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  consentPartC_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  consentPartC_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  consentPartC_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  consentPartC_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  consentPartC_LT?: InputMaybe<Scalars["Int"]>;
  consentPartC_LTE?: InputMaybe<Scalars["Int"]>;
  consentPartC_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  consentPartC_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  consentPartC_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  consentPartC_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  consentPartC_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_EQUAL?: InputMaybe<Scalars["String"]>;
  dmpPatientId_GT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_GTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  smilePatientId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  smilePatientId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  smilePatientId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  smilePatientId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  smilePatientId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  smilePatientId_EQUAL?: InputMaybe<Scalars["String"]>;
  smilePatientId_GT?: InputMaybe<Scalars["Int"]>;
  smilePatientId_GTE?: InputMaybe<Scalars["Int"]>;
  smilePatientId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smilePatientId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  smilePatientId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  smilePatientId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  smilePatientId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  smilePatientId_LT?: InputMaybe<Scalars["Int"]>;
  smilePatientId_LTE?: InputMaybe<Scalars["Int"]>;
  smilePatientId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smilePatientId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  smilePatientId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  smilePatientId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  smilePatientId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_LTE?: InputMaybe<Scalars["Int"]>;
};

export type PatientAliasIsAliasPatientsRelationship = {
  __typename?: "PatientAliasIsAliasPatientsRelationship";
  cursor: Scalars["String"];
  node: Patient;
};

export type PatientAliasIsAliasPatientsUpdateConnectionInput = {
  node?: InputMaybe<PatientUpdateInput>;
};

export type PatientAliasIsAliasPatientsUpdateFieldInput = {
  connect?: InputMaybe<Array<PatientAliasIsAliasPatientsConnectFieldInput>>;
  create?: InputMaybe<Array<PatientAliasIsAliasPatientsCreateFieldInput>>;
  delete?: InputMaybe<Array<PatientAliasIsAliasPatientsDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<PatientAliasIsAliasPatientsDisconnectFieldInput>
  >;
  update?: InputMaybe<PatientAliasIsAliasPatientsUpdateConnectionInput>;
  where?: InputMaybe<PatientAliasIsAliasPatientsConnectionWhere>;
};

export type PatientAliasOptions = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more PatientAliasSort objects to sort PatientAliases by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PatientAliasSort>>;
};

export type PatientAliasPatientIsAliasPatientsAggregationSelection = {
  __typename?: "PatientAliasPatientIsAliasPatientsAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<PatientAliasPatientIsAliasPatientsNodeAggregateSelection>;
};

export type PatientAliasPatientIsAliasPatientsNodeAggregateSelection = {
  __typename?: "PatientAliasPatientIsAliasPatientsNodeAggregateSelection";
  cmoPatientId: StringAggregateSelectionNullable;
  cmoSampleIds: StringAggregateSelectionNullable;
  consentPartA: StringAggregateSelectionNullable;
  consentPartC: StringAggregateSelectionNullable;
  dmpPatientId: StringAggregateSelectionNullable;
  smilePatientId: StringAggregateSelectionNonNullable;
  totalSampleCount: IntAggregateSelectionNullable;
};

export type PatientAliasRelationInput = {
  isAliasPatients?: InputMaybe<
    Array<PatientAliasIsAliasPatientsCreateFieldInput>
  >;
};

/** Fields to sort PatientAliases by. The order in which sorts are applied is not guaranteed when specifying many fields in one PatientAliasSort object. */
export type PatientAliasSort = {
  namespace?: InputMaybe<SortDirection>;
  value?: InputMaybe<SortDirection>;
};

export type PatientAliasUpdateInput = {
  isAliasPatients?: InputMaybe<
    Array<PatientAliasIsAliasPatientsUpdateFieldInput>
  >;
  namespace?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["String"]>;
};

export type PatientAliasWhere = {
  AND?: InputMaybe<Array<PatientAliasWhere>>;
  OR?: InputMaybe<Array<PatientAliasWhere>>;
  isAliasPatientsAggregate?: InputMaybe<PatientAliasIsAliasPatientsAggregateInput>;
  isAliasPatientsConnection_ALL?: InputMaybe<PatientAliasIsAliasPatientsConnectionWhere>;
  isAliasPatientsConnection_NONE?: InputMaybe<PatientAliasIsAliasPatientsConnectionWhere>;
  isAliasPatientsConnection_SINGLE?: InputMaybe<PatientAliasIsAliasPatientsConnectionWhere>;
  isAliasPatientsConnection_SOME?: InputMaybe<PatientAliasIsAliasPatientsConnectionWhere>;
  /** Return PatientAliases where all of the related Patients match this filter */
  isAliasPatients_ALL?: InputMaybe<PatientWhere>;
  /** Return PatientAliases where none of the related Patients match this filter */
  isAliasPatients_NONE?: InputMaybe<PatientWhere>;
  /** Return PatientAliases where one of the related Patients match this filter */
  isAliasPatients_SINGLE?: InputMaybe<PatientWhere>;
  /** Return PatientAliases where some of the related Patients match this filter */
  isAliasPatients_SOME?: InputMaybe<PatientWhere>;
  namespace?: InputMaybe<Scalars["String"]>;
  namespace_CONTAINS?: InputMaybe<Scalars["String"]>;
  namespace_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  namespace_IN?: InputMaybe<Array<Scalars["String"]>>;
  namespace_NOT?: InputMaybe<Scalars["String"]>;
  namespace_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  namespace_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  namespace_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  namespace_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  namespace_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["String"]>;
  value_CONTAINS?: InputMaybe<Scalars["String"]>;
  value_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  value_IN?: InputMaybe<Array<Scalars["String"]>>;
  value_NOT?: InputMaybe<Scalars["String"]>;
  value_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  value_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  value_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  value_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  value_STARTS_WITH?: InputMaybe<Scalars["String"]>;
};

export type PatientAliasesConnection = {
  __typename?: "PatientAliasesConnection";
  edges: Array<PatientAliasEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PatientConnectInput = {
  hasSampleSamples?: InputMaybe<
    Array<PatientHasSampleSamplesConnectFieldInput>
  >;
  patientAliasesIsAlias?: InputMaybe<
    Array<PatientPatientAliasesIsAliasConnectFieldInput>
  >;
};

export type PatientConnectWhere = {
  node: PatientWhere;
};

export type PatientCreateInput = {
  cmoPatientId?: InputMaybe<Scalars["String"]>;
  cmoSampleIds?: InputMaybe<Scalars["String"]>;
  consentPartA?: InputMaybe<Scalars["String"]>;
  consentPartC?: InputMaybe<Scalars["String"]>;
  dmpPatientId?: InputMaybe<Scalars["String"]>;
  hasSampleSamples?: InputMaybe<PatientHasSampleSamplesFieldInput>;
  patientAliasesIsAlias?: InputMaybe<PatientPatientAliasesIsAliasFieldInput>;
  smilePatientId: Scalars["String"];
  totalSampleCount?: InputMaybe<Scalars["Int"]>;
};

export type PatientDeleteInput = {
  hasSampleSamples?: InputMaybe<Array<PatientHasSampleSamplesDeleteFieldInput>>;
  patientAliasesIsAlias?: InputMaybe<
    Array<PatientPatientAliasesIsAliasDeleteFieldInput>
  >;
};

export type PatientDisconnectInput = {
  hasSampleSamples?: InputMaybe<
    Array<PatientHasSampleSamplesDisconnectFieldInput>
  >;
  patientAliasesIsAlias?: InputMaybe<
    Array<PatientPatientAliasesIsAliasDisconnectFieldInput>
  >;
};

export type PatientEdge = {
  __typename?: "PatientEdge";
  cursor: Scalars["String"];
  node: Patient;
};

export type PatientHasSampleSamplesAggregateInput = {
  AND?: InputMaybe<Array<PatientHasSampleSamplesAggregateInput>>;
  OR?: InputMaybe<Array<PatientHasSampleSamplesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<PatientHasSampleSamplesNodeAggregationWhereInput>;
};

export type PatientHasSampleSamplesConnectFieldInput = {
  connect?: InputMaybe<Array<SampleConnectInput>>;
  where?: InputMaybe<SampleConnectWhere>;
};

export type PatientHasSampleSamplesConnection = {
  __typename?: "PatientHasSampleSamplesConnection";
  edges: Array<PatientHasSampleSamplesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PatientHasSampleSamplesConnectionSort = {
  node?: InputMaybe<SampleSort>;
};

export type PatientHasSampleSamplesConnectionWhere = {
  AND?: InputMaybe<Array<PatientHasSampleSamplesConnectionWhere>>;
  OR?: InputMaybe<Array<PatientHasSampleSamplesConnectionWhere>>;
  node?: InputMaybe<SampleWhere>;
  node_NOT?: InputMaybe<SampleWhere>;
};

export type PatientHasSampleSamplesCreateFieldInput = {
  node: SampleCreateInput;
};

export type PatientHasSampleSamplesDeleteFieldInput = {
  delete?: InputMaybe<SampleDeleteInput>;
  where?: InputMaybe<PatientHasSampleSamplesConnectionWhere>;
};

export type PatientHasSampleSamplesDisconnectFieldInput = {
  disconnect?: InputMaybe<SampleDisconnectInput>;
  where?: InputMaybe<PatientHasSampleSamplesConnectionWhere>;
};

export type PatientHasSampleSamplesFieldInput = {
  connect?: InputMaybe<Array<PatientHasSampleSamplesConnectFieldInput>>;
  create?: InputMaybe<Array<PatientHasSampleSamplesCreateFieldInput>>;
};

export type PatientHasSampleSamplesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PatientHasSampleSamplesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PatientHasSampleSamplesNodeAggregationWhereInput>>;
  accessLevel_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  accessLevel_EQUAL?: InputMaybe<Scalars["String"]>;
  accessLevel_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  additionalProperties_EQUAL?: InputMaybe<Scalars["String"]>;
  additionalProperties_GT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_GTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  baitSet_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  baitSet_EQUAL?: InputMaybe<Scalars["String"]>;
  baitSet_GT?: InputMaybe<Scalars["Int"]>;
  baitSet_GTE?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  baitSet_LT?: InputMaybe<Scalars["Int"]>;
  baitSet_LTE?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_EQUAL?: InputMaybe<Scalars["String"]>;
  bamCompleteDate_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_EQUAL?: InputMaybe<Scalars["String"]>;
  bamCompleteStatus_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  billedBy_EQUAL?: InputMaybe<Scalars["String"]>;
  billedBy_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_EQUAL?: InputMaybe<Scalars["String"]>;
  cancerTypeDetailed_GT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_GTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cancerType_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cancerType_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cancerType_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cancerType_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cancerType_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cancerType_EQUAL?: InputMaybe<Scalars["String"]>;
  cancerType_GT?: InputMaybe<Scalars["Int"]>;
  cancerType_GTE?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cancerType_LT?: InputMaybe<Scalars["Int"]>;
  cancerType_LTE?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_EQUAL?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode_GT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_GTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId_GT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_GTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoPatientId_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoSampleName_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  collectionYear_EQUAL?: InputMaybe<Scalars["String"]>;
  collectionYear_GT?: InputMaybe<Scalars["Int"]>;
  collectionYear_GTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_LT?: InputMaybe<Scalars["Int"]>;
  collectionYear_LTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  costCenter_EQUAL?: InputMaybe<Scalars["String"]>;
  costCenter_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  custodianInformation_EQUAL?: InputMaybe<Scalars["String"]>;
  custodianInformation_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  datasource_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  datasource_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  datasource_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  datasource_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  datasource_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  datasource_EQUAL?: InputMaybe<Scalars["String"]>;
  datasource_GT?: InputMaybe<Scalars["Int"]>;
  datasource_GTE?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  datasource_LT?: InputMaybe<Scalars["Int"]>;
  datasource_LTE?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_EQUAL?: InputMaybe<Scalars["String"]>;
  dmpPatientId_GT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_GTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  embargoDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  embargoDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  embargoDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  embargoDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  embargoDate_EQUAL?: InputMaybe<Scalars["String"]>;
  embargoDate_GT?: InputMaybe<Scalars["Int"]>;
  embargoDate_GTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_LT?: InputMaybe<Scalars["Int"]>;
  embargoDate_LTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  genePanel_EQUAL?: InputMaybe<Scalars["String"]>;
  genePanel_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_EQUAL?: InputMaybe<Scalars["String"]>;
  igoRequestId_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  importDate_EQUAL?: InputMaybe<Scalars["String"]>;
  importDate_GT?: InputMaybe<Scalars["Int"]>;
  importDate_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_EQUAL?: InputMaybe<Scalars["String"]>;
  initialPipelineRunDate_GT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_GTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_EQUAL?: InputMaybe<Scalars["String"]>;
  investigatorSampleId_GT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  libraries_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  libraries_EQUAL?: InputMaybe<Scalars["String"]>;
  libraries_GT?: InputMaybe<Scalars["Int"]>;
  libraries_GTE?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  libraries_LT?: InputMaybe<Scalars["Int"]>;
  libraries_LTE?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_EQUAL?: InputMaybe<Scalars["String"]>;
  mafCompleteDate_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_EQUAL?: InputMaybe<Scalars["String"]>;
  mafCompleteNormalPrimaryId_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_EQUAL?: InputMaybe<Scalars["String"]>;
  mafCompleteStatus_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_EQUAL?: InputMaybe<Scalars["String"]>;
  oncotreeCode_GT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_GTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  preservation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  preservation_EQUAL?: InputMaybe<Scalars["String"]>;
  preservation_GT?: InputMaybe<Scalars["Int"]>;
  preservation_GTE?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  preservation_LT?: InputMaybe<Scalars["Int"]>;
  preservation_LTE?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  primaryId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  primaryId_EQUAL?: InputMaybe<Scalars["String"]>;
  primaryId_GT?: InputMaybe<Scalars["Int"]>;
  primaryId_GTE?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  primaryId_LT?: InputMaybe<Scalars["Int"]>;
  primaryId_LTE?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_EQUAL?: InputMaybe<Scalars["String"]>;
  qcCompleteDate_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_EQUAL?: InputMaybe<Scalars["String"]>;
  qcCompleteReason_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_EQUAL?: InputMaybe<Scalars["String"]>;
  qcCompleteResult_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_EQUAL?: InputMaybe<Scalars["String"]>;
  qcCompleteStatus_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcReports_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcReports_EQUAL?: InputMaybe<Scalars["String"]>;
  qcReports_GT?: InputMaybe<Scalars["Int"]>;
  qcReports_GTE?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcReports_LT?: InputMaybe<Scalars["Int"]>;
  qcReports_LTE?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  recipe_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  recipe_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  recipe_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  recipe_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  recipe_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  recipe_EQUAL?: InputMaybe<Scalars["String"]>;
  recipe_GT?: InputMaybe<Scalars["Int"]>;
  recipe_GTE?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  recipe_LT?: InputMaybe<Scalars["Int"]>;
  recipe_LTE?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleCategory_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleCategory_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleCategory_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleCategory_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleCategory_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleCategory_GT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_GTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleClass_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleClass_GT?: InputMaybe<Scalars["Int"]>;
  sampleClass_GTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_LT?: InputMaybe<Scalars["Int"]>;
  sampleClass_LTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleName_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleName_GT?: InputMaybe<Scalars["Int"]>;
  sampleName_GTE?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleName_LT?: InputMaybe<Scalars["Int"]>;
  sampleName_LTE?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleOrigin_GT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_GTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleType_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleType_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleType_GT?: InputMaybe<Scalars["Int"]>;
  sampleType_GTE?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleType_LT?: InputMaybe<Scalars["Int"]>;
  sampleType_LTE?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sex_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sex_EQUAL?: InputMaybe<Scalars["String"]>;
  sex_GT?: InputMaybe<Scalars["Int"]>;
  sex_GTE?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sex_LT?: InputMaybe<Scalars["Int"]>;
  sex_LTE?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  smileSampleId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  smileSampleId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  smileSampleId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  smileSampleId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  smileSampleId_EQUAL?: InputMaybe<Scalars["String"]>;
  smileSampleId_GT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_GTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  smileTempoId_EQUAL?: InputMaybe<Scalars["String"]>;
  smileTempoId_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  species_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  species_EQUAL?: InputMaybe<Scalars["String"]>;
  species_GT?: InputMaybe<Scalars["Int"]>;
  species_GTE?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  species_LT?: InputMaybe<Scalars["Int"]>;
  species_LTE?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  tissueLocation_EQUAL?: InputMaybe<Scalars["String"]>;
  tissueLocation_GT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_GTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  tubeId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  tubeId_EQUAL?: InputMaybe<Scalars["String"]>;
  tubeId_GT?: InputMaybe<Scalars["Int"]>;
  tubeId_GTE?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  tubeId_LT?: InputMaybe<Scalars["Int"]>;
  tubeId_LTE?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_EQUAL?: InputMaybe<Scalars["String"]>;
  tumorOrNormal_GT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_GTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  validationReport_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  validationReport_EQUAL?: InputMaybe<Scalars["String"]>;
  validationReport_GT?: InputMaybe<Scalars["Int"]>;
  validationReport_GTE?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  validationReport_LT?: InputMaybe<Scalars["Int"]>;
  validationReport_LTE?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type PatientHasSampleSamplesRelationship = {
  __typename?: "PatientHasSampleSamplesRelationship";
  cursor: Scalars["String"];
  node: Sample;
};

export type PatientHasSampleSamplesUpdateConnectionInput = {
  node?: InputMaybe<SampleUpdateInput>;
};

export type PatientHasSampleSamplesUpdateFieldInput = {
  connect?: InputMaybe<Array<PatientHasSampleSamplesConnectFieldInput>>;
  create?: InputMaybe<Array<PatientHasSampleSamplesCreateFieldInput>>;
  delete?: InputMaybe<Array<PatientHasSampleSamplesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PatientHasSampleSamplesDisconnectFieldInput>>;
  update?: InputMaybe<PatientHasSampleSamplesUpdateConnectionInput>;
  where?: InputMaybe<PatientHasSampleSamplesConnectionWhere>;
};

export type PatientIdsTriplet = {
  __typename?: "PatientIdsTriplet";
  CMO_ID?: Maybe<Scalars["String"]>;
  DMP_ID?: Maybe<Scalars["String"]>;
  PT_MRN?: Maybe<Scalars["String"]>;
};

export type PatientOptions = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more PatientSort objects to sort Patients by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PatientSort>>;
};

export type PatientPatientAliasPatientAliasesIsAliasAggregationSelection = {
  __typename?: "PatientPatientAliasPatientAliasesIsAliasAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<PatientPatientAliasPatientAliasesIsAliasNodeAggregateSelection>;
};

export type PatientPatientAliasPatientAliasesIsAliasNodeAggregateSelection = {
  __typename?: "PatientPatientAliasPatientAliasesIsAliasNodeAggregateSelection";
  namespace: StringAggregateSelectionNonNullable;
  value: StringAggregateSelectionNonNullable;
};

export type PatientPatientAliasesIsAliasAggregateInput = {
  AND?: InputMaybe<Array<PatientPatientAliasesIsAliasAggregateInput>>;
  OR?: InputMaybe<Array<PatientPatientAliasesIsAliasAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<PatientPatientAliasesIsAliasNodeAggregationWhereInput>;
};

export type PatientPatientAliasesIsAliasConnectFieldInput = {
  connect?: InputMaybe<Array<PatientAliasConnectInput>>;
  where?: InputMaybe<PatientAliasConnectWhere>;
};

export type PatientPatientAliasesIsAliasConnection = {
  __typename?: "PatientPatientAliasesIsAliasConnection";
  edges: Array<PatientPatientAliasesIsAliasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PatientPatientAliasesIsAliasConnectionSort = {
  node?: InputMaybe<PatientAliasSort>;
};

export type PatientPatientAliasesIsAliasConnectionWhere = {
  AND?: InputMaybe<Array<PatientPatientAliasesIsAliasConnectionWhere>>;
  OR?: InputMaybe<Array<PatientPatientAliasesIsAliasConnectionWhere>>;
  node?: InputMaybe<PatientAliasWhere>;
  node_NOT?: InputMaybe<PatientAliasWhere>;
};

export type PatientPatientAliasesIsAliasCreateFieldInput = {
  node: PatientAliasCreateInput;
};

export type PatientPatientAliasesIsAliasDeleteFieldInput = {
  delete?: InputMaybe<PatientAliasDeleteInput>;
  where?: InputMaybe<PatientPatientAliasesIsAliasConnectionWhere>;
};

export type PatientPatientAliasesIsAliasDisconnectFieldInput = {
  disconnect?: InputMaybe<PatientAliasDisconnectInput>;
  where?: InputMaybe<PatientPatientAliasesIsAliasConnectionWhere>;
};

export type PatientPatientAliasesIsAliasFieldInput = {
  connect?: InputMaybe<Array<PatientPatientAliasesIsAliasConnectFieldInput>>;
  create?: InputMaybe<Array<PatientPatientAliasesIsAliasCreateFieldInput>>;
};

export type PatientPatientAliasesIsAliasNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<PatientPatientAliasesIsAliasNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<Array<PatientPatientAliasesIsAliasNodeAggregationWhereInput>>;
  namespace_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  namespace_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  namespace_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  namespace_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  namespace_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  namespace_EQUAL?: InputMaybe<Scalars["String"]>;
  namespace_GT?: InputMaybe<Scalars["Int"]>;
  namespace_GTE?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  namespace_LT?: InputMaybe<Scalars["Int"]>;
  namespace_LTE?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  value_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  value_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  value_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  value_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  value_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  value_EQUAL?: InputMaybe<Scalars["String"]>;
  value_GT?: InputMaybe<Scalars["Int"]>;
  value_GTE?: InputMaybe<Scalars["Int"]>;
  value_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  value_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  value_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  value_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  value_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  value_LT?: InputMaybe<Scalars["Int"]>;
  value_LTE?: InputMaybe<Scalars["Int"]>;
  value_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  value_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  value_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  value_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  value_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type PatientPatientAliasesIsAliasRelationship = {
  __typename?: "PatientPatientAliasesIsAliasRelationship";
  cursor: Scalars["String"];
  node: PatientAlias;
};

export type PatientPatientAliasesIsAliasUpdateConnectionInput = {
  node?: InputMaybe<PatientAliasUpdateInput>;
};

export type PatientPatientAliasesIsAliasUpdateFieldInput = {
  connect?: InputMaybe<Array<PatientPatientAliasesIsAliasConnectFieldInput>>;
  create?: InputMaybe<Array<PatientPatientAliasesIsAliasCreateFieldInput>>;
  delete?: InputMaybe<Array<PatientPatientAliasesIsAliasDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<PatientPatientAliasesIsAliasDisconnectFieldInput>
  >;
  update?: InputMaybe<PatientPatientAliasesIsAliasUpdateConnectionInput>;
  where?: InputMaybe<PatientPatientAliasesIsAliasConnectionWhere>;
};

export type PatientRelationInput = {
  hasSampleSamples?: InputMaybe<Array<PatientHasSampleSamplesCreateFieldInput>>;
  patientAliasesIsAlias?: InputMaybe<
    Array<PatientPatientAliasesIsAliasCreateFieldInput>
  >;
};

export type PatientSampleHasSampleSamplesAggregationSelection = {
  __typename?: "PatientSampleHasSampleSamplesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<PatientSampleHasSampleSamplesNodeAggregateSelection>;
};

export type PatientSampleHasSampleSamplesNodeAggregateSelection = {
  __typename?: "PatientSampleHasSampleSamplesNodeAggregateSelection";
  accessLevel: StringAggregateSelectionNullable;
  additionalProperties: StringAggregateSelectionNullable;
  baitSet: StringAggregateSelectionNullable;
  bamCompleteDate: StringAggregateSelectionNullable;
  bamCompleteStatus: StringAggregateSelectionNullable;
  billedBy: StringAggregateSelectionNullable;
  cancerType: StringAggregateSelectionNullable;
  cancerTypeDetailed: StringAggregateSelectionNullable;
  cfDNA2dBarcode: StringAggregateSelectionNullable;
  cmoInfoIgoId: StringAggregateSelectionNullable;
  cmoPatientId: StringAggregateSelectionNullable;
  cmoSampleIdFields: StringAggregateSelectionNullable;
  cmoSampleName: StringAggregateSelectionNullable;
  collectionYear: StringAggregateSelectionNullable;
  costCenter: StringAggregateSelectionNullable;
  custodianInformation: StringAggregateSelectionNullable;
  datasource: StringAggregateSelectionNonNullable;
  dmpPatientId: StringAggregateSelectionNullable;
  embargoDate: StringAggregateSelectionNullable;
  genePanel: StringAggregateSelectionNullable;
  igoRequestId: StringAggregateSelectionNullable;
  importDate: StringAggregateSelectionNullable;
  initialPipelineRunDate: StringAggregateSelectionNullable;
  investigatorSampleId: StringAggregateSelectionNullable;
  libraries: StringAggregateSelectionNullable;
  mafCompleteDate: StringAggregateSelectionNullable;
  mafCompleteNormalPrimaryId: StringAggregateSelectionNullable;
  mafCompleteStatus: StringAggregateSelectionNullable;
  oncotreeCode: StringAggregateSelectionNullable;
  preservation: StringAggregateSelectionNullable;
  primaryId: StringAggregateSelectionNullable;
  qcCompleteDate: StringAggregateSelectionNullable;
  qcCompleteReason: StringAggregateSelectionNullable;
  qcCompleteResult: StringAggregateSelectionNullable;
  qcCompleteStatus: StringAggregateSelectionNullable;
  qcReports: StringAggregateSelectionNullable;
  recipe: StringAggregateSelectionNullable;
  sampleCategory: StringAggregateSelectionNonNullable;
  sampleClass: StringAggregateSelectionNonNullable;
  sampleName: StringAggregateSelectionNullable;
  sampleOrigin: StringAggregateSelectionNullable;
  sampleType: StringAggregateSelectionNullable;
  sex: StringAggregateSelectionNullable;
  smileSampleId: StringAggregateSelectionNonNullable;
  smileTempoId: StringAggregateSelectionNullable;
  species: StringAggregateSelectionNullable;
  tissueLocation: StringAggregateSelectionNullable;
  tubeId: StringAggregateSelectionNullable;
  tumorOrNormal: StringAggregateSelectionNullable;
  validationReport: StringAggregateSelectionNullable;
};

/** Fields to sort Patients by. The order in which sorts are applied is not guaranteed when specifying many fields in one PatientSort object. */
export type PatientSort = {
  cmoPatientId?: InputMaybe<SortDirection>;
  cmoSampleIds?: InputMaybe<SortDirection>;
  consentPartA?: InputMaybe<SortDirection>;
  consentPartC?: InputMaybe<SortDirection>;
  dmpPatientId?: InputMaybe<SortDirection>;
  smilePatientId?: InputMaybe<SortDirection>;
  totalSampleCount?: InputMaybe<SortDirection>;
};

export type PatientUpdateInput = {
  cmoPatientId?: InputMaybe<Scalars["String"]>;
  cmoSampleIds?: InputMaybe<Scalars["String"]>;
  consentPartA?: InputMaybe<Scalars["String"]>;
  consentPartC?: InputMaybe<Scalars["String"]>;
  dmpPatientId?: InputMaybe<Scalars["String"]>;
  hasSampleSamples?: InputMaybe<Array<PatientHasSampleSamplesUpdateFieldInput>>;
  patientAliasesIsAlias?: InputMaybe<
    Array<PatientPatientAliasesIsAliasUpdateFieldInput>
  >;
  smilePatientId?: InputMaybe<Scalars["String"]>;
  totalSampleCount?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_DECREMENT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_INCREMENT?: InputMaybe<Scalars["Int"]>;
};

export type PatientWhere = {
  AND?: InputMaybe<Array<PatientWhere>>;
  OR?: InputMaybe<Array<PatientWhere>>;
  cmoPatientId?: InputMaybe<Scalars["String"]>;
  cmoPatientId_CONTAINS?: InputMaybe<Scalars["String"]>;
  cmoPatientId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cmoPatientId_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cmoPatientId_NOT?: InputMaybe<Scalars["String"]>;
  cmoPatientId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  cmoPatientId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cmoPatientId_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cmoPatientId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cmoPatientId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cmoSampleIds?: InputMaybe<Scalars["String"]>;
  cmoSampleIds_CONTAINS?: InputMaybe<Scalars["String"]>;
  cmoSampleIds_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cmoSampleIds_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cmoSampleIds_NOT?: InputMaybe<Scalars["String"]>;
  cmoSampleIds_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  cmoSampleIds_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cmoSampleIds_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cmoSampleIds_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cmoSampleIds_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  consentPartA?: InputMaybe<Scalars["String"]>;
  consentPartA_CONTAINS?: InputMaybe<Scalars["String"]>;
  consentPartA_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  consentPartA_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  consentPartA_NOT?: InputMaybe<Scalars["String"]>;
  consentPartA_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  consentPartA_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  consentPartA_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  consentPartA_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  consentPartA_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  consentPartC?: InputMaybe<Scalars["String"]>;
  consentPartC_CONTAINS?: InputMaybe<Scalars["String"]>;
  consentPartC_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  consentPartC_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  consentPartC_NOT?: InputMaybe<Scalars["String"]>;
  consentPartC_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  consentPartC_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  consentPartC_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  consentPartC_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  consentPartC_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  dmpPatientId?: InputMaybe<Scalars["String"]>;
  dmpPatientId_CONTAINS?: InputMaybe<Scalars["String"]>;
  dmpPatientId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  dmpPatientId_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  dmpPatientId_NOT?: InputMaybe<Scalars["String"]>;
  dmpPatientId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  dmpPatientId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  dmpPatientId_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  dmpPatientId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  dmpPatientId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  hasSampleSamplesAggregate?: InputMaybe<PatientHasSampleSamplesAggregateInput>;
  hasSampleSamplesConnection_ALL?: InputMaybe<PatientHasSampleSamplesConnectionWhere>;
  hasSampleSamplesConnection_NONE?: InputMaybe<PatientHasSampleSamplesConnectionWhere>;
  hasSampleSamplesConnection_SINGLE?: InputMaybe<PatientHasSampleSamplesConnectionWhere>;
  hasSampleSamplesConnection_SOME?: InputMaybe<PatientHasSampleSamplesConnectionWhere>;
  /** Return Patients where all of the related Samples match this filter */
  hasSampleSamples_ALL?: InputMaybe<SampleWhere>;
  /** Return Patients where none of the related Samples match this filter */
  hasSampleSamples_NONE?: InputMaybe<SampleWhere>;
  /** Return Patients where one of the related Samples match this filter */
  hasSampleSamples_SINGLE?: InputMaybe<SampleWhere>;
  /** Return Patients where some of the related Samples match this filter */
  hasSampleSamples_SOME?: InputMaybe<SampleWhere>;
  patientAliasesIsAliasAggregate?: InputMaybe<PatientPatientAliasesIsAliasAggregateInput>;
  patientAliasesIsAliasConnection_ALL?: InputMaybe<PatientPatientAliasesIsAliasConnectionWhere>;
  patientAliasesIsAliasConnection_NONE?: InputMaybe<PatientPatientAliasesIsAliasConnectionWhere>;
  patientAliasesIsAliasConnection_SINGLE?: InputMaybe<PatientPatientAliasesIsAliasConnectionWhere>;
  patientAliasesIsAliasConnection_SOME?: InputMaybe<PatientPatientAliasesIsAliasConnectionWhere>;
  /** Return Patients where all of the related PatientAliases match this filter */
  patientAliasesIsAlias_ALL?: InputMaybe<PatientAliasWhere>;
  /** Return Patients where none of the related PatientAliases match this filter */
  patientAliasesIsAlias_NONE?: InputMaybe<PatientAliasWhere>;
  /** Return Patients where one of the related PatientAliases match this filter */
  patientAliasesIsAlias_SINGLE?: InputMaybe<PatientAliasWhere>;
  /** Return Patients where some of the related PatientAliases match this filter */
  patientAliasesIsAlias_SOME?: InputMaybe<PatientAliasWhere>;
  smilePatientId?: InputMaybe<Scalars["String"]>;
  smilePatientId_CONTAINS?: InputMaybe<Scalars["String"]>;
  smilePatientId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  smilePatientId_IN?: InputMaybe<Array<Scalars["String"]>>;
  smilePatientId_NOT?: InputMaybe<Scalars["String"]>;
  smilePatientId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  smilePatientId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  smilePatientId_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  smilePatientId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  smilePatientId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  totalSampleCount?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  totalSampleCount_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_NOT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type PatientsConnection = {
  __typename?: "PatientsConnection";
  edges: Array<PatientEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type Project = {
  __typename?: "Project";
  hasRequestRequests: Array<Request>;
  hasRequestRequestsAggregate?: Maybe<ProjectRequestHasRequestRequestsAggregationSelection>;
  hasRequestRequestsConnection: ProjectHasRequestRequestsConnection;
  igoProjectId: Scalars["String"];
  namespace: Scalars["String"];
};

export type ProjectHasRequestRequestsArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<RequestOptions>;
  where?: InputMaybe<RequestWhere>;
};

export type ProjectHasRequestRequestsAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<RequestWhere>;
};

export type ProjectHasRequestRequestsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<ProjectHasRequestRequestsConnectionSort>>;
  where?: InputMaybe<ProjectHasRequestRequestsConnectionWhere>;
};

export type ProjectAggregateSelection = {
  __typename?: "ProjectAggregateSelection";
  count: Scalars["Int"];
  igoProjectId: StringAggregateSelectionNonNullable;
  namespace: StringAggregateSelectionNonNullable;
};

export type ProjectConnectInput = {
  hasRequestRequests?: InputMaybe<
    Array<ProjectHasRequestRequestsConnectFieldInput>
  >;
};

export type ProjectConnectWhere = {
  node: ProjectWhere;
};

export type ProjectCreateInput = {
  hasRequestRequests?: InputMaybe<ProjectHasRequestRequestsFieldInput>;
  igoProjectId: Scalars["String"];
  namespace: Scalars["String"];
};

export type ProjectDeleteInput = {
  hasRequestRequests?: InputMaybe<
    Array<ProjectHasRequestRequestsDeleteFieldInput>
  >;
};

export type ProjectDisconnectInput = {
  hasRequestRequests?: InputMaybe<
    Array<ProjectHasRequestRequestsDisconnectFieldInput>
  >;
};

export type ProjectEdge = {
  __typename?: "ProjectEdge";
  cursor: Scalars["String"];
  node: Project;
};

export type ProjectHasRequestRequestsAggregateInput = {
  AND?: InputMaybe<Array<ProjectHasRequestRequestsAggregateInput>>;
  OR?: InputMaybe<Array<ProjectHasRequestRequestsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<ProjectHasRequestRequestsNodeAggregationWhereInput>;
};

export type ProjectHasRequestRequestsConnectFieldInput = {
  connect?: InputMaybe<Array<RequestConnectInput>>;
  where?: InputMaybe<RequestConnectWhere>;
};

export type ProjectHasRequestRequestsConnection = {
  __typename?: "ProjectHasRequestRequestsConnection";
  edges: Array<ProjectHasRequestRequestsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ProjectHasRequestRequestsConnectionSort = {
  node?: InputMaybe<RequestSort>;
};

export type ProjectHasRequestRequestsConnectionWhere = {
  AND?: InputMaybe<Array<ProjectHasRequestRequestsConnectionWhere>>;
  OR?: InputMaybe<Array<ProjectHasRequestRequestsConnectionWhere>>;
  node?: InputMaybe<RequestWhere>;
  node_NOT?: InputMaybe<RequestWhere>;
};

export type ProjectHasRequestRequestsCreateFieldInput = {
  node: RequestCreateInput;
};

export type ProjectHasRequestRequestsDeleteFieldInput = {
  delete?: InputMaybe<RequestDeleteInput>;
  where?: InputMaybe<ProjectHasRequestRequestsConnectionWhere>;
};

export type ProjectHasRequestRequestsDisconnectFieldInput = {
  disconnect?: InputMaybe<RequestDisconnectInput>;
  where?: InputMaybe<ProjectHasRequestRequestsConnectionWhere>;
};

export type ProjectHasRequestRequestsFieldInput = {
  connect?: InputMaybe<Array<ProjectHasRequestRequestsConnectFieldInput>>;
  create?: InputMaybe<Array<ProjectHasRequestRequestsCreateFieldInput>>;
};

export type ProjectHasRequestRequestsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectHasRequestRequestsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ProjectHasRequestRequestsNodeAggregationWhereInput>>;
  dataAccessEmails_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  dataAccessEmails_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  dataAccessEmails_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  dataAccessEmails_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  dataAccessEmails_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  dataAccessEmails_EQUAL?: InputMaybe<Scalars["String"]>;
  dataAccessEmails_GT?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_GTE?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_LT?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_LTE?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  dataAnalystEmail_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  dataAnalystEmail_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  dataAnalystEmail_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  dataAnalystEmail_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  dataAnalystEmail_EQUAL?: InputMaybe<Scalars["String"]>;
  dataAnalystEmail_GT?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_GTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_LT?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_LTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  dataAnalystName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  dataAnalystName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  dataAnalystName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  dataAnalystName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  dataAnalystName_EQUAL?: InputMaybe<Scalars["String"]>;
  dataAnalystName_GT?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_GTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_LT?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_LTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  genePanel_EQUAL?: InputMaybe<Scalars["String"]>;
  genePanel_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoProjectId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  igoProjectId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  igoProjectId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  igoProjectId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  igoProjectId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  igoProjectId_EQUAL?: InputMaybe<Scalars["String"]>;
  igoProjectId_GT?: InputMaybe<Scalars["Int"]>;
  igoProjectId_GTE?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LT?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LTE?: InputMaybe<Scalars["Int"]>;
  igoProjectId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoProjectId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  igoProjectId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoProjectId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  igoProjectId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_EQUAL?: InputMaybe<Scalars["String"]>;
  igoRequestId_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  importDate_EQUAL?: InputMaybe<Scalars["String"]>;
  importDate_GT?: InputMaybe<Scalars["Int"]>;
  importDate_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  investigatorEmail_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  investigatorEmail_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  investigatorEmail_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  investigatorEmail_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  investigatorEmail_EQUAL?: InputMaybe<Scalars["String"]>;
  investigatorEmail_GT?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_LT?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  investigatorName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  investigatorName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  investigatorName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  investigatorName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  investigatorName_EQUAL?: InputMaybe<Scalars["String"]>;
  investigatorName_GT?: InputMaybe<Scalars["Int"]>;
  investigatorName_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorName_LT?: InputMaybe<Scalars["Int"]>;
  investigatorName_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  labHeadEmail_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  labHeadEmail_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  labHeadEmail_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  labHeadEmail_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  labHeadEmail_EQUAL?: InputMaybe<Scalars["String"]>;
  labHeadEmail_GT?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_GTE?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_LT?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_LTE?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  labHeadName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  labHeadName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  labHeadName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  labHeadName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  labHeadName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  labHeadName_EQUAL?: InputMaybe<Scalars["String"]>;
  labHeadName_GT?: InputMaybe<Scalars["Int"]>;
  labHeadName_GTE?: InputMaybe<Scalars["Int"]>;
  labHeadName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  labHeadName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  labHeadName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  labHeadName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  labHeadName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  labHeadName_LT?: InputMaybe<Scalars["Int"]>;
  labHeadName_LTE?: InputMaybe<Scalars["Int"]>;
  labHeadName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  labHeadName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  labHeadName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  labHeadName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  labHeadName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  libraryType_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  libraryType_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  libraryType_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  libraryType_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  libraryType_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  libraryType_EQUAL?: InputMaybe<Scalars["String"]>;
  libraryType_GT?: InputMaybe<Scalars["Int"]>;
  libraryType_GTE?: InputMaybe<Scalars["Int"]>;
  libraryType_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  libraryType_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  libraryType_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  libraryType_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  libraryType_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  libraryType_LT?: InputMaybe<Scalars["Int"]>;
  libraryType_LTE?: InputMaybe<Scalars["Int"]>;
  libraryType_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  libraryType_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  libraryType_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  libraryType_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  libraryType_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  namespace_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  namespace_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  namespace_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  namespace_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  namespace_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  namespace_EQUAL?: InputMaybe<Scalars["String"]>;
  namespace_GT?: InputMaybe<Scalars["Int"]>;
  namespace_GTE?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  namespace_LT?: InputMaybe<Scalars["Int"]>;
  namespace_LTE?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  otherContactEmails_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  otherContactEmails_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  otherContactEmails_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  otherContactEmails_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  otherContactEmails_EQUAL?: InputMaybe<Scalars["String"]>;
  otherContactEmails_GT?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_GTE?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_LT?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_LTE?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  piEmail_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  piEmail_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  piEmail_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  piEmail_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  piEmail_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  piEmail_EQUAL?: InputMaybe<Scalars["String"]>;
  piEmail_GT?: InputMaybe<Scalars["Int"]>;
  piEmail_GTE?: InputMaybe<Scalars["Int"]>;
  piEmail_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  piEmail_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  piEmail_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  piEmail_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  piEmail_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  piEmail_LT?: InputMaybe<Scalars["Int"]>;
  piEmail_LTE?: InputMaybe<Scalars["Int"]>;
  piEmail_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  piEmail_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  piEmail_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  piEmail_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  piEmail_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  projectManagerName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  projectManagerName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  projectManagerName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  projectManagerName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  projectManagerName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  projectManagerName_EQUAL?: InputMaybe<Scalars["String"]>;
  projectManagerName_GT?: InputMaybe<Scalars["Int"]>;
  projectManagerName_GTE?: InputMaybe<Scalars["Int"]>;
  projectManagerName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  projectManagerName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  projectManagerName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  projectManagerName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  projectManagerName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  projectManagerName_LT?: InputMaybe<Scalars["Int"]>;
  projectManagerName_LTE?: InputMaybe<Scalars["Int"]>;
  projectManagerName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  projectManagerName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  projectManagerName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  projectManagerName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  projectManagerName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcAccessEmails_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcAccessEmails_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcAccessEmails_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcAccessEmails_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcAccessEmails_EQUAL?: InputMaybe<Scalars["String"]>;
  qcAccessEmails_GT?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_GTE?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_LT?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_LTE?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  requestJson_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  requestJson_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  requestJson_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  requestJson_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  requestJson_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  requestJson_EQUAL?: InputMaybe<Scalars["String"]>;
  requestJson_GT?: InputMaybe<Scalars["Int"]>;
  requestJson_GTE?: InputMaybe<Scalars["Int"]>;
  requestJson_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  requestJson_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  requestJson_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  requestJson_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  requestJson_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  requestJson_LT?: InputMaybe<Scalars["Int"]>;
  requestJson_LTE?: InputMaybe<Scalars["Int"]>;
  requestJson_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  requestJson_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  requestJson_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  requestJson_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  requestJson_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileRequestId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  smileRequestId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  smileRequestId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  smileRequestId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  smileRequestId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  smileRequestId_EQUAL?: InputMaybe<Scalars["String"]>;
  smileRequestId_GT?: InputMaybe<Scalars["Int"]>;
  smileRequestId_GTE?: InputMaybe<Scalars["Int"]>;
  smileRequestId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileRequestId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  smileRequestId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileRequestId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  smileRequestId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileRequestId_LT?: InputMaybe<Scalars["Int"]>;
  smileRequestId_LTE?: InputMaybe<Scalars["Int"]>;
  smileRequestId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileRequestId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  smileRequestId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileRequestId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  smileRequestId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  strand_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  strand_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  strand_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  strand_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  strand_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  strand_EQUAL?: InputMaybe<Scalars["String"]>;
  strand_GT?: InputMaybe<Scalars["Int"]>;
  strand_GTE?: InputMaybe<Scalars["Int"]>;
  strand_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  strand_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  strand_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  strand_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  strand_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  strand_LT?: InputMaybe<Scalars["Int"]>;
  strand_LTE?: InputMaybe<Scalars["Int"]>;
  strand_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  strand_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  strand_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  strand_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  strand_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_LTE?: InputMaybe<Scalars["Int"]>;
};

export type ProjectHasRequestRequestsRelationship = {
  __typename?: "ProjectHasRequestRequestsRelationship";
  cursor: Scalars["String"];
  node: Request;
};

export type ProjectHasRequestRequestsUpdateConnectionInput = {
  node?: InputMaybe<RequestUpdateInput>;
};

export type ProjectHasRequestRequestsUpdateFieldInput = {
  connect?: InputMaybe<Array<ProjectHasRequestRequestsConnectFieldInput>>;
  create?: InputMaybe<Array<ProjectHasRequestRequestsCreateFieldInput>>;
  delete?: InputMaybe<Array<ProjectHasRequestRequestsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectHasRequestRequestsDisconnectFieldInput>>;
  update?: InputMaybe<ProjectHasRequestRequestsUpdateConnectionInput>;
  where?: InputMaybe<ProjectHasRequestRequestsConnectionWhere>;
};

export type ProjectOptions = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more ProjectSort objects to sort Projects by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ProjectSort>>;
};

export type ProjectRelationInput = {
  hasRequestRequests?: InputMaybe<
    Array<ProjectHasRequestRequestsCreateFieldInput>
  >;
};

export type ProjectRequestHasRequestRequestsAggregationSelection = {
  __typename?: "ProjectRequestHasRequestRequestsAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<ProjectRequestHasRequestRequestsNodeAggregateSelection>;
};

export type ProjectRequestHasRequestRequestsNodeAggregateSelection = {
  __typename?: "ProjectRequestHasRequestRequestsNodeAggregateSelection";
  dataAccessEmails: StringAggregateSelectionNonNullable;
  dataAnalystEmail: StringAggregateSelectionNonNullable;
  dataAnalystName: StringAggregateSelectionNonNullable;
  genePanel: StringAggregateSelectionNonNullable;
  igoProjectId: StringAggregateSelectionNonNullable;
  igoRequestId: StringAggregateSelectionNonNullable;
  importDate: StringAggregateSelectionNullable;
  investigatorEmail: StringAggregateSelectionNonNullable;
  investigatorName: StringAggregateSelectionNonNullable;
  labHeadEmail: StringAggregateSelectionNonNullable;
  labHeadName: StringAggregateSelectionNonNullable;
  libraryType: StringAggregateSelectionNullable;
  namespace: StringAggregateSelectionNonNullable;
  otherContactEmails: StringAggregateSelectionNonNullable;
  piEmail: StringAggregateSelectionNonNullable;
  projectManagerName: StringAggregateSelectionNonNullable;
  qcAccessEmails: StringAggregateSelectionNonNullable;
  requestJson: StringAggregateSelectionNonNullable;
  smileRequestId: StringAggregateSelectionNonNullable;
  strand: StringAggregateSelectionNullable;
  totalSampleCount: IntAggregateSelectionNullable;
};

/** Fields to sort Projects by. The order in which sorts are applied is not guaranteed when specifying many fields in one ProjectSort object. */
export type ProjectSort = {
  igoProjectId?: InputMaybe<SortDirection>;
  namespace?: InputMaybe<SortDirection>;
};

export type ProjectUpdateInput = {
  hasRequestRequests?: InputMaybe<
    Array<ProjectHasRequestRequestsUpdateFieldInput>
  >;
  igoProjectId?: InputMaybe<Scalars["String"]>;
  namespace?: InputMaybe<Scalars["String"]>;
};

export type ProjectWhere = {
  AND?: InputMaybe<Array<ProjectWhere>>;
  OR?: InputMaybe<Array<ProjectWhere>>;
  hasRequestRequestsAggregate?: InputMaybe<ProjectHasRequestRequestsAggregateInput>;
  hasRequestRequestsConnection_ALL?: InputMaybe<ProjectHasRequestRequestsConnectionWhere>;
  hasRequestRequestsConnection_NONE?: InputMaybe<ProjectHasRequestRequestsConnectionWhere>;
  hasRequestRequestsConnection_SINGLE?: InputMaybe<ProjectHasRequestRequestsConnectionWhere>;
  hasRequestRequestsConnection_SOME?: InputMaybe<ProjectHasRequestRequestsConnectionWhere>;
  /** Return Projects where all of the related Requests match this filter */
  hasRequestRequests_ALL?: InputMaybe<RequestWhere>;
  /** Return Projects where none of the related Requests match this filter */
  hasRequestRequests_NONE?: InputMaybe<RequestWhere>;
  /** Return Projects where one of the related Requests match this filter */
  hasRequestRequests_SINGLE?: InputMaybe<RequestWhere>;
  /** Return Projects where some of the related Requests match this filter */
  hasRequestRequests_SOME?: InputMaybe<RequestWhere>;
  igoProjectId?: InputMaybe<Scalars["String"]>;
  igoProjectId_CONTAINS?: InputMaybe<Scalars["String"]>;
  igoProjectId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  igoProjectId_IN?: InputMaybe<Array<Scalars["String"]>>;
  igoProjectId_NOT?: InputMaybe<Scalars["String"]>;
  igoProjectId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  igoProjectId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  igoProjectId_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  igoProjectId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  igoProjectId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  namespace?: InputMaybe<Scalars["String"]>;
  namespace_CONTAINS?: InputMaybe<Scalars["String"]>;
  namespace_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  namespace_IN?: InputMaybe<Array<Scalars["String"]>>;
  namespace_NOT?: InputMaybe<Scalars["String"]>;
  namespace_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  namespace_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  namespace_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  namespace_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  namespace_STARTS_WITH?: InputMaybe<Scalars["String"]>;
};

export type ProjectsConnection = {
  __typename?: "ProjectsConnection";
  edges: Array<ProjectEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type QcComplete = {
  __typename?: "QcComplete";
  date: Scalars["String"];
  reason: Scalars["String"];
  result: Scalars["String"];
  status: Scalars["String"];
  temposHasEvent: Array<Tempo>;
  temposHasEventAggregate?: Maybe<QcCompleteTempoTemposHasEventAggregationSelection>;
  temposHasEventConnection: QcCompleteTemposHasEventConnection;
};

export type QcCompleteTemposHasEventArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<TempoOptions>;
  where?: InputMaybe<TempoWhere>;
};

export type QcCompleteTemposHasEventAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<TempoWhere>;
};

export type QcCompleteTemposHasEventConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<QcCompleteTemposHasEventConnectionSort>>;
  where?: InputMaybe<QcCompleteTemposHasEventConnectionWhere>;
};

export type QcCompleteAggregateSelection = {
  __typename?: "QcCompleteAggregateSelection";
  count: Scalars["Int"];
  date: StringAggregateSelectionNonNullable;
  reason: StringAggregateSelectionNonNullable;
  result: StringAggregateSelectionNonNullable;
  status: StringAggregateSelectionNonNullable;
};

export type QcCompleteConnectInput = {
  temposHasEvent?: InputMaybe<Array<QcCompleteTemposHasEventConnectFieldInput>>;
};

export type QcCompleteConnectWhere = {
  node: QcCompleteWhere;
};

export type QcCompleteCreateInput = {
  date: Scalars["String"];
  reason: Scalars["String"];
  result: Scalars["String"];
  status: Scalars["String"];
  temposHasEvent?: InputMaybe<QcCompleteTemposHasEventFieldInput>;
};

export type QcCompleteDeleteInput = {
  temposHasEvent?: InputMaybe<Array<QcCompleteTemposHasEventDeleteFieldInput>>;
};

export type QcCompleteDisconnectInput = {
  temposHasEvent?: InputMaybe<
    Array<QcCompleteTemposHasEventDisconnectFieldInput>
  >;
};

export type QcCompleteEdge = {
  __typename?: "QcCompleteEdge";
  cursor: Scalars["String"];
  node: QcComplete;
};

export type QcCompleteOptions = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more QcCompleteSort objects to sort QcCompletes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<QcCompleteSort>>;
};

export type QcCompleteRelationInput = {
  temposHasEvent?: InputMaybe<Array<QcCompleteTemposHasEventCreateFieldInput>>;
};

/** Fields to sort QcCompletes by. The order in which sorts are applied is not guaranteed when specifying many fields in one QcCompleteSort object. */
export type QcCompleteSort = {
  date?: InputMaybe<SortDirection>;
  reason?: InputMaybe<SortDirection>;
  result?: InputMaybe<SortDirection>;
  status?: InputMaybe<SortDirection>;
};

export type QcCompleteTempoTemposHasEventAggregationSelection = {
  __typename?: "QcCompleteTempoTemposHasEventAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<QcCompleteTempoTemposHasEventNodeAggregateSelection>;
};

export type QcCompleteTempoTemposHasEventNodeAggregateSelection = {
  __typename?: "QcCompleteTempoTemposHasEventNodeAggregateSelection";
  accessLevel: StringAggregateSelectionNullable;
  billedBy: StringAggregateSelectionNullable;
  costCenter: StringAggregateSelectionNullable;
  custodianInformation: StringAggregateSelectionNullable;
  smileTempoId: StringAggregateSelectionNonNullable;
};

export type QcCompleteTemposHasEventAggregateInput = {
  AND?: InputMaybe<Array<QcCompleteTemposHasEventAggregateInput>>;
  OR?: InputMaybe<Array<QcCompleteTemposHasEventAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<QcCompleteTemposHasEventNodeAggregationWhereInput>;
};

export type QcCompleteTemposHasEventConnectFieldInput = {
  connect?: InputMaybe<Array<TempoConnectInput>>;
  where?: InputMaybe<TempoConnectWhere>;
};

export type QcCompleteTemposHasEventConnection = {
  __typename?: "QcCompleteTemposHasEventConnection";
  edges: Array<QcCompleteTemposHasEventRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type QcCompleteTemposHasEventConnectionSort = {
  node?: InputMaybe<TempoSort>;
};

export type QcCompleteTemposHasEventConnectionWhere = {
  AND?: InputMaybe<Array<QcCompleteTemposHasEventConnectionWhere>>;
  OR?: InputMaybe<Array<QcCompleteTemposHasEventConnectionWhere>>;
  node?: InputMaybe<TempoWhere>;
  node_NOT?: InputMaybe<TempoWhere>;
};

export type QcCompleteTemposHasEventCreateFieldInput = {
  node: TempoCreateInput;
};

export type QcCompleteTemposHasEventDeleteFieldInput = {
  delete?: InputMaybe<TempoDeleteInput>;
  where?: InputMaybe<QcCompleteTemposHasEventConnectionWhere>;
};

export type QcCompleteTemposHasEventDisconnectFieldInput = {
  disconnect?: InputMaybe<TempoDisconnectInput>;
  where?: InputMaybe<QcCompleteTemposHasEventConnectionWhere>;
};

export type QcCompleteTemposHasEventFieldInput = {
  connect?: InputMaybe<Array<QcCompleteTemposHasEventConnectFieldInput>>;
  create?: InputMaybe<Array<QcCompleteTemposHasEventCreateFieldInput>>;
};

export type QcCompleteTemposHasEventNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<QcCompleteTemposHasEventNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<QcCompleteTemposHasEventNodeAggregationWhereInput>>;
  accessLevel_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  accessLevel_EQUAL?: InputMaybe<Scalars["String"]>;
  accessLevel_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  billedBy_EQUAL?: InputMaybe<Scalars["String"]>;
  billedBy_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  costCenter_EQUAL?: InputMaybe<Scalars["String"]>;
  costCenter_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  custodianInformation_EQUAL?: InputMaybe<Scalars["String"]>;
  custodianInformation_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  smileTempoId_EQUAL?: InputMaybe<Scalars["String"]>;
  smileTempoId_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type QcCompleteTemposHasEventRelationship = {
  __typename?: "QcCompleteTemposHasEventRelationship";
  cursor: Scalars["String"];
  node: Tempo;
};

export type QcCompleteTemposHasEventUpdateConnectionInput = {
  node?: InputMaybe<TempoUpdateInput>;
};

export type QcCompleteTemposHasEventUpdateFieldInput = {
  connect?: InputMaybe<Array<QcCompleteTemposHasEventConnectFieldInput>>;
  create?: InputMaybe<Array<QcCompleteTemposHasEventCreateFieldInput>>;
  delete?: InputMaybe<Array<QcCompleteTemposHasEventDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<QcCompleteTemposHasEventDisconnectFieldInput>>;
  update?: InputMaybe<QcCompleteTemposHasEventUpdateConnectionInput>;
  where?: InputMaybe<QcCompleteTemposHasEventConnectionWhere>;
};

export type QcCompleteUpdateInput = {
  date?: InputMaybe<Scalars["String"]>;
  reason?: InputMaybe<Scalars["String"]>;
  result?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  temposHasEvent?: InputMaybe<Array<QcCompleteTemposHasEventUpdateFieldInput>>;
};

export type QcCompleteWhere = {
  AND?: InputMaybe<Array<QcCompleteWhere>>;
  OR?: InputMaybe<Array<QcCompleteWhere>>;
  date?: InputMaybe<Scalars["String"]>;
  date_CONTAINS?: InputMaybe<Scalars["String"]>;
  date_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  date_IN?: InputMaybe<Array<Scalars["String"]>>;
  date_NOT?: InputMaybe<Scalars["String"]>;
  date_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  date_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  date_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  date_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  date_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  reason?: InputMaybe<Scalars["String"]>;
  reason_CONTAINS?: InputMaybe<Scalars["String"]>;
  reason_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  reason_IN?: InputMaybe<Array<Scalars["String"]>>;
  reason_NOT?: InputMaybe<Scalars["String"]>;
  reason_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  reason_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  reason_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  reason_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  reason_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  result?: InputMaybe<Scalars["String"]>;
  result_CONTAINS?: InputMaybe<Scalars["String"]>;
  result_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  result_IN?: InputMaybe<Array<Scalars["String"]>>;
  result_NOT?: InputMaybe<Scalars["String"]>;
  result_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  result_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  result_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  result_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  result_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  status_CONTAINS?: InputMaybe<Scalars["String"]>;
  status_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  status_IN?: InputMaybe<Array<Scalars["String"]>>;
  status_NOT?: InputMaybe<Scalars["String"]>;
  status_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  status_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  status_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  status_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  status_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  temposHasEventAggregate?: InputMaybe<QcCompleteTemposHasEventAggregateInput>;
  temposHasEventConnection_ALL?: InputMaybe<QcCompleteTemposHasEventConnectionWhere>;
  temposHasEventConnection_NONE?: InputMaybe<QcCompleteTemposHasEventConnectionWhere>;
  temposHasEventConnection_SINGLE?: InputMaybe<QcCompleteTemposHasEventConnectionWhere>;
  temposHasEventConnection_SOME?: InputMaybe<QcCompleteTemposHasEventConnectionWhere>;
  /** Return QcCompletes where all of the related Tempos match this filter */
  temposHasEvent_ALL?: InputMaybe<TempoWhere>;
  /** Return QcCompletes where none of the related Tempos match this filter */
  temposHasEvent_NONE?: InputMaybe<TempoWhere>;
  /** Return QcCompletes where one of the related Tempos match this filter */
  temposHasEvent_SINGLE?: InputMaybe<TempoWhere>;
  /** Return QcCompletes where some of the related Tempos match this filter */
  temposHasEvent_SOME?: InputMaybe<TempoWhere>;
};

export type QcCompletesConnection = {
  __typename?: "QcCompletesConnection";
  edges: Array<QcCompleteEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type Query = {
  __typename?: "Query";
  bamCompletes: Array<BamComplete>;
  bamCompletesAggregate: BamCompleteAggregateSelection;
  bamCompletesConnection: BamCompletesConnection;
  cohortCompletes: Array<CohortComplete>;
  cohortCompletesAggregate: CohortCompleteAggregateSelection;
  cohortCompletesConnection: CohortCompletesConnection;
  cohorts: Array<Cohort>;
  cohortsAggregate: CohortAggregateSelection;
  cohortsConnection: CohortsConnection;
  mafCompletes: Array<MafComplete>;
  mafCompletesAggregate: MafCompleteAggregateSelection;
  mafCompletesConnection: MafCompletesConnection;
  patientAliases: Array<PatientAlias>;
  patientAliasesAggregate: PatientAliasAggregateSelection;
  patientAliasesConnection: PatientAliasesConnection;
  patientIdsTriplets?: Maybe<Array<Maybe<PatientIdsTriplet>>>;
  patients: Array<Patient>;
  patientsAggregate: PatientAggregateSelection;
  patientsConnection: PatientsConnection;
  projects: Array<Project>;
  projectsAggregate: ProjectAggregateSelection;
  projectsConnection: ProjectsConnection;
  qcCompletes: Array<QcComplete>;
  qcCompletesAggregate: QcCompleteAggregateSelection;
  qcCompletesConnection: QcCompletesConnection;
  requestMetadata: Array<RequestMetadata>;
  requestMetadataAggregate: RequestMetadataAggregateSelection;
  requestMetadataConnection: RequestMetadataConnection;
  requests: Array<Request>;
  requestsAggregate: RequestAggregateSelection;
  requestsConnection: RequestsConnection;
  sampleAliases: Array<SampleAlias>;
  sampleAliasesAggregate: SampleAliasAggregateSelection;
  sampleAliasesConnection: SampleAliasesConnection;
  sampleMetadata: Array<SampleMetadata>;
  sampleMetadataAggregate: SampleMetadataAggregateSelection;
  sampleMetadataConnection: SampleMetadataConnection;
  samples: Array<Sample>;
  samplesAggregate: SampleAggregateSelection;
  samplesConnection: SamplesConnection;
  statuses: Array<Status>;
  statusesAggregate: StatusAggregateSelection;
  statusesConnection: StatusesConnection;
  tempos: Array<Tempo>;
  temposAggregate: TempoAggregateSelection;
  temposConnection: TemposConnection;
};

export type QueryBamCompletesArgs = {
  options?: InputMaybe<BamCompleteOptions>;
  where?: InputMaybe<BamCompleteWhere>;
};

export type QueryBamCompletesAggregateArgs = {
  where?: InputMaybe<BamCompleteWhere>;
};

export type QueryBamCompletesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<InputMaybe<BamCompleteSort>>>;
  where?: InputMaybe<BamCompleteWhere>;
};

export type QueryCohortCompletesArgs = {
  options?: InputMaybe<CohortCompleteOptions>;
  where?: InputMaybe<CohortCompleteWhere>;
};

export type QueryCohortCompletesAggregateArgs = {
  where?: InputMaybe<CohortCompleteWhere>;
};

export type QueryCohortCompletesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<InputMaybe<CohortCompleteSort>>>;
  where?: InputMaybe<CohortCompleteWhere>;
};

export type QueryCohortsArgs = {
  options?: InputMaybe<CohortOptions>;
  where?: InputMaybe<CohortWhere>;
};

export type QueryCohortsAggregateArgs = {
  where?: InputMaybe<CohortWhere>;
};

export type QueryCohortsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<InputMaybe<CohortSort>>>;
  where?: InputMaybe<CohortWhere>;
};

export type QueryMafCompletesArgs = {
  options?: InputMaybe<MafCompleteOptions>;
  where?: InputMaybe<MafCompleteWhere>;
};

export type QueryMafCompletesAggregateArgs = {
  where?: InputMaybe<MafCompleteWhere>;
};

export type QueryMafCompletesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<InputMaybe<MafCompleteSort>>>;
  where?: InputMaybe<MafCompleteWhere>;
};

export type QueryPatientAliasesArgs = {
  options?: InputMaybe<PatientAliasOptions>;
  where?: InputMaybe<PatientAliasWhere>;
};

export type QueryPatientAliasesAggregateArgs = {
  where?: InputMaybe<PatientAliasWhere>;
};

export type QueryPatientAliasesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<InputMaybe<PatientAliasSort>>>;
  where?: InputMaybe<PatientAliasWhere>;
};

export type QueryPatientIdsTripletsArgs = {
  patientIds: Array<Scalars["String"]>;
};

export type QueryPatientsArgs = {
  options?: InputMaybe<PatientOptions>;
  where?: InputMaybe<PatientWhere>;
};

export type QueryPatientsAggregateArgs = {
  where?: InputMaybe<PatientWhere>;
};

export type QueryPatientsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<InputMaybe<PatientSort>>>;
  where?: InputMaybe<PatientWhere>;
};

export type QueryProjectsArgs = {
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};

export type QueryProjectsAggregateArgs = {
  where?: InputMaybe<ProjectWhere>;
};

export type QueryProjectsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<InputMaybe<ProjectSort>>>;
  where?: InputMaybe<ProjectWhere>;
};

export type QueryQcCompletesArgs = {
  options?: InputMaybe<QcCompleteOptions>;
  where?: InputMaybe<QcCompleteWhere>;
};

export type QueryQcCompletesAggregateArgs = {
  where?: InputMaybe<QcCompleteWhere>;
};

export type QueryQcCompletesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<InputMaybe<QcCompleteSort>>>;
  where?: InputMaybe<QcCompleteWhere>;
};

export type QueryRequestMetadataArgs = {
  options?: InputMaybe<RequestMetadataOptions>;
  where?: InputMaybe<RequestMetadataWhere>;
};

export type QueryRequestMetadataAggregateArgs = {
  where?: InputMaybe<RequestMetadataWhere>;
};

export type QueryRequestMetadataConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<InputMaybe<RequestMetadataSort>>>;
  where?: InputMaybe<RequestMetadataWhere>;
};

export type QueryRequestsArgs = {
  options?: InputMaybe<RequestOptions>;
  where?: InputMaybe<RequestWhere>;
};

export type QueryRequestsAggregateArgs = {
  where?: InputMaybe<RequestWhere>;
};

export type QueryRequestsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<InputMaybe<RequestSort>>>;
  where?: InputMaybe<RequestWhere>;
};

export type QuerySampleAliasesArgs = {
  options?: InputMaybe<SampleAliasOptions>;
  where?: InputMaybe<SampleAliasWhere>;
};

export type QuerySampleAliasesAggregateArgs = {
  where?: InputMaybe<SampleAliasWhere>;
};

export type QuerySampleAliasesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<InputMaybe<SampleAliasSort>>>;
  where?: InputMaybe<SampleAliasWhere>;
};

export type QuerySampleMetadataArgs = {
  options?: InputMaybe<SampleMetadataOptions>;
  where?: InputMaybe<SampleMetadataWhere>;
};

export type QuerySampleMetadataAggregateArgs = {
  where?: InputMaybe<SampleMetadataWhere>;
};

export type QuerySampleMetadataConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<InputMaybe<SampleMetadataSort>>>;
  where?: InputMaybe<SampleMetadataWhere>;
};

export type QuerySamplesArgs = {
  options?: InputMaybe<SampleOptions>;
  where?: InputMaybe<SampleWhere>;
};

export type QuerySamplesAggregateArgs = {
  where?: InputMaybe<SampleWhere>;
};

export type QuerySamplesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<InputMaybe<SampleSort>>>;
  where?: InputMaybe<SampleWhere>;
};

export type QueryStatusesArgs = {
  options?: InputMaybe<StatusOptions>;
  where?: InputMaybe<StatusWhere>;
};

export type QueryStatusesAggregateArgs = {
  where?: InputMaybe<StatusWhere>;
};

export type QueryStatusesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<InputMaybe<StatusSort>>>;
  where?: InputMaybe<StatusWhere>;
};

export type QueryTemposArgs = {
  options?: InputMaybe<TempoOptions>;
  where?: InputMaybe<TempoWhere>;
};

export type QueryTemposAggregateArgs = {
  where?: InputMaybe<TempoWhere>;
};

export type QueryTemposConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<InputMaybe<TempoSort>>>;
  where?: InputMaybe<TempoWhere>;
};

export type Request = {
  __typename?: "Request";
  bicAnalysis: Scalars["Boolean"];
  dataAccessEmails: Scalars["String"];
  dataAnalystEmail: Scalars["String"];
  dataAnalystName: Scalars["String"];
  genePanel: Scalars["String"];
  hasMetadataRequestMetadata: Array<RequestMetadata>;
  hasMetadataRequestMetadataAggregate?: Maybe<RequestRequestMetadataHasMetadataRequestMetadataAggregationSelection>;
  hasMetadataRequestMetadataConnection: RequestHasMetadataRequestMetadataConnection;
  hasSampleSamples: Array<Sample>;
  hasSampleSamplesAggregate?: Maybe<RequestSampleHasSampleSamplesAggregationSelection>;
  hasSampleSamplesConnection: RequestHasSampleSamplesConnection;
  igoProjectId: Scalars["String"];
  igoRequestId: Scalars["String"];
  importDate?: Maybe<Scalars["String"]>;
  investigatorEmail: Scalars["String"];
  investigatorName: Scalars["String"];
  isCmoRequest: Scalars["Boolean"];
  labHeadEmail: Scalars["String"];
  labHeadName: Scalars["String"];
  libraryType?: Maybe<Scalars["String"]>;
  namespace: Scalars["String"];
  otherContactEmails: Scalars["String"];
  piEmail: Scalars["String"];
  pooledNormals?: Maybe<Array<Maybe<Scalars["String"]>>>;
  projectManagerName: Scalars["String"];
  projectsHasRequest: Array<Project>;
  projectsHasRequestAggregate?: Maybe<RequestProjectProjectsHasRequestAggregationSelection>;
  projectsHasRequestConnection: RequestProjectsHasRequestConnection;
  qcAccessEmails: Scalars["String"];
  requestJson: Scalars["String"];
  smileRequestId: Scalars["String"];
  strand?: Maybe<Scalars["String"]>;
  totalSampleCount?: Maybe<Scalars["Int"]>;
};

export type RequestHasMetadataRequestMetadataArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<RequestMetadataOptions>;
  where?: InputMaybe<RequestMetadataWhere>;
};

export type RequestHasMetadataRequestMetadataAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<RequestMetadataWhere>;
};

export type RequestHasMetadataRequestMetadataConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<RequestHasMetadataRequestMetadataConnectionSort>>;
  where?: InputMaybe<RequestHasMetadataRequestMetadataConnectionWhere>;
};

export type RequestHasSampleSamplesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<SampleOptions>;
  where?: InputMaybe<SampleWhere>;
};

export type RequestHasSampleSamplesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<SampleWhere>;
};

export type RequestHasSampleSamplesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<RequestHasSampleSamplesConnectionSort>>;
  where?: InputMaybe<RequestHasSampleSamplesConnectionWhere>;
};

export type RequestProjectsHasRequestArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};

export type RequestProjectsHasRequestAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<ProjectWhere>;
};

export type RequestProjectsHasRequestConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<RequestProjectsHasRequestConnectionSort>>;
  where?: InputMaybe<RequestProjectsHasRequestConnectionWhere>;
};

export type RequestAggregateSelection = {
  __typename?: "RequestAggregateSelection";
  count: Scalars["Int"];
  dataAccessEmails: StringAggregateSelectionNonNullable;
  dataAnalystEmail: StringAggregateSelectionNonNullable;
  dataAnalystName: StringAggregateSelectionNonNullable;
  genePanel: StringAggregateSelectionNonNullable;
  igoProjectId: StringAggregateSelectionNonNullable;
  igoRequestId: StringAggregateSelectionNonNullable;
  importDate: StringAggregateSelectionNullable;
  investigatorEmail: StringAggregateSelectionNonNullable;
  investigatorName: StringAggregateSelectionNonNullable;
  labHeadEmail: StringAggregateSelectionNonNullable;
  labHeadName: StringAggregateSelectionNonNullable;
  libraryType: StringAggregateSelectionNullable;
  namespace: StringAggregateSelectionNonNullable;
  otherContactEmails: StringAggregateSelectionNonNullable;
  piEmail: StringAggregateSelectionNonNullable;
  projectManagerName: StringAggregateSelectionNonNullable;
  qcAccessEmails: StringAggregateSelectionNonNullable;
  requestJson: StringAggregateSelectionNonNullable;
  smileRequestId: StringAggregateSelectionNonNullable;
  strand: StringAggregateSelectionNullable;
  totalSampleCount: IntAggregateSelectionNullable;
};

export type RequestConnectInput = {
  hasMetadataRequestMetadata?: InputMaybe<
    Array<RequestHasMetadataRequestMetadataConnectFieldInput>
  >;
  hasSampleSamples?: InputMaybe<
    Array<RequestHasSampleSamplesConnectFieldInput>
  >;
  projectsHasRequest?: InputMaybe<
    Array<RequestProjectsHasRequestConnectFieldInput>
  >;
};

export type RequestConnectWhere = {
  node: RequestWhere;
};

export type RequestCreateInput = {
  bicAnalysis: Scalars["Boolean"];
  dataAccessEmails: Scalars["String"];
  dataAnalystEmail: Scalars["String"];
  dataAnalystName: Scalars["String"];
  genePanel: Scalars["String"];
  hasMetadataRequestMetadata?: InputMaybe<RequestHasMetadataRequestMetadataFieldInput>;
  hasSampleSamples?: InputMaybe<RequestHasSampleSamplesFieldInput>;
  igoProjectId: Scalars["String"];
  igoRequestId: Scalars["String"];
  importDate?: InputMaybe<Scalars["String"]>;
  investigatorEmail: Scalars["String"];
  investigatorName: Scalars["String"];
  isCmoRequest: Scalars["Boolean"];
  labHeadEmail: Scalars["String"];
  labHeadName: Scalars["String"];
  libraryType?: InputMaybe<Scalars["String"]>;
  namespace: Scalars["String"];
  otherContactEmails: Scalars["String"];
  piEmail: Scalars["String"];
  pooledNormals?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  projectManagerName: Scalars["String"];
  projectsHasRequest?: InputMaybe<RequestProjectsHasRequestFieldInput>;
  qcAccessEmails: Scalars["String"];
  requestJson: Scalars["String"];
  smileRequestId: Scalars["String"];
  strand?: InputMaybe<Scalars["String"]>;
  totalSampleCount?: InputMaybe<Scalars["Int"]>;
};

export type RequestDeleteInput = {
  hasMetadataRequestMetadata?: InputMaybe<
    Array<RequestHasMetadataRequestMetadataDeleteFieldInput>
  >;
  hasSampleSamples?: InputMaybe<Array<RequestHasSampleSamplesDeleteFieldInput>>;
  projectsHasRequest?: InputMaybe<
    Array<RequestProjectsHasRequestDeleteFieldInput>
  >;
};

export type RequestDisconnectInput = {
  hasMetadataRequestMetadata?: InputMaybe<
    Array<RequestHasMetadataRequestMetadataDisconnectFieldInput>
  >;
  hasSampleSamples?: InputMaybe<
    Array<RequestHasSampleSamplesDisconnectFieldInput>
  >;
  projectsHasRequest?: InputMaybe<
    Array<RequestProjectsHasRequestDisconnectFieldInput>
  >;
};

export type RequestEdge = {
  __typename?: "RequestEdge";
  cursor: Scalars["String"];
  node: Request;
};

export type RequestHasMetadataRequestMetadataAggregateInput = {
  AND?: InputMaybe<Array<RequestHasMetadataRequestMetadataAggregateInput>>;
  OR?: InputMaybe<Array<RequestHasMetadataRequestMetadataAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<RequestHasMetadataRequestMetadataNodeAggregationWhereInput>;
};

export type RequestHasMetadataRequestMetadataConnectFieldInput = {
  connect?: InputMaybe<Array<RequestMetadataConnectInput>>;
  where?: InputMaybe<RequestMetadataConnectWhere>;
};

export type RequestHasMetadataRequestMetadataConnection = {
  __typename?: "RequestHasMetadataRequestMetadataConnection";
  edges: Array<RequestHasMetadataRequestMetadataRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type RequestHasMetadataRequestMetadataConnectionSort = {
  node?: InputMaybe<RequestMetadataSort>;
};

export type RequestHasMetadataRequestMetadataConnectionWhere = {
  AND?: InputMaybe<Array<RequestHasMetadataRequestMetadataConnectionWhere>>;
  OR?: InputMaybe<Array<RequestHasMetadataRequestMetadataConnectionWhere>>;
  node?: InputMaybe<RequestMetadataWhere>;
  node_NOT?: InputMaybe<RequestMetadataWhere>;
};

export type RequestHasMetadataRequestMetadataCreateFieldInput = {
  node: RequestMetadataCreateInput;
};

export type RequestHasMetadataRequestMetadataDeleteFieldInput = {
  delete?: InputMaybe<RequestMetadataDeleteInput>;
  where?: InputMaybe<RequestHasMetadataRequestMetadataConnectionWhere>;
};

export type RequestHasMetadataRequestMetadataDisconnectFieldInput = {
  disconnect?: InputMaybe<RequestMetadataDisconnectInput>;
  where?: InputMaybe<RequestHasMetadataRequestMetadataConnectionWhere>;
};

export type RequestHasMetadataRequestMetadataFieldInput = {
  connect?: InputMaybe<
    Array<RequestHasMetadataRequestMetadataConnectFieldInput>
  >;
  create?: InputMaybe<Array<RequestHasMetadataRequestMetadataCreateFieldInput>>;
};

export type RequestHasMetadataRequestMetadataNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<RequestHasMetadataRequestMetadataNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<RequestHasMetadataRequestMetadataNodeAggregationWhereInput>
  >;
  igoRequestId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_EQUAL?: InputMaybe<Scalars["String"]>;
  igoRequestId_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  importDate_EQUAL?: InputMaybe<Scalars["String"]>;
  importDate_GT?: InputMaybe<Scalars["Int"]>;
  importDate_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  requestMetadataJson_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  requestMetadataJson_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  requestMetadataJson_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  requestMetadataJson_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  requestMetadataJson_EQUAL?: InputMaybe<Scalars["String"]>;
  requestMetadataJson_GT?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_GTE?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_LT?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_LTE?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type RequestHasMetadataRequestMetadataRelationship = {
  __typename?: "RequestHasMetadataRequestMetadataRelationship";
  cursor: Scalars["String"];
  node: RequestMetadata;
};

export type RequestHasMetadataRequestMetadataUpdateConnectionInput = {
  node?: InputMaybe<RequestMetadataUpdateInput>;
};

export type RequestHasMetadataRequestMetadataUpdateFieldInput = {
  connect?: InputMaybe<
    Array<RequestHasMetadataRequestMetadataConnectFieldInput>
  >;
  create?: InputMaybe<Array<RequestHasMetadataRequestMetadataCreateFieldInput>>;
  delete?: InputMaybe<Array<RequestHasMetadataRequestMetadataDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<RequestHasMetadataRequestMetadataDisconnectFieldInput>
  >;
  update?: InputMaybe<RequestHasMetadataRequestMetadataUpdateConnectionInput>;
  where?: InputMaybe<RequestHasMetadataRequestMetadataConnectionWhere>;
};

export type RequestHasSampleSamplesAggregateInput = {
  AND?: InputMaybe<Array<RequestHasSampleSamplesAggregateInput>>;
  OR?: InputMaybe<Array<RequestHasSampleSamplesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<RequestHasSampleSamplesNodeAggregationWhereInput>;
};

export type RequestHasSampleSamplesConnectFieldInput = {
  connect?: InputMaybe<Array<SampleConnectInput>>;
  where?: InputMaybe<SampleConnectWhere>;
};

export type RequestHasSampleSamplesConnection = {
  __typename?: "RequestHasSampleSamplesConnection";
  edges: Array<RequestHasSampleSamplesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type RequestHasSampleSamplesConnectionSort = {
  node?: InputMaybe<SampleSort>;
};

export type RequestHasSampleSamplesConnectionWhere = {
  AND?: InputMaybe<Array<RequestHasSampleSamplesConnectionWhere>>;
  OR?: InputMaybe<Array<RequestHasSampleSamplesConnectionWhere>>;
  node?: InputMaybe<SampleWhere>;
  node_NOT?: InputMaybe<SampleWhere>;
};

export type RequestHasSampleSamplesCreateFieldInput = {
  node: SampleCreateInput;
};

export type RequestHasSampleSamplesDeleteFieldInput = {
  delete?: InputMaybe<SampleDeleteInput>;
  where?: InputMaybe<RequestHasSampleSamplesConnectionWhere>;
};

export type RequestHasSampleSamplesDisconnectFieldInput = {
  disconnect?: InputMaybe<SampleDisconnectInput>;
  where?: InputMaybe<RequestHasSampleSamplesConnectionWhere>;
};

export type RequestHasSampleSamplesFieldInput = {
  connect?: InputMaybe<Array<RequestHasSampleSamplesConnectFieldInput>>;
  create?: InputMaybe<Array<RequestHasSampleSamplesCreateFieldInput>>;
};

export type RequestHasSampleSamplesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RequestHasSampleSamplesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RequestHasSampleSamplesNodeAggregationWhereInput>>;
  accessLevel_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  accessLevel_EQUAL?: InputMaybe<Scalars["String"]>;
  accessLevel_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  additionalProperties_EQUAL?: InputMaybe<Scalars["String"]>;
  additionalProperties_GT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_GTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  baitSet_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  baitSet_EQUAL?: InputMaybe<Scalars["String"]>;
  baitSet_GT?: InputMaybe<Scalars["Int"]>;
  baitSet_GTE?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  baitSet_LT?: InputMaybe<Scalars["Int"]>;
  baitSet_LTE?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_EQUAL?: InputMaybe<Scalars["String"]>;
  bamCompleteDate_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_EQUAL?: InputMaybe<Scalars["String"]>;
  bamCompleteStatus_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  billedBy_EQUAL?: InputMaybe<Scalars["String"]>;
  billedBy_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_EQUAL?: InputMaybe<Scalars["String"]>;
  cancerTypeDetailed_GT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_GTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cancerType_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cancerType_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cancerType_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cancerType_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cancerType_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cancerType_EQUAL?: InputMaybe<Scalars["String"]>;
  cancerType_GT?: InputMaybe<Scalars["Int"]>;
  cancerType_GTE?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cancerType_LT?: InputMaybe<Scalars["Int"]>;
  cancerType_LTE?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_EQUAL?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode_GT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_GTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId_GT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_GTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoPatientId_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoSampleName_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  collectionYear_EQUAL?: InputMaybe<Scalars["String"]>;
  collectionYear_GT?: InputMaybe<Scalars["Int"]>;
  collectionYear_GTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_LT?: InputMaybe<Scalars["Int"]>;
  collectionYear_LTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  costCenter_EQUAL?: InputMaybe<Scalars["String"]>;
  costCenter_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  custodianInformation_EQUAL?: InputMaybe<Scalars["String"]>;
  custodianInformation_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  datasource_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  datasource_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  datasource_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  datasource_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  datasource_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  datasource_EQUAL?: InputMaybe<Scalars["String"]>;
  datasource_GT?: InputMaybe<Scalars["Int"]>;
  datasource_GTE?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  datasource_LT?: InputMaybe<Scalars["Int"]>;
  datasource_LTE?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_EQUAL?: InputMaybe<Scalars["String"]>;
  dmpPatientId_GT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_GTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  embargoDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  embargoDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  embargoDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  embargoDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  embargoDate_EQUAL?: InputMaybe<Scalars["String"]>;
  embargoDate_GT?: InputMaybe<Scalars["Int"]>;
  embargoDate_GTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_LT?: InputMaybe<Scalars["Int"]>;
  embargoDate_LTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  genePanel_EQUAL?: InputMaybe<Scalars["String"]>;
  genePanel_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_EQUAL?: InputMaybe<Scalars["String"]>;
  igoRequestId_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  importDate_EQUAL?: InputMaybe<Scalars["String"]>;
  importDate_GT?: InputMaybe<Scalars["Int"]>;
  importDate_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_EQUAL?: InputMaybe<Scalars["String"]>;
  initialPipelineRunDate_GT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_GTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_EQUAL?: InputMaybe<Scalars["String"]>;
  investigatorSampleId_GT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  libraries_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  libraries_EQUAL?: InputMaybe<Scalars["String"]>;
  libraries_GT?: InputMaybe<Scalars["Int"]>;
  libraries_GTE?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  libraries_LT?: InputMaybe<Scalars["Int"]>;
  libraries_LTE?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_EQUAL?: InputMaybe<Scalars["String"]>;
  mafCompleteDate_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_EQUAL?: InputMaybe<Scalars["String"]>;
  mafCompleteNormalPrimaryId_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_EQUAL?: InputMaybe<Scalars["String"]>;
  mafCompleteStatus_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_EQUAL?: InputMaybe<Scalars["String"]>;
  oncotreeCode_GT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_GTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  preservation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  preservation_EQUAL?: InputMaybe<Scalars["String"]>;
  preservation_GT?: InputMaybe<Scalars["Int"]>;
  preservation_GTE?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  preservation_LT?: InputMaybe<Scalars["Int"]>;
  preservation_LTE?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  primaryId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  primaryId_EQUAL?: InputMaybe<Scalars["String"]>;
  primaryId_GT?: InputMaybe<Scalars["Int"]>;
  primaryId_GTE?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  primaryId_LT?: InputMaybe<Scalars["Int"]>;
  primaryId_LTE?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_EQUAL?: InputMaybe<Scalars["String"]>;
  qcCompleteDate_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_EQUAL?: InputMaybe<Scalars["String"]>;
  qcCompleteReason_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_EQUAL?: InputMaybe<Scalars["String"]>;
  qcCompleteResult_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_EQUAL?: InputMaybe<Scalars["String"]>;
  qcCompleteStatus_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcReports_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcReports_EQUAL?: InputMaybe<Scalars["String"]>;
  qcReports_GT?: InputMaybe<Scalars["Int"]>;
  qcReports_GTE?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcReports_LT?: InputMaybe<Scalars["Int"]>;
  qcReports_LTE?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  recipe_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  recipe_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  recipe_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  recipe_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  recipe_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  recipe_EQUAL?: InputMaybe<Scalars["String"]>;
  recipe_GT?: InputMaybe<Scalars["Int"]>;
  recipe_GTE?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  recipe_LT?: InputMaybe<Scalars["Int"]>;
  recipe_LTE?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleCategory_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleCategory_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleCategory_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleCategory_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleCategory_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleCategory_GT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_GTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleClass_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleClass_GT?: InputMaybe<Scalars["Int"]>;
  sampleClass_GTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_LT?: InputMaybe<Scalars["Int"]>;
  sampleClass_LTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleName_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleName_GT?: InputMaybe<Scalars["Int"]>;
  sampleName_GTE?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleName_LT?: InputMaybe<Scalars["Int"]>;
  sampleName_LTE?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleOrigin_GT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_GTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleType_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleType_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleType_GT?: InputMaybe<Scalars["Int"]>;
  sampleType_GTE?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleType_LT?: InputMaybe<Scalars["Int"]>;
  sampleType_LTE?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sex_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sex_EQUAL?: InputMaybe<Scalars["String"]>;
  sex_GT?: InputMaybe<Scalars["Int"]>;
  sex_GTE?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sex_LT?: InputMaybe<Scalars["Int"]>;
  sex_LTE?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  smileSampleId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  smileSampleId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  smileSampleId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  smileSampleId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  smileSampleId_EQUAL?: InputMaybe<Scalars["String"]>;
  smileSampleId_GT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_GTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  smileTempoId_EQUAL?: InputMaybe<Scalars["String"]>;
  smileTempoId_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  species_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  species_EQUAL?: InputMaybe<Scalars["String"]>;
  species_GT?: InputMaybe<Scalars["Int"]>;
  species_GTE?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  species_LT?: InputMaybe<Scalars["Int"]>;
  species_LTE?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  tissueLocation_EQUAL?: InputMaybe<Scalars["String"]>;
  tissueLocation_GT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_GTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  tubeId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  tubeId_EQUAL?: InputMaybe<Scalars["String"]>;
  tubeId_GT?: InputMaybe<Scalars["Int"]>;
  tubeId_GTE?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  tubeId_LT?: InputMaybe<Scalars["Int"]>;
  tubeId_LTE?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_EQUAL?: InputMaybe<Scalars["String"]>;
  tumorOrNormal_GT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_GTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  validationReport_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  validationReport_EQUAL?: InputMaybe<Scalars["String"]>;
  validationReport_GT?: InputMaybe<Scalars["Int"]>;
  validationReport_GTE?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  validationReport_LT?: InputMaybe<Scalars["Int"]>;
  validationReport_LTE?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type RequestHasSampleSamplesRelationship = {
  __typename?: "RequestHasSampleSamplesRelationship";
  cursor: Scalars["String"];
  node: Sample;
};

export type RequestHasSampleSamplesUpdateConnectionInput = {
  node?: InputMaybe<SampleUpdateInput>;
};

export type RequestHasSampleSamplesUpdateFieldInput = {
  connect?: InputMaybe<Array<RequestHasSampleSamplesConnectFieldInput>>;
  create?: InputMaybe<Array<RequestHasSampleSamplesCreateFieldInput>>;
  delete?: InputMaybe<Array<RequestHasSampleSamplesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<RequestHasSampleSamplesDisconnectFieldInput>>;
  update?: InputMaybe<RequestHasSampleSamplesUpdateConnectionInput>;
  where?: InputMaybe<RequestHasSampleSamplesConnectionWhere>;
};

export type RequestMetadata = {
  __typename?: "RequestMetadata";
  hasStatusStatuses: Array<Status>;
  hasStatusStatusesAggregate?: Maybe<RequestMetadataStatusHasStatusStatusesAggregationSelection>;
  hasStatusStatusesConnection: RequestMetadataHasStatusStatusesConnection;
  igoRequestId: Scalars["String"];
  importDate: Scalars["String"];
  requestMetadataJson: Scalars["String"];
  requestsHasMetadata: Array<Request>;
  requestsHasMetadataAggregate?: Maybe<RequestMetadataRequestRequestsHasMetadataAggregationSelection>;
  requestsHasMetadataConnection: RequestMetadataRequestsHasMetadataConnection;
};

export type RequestMetadataHasStatusStatusesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<StatusOptions>;
  where?: InputMaybe<StatusWhere>;
};

export type RequestMetadataHasStatusStatusesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<StatusWhere>;
};

export type RequestMetadataHasStatusStatusesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<RequestMetadataHasStatusStatusesConnectionSort>>;
  where?: InputMaybe<RequestMetadataHasStatusStatusesConnectionWhere>;
};

export type RequestMetadataRequestsHasMetadataArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<RequestOptions>;
  where?: InputMaybe<RequestWhere>;
};

export type RequestMetadataRequestsHasMetadataAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<RequestWhere>;
};

export type RequestMetadataRequestsHasMetadataConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<RequestMetadataRequestsHasMetadataConnectionSort>>;
  where?: InputMaybe<RequestMetadataRequestsHasMetadataConnectionWhere>;
};

export type RequestMetadataAggregateSelection = {
  __typename?: "RequestMetadataAggregateSelection";
  count: Scalars["Int"];
  igoRequestId: StringAggregateSelectionNonNullable;
  importDate: StringAggregateSelectionNonNullable;
  requestMetadataJson: StringAggregateSelectionNonNullable;
};

export type RequestMetadataConnectInput = {
  hasStatusStatuses?: InputMaybe<
    Array<RequestMetadataHasStatusStatusesConnectFieldInput>
  >;
  requestsHasMetadata?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataConnectFieldInput>
  >;
};

export type RequestMetadataConnectWhere = {
  node: RequestMetadataWhere;
};

export type RequestMetadataConnection = {
  __typename?: "RequestMetadataConnection";
  edges: Array<RequestMetadataEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type RequestMetadataCreateInput = {
  hasStatusStatuses?: InputMaybe<RequestMetadataHasStatusStatusesFieldInput>;
  igoRequestId: Scalars["String"];
  importDate: Scalars["String"];
  requestMetadataJson: Scalars["String"];
  requestsHasMetadata?: InputMaybe<RequestMetadataRequestsHasMetadataFieldInput>;
};

export type RequestMetadataDeleteInput = {
  hasStatusStatuses?: InputMaybe<
    Array<RequestMetadataHasStatusStatusesDeleteFieldInput>
  >;
  requestsHasMetadata?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataDeleteFieldInput>
  >;
};

export type RequestMetadataDisconnectInput = {
  hasStatusStatuses?: InputMaybe<
    Array<RequestMetadataHasStatusStatusesDisconnectFieldInput>
  >;
  requestsHasMetadata?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataDisconnectFieldInput>
  >;
};

export type RequestMetadataEdge = {
  __typename?: "RequestMetadataEdge";
  cursor: Scalars["String"];
  node: RequestMetadata;
};

export type RequestMetadataHasStatusStatusesAggregateInput = {
  AND?: InputMaybe<Array<RequestMetadataHasStatusStatusesAggregateInput>>;
  OR?: InputMaybe<Array<RequestMetadataHasStatusStatusesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<RequestMetadataHasStatusStatusesNodeAggregationWhereInput>;
};

export type RequestMetadataHasStatusStatusesConnectFieldInput = {
  connect?: InputMaybe<Array<StatusConnectInput>>;
  where?: InputMaybe<StatusConnectWhere>;
};

export type RequestMetadataHasStatusStatusesConnection = {
  __typename?: "RequestMetadataHasStatusStatusesConnection";
  edges: Array<RequestMetadataHasStatusStatusesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type RequestMetadataHasStatusStatusesConnectionSort = {
  node?: InputMaybe<StatusSort>;
};

export type RequestMetadataHasStatusStatusesConnectionWhere = {
  AND?: InputMaybe<Array<RequestMetadataHasStatusStatusesConnectionWhere>>;
  OR?: InputMaybe<Array<RequestMetadataHasStatusStatusesConnectionWhere>>;
  node?: InputMaybe<StatusWhere>;
  node_NOT?: InputMaybe<StatusWhere>;
};

export type RequestMetadataHasStatusStatusesCreateFieldInput = {
  node: StatusCreateInput;
};

export type RequestMetadataHasStatusStatusesDeleteFieldInput = {
  delete?: InputMaybe<StatusDeleteInput>;
  where?: InputMaybe<RequestMetadataHasStatusStatusesConnectionWhere>;
};

export type RequestMetadataHasStatusStatusesDisconnectFieldInput = {
  disconnect?: InputMaybe<StatusDisconnectInput>;
  where?: InputMaybe<RequestMetadataHasStatusStatusesConnectionWhere>;
};

export type RequestMetadataHasStatusStatusesFieldInput = {
  connect?: InputMaybe<
    Array<RequestMetadataHasStatusStatusesConnectFieldInput>
  >;
  create?: InputMaybe<Array<RequestMetadataHasStatusStatusesCreateFieldInput>>;
};

export type RequestMetadataHasStatusStatusesNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<RequestMetadataHasStatusStatusesNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<RequestMetadataHasStatusStatusesNodeAggregationWhereInput>
  >;
  validationReport_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  validationReport_EQUAL?: InputMaybe<Scalars["String"]>;
  validationReport_GT?: InputMaybe<Scalars["Int"]>;
  validationReport_GTE?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  validationReport_LT?: InputMaybe<Scalars["Int"]>;
  validationReport_LTE?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type RequestMetadataHasStatusStatusesRelationship = {
  __typename?: "RequestMetadataHasStatusStatusesRelationship";
  cursor: Scalars["String"];
  node: Status;
};

export type RequestMetadataHasStatusStatusesUpdateConnectionInput = {
  node?: InputMaybe<StatusUpdateInput>;
};

export type RequestMetadataHasStatusStatusesUpdateFieldInput = {
  connect?: InputMaybe<
    Array<RequestMetadataHasStatusStatusesConnectFieldInput>
  >;
  create?: InputMaybe<Array<RequestMetadataHasStatusStatusesCreateFieldInput>>;
  delete?: InputMaybe<Array<RequestMetadataHasStatusStatusesDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<RequestMetadataHasStatusStatusesDisconnectFieldInput>
  >;
  update?: InputMaybe<RequestMetadataHasStatusStatusesUpdateConnectionInput>;
  where?: InputMaybe<RequestMetadataHasStatusStatusesConnectionWhere>;
};

export type RequestMetadataOptions = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more RequestMetadataSort objects to sort RequestMetadata by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<RequestMetadataSort>>;
};

export type RequestMetadataRelationInput = {
  hasStatusStatuses?: InputMaybe<
    Array<RequestMetadataHasStatusStatusesCreateFieldInput>
  >;
  requestsHasMetadata?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataCreateFieldInput>
  >;
};

export type RequestMetadataRequestRequestsHasMetadataAggregationSelection = {
  __typename?: "RequestMetadataRequestRequestsHasMetadataAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<RequestMetadataRequestRequestsHasMetadataNodeAggregateSelection>;
};

export type RequestMetadataRequestRequestsHasMetadataNodeAggregateSelection = {
  __typename?: "RequestMetadataRequestRequestsHasMetadataNodeAggregateSelection";
  dataAccessEmails: StringAggregateSelectionNonNullable;
  dataAnalystEmail: StringAggregateSelectionNonNullable;
  dataAnalystName: StringAggregateSelectionNonNullable;
  genePanel: StringAggregateSelectionNonNullable;
  igoProjectId: StringAggregateSelectionNonNullable;
  igoRequestId: StringAggregateSelectionNonNullable;
  importDate: StringAggregateSelectionNullable;
  investigatorEmail: StringAggregateSelectionNonNullable;
  investigatorName: StringAggregateSelectionNonNullable;
  labHeadEmail: StringAggregateSelectionNonNullable;
  labHeadName: StringAggregateSelectionNonNullable;
  libraryType: StringAggregateSelectionNullable;
  namespace: StringAggregateSelectionNonNullable;
  otherContactEmails: StringAggregateSelectionNonNullable;
  piEmail: StringAggregateSelectionNonNullable;
  projectManagerName: StringAggregateSelectionNonNullable;
  qcAccessEmails: StringAggregateSelectionNonNullable;
  requestJson: StringAggregateSelectionNonNullable;
  smileRequestId: StringAggregateSelectionNonNullable;
  strand: StringAggregateSelectionNullable;
  totalSampleCount: IntAggregateSelectionNullable;
};

export type RequestMetadataRequestsHasMetadataAggregateInput = {
  AND?: InputMaybe<Array<RequestMetadataRequestsHasMetadataAggregateInput>>;
  OR?: InputMaybe<Array<RequestMetadataRequestsHasMetadataAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<RequestMetadataRequestsHasMetadataNodeAggregationWhereInput>;
};

export type RequestMetadataRequestsHasMetadataConnectFieldInput = {
  connect?: InputMaybe<Array<RequestConnectInput>>;
  where?: InputMaybe<RequestConnectWhere>;
};

export type RequestMetadataRequestsHasMetadataConnection = {
  __typename?: "RequestMetadataRequestsHasMetadataConnection";
  edges: Array<RequestMetadataRequestsHasMetadataRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type RequestMetadataRequestsHasMetadataConnectionSort = {
  node?: InputMaybe<RequestSort>;
};

export type RequestMetadataRequestsHasMetadataConnectionWhere = {
  AND?: InputMaybe<Array<RequestMetadataRequestsHasMetadataConnectionWhere>>;
  OR?: InputMaybe<Array<RequestMetadataRequestsHasMetadataConnectionWhere>>;
  node?: InputMaybe<RequestWhere>;
  node_NOT?: InputMaybe<RequestWhere>;
};

export type RequestMetadataRequestsHasMetadataCreateFieldInput = {
  node: RequestCreateInput;
};

export type RequestMetadataRequestsHasMetadataDeleteFieldInput = {
  delete?: InputMaybe<RequestDeleteInput>;
  where?: InputMaybe<RequestMetadataRequestsHasMetadataConnectionWhere>;
};

export type RequestMetadataRequestsHasMetadataDisconnectFieldInput = {
  disconnect?: InputMaybe<RequestDisconnectInput>;
  where?: InputMaybe<RequestMetadataRequestsHasMetadataConnectionWhere>;
};

export type RequestMetadataRequestsHasMetadataFieldInput = {
  connect?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataConnectFieldInput>
  >;
  create?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataCreateFieldInput>
  >;
};

export type RequestMetadataRequestsHasMetadataNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataNodeAggregationWhereInput>
  >;
  dataAccessEmails_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  dataAccessEmails_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  dataAccessEmails_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  dataAccessEmails_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  dataAccessEmails_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  dataAccessEmails_EQUAL?: InputMaybe<Scalars["String"]>;
  dataAccessEmails_GT?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_GTE?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_LT?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_LTE?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  dataAnalystEmail_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  dataAnalystEmail_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  dataAnalystEmail_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  dataAnalystEmail_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  dataAnalystEmail_EQUAL?: InputMaybe<Scalars["String"]>;
  dataAnalystEmail_GT?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_GTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_LT?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_LTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  dataAnalystName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  dataAnalystName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  dataAnalystName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  dataAnalystName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  dataAnalystName_EQUAL?: InputMaybe<Scalars["String"]>;
  dataAnalystName_GT?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_GTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_LT?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_LTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  genePanel_EQUAL?: InputMaybe<Scalars["String"]>;
  genePanel_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoProjectId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  igoProjectId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  igoProjectId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  igoProjectId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  igoProjectId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  igoProjectId_EQUAL?: InputMaybe<Scalars["String"]>;
  igoProjectId_GT?: InputMaybe<Scalars["Int"]>;
  igoProjectId_GTE?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LT?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LTE?: InputMaybe<Scalars["Int"]>;
  igoProjectId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoProjectId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  igoProjectId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoProjectId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  igoProjectId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_EQUAL?: InputMaybe<Scalars["String"]>;
  igoRequestId_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  importDate_EQUAL?: InputMaybe<Scalars["String"]>;
  importDate_GT?: InputMaybe<Scalars["Int"]>;
  importDate_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  investigatorEmail_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  investigatorEmail_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  investigatorEmail_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  investigatorEmail_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  investigatorEmail_EQUAL?: InputMaybe<Scalars["String"]>;
  investigatorEmail_GT?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_LT?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  investigatorName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  investigatorName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  investigatorName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  investigatorName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  investigatorName_EQUAL?: InputMaybe<Scalars["String"]>;
  investigatorName_GT?: InputMaybe<Scalars["Int"]>;
  investigatorName_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorName_LT?: InputMaybe<Scalars["Int"]>;
  investigatorName_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  labHeadEmail_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  labHeadEmail_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  labHeadEmail_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  labHeadEmail_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  labHeadEmail_EQUAL?: InputMaybe<Scalars["String"]>;
  labHeadEmail_GT?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_GTE?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_LT?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_LTE?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  labHeadName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  labHeadName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  labHeadName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  labHeadName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  labHeadName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  labHeadName_EQUAL?: InputMaybe<Scalars["String"]>;
  labHeadName_GT?: InputMaybe<Scalars["Int"]>;
  labHeadName_GTE?: InputMaybe<Scalars["Int"]>;
  labHeadName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  labHeadName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  labHeadName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  labHeadName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  labHeadName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  labHeadName_LT?: InputMaybe<Scalars["Int"]>;
  labHeadName_LTE?: InputMaybe<Scalars["Int"]>;
  labHeadName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  labHeadName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  labHeadName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  labHeadName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  labHeadName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  libraryType_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  libraryType_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  libraryType_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  libraryType_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  libraryType_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  libraryType_EQUAL?: InputMaybe<Scalars["String"]>;
  libraryType_GT?: InputMaybe<Scalars["Int"]>;
  libraryType_GTE?: InputMaybe<Scalars["Int"]>;
  libraryType_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  libraryType_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  libraryType_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  libraryType_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  libraryType_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  libraryType_LT?: InputMaybe<Scalars["Int"]>;
  libraryType_LTE?: InputMaybe<Scalars["Int"]>;
  libraryType_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  libraryType_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  libraryType_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  libraryType_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  libraryType_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  namespace_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  namespace_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  namespace_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  namespace_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  namespace_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  namespace_EQUAL?: InputMaybe<Scalars["String"]>;
  namespace_GT?: InputMaybe<Scalars["Int"]>;
  namespace_GTE?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  namespace_LT?: InputMaybe<Scalars["Int"]>;
  namespace_LTE?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  otherContactEmails_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  otherContactEmails_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  otherContactEmails_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  otherContactEmails_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  otherContactEmails_EQUAL?: InputMaybe<Scalars["String"]>;
  otherContactEmails_GT?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_GTE?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_LT?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_LTE?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  piEmail_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  piEmail_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  piEmail_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  piEmail_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  piEmail_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  piEmail_EQUAL?: InputMaybe<Scalars["String"]>;
  piEmail_GT?: InputMaybe<Scalars["Int"]>;
  piEmail_GTE?: InputMaybe<Scalars["Int"]>;
  piEmail_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  piEmail_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  piEmail_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  piEmail_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  piEmail_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  piEmail_LT?: InputMaybe<Scalars["Int"]>;
  piEmail_LTE?: InputMaybe<Scalars["Int"]>;
  piEmail_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  piEmail_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  piEmail_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  piEmail_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  piEmail_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  projectManagerName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  projectManagerName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  projectManagerName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  projectManagerName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  projectManagerName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  projectManagerName_EQUAL?: InputMaybe<Scalars["String"]>;
  projectManagerName_GT?: InputMaybe<Scalars["Int"]>;
  projectManagerName_GTE?: InputMaybe<Scalars["Int"]>;
  projectManagerName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  projectManagerName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  projectManagerName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  projectManagerName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  projectManagerName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  projectManagerName_LT?: InputMaybe<Scalars["Int"]>;
  projectManagerName_LTE?: InputMaybe<Scalars["Int"]>;
  projectManagerName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  projectManagerName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  projectManagerName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  projectManagerName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  projectManagerName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcAccessEmails_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcAccessEmails_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcAccessEmails_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcAccessEmails_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcAccessEmails_EQUAL?: InputMaybe<Scalars["String"]>;
  qcAccessEmails_GT?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_GTE?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_LT?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_LTE?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  requestJson_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  requestJson_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  requestJson_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  requestJson_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  requestJson_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  requestJson_EQUAL?: InputMaybe<Scalars["String"]>;
  requestJson_GT?: InputMaybe<Scalars["Int"]>;
  requestJson_GTE?: InputMaybe<Scalars["Int"]>;
  requestJson_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  requestJson_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  requestJson_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  requestJson_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  requestJson_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  requestJson_LT?: InputMaybe<Scalars["Int"]>;
  requestJson_LTE?: InputMaybe<Scalars["Int"]>;
  requestJson_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  requestJson_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  requestJson_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  requestJson_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  requestJson_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileRequestId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  smileRequestId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  smileRequestId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  smileRequestId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  smileRequestId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  smileRequestId_EQUAL?: InputMaybe<Scalars["String"]>;
  smileRequestId_GT?: InputMaybe<Scalars["Int"]>;
  smileRequestId_GTE?: InputMaybe<Scalars["Int"]>;
  smileRequestId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileRequestId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  smileRequestId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileRequestId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  smileRequestId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileRequestId_LT?: InputMaybe<Scalars["Int"]>;
  smileRequestId_LTE?: InputMaybe<Scalars["Int"]>;
  smileRequestId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileRequestId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  smileRequestId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileRequestId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  smileRequestId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  strand_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  strand_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  strand_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  strand_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  strand_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  strand_EQUAL?: InputMaybe<Scalars["String"]>;
  strand_GT?: InputMaybe<Scalars["Int"]>;
  strand_GTE?: InputMaybe<Scalars["Int"]>;
  strand_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  strand_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  strand_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  strand_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  strand_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  strand_LT?: InputMaybe<Scalars["Int"]>;
  strand_LTE?: InputMaybe<Scalars["Int"]>;
  strand_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  strand_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  strand_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  strand_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  strand_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_LTE?: InputMaybe<Scalars["Int"]>;
};

export type RequestMetadataRequestsHasMetadataRelationship = {
  __typename?: "RequestMetadataRequestsHasMetadataRelationship";
  cursor: Scalars["String"];
  node: Request;
};

export type RequestMetadataRequestsHasMetadataUpdateConnectionInput = {
  node?: InputMaybe<RequestUpdateInput>;
};

export type RequestMetadataRequestsHasMetadataUpdateFieldInput = {
  connect?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataConnectFieldInput>
  >;
  create?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataCreateFieldInput>
  >;
  delete?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataDeleteFieldInput>
  >;
  disconnect?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataDisconnectFieldInput>
  >;
  update?: InputMaybe<RequestMetadataRequestsHasMetadataUpdateConnectionInput>;
  where?: InputMaybe<RequestMetadataRequestsHasMetadataConnectionWhere>;
};

/** Fields to sort RequestMetadata by. The order in which sorts are applied is not guaranteed when specifying many fields in one RequestMetadataSort object. */
export type RequestMetadataSort = {
  igoRequestId?: InputMaybe<SortDirection>;
  importDate?: InputMaybe<SortDirection>;
  requestMetadataJson?: InputMaybe<SortDirection>;
};

export type RequestMetadataStatusHasStatusStatusesAggregationSelection = {
  __typename?: "RequestMetadataStatusHasStatusStatusesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<RequestMetadataStatusHasStatusStatusesNodeAggregateSelection>;
};

export type RequestMetadataStatusHasStatusStatusesNodeAggregateSelection = {
  __typename?: "RequestMetadataStatusHasStatusStatusesNodeAggregateSelection";
  validationReport: StringAggregateSelectionNonNullable;
};

export type RequestMetadataUpdateInput = {
  hasStatusStatuses?: InputMaybe<
    Array<RequestMetadataHasStatusStatusesUpdateFieldInput>
  >;
  igoRequestId?: InputMaybe<Scalars["String"]>;
  importDate?: InputMaybe<Scalars["String"]>;
  requestMetadataJson?: InputMaybe<Scalars["String"]>;
  requestsHasMetadata?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataUpdateFieldInput>
  >;
};

export type RequestMetadataWhere = {
  AND?: InputMaybe<Array<RequestMetadataWhere>>;
  OR?: InputMaybe<Array<RequestMetadataWhere>>;
  hasStatusStatusesAggregate?: InputMaybe<RequestMetadataHasStatusStatusesAggregateInput>;
  hasStatusStatusesConnection_ALL?: InputMaybe<RequestMetadataHasStatusStatusesConnectionWhere>;
  hasStatusStatusesConnection_NONE?: InputMaybe<RequestMetadataHasStatusStatusesConnectionWhere>;
  hasStatusStatusesConnection_SINGLE?: InputMaybe<RequestMetadataHasStatusStatusesConnectionWhere>;
  hasStatusStatusesConnection_SOME?: InputMaybe<RequestMetadataHasStatusStatusesConnectionWhere>;
  /** Return RequestMetadata where all of the related Statuses match this filter */
  hasStatusStatuses_ALL?: InputMaybe<StatusWhere>;
  /** Return RequestMetadata where none of the related Statuses match this filter */
  hasStatusStatuses_NONE?: InputMaybe<StatusWhere>;
  /** Return RequestMetadata where one of the related Statuses match this filter */
  hasStatusStatuses_SINGLE?: InputMaybe<StatusWhere>;
  /** Return RequestMetadata where some of the related Statuses match this filter */
  hasStatusStatuses_SOME?: InputMaybe<StatusWhere>;
  igoRequestId?: InputMaybe<Scalars["String"]>;
  igoRequestId_CONTAINS?: InputMaybe<Scalars["String"]>;
  igoRequestId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  igoRequestId_IN?: InputMaybe<Array<Scalars["String"]>>;
  igoRequestId_NOT?: InputMaybe<Scalars["String"]>;
  igoRequestId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  igoRequestId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  igoRequestId_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  igoRequestId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  igoRequestId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  importDate?: InputMaybe<Scalars["String"]>;
  importDate_CONTAINS?: InputMaybe<Scalars["String"]>;
  importDate_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  importDate_IN?: InputMaybe<Array<Scalars["String"]>>;
  importDate_NOT?: InputMaybe<Scalars["String"]>;
  importDate_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  importDate_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  importDate_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  importDate_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  importDate_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  requestMetadataJson?: InputMaybe<Scalars["String"]>;
  requestMetadataJson_CONTAINS?: InputMaybe<Scalars["String"]>;
  requestMetadataJson_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  requestMetadataJson_IN?: InputMaybe<Array<Scalars["String"]>>;
  requestMetadataJson_NOT?: InputMaybe<Scalars["String"]>;
  requestMetadataJson_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  requestMetadataJson_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  requestMetadataJson_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  requestMetadataJson_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  requestMetadataJson_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  requestsHasMetadataAggregate?: InputMaybe<RequestMetadataRequestsHasMetadataAggregateInput>;
  requestsHasMetadataConnection_ALL?: InputMaybe<RequestMetadataRequestsHasMetadataConnectionWhere>;
  requestsHasMetadataConnection_NONE?: InputMaybe<RequestMetadataRequestsHasMetadataConnectionWhere>;
  requestsHasMetadataConnection_SINGLE?: InputMaybe<RequestMetadataRequestsHasMetadataConnectionWhere>;
  requestsHasMetadataConnection_SOME?: InputMaybe<RequestMetadataRequestsHasMetadataConnectionWhere>;
  /** Return RequestMetadata where all of the related Requests match this filter */
  requestsHasMetadata_ALL?: InputMaybe<RequestWhere>;
  /** Return RequestMetadata where none of the related Requests match this filter */
  requestsHasMetadata_NONE?: InputMaybe<RequestWhere>;
  /** Return RequestMetadata where one of the related Requests match this filter */
  requestsHasMetadata_SINGLE?: InputMaybe<RequestWhere>;
  /** Return RequestMetadata where some of the related Requests match this filter */
  requestsHasMetadata_SOME?: InputMaybe<RequestWhere>;
};

export type RequestOptions = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more RequestSort objects to sort Requests by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<RequestSort>>;
};

export type RequestProjectProjectsHasRequestAggregationSelection = {
  __typename?: "RequestProjectProjectsHasRequestAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<RequestProjectProjectsHasRequestNodeAggregateSelection>;
};

export type RequestProjectProjectsHasRequestNodeAggregateSelection = {
  __typename?: "RequestProjectProjectsHasRequestNodeAggregateSelection";
  igoProjectId: StringAggregateSelectionNonNullable;
  namespace: StringAggregateSelectionNonNullable;
};

export type RequestProjectsHasRequestAggregateInput = {
  AND?: InputMaybe<Array<RequestProjectsHasRequestAggregateInput>>;
  OR?: InputMaybe<Array<RequestProjectsHasRequestAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<RequestProjectsHasRequestNodeAggregationWhereInput>;
};

export type RequestProjectsHasRequestConnectFieldInput = {
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  where?: InputMaybe<ProjectConnectWhere>;
};

export type RequestProjectsHasRequestConnection = {
  __typename?: "RequestProjectsHasRequestConnection";
  edges: Array<RequestProjectsHasRequestRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type RequestProjectsHasRequestConnectionSort = {
  node?: InputMaybe<ProjectSort>;
};

export type RequestProjectsHasRequestConnectionWhere = {
  AND?: InputMaybe<Array<RequestProjectsHasRequestConnectionWhere>>;
  OR?: InputMaybe<Array<RequestProjectsHasRequestConnectionWhere>>;
  node?: InputMaybe<ProjectWhere>;
  node_NOT?: InputMaybe<ProjectWhere>;
};

export type RequestProjectsHasRequestCreateFieldInput = {
  node: ProjectCreateInput;
};

export type RequestProjectsHasRequestDeleteFieldInput = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<RequestProjectsHasRequestConnectionWhere>;
};

export type RequestProjectsHasRequestDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  where?: InputMaybe<RequestProjectsHasRequestConnectionWhere>;
};

export type RequestProjectsHasRequestFieldInput = {
  connect?: InputMaybe<Array<RequestProjectsHasRequestConnectFieldInput>>;
  create?: InputMaybe<Array<RequestProjectsHasRequestCreateFieldInput>>;
};

export type RequestProjectsHasRequestNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RequestProjectsHasRequestNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RequestProjectsHasRequestNodeAggregationWhereInput>>;
  igoProjectId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  igoProjectId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  igoProjectId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  igoProjectId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  igoProjectId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  igoProjectId_EQUAL?: InputMaybe<Scalars["String"]>;
  igoProjectId_GT?: InputMaybe<Scalars["Int"]>;
  igoProjectId_GTE?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LT?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LTE?: InputMaybe<Scalars["Int"]>;
  igoProjectId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoProjectId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  igoProjectId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoProjectId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  igoProjectId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  namespace_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  namespace_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  namespace_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  namespace_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  namespace_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  namespace_EQUAL?: InputMaybe<Scalars["String"]>;
  namespace_GT?: InputMaybe<Scalars["Int"]>;
  namespace_GTE?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  namespace_LT?: InputMaybe<Scalars["Int"]>;
  namespace_LTE?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type RequestProjectsHasRequestRelationship = {
  __typename?: "RequestProjectsHasRequestRelationship";
  cursor: Scalars["String"];
  node: Project;
};

export type RequestProjectsHasRequestUpdateConnectionInput = {
  node?: InputMaybe<ProjectUpdateInput>;
};

export type RequestProjectsHasRequestUpdateFieldInput = {
  connect?: InputMaybe<Array<RequestProjectsHasRequestConnectFieldInput>>;
  create?: InputMaybe<Array<RequestProjectsHasRequestCreateFieldInput>>;
  delete?: InputMaybe<Array<RequestProjectsHasRequestDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<RequestProjectsHasRequestDisconnectFieldInput>>;
  update?: InputMaybe<RequestProjectsHasRequestUpdateConnectionInput>;
  where?: InputMaybe<RequestProjectsHasRequestConnectionWhere>;
};

export type RequestRelationInput = {
  hasMetadataRequestMetadata?: InputMaybe<
    Array<RequestHasMetadataRequestMetadataCreateFieldInput>
  >;
  hasSampleSamples?: InputMaybe<Array<RequestHasSampleSamplesCreateFieldInput>>;
  projectsHasRequest?: InputMaybe<
    Array<RequestProjectsHasRequestCreateFieldInput>
  >;
};

export type RequestRequestMetadataHasMetadataRequestMetadataAggregationSelection =
  {
    __typename?: "RequestRequestMetadataHasMetadataRequestMetadataAggregationSelection";
    count: Scalars["Int"];
    node?: Maybe<RequestRequestMetadataHasMetadataRequestMetadataNodeAggregateSelection>;
  };

export type RequestRequestMetadataHasMetadataRequestMetadataNodeAggregateSelection =
  {
    __typename?: "RequestRequestMetadataHasMetadataRequestMetadataNodeAggregateSelection";
    igoRequestId: StringAggregateSelectionNonNullable;
    importDate: StringAggregateSelectionNonNullable;
    requestMetadataJson: StringAggregateSelectionNonNullable;
  };

export type RequestSampleHasSampleSamplesAggregationSelection = {
  __typename?: "RequestSampleHasSampleSamplesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<RequestSampleHasSampleSamplesNodeAggregateSelection>;
};

export type RequestSampleHasSampleSamplesNodeAggregateSelection = {
  __typename?: "RequestSampleHasSampleSamplesNodeAggregateSelection";
  accessLevel: StringAggregateSelectionNullable;
  additionalProperties: StringAggregateSelectionNullable;
  baitSet: StringAggregateSelectionNullable;
  bamCompleteDate: StringAggregateSelectionNullable;
  bamCompleteStatus: StringAggregateSelectionNullable;
  billedBy: StringAggregateSelectionNullable;
  cancerType: StringAggregateSelectionNullable;
  cancerTypeDetailed: StringAggregateSelectionNullable;
  cfDNA2dBarcode: StringAggregateSelectionNullable;
  cmoInfoIgoId: StringAggregateSelectionNullable;
  cmoPatientId: StringAggregateSelectionNullable;
  cmoSampleIdFields: StringAggregateSelectionNullable;
  cmoSampleName: StringAggregateSelectionNullable;
  collectionYear: StringAggregateSelectionNullable;
  costCenter: StringAggregateSelectionNullable;
  custodianInformation: StringAggregateSelectionNullable;
  datasource: StringAggregateSelectionNonNullable;
  dmpPatientId: StringAggregateSelectionNullable;
  embargoDate: StringAggregateSelectionNullable;
  genePanel: StringAggregateSelectionNullable;
  igoRequestId: StringAggregateSelectionNullable;
  importDate: StringAggregateSelectionNullable;
  initialPipelineRunDate: StringAggregateSelectionNullable;
  investigatorSampleId: StringAggregateSelectionNullable;
  libraries: StringAggregateSelectionNullable;
  mafCompleteDate: StringAggregateSelectionNullable;
  mafCompleteNormalPrimaryId: StringAggregateSelectionNullable;
  mafCompleteStatus: StringAggregateSelectionNullable;
  oncotreeCode: StringAggregateSelectionNullable;
  preservation: StringAggregateSelectionNullable;
  primaryId: StringAggregateSelectionNullable;
  qcCompleteDate: StringAggregateSelectionNullable;
  qcCompleteReason: StringAggregateSelectionNullable;
  qcCompleteResult: StringAggregateSelectionNullable;
  qcCompleteStatus: StringAggregateSelectionNullable;
  qcReports: StringAggregateSelectionNullable;
  recipe: StringAggregateSelectionNullable;
  sampleCategory: StringAggregateSelectionNonNullable;
  sampleClass: StringAggregateSelectionNonNullable;
  sampleName: StringAggregateSelectionNullable;
  sampleOrigin: StringAggregateSelectionNullable;
  sampleType: StringAggregateSelectionNullable;
  sex: StringAggregateSelectionNullable;
  smileSampleId: StringAggregateSelectionNonNullable;
  smileTempoId: StringAggregateSelectionNullable;
  species: StringAggregateSelectionNullable;
  tissueLocation: StringAggregateSelectionNullable;
  tubeId: StringAggregateSelectionNullable;
  tumorOrNormal: StringAggregateSelectionNullable;
  validationReport: StringAggregateSelectionNullable;
};

/** Fields to sort Requests by. The order in which sorts are applied is not guaranteed when specifying many fields in one RequestSort object. */
export type RequestSort = {
  bicAnalysis?: InputMaybe<SortDirection>;
  dataAccessEmails?: InputMaybe<SortDirection>;
  dataAnalystEmail?: InputMaybe<SortDirection>;
  dataAnalystName?: InputMaybe<SortDirection>;
  genePanel?: InputMaybe<SortDirection>;
  igoProjectId?: InputMaybe<SortDirection>;
  igoRequestId?: InputMaybe<SortDirection>;
  importDate?: InputMaybe<SortDirection>;
  investigatorEmail?: InputMaybe<SortDirection>;
  investigatorName?: InputMaybe<SortDirection>;
  isCmoRequest?: InputMaybe<SortDirection>;
  labHeadEmail?: InputMaybe<SortDirection>;
  labHeadName?: InputMaybe<SortDirection>;
  libraryType?: InputMaybe<SortDirection>;
  namespace?: InputMaybe<SortDirection>;
  otherContactEmails?: InputMaybe<SortDirection>;
  piEmail?: InputMaybe<SortDirection>;
  projectManagerName?: InputMaybe<SortDirection>;
  qcAccessEmails?: InputMaybe<SortDirection>;
  requestJson?: InputMaybe<SortDirection>;
  smileRequestId?: InputMaybe<SortDirection>;
  strand?: InputMaybe<SortDirection>;
  totalSampleCount?: InputMaybe<SortDirection>;
};

export type RequestUpdateInput = {
  bicAnalysis?: InputMaybe<Scalars["Boolean"]>;
  dataAccessEmails?: InputMaybe<Scalars["String"]>;
  dataAnalystEmail?: InputMaybe<Scalars["String"]>;
  dataAnalystName?: InputMaybe<Scalars["String"]>;
  genePanel?: InputMaybe<Scalars["String"]>;
  hasMetadataRequestMetadata?: InputMaybe<
    Array<RequestHasMetadataRequestMetadataUpdateFieldInput>
  >;
  hasSampleSamples?: InputMaybe<Array<RequestHasSampleSamplesUpdateFieldInput>>;
  igoProjectId?: InputMaybe<Scalars["String"]>;
  igoRequestId?: InputMaybe<Scalars["String"]>;
  importDate?: InputMaybe<Scalars["String"]>;
  investigatorEmail?: InputMaybe<Scalars["String"]>;
  investigatorName?: InputMaybe<Scalars["String"]>;
  isCmoRequest?: InputMaybe<Scalars["Boolean"]>;
  labHeadEmail?: InputMaybe<Scalars["String"]>;
  labHeadName?: InputMaybe<Scalars["String"]>;
  libraryType?: InputMaybe<Scalars["String"]>;
  namespace?: InputMaybe<Scalars["String"]>;
  otherContactEmails?: InputMaybe<Scalars["String"]>;
  piEmail?: InputMaybe<Scalars["String"]>;
  pooledNormals?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  pooledNormals_POP?: InputMaybe<Scalars["Int"]>;
  pooledNormals_PUSH?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  projectManagerName?: InputMaybe<Scalars["String"]>;
  projectsHasRequest?: InputMaybe<
    Array<RequestProjectsHasRequestUpdateFieldInput>
  >;
  qcAccessEmails?: InputMaybe<Scalars["String"]>;
  requestJson?: InputMaybe<Scalars["String"]>;
  smileRequestId?: InputMaybe<Scalars["String"]>;
  strand?: InputMaybe<Scalars["String"]>;
  totalSampleCount?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_DECREMENT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_INCREMENT?: InputMaybe<Scalars["Int"]>;
};

export type RequestWhere = {
  AND?: InputMaybe<Array<RequestWhere>>;
  OR?: InputMaybe<Array<RequestWhere>>;
  bicAnalysis?: InputMaybe<Scalars["Boolean"]>;
  bicAnalysis_NOT?: InputMaybe<Scalars["Boolean"]>;
  dataAccessEmails?: InputMaybe<Scalars["String"]>;
  dataAccessEmails_CONTAINS?: InputMaybe<Scalars["String"]>;
  dataAccessEmails_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  dataAccessEmails_IN?: InputMaybe<Array<Scalars["String"]>>;
  dataAccessEmails_NOT?: InputMaybe<Scalars["String"]>;
  dataAccessEmails_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  dataAccessEmails_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  dataAccessEmails_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  dataAccessEmails_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  dataAccessEmails_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  dataAnalystEmail?: InputMaybe<Scalars["String"]>;
  dataAnalystEmail_CONTAINS?: InputMaybe<Scalars["String"]>;
  dataAnalystEmail_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  dataAnalystEmail_IN?: InputMaybe<Array<Scalars["String"]>>;
  dataAnalystEmail_NOT?: InputMaybe<Scalars["String"]>;
  dataAnalystEmail_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  dataAnalystEmail_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  dataAnalystEmail_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  dataAnalystEmail_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  dataAnalystEmail_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  dataAnalystName?: InputMaybe<Scalars["String"]>;
  dataAnalystName_CONTAINS?: InputMaybe<Scalars["String"]>;
  dataAnalystName_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  dataAnalystName_IN?: InputMaybe<Array<Scalars["String"]>>;
  dataAnalystName_NOT?: InputMaybe<Scalars["String"]>;
  dataAnalystName_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  dataAnalystName_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  dataAnalystName_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  dataAnalystName_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  dataAnalystName_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  genePanel?: InputMaybe<Scalars["String"]>;
  genePanel_CONTAINS?: InputMaybe<Scalars["String"]>;
  genePanel_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  genePanel_IN?: InputMaybe<Array<Scalars["String"]>>;
  genePanel_NOT?: InputMaybe<Scalars["String"]>;
  genePanel_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  genePanel_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  genePanel_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  genePanel_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  genePanel_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  hasMetadataRequestMetadataAggregate?: InputMaybe<RequestHasMetadataRequestMetadataAggregateInput>;
  hasMetadataRequestMetadataConnection_ALL?: InputMaybe<RequestHasMetadataRequestMetadataConnectionWhere>;
  hasMetadataRequestMetadataConnection_NONE?: InputMaybe<RequestHasMetadataRequestMetadataConnectionWhere>;
  hasMetadataRequestMetadataConnection_SINGLE?: InputMaybe<RequestHasMetadataRequestMetadataConnectionWhere>;
  hasMetadataRequestMetadataConnection_SOME?: InputMaybe<RequestHasMetadataRequestMetadataConnectionWhere>;
  /** Return Requests where all of the related RequestMetadata match this filter */
  hasMetadataRequestMetadata_ALL?: InputMaybe<RequestMetadataWhere>;
  /** Return Requests where none of the related RequestMetadata match this filter */
  hasMetadataRequestMetadata_NONE?: InputMaybe<RequestMetadataWhere>;
  /** Return Requests where one of the related RequestMetadata match this filter */
  hasMetadataRequestMetadata_SINGLE?: InputMaybe<RequestMetadataWhere>;
  /** Return Requests where some of the related RequestMetadata match this filter */
  hasMetadataRequestMetadata_SOME?: InputMaybe<RequestMetadataWhere>;
  hasSampleSamplesAggregate?: InputMaybe<RequestHasSampleSamplesAggregateInput>;
  hasSampleSamplesConnection_ALL?: InputMaybe<RequestHasSampleSamplesConnectionWhere>;
  hasSampleSamplesConnection_NONE?: InputMaybe<RequestHasSampleSamplesConnectionWhere>;
  hasSampleSamplesConnection_SINGLE?: InputMaybe<RequestHasSampleSamplesConnectionWhere>;
  hasSampleSamplesConnection_SOME?: InputMaybe<RequestHasSampleSamplesConnectionWhere>;
  /** Return Requests where all of the related Samples match this filter */
  hasSampleSamples_ALL?: InputMaybe<SampleWhere>;
  /** Return Requests where none of the related Samples match this filter */
  hasSampleSamples_NONE?: InputMaybe<SampleWhere>;
  /** Return Requests where one of the related Samples match this filter */
  hasSampleSamples_SINGLE?: InputMaybe<SampleWhere>;
  /** Return Requests where some of the related Samples match this filter */
  hasSampleSamples_SOME?: InputMaybe<SampleWhere>;
  igoProjectId?: InputMaybe<Scalars["String"]>;
  igoProjectId_CONTAINS?: InputMaybe<Scalars["String"]>;
  igoProjectId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  igoProjectId_IN?: InputMaybe<Array<Scalars["String"]>>;
  igoProjectId_NOT?: InputMaybe<Scalars["String"]>;
  igoProjectId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  igoProjectId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  igoProjectId_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  igoProjectId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  igoProjectId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  igoRequestId?: InputMaybe<Scalars["String"]>;
  igoRequestId_CONTAINS?: InputMaybe<Scalars["String"]>;
  igoRequestId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  igoRequestId_IN?: InputMaybe<Array<Scalars["String"]>>;
  igoRequestId_NOT?: InputMaybe<Scalars["String"]>;
  igoRequestId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  igoRequestId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  igoRequestId_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  igoRequestId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  igoRequestId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  importDate?: InputMaybe<Scalars["String"]>;
  importDate_CONTAINS?: InputMaybe<Scalars["String"]>;
  importDate_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  importDate_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  importDate_NOT?: InputMaybe<Scalars["String"]>;
  importDate_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  importDate_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  importDate_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  importDate_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  importDate_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  investigatorEmail?: InputMaybe<Scalars["String"]>;
  investigatorEmail_CONTAINS?: InputMaybe<Scalars["String"]>;
  investigatorEmail_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  investigatorEmail_IN?: InputMaybe<Array<Scalars["String"]>>;
  investigatorEmail_NOT?: InputMaybe<Scalars["String"]>;
  investigatorEmail_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  investigatorEmail_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  investigatorEmail_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  investigatorEmail_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  investigatorEmail_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  investigatorName?: InputMaybe<Scalars["String"]>;
  investigatorName_CONTAINS?: InputMaybe<Scalars["String"]>;
  investigatorName_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  investigatorName_IN?: InputMaybe<Array<Scalars["String"]>>;
  investigatorName_NOT?: InputMaybe<Scalars["String"]>;
  investigatorName_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  investigatorName_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  investigatorName_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  investigatorName_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  investigatorName_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  isCmoRequest?: InputMaybe<Scalars["Boolean"]>;
  isCmoRequest_NOT?: InputMaybe<Scalars["Boolean"]>;
  labHeadEmail?: InputMaybe<Scalars["String"]>;
  labHeadEmail_CONTAINS?: InputMaybe<Scalars["String"]>;
  labHeadEmail_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  labHeadEmail_IN?: InputMaybe<Array<Scalars["String"]>>;
  labHeadEmail_NOT?: InputMaybe<Scalars["String"]>;
  labHeadEmail_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  labHeadEmail_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  labHeadEmail_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  labHeadEmail_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  labHeadEmail_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  labHeadName?: InputMaybe<Scalars["String"]>;
  labHeadName_CONTAINS?: InputMaybe<Scalars["String"]>;
  labHeadName_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  labHeadName_IN?: InputMaybe<Array<Scalars["String"]>>;
  labHeadName_NOT?: InputMaybe<Scalars["String"]>;
  labHeadName_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  labHeadName_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  labHeadName_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  labHeadName_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  labHeadName_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  libraryType?: InputMaybe<Scalars["String"]>;
  libraryType_CONTAINS?: InputMaybe<Scalars["String"]>;
  libraryType_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  libraryType_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  libraryType_NOT?: InputMaybe<Scalars["String"]>;
  libraryType_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  libraryType_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  libraryType_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  libraryType_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  libraryType_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  namespace?: InputMaybe<Scalars["String"]>;
  namespace_CONTAINS?: InputMaybe<Scalars["String"]>;
  namespace_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  namespace_IN?: InputMaybe<Array<Scalars["String"]>>;
  namespace_NOT?: InputMaybe<Scalars["String"]>;
  namespace_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  namespace_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  namespace_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  namespace_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  namespace_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  otherContactEmails?: InputMaybe<Scalars["String"]>;
  otherContactEmails_CONTAINS?: InputMaybe<Scalars["String"]>;
  otherContactEmails_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  otherContactEmails_IN?: InputMaybe<Array<Scalars["String"]>>;
  otherContactEmails_NOT?: InputMaybe<Scalars["String"]>;
  otherContactEmails_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  otherContactEmails_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  otherContactEmails_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  otherContactEmails_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  otherContactEmails_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  piEmail?: InputMaybe<Scalars["String"]>;
  piEmail_CONTAINS?: InputMaybe<Scalars["String"]>;
  piEmail_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  piEmail_IN?: InputMaybe<Array<Scalars["String"]>>;
  piEmail_NOT?: InputMaybe<Scalars["String"]>;
  piEmail_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  piEmail_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  piEmail_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  piEmail_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  piEmail_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  pooledNormals?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  pooledNormals_INCLUDES?: InputMaybe<Scalars["String"]>;
  pooledNormals_NOT?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  pooledNormals_NOT_INCLUDES?: InputMaybe<Scalars["String"]>;
  projectManagerName?: InputMaybe<Scalars["String"]>;
  projectManagerName_CONTAINS?: InputMaybe<Scalars["String"]>;
  projectManagerName_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  projectManagerName_IN?: InputMaybe<Array<Scalars["String"]>>;
  projectManagerName_NOT?: InputMaybe<Scalars["String"]>;
  projectManagerName_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  projectManagerName_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  projectManagerName_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  projectManagerName_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  projectManagerName_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  projectsHasRequestAggregate?: InputMaybe<RequestProjectsHasRequestAggregateInput>;
  projectsHasRequestConnection_ALL?: InputMaybe<RequestProjectsHasRequestConnectionWhere>;
  projectsHasRequestConnection_NONE?: InputMaybe<RequestProjectsHasRequestConnectionWhere>;
  projectsHasRequestConnection_SINGLE?: InputMaybe<RequestProjectsHasRequestConnectionWhere>;
  projectsHasRequestConnection_SOME?: InputMaybe<RequestProjectsHasRequestConnectionWhere>;
  /** Return Requests where all of the related Projects match this filter */
  projectsHasRequest_ALL?: InputMaybe<ProjectWhere>;
  /** Return Requests where none of the related Projects match this filter */
  projectsHasRequest_NONE?: InputMaybe<ProjectWhere>;
  /** Return Requests where one of the related Projects match this filter */
  projectsHasRequest_SINGLE?: InputMaybe<ProjectWhere>;
  /** Return Requests where some of the related Projects match this filter */
  projectsHasRequest_SOME?: InputMaybe<ProjectWhere>;
  qcAccessEmails?: InputMaybe<Scalars["String"]>;
  qcAccessEmails_CONTAINS?: InputMaybe<Scalars["String"]>;
  qcAccessEmails_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  qcAccessEmails_IN?: InputMaybe<Array<Scalars["String"]>>;
  qcAccessEmails_NOT?: InputMaybe<Scalars["String"]>;
  qcAccessEmails_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  qcAccessEmails_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  qcAccessEmails_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  qcAccessEmails_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  qcAccessEmails_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  requestJson?: InputMaybe<Scalars["String"]>;
  requestJson_CONTAINS?: InputMaybe<Scalars["String"]>;
  requestJson_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  requestJson_IN?: InputMaybe<Array<Scalars["String"]>>;
  requestJson_NOT?: InputMaybe<Scalars["String"]>;
  requestJson_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  requestJson_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  requestJson_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  requestJson_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  requestJson_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  smileRequestId?: InputMaybe<Scalars["String"]>;
  smileRequestId_CONTAINS?: InputMaybe<Scalars["String"]>;
  smileRequestId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  smileRequestId_IN?: InputMaybe<Array<Scalars["String"]>>;
  smileRequestId_NOT?: InputMaybe<Scalars["String"]>;
  smileRequestId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  smileRequestId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  smileRequestId_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  smileRequestId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  smileRequestId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  strand?: InputMaybe<Scalars["String"]>;
  strand_CONTAINS?: InputMaybe<Scalars["String"]>;
  strand_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  strand_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  strand_NOT?: InputMaybe<Scalars["String"]>;
  strand_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  strand_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  strand_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  strand_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  strand_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  totalSampleCount?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  totalSampleCount_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_NOT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type RequestsConnection = {
  __typename?: "RequestsConnection";
  edges: Array<RequestEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type Sample = {
  __typename?: "Sample";
  accessLevel?: Maybe<Scalars["String"]>;
  additionalProperties?: Maybe<Scalars["String"]>;
  baitSet?: Maybe<Scalars["String"]>;
  bamCompleteDate?: Maybe<Scalars["String"]>;
  bamCompleteStatus?: Maybe<Scalars["String"]>;
  billed?: Maybe<Scalars["Boolean"]>;
  billedBy?: Maybe<Scalars["String"]>;
  cancerType?: Maybe<Scalars["String"]>;
  cancerTypeDetailed?: Maybe<Scalars["String"]>;
  cfDNA2dBarcode?: Maybe<Scalars["String"]>;
  cmoInfoIgoId?: Maybe<Scalars["String"]>;
  cmoPatientId?: Maybe<Scalars["String"]>;
  cmoSampleIdFields?: Maybe<Scalars["String"]>;
  cmoSampleName?: Maybe<Scalars["String"]>;
  cohortsHasCohortSample: Array<Cohort>;
  cohortsHasCohortSampleAggregate?: Maybe<SampleCohortCohortsHasCohortSampleAggregationSelection>;
  cohortsHasCohortSampleConnection: SampleCohortsHasCohortSampleConnection;
  collectionYear?: Maybe<Scalars["String"]>;
  costCenter?: Maybe<Scalars["String"]>;
  custodianInformation?: Maybe<Scalars["String"]>;
  datasource: Scalars["String"];
  dmpPatientId?: Maybe<Scalars["String"]>;
  embargoDate?: Maybe<Scalars["String"]>;
  genePanel?: Maybe<Scalars["String"]>;
  hasMetadataSampleMetadata: Array<SampleMetadata>;
  hasMetadataSampleMetadataAggregate?: Maybe<SampleSampleMetadataHasMetadataSampleMetadataAggregationSelection>;
  hasMetadataSampleMetadataConnection: SampleHasMetadataSampleMetadataConnection;
  hasTempoTempos: Array<Tempo>;
  hasTempoTemposAggregate?: Maybe<SampleTempoHasTempoTemposAggregationSelection>;
  hasTempoTemposConnection: SampleHasTempoTemposConnection;
  igoComplete?: Maybe<Scalars["Boolean"]>;
  igoRequestId?: Maybe<Scalars["String"]>;
  importDate?: Maybe<Scalars["String"]>;
  initialPipelineRunDate?: Maybe<Scalars["String"]>;
  investigatorSampleId?: Maybe<Scalars["String"]>;
  libraries?: Maybe<Scalars["String"]>;
  mafCompleteDate?: Maybe<Scalars["String"]>;
  mafCompleteNormalPrimaryId?: Maybe<Scalars["String"]>;
  mafCompleteStatus?: Maybe<Scalars["String"]>;
  oncotreeCode?: Maybe<Scalars["String"]>;
  patientsHasSample: Array<Patient>;
  patientsHasSampleAggregate?: Maybe<SamplePatientPatientsHasSampleAggregationSelection>;
  patientsHasSampleConnection: SamplePatientsHasSampleConnection;
  preservation?: Maybe<Scalars["String"]>;
  primaryId?: Maybe<Scalars["String"]>;
  qcCompleteDate?: Maybe<Scalars["String"]>;
  qcCompleteReason?: Maybe<Scalars["String"]>;
  qcCompleteResult?: Maybe<Scalars["String"]>;
  qcCompleteStatus?: Maybe<Scalars["String"]>;
  qcReports?: Maybe<Scalars["String"]>;
  recipe?: Maybe<Scalars["String"]>;
  requestsHasSample: Array<Request>;
  requestsHasSampleAggregate?: Maybe<SampleRequestRequestsHasSampleAggregationSelection>;
  requestsHasSampleConnection: SampleRequestsHasSampleConnection;
  revisable: Scalars["Boolean"];
  sampleAliasesIsAlias: Array<SampleAlias>;
  sampleAliasesIsAliasAggregate?: Maybe<SampleSampleAliasSampleAliasesIsAliasAggregationSelection>;
  sampleAliasesIsAliasConnection: SampleSampleAliasesIsAliasConnection;
  sampleCategory: Scalars["String"];
  sampleClass: Scalars["String"];
  sampleName?: Maybe<Scalars["String"]>;
  sampleOrigin?: Maybe<Scalars["String"]>;
  sampleType?: Maybe<Scalars["String"]>;
  sex?: Maybe<Scalars["String"]>;
  smileSampleId: Scalars["String"];
  smileTempoId?: Maybe<Scalars["String"]>;
  species?: Maybe<Scalars["String"]>;
  tissueLocation?: Maybe<Scalars["String"]>;
  tubeId?: Maybe<Scalars["String"]>;
  tumorOrNormal?: Maybe<Scalars["String"]>;
  validationReport?: Maybe<Scalars["String"]>;
  validationStatus?: Maybe<Scalars["Boolean"]>;
};

export type SampleCohortsHasCohortSampleArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<CohortOptions>;
  where?: InputMaybe<CohortWhere>;
};

export type SampleCohortsHasCohortSampleAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<CohortWhere>;
};

export type SampleCohortsHasCohortSampleConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<SampleCohortsHasCohortSampleConnectionSort>>;
  where?: InputMaybe<SampleCohortsHasCohortSampleConnectionWhere>;
};

export type SampleHasMetadataSampleMetadataArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<SampleMetadataOptions>;
  where?: InputMaybe<SampleMetadataWhere>;
};

export type SampleHasMetadataSampleMetadataAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<SampleMetadataWhere>;
};

export type SampleHasMetadataSampleMetadataConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<SampleHasMetadataSampleMetadataConnectionSort>>;
  where?: InputMaybe<SampleHasMetadataSampleMetadataConnectionWhere>;
};

export type SampleHasTempoTemposArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<TempoOptions>;
  where?: InputMaybe<TempoWhere>;
};

export type SampleHasTempoTemposAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<TempoWhere>;
};

export type SampleHasTempoTemposConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<SampleHasTempoTemposConnectionSort>>;
  where?: InputMaybe<SampleHasTempoTemposConnectionWhere>;
};

export type SamplePatientsHasSampleArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<PatientOptions>;
  where?: InputMaybe<PatientWhere>;
};

export type SamplePatientsHasSampleAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<PatientWhere>;
};

export type SamplePatientsHasSampleConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<SamplePatientsHasSampleConnectionSort>>;
  where?: InputMaybe<SamplePatientsHasSampleConnectionWhere>;
};

export type SampleRequestsHasSampleArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<RequestOptions>;
  where?: InputMaybe<RequestWhere>;
};

export type SampleRequestsHasSampleAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<RequestWhere>;
};

export type SampleRequestsHasSampleConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<SampleRequestsHasSampleConnectionSort>>;
  where?: InputMaybe<SampleRequestsHasSampleConnectionWhere>;
};

export type SampleSampleAliasesIsAliasArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<SampleAliasOptions>;
  where?: InputMaybe<SampleAliasWhere>;
};

export type SampleSampleAliasesIsAliasAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<SampleAliasWhere>;
};

export type SampleSampleAliasesIsAliasConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<SampleSampleAliasesIsAliasConnectionSort>>;
  where?: InputMaybe<SampleSampleAliasesIsAliasConnectionWhere>;
};

export type SampleAggregateSelection = {
  __typename?: "SampleAggregateSelection";
  accessLevel: StringAggregateSelectionNullable;
  additionalProperties: StringAggregateSelectionNullable;
  baitSet: StringAggregateSelectionNullable;
  bamCompleteDate: StringAggregateSelectionNullable;
  bamCompleteStatus: StringAggregateSelectionNullable;
  billedBy: StringAggregateSelectionNullable;
  cancerType: StringAggregateSelectionNullable;
  cancerTypeDetailed: StringAggregateSelectionNullable;
  cfDNA2dBarcode: StringAggregateSelectionNullable;
  cmoInfoIgoId: StringAggregateSelectionNullable;
  cmoPatientId: StringAggregateSelectionNullable;
  cmoSampleIdFields: StringAggregateSelectionNullable;
  cmoSampleName: StringAggregateSelectionNullable;
  collectionYear: StringAggregateSelectionNullable;
  costCenter: StringAggregateSelectionNullable;
  count: Scalars["Int"];
  custodianInformation: StringAggregateSelectionNullable;
  datasource: StringAggregateSelectionNonNullable;
  dmpPatientId: StringAggregateSelectionNullable;
  embargoDate: StringAggregateSelectionNullable;
  genePanel: StringAggregateSelectionNullable;
  igoRequestId: StringAggregateSelectionNullable;
  importDate: StringAggregateSelectionNullable;
  initialPipelineRunDate: StringAggregateSelectionNullable;
  investigatorSampleId: StringAggregateSelectionNullable;
  libraries: StringAggregateSelectionNullable;
  mafCompleteDate: StringAggregateSelectionNullable;
  mafCompleteNormalPrimaryId: StringAggregateSelectionNullable;
  mafCompleteStatus: StringAggregateSelectionNullable;
  oncotreeCode: StringAggregateSelectionNullable;
  preservation: StringAggregateSelectionNullable;
  primaryId: StringAggregateSelectionNullable;
  qcCompleteDate: StringAggregateSelectionNullable;
  qcCompleteReason: StringAggregateSelectionNullable;
  qcCompleteResult: StringAggregateSelectionNullable;
  qcCompleteStatus: StringAggregateSelectionNullable;
  qcReports: StringAggregateSelectionNullable;
  recipe: StringAggregateSelectionNullable;
  sampleCategory: StringAggregateSelectionNonNullable;
  sampleClass: StringAggregateSelectionNonNullable;
  sampleName: StringAggregateSelectionNullable;
  sampleOrigin: StringAggregateSelectionNullable;
  sampleType: StringAggregateSelectionNullable;
  sex: StringAggregateSelectionNullable;
  smileSampleId: StringAggregateSelectionNonNullable;
  smileTempoId: StringAggregateSelectionNullable;
  species: StringAggregateSelectionNullable;
  tissueLocation: StringAggregateSelectionNullable;
  tubeId: StringAggregateSelectionNullable;
  tumorOrNormal: StringAggregateSelectionNullable;
  validationReport: StringAggregateSelectionNullable;
};

export type SampleAlias = {
  __typename?: "SampleAlias";
  isAliasSamples: Array<Sample>;
  isAliasSamplesAggregate?: Maybe<SampleAliasSampleIsAliasSamplesAggregationSelection>;
  isAliasSamplesConnection: SampleAliasIsAliasSamplesConnection;
  namespace: Scalars["String"];
  value: Scalars["String"];
};

export type SampleAliasIsAliasSamplesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<SampleOptions>;
  where?: InputMaybe<SampleWhere>;
};

export type SampleAliasIsAliasSamplesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<SampleWhere>;
};

export type SampleAliasIsAliasSamplesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<SampleAliasIsAliasSamplesConnectionSort>>;
  where?: InputMaybe<SampleAliasIsAliasSamplesConnectionWhere>;
};

export type SampleAliasAggregateSelection = {
  __typename?: "SampleAliasAggregateSelection";
  count: Scalars["Int"];
  namespace: StringAggregateSelectionNonNullable;
  value: StringAggregateSelectionNonNullable;
};

export type SampleAliasConnectInput = {
  isAliasSamples?: InputMaybe<
    Array<SampleAliasIsAliasSamplesConnectFieldInput>
  >;
};

export type SampleAliasConnectWhere = {
  node: SampleAliasWhere;
};

export type SampleAliasCreateInput = {
  isAliasSamples?: InputMaybe<SampleAliasIsAliasSamplesFieldInput>;
  namespace: Scalars["String"];
  value: Scalars["String"];
};

export type SampleAliasDeleteInput = {
  isAliasSamples?: InputMaybe<Array<SampleAliasIsAliasSamplesDeleteFieldInput>>;
};

export type SampleAliasDisconnectInput = {
  isAliasSamples?: InputMaybe<
    Array<SampleAliasIsAliasSamplesDisconnectFieldInput>
  >;
};

export type SampleAliasEdge = {
  __typename?: "SampleAliasEdge";
  cursor: Scalars["String"];
  node: SampleAlias;
};

export type SampleAliasIsAliasSamplesAggregateInput = {
  AND?: InputMaybe<Array<SampleAliasIsAliasSamplesAggregateInput>>;
  OR?: InputMaybe<Array<SampleAliasIsAliasSamplesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<SampleAliasIsAliasSamplesNodeAggregationWhereInput>;
};

export type SampleAliasIsAliasSamplesConnectFieldInput = {
  connect?: InputMaybe<Array<SampleConnectInput>>;
  where?: InputMaybe<SampleConnectWhere>;
};

export type SampleAliasIsAliasSamplesConnection = {
  __typename?: "SampleAliasIsAliasSamplesConnection";
  edges: Array<SampleAliasIsAliasSamplesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type SampleAliasIsAliasSamplesConnectionSort = {
  node?: InputMaybe<SampleSort>;
};

export type SampleAliasIsAliasSamplesConnectionWhere = {
  AND?: InputMaybe<Array<SampleAliasIsAliasSamplesConnectionWhere>>;
  OR?: InputMaybe<Array<SampleAliasIsAliasSamplesConnectionWhere>>;
  node?: InputMaybe<SampleWhere>;
  node_NOT?: InputMaybe<SampleWhere>;
};

export type SampleAliasIsAliasSamplesCreateFieldInput = {
  node: SampleCreateInput;
};

export type SampleAliasIsAliasSamplesDeleteFieldInput = {
  delete?: InputMaybe<SampleDeleteInput>;
  where?: InputMaybe<SampleAliasIsAliasSamplesConnectionWhere>;
};

export type SampleAliasIsAliasSamplesDisconnectFieldInput = {
  disconnect?: InputMaybe<SampleDisconnectInput>;
  where?: InputMaybe<SampleAliasIsAliasSamplesConnectionWhere>;
};

export type SampleAliasIsAliasSamplesFieldInput = {
  connect?: InputMaybe<Array<SampleAliasIsAliasSamplesConnectFieldInput>>;
  create?: InputMaybe<Array<SampleAliasIsAliasSamplesCreateFieldInput>>;
};

export type SampleAliasIsAliasSamplesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SampleAliasIsAliasSamplesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<SampleAliasIsAliasSamplesNodeAggregationWhereInput>>;
  accessLevel_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  accessLevel_EQUAL?: InputMaybe<Scalars["String"]>;
  accessLevel_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  additionalProperties_EQUAL?: InputMaybe<Scalars["String"]>;
  additionalProperties_GT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_GTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  baitSet_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  baitSet_EQUAL?: InputMaybe<Scalars["String"]>;
  baitSet_GT?: InputMaybe<Scalars["Int"]>;
  baitSet_GTE?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  baitSet_LT?: InputMaybe<Scalars["Int"]>;
  baitSet_LTE?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_EQUAL?: InputMaybe<Scalars["String"]>;
  bamCompleteDate_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_EQUAL?: InputMaybe<Scalars["String"]>;
  bamCompleteStatus_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  billedBy_EQUAL?: InputMaybe<Scalars["String"]>;
  billedBy_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_EQUAL?: InputMaybe<Scalars["String"]>;
  cancerTypeDetailed_GT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_GTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cancerType_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cancerType_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cancerType_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cancerType_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cancerType_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cancerType_EQUAL?: InputMaybe<Scalars["String"]>;
  cancerType_GT?: InputMaybe<Scalars["Int"]>;
  cancerType_GTE?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cancerType_LT?: InputMaybe<Scalars["Int"]>;
  cancerType_LTE?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_EQUAL?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode_GT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_GTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId_GT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_GTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoPatientId_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoSampleName_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  collectionYear_EQUAL?: InputMaybe<Scalars["String"]>;
  collectionYear_GT?: InputMaybe<Scalars["Int"]>;
  collectionYear_GTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_LT?: InputMaybe<Scalars["Int"]>;
  collectionYear_LTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  costCenter_EQUAL?: InputMaybe<Scalars["String"]>;
  costCenter_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  custodianInformation_EQUAL?: InputMaybe<Scalars["String"]>;
  custodianInformation_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  datasource_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  datasource_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  datasource_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  datasource_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  datasource_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  datasource_EQUAL?: InputMaybe<Scalars["String"]>;
  datasource_GT?: InputMaybe<Scalars["Int"]>;
  datasource_GTE?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  datasource_LT?: InputMaybe<Scalars["Int"]>;
  datasource_LTE?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_EQUAL?: InputMaybe<Scalars["String"]>;
  dmpPatientId_GT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_GTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  embargoDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  embargoDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  embargoDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  embargoDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  embargoDate_EQUAL?: InputMaybe<Scalars["String"]>;
  embargoDate_GT?: InputMaybe<Scalars["Int"]>;
  embargoDate_GTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_LT?: InputMaybe<Scalars["Int"]>;
  embargoDate_LTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  genePanel_EQUAL?: InputMaybe<Scalars["String"]>;
  genePanel_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_EQUAL?: InputMaybe<Scalars["String"]>;
  igoRequestId_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  importDate_EQUAL?: InputMaybe<Scalars["String"]>;
  importDate_GT?: InputMaybe<Scalars["Int"]>;
  importDate_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_EQUAL?: InputMaybe<Scalars["String"]>;
  initialPipelineRunDate_GT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_GTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_EQUAL?: InputMaybe<Scalars["String"]>;
  investigatorSampleId_GT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  libraries_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  libraries_EQUAL?: InputMaybe<Scalars["String"]>;
  libraries_GT?: InputMaybe<Scalars["Int"]>;
  libraries_GTE?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  libraries_LT?: InputMaybe<Scalars["Int"]>;
  libraries_LTE?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_EQUAL?: InputMaybe<Scalars["String"]>;
  mafCompleteDate_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_EQUAL?: InputMaybe<Scalars["String"]>;
  mafCompleteNormalPrimaryId_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_EQUAL?: InputMaybe<Scalars["String"]>;
  mafCompleteStatus_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_EQUAL?: InputMaybe<Scalars["String"]>;
  oncotreeCode_GT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_GTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  preservation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  preservation_EQUAL?: InputMaybe<Scalars["String"]>;
  preservation_GT?: InputMaybe<Scalars["Int"]>;
  preservation_GTE?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  preservation_LT?: InputMaybe<Scalars["Int"]>;
  preservation_LTE?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  primaryId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  primaryId_EQUAL?: InputMaybe<Scalars["String"]>;
  primaryId_GT?: InputMaybe<Scalars["Int"]>;
  primaryId_GTE?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  primaryId_LT?: InputMaybe<Scalars["Int"]>;
  primaryId_LTE?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_EQUAL?: InputMaybe<Scalars["String"]>;
  qcCompleteDate_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_EQUAL?: InputMaybe<Scalars["String"]>;
  qcCompleteReason_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_EQUAL?: InputMaybe<Scalars["String"]>;
  qcCompleteResult_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_EQUAL?: InputMaybe<Scalars["String"]>;
  qcCompleteStatus_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcReports_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcReports_EQUAL?: InputMaybe<Scalars["String"]>;
  qcReports_GT?: InputMaybe<Scalars["Int"]>;
  qcReports_GTE?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcReports_LT?: InputMaybe<Scalars["Int"]>;
  qcReports_LTE?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  recipe_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  recipe_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  recipe_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  recipe_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  recipe_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  recipe_EQUAL?: InputMaybe<Scalars["String"]>;
  recipe_GT?: InputMaybe<Scalars["Int"]>;
  recipe_GTE?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  recipe_LT?: InputMaybe<Scalars["Int"]>;
  recipe_LTE?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleCategory_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleCategory_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleCategory_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleCategory_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleCategory_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleCategory_GT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_GTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleClass_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleClass_GT?: InputMaybe<Scalars["Int"]>;
  sampleClass_GTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_LT?: InputMaybe<Scalars["Int"]>;
  sampleClass_LTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleName_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleName_GT?: InputMaybe<Scalars["Int"]>;
  sampleName_GTE?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleName_LT?: InputMaybe<Scalars["Int"]>;
  sampleName_LTE?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleOrigin_GT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_GTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleType_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleType_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleType_GT?: InputMaybe<Scalars["Int"]>;
  sampleType_GTE?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleType_LT?: InputMaybe<Scalars["Int"]>;
  sampleType_LTE?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sex_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sex_EQUAL?: InputMaybe<Scalars["String"]>;
  sex_GT?: InputMaybe<Scalars["Int"]>;
  sex_GTE?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sex_LT?: InputMaybe<Scalars["Int"]>;
  sex_LTE?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  smileSampleId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  smileSampleId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  smileSampleId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  smileSampleId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  smileSampleId_EQUAL?: InputMaybe<Scalars["String"]>;
  smileSampleId_GT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_GTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  smileTempoId_EQUAL?: InputMaybe<Scalars["String"]>;
  smileTempoId_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  species_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  species_EQUAL?: InputMaybe<Scalars["String"]>;
  species_GT?: InputMaybe<Scalars["Int"]>;
  species_GTE?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  species_LT?: InputMaybe<Scalars["Int"]>;
  species_LTE?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  tissueLocation_EQUAL?: InputMaybe<Scalars["String"]>;
  tissueLocation_GT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_GTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  tubeId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  tubeId_EQUAL?: InputMaybe<Scalars["String"]>;
  tubeId_GT?: InputMaybe<Scalars["Int"]>;
  tubeId_GTE?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  tubeId_LT?: InputMaybe<Scalars["Int"]>;
  tubeId_LTE?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_EQUAL?: InputMaybe<Scalars["String"]>;
  tumorOrNormal_GT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_GTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  validationReport_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  validationReport_EQUAL?: InputMaybe<Scalars["String"]>;
  validationReport_GT?: InputMaybe<Scalars["Int"]>;
  validationReport_GTE?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  validationReport_LT?: InputMaybe<Scalars["Int"]>;
  validationReport_LTE?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type SampleAliasIsAliasSamplesRelationship = {
  __typename?: "SampleAliasIsAliasSamplesRelationship";
  cursor: Scalars["String"];
  node: Sample;
};

export type SampleAliasIsAliasSamplesUpdateConnectionInput = {
  node?: InputMaybe<SampleUpdateInput>;
};

export type SampleAliasIsAliasSamplesUpdateFieldInput = {
  connect?: InputMaybe<Array<SampleAliasIsAliasSamplesConnectFieldInput>>;
  create?: InputMaybe<Array<SampleAliasIsAliasSamplesCreateFieldInput>>;
  delete?: InputMaybe<Array<SampleAliasIsAliasSamplesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SampleAliasIsAliasSamplesDisconnectFieldInput>>;
  update?: InputMaybe<SampleAliasIsAliasSamplesUpdateConnectionInput>;
  where?: InputMaybe<SampleAliasIsAliasSamplesConnectionWhere>;
};

export type SampleAliasOptions = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more SampleAliasSort objects to sort SampleAliases by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SampleAliasSort>>;
};

export type SampleAliasRelationInput = {
  isAliasSamples?: InputMaybe<Array<SampleAliasIsAliasSamplesCreateFieldInput>>;
};

export type SampleAliasSampleIsAliasSamplesAggregationSelection = {
  __typename?: "SampleAliasSampleIsAliasSamplesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<SampleAliasSampleIsAliasSamplesNodeAggregateSelection>;
};

export type SampleAliasSampleIsAliasSamplesNodeAggregateSelection = {
  __typename?: "SampleAliasSampleIsAliasSamplesNodeAggregateSelection";
  accessLevel: StringAggregateSelectionNullable;
  additionalProperties: StringAggregateSelectionNullable;
  baitSet: StringAggregateSelectionNullable;
  bamCompleteDate: StringAggregateSelectionNullable;
  bamCompleteStatus: StringAggregateSelectionNullable;
  billedBy: StringAggregateSelectionNullable;
  cancerType: StringAggregateSelectionNullable;
  cancerTypeDetailed: StringAggregateSelectionNullable;
  cfDNA2dBarcode: StringAggregateSelectionNullable;
  cmoInfoIgoId: StringAggregateSelectionNullable;
  cmoPatientId: StringAggregateSelectionNullable;
  cmoSampleIdFields: StringAggregateSelectionNullable;
  cmoSampleName: StringAggregateSelectionNullable;
  collectionYear: StringAggregateSelectionNullable;
  costCenter: StringAggregateSelectionNullable;
  custodianInformation: StringAggregateSelectionNullable;
  datasource: StringAggregateSelectionNonNullable;
  dmpPatientId: StringAggregateSelectionNullable;
  embargoDate: StringAggregateSelectionNullable;
  genePanel: StringAggregateSelectionNullable;
  igoRequestId: StringAggregateSelectionNullable;
  importDate: StringAggregateSelectionNullable;
  initialPipelineRunDate: StringAggregateSelectionNullable;
  investigatorSampleId: StringAggregateSelectionNullable;
  libraries: StringAggregateSelectionNullable;
  mafCompleteDate: StringAggregateSelectionNullable;
  mafCompleteNormalPrimaryId: StringAggregateSelectionNullable;
  mafCompleteStatus: StringAggregateSelectionNullable;
  oncotreeCode: StringAggregateSelectionNullable;
  preservation: StringAggregateSelectionNullable;
  primaryId: StringAggregateSelectionNullable;
  qcCompleteDate: StringAggregateSelectionNullable;
  qcCompleteReason: StringAggregateSelectionNullable;
  qcCompleteResult: StringAggregateSelectionNullable;
  qcCompleteStatus: StringAggregateSelectionNullable;
  qcReports: StringAggregateSelectionNullable;
  recipe: StringAggregateSelectionNullable;
  sampleCategory: StringAggregateSelectionNonNullable;
  sampleClass: StringAggregateSelectionNonNullable;
  sampleName: StringAggregateSelectionNullable;
  sampleOrigin: StringAggregateSelectionNullable;
  sampleType: StringAggregateSelectionNullable;
  sex: StringAggregateSelectionNullable;
  smileSampleId: StringAggregateSelectionNonNullable;
  smileTempoId: StringAggregateSelectionNullable;
  species: StringAggregateSelectionNullable;
  tissueLocation: StringAggregateSelectionNullable;
  tubeId: StringAggregateSelectionNullable;
  tumorOrNormal: StringAggregateSelectionNullable;
  validationReport: StringAggregateSelectionNullable;
};

/** Fields to sort SampleAliases by. The order in which sorts are applied is not guaranteed when specifying many fields in one SampleAliasSort object. */
export type SampleAliasSort = {
  namespace?: InputMaybe<SortDirection>;
  value?: InputMaybe<SortDirection>;
};

export type SampleAliasUpdateInput = {
  isAliasSamples?: InputMaybe<Array<SampleAliasIsAliasSamplesUpdateFieldInput>>;
  namespace?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["String"]>;
};

export type SampleAliasWhere = {
  AND?: InputMaybe<Array<SampleAliasWhere>>;
  OR?: InputMaybe<Array<SampleAliasWhere>>;
  isAliasSamplesAggregate?: InputMaybe<SampleAliasIsAliasSamplesAggregateInput>;
  isAliasSamplesConnection_ALL?: InputMaybe<SampleAliasIsAliasSamplesConnectionWhere>;
  isAliasSamplesConnection_NONE?: InputMaybe<SampleAliasIsAliasSamplesConnectionWhere>;
  isAliasSamplesConnection_SINGLE?: InputMaybe<SampleAliasIsAliasSamplesConnectionWhere>;
  isAliasSamplesConnection_SOME?: InputMaybe<SampleAliasIsAliasSamplesConnectionWhere>;
  /** Return SampleAliases where all of the related Samples match this filter */
  isAliasSamples_ALL?: InputMaybe<SampleWhere>;
  /** Return SampleAliases where none of the related Samples match this filter */
  isAliasSamples_NONE?: InputMaybe<SampleWhere>;
  /** Return SampleAliases where one of the related Samples match this filter */
  isAliasSamples_SINGLE?: InputMaybe<SampleWhere>;
  /** Return SampleAliases where some of the related Samples match this filter */
  isAliasSamples_SOME?: InputMaybe<SampleWhere>;
  namespace?: InputMaybe<Scalars["String"]>;
  namespace_CONTAINS?: InputMaybe<Scalars["String"]>;
  namespace_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  namespace_IN?: InputMaybe<Array<Scalars["String"]>>;
  namespace_NOT?: InputMaybe<Scalars["String"]>;
  namespace_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  namespace_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  namespace_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  namespace_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  namespace_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["String"]>;
  value_CONTAINS?: InputMaybe<Scalars["String"]>;
  value_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  value_IN?: InputMaybe<Array<Scalars["String"]>>;
  value_NOT?: InputMaybe<Scalars["String"]>;
  value_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  value_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  value_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  value_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  value_STARTS_WITH?: InputMaybe<Scalars["String"]>;
};

export type SampleAliasesConnection = {
  __typename?: "SampleAliasesConnection";
  edges: Array<SampleAliasEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type SampleCohortCohortsHasCohortSampleAggregationSelection = {
  __typename?: "SampleCohortCohortsHasCohortSampleAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<SampleCohortCohortsHasCohortSampleNodeAggregateSelection>;
};

export type SampleCohortCohortsHasCohortSampleNodeAggregateSelection = {
  __typename?: "SampleCohortCohortsHasCohortSampleNodeAggregateSelection";
  billed: StringAggregateSelectionNullable;
  cohortId: StringAggregateSelectionNonNullable;
  endUsers: StringAggregateSelectionNullable;
  initialCohortDeliveryDate: StringAggregateSelectionNullable;
  pmUsers: StringAggregateSelectionNullable;
  projectSubtitle: StringAggregateSelectionNullable;
  projectTitle: StringAggregateSelectionNullable;
  status: StringAggregateSelectionNullable;
  totalSampleCount: IntAggregateSelectionNullable;
  type: StringAggregateSelectionNullable;
};

export type SampleCohortsHasCohortSampleAggregateInput = {
  AND?: InputMaybe<Array<SampleCohortsHasCohortSampleAggregateInput>>;
  OR?: InputMaybe<Array<SampleCohortsHasCohortSampleAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<SampleCohortsHasCohortSampleNodeAggregationWhereInput>;
};

export type SampleCohortsHasCohortSampleConnectFieldInput = {
  connect?: InputMaybe<Array<CohortConnectInput>>;
  where?: InputMaybe<CohortConnectWhere>;
};

export type SampleCohortsHasCohortSampleConnection = {
  __typename?: "SampleCohortsHasCohortSampleConnection";
  edges: Array<SampleCohortsHasCohortSampleRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type SampleCohortsHasCohortSampleConnectionSort = {
  node?: InputMaybe<CohortSort>;
};

export type SampleCohortsHasCohortSampleConnectionWhere = {
  AND?: InputMaybe<Array<SampleCohortsHasCohortSampleConnectionWhere>>;
  OR?: InputMaybe<Array<SampleCohortsHasCohortSampleConnectionWhere>>;
  node?: InputMaybe<CohortWhere>;
  node_NOT?: InputMaybe<CohortWhere>;
};

export type SampleCohortsHasCohortSampleCreateFieldInput = {
  node: CohortCreateInput;
};

export type SampleCohortsHasCohortSampleDeleteFieldInput = {
  delete?: InputMaybe<CohortDeleteInput>;
  where?: InputMaybe<SampleCohortsHasCohortSampleConnectionWhere>;
};

export type SampleCohortsHasCohortSampleDisconnectFieldInput = {
  disconnect?: InputMaybe<CohortDisconnectInput>;
  where?: InputMaybe<SampleCohortsHasCohortSampleConnectionWhere>;
};

export type SampleCohortsHasCohortSampleFieldInput = {
  connect?: InputMaybe<Array<SampleCohortsHasCohortSampleConnectFieldInput>>;
  create?: InputMaybe<Array<SampleCohortsHasCohortSampleCreateFieldInput>>;
};

export type SampleCohortsHasCohortSampleNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<SampleCohortsHasCohortSampleNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<Array<SampleCohortsHasCohortSampleNodeAggregationWhereInput>>;
  billed_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  billed_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  billed_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  billed_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  billed_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  billed_EQUAL?: InputMaybe<Scalars["String"]>;
  billed_GT?: InputMaybe<Scalars["Int"]>;
  billed_GTE?: InputMaybe<Scalars["Int"]>;
  billed_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  billed_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  billed_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  billed_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  billed_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  billed_LT?: InputMaybe<Scalars["Int"]>;
  billed_LTE?: InputMaybe<Scalars["Int"]>;
  billed_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  billed_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  billed_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  billed_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  billed_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cohortId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cohortId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cohortId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cohortId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cohortId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cohortId_EQUAL?: InputMaybe<Scalars["String"]>;
  cohortId_GT?: InputMaybe<Scalars["Int"]>;
  cohortId_GTE?: InputMaybe<Scalars["Int"]>;
  cohortId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cohortId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cohortId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cohortId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cohortId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cohortId_LT?: InputMaybe<Scalars["Int"]>;
  cohortId_LTE?: InputMaybe<Scalars["Int"]>;
  cohortId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cohortId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cohortId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cohortId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cohortId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  endUsers_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  endUsers_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  endUsers_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  endUsers_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  endUsers_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  endUsers_EQUAL?: InputMaybe<Scalars["String"]>;
  endUsers_GT?: InputMaybe<Scalars["Int"]>;
  endUsers_GTE?: InputMaybe<Scalars["Int"]>;
  endUsers_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  endUsers_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  endUsers_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  endUsers_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  endUsers_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  endUsers_LT?: InputMaybe<Scalars["Int"]>;
  endUsers_LTE?: InputMaybe<Scalars["Int"]>;
  endUsers_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  endUsers_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  endUsers_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  endUsers_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  endUsers_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  initialCohortDeliveryDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  initialCohortDeliveryDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  initialCohortDeliveryDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  initialCohortDeliveryDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  initialCohortDeliveryDate_EQUAL?: InputMaybe<Scalars["String"]>;
  initialCohortDeliveryDate_GT?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_GTE?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_LT?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_LTE?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  initialCohortDeliveryDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  pmUsers_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  pmUsers_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  pmUsers_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  pmUsers_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  pmUsers_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  pmUsers_EQUAL?: InputMaybe<Scalars["String"]>;
  pmUsers_GT?: InputMaybe<Scalars["Int"]>;
  pmUsers_GTE?: InputMaybe<Scalars["Int"]>;
  pmUsers_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  pmUsers_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  pmUsers_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  pmUsers_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  pmUsers_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  pmUsers_LT?: InputMaybe<Scalars["Int"]>;
  pmUsers_LTE?: InputMaybe<Scalars["Int"]>;
  pmUsers_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  pmUsers_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  pmUsers_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  pmUsers_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  pmUsers_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  projectSubtitle_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  projectSubtitle_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  projectSubtitle_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  projectSubtitle_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  projectSubtitle_EQUAL?: InputMaybe<Scalars["String"]>;
  projectSubtitle_GT?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_GTE?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_LT?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_LTE?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  projectSubtitle_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  projectTitle_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  projectTitle_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  projectTitle_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  projectTitle_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  projectTitle_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  projectTitle_EQUAL?: InputMaybe<Scalars["String"]>;
  projectTitle_GT?: InputMaybe<Scalars["Int"]>;
  projectTitle_GTE?: InputMaybe<Scalars["Int"]>;
  projectTitle_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  projectTitle_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  projectTitle_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  projectTitle_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  projectTitle_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  projectTitle_LT?: InputMaybe<Scalars["Int"]>;
  projectTitle_LTE?: InputMaybe<Scalars["Int"]>;
  projectTitle_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  projectTitle_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  projectTitle_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  projectTitle_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  projectTitle_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  status_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  status_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  status_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  status_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  status_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  status_EQUAL?: InputMaybe<Scalars["String"]>;
  status_GT?: InputMaybe<Scalars["Int"]>;
  status_GTE?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  status_LT?: InputMaybe<Scalars["Int"]>;
  status_LTE?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_LTE?: InputMaybe<Scalars["Int"]>;
  type_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  type_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  type_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  type_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  type_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  type_EQUAL?: InputMaybe<Scalars["String"]>;
  type_GT?: InputMaybe<Scalars["Int"]>;
  type_GTE?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  type_LT?: InputMaybe<Scalars["Int"]>;
  type_LTE?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type SampleCohortsHasCohortSampleRelationship = {
  __typename?: "SampleCohortsHasCohortSampleRelationship";
  cursor: Scalars["String"];
  node: Cohort;
};

export type SampleCohortsHasCohortSampleUpdateConnectionInput = {
  node?: InputMaybe<CohortUpdateInput>;
};

export type SampleCohortsHasCohortSampleUpdateFieldInput = {
  connect?: InputMaybe<Array<SampleCohortsHasCohortSampleConnectFieldInput>>;
  create?: InputMaybe<Array<SampleCohortsHasCohortSampleCreateFieldInput>>;
  delete?: InputMaybe<Array<SampleCohortsHasCohortSampleDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<SampleCohortsHasCohortSampleDisconnectFieldInput>
  >;
  update?: InputMaybe<SampleCohortsHasCohortSampleUpdateConnectionInput>;
  where?: InputMaybe<SampleCohortsHasCohortSampleConnectionWhere>;
};

export type SampleConnectInput = {
  cohortsHasCohortSample?: InputMaybe<
    Array<SampleCohortsHasCohortSampleConnectFieldInput>
  >;
  hasMetadataSampleMetadata?: InputMaybe<
    Array<SampleHasMetadataSampleMetadataConnectFieldInput>
  >;
  hasTempoTempos?: InputMaybe<Array<SampleHasTempoTemposConnectFieldInput>>;
  patientsHasSample?: InputMaybe<
    Array<SamplePatientsHasSampleConnectFieldInput>
  >;
  requestsHasSample?: InputMaybe<
    Array<SampleRequestsHasSampleConnectFieldInput>
  >;
  sampleAliasesIsAlias?: InputMaybe<
    Array<SampleSampleAliasesIsAliasConnectFieldInput>
  >;
};

export type SampleConnectWhere = {
  node: SampleWhere;
};

export type SampleCreateInput = {
  accessLevel?: InputMaybe<Scalars["String"]>;
  additionalProperties?: InputMaybe<Scalars["String"]>;
  baitSet?: InputMaybe<Scalars["String"]>;
  bamCompleteDate?: InputMaybe<Scalars["String"]>;
  bamCompleteStatus?: InputMaybe<Scalars["String"]>;
  billed?: InputMaybe<Scalars["Boolean"]>;
  billedBy?: InputMaybe<Scalars["String"]>;
  cancerType?: InputMaybe<Scalars["String"]>;
  cancerTypeDetailed?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId?: InputMaybe<Scalars["String"]>;
  cmoPatientId?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields?: InputMaybe<Scalars["String"]>;
  cmoSampleName?: InputMaybe<Scalars["String"]>;
  cohortsHasCohortSample?: InputMaybe<SampleCohortsHasCohortSampleFieldInput>;
  collectionYear?: InputMaybe<Scalars["String"]>;
  costCenter?: InputMaybe<Scalars["String"]>;
  custodianInformation?: InputMaybe<Scalars["String"]>;
  datasource: Scalars["String"];
  dmpPatientId?: InputMaybe<Scalars["String"]>;
  embargoDate?: InputMaybe<Scalars["String"]>;
  genePanel?: InputMaybe<Scalars["String"]>;
  hasMetadataSampleMetadata?: InputMaybe<SampleHasMetadataSampleMetadataFieldInput>;
  hasTempoTempos?: InputMaybe<SampleHasTempoTemposFieldInput>;
  igoComplete?: InputMaybe<Scalars["Boolean"]>;
  igoRequestId?: InputMaybe<Scalars["String"]>;
  importDate?: InputMaybe<Scalars["String"]>;
  initialPipelineRunDate?: InputMaybe<Scalars["String"]>;
  investigatorSampleId?: InputMaybe<Scalars["String"]>;
  libraries?: InputMaybe<Scalars["String"]>;
  mafCompleteDate?: InputMaybe<Scalars["String"]>;
  mafCompleteNormalPrimaryId?: InputMaybe<Scalars["String"]>;
  mafCompleteStatus?: InputMaybe<Scalars["String"]>;
  oncotreeCode?: InputMaybe<Scalars["String"]>;
  patientsHasSample?: InputMaybe<SamplePatientsHasSampleFieldInput>;
  preservation?: InputMaybe<Scalars["String"]>;
  primaryId?: InputMaybe<Scalars["String"]>;
  qcCompleteDate?: InputMaybe<Scalars["String"]>;
  qcCompleteReason?: InputMaybe<Scalars["String"]>;
  qcCompleteResult?: InputMaybe<Scalars["String"]>;
  qcCompleteStatus?: InputMaybe<Scalars["String"]>;
  qcReports?: InputMaybe<Scalars["String"]>;
  recipe?: InputMaybe<Scalars["String"]>;
  requestsHasSample?: InputMaybe<SampleRequestsHasSampleFieldInput>;
  revisable: Scalars["Boolean"];
  sampleAliasesIsAlias?: InputMaybe<SampleSampleAliasesIsAliasFieldInput>;
  sampleCategory: Scalars["String"];
  sampleClass: Scalars["String"];
  sampleName?: InputMaybe<Scalars["String"]>;
  sampleOrigin?: InputMaybe<Scalars["String"]>;
  sampleType?: InputMaybe<Scalars["String"]>;
  sex?: InputMaybe<Scalars["String"]>;
  smileSampleId: Scalars["String"];
  smileTempoId?: InputMaybe<Scalars["String"]>;
  species?: InputMaybe<Scalars["String"]>;
  tissueLocation?: InputMaybe<Scalars["String"]>;
  tubeId?: InputMaybe<Scalars["String"]>;
  tumorOrNormal?: InputMaybe<Scalars["String"]>;
  validationReport?: InputMaybe<Scalars["String"]>;
  validationStatus?: InputMaybe<Scalars["Boolean"]>;
};

export type SampleDeleteInput = {
  cohortsHasCohortSample?: InputMaybe<
    Array<SampleCohortsHasCohortSampleDeleteFieldInput>
  >;
  hasMetadataSampleMetadata?: InputMaybe<
    Array<SampleHasMetadataSampleMetadataDeleteFieldInput>
  >;
  hasTempoTempos?: InputMaybe<Array<SampleHasTempoTemposDeleteFieldInput>>;
  patientsHasSample?: InputMaybe<
    Array<SamplePatientsHasSampleDeleteFieldInput>
  >;
  requestsHasSample?: InputMaybe<
    Array<SampleRequestsHasSampleDeleteFieldInput>
  >;
  sampleAliasesIsAlias?: InputMaybe<
    Array<SampleSampleAliasesIsAliasDeleteFieldInput>
  >;
};

export type SampleDisconnectInput = {
  cohortsHasCohortSample?: InputMaybe<
    Array<SampleCohortsHasCohortSampleDisconnectFieldInput>
  >;
  hasMetadataSampleMetadata?: InputMaybe<
    Array<SampleHasMetadataSampleMetadataDisconnectFieldInput>
  >;
  hasTempoTempos?: InputMaybe<Array<SampleHasTempoTemposDisconnectFieldInput>>;
  patientsHasSample?: InputMaybe<
    Array<SamplePatientsHasSampleDisconnectFieldInput>
  >;
  requestsHasSample?: InputMaybe<
    Array<SampleRequestsHasSampleDisconnectFieldInput>
  >;
  sampleAliasesIsAlias?: InputMaybe<
    Array<SampleSampleAliasesIsAliasDisconnectFieldInput>
  >;
};

export type SampleEdge = {
  __typename?: "SampleEdge";
  cursor: Scalars["String"];
  node: Sample;
};

export type SampleHasMetadataSampleMetadataAggregateInput = {
  AND?: InputMaybe<Array<SampleHasMetadataSampleMetadataAggregateInput>>;
  OR?: InputMaybe<Array<SampleHasMetadataSampleMetadataAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<SampleHasMetadataSampleMetadataNodeAggregationWhereInput>;
};

export type SampleHasMetadataSampleMetadataConnectFieldInput = {
  connect?: InputMaybe<Array<SampleMetadataConnectInput>>;
  where?: InputMaybe<SampleMetadataConnectWhere>;
};

export type SampleHasMetadataSampleMetadataConnection = {
  __typename?: "SampleHasMetadataSampleMetadataConnection";
  edges: Array<SampleHasMetadataSampleMetadataRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type SampleHasMetadataSampleMetadataConnectionSort = {
  node?: InputMaybe<SampleMetadataSort>;
};

export type SampleHasMetadataSampleMetadataConnectionWhere = {
  AND?: InputMaybe<Array<SampleHasMetadataSampleMetadataConnectionWhere>>;
  OR?: InputMaybe<Array<SampleHasMetadataSampleMetadataConnectionWhere>>;
  node?: InputMaybe<SampleMetadataWhere>;
  node_NOT?: InputMaybe<SampleMetadataWhere>;
};

export type SampleHasMetadataSampleMetadataCreateFieldInput = {
  node: SampleMetadataCreateInput;
};

export type SampleHasMetadataSampleMetadataDeleteFieldInput = {
  delete?: InputMaybe<SampleMetadataDeleteInput>;
  where?: InputMaybe<SampleHasMetadataSampleMetadataConnectionWhere>;
};

export type SampleHasMetadataSampleMetadataDisconnectFieldInput = {
  disconnect?: InputMaybe<SampleMetadataDisconnectInput>;
  where?: InputMaybe<SampleHasMetadataSampleMetadataConnectionWhere>;
};

export type SampleHasMetadataSampleMetadataFieldInput = {
  connect?: InputMaybe<Array<SampleHasMetadataSampleMetadataConnectFieldInput>>;
  create?: InputMaybe<Array<SampleHasMetadataSampleMetadataCreateFieldInput>>;
};

export type SampleHasMetadataSampleMetadataNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<SampleHasMetadataSampleMetadataNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<SampleHasMetadataSampleMetadataNodeAggregationWhereInput>
  >;
  additionalProperties_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  additionalProperties_EQUAL?: InputMaybe<Scalars["String"]>;
  additionalProperties_GT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_GTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  baitSet_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  baitSet_EQUAL?: InputMaybe<Scalars["String"]>;
  baitSet_GT?: InputMaybe<Scalars["Int"]>;
  baitSet_GTE?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  baitSet_LT?: InputMaybe<Scalars["Int"]>;
  baitSet_LTE?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_EQUAL?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode_GT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_GTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId_GT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_GTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoPatientId_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoSampleName_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  collectionYear_EQUAL?: InputMaybe<Scalars["String"]>;
  collectionYear_GT?: InputMaybe<Scalars["Int"]>;
  collectionYear_GTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_LT?: InputMaybe<Scalars["Int"]>;
  collectionYear_LTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  genePanel_EQUAL?: InputMaybe<Scalars["String"]>;
  genePanel_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_EQUAL?: InputMaybe<Scalars["String"]>;
  igoRequestId_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  importDate_EQUAL?: InputMaybe<Scalars["String"]>;
  importDate_GT?: InputMaybe<Scalars["Int"]>;
  importDate_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_EQUAL?: InputMaybe<Scalars["String"]>;
  investigatorSampleId_GT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  libraries_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  libraries_EQUAL?: InputMaybe<Scalars["String"]>;
  libraries_GT?: InputMaybe<Scalars["Int"]>;
  libraries_GTE?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  libraries_LT?: InputMaybe<Scalars["Int"]>;
  libraries_LTE?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_EQUAL?: InputMaybe<Scalars["String"]>;
  oncotreeCode_GT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_GTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  preservation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  preservation_EQUAL?: InputMaybe<Scalars["String"]>;
  preservation_GT?: InputMaybe<Scalars["Int"]>;
  preservation_GTE?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  preservation_LT?: InputMaybe<Scalars["Int"]>;
  preservation_LTE?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  primaryId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  primaryId_EQUAL?: InputMaybe<Scalars["String"]>;
  primaryId_GT?: InputMaybe<Scalars["Int"]>;
  primaryId_GTE?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  primaryId_LT?: InputMaybe<Scalars["Int"]>;
  primaryId_LTE?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcReports_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcReports_EQUAL?: InputMaybe<Scalars["String"]>;
  qcReports_GT?: InputMaybe<Scalars["Int"]>;
  qcReports_GTE?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcReports_LT?: InputMaybe<Scalars["Int"]>;
  qcReports_LTE?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleClass_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleClass_GT?: InputMaybe<Scalars["Int"]>;
  sampleClass_GTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_LT?: InputMaybe<Scalars["Int"]>;
  sampleClass_LTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleName_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleName_GT?: InputMaybe<Scalars["Int"]>;
  sampleName_GTE?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleName_LT?: InputMaybe<Scalars["Int"]>;
  sampleName_LTE?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleOrigin_GT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_GTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleType_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleType_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleType_GT?: InputMaybe<Scalars["Int"]>;
  sampleType_GTE?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleType_LT?: InputMaybe<Scalars["Int"]>;
  sampleType_LTE?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sex_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sex_EQUAL?: InputMaybe<Scalars["String"]>;
  sex_GT?: InputMaybe<Scalars["Int"]>;
  sex_GTE?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sex_LT?: InputMaybe<Scalars["Int"]>;
  sex_LTE?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  species_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  species_EQUAL?: InputMaybe<Scalars["String"]>;
  species_GT?: InputMaybe<Scalars["Int"]>;
  species_GTE?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  species_LT?: InputMaybe<Scalars["Int"]>;
  species_LTE?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  tissueLocation_EQUAL?: InputMaybe<Scalars["String"]>;
  tissueLocation_GT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_GTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  tubeId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  tubeId_EQUAL?: InputMaybe<Scalars["String"]>;
  tubeId_GT?: InputMaybe<Scalars["Int"]>;
  tubeId_GTE?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  tubeId_LT?: InputMaybe<Scalars["Int"]>;
  tubeId_LTE?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_EQUAL?: InputMaybe<Scalars["String"]>;
  tumorOrNormal_GT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_GTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type SampleHasMetadataSampleMetadataRelationship = {
  __typename?: "SampleHasMetadataSampleMetadataRelationship";
  cursor: Scalars["String"];
  node: SampleMetadata;
};

export type SampleHasMetadataSampleMetadataUpdateConnectionInput = {
  node?: InputMaybe<SampleMetadataUpdateInput>;
};

export type SampleHasMetadataSampleMetadataUpdateFieldInput = {
  connect?: InputMaybe<Array<SampleHasMetadataSampleMetadataConnectFieldInput>>;
  create?: InputMaybe<Array<SampleHasMetadataSampleMetadataCreateFieldInput>>;
  delete?: InputMaybe<Array<SampleHasMetadataSampleMetadataDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<SampleHasMetadataSampleMetadataDisconnectFieldInput>
  >;
  update?: InputMaybe<SampleHasMetadataSampleMetadataUpdateConnectionInput>;
  where?: InputMaybe<SampleHasMetadataSampleMetadataConnectionWhere>;
};

export type SampleHasTempoTemposAggregateInput = {
  AND?: InputMaybe<Array<SampleHasTempoTemposAggregateInput>>;
  OR?: InputMaybe<Array<SampleHasTempoTemposAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<SampleHasTempoTemposNodeAggregationWhereInput>;
};

export type SampleHasTempoTemposConnectFieldInput = {
  connect?: InputMaybe<Array<TempoConnectInput>>;
  where?: InputMaybe<TempoConnectWhere>;
};

export type SampleHasTempoTemposConnection = {
  __typename?: "SampleHasTempoTemposConnection";
  edges: Array<SampleHasTempoTemposRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type SampleHasTempoTemposConnectionSort = {
  node?: InputMaybe<TempoSort>;
};

export type SampleHasTempoTemposConnectionWhere = {
  AND?: InputMaybe<Array<SampleHasTempoTemposConnectionWhere>>;
  OR?: InputMaybe<Array<SampleHasTempoTemposConnectionWhere>>;
  node?: InputMaybe<TempoWhere>;
  node_NOT?: InputMaybe<TempoWhere>;
};

export type SampleHasTempoTemposCreateFieldInput = {
  node: TempoCreateInput;
};

export type SampleHasTempoTemposDeleteFieldInput = {
  delete?: InputMaybe<TempoDeleteInput>;
  where?: InputMaybe<SampleHasTempoTemposConnectionWhere>;
};

export type SampleHasTempoTemposDisconnectFieldInput = {
  disconnect?: InputMaybe<TempoDisconnectInput>;
  where?: InputMaybe<SampleHasTempoTemposConnectionWhere>;
};

export type SampleHasTempoTemposFieldInput = {
  connect?: InputMaybe<Array<SampleHasTempoTemposConnectFieldInput>>;
  create?: InputMaybe<Array<SampleHasTempoTemposCreateFieldInput>>;
};

export type SampleHasTempoTemposNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SampleHasTempoTemposNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<SampleHasTempoTemposNodeAggregationWhereInput>>;
  accessLevel_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  accessLevel_EQUAL?: InputMaybe<Scalars["String"]>;
  accessLevel_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  billedBy_EQUAL?: InputMaybe<Scalars["String"]>;
  billedBy_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  costCenter_EQUAL?: InputMaybe<Scalars["String"]>;
  costCenter_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  custodianInformation_EQUAL?: InputMaybe<Scalars["String"]>;
  custodianInformation_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  smileTempoId_EQUAL?: InputMaybe<Scalars["String"]>;
  smileTempoId_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type SampleHasTempoTemposRelationship = {
  __typename?: "SampleHasTempoTemposRelationship";
  cursor: Scalars["String"];
  node: Tempo;
};

export type SampleHasTempoTemposUpdateConnectionInput = {
  node?: InputMaybe<TempoUpdateInput>;
};

export type SampleHasTempoTemposUpdateFieldInput = {
  connect?: InputMaybe<Array<SampleHasTempoTemposConnectFieldInput>>;
  create?: InputMaybe<Array<SampleHasTempoTemposCreateFieldInput>>;
  delete?: InputMaybe<Array<SampleHasTempoTemposDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SampleHasTempoTemposDisconnectFieldInput>>;
  update?: InputMaybe<SampleHasTempoTemposUpdateConnectionInput>;
  where?: InputMaybe<SampleHasTempoTemposConnectionWhere>;
};

export type SampleMetadata = {
  __typename?: "SampleMetadata";
  additionalProperties: Scalars["String"];
  baitSet?: Maybe<Scalars["String"]>;
  cfDNA2dBarcode?: Maybe<Scalars["String"]>;
  cmoInfoIgoId?: Maybe<Scalars["String"]>;
  cmoPatientId?: Maybe<Scalars["String"]>;
  cmoSampleIdFields: Scalars["String"];
  cmoSampleName?: Maybe<Scalars["String"]>;
  collectionYear: Scalars["String"];
  genePanel: Scalars["String"];
  hasStatusStatuses: Array<Status>;
  hasStatusStatusesAggregate?: Maybe<SampleMetadataStatusHasStatusStatusesAggregationSelection>;
  hasStatusStatusesConnection: SampleMetadataHasStatusStatusesConnection;
  igoComplete?: Maybe<Scalars["Boolean"]>;
  igoRequestId?: Maybe<Scalars["String"]>;
  importDate: Scalars["String"];
  investigatorSampleId?: Maybe<Scalars["String"]>;
  libraries: Scalars["String"];
  oncotreeCode?: Maybe<Scalars["String"]>;
  preservation?: Maybe<Scalars["String"]>;
  primaryId: Scalars["String"];
  qcReports: Scalars["String"];
  sampleClass: Scalars["String"];
  sampleName?: Maybe<Scalars["String"]>;
  sampleOrigin?: Maybe<Scalars["String"]>;
  sampleType: Scalars["String"];
  samplesHasMetadata: Array<Sample>;
  samplesHasMetadataAggregate?: Maybe<SampleMetadataSampleSamplesHasMetadataAggregationSelection>;
  samplesHasMetadataConnection: SampleMetadataSamplesHasMetadataConnection;
  sex: Scalars["String"];
  species: Scalars["String"];
  tissueLocation?: Maybe<Scalars["String"]>;
  tubeId?: Maybe<Scalars["String"]>;
  tumorOrNormal: Scalars["String"];
};

export type SampleMetadataHasStatusStatusesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<StatusOptions>;
  where?: InputMaybe<StatusWhere>;
};

export type SampleMetadataHasStatusStatusesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<StatusWhere>;
};

export type SampleMetadataHasStatusStatusesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<SampleMetadataHasStatusStatusesConnectionSort>>;
  where?: InputMaybe<SampleMetadataHasStatusStatusesConnectionWhere>;
};

export type SampleMetadataSamplesHasMetadataArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<SampleOptions>;
  where?: InputMaybe<SampleWhere>;
};

export type SampleMetadataSamplesHasMetadataAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<SampleWhere>;
};

export type SampleMetadataSamplesHasMetadataConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<SampleMetadataSamplesHasMetadataConnectionSort>>;
  where?: InputMaybe<SampleMetadataSamplesHasMetadataConnectionWhere>;
};

export type SampleMetadataAggregateSelection = {
  __typename?: "SampleMetadataAggregateSelection";
  additionalProperties: StringAggregateSelectionNonNullable;
  baitSet: StringAggregateSelectionNullable;
  cfDNA2dBarcode: StringAggregateSelectionNullable;
  cmoInfoIgoId: StringAggregateSelectionNullable;
  cmoPatientId: StringAggregateSelectionNullable;
  cmoSampleIdFields: StringAggregateSelectionNonNullable;
  cmoSampleName: StringAggregateSelectionNullable;
  collectionYear: StringAggregateSelectionNonNullable;
  count: Scalars["Int"];
  genePanel: StringAggregateSelectionNonNullable;
  igoRequestId: StringAggregateSelectionNullable;
  importDate: StringAggregateSelectionNonNullable;
  investigatorSampleId: StringAggregateSelectionNullable;
  libraries: StringAggregateSelectionNonNullable;
  oncotreeCode: StringAggregateSelectionNullable;
  preservation: StringAggregateSelectionNullable;
  primaryId: StringAggregateSelectionNonNullable;
  qcReports: StringAggregateSelectionNonNullable;
  sampleClass: StringAggregateSelectionNonNullable;
  sampleName: StringAggregateSelectionNullable;
  sampleOrigin: StringAggregateSelectionNullable;
  sampleType: StringAggregateSelectionNonNullable;
  sex: StringAggregateSelectionNonNullable;
  species: StringAggregateSelectionNonNullable;
  tissueLocation: StringAggregateSelectionNullable;
  tubeId: StringAggregateSelectionNullable;
  tumorOrNormal: StringAggregateSelectionNonNullable;
};

export type SampleMetadataConnectInput = {
  hasStatusStatuses?: InputMaybe<
    Array<SampleMetadataHasStatusStatusesConnectFieldInput>
  >;
  samplesHasMetadata?: InputMaybe<
    Array<SampleMetadataSamplesHasMetadataConnectFieldInput>
  >;
};

export type SampleMetadataConnectWhere = {
  node: SampleMetadataWhere;
};

export type SampleMetadataConnection = {
  __typename?: "SampleMetadataConnection";
  edges: Array<SampleMetadataEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type SampleMetadataCreateInput = {
  additionalProperties: Scalars["String"];
  baitSet?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId?: InputMaybe<Scalars["String"]>;
  cmoPatientId?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields: Scalars["String"];
  cmoSampleName?: InputMaybe<Scalars["String"]>;
  collectionYear: Scalars["String"];
  genePanel: Scalars["String"];
  hasStatusStatuses?: InputMaybe<SampleMetadataHasStatusStatusesFieldInput>;
  igoComplete?: InputMaybe<Scalars["Boolean"]>;
  igoRequestId?: InputMaybe<Scalars["String"]>;
  importDate: Scalars["String"];
  investigatorSampleId?: InputMaybe<Scalars["String"]>;
  libraries: Scalars["String"];
  oncotreeCode?: InputMaybe<Scalars["String"]>;
  preservation?: InputMaybe<Scalars["String"]>;
  primaryId: Scalars["String"];
  qcReports: Scalars["String"];
  sampleClass: Scalars["String"];
  sampleName?: InputMaybe<Scalars["String"]>;
  sampleOrigin?: InputMaybe<Scalars["String"]>;
  sampleType: Scalars["String"];
  samplesHasMetadata?: InputMaybe<SampleMetadataSamplesHasMetadataFieldInput>;
  sex: Scalars["String"];
  species: Scalars["String"];
  tissueLocation?: InputMaybe<Scalars["String"]>;
  tubeId?: InputMaybe<Scalars["String"]>;
  tumorOrNormal: Scalars["String"];
};

export type SampleMetadataDeleteInput = {
  hasStatusStatuses?: InputMaybe<
    Array<SampleMetadataHasStatusStatusesDeleteFieldInput>
  >;
  samplesHasMetadata?: InputMaybe<
    Array<SampleMetadataSamplesHasMetadataDeleteFieldInput>
  >;
};

export type SampleMetadataDisconnectInput = {
  hasStatusStatuses?: InputMaybe<
    Array<SampleMetadataHasStatusStatusesDisconnectFieldInput>
  >;
  samplesHasMetadata?: InputMaybe<
    Array<SampleMetadataSamplesHasMetadataDisconnectFieldInput>
  >;
};

export type SampleMetadataEdge = {
  __typename?: "SampleMetadataEdge";
  cursor: Scalars["String"];
  node: SampleMetadata;
};

export type SampleMetadataHasStatusStatusesAggregateInput = {
  AND?: InputMaybe<Array<SampleMetadataHasStatusStatusesAggregateInput>>;
  OR?: InputMaybe<Array<SampleMetadataHasStatusStatusesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<SampleMetadataHasStatusStatusesNodeAggregationWhereInput>;
};

export type SampleMetadataHasStatusStatusesConnectFieldInput = {
  connect?: InputMaybe<Array<StatusConnectInput>>;
  where?: InputMaybe<StatusConnectWhere>;
};

export type SampleMetadataHasStatusStatusesConnection = {
  __typename?: "SampleMetadataHasStatusStatusesConnection";
  edges: Array<SampleMetadataHasStatusStatusesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type SampleMetadataHasStatusStatusesConnectionSort = {
  node?: InputMaybe<StatusSort>;
};

export type SampleMetadataHasStatusStatusesConnectionWhere = {
  AND?: InputMaybe<Array<SampleMetadataHasStatusStatusesConnectionWhere>>;
  OR?: InputMaybe<Array<SampleMetadataHasStatusStatusesConnectionWhere>>;
  node?: InputMaybe<StatusWhere>;
  node_NOT?: InputMaybe<StatusWhere>;
};

export type SampleMetadataHasStatusStatusesCreateFieldInput = {
  node: StatusCreateInput;
};

export type SampleMetadataHasStatusStatusesDeleteFieldInput = {
  delete?: InputMaybe<StatusDeleteInput>;
  where?: InputMaybe<SampleMetadataHasStatusStatusesConnectionWhere>;
};

export type SampleMetadataHasStatusStatusesDisconnectFieldInput = {
  disconnect?: InputMaybe<StatusDisconnectInput>;
  where?: InputMaybe<SampleMetadataHasStatusStatusesConnectionWhere>;
};

export type SampleMetadataHasStatusStatusesFieldInput = {
  connect?: InputMaybe<Array<SampleMetadataHasStatusStatusesConnectFieldInput>>;
  create?: InputMaybe<Array<SampleMetadataHasStatusStatusesCreateFieldInput>>;
};

export type SampleMetadataHasStatusStatusesNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<SampleMetadataHasStatusStatusesNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<SampleMetadataHasStatusStatusesNodeAggregationWhereInput>
  >;
  validationReport_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  validationReport_EQUAL?: InputMaybe<Scalars["String"]>;
  validationReport_GT?: InputMaybe<Scalars["Int"]>;
  validationReport_GTE?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  validationReport_LT?: InputMaybe<Scalars["Int"]>;
  validationReport_LTE?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type SampleMetadataHasStatusStatusesRelationship = {
  __typename?: "SampleMetadataHasStatusStatusesRelationship";
  cursor: Scalars["String"];
  node: Status;
};

export type SampleMetadataHasStatusStatusesUpdateConnectionInput = {
  node?: InputMaybe<StatusUpdateInput>;
};

export type SampleMetadataHasStatusStatusesUpdateFieldInput = {
  connect?: InputMaybe<Array<SampleMetadataHasStatusStatusesConnectFieldInput>>;
  create?: InputMaybe<Array<SampleMetadataHasStatusStatusesCreateFieldInput>>;
  delete?: InputMaybe<Array<SampleMetadataHasStatusStatusesDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<SampleMetadataHasStatusStatusesDisconnectFieldInput>
  >;
  update?: InputMaybe<SampleMetadataHasStatusStatusesUpdateConnectionInput>;
  where?: InputMaybe<SampleMetadataHasStatusStatusesConnectionWhere>;
};

export type SampleMetadataOptions = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more SampleMetadataSort objects to sort SampleMetadata by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SampleMetadataSort>>;
};

export type SampleMetadataRelationInput = {
  hasStatusStatuses?: InputMaybe<
    Array<SampleMetadataHasStatusStatusesCreateFieldInput>
  >;
  samplesHasMetadata?: InputMaybe<
    Array<SampleMetadataSamplesHasMetadataCreateFieldInput>
  >;
};

export type SampleMetadataSampleSamplesHasMetadataAggregationSelection = {
  __typename?: "SampleMetadataSampleSamplesHasMetadataAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<SampleMetadataSampleSamplesHasMetadataNodeAggregateSelection>;
};

export type SampleMetadataSampleSamplesHasMetadataNodeAggregateSelection = {
  __typename?: "SampleMetadataSampleSamplesHasMetadataNodeAggregateSelection";
  accessLevel: StringAggregateSelectionNullable;
  additionalProperties: StringAggregateSelectionNullable;
  baitSet: StringAggregateSelectionNullable;
  bamCompleteDate: StringAggregateSelectionNullable;
  bamCompleteStatus: StringAggregateSelectionNullable;
  billedBy: StringAggregateSelectionNullable;
  cancerType: StringAggregateSelectionNullable;
  cancerTypeDetailed: StringAggregateSelectionNullable;
  cfDNA2dBarcode: StringAggregateSelectionNullable;
  cmoInfoIgoId: StringAggregateSelectionNullable;
  cmoPatientId: StringAggregateSelectionNullable;
  cmoSampleIdFields: StringAggregateSelectionNullable;
  cmoSampleName: StringAggregateSelectionNullable;
  collectionYear: StringAggregateSelectionNullable;
  costCenter: StringAggregateSelectionNullable;
  custodianInformation: StringAggregateSelectionNullable;
  datasource: StringAggregateSelectionNonNullable;
  dmpPatientId: StringAggregateSelectionNullable;
  embargoDate: StringAggregateSelectionNullable;
  genePanel: StringAggregateSelectionNullable;
  igoRequestId: StringAggregateSelectionNullable;
  importDate: StringAggregateSelectionNullable;
  initialPipelineRunDate: StringAggregateSelectionNullable;
  investigatorSampleId: StringAggregateSelectionNullable;
  libraries: StringAggregateSelectionNullable;
  mafCompleteDate: StringAggregateSelectionNullable;
  mafCompleteNormalPrimaryId: StringAggregateSelectionNullable;
  mafCompleteStatus: StringAggregateSelectionNullable;
  oncotreeCode: StringAggregateSelectionNullable;
  preservation: StringAggregateSelectionNullable;
  primaryId: StringAggregateSelectionNullable;
  qcCompleteDate: StringAggregateSelectionNullable;
  qcCompleteReason: StringAggregateSelectionNullable;
  qcCompleteResult: StringAggregateSelectionNullable;
  qcCompleteStatus: StringAggregateSelectionNullable;
  qcReports: StringAggregateSelectionNullable;
  recipe: StringAggregateSelectionNullable;
  sampleCategory: StringAggregateSelectionNonNullable;
  sampleClass: StringAggregateSelectionNonNullable;
  sampleName: StringAggregateSelectionNullable;
  sampleOrigin: StringAggregateSelectionNullable;
  sampleType: StringAggregateSelectionNullable;
  sex: StringAggregateSelectionNullable;
  smileSampleId: StringAggregateSelectionNonNullable;
  smileTempoId: StringAggregateSelectionNullable;
  species: StringAggregateSelectionNullable;
  tissueLocation: StringAggregateSelectionNullable;
  tubeId: StringAggregateSelectionNullable;
  tumorOrNormal: StringAggregateSelectionNullable;
  validationReport: StringAggregateSelectionNullable;
};

export type SampleMetadataSamplesHasMetadataAggregateInput = {
  AND?: InputMaybe<Array<SampleMetadataSamplesHasMetadataAggregateInput>>;
  OR?: InputMaybe<Array<SampleMetadataSamplesHasMetadataAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<SampleMetadataSamplesHasMetadataNodeAggregationWhereInput>;
};

export type SampleMetadataSamplesHasMetadataConnectFieldInput = {
  connect?: InputMaybe<Array<SampleConnectInput>>;
  where?: InputMaybe<SampleConnectWhere>;
};

export type SampleMetadataSamplesHasMetadataConnection = {
  __typename?: "SampleMetadataSamplesHasMetadataConnection";
  edges: Array<SampleMetadataSamplesHasMetadataRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type SampleMetadataSamplesHasMetadataConnectionSort = {
  node?: InputMaybe<SampleSort>;
};

export type SampleMetadataSamplesHasMetadataConnectionWhere = {
  AND?: InputMaybe<Array<SampleMetadataSamplesHasMetadataConnectionWhere>>;
  OR?: InputMaybe<Array<SampleMetadataSamplesHasMetadataConnectionWhere>>;
  node?: InputMaybe<SampleWhere>;
  node_NOT?: InputMaybe<SampleWhere>;
};

export type SampleMetadataSamplesHasMetadataCreateFieldInput = {
  node: SampleCreateInput;
};

export type SampleMetadataSamplesHasMetadataDeleteFieldInput = {
  delete?: InputMaybe<SampleDeleteInput>;
  where?: InputMaybe<SampleMetadataSamplesHasMetadataConnectionWhere>;
};

export type SampleMetadataSamplesHasMetadataDisconnectFieldInput = {
  disconnect?: InputMaybe<SampleDisconnectInput>;
  where?: InputMaybe<SampleMetadataSamplesHasMetadataConnectionWhere>;
};

export type SampleMetadataSamplesHasMetadataFieldInput = {
  connect?: InputMaybe<
    Array<SampleMetadataSamplesHasMetadataConnectFieldInput>
  >;
  create?: InputMaybe<Array<SampleMetadataSamplesHasMetadataCreateFieldInput>>;
};

export type SampleMetadataSamplesHasMetadataNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<SampleMetadataSamplesHasMetadataNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<SampleMetadataSamplesHasMetadataNodeAggregationWhereInput>
  >;
  accessLevel_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  accessLevel_EQUAL?: InputMaybe<Scalars["String"]>;
  accessLevel_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  additionalProperties_EQUAL?: InputMaybe<Scalars["String"]>;
  additionalProperties_GT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_GTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  baitSet_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  baitSet_EQUAL?: InputMaybe<Scalars["String"]>;
  baitSet_GT?: InputMaybe<Scalars["Int"]>;
  baitSet_GTE?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  baitSet_LT?: InputMaybe<Scalars["Int"]>;
  baitSet_LTE?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_EQUAL?: InputMaybe<Scalars["String"]>;
  bamCompleteDate_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_EQUAL?: InputMaybe<Scalars["String"]>;
  bamCompleteStatus_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  billedBy_EQUAL?: InputMaybe<Scalars["String"]>;
  billedBy_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_EQUAL?: InputMaybe<Scalars["String"]>;
  cancerTypeDetailed_GT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_GTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cancerType_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cancerType_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cancerType_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cancerType_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cancerType_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cancerType_EQUAL?: InputMaybe<Scalars["String"]>;
  cancerType_GT?: InputMaybe<Scalars["Int"]>;
  cancerType_GTE?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cancerType_LT?: InputMaybe<Scalars["Int"]>;
  cancerType_LTE?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_EQUAL?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode_GT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_GTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId_GT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_GTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoPatientId_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoSampleName_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  collectionYear_EQUAL?: InputMaybe<Scalars["String"]>;
  collectionYear_GT?: InputMaybe<Scalars["Int"]>;
  collectionYear_GTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_LT?: InputMaybe<Scalars["Int"]>;
  collectionYear_LTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  costCenter_EQUAL?: InputMaybe<Scalars["String"]>;
  costCenter_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  custodianInformation_EQUAL?: InputMaybe<Scalars["String"]>;
  custodianInformation_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  datasource_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  datasource_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  datasource_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  datasource_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  datasource_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  datasource_EQUAL?: InputMaybe<Scalars["String"]>;
  datasource_GT?: InputMaybe<Scalars["Int"]>;
  datasource_GTE?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  datasource_LT?: InputMaybe<Scalars["Int"]>;
  datasource_LTE?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_EQUAL?: InputMaybe<Scalars["String"]>;
  dmpPatientId_GT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_GTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  embargoDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  embargoDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  embargoDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  embargoDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  embargoDate_EQUAL?: InputMaybe<Scalars["String"]>;
  embargoDate_GT?: InputMaybe<Scalars["Int"]>;
  embargoDate_GTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_LT?: InputMaybe<Scalars["Int"]>;
  embargoDate_LTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  genePanel_EQUAL?: InputMaybe<Scalars["String"]>;
  genePanel_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_EQUAL?: InputMaybe<Scalars["String"]>;
  igoRequestId_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  importDate_EQUAL?: InputMaybe<Scalars["String"]>;
  importDate_GT?: InputMaybe<Scalars["Int"]>;
  importDate_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_EQUAL?: InputMaybe<Scalars["String"]>;
  initialPipelineRunDate_GT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_GTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_EQUAL?: InputMaybe<Scalars["String"]>;
  investigatorSampleId_GT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  libraries_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  libraries_EQUAL?: InputMaybe<Scalars["String"]>;
  libraries_GT?: InputMaybe<Scalars["Int"]>;
  libraries_GTE?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  libraries_LT?: InputMaybe<Scalars["Int"]>;
  libraries_LTE?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_EQUAL?: InputMaybe<Scalars["String"]>;
  mafCompleteDate_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_EQUAL?: InputMaybe<Scalars["String"]>;
  mafCompleteNormalPrimaryId_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_EQUAL?: InputMaybe<Scalars["String"]>;
  mafCompleteStatus_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_EQUAL?: InputMaybe<Scalars["String"]>;
  oncotreeCode_GT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_GTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  preservation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  preservation_EQUAL?: InputMaybe<Scalars["String"]>;
  preservation_GT?: InputMaybe<Scalars["Int"]>;
  preservation_GTE?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  preservation_LT?: InputMaybe<Scalars["Int"]>;
  preservation_LTE?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  primaryId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  primaryId_EQUAL?: InputMaybe<Scalars["String"]>;
  primaryId_GT?: InputMaybe<Scalars["Int"]>;
  primaryId_GTE?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  primaryId_LT?: InputMaybe<Scalars["Int"]>;
  primaryId_LTE?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_EQUAL?: InputMaybe<Scalars["String"]>;
  qcCompleteDate_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_EQUAL?: InputMaybe<Scalars["String"]>;
  qcCompleteReason_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_EQUAL?: InputMaybe<Scalars["String"]>;
  qcCompleteResult_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_EQUAL?: InputMaybe<Scalars["String"]>;
  qcCompleteStatus_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcReports_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcReports_EQUAL?: InputMaybe<Scalars["String"]>;
  qcReports_GT?: InputMaybe<Scalars["Int"]>;
  qcReports_GTE?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcReports_LT?: InputMaybe<Scalars["Int"]>;
  qcReports_LTE?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  recipe_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  recipe_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  recipe_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  recipe_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  recipe_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  recipe_EQUAL?: InputMaybe<Scalars["String"]>;
  recipe_GT?: InputMaybe<Scalars["Int"]>;
  recipe_GTE?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  recipe_LT?: InputMaybe<Scalars["Int"]>;
  recipe_LTE?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleCategory_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleCategory_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleCategory_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleCategory_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleCategory_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleCategory_GT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_GTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleClass_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleClass_GT?: InputMaybe<Scalars["Int"]>;
  sampleClass_GTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_LT?: InputMaybe<Scalars["Int"]>;
  sampleClass_LTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleName_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleName_GT?: InputMaybe<Scalars["Int"]>;
  sampleName_GTE?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleName_LT?: InputMaybe<Scalars["Int"]>;
  sampleName_LTE?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleOrigin_GT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_GTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleType_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleType_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleType_GT?: InputMaybe<Scalars["Int"]>;
  sampleType_GTE?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleType_LT?: InputMaybe<Scalars["Int"]>;
  sampleType_LTE?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sex_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sex_EQUAL?: InputMaybe<Scalars["String"]>;
  sex_GT?: InputMaybe<Scalars["Int"]>;
  sex_GTE?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sex_LT?: InputMaybe<Scalars["Int"]>;
  sex_LTE?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  smileSampleId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  smileSampleId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  smileSampleId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  smileSampleId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  smileSampleId_EQUAL?: InputMaybe<Scalars["String"]>;
  smileSampleId_GT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_GTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  smileTempoId_EQUAL?: InputMaybe<Scalars["String"]>;
  smileTempoId_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  species_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  species_EQUAL?: InputMaybe<Scalars["String"]>;
  species_GT?: InputMaybe<Scalars["Int"]>;
  species_GTE?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  species_LT?: InputMaybe<Scalars["Int"]>;
  species_LTE?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  tissueLocation_EQUAL?: InputMaybe<Scalars["String"]>;
  tissueLocation_GT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_GTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  tubeId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  tubeId_EQUAL?: InputMaybe<Scalars["String"]>;
  tubeId_GT?: InputMaybe<Scalars["Int"]>;
  tubeId_GTE?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  tubeId_LT?: InputMaybe<Scalars["Int"]>;
  tubeId_LTE?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_EQUAL?: InputMaybe<Scalars["String"]>;
  tumorOrNormal_GT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_GTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  validationReport_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  validationReport_EQUAL?: InputMaybe<Scalars["String"]>;
  validationReport_GT?: InputMaybe<Scalars["Int"]>;
  validationReport_GTE?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  validationReport_LT?: InputMaybe<Scalars["Int"]>;
  validationReport_LTE?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type SampleMetadataSamplesHasMetadataRelationship = {
  __typename?: "SampleMetadataSamplesHasMetadataRelationship";
  cursor: Scalars["String"];
  node: Sample;
};

export type SampleMetadataSamplesHasMetadataUpdateConnectionInput = {
  node?: InputMaybe<SampleUpdateInput>;
};

export type SampleMetadataSamplesHasMetadataUpdateFieldInput = {
  connect?: InputMaybe<
    Array<SampleMetadataSamplesHasMetadataConnectFieldInput>
  >;
  create?: InputMaybe<Array<SampleMetadataSamplesHasMetadataCreateFieldInput>>;
  delete?: InputMaybe<Array<SampleMetadataSamplesHasMetadataDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<SampleMetadataSamplesHasMetadataDisconnectFieldInput>
  >;
  update?: InputMaybe<SampleMetadataSamplesHasMetadataUpdateConnectionInput>;
  where?: InputMaybe<SampleMetadataSamplesHasMetadataConnectionWhere>;
};

/** Fields to sort SampleMetadata by. The order in which sorts are applied is not guaranteed when specifying many fields in one SampleMetadataSort object. */
export type SampleMetadataSort = {
  additionalProperties?: InputMaybe<SortDirection>;
  baitSet?: InputMaybe<SortDirection>;
  cfDNA2dBarcode?: InputMaybe<SortDirection>;
  cmoInfoIgoId?: InputMaybe<SortDirection>;
  cmoPatientId?: InputMaybe<SortDirection>;
  cmoSampleIdFields?: InputMaybe<SortDirection>;
  cmoSampleName?: InputMaybe<SortDirection>;
  collectionYear?: InputMaybe<SortDirection>;
  genePanel?: InputMaybe<SortDirection>;
  igoComplete?: InputMaybe<SortDirection>;
  igoRequestId?: InputMaybe<SortDirection>;
  importDate?: InputMaybe<SortDirection>;
  investigatorSampleId?: InputMaybe<SortDirection>;
  libraries?: InputMaybe<SortDirection>;
  oncotreeCode?: InputMaybe<SortDirection>;
  preservation?: InputMaybe<SortDirection>;
  primaryId?: InputMaybe<SortDirection>;
  qcReports?: InputMaybe<SortDirection>;
  sampleClass?: InputMaybe<SortDirection>;
  sampleName?: InputMaybe<SortDirection>;
  sampleOrigin?: InputMaybe<SortDirection>;
  sampleType?: InputMaybe<SortDirection>;
  sex?: InputMaybe<SortDirection>;
  species?: InputMaybe<SortDirection>;
  tissueLocation?: InputMaybe<SortDirection>;
  tubeId?: InputMaybe<SortDirection>;
  tumorOrNormal?: InputMaybe<SortDirection>;
};

export type SampleMetadataStatusHasStatusStatusesAggregationSelection = {
  __typename?: "SampleMetadataStatusHasStatusStatusesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<SampleMetadataStatusHasStatusStatusesNodeAggregateSelection>;
};

export type SampleMetadataStatusHasStatusStatusesNodeAggregateSelection = {
  __typename?: "SampleMetadataStatusHasStatusStatusesNodeAggregateSelection";
  validationReport: StringAggregateSelectionNonNullable;
};

export type SampleMetadataUpdateInput = {
  additionalProperties?: InputMaybe<Scalars["String"]>;
  baitSet?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId?: InputMaybe<Scalars["String"]>;
  cmoPatientId?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields?: InputMaybe<Scalars["String"]>;
  cmoSampleName?: InputMaybe<Scalars["String"]>;
  collectionYear?: InputMaybe<Scalars["String"]>;
  genePanel?: InputMaybe<Scalars["String"]>;
  hasStatusStatuses?: InputMaybe<
    Array<SampleMetadataHasStatusStatusesUpdateFieldInput>
  >;
  igoComplete?: InputMaybe<Scalars["Boolean"]>;
  igoRequestId?: InputMaybe<Scalars["String"]>;
  importDate?: InputMaybe<Scalars["String"]>;
  investigatorSampleId?: InputMaybe<Scalars["String"]>;
  libraries?: InputMaybe<Scalars["String"]>;
  oncotreeCode?: InputMaybe<Scalars["String"]>;
  preservation?: InputMaybe<Scalars["String"]>;
  primaryId?: InputMaybe<Scalars["String"]>;
  qcReports?: InputMaybe<Scalars["String"]>;
  sampleClass?: InputMaybe<Scalars["String"]>;
  sampleName?: InputMaybe<Scalars["String"]>;
  sampleOrigin?: InputMaybe<Scalars["String"]>;
  sampleType?: InputMaybe<Scalars["String"]>;
  samplesHasMetadata?: InputMaybe<
    Array<SampleMetadataSamplesHasMetadataUpdateFieldInput>
  >;
  sex?: InputMaybe<Scalars["String"]>;
  species?: InputMaybe<Scalars["String"]>;
  tissueLocation?: InputMaybe<Scalars["String"]>;
  tubeId?: InputMaybe<Scalars["String"]>;
  tumorOrNormal?: InputMaybe<Scalars["String"]>;
};

export type SampleMetadataWhere = {
  AND?: InputMaybe<Array<SampleMetadataWhere>>;
  OR?: InputMaybe<Array<SampleMetadataWhere>>;
  additionalProperties?: InputMaybe<Scalars["String"]>;
  additionalProperties_CONTAINS?: InputMaybe<Scalars["String"]>;
  additionalProperties_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  additionalProperties_IN?: InputMaybe<Array<Scalars["String"]>>;
  additionalProperties_NOT?: InputMaybe<Scalars["String"]>;
  additionalProperties_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  additionalProperties_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  additionalProperties_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  additionalProperties_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  additionalProperties_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  baitSet?: InputMaybe<Scalars["String"]>;
  baitSet_CONTAINS?: InputMaybe<Scalars["String"]>;
  baitSet_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  baitSet_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  baitSet_NOT?: InputMaybe<Scalars["String"]>;
  baitSet_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  baitSet_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  baitSet_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  baitSet_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  baitSet_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode_CONTAINS?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cfDNA2dBarcode_NOT?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cfDNA2dBarcode_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId_CONTAINS?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cmoInfoIgoId_NOT?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cmoInfoIgoId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cmoPatientId?: InputMaybe<Scalars["String"]>;
  cmoPatientId_CONTAINS?: InputMaybe<Scalars["String"]>;
  cmoPatientId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cmoPatientId_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cmoPatientId_NOT?: InputMaybe<Scalars["String"]>;
  cmoPatientId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  cmoPatientId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cmoPatientId_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cmoPatientId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cmoPatientId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields_CONTAINS?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields_IN?: InputMaybe<Array<Scalars["String"]>>;
  cmoSampleIdFields_NOT?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  cmoSampleIdFields_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cmoSampleName?: InputMaybe<Scalars["String"]>;
  cmoSampleName_CONTAINS?: InputMaybe<Scalars["String"]>;
  cmoSampleName_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cmoSampleName_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cmoSampleName_NOT?: InputMaybe<Scalars["String"]>;
  cmoSampleName_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  cmoSampleName_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cmoSampleName_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cmoSampleName_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cmoSampleName_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  collectionYear?: InputMaybe<Scalars["String"]>;
  collectionYear_CONTAINS?: InputMaybe<Scalars["String"]>;
  collectionYear_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  collectionYear_IN?: InputMaybe<Array<Scalars["String"]>>;
  collectionYear_NOT?: InputMaybe<Scalars["String"]>;
  collectionYear_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  collectionYear_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  collectionYear_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  collectionYear_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  collectionYear_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  genePanel?: InputMaybe<Scalars["String"]>;
  genePanel_CONTAINS?: InputMaybe<Scalars["String"]>;
  genePanel_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  genePanel_IN?: InputMaybe<Array<Scalars["String"]>>;
  genePanel_NOT?: InputMaybe<Scalars["String"]>;
  genePanel_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  genePanel_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  genePanel_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  genePanel_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  genePanel_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  hasStatusStatusesAggregate?: InputMaybe<SampleMetadataHasStatusStatusesAggregateInput>;
  hasStatusStatusesConnection_ALL?: InputMaybe<SampleMetadataHasStatusStatusesConnectionWhere>;
  hasStatusStatusesConnection_NONE?: InputMaybe<SampleMetadataHasStatusStatusesConnectionWhere>;
  hasStatusStatusesConnection_SINGLE?: InputMaybe<SampleMetadataHasStatusStatusesConnectionWhere>;
  hasStatusStatusesConnection_SOME?: InputMaybe<SampleMetadataHasStatusStatusesConnectionWhere>;
  /** Return SampleMetadata where all of the related Statuses match this filter */
  hasStatusStatuses_ALL?: InputMaybe<StatusWhere>;
  /** Return SampleMetadata where none of the related Statuses match this filter */
  hasStatusStatuses_NONE?: InputMaybe<StatusWhere>;
  /** Return SampleMetadata where one of the related Statuses match this filter */
  hasStatusStatuses_SINGLE?: InputMaybe<StatusWhere>;
  /** Return SampleMetadata where some of the related Statuses match this filter */
  hasStatusStatuses_SOME?: InputMaybe<StatusWhere>;
  igoComplete?: InputMaybe<Scalars["Boolean"]>;
  igoComplete_NOT?: InputMaybe<Scalars["Boolean"]>;
  igoRequestId?: InputMaybe<Scalars["String"]>;
  igoRequestId_CONTAINS?: InputMaybe<Scalars["String"]>;
  igoRequestId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  igoRequestId_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  igoRequestId_NOT?: InputMaybe<Scalars["String"]>;
  igoRequestId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  igoRequestId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  igoRequestId_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  igoRequestId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  igoRequestId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  importDate?: InputMaybe<Scalars["String"]>;
  importDate_CONTAINS?: InputMaybe<Scalars["String"]>;
  importDate_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  importDate_IN?: InputMaybe<Array<Scalars["String"]>>;
  importDate_NOT?: InputMaybe<Scalars["String"]>;
  importDate_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  importDate_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  importDate_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  importDate_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  importDate_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  investigatorSampleId?: InputMaybe<Scalars["String"]>;
  investigatorSampleId_CONTAINS?: InputMaybe<Scalars["String"]>;
  investigatorSampleId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  investigatorSampleId_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  investigatorSampleId_NOT?: InputMaybe<Scalars["String"]>;
  investigatorSampleId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  investigatorSampleId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  investigatorSampleId_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >;
  investigatorSampleId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  investigatorSampleId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  libraries?: InputMaybe<Scalars["String"]>;
  libraries_CONTAINS?: InputMaybe<Scalars["String"]>;
  libraries_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  libraries_IN?: InputMaybe<Array<Scalars["String"]>>;
  libraries_NOT?: InputMaybe<Scalars["String"]>;
  libraries_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  libraries_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  libraries_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  libraries_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  libraries_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  oncotreeCode?: InputMaybe<Scalars["String"]>;
  oncotreeCode_CONTAINS?: InputMaybe<Scalars["String"]>;
  oncotreeCode_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  oncotreeCode_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  oncotreeCode_NOT?: InputMaybe<Scalars["String"]>;
  oncotreeCode_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  oncotreeCode_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  oncotreeCode_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  oncotreeCode_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  oncotreeCode_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  preservation?: InputMaybe<Scalars["String"]>;
  preservation_CONTAINS?: InputMaybe<Scalars["String"]>;
  preservation_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  preservation_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  preservation_NOT?: InputMaybe<Scalars["String"]>;
  preservation_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  preservation_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  preservation_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  preservation_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  preservation_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  primaryId?: InputMaybe<Scalars["String"]>;
  primaryId_CONTAINS?: InputMaybe<Scalars["String"]>;
  primaryId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  primaryId_IN?: InputMaybe<Array<Scalars["String"]>>;
  primaryId_NOT?: InputMaybe<Scalars["String"]>;
  primaryId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  primaryId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  primaryId_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  primaryId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  primaryId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  qcReports?: InputMaybe<Scalars["String"]>;
  qcReports_CONTAINS?: InputMaybe<Scalars["String"]>;
  qcReports_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  qcReports_IN?: InputMaybe<Array<Scalars["String"]>>;
  qcReports_NOT?: InputMaybe<Scalars["String"]>;
  qcReports_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  qcReports_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  qcReports_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  qcReports_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  qcReports_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  sampleClass?: InputMaybe<Scalars["String"]>;
  sampleClass_CONTAINS?: InputMaybe<Scalars["String"]>;
  sampleClass_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  sampleClass_IN?: InputMaybe<Array<Scalars["String"]>>;
  sampleClass_NOT?: InputMaybe<Scalars["String"]>;
  sampleClass_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  sampleClass_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  sampleClass_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  sampleClass_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  sampleClass_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  sampleName?: InputMaybe<Scalars["String"]>;
  sampleName_CONTAINS?: InputMaybe<Scalars["String"]>;
  sampleName_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  sampleName_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sampleName_NOT?: InputMaybe<Scalars["String"]>;
  sampleName_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  sampleName_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  sampleName_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sampleName_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  sampleName_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  sampleOrigin?: InputMaybe<Scalars["String"]>;
  sampleOrigin_CONTAINS?: InputMaybe<Scalars["String"]>;
  sampleOrigin_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  sampleOrigin_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sampleOrigin_NOT?: InputMaybe<Scalars["String"]>;
  sampleOrigin_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  sampleOrigin_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  sampleOrigin_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sampleOrigin_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  sampleOrigin_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  sampleType?: InputMaybe<Scalars["String"]>;
  sampleType_CONTAINS?: InputMaybe<Scalars["String"]>;
  sampleType_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  sampleType_IN?: InputMaybe<Array<Scalars["String"]>>;
  sampleType_NOT?: InputMaybe<Scalars["String"]>;
  sampleType_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  sampleType_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  sampleType_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  sampleType_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  sampleType_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  samplesHasMetadataAggregate?: InputMaybe<SampleMetadataSamplesHasMetadataAggregateInput>;
  samplesHasMetadataConnection_ALL?: InputMaybe<SampleMetadataSamplesHasMetadataConnectionWhere>;
  samplesHasMetadataConnection_NONE?: InputMaybe<SampleMetadataSamplesHasMetadataConnectionWhere>;
  samplesHasMetadataConnection_SINGLE?: InputMaybe<SampleMetadataSamplesHasMetadataConnectionWhere>;
  samplesHasMetadataConnection_SOME?: InputMaybe<SampleMetadataSamplesHasMetadataConnectionWhere>;
  /** Return SampleMetadata where all of the related Samples match this filter */
  samplesHasMetadata_ALL?: InputMaybe<SampleWhere>;
  /** Return SampleMetadata where none of the related Samples match this filter */
  samplesHasMetadata_NONE?: InputMaybe<SampleWhere>;
  /** Return SampleMetadata where one of the related Samples match this filter */
  samplesHasMetadata_SINGLE?: InputMaybe<SampleWhere>;
  /** Return SampleMetadata where some of the related Samples match this filter */
  samplesHasMetadata_SOME?: InputMaybe<SampleWhere>;
  sex?: InputMaybe<Scalars["String"]>;
  sex_CONTAINS?: InputMaybe<Scalars["String"]>;
  sex_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  sex_IN?: InputMaybe<Array<Scalars["String"]>>;
  sex_NOT?: InputMaybe<Scalars["String"]>;
  sex_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  sex_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  sex_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  sex_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  sex_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  species?: InputMaybe<Scalars["String"]>;
  species_CONTAINS?: InputMaybe<Scalars["String"]>;
  species_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  species_IN?: InputMaybe<Array<Scalars["String"]>>;
  species_NOT?: InputMaybe<Scalars["String"]>;
  species_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  species_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  species_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  species_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  species_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  tissueLocation?: InputMaybe<Scalars["String"]>;
  tissueLocation_CONTAINS?: InputMaybe<Scalars["String"]>;
  tissueLocation_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  tissueLocation_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tissueLocation_NOT?: InputMaybe<Scalars["String"]>;
  tissueLocation_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  tissueLocation_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  tissueLocation_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tissueLocation_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  tissueLocation_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  tubeId?: InputMaybe<Scalars["String"]>;
  tubeId_CONTAINS?: InputMaybe<Scalars["String"]>;
  tubeId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  tubeId_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tubeId_NOT?: InputMaybe<Scalars["String"]>;
  tubeId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  tubeId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  tubeId_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tubeId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  tubeId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  tumorOrNormal?: InputMaybe<Scalars["String"]>;
  tumorOrNormal_CONTAINS?: InputMaybe<Scalars["String"]>;
  tumorOrNormal_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  tumorOrNormal_IN?: InputMaybe<Array<Scalars["String"]>>;
  tumorOrNormal_NOT?: InputMaybe<Scalars["String"]>;
  tumorOrNormal_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  tumorOrNormal_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  tumorOrNormal_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  tumorOrNormal_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  tumorOrNormal_STARTS_WITH?: InputMaybe<Scalars["String"]>;
};

export type SampleOptions = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more SampleSort objects to sort Samples by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SampleSort>>;
};

export type SamplePatientPatientsHasSampleAggregationSelection = {
  __typename?: "SamplePatientPatientsHasSampleAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<SamplePatientPatientsHasSampleNodeAggregateSelection>;
};

export type SamplePatientPatientsHasSampleNodeAggregateSelection = {
  __typename?: "SamplePatientPatientsHasSampleNodeAggregateSelection";
  cmoPatientId: StringAggregateSelectionNullable;
  cmoSampleIds: StringAggregateSelectionNullable;
  consentPartA: StringAggregateSelectionNullable;
  consentPartC: StringAggregateSelectionNullable;
  dmpPatientId: StringAggregateSelectionNullable;
  smilePatientId: StringAggregateSelectionNonNullable;
  totalSampleCount: IntAggregateSelectionNullable;
};

export type SamplePatientsHasSampleAggregateInput = {
  AND?: InputMaybe<Array<SamplePatientsHasSampleAggregateInput>>;
  OR?: InputMaybe<Array<SamplePatientsHasSampleAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<SamplePatientsHasSampleNodeAggregationWhereInput>;
};

export type SamplePatientsHasSampleConnectFieldInput = {
  connect?: InputMaybe<Array<PatientConnectInput>>;
  where?: InputMaybe<PatientConnectWhere>;
};

export type SamplePatientsHasSampleConnection = {
  __typename?: "SamplePatientsHasSampleConnection";
  edges: Array<SamplePatientsHasSampleRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type SamplePatientsHasSampleConnectionSort = {
  node?: InputMaybe<PatientSort>;
};

export type SamplePatientsHasSampleConnectionWhere = {
  AND?: InputMaybe<Array<SamplePatientsHasSampleConnectionWhere>>;
  OR?: InputMaybe<Array<SamplePatientsHasSampleConnectionWhere>>;
  node?: InputMaybe<PatientWhere>;
  node_NOT?: InputMaybe<PatientWhere>;
};

export type SamplePatientsHasSampleCreateFieldInput = {
  node: PatientCreateInput;
};

export type SamplePatientsHasSampleDeleteFieldInput = {
  delete?: InputMaybe<PatientDeleteInput>;
  where?: InputMaybe<SamplePatientsHasSampleConnectionWhere>;
};

export type SamplePatientsHasSampleDisconnectFieldInput = {
  disconnect?: InputMaybe<PatientDisconnectInput>;
  where?: InputMaybe<SamplePatientsHasSampleConnectionWhere>;
};

export type SamplePatientsHasSampleFieldInput = {
  connect?: InputMaybe<Array<SamplePatientsHasSampleConnectFieldInput>>;
  create?: InputMaybe<Array<SamplePatientsHasSampleCreateFieldInput>>;
};

export type SamplePatientsHasSampleNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SamplePatientsHasSampleNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<SamplePatientsHasSampleNodeAggregationWhereInput>>;
  cmoPatientId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoPatientId_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoSampleIds_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoSampleIds_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleIds_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoSampleIds_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleIds_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoSampleIds_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIds_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  consentPartA_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  consentPartA_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  consentPartA_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  consentPartA_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  consentPartA_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  consentPartA_EQUAL?: InputMaybe<Scalars["String"]>;
  consentPartA_GT?: InputMaybe<Scalars["Int"]>;
  consentPartA_GTE?: InputMaybe<Scalars["Int"]>;
  consentPartA_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  consentPartA_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  consentPartA_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  consentPartA_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  consentPartA_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  consentPartA_LT?: InputMaybe<Scalars["Int"]>;
  consentPartA_LTE?: InputMaybe<Scalars["Int"]>;
  consentPartA_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  consentPartA_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  consentPartA_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  consentPartA_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  consentPartA_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  consentPartC_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  consentPartC_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  consentPartC_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  consentPartC_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  consentPartC_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  consentPartC_EQUAL?: InputMaybe<Scalars["String"]>;
  consentPartC_GT?: InputMaybe<Scalars["Int"]>;
  consentPartC_GTE?: InputMaybe<Scalars["Int"]>;
  consentPartC_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  consentPartC_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  consentPartC_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  consentPartC_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  consentPartC_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  consentPartC_LT?: InputMaybe<Scalars["Int"]>;
  consentPartC_LTE?: InputMaybe<Scalars["Int"]>;
  consentPartC_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  consentPartC_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  consentPartC_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  consentPartC_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  consentPartC_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_EQUAL?: InputMaybe<Scalars["String"]>;
  dmpPatientId_GT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_GTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  smilePatientId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  smilePatientId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  smilePatientId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  smilePatientId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  smilePatientId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  smilePatientId_EQUAL?: InputMaybe<Scalars["String"]>;
  smilePatientId_GT?: InputMaybe<Scalars["Int"]>;
  smilePatientId_GTE?: InputMaybe<Scalars["Int"]>;
  smilePatientId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smilePatientId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  smilePatientId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  smilePatientId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  smilePatientId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  smilePatientId_LT?: InputMaybe<Scalars["Int"]>;
  smilePatientId_LTE?: InputMaybe<Scalars["Int"]>;
  smilePatientId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smilePatientId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  smilePatientId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  smilePatientId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  smilePatientId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_LTE?: InputMaybe<Scalars["Int"]>;
};

export type SamplePatientsHasSampleRelationship = {
  __typename?: "SamplePatientsHasSampleRelationship";
  cursor: Scalars["String"];
  node: Patient;
};

export type SamplePatientsHasSampleUpdateConnectionInput = {
  node?: InputMaybe<PatientUpdateInput>;
};

export type SamplePatientsHasSampleUpdateFieldInput = {
  connect?: InputMaybe<Array<SamplePatientsHasSampleConnectFieldInput>>;
  create?: InputMaybe<Array<SamplePatientsHasSampleCreateFieldInput>>;
  delete?: InputMaybe<Array<SamplePatientsHasSampleDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SamplePatientsHasSampleDisconnectFieldInput>>;
  update?: InputMaybe<SamplePatientsHasSampleUpdateConnectionInput>;
  where?: InputMaybe<SamplePatientsHasSampleConnectionWhere>;
};

export type SampleRelationInput = {
  cohortsHasCohortSample?: InputMaybe<
    Array<SampleCohortsHasCohortSampleCreateFieldInput>
  >;
  hasMetadataSampleMetadata?: InputMaybe<
    Array<SampleHasMetadataSampleMetadataCreateFieldInput>
  >;
  hasTempoTempos?: InputMaybe<Array<SampleHasTempoTemposCreateFieldInput>>;
  patientsHasSample?: InputMaybe<
    Array<SamplePatientsHasSampleCreateFieldInput>
  >;
  requestsHasSample?: InputMaybe<
    Array<SampleRequestsHasSampleCreateFieldInput>
  >;
  sampleAliasesIsAlias?: InputMaybe<
    Array<SampleSampleAliasesIsAliasCreateFieldInput>
  >;
};

export type SampleRequestRequestsHasSampleAggregationSelection = {
  __typename?: "SampleRequestRequestsHasSampleAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<SampleRequestRequestsHasSampleNodeAggregateSelection>;
};

export type SampleRequestRequestsHasSampleNodeAggregateSelection = {
  __typename?: "SampleRequestRequestsHasSampleNodeAggregateSelection";
  dataAccessEmails: StringAggregateSelectionNonNullable;
  dataAnalystEmail: StringAggregateSelectionNonNullable;
  dataAnalystName: StringAggregateSelectionNonNullable;
  genePanel: StringAggregateSelectionNonNullable;
  igoProjectId: StringAggregateSelectionNonNullable;
  igoRequestId: StringAggregateSelectionNonNullable;
  importDate: StringAggregateSelectionNullable;
  investigatorEmail: StringAggregateSelectionNonNullable;
  investigatorName: StringAggregateSelectionNonNullable;
  labHeadEmail: StringAggregateSelectionNonNullable;
  labHeadName: StringAggregateSelectionNonNullable;
  libraryType: StringAggregateSelectionNullable;
  namespace: StringAggregateSelectionNonNullable;
  otherContactEmails: StringAggregateSelectionNonNullable;
  piEmail: StringAggregateSelectionNonNullable;
  projectManagerName: StringAggregateSelectionNonNullable;
  qcAccessEmails: StringAggregateSelectionNonNullable;
  requestJson: StringAggregateSelectionNonNullable;
  smileRequestId: StringAggregateSelectionNonNullable;
  strand: StringAggregateSelectionNullable;
  totalSampleCount: IntAggregateSelectionNullable;
};

export type SampleRequestsHasSampleAggregateInput = {
  AND?: InputMaybe<Array<SampleRequestsHasSampleAggregateInput>>;
  OR?: InputMaybe<Array<SampleRequestsHasSampleAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<SampleRequestsHasSampleNodeAggregationWhereInput>;
};

export type SampleRequestsHasSampleConnectFieldInput = {
  connect?: InputMaybe<Array<RequestConnectInput>>;
  where?: InputMaybe<RequestConnectWhere>;
};

export type SampleRequestsHasSampleConnection = {
  __typename?: "SampleRequestsHasSampleConnection";
  edges: Array<SampleRequestsHasSampleRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type SampleRequestsHasSampleConnectionSort = {
  node?: InputMaybe<RequestSort>;
};

export type SampleRequestsHasSampleConnectionWhere = {
  AND?: InputMaybe<Array<SampleRequestsHasSampleConnectionWhere>>;
  OR?: InputMaybe<Array<SampleRequestsHasSampleConnectionWhere>>;
  node?: InputMaybe<RequestWhere>;
  node_NOT?: InputMaybe<RequestWhere>;
};

export type SampleRequestsHasSampleCreateFieldInput = {
  node: RequestCreateInput;
};

export type SampleRequestsHasSampleDeleteFieldInput = {
  delete?: InputMaybe<RequestDeleteInput>;
  where?: InputMaybe<SampleRequestsHasSampleConnectionWhere>;
};

export type SampleRequestsHasSampleDisconnectFieldInput = {
  disconnect?: InputMaybe<RequestDisconnectInput>;
  where?: InputMaybe<SampleRequestsHasSampleConnectionWhere>;
};

export type SampleRequestsHasSampleFieldInput = {
  connect?: InputMaybe<Array<SampleRequestsHasSampleConnectFieldInput>>;
  create?: InputMaybe<Array<SampleRequestsHasSampleCreateFieldInput>>;
};

export type SampleRequestsHasSampleNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SampleRequestsHasSampleNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<SampleRequestsHasSampleNodeAggregationWhereInput>>;
  dataAccessEmails_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  dataAccessEmails_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  dataAccessEmails_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  dataAccessEmails_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  dataAccessEmails_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  dataAccessEmails_EQUAL?: InputMaybe<Scalars["String"]>;
  dataAccessEmails_GT?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_GTE?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_LT?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_LTE?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  dataAccessEmails_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  dataAnalystEmail_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  dataAnalystEmail_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  dataAnalystEmail_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  dataAnalystEmail_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  dataAnalystEmail_EQUAL?: InputMaybe<Scalars["String"]>;
  dataAnalystEmail_GT?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_GTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_LT?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_LTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  dataAnalystEmail_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  dataAnalystName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  dataAnalystName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  dataAnalystName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  dataAnalystName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  dataAnalystName_EQUAL?: InputMaybe<Scalars["String"]>;
  dataAnalystName_GT?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_GTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_LT?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_LTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  dataAnalystName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  genePanel_EQUAL?: InputMaybe<Scalars["String"]>;
  genePanel_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoProjectId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  igoProjectId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  igoProjectId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  igoProjectId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  igoProjectId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  igoProjectId_EQUAL?: InputMaybe<Scalars["String"]>;
  igoProjectId_GT?: InputMaybe<Scalars["Int"]>;
  igoProjectId_GTE?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LT?: InputMaybe<Scalars["Int"]>;
  igoProjectId_LTE?: InputMaybe<Scalars["Int"]>;
  igoProjectId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoProjectId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  igoProjectId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoProjectId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  igoProjectId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_EQUAL?: InputMaybe<Scalars["String"]>;
  igoRequestId_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  importDate_EQUAL?: InputMaybe<Scalars["String"]>;
  importDate_GT?: InputMaybe<Scalars["Int"]>;
  importDate_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  investigatorEmail_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  investigatorEmail_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  investigatorEmail_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  investigatorEmail_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  investigatorEmail_EQUAL?: InputMaybe<Scalars["String"]>;
  investigatorEmail_GT?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_LT?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorEmail_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  investigatorName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  investigatorName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  investigatorName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  investigatorName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  investigatorName_EQUAL?: InputMaybe<Scalars["String"]>;
  investigatorName_GT?: InputMaybe<Scalars["Int"]>;
  investigatorName_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorName_LT?: InputMaybe<Scalars["Int"]>;
  investigatorName_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  labHeadEmail_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  labHeadEmail_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  labHeadEmail_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  labHeadEmail_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  labHeadEmail_EQUAL?: InputMaybe<Scalars["String"]>;
  labHeadEmail_GT?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_GTE?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_LT?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_LTE?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  labHeadEmail_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  labHeadName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  labHeadName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  labHeadName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  labHeadName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  labHeadName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  labHeadName_EQUAL?: InputMaybe<Scalars["String"]>;
  labHeadName_GT?: InputMaybe<Scalars["Int"]>;
  labHeadName_GTE?: InputMaybe<Scalars["Int"]>;
  labHeadName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  labHeadName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  labHeadName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  labHeadName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  labHeadName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  labHeadName_LT?: InputMaybe<Scalars["Int"]>;
  labHeadName_LTE?: InputMaybe<Scalars["Int"]>;
  labHeadName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  labHeadName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  labHeadName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  labHeadName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  labHeadName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  libraryType_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  libraryType_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  libraryType_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  libraryType_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  libraryType_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  libraryType_EQUAL?: InputMaybe<Scalars["String"]>;
  libraryType_GT?: InputMaybe<Scalars["Int"]>;
  libraryType_GTE?: InputMaybe<Scalars["Int"]>;
  libraryType_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  libraryType_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  libraryType_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  libraryType_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  libraryType_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  libraryType_LT?: InputMaybe<Scalars["Int"]>;
  libraryType_LTE?: InputMaybe<Scalars["Int"]>;
  libraryType_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  libraryType_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  libraryType_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  libraryType_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  libraryType_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  namespace_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  namespace_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  namespace_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  namespace_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  namespace_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  namespace_EQUAL?: InputMaybe<Scalars["String"]>;
  namespace_GT?: InputMaybe<Scalars["Int"]>;
  namespace_GTE?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  namespace_LT?: InputMaybe<Scalars["Int"]>;
  namespace_LTE?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  otherContactEmails_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  otherContactEmails_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  otherContactEmails_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  otherContactEmails_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  otherContactEmails_EQUAL?: InputMaybe<Scalars["String"]>;
  otherContactEmails_GT?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_GTE?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_LT?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_LTE?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  otherContactEmails_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  piEmail_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  piEmail_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  piEmail_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  piEmail_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  piEmail_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  piEmail_EQUAL?: InputMaybe<Scalars["String"]>;
  piEmail_GT?: InputMaybe<Scalars["Int"]>;
  piEmail_GTE?: InputMaybe<Scalars["Int"]>;
  piEmail_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  piEmail_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  piEmail_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  piEmail_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  piEmail_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  piEmail_LT?: InputMaybe<Scalars["Int"]>;
  piEmail_LTE?: InputMaybe<Scalars["Int"]>;
  piEmail_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  piEmail_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  piEmail_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  piEmail_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  piEmail_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  projectManagerName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  projectManagerName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  projectManagerName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  projectManagerName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  projectManagerName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  projectManagerName_EQUAL?: InputMaybe<Scalars["String"]>;
  projectManagerName_GT?: InputMaybe<Scalars["Int"]>;
  projectManagerName_GTE?: InputMaybe<Scalars["Int"]>;
  projectManagerName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  projectManagerName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  projectManagerName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  projectManagerName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  projectManagerName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  projectManagerName_LT?: InputMaybe<Scalars["Int"]>;
  projectManagerName_LTE?: InputMaybe<Scalars["Int"]>;
  projectManagerName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  projectManagerName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  projectManagerName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  projectManagerName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  projectManagerName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcAccessEmails_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcAccessEmails_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcAccessEmails_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcAccessEmails_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcAccessEmails_EQUAL?: InputMaybe<Scalars["String"]>;
  qcAccessEmails_GT?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_GTE?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_LT?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_LTE?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcAccessEmails_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  requestJson_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  requestJson_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  requestJson_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  requestJson_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  requestJson_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  requestJson_EQUAL?: InputMaybe<Scalars["String"]>;
  requestJson_GT?: InputMaybe<Scalars["Int"]>;
  requestJson_GTE?: InputMaybe<Scalars["Int"]>;
  requestJson_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  requestJson_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  requestJson_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  requestJson_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  requestJson_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  requestJson_LT?: InputMaybe<Scalars["Int"]>;
  requestJson_LTE?: InputMaybe<Scalars["Int"]>;
  requestJson_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  requestJson_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  requestJson_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  requestJson_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  requestJson_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileRequestId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  smileRequestId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  smileRequestId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  smileRequestId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  smileRequestId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  smileRequestId_EQUAL?: InputMaybe<Scalars["String"]>;
  smileRequestId_GT?: InputMaybe<Scalars["Int"]>;
  smileRequestId_GTE?: InputMaybe<Scalars["Int"]>;
  smileRequestId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileRequestId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  smileRequestId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileRequestId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  smileRequestId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileRequestId_LT?: InputMaybe<Scalars["Int"]>;
  smileRequestId_LTE?: InputMaybe<Scalars["Int"]>;
  smileRequestId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileRequestId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  smileRequestId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileRequestId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  smileRequestId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  strand_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  strand_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  strand_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  strand_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  strand_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  strand_EQUAL?: InputMaybe<Scalars["String"]>;
  strand_GT?: InputMaybe<Scalars["Int"]>;
  strand_GTE?: InputMaybe<Scalars["Int"]>;
  strand_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  strand_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  strand_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  strand_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  strand_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  strand_LT?: InputMaybe<Scalars["Int"]>;
  strand_LTE?: InputMaybe<Scalars["Int"]>;
  strand_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  strand_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  strand_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  strand_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  strand_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  totalSampleCount_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MAX_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_MIN_LTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_EQUAL?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_GT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_GTE?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_LT?: InputMaybe<Scalars["Int"]>;
  totalSampleCount_SUM_LTE?: InputMaybe<Scalars["Int"]>;
};

export type SampleRequestsHasSampleRelationship = {
  __typename?: "SampleRequestsHasSampleRelationship";
  cursor: Scalars["String"];
  node: Request;
};

export type SampleRequestsHasSampleUpdateConnectionInput = {
  node?: InputMaybe<RequestUpdateInput>;
};

export type SampleRequestsHasSampleUpdateFieldInput = {
  connect?: InputMaybe<Array<SampleRequestsHasSampleConnectFieldInput>>;
  create?: InputMaybe<Array<SampleRequestsHasSampleCreateFieldInput>>;
  delete?: InputMaybe<Array<SampleRequestsHasSampleDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SampleRequestsHasSampleDisconnectFieldInput>>;
  update?: InputMaybe<SampleRequestsHasSampleUpdateConnectionInput>;
  where?: InputMaybe<SampleRequestsHasSampleConnectionWhere>;
};

export type SampleSampleAliasSampleAliasesIsAliasAggregationSelection = {
  __typename?: "SampleSampleAliasSampleAliasesIsAliasAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<SampleSampleAliasSampleAliasesIsAliasNodeAggregateSelection>;
};

export type SampleSampleAliasSampleAliasesIsAliasNodeAggregateSelection = {
  __typename?: "SampleSampleAliasSampleAliasesIsAliasNodeAggregateSelection";
  namespace: StringAggregateSelectionNonNullable;
  value: StringAggregateSelectionNonNullable;
};

export type SampleSampleAliasesIsAliasAggregateInput = {
  AND?: InputMaybe<Array<SampleSampleAliasesIsAliasAggregateInput>>;
  OR?: InputMaybe<Array<SampleSampleAliasesIsAliasAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<SampleSampleAliasesIsAliasNodeAggregationWhereInput>;
};

export type SampleSampleAliasesIsAliasConnectFieldInput = {
  connect?: InputMaybe<Array<SampleAliasConnectInput>>;
  where?: InputMaybe<SampleAliasConnectWhere>;
};

export type SampleSampleAliasesIsAliasConnection = {
  __typename?: "SampleSampleAliasesIsAliasConnection";
  edges: Array<SampleSampleAliasesIsAliasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type SampleSampleAliasesIsAliasConnectionSort = {
  node?: InputMaybe<SampleAliasSort>;
};

export type SampleSampleAliasesIsAliasConnectionWhere = {
  AND?: InputMaybe<Array<SampleSampleAliasesIsAliasConnectionWhere>>;
  OR?: InputMaybe<Array<SampleSampleAliasesIsAliasConnectionWhere>>;
  node?: InputMaybe<SampleAliasWhere>;
  node_NOT?: InputMaybe<SampleAliasWhere>;
};

export type SampleSampleAliasesIsAliasCreateFieldInput = {
  node: SampleAliasCreateInput;
};

export type SampleSampleAliasesIsAliasDeleteFieldInput = {
  delete?: InputMaybe<SampleAliasDeleteInput>;
  where?: InputMaybe<SampleSampleAliasesIsAliasConnectionWhere>;
};

export type SampleSampleAliasesIsAliasDisconnectFieldInput = {
  disconnect?: InputMaybe<SampleAliasDisconnectInput>;
  where?: InputMaybe<SampleSampleAliasesIsAliasConnectionWhere>;
};

export type SampleSampleAliasesIsAliasFieldInput = {
  connect?: InputMaybe<Array<SampleSampleAliasesIsAliasConnectFieldInput>>;
  create?: InputMaybe<Array<SampleSampleAliasesIsAliasCreateFieldInput>>;
};

export type SampleSampleAliasesIsAliasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SampleSampleAliasesIsAliasNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<SampleSampleAliasesIsAliasNodeAggregationWhereInput>>;
  namespace_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  namespace_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  namespace_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  namespace_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  namespace_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  namespace_EQUAL?: InputMaybe<Scalars["String"]>;
  namespace_GT?: InputMaybe<Scalars["Int"]>;
  namespace_GTE?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  namespace_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  namespace_LT?: InputMaybe<Scalars["Int"]>;
  namespace_LTE?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  namespace_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  value_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  value_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  value_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  value_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  value_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  value_EQUAL?: InputMaybe<Scalars["String"]>;
  value_GT?: InputMaybe<Scalars["Int"]>;
  value_GTE?: InputMaybe<Scalars["Int"]>;
  value_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  value_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  value_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  value_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  value_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  value_LT?: InputMaybe<Scalars["Int"]>;
  value_LTE?: InputMaybe<Scalars["Int"]>;
  value_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  value_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  value_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  value_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  value_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type SampleSampleAliasesIsAliasRelationship = {
  __typename?: "SampleSampleAliasesIsAliasRelationship";
  cursor: Scalars["String"];
  node: SampleAlias;
};

export type SampleSampleAliasesIsAliasUpdateConnectionInput = {
  node?: InputMaybe<SampleAliasUpdateInput>;
};

export type SampleSampleAliasesIsAliasUpdateFieldInput = {
  connect?: InputMaybe<Array<SampleSampleAliasesIsAliasConnectFieldInput>>;
  create?: InputMaybe<Array<SampleSampleAliasesIsAliasCreateFieldInput>>;
  delete?: InputMaybe<Array<SampleSampleAliasesIsAliasDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<SampleSampleAliasesIsAliasDisconnectFieldInput>
  >;
  update?: InputMaybe<SampleSampleAliasesIsAliasUpdateConnectionInput>;
  where?: InputMaybe<SampleSampleAliasesIsAliasConnectionWhere>;
};

export type SampleSampleMetadataHasMetadataSampleMetadataAggregationSelection =
  {
    __typename?: "SampleSampleMetadataHasMetadataSampleMetadataAggregationSelection";
    count: Scalars["Int"];
    node?: Maybe<SampleSampleMetadataHasMetadataSampleMetadataNodeAggregateSelection>;
  };

export type SampleSampleMetadataHasMetadataSampleMetadataNodeAggregateSelection =
  {
    __typename?: "SampleSampleMetadataHasMetadataSampleMetadataNodeAggregateSelection";
    additionalProperties: StringAggregateSelectionNonNullable;
    baitSet: StringAggregateSelectionNullable;
    cfDNA2dBarcode: StringAggregateSelectionNullable;
    cmoInfoIgoId: StringAggregateSelectionNullable;
    cmoPatientId: StringAggregateSelectionNullable;
    cmoSampleIdFields: StringAggregateSelectionNonNullable;
    cmoSampleName: StringAggregateSelectionNullable;
    collectionYear: StringAggregateSelectionNonNullable;
    genePanel: StringAggregateSelectionNonNullable;
    igoRequestId: StringAggregateSelectionNullable;
    importDate: StringAggregateSelectionNonNullable;
    investigatorSampleId: StringAggregateSelectionNullable;
    libraries: StringAggregateSelectionNonNullable;
    oncotreeCode: StringAggregateSelectionNullable;
    preservation: StringAggregateSelectionNullable;
    primaryId: StringAggregateSelectionNonNullable;
    qcReports: StringAggregateSelectionNonNullable;
    sampleClass: StringAggregateSelectionNonNullable;
    sampleName: StringAggregateSelectionNullable;
    sampleOrigin: StringAggregateSelectionNullable;
    sampleType: StringAggregateSelectionNonNullable;
    sex: StringAggregateSelectionNonNullable;
    species: StringAggregateSelectionNonNullable;
    tissueLocation: StringAggregateSelectionNullable;
    tubeId: StringAggregateSelectionNullable;
    tumorOrNormal: StringAggregateSelectionNonNullable;
  };

/** Fields to sort Samples by. The order in which sorts are applied is not guaranteed when specifying many fields in one SampleSort object. */
export type SampleSort = {
  accessLevel?: InputMaybe<SortDirection>;
  additionalProperties?: InputMaybe<SortDirection>;
  baitSet?: InputMaybe<SortDirection>;
  bamCompleteDate?: InputMaybe<SortDirection>;
  bamCompleteStatus?: InputMaybe<SortDirection>;
  billed?: InputMaybe<SortDirection>;
  billedBy?: InputMaybe<SortDirection>;
  cancerType?: InputMaybe<SortDirection>;
  cancerTypeDetailed?: InputMaybe<SortDirection>;
  cfDNA2dBarcode?: InputMaybe<SortDirection>;
  cmoInfoIgoId?: InputMaybe<SortDirection>;
  cmoPatientId?: InputMaybe<SortDirection>;
  cmoSampleIdFields?: InputMaybe<SortDirection>;
  cmoSampleName?: InputMaybe<SortDirection>;
  collectionYear?: InputMaybe<SortDirection>;
  costCenter?: InputMaybe<SortDirection>;
  custodianInformation?: InputMaybe<SortDirection>;
  datasource?: InputMaybe<SortDirection>;
  dmpPatientId?: InputMaybe<SortDirection>;
  embargoDate?: InputMaybe<SortDirection>;
  genePanel?: InputMaybe<SortDirection>;
  igoComplete?: InputMaybe<SortDirection>;
  igoRequestId?: InputMaybe<SortDirection>;
  importDate?: InputMaybe<SortDirection>;
  initialPipelineRunDate?: InputMaybe<SortDirection>;
  investigatorSampleId?: InputMaybe<SortDirection>;
  libraries?: InputMaybe<SortDirection>;
  mafCompleteDate?: InputMaybe<SortDirection>;
  mafCompleteNormalPrimaryId?: InputMaybe<SortDirection>;
  mafCompleteStatus?: InputMaybe<SortDirection>;
  oncotreeCode?: InputMaybe<SortDirection>;
  preservation?: InputMaybe<SortDirection>;
  primaryId?: InputMaybe<SortDirection>;
  qcCompleteDate?: InputMaybe<SortDirection>;
  qcCompleteReason?: InputMaybe<SortDirection>;
  qcCompleteResult?: InputMaybe<SortDirection>;
  qcCompleteStatus?: InputMaybe<SortDirection>;
  qcReports?: InputMaybe<SortDirection>;
  recipe?: InputMaybe<SortDirection>;
  revisable?: InputMaybe<SortDirection>;
  sampleCategory?: InputMaybe<SortDirection>;
  sampleClass?: InputMaybe<SortDirection>;
  sampleName?: InputMaybe<SortDirection>;
  sampleOrigin?: InputMaybe<SortDirection>;
  sampleType?: InputMaybe<SortDirection>;
  sex?: InputMaybe<SortDirection>;
  smileSampleId?: InputMaybe<SortDirection>;
  smileTempoId?: InputMaybe<SortDirection>;
  species?: InputMaybe<SortDirection>;
  tissueLocation?: InputMaybe<SortDirection>;
  tubeId?: InputMaybe<SortDirection>;
  tumorOrNormal?: InputMaybe<SortDirection>;
  validationReport?: InputMaybe<SortDirection>;
  validationStatus?: InputMaybe<SortDirection>;
};

export type SampleTempoHasTempoTemposAggregationSelection = {
  __typename?: "SampleTempoHasTempoTemposAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<SampleTempoHasTempoTemposNodeAggregateSelection>;
};

export type SampleTempoHasTempoTemposNodeAggregateSelection = {
  __typename?: "SampleTempoHasTempoTemposNodeAggregateSelection";
  accessLevel: StringAggregateSelectionNullable;
  billedBy: StringAggregateSelectionNullable;
  costCenter: StringAggregateSelectionNullable;
  custodianInformation: StringAggregateSelectionNullable;
  smileTempoId: StringAggregateSelectionNonNullable;
};

export type SampleUpdateInput = {
  accessLevel?: InputMaybe<Scalars["String"]>;
  additionalProperties?: InputMaybe<Scalars["String"]>;
  baitSet?: InputMaybe<Scalars["String"]>;
  bamCompleteDate?: InputMaybe<Scalars["String"]>;
  bamCompleteStatus?: InputMaybe<Scalars["String"]>;
  billed?: InputMaybe<Scalars["Boolean"]>;
  billedBy?: InputMaybe<Scalars["String"]>;
  cancerType?: InputMaybe<Scalars["String"]>;
  cancerTypeDetailed?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId?: InputMaybe<Scalars["String"]>;
  cmoPatientId?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields?: InputMaybe<Scalars["String"]>;
  cmoSampleName?: InputMaybe<Scalars["String"]>;
  cohortsHasCohortSample?: InputMaybe<
    Array<SampleCohortsHasCohortSampleUpdateFieldInput>
  >;
  collectionYear?: InputMaybe<Scalars["String"]>;
  costCenter?: InputMaybe<Scalars["String"]>;
  custodianInformation?: InputMaybe<Scalars["String"]>;
  datasource?: InputMaybe<Scalars["String"]>;
  dmpPatientId?: InputMaybe<Scalars["String"]>;
  embargoDate?: InputMaybe<Scalars["String"]>;
  genePanel?: InputMaybe<Scalars["String"]>;
  hasMetadataSampleMetadata?: InputMaybe<
    Array<SampleHasMetadataSampleMetadataUpdateFieldInput>
  >;
  hasTempoTempos?: InputMaybe<Array<SampleHasTempoTemposUpdateFieldInput>>;
  igoComplete?: InputMaybe<Scalars["Boolean"]>;
  igoRequestId?: InputMaybe<Scalars["String"]>;
  importDate?: InputMaybe<Scalars["String"]>;
  initialPipelineRunDate?: InputMaybe<Scalars["String"]>;
  investigatorSampleId?: InputMaybe<Scalars["String"]>;
  libraries?: InputMaybe<Scalars["String"]>;
  mafCompleteDate?: InputMaybe<Scalars["String"]>;
  mafCompleteNormalPrimaryId?: InputMaybe<Scalars["String"]>;
  mafCompleteStatus?: InputMaybe<Scalars["String"]>;
  oncotreeCode?: InputMaybe<Scalars["String"]>;
  patientsHasSample?: InputMaybe<
    Array<SamplePatientsHasSampleUpdateFieldInput>
  >;
  preservation?: InputMaybe<Scalars["String"]>;
  primaryId?: InputMaybe<Scalars["String"]>;
  qcCompleteDate?: InputMaybe<Scalars["String"]>;
  qcCompleteReason?: InputMaybe<Scalars["String"]>;
  qcCompleteResult?: InputMaybe<Scalars["String"]>;
  qcCompleteStatus?: InputMaybe<Scalars["String"]>;
  qcReports?: InputMaybe<Scalars["String"]>;
  recipe?: InputMaybe<Scalars["String"]>;
  requestsHasSample?: InputMaybe<
    Array<SampleRequestsHasSampleUpdateFieldInput>
  >;
  revisable?: InputMaybe<Scalars["Boolean"]>;
  sampleAliasesIsAlias?: InputMaybe<
    Array<SampleSampleAliasesIsAliasUpdateFieldInput>
  >;
  sampleCategory?: InputMaybe<Scalars["String"]>;
  sampleClass?: InputMaybe<Scalars["String"]>;
  sampleName?: InputMaybe<Scalars["String"]>;
  sampleOrigin?: InputMaybe<Scalars["String"]>;
  sampleType?: InputMaybe<Scalars["String"]>;
  sex?: InputMaybe<Scalars["String"]>;
  smileSampleId?: InputMaybe<Scalars["String"]>;
  smileTempoId?: InputMaybe<Scalars["String"]>;
  species?: InputMaybe<Scalars["String"]>;
  tissueLocation?: InputMaybe<Scalars["String"]>;
  tubeId?: InputMaybe<Scalars["String"]>;
  tumorOrNormal?: InputMaybe<Scalars["String"]>;
  validationReport?: InputMaybe<Scalars["String"]>;
  validationStatus?: InputMaybe<Scalars["Boolean"]>;
};

export type SampleWhere = {
  AND?: InputMaybe<Array<SampleWhere>>;
  OR?: InputMaybe<Array<SampleWhere>>;
  accessLevel?: InputMaybe<Scalars["String"]>;
  accessLevel_CONTAINS?: InputMaybe<Scalars["String"]>;
  accessLevel_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  accessLevel_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  accessLevel_NOT?: InputMaybe<Scalars["String"]>;
  accessLevel_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  accessLevel_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  accessLevel_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  accessLevel_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  accessLevel_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  additionalProperties?: InputMaybe<Scalars["String"]>;
  additionalProperties_CONTAINS?: InputMaybe<Scalars["String"]>;
  additionalProperties_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  additionalProperties_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  additionalProperties_NOT?: InputMaybe<Scalars["String"]>;
  additionalProperties_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  additionalProperties_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  additionalProperties_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >;
  additionalProperties_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  additionalProperties_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  baitSet?: InputMaybe<Scalars["String"]>;
  baitSet_CONTAINS?: InputMaybe<Scalars["String"]>;
  baitSet_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  baitSet_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  baitSet_NOT?: InputMaybe<Scalars["String"]>;
  baitSet_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  baitSet_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  baitSet_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  baitSet_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  baitSet_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  bamCompleteDate?: InputMaybe<Scalars["String"]>;
  bamCompleteDate_CONTAINS?: InputMaybe<Scalars["String"]>;
  bamCompleteDate_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  bamCompleteDate_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  bamCompleteDate_NOT?: InputMaybe<Scalars["String"]>;
  bamCompleteDate_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  bamCompleteDate_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  bamCompleteDate_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  bamCompleteDate_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  bamCompleteDate_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  bamCompleteStatus?: InputMaybe<Scalars["String"]>;
  bamCompleteStatus_CONTAINS?: InputMaybe<Scalars["String"]>;
  bamCompleteStatus_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  bamCompleteStatus_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  bamCompleteStatus_NOT?: InputMaybe<Scalars["String"]>;
  bamCompleteStatus_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  bamCompleteStatus_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  bamCompleteStatus_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  bamCompleteStatus_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  bamCompleteStatus_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  billed?: InputMaybe<Scalars["Boolean"]>;
  billedBy?: InputMaybe<Scalars["String"]>;
  billedBy_CONTAINS?: InputMaybe<Scalars["String"]>;
  billedBy_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  billedBy_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  billedBy_NOT?: InputMaybe<Scalars["String"]>;
  billedBy_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  billedBy_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  billedBy_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  billedBy_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  billedBy_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  billed_NOT?: InputMaybe<Scalars["Boolean"]>;
  cancerType?: InputMaybe<Scalars["String"]>;
  cancerTypeDetailed?: InputMaybe<Scalars["String"]>;
  cancerTypeDetailed_CONTAINS?: InputMaybe<Scalars["String"]>;
  cancerTypeDetailed_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cancerTypeDetailed_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cancerTypeDetailed_NOT?: InputMaybe<Scalars["String"]>;
  cancerTypeDetailed_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  cancerTypeDetailed_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cancerTypeDetailed_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cancerTypeDetailed_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cancerTypeDetailed_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cancerType_CONTAINS?: InputMaybe<Scalars["String"]>;
  cancerType_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cancerType_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cancerType_NOT?: InputMaybe<Scalars["String"]>;
  cancerType_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  cancerType_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cancerType_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cancerType_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cancerType_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode_CONTAINS?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cfDNA2dBarcode_NOT?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cfDNA2dBarcode_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId_CONTAINS?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cmoInfoIgoId_NOT?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cmoInfoIgoId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cmoPatientId?: InputMaybe<Scalars["String"]>;
  cmoPatientId_CONTAINS?: InputMaybe<Scalars["String"]>;
  cmoPatientId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cmoPatientId_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cmoPatientId_NOT?: InputMaybe<Scalars["String"]>;
  cmoPatientId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  cmoPatientId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cmoPatientId_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cmoPatientId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cmoPatientId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields_CONTAINS?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cmoSampleIdFields_NOT?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cmoSampleIdFields_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cmoSampleName?: InputMaybe<Scalars["String"]>;
  cmoSampleName_CONTAINS?: InputMaybe<Scalars["String"]>;
  cmoSampleName_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cmoSampleName_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cmoSampleName_NOT?: InputMaybe<Scalars["String"]>;
  cmoSampleName_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  cmoSampleName_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  cmoSampleName_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cmoSampleName_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cmoSampleName_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  cohortsHasCohortSampleAggregate?: InputMaybe<SampleCohortsHasCohortSampleAggregateInput>;
  cohortsHasCohortSampleConnection_ALL?: InputMaybe<SampleCohortsHasCohortSampleConnectionWhere>;
  cohortsHasCohortSampleConnection_NONE?: InputMaybe<SampleCohortsHasCohortSampleConnectionWhere>;
  cohortsHasCohortSampleConnection_SINGLE?: InputMaybe<SampleCohortsHasCohortSampleConnectionWhere>;
  cohortsHasCohortSampleConnection_SOME?: InputMaybe<SampleCohortsHasCohortSampleConnectionWhere>;
  /** Return Samples where all of the related Cohorts match this filter */
  cohortsHasCohortSample_ALL?: InputMaybe<CohortWhere>;
  /** Return Samples where none of the related Cohorts match this filter */
  cohortsHasCohortSample_NONE?: InputMaybe<CohortWhere>;
  /** Return Samples where one of the related Cohorts match this filter */
  cohortsHasCohortSample_SINGLE?: InputMaybe<CohortWhere>;
  /** Return Samples where some of the related Cohorts match this filter */
  cohortsHasCohortSample_SOME?: InputMaybe<CohortWhere>;
  collectionYear?: InputMaybe<Scalars["String"]>;
  collectionYear_CONTAINS?: InputMaybe<Scalars["String"]>;
  collectionYear_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  collectionYear_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  collectionYear_NOT?: InputMaybe<Scalars["String"]>;
  collectionYear_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  collectionYear_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  collectionYear_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  collectionYear_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  collectionYear_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  costCenter?: InputMaybe<Scalars["String"]>;
  costCenter_CONTAINS?: InputMaybe<Scalars["String"]>;
  costCenter_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  costCenter_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  costCenter_NOT?: InputMaybe<Scalars["String"]>;
  costCenter_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  costCenter_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  costCenter_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  costCenter_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  costCenter_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  custodianInformation?: InputMaybe<Scalars["String"]>;
  custodianInformation_CONTAINS?: InputMaybe<Scalars["String"]>;
  custodianInformation_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  custodianInformation_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  custodianInformation_NOT?: InputMaybe<Scalars["String"]>;
  custodianInformation_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  custodianInformation_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  custodianInformation_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >;
  custodianInformation_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  custodianInformation_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  datasource?: InputMaybe<Scalars["String"]>;
  datasource_CONTAINS?: InputMaybe<Scalars["String"]>;
  datasource_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  datasource_IN?: InputMaybe<Array<Scalars["String"]>>;
  datasource_NOT?: InputMaybe<Scalars["String"]>;
  datasource_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  datasource_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  datasource_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  datasource_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  datasource_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  dmpPatientId?: InputMaybe<Scalars["String"]>;
  dmpPatientId_CONTAINS?: InputMaybe<Scalars["String"]>;
  dmpPatientId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  dmpPatientId_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  dmpPatientId_NOT?: InputMaybe<Scalars["String"]>;
  dmpPatientId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  dmpPatientId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  dmpPatientId_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  dmpPatientId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  dmpPatientId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  embargoDate?: InputMaybe<Scalars["String"]>;
  embargoDate_CONTAINS?: InputMaybe<Scalars["String"]>;
  embargoDate_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  embargoDate_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  embargoDate_NOT?: InputMaybe<Scalars["String"]>;
  embargoDate_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  embargoDate_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  embargoDate_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  embargoDate_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  embargoDate_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  genePanel?: InputMaybe<Scalars["String"]>;
  genePanel_CONTAINS?: InputMaybe<Scalars["String"]>;
  genePanel_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  genePanel_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  genePanel_NOT?: InputMaybe<Scalars["String"]>;
  genePanel_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  genePanel_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  genePanel_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  genePanel_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  genePanel_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  hasMetadataSampleMetadataAggregate?: InputMaybe<SampleHasMetadataSampleMetadataAggregateInput>;
  hasMetadataSampleMetadataConnection_ALL?: InputMaybe<SampleHasMetadataSampleMetadataConnectionWhere>;
  hasMetadataSampleMetadataConnection_NONE?: InputMaybe<SampleHasMetadataSampleMetadataConnectionWhere>;
  hasMetadataSampleMetadataConnection_SINGLE?: InputMaybe<SampleHasMetadataSampleMetadataConnectionWhere>;
  hasMetadataSampleMetadataConnection_SOME?: InputMaybe<SampleHasMetadataSampleMetadataConnectionWhere>;
  /** Return Samples where all of the related SampleMetadata match this filter */
  hasMetadataSampleMetadata_ALL?: InputMaybe<SampleMetadataWhere>;
  /** Return Samples where none of the related SampleMetadata match this filter */
  hasMetadataSampleMetadata_NONE?: InputMaybe<SampleMetadataWhere>;
  /** Return Samples where one of the related SampleMetadata match this filter */
  hasMetadataSampleMetadata_SINGLE?: InputMaybe<SampleMetadataWhere>;
  /** Return Samples where some of the related SampleMetadata match this filter */
  hasMetadataSampleMetadata_SOME?: InputMaybe<SampleMetadataWhere>;
  hasTempoTemposAggregate?: InputMaybe<SampleHasTempoTemposAggregateInput>;
  hasTempoTemposConnection_ALL?: InputMaybe<SampleHasTempoTemposConnectionWhere>;
  hasTempoTemposConnection_NONE?: InputMaybe<SampleHasTempoTemposConnectionWhere>;
  hasTempoTemposConnection_SINGLE?: InputMaybe<SampleHasTempoTemposConnectionWhere>;
  hasTempoTemposConnection_SOME?: InputMaybe<SampleHasTempoTemposConnectionWhere>;
  /** Return Samples where all of the related Tempos match this filter */
  hasTempoTempos_ALL?: InputMaybe<TempoWhere>;
  /** Return Samples where none of the related Tempos match this filter */
  hasTempoTempos_NONE?: InputMaybe<TempoWhere>;
  /** Return Samples where one of the related Tempos match this filter */
  hasTempoTempos_SINGLE?: InputMaybe<TempoWhere>;
  /** Return Samples where some of the related Tempos match this filter */
  hasTempoTempos_SOME?: InputMaybe<TempoWhere>;
  igoComplete?: InputMaybe<Scalars["Boolean"]>;
  igoComplete_NOT?: InputMaybe<Scalars["Boolean"]>;
  igoRequestId?: InputMaybe<Scalars["String"]>;
  igoRequestId_CONTAINS?: InputMaybe<Scalars["String"]>;
  igoRequestId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  igoRequestId_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  igoRequestId_NOT?: InputMaybe<Scalars["String"]>;
  igoRequestId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  igoRequestId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  igoRequestId_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  igoRequestId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  igoRequestId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  importDate?: InputMaybe<Scalars["String"]>;
  importDate_CONTAINS?: InputMaybe<Scalars["String"]>;
  importDate_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  importDate_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  importDate_NOT?: InputMaybe<Scalars["String"]>;
  importDate_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  importDate_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  importDate_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  importDate_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  importDate_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  initialPipelineRunDate?: InputMaybe<Scalars["String"]>;
  initialPipelineRunDate_CONTAINS?: InputMaybe<Scalars["String"]>;
  initialPipelineRunDate_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  initialPipelineRunDate_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  initialPipelineRunDate_NOT?: InputMaybe<Scalars["String"]>;
  initialPipelineRunDate_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  initialPipelineRunDate_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  initialPipelineRunDate_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >;
  initialPipelineRunDate_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  initialPipelineRunDate_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  investigatorSampleId?: InputMaybe<Scalars["String"]>;
  investigatorSampleId_CONTAINS?: InputMaybe<Scalars["String"]>;
  investigatorSampleId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  investigatorSampleId_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  investigatorSampleId_NOT?: InputMaybe<Scalars["String"]>;
  investigatorSampleId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  investigatorSampleId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  investigatorSampleId_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >;
  investigatorSampleId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  investigatorSampleId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  libraries?: InputMaybe<Scalars["String"]>;
  libraries_CONTAINS?: InputMaybe<Scalars["String"]>;
  libraries_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  libraries_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  libraries_NOT?: InputMaybe<Scalars["String"]>;
  libraries_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  libraries_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  libraries_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  libraries_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  libraries_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  mafCompleteDate?: InputMaybe<Scalars["String"]>;
  mafCompleteDate_CONTAINS?: InputMaybe<Scalars["String"]>;
  mafCompleteDate_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  mafCompleteDate_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  mafCompleteDate_NOT?: InputMaybe<Scalars["String"]>;
  mafCompleteDate_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  mafCompleteDate_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  mafCompleteDate_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  mafCompleteDate_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  mafCompleteDate_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  mafCompleteNormalPrimaryId?: InputMaybe<Scalars["String"]>;
  mafCompleteNormalPrimaryId_CONTAINS?: InputMaybe<Scalars["String"]>;
  mafCompleteNormalPrimaryId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  mafCompleteNormalPrimaryId_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >;
  mafCompleteNormalPrimaryId_NOT?: InputMaybe<Scalars["String"]>;
  mafCompleteNormalPrimaryId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  mafCompleteNormalPrimaryId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  mafCompleteNormalPrimaryId_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >;
  mafCompleteNormalPrimaryId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  mafCompleteNormalPrimaryId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  mafCompleteStatus?: InputMaybe<Scalars["String"]>;
  mafCompleteStatus_CONTAINS?: InputMaybe<Scalars["String"]>;
  mafCompleteStatus_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  mafCompleteStatus_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  mafCompleteStatus_NOT?: InputMaybe<Scalars["String"]>;
  mafCompleteStatus_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  mafCompleteStatus_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  mafCompleteStatus_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  mafCompleteStatus_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  mafCompleteStatus_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  oncotreeCode?: InputMaybe<Scalars["String"]>;
  oncotreeCode_CONTAINS?: InputMaybe<Scalars["String"]>;
  oncotreeCode_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  oncotreeCode_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  oncotreeCode_NOT?: InputMaybe<Scalars["String"]>;
  oncotreeCode_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  oncotreeCode_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  oncotreeCode_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  oncotreeCode_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  oncotreeCode_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  patientsHasSampleAggregate?: InputMaybe<SamplePatientsHasSampleAggregateInput>;
  patientsHasSampleConnection_ALL?: InputMaybe<SamplePatientsHasSampleConnectionWhere>;
  patientsHasSampleConnection_NONE?: InputMaybe<SamplePatientsHasSampleConnectionWhere>;
  patientsHasSampleConnection_SINGLE?: InputMaybe<SamplePatientsHasSampleConnectionWhere>;
  patientsHasSampleConnection_SOME?: InputMaybe<SamplePatientsHasSampleConnectionWhere>;
  /** Return Samples where all of the related Patients match this filter */
  patientsHasSample_ALL?: InputMaybe<PatientWhere>;
  /** Return Samples where none of the related Patients match this filter */
  patientsHasSample_NONE?: InputMaybe<PatientWhere>;
  /** Return Samples where one of the related Patients match this filter */
  patientsHasSample_SINGLE?: InputMaybe<PatientWhere>;
  /** Return Samples where some of the related Patients match this filter */
  patientsHasSample_SOME?: InputMaybe<PatientWhere>;
  preservation?: InputMaybe<Scalars["String"]>;
  preservation_CONTAINS?: InputMaybe<Scalars["String"]>;
  preservation_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  preservation_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  preservation_NOT?: InputMaybe<Scalars["String"]>;
  preservation_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  preservation_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  preservation_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  preservation_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  preservation_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  primaryId?: InputMaybe<Scalars["String"]>;
  primaryId_CONTAINS?: InputMaybe<Scalars["String"]>;
  primaryId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  primaryId_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  primaryId_NOT?: InputMaybe<Scalars["String"]>;
  primaryId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  primaryId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  primaryId_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  primaryId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  primaryId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  qcCompleteDate?: InputMaybe<Scalars["String"]>;
  qcCompleteDate_CONTAINS?: InputMaybe<Scalars["String"]>;
  qcCompleteDate_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  qcCompleteDate_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  qcCompleteDate_NOT?: InputMaybe<Scalars["String"]>;
  qcCompleteDate_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  qcCompleteDate_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  qcCompleteDate_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  qcCompleteDate_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  qcCompleteDate_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  qcCompleteReason?: InputMaybe<Scalars["String"]>;
  qcCompleteReason_CONTAINS?: InputMaybe<Scalars["String"]>;
  qcCompleteReason_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  qcCompleteReason_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  qcCompleteReason_NOT?: InputMaybe<Scalars["String"]>;
  qcCompleteReason_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  qcCompleteReason_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  qcCompleteReason_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  qcCompleteReason_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  qcCompleteReason_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  qcCompleteResult?: InputMaybe<Scalars["String"]>;
  qcCompleteResult_CONTAINS?: InputMaybe<Scalars["String"]>;
  qcCompleteResult_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  qcCompleteResult_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  qcCompleteResult_NOT?: InputMaybe<Scalars["String"]>;
  qcCompleteResult_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  qcCompleteResult_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  qcCompleteResult_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  qcCompleteResult_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  qcCompleteResult_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  qcCompleteStatus?: InputMaybe<Scalars["String"]>;
  qcCompleteStatus_CONTAINS?: InputMaybe<Scalars["String"]>;
  qcCompleteStatus_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  qcCompleteStatus_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  qcCompleteStatus_NOT?: InputMaybe<Scalars["String"]>;
  qcCompleteStatus_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  qcCompleteStatus_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  qcCompleteStatus_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  qcCompleteStatus_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  qcCompleteStatus_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  qcReports?: InputMaybe<Scalars["String"]>;
  qcReports_CONTAINS?: InputMaybe<Scalars["String"]>;
  qcReports_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  qcReports_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  qcReports_NOT?: InputMaybe<Scalars["String"]>;
  qcReports_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  qcReports_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  qcReports_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  qcReports_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  qcReports_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  recipe?: InputMaybe<Scalars["String"]>;
  recipe_CONTAINS?: InputMaybe<Scalars["String"]>;
  recipe_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  recipe_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  recipe_NOT?: InputMaybe<Scalars["String"]>;
  recipe_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  recipe_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  recipe_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  recipe_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  recipe_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  requestsHasSampleAggregate?: InputMaybe<SampleRequestsHasSampleAggregateInput>;
  requestsHasSampleConnection_ALL?: InputMaybe<SampleRequestsHasSampleConnectionWhere>;
  requestsHasSampleConnection_NONE?: InputMaybe<SampleRequestsHasSampleConnectionWhere>;
  requestsHasSampleConnection_SINGLE?: InputMaybe<SampleRequestsHasSampleConnectionWhere>;
  requestsHasSampleConnection_SOME?: InputMaybe<SampleRequestsHasSampleConnectionWhere>;
  /** Return Samples where all of the related Requests match this filter */
  requestsHasSample_ALL?: InputMaybe<RequestWhere>;
  /** Return Samples where none of the related Requests match this filter */
  requestsHasSample_NONE?: InputMaybe<RequestWhere>;
  /** Return Samples where one of the related Requests match this filter */
  requestsHasSample_SINGLE?: InputMaybe<RequestWhere>;
  /** Return Samples where some of the related Requests match this filter */
  requestsHasSample_SOME?: InputMaybe<RequestWhere>;
  revisable?: InputMaybe<Scalars["Boolean"]>;
  revisable_NOT?: InputMaybe<Scalars["Boolean"]>;
  sampleAliasesIsAliasAggregate?: InputMaybe<SampleSampleAliasesIsAliasAggregateInput>;
  sampleAliasesIsAliasConnection_ALL?: InputMaybe<SampleSampleAliasesIsAliasConnectionWhere>;
  sampleAliasesIsAliasConnection_NONE?: InputMaybe<SampleSampleAliasesIsAliasConnectionWhere>;
  sampleAliasesIsAliasConnection_SINGLE?: InputMaybe<SampleSampleAliasesIsAliasConnectionWhere>;
  sampleAliasesIsAliasConnection_SOME?: InputMaybe<SampleSampleAliasesIsAliasConnectionWhere>;
  /** Return Samples where all of the related SampleAliases match this filter */
  sampleAliasesIsAlias_ALL?: InputMaybe<SampleAliasWhere>;
  /** Return Samples where none of the related SampleAliases match this filter */
  sampleAliasesIsAlias_NONE?: InputMaybe<SampleAliasWhere>;
  /** Return Samples where one of the related SampleAliases match this filter */
  sampleAliasesIsAlias_SINGLE?: InputMaybe<SampleAliasWhere>;
  /** Return Samples where some of the related SampleAliases match this filter */
  sampleAliasesIsAlias_SOME?: InputMaybe<SampleAliasWhere>;
  sampleCategory?: InputMaybe<Scalars["String"]>;
  sampleCategory_CONTAINS?: InputMaybe<Scalars["String"]>;
  sampleCategory_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  sampleCategory_IN?: InputMaybe<Array<Scalars["String"]>>;
  sampleCategory_NOT?: InputMaybe<Scalars["String"]>;
  sampleCategory_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  sampleCategory_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  sampleCategory_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  sampleCategory_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  sampleCategory_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  sampleClass?: InputMaybe<Scalars["String"]>;
  sampleClass_CONTAINS?: InputMaybe<Scalars["String"]>;
  sampleClass_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  sampleClass_IN?: InputMaybe<Array<Scalars["String"]>>;
  sampleClass_NOT?: InputMaybe<Scalars["String"]>;
  sampleClass_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  sampleClass_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  sampleClass_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  sampleClass_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  sampleClass_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  sampleName?: InputMaybe<Scalars["String"]>;
  sampleName_CONTAINS?: InputMaybe<Scalars["String"]>;
  sampleName_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  sampleName_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sampleName_NOT?: InputMaybe<Scalars["String"]>;
  sampleName_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  sampleName_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  sampleName_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sampleName_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  sampleName_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  sampleOrigin?: InputMaybe<Scalars["String"]>;
  sampleOrigin_CONTAINS?: InputMaybe<Scalars["String"]>;
  sampleOrigin_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  sampleOrigin_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sampleOrigin_NOT?: InputMaybe<Scalars["String"]>;
  sampleOrigin_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  sampleOrigin_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  sampleOrigin_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sampleOrigin_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  sampleOrigin_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  sampleType?: InputMaybe<Scalars["String"]>;
  sampleType_CONTAINS?: InputMaybe<Scalars["String"]>;
  sampleType_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  sampleType_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sampleType_NOT?: InputMaybe<Scalars["String"]>;
  sampleType_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  sampleType_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  sampleType_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sampleType_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  sampleType_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  sex?: InputMaybe<Scalars["String"]>;
  sex_CONTAINS?: InputMaybe<Scalars["String"]>;
  sex_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  sex_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sex_NOT?: InputMaybe<Scalars["String"]>;
  sex_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  sex_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  sex_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sex_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  sex_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  smileSampleId?: InputMaybe<Scalars["String"]>;
  smileSampleId_CONTAINS?: InputMaybe<Scalars["String"]>;
  smileSampleId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  smileSampleId_IN?: InputMaybe<Array<Scalars["String"]>>;
  smileSampleId_NOT?: InputMaybe<Scalars["String"]>;
  smileSampleId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  smileSampleId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  smileSampleId_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  smileSampleId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  smileSampleId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  smileTempoId?: InputMaybe<Scalars["String"]>;
  smileTempoId_CONTAINS?: InputMaybe<Scalars["String"]>;
  smileTempoId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  smileTempoId_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  smileTempoId_NOT?: InputMaybe<Scalars["String"]>;
  smileTempoId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  smileTempoId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  smileTempoId_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  smileTempoId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  smileTempoId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  species?: InputMaybe<Scalars["String"]>;
  species_CONTAINS?: InputMaybe<Scalars["String"]>;
  species_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  species_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  species_NOT?: InputMaybe<Scalars["String"]>;
  species_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  species_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  species_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  species_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  species_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  tissueLocation?: InputMaybe<Scalars["String"]>;
  tissueLocation_CONTAINS?: InputMaybe<Scalars["String"]>;
  tissueLocation_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  tissueLocation_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tissueLocation_NOT?: InputMaybe<Scalars["String"]>;
  tissueLocation_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  tissueLocation_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  tissueLocation_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tissueLocation_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  tissueLocation_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  tubeId?: InputMaybe<Scalars["String"]>;
  tubeId_CONTAINS?: InputMaybe<Scalars["String"]>;
  tubeId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  tubeId_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tubeId_NOT?: InputMaybe<Scalars["String"]>;
  tubeId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  tubeId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  tubeId_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tubeId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  tubeId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  tumorOrNormal?: InputMaybe<Scalars["String"]>;
  tumorOrNormal_CONTAINS?: InputMaybe<Scalars["String"]>;
  tumorOrNormal_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  tumorOrNormal_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tumorOrNormal_NOT?: InputMaybe<Scalars["String"]>;
  tumorOrNormal_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  tumorOrNormal_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  tumorOrNormal_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tumorOrNormal_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  tumorOrNormal_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  validationReport?: InputMaybe<Scalars["String"]>;
  validationReport_CONTAINS?: InputMaybe<Scalars["String"]>;
  validationReport_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  validationReport_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  validationReport_NOT?: InputMaybe<Scalars["String"]>;
  validationReport_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  validationReport_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  validationReport_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  validationReport_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  validationReport_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  validationStatus?: InputMaybe<Scalars["Boolean"]>;
  validationStatus_NOT?: InputMaybe<Scalars["Boolean"]>;
};

export type SamplesConnection = {
  __typename?: "SamplesConnection";
  edges: Array<SampleEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type Status = {
  __typename?: "Status";
  requestMetadataHasStatus: Array<RequestMetadata>;
  requestMetadataHasStatusAggregate?: Maybe<StatusRequestMetadataRequestMetadataHasStatusAggregationSelection>;
  requestMetadataHasStatusConnection: StatusRequestMetadataHasStatusConnection;
  sampleMetadataHasStatus: Array<SampleMetadata>;
  sampleMetadataHasStatusAggregate?: Maybe<StatusSampleMetadataSampleMetadataHasStatusAggregationSelection>;
  sampleMetadataHasStatusConnection: StatusSampleMetadataHasStatusConnection;
  validationReport: Scalars["String"];
  validationStatus: Scalars["Boolean"];
};

export type StatusRequestMetadataHasStatusArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<RequestMetadataOptions>;
  where?: InputMaybe<RequestMetadataWhere>;
};

export type StatusRequestMetadataHasStatusAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<RequestMetadataWhere>;
};

export type StatusRequestMetadataHasStatusConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<StatusRequestMetadataHasStatusConnectionSort>>;
  where?: InputMaybe<StatusRequestMetadataHasStatusConnectionWhere>;
};

export type StatusSampleMetadataHasStatusArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<SampleMetadataOptions>;
  where?: InputMaybe<SampleMetadataWhere>;
};

export type StatusSampleMetadataHasStatusAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<SampleMetadataWhere>;
};

export type StatusSampleMetadataHasStatusConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<StatusSampleMetadataHasStatusConnectionSort>>;
  where?: InputMaybe<StatusSampleMetadataHasStatusConnectionWhere>;
};

export type StatusAggregateSelection = {
  __typename?: "StatusAggregateSelection";
  count: Scalars["Int"];
  validationReport: StringAggregateSelectionNonNullable;
};

export type StatusConnectInput = {
  requestMetadataHasStatus?: InputMaybe<
    Array<StatusRequestMetadataHasStatusConnectFieldInput>
  >;
  sampleMetadataHasStatus?: InputMaybe<
    Array<StatusSampleMetadataHasStatusConnectFieldInput>
  >;
};

export type StatusConnectWhere = {
  node: StatusWhere;
};

export type StatusCreateInput = {
  requestMetadataHasStatus?: InputMaybe<StatusRequestMetadataHasStatusFieldInput>;
  sampleMetadataHasStatus?: InputMaybe<StatusSampleMetadataHasStatusFieldInput>;
  validationReport: Scalars["String"];
  validationStatus: Scalars["Boolean"];
};

export type StatusDeleteInput = {
  requestMetadataHasStatus?: InputMaybe<
    Array<StatusRequestMetadataHasStatusDeleteFieldInput>
  >;
  sampleMetadataHasStatus?: InputMaybe<
    Array<StatusSampleMetadataHasStatusDeleteFieldInput>
  >;
};

export type StatusDisconnectInput = {
  requestMetadataHasStatus?: InputMaybe<
    Array<StatusRequestMetadataHasStatusDisconnectFieldInput>
  >;
  sampleMetadataHasStatus?: InputMaybe<
    Array<StatusSampleMetadataHasStatusDisconnectFieldInput>
  >;
};

export type StatusEdge = {
  __typename?: "StatusEdge";
  cursor: Scalars["String"];
  node: Status;
};

export type StatusOptions = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more StatusSort objects to sort Statuses by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<StatusSort>>;
};

export type StatusRelationInput = {
  requestMetadataHasStatus?: InputMaybe<
    Array<StatusRequestMetadataHasStatusCreateFieldInput>
  >;
  sampleMetadataHasStatus?: InputMaybe<
    Array<StatusSampleMetadataHasStatusCreateFieldInput>
  >;
};

export type StatusRequestMetadataHasStatusAggregateInput = {
  AND?: InputMaybe<Array<StatusRequestMetadataHasStatusAggregateInput>>;
  OR?: InputMaybe<Array<StatusRequestMetadataHasStatusAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<StatusRequestMetadataHasStatusNodeAggregationWhereInput>;
};

export type StatusRequestMetadataHasStatusConnectFieldInput = {
  connect?: InputMaybe<Array<RequestMetadataConnectInput>>;
  where?: InputMaybe<RequestMetadataConnectWhere>;
};

export type StatusRequestMetadataHasStatusConnection = {
  __typename?: "StatusRequestMetadataHasStatusConnection";
  edges: Array<StatusRequestMetadataHasStatusRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type StatusRequestMetadataHasStatusConnectionSort = {
  node?: InputMaybe<RequestMetadataSort>;
};

export type StatusRequestMetadataHasStatusConnectionWhere = {
  AND?: InputMaybe<Array<StatusRequestMetadataHasStatusConnectionWhere>>;
  OR?: InputMaybe<Array<StatusRequestMetadataHasStatusConnectionWhere>>;
  node?: InputMaybe<RequestMetadataWhere>;
  node_NOT?: InputMaybe<RequestMetadataWhere>;
};

export type StatusRequestMetadataHasStatusCreateFieldInput = {
  node: RequestMetadataCreateInput;
};

export type StatusRequestMetadataHasStatusDeleteFieldInput = {
  delete?: InputMaybe<RequestMetadataDeleteInput>;
  where?: InputMaybe<StatusRequestMetadataHasStatusConnectionWhere>;
};

export type StatusRequestMetadataHasStatusDisconnectFieldInput = {
  disconnect?: InputMaybe<RequestMetadataDisconnectInput>;
  where?: InputMaybe<StatusRequestMetadataHasStatusConnectionWhere>;
};

export type StatusRequestMetadataHasStatusFieldInput = {
  connect?: InputMaybe<Array<StatusRequestMetadataHasStatusConnectFieldInput>>;
  create?: InputMaybe<Array<StatusRequestMetadataHasStatusCreateFieldInput>>;
};

export type StatusRequestMetadataHasStatusNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<StatusRequestMetadataHasStatusNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<StatusRequestMetadataHasStatusNodeAggregationWhereInput>
  >;
  igoRequestId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_EQUAL?: InputMaybe<Scalars["String"]>;
  igoRequestId_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  importDate_EQUAL?: InputMaybe<Scalars["String"]>;
  importDate_GT?: InputMaybe<Scalars["Int"]>;
  importDate_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  requestMetadataJson_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  requestMetadataJson_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  requestMetadataJson_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  requestMetadataJson_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  requestMetadataJson_EQUAL?: InputMaybe<Scalars["String"]>;
  requestMetadataJson_GT?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_GTE?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_LT?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_LTE?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  requestMetadataJson_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type StatusRequestMetadataHasStatusRelationship = {
  __typename?: "StatusRequestMetadataHasStatusRelationship";
  cursor: Scalars["String"];
  node: RequestMetadata;
};

export type StatusRequestMetadataHasStatusUpdateConnectionInput = {
  node?: InputMaybe<RequestMetadataUpdateInput>;
};

export type StatusRequestMetadataHasStatusUpdateFieldInput = {
  connect?: InputMaybe<Array<StatusRequestMetadataHasStatusConnectFieldInput>>;
  create?: InputMaybe<Array<StatusRequestMetadataHasStatusCreateFieldInput>>;
  delete?: InputMaybe<Array<StatusRequestMetadataHasStatusDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<StatusRequestMetadataHasStatusDisconnectFieldInput>
  >;
  update?: InputMaybe<StatusRequestMetadataHasStatusUpdateConnectionInput>;
  where?: InputMaybe<StatusRequestMetadataHasStatusConnectionWhere>;
};

export type StatusRequestMetadataRequestMetadataHasStatusAggregationSelection =
  {
    __typename?: "StatusRequestMetadataRequestMetadataHasStatusAggregationSelection";
    count: Scalars["Int"];
    node?: Maybe<StatusRequestMetadataRequestMetadataHasStatusNodeAggregateSelection>;
  };

export type StatusRequestMetadataRequestMetadataHasStatusNodeAggregateSelection =
  {
    __typename?: "StatusRequestMetadataRequestMetadataHasStatusNodeAggregateSelection";
    igoRequestId: StringAggregateSelectionNonNullable;
    importDate: StringAggregateSelectionNonNullable;
    requestMetadataJson: StringAggregateSelectionNonNullable;
  };

export type StatusSampleMetadataHasStatusAggregateInput = {
  AND?: InputMaybe<Array<StatusSampleMetadataHasStatusAggregateInput>>;
  OR?: InputMaybe<Array<StatusSampleMetadataHasStatusAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<StatusSampleMetadataHasStatusNodeAggregationWhereInput>;
};

export type StatusSampleMetadataHasStatusConnectFieldInput = {
  connect?: InputMaybe<Array<SampleMetadataConnectInput>>;
  where?: InputMaybe<SampleMetadataConnectWhere>;
};

export type StatusSampleMetadataHasStatusConnection = {
  __typename?: "StatusSampleMetadataHasStatusConnection";
  edges: Array<StatusSampleMetadataHasStatusRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type StatusSampleMetadataHasStatusConnectionSort = {
  node?: InputMaybe<SampleMetadataSort>;
};

export type StatusSampleMetadataHasStatusConnectionWhere = {
  AND?: InputMaybe<Array<StatusSampleMetadataHasStatusConnectionWhere>>;
  OR?: InputMaybe<Array<StatusSampleMetadataHasStatusConnectionWhere>>;
  node?: InputMaybe<SampleMetadataWhere>;
  node_NOT?: InputMaybe<SampleMetadataWhere>;
};

export type StatusSampleMetadataHasStatusCreateFieldInput = {
  node: SampleMetadataCreateInput;
};

export type StatusSampleMetadataHasStatusDeleteFieldInput = {
  delete?: InputMaybe<SampleMetadataDeleteInput>;
  where?: InputMaybe<StatusSampleMetadataHasStatusConnectionWhere>;
};

export type StatusSampleMetadataHasStatusDisconnectFieldInput = {
  disconnect?: InputMaybe<SampleMetadataDisconnectInput>;
  where?: InputMaybe<StatusSampleMetadataHasStatusConnectionWhere>;
};

export type StatusSampleMetadataHasStatusFieldInput = {
  connect?: InputMaybe<Array<StatusSampleMetadataHasStatusConnectFieldInput>>;
  create?: InputMaybe<Array<StatusSampleMetadataHasStatusCreateFieldInput>>;
};

export type StatusSampleMetadataHasStatusNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<StatusSampleMetadataHasStatusNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<StatusSampleMetadataHasStatusNodeAggregationWhereInput>
  >;
  additionalProperties_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  additionalProperties_EQUAL?: InputMaybe<Scalars["String"]>;
  additionalProperties_GT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_GTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  baitSet_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  baitSet_EQUAL?: InputMaybe<Scalars["String"]>;
  baitSet_GT?: InputMaybe<Scalars["Int"]>;
  baitSet_GTE?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  baitSet_LT?: InputMaybe<Scalars["Int"]>;
  baitSet_LTE?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_EQUAL?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode_GT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_GTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId_GT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_GTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoPatientId_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoSampleName_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  collectionYear_EQUAL?: InputMaybe<Scalars["String"]>;
  collectionYear_GT?: InputMaybe<Scalars["Int"]>;
  collectionYear_GTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_LT?: InputMaybe<Scalars["Int"]>;
  collectionYear_LTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  genePanel_EQUAL?: InputMaybe<Scalars["String"]>;
  genePanel_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_EQUAL?: InputMaybe<Scalars["String"]>;
  igoRequestId_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  importDate_EQUAL?: InputMaybe<Scalars["String"]>;
  importDate_GT?: InputMaybe<Scalars["Int"]>;
  importDate_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_EQUAL?: InputMaybe<Scalars["String"]>;
  investigatorSampleId_GT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  libraries_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  libraries_EQUAL?: InputMaybe<Scalars["String"]>;
  libraries_GT?: InputMaybe<Scalars["Int"]>;
  libraries_GTE?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  libraries_LT?: InputMaybe<Scalars["Int"]>;
  libraries_LTE?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_EQUAL?: InputMaybe<Scalars["String"]>;
  oncotreeCode_GT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_GTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  preservation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  preservation_EQUAL?: InputMaybe<Scalars["String"]>;
  preservation_GT?: InputMaybe<Scalars["Int"]>;
  preservation_GTE?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  preservation_LT?: InputMaybe<Scalars["Int"]>;
  preservation_LTE?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  primaryId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  primaryId_EQUAL?: InputMaybe<Scalars["String"]>;
  primaryId_GT?: InputMaybe<Scalars["Int"]>;
  primaryId_GTE?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  primaryId_LT?: InputMaybe<Scalars["Int"]>;
  primaryId_LTE?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcReports_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcReports_EQUAL?: InputMaybe<Scalars["String"]>;
  qcReports_GT?: InputMaybe<Scalars["Int"]>;
  qcReports_GTE?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcReports_LT?: InputMaybe<Scalars["Int"]>;
  qcReports_LTE?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleClass_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleClass_GT?: InputMaybe<Scalars["Int"]>;
  sampleClass_GTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_LT?: InputMaybe<Scalars["Int"]>;
  sampleClass_LTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleName_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleName_GT?: InputMaybe<Scalars["Int"]>;
  sampleName_GTE?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleName_LT?: InputMaybe<Scalars["Int"]>;
  sampleName_LTE?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleOrigin_GT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_GTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleType_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleType_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleType_GT?: InputMaybe<Scalars["Int"]>;
  sampleType_GTE?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleType_LT?: InputMaybe<Scalars["Int"]>;
  sampleType_LTE?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sex_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sex_EQUAL?: InputMaybe<Scalars["String"]>;
  sex_GT?: InputMaybe<Scalars["Int"]>;
  sex_GTE?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sex_LT?: InputMaybe<Scalars["Int"]>;
  sex_LTE?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  species_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  species_EQUAL?: InputMaybe<Scalars["String"]>;
  species_GT?: InputMaybe<Scalars["Int"]>;
  species_GTE?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  species_LT?: InputMaybe<Scalars["Int"]>;
  species_LTE?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  tissueLocation_EQUAL?: InputMaybe<Scalars["String"]>;
  tissueLocation_GT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_GTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  tubeId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  tubeId_EQUAL?: InputMaybe<Scalars["String"]>;
  tubeId_GT?: InputMaybe<Scalars["Int"]>;
  tubeId_GTE?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  tubeId_LT?: InputMaybe<Scalars["Int"]>;
  tubeId_LTE?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_EQUAL?: InputMaybe<Scalars["String"]>;
  tumorOrNormal_GT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_GTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type StatusSampleMetadataHasStatusRelationship = {
  __typename?: "StatusSampleMetadataHasStatusRelationship";
  cursor: Scalars["String"];
  node: SampleMetadata;
};

export type StatusSampleMetadataHasStatusUpdateConnectionInput = {
  node?: InputMaybe<SampleMetadataUpdateInput>;
};

export type StatusSampleMetadataHasStatusUpdateFieldInput = {
  connect?: InputMaybe<Array<StatusSampleMetadataHasStatusConnectFieldInput>>;
  create?: InputMaybe<Array<StatusSampleMetadataHasStatusCreateFieldInput>>;
  delete?: InputMaybe<Array<StatusSampleMetadataHasStatusDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<StatusSampleMetadataHasStatusDisconnectFieldInput>
  >;
  update?: InputMaybe<StatusSampleMetadataHasStatusUpdateConnectionInput>;
  where?: InputMaybe<StatusSampleMetadataHasStatusConnectionWhere>;
};

export type StatusSampleMetadataSampleMetadataHasStatusAggregationSelection = {
  __typename?: "StatusSampleMetadataSampleMetadataHasStatusAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<StatusSampleMetadataSampleMetadataHasStatusNodeAggregateSelection>;
};

export type StatusSampleMetadataSampleMetadataHasStatusNodeAggregateSelection =
  {
    __typename?: "StatusSampleMetadataSampleMetadataHasStatusNodeAggregateSelection";
    additionalProperties: StringAggregateSelectionNonNullable;
    baitSet: StringAggregateSelectionNullable;
    cfDNA2dBarcode: StringAggregateSelectionNullable;
    cmoInfoIgoId: StringAggregateSelectionNullable;
    cmoPatientId: StringAggregateSelectionNullable;
    cmoSampleIdFields: StringAggregateSelectionNonNullable;
    cmoSampleName: StringAggregateSelectionNullable;
    collectionYear: StringAggregateSelectionNonNullable;
    genePanel: StringAggregateSelectionNonNullable;
    igoRequestId: StringAggregateSelectionNullable;
    importDate: StringAggregateSelectionNonNullable;
    investigatorSampleId: StringAggregateSelectionNullable;
    libraries: StringAggregateSelectionNonNullable;
    oncotreeCode: StringAggregateSelectionNullable;
    preservation: StringAggregateSelectionNullable;
    primaryId: StringAggregateSelectionNonNullable;
    qcReports: StringAggregateSelectionNonNullable;
    sampleClass: StringAggregateSelectionNonNullable;
    sampleName: StringAggregateSelectionNullable;
    sampleOrigin: StringAggregateSelectionNullable;
    sampleType: StringAggregateSelectionNonNullable;
    sex: StringAggregateSelectionNonNullable;
    species: StringAggregateSelectionNonNullable;
    tissueLocation: StringAggregateSelectionNullable;
    tubeId: StringAggregateSelectionNullable;
    tumorOrNormal: StringAggregateSelectionNonNullable;
  };

/** Fields to sort Statuses by. The order in which sorts are applied is not guaranteed when specifying many fields in one StatusSort object. */
export type StatusSort = {
  validationReport?: InputMaybe<SortDirection>;
  validationStatus?: InputMaybe<SortDirection>;
};

export type StatusUpdateInput = {
  requestMetadataHasStatus?: InputMaybe<
    Array<StatusRequestMetadataHasStatusUpdateFieldInput>
  >;
  sampleMetadataHasStatus?: InputMaybe<
    Array<StatusSampleMetadataHasStatusUpdateFieldInput>
  >;
  validationReport?: InputMaybe<Scalars["String"]>;
  validationStatus?: InputMaybe<Scalars["Boolean"]>;
};

export type StatusWhere = {
  AND?: InputMaybe<Array<StatusWhere>>;
  OR?: InputMaybe<Array<StatusWhere>>;
  requestMetadataHasStatusAggregate?: InputMaybe<StatusRequestMetadataHasStatusAggregateInput>;
  requestMetadataHasStatusConnection_ALL?: InputMaybe<StatusRequestMetadataHasStatusConnectionWhere>;
  requestMetadataHasStatusConnection_NONE?: InputMaybe<StatusRequestMetadataHasStatusConnectionWhere>;
  requestMetadataHasStatusConnection_SINGLE?: InputMaybe<StatusRequestMetadataHasStatusConnectionWhere>;
  requestMetadataHasStatusConnection_SOME?: InputMaybe<StatusRequestMetadataHasStatusConnectionWhere>;
  /** Return Statuses where all of the related RequestMetadata match this filter */
  requestMetadataHasStatus_ALL?: InputMaybe<RequestMetadataWhere>;
  /** Return Statuses where none of the related RequestMetadata match this filter */
  requestMetadataHasStatus_NONE?: InputMaybe<RequestMetadataWhere>;
  /** Return Statuses where one of the related RequestMetadata match this filter */
  requestMetadataHasStatus_SINGLE?: InputMaybe<RequestMetadataWhere>;
  /** Return Statuses where some of the related RequestMetadata match this filter */
  requestMetadataHasStatus_SOME?: InputMaybe<RequestMetadataWhere>;
  sampleMetadataHasStatusAggregate?: InputMaybe<StatusSampleMetadataHasStatusAggregateInput>;
  sampleMetadataHasStatusConnection_ALL?: InputMaybe<StatusSampleMetadataHasStatusConnectionWhere>;
  sampleMetadataHasStatusConnection_NONE?: InputMaybe<StatusSampleMetadataHasStatusConnectionWhere>;
  sampleMetadataHasStatusConnection_SINGLE?: InputMaybe<StatusSampleMetadataHasStatusConnectionWhere>;
  sampleMetadataHasStatusConnection_SOME?: InputMaybe<StatusSampleMetadataHasStatusConnectionWhere>;
  /** Return Statuses where all of the related SampleMetadata match this filter */
  sampleMetadataHasStatus_ALL?: InputMaybe<SampleMetadataWhere>;
  /** Return Statuses where none of the related SampleMetadata match this filter */
  sampleMetadataHasStatus_NONE?: InputMaybe<SampleMetadataWhere>;
  /** Return Statuses where one of the related SampleMetadata match this filter */
  sampleMetadataHasStatus_SINGLE?: InputMaybe<SampleMetadataWhere>;
  /** Return Statuses where some of the related SampleMetadata match this filter */
  sampleMetadataHasStatus_SOME?: InputMaybe<SampleMetadataWhere>;
  validationReport?: InputMaybe<Scalars["String"]>;
  validationReport_CONTAINS?: InputMaybe<Scalars["String"]>;
  validationReport_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  validationReport_IN?: InputMaybe<Array<Scalars["String"]>>;
  validationReport_NOT?: InputMaybe<Scalars["String"]>;
  validationReport_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  validationReport_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  validationReport_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  validationReport_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  validationReport_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  validationStatus?: InputMaybe<Scalars["Boolean"]>;
  validationStatus_NOT?: InputMaybe<Scalars["Boolean"]>;
};

export type StatusesConnection = {
  __typename?: "StatusesConnection";
  edges: Array<StatusEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type StringAggregateSelectionNonNullable = {
  __typename?: "StringAggregateSelectionNonNullable";
  longest: Scalars["String"];
  shortest: Scalars["String"];
};

export type StringAggregateSelectionNullable = {
  __typename?: "StringAggregateSelectionNullable";
  longest?: Maybe<Scalars["String"]>;
  shortest?: Maybe<Scalars["String"]>;
};

export type Tempo = {
  __typename?: "Tempo";
  accessLevel?: Maybe<Scalars["String"]>;
  billed?: Maybe<Scalars["Boolean"]>;
  billedBy?: Maybe<Scalars["String"]>;
  costCenter?: Maybe<Scalars["String"]>;
  custodianInformation?: Maybe<Scalars["String"]>;
  hasEventBamCompletes: Array<BamComplete>;
  hasEventBamCompletesAggregate?: Maybe<TempoBamCompleteHasEventBamCompletesAggregationSelection>;
  hasEventBamCompletesConnection: TempoHasEventBamCompletesConnection;
  hasEventMafCompletes: Array<MafComplete>;
  hasEventMafCompletesAggregate?: Maybe<TempoMafCompleteHasEventMafCompletesAggregationSelection>;
  hasEventMafCompletesConnection: TempoHasEventMafCompletesConnection;
  hasEventQcCompletes: Array<QcComplete>;
  hasEventQcCompletesAggregate?: Maybe<TempoQcCompleteHasEventQcCompletesAggregationSelection>;
  hasEventQcCompletesConnection: TempoHasEventQcCompletesConnection;
  samplesHasTempo: Array<Sample>;
  samplesHasTempoAggregate?: Maybe<TempoSampleSamplesHasTempoAggregationSelection>;
  samplesHasTempoConnection: TempoSamplesHasTempoConnection;
  smileTempoId: Scalars["String"];
};

export type TempoHasEventBamCompletesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<BamCompleteOptions>;
  where?: InputMaybe<BamCompleteWhere>;
};

export type TempoHasEventBamCompletesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<BamCompleteWhere>;
};

export type TempoHasEventBamCompletesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<TempoHasEventBamCompletesConnectionSort>>;
  where?: InputMaybe<TempoHasEventBamCompletesConnectionWhere>;
};

export type TempoHasEventMafCompletesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<MafCompleteOptions>;
  where?: InputMaybe<MafCompleteWhere>;
};

export type TempoHasEventMafCompletesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<MafCompleteWhere>;
};

export type TempoHasEventMafCompletesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<TempoHasEventMafCompletesConnectionSort>>;
  where?: InputMaybe<TempoHasEventMafCompletesConnectionWhere>;
};

export type TempoHasEventQcCompletesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<QcCompleteOptions>;
  where?: InputMaybe<QcCompleteWhere>;
};

export type TempoHasEventQcCompletesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<QcCompleteWhere>;
};

export type TempoHasEventQcCompletesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<TempoHasEventQcCompletesConnectionSort>>;
  where?: InputMaybe<TempoHasEventQcCompletesConnectionWhere>;
};

export type TempoSamplesHasTempoArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  options?: InputMaybe<SampleOptions>;
  where?: InputMaybe<SampleWhere>;
};

export type TempoSamplesHasTempoAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<SampleWhere>;
};

export type TempoSamplesHasTempoConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  first?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<TempoSamplesHasTempoConnectionSort>>;
  where?: InputMaybe<TempoSamplesHasTempoConnectionWhere>;
};

export type TempoAggregateSelection = {
  __typename?: "TempoAggregateSelection";
  accessLevel: StringAggregateSelectionNullable;
  billedBy: StringAggregateSelectionNullable;
  costCenter: StringAggregateSelectionNullable;
  count: Scalars["Int"];
  custodianInformation: StringAggregateSelectionNullable;
  smileTempoId: StringAggregateSelectionNonNullable;
};

export type TempoBamCompleteHasEventBamCompletesAggregationSelection = {
  __typename?: "TempoBamCompleteHasEventBamCompletesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<TempoBamCompleteHasEventBamCompletesNodeAggregateSelection>;
};

export type TempoBamCompleteHasEventBamCompletesNodeAggregateSelection = {
  __typename?: "TempoBamCompleteHasEventBamCompletesNodeAggregateSelection";
  date: StringAggregateSelectionNonNullable;
  status: StringAggregateSelectionNonNullable;
};

export type TempoConnectInput = {
  hasEventBamCompletes?: InputMaybe<
    Array<TempoHasEventBamCompletesConnectFieldInput>
  >;
  hasEventMafCompletes?: InputMaybe<
    Array<TempoHasEventMafCompletesConnectFieldInput>
  >;
  hasEventQcCompletes?: InputMaybe<
    Array<TempoHasEventQcCompletesConnectFieldInput>
  >;
  samplesHasTempo?: InputMaybe<Array<TempoSamplesHasTempoConnectFieldInput>>;
};

export type TempoConnectWhere = {
  node: TempoWhere;
};

export type TempoCreateInput = {
  accessLevel?: InputMaybe<Scalars["String"]>;
  billed?: InputMaybe<Scalars["Boolean"]>;
  billedBy?: InputMaybe<Scalars["String"]>;
  costCenter?: InputMaybe<Scalars["String"]>;
  custodianInformation?: InputMaybe<Scalars["String"]>;
  hasEventBamCompletes?: InputMaybe<TempoHasEventBamCompletesFieldInput>;
  hasEventMafCompletes?: InputMaybe<TempoHasEventMafCompletesFieldInput>;
  hasEventQcCompletes?: InputMaybe<TempoHasEventQcCompletesFieldInput>;
  samplesHasTempo?: InputMaybe<TempoSamplesHasTempoFieldInput>;
  smileTempoId: Scalars["String"];
};

export type TempoDeleteInput = {
  hasEventBamCompletes?: InputMaybe<
    Array<TempoHasEventBamCompletesDeleteFieldInput>
  >;
  hasEventMafCompletes?: InputMaybe<
    Array<TempoHasEventMafCompletesDeleteFieldInput>
  >;
  hasEventQcCompletes?: InputMaybe<
    Array<TempoHasEventQcCompletesDeleteFieldInput>
  >;
  samplesHasTempo?: InputMaybe<Array<TempoSamplesHasTempoDeleteFieldInput>>;
};

export type TempoDisconnectInput = {
  hasEventBamCompletes?: InputMaybe<
    Array<TempoHasEventBamCompletesDisconnectFieldInput>
  >;
  hasEventMafCompletes?: InputMaybe<
    Array<TempoHasEventMafCompletesDisconnectFieldInput>
  >;
  hasEventQcCompletes?: InputMaybe<
    Array<TempoHasEventQcCompletesDisconnectFieldInput>
  >;
  samplesHasTempo?: InputMaybe<Array<TempoSamplesHasTempoDisconnectFieldInput>>;
};

export type TempoEdge = {
  __typename?: "TempoEdge";
  cursor: Scalars["String"];
  node: Tempo;
};

export type TempoHasEventBamCompletesAggregateInput = {
  AND?: InputMaybe<Array<TempoHasEventBamCompletesAggregateInput>>;
  OR?: InputMaybe<Array<TempoHasEventBamCompletesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<TempoHasEventBamCompletesNodeAggregationWhereInput>;
};

export type TempoHasEventBamCompletesConnectFieldInput = {
  connect?: InputMaybe<Array<BamCompleteConnectInput>>;
  where?: InputMaybe<BamCompleteConnectWhere>;
};

export type TempoHasEventBamCompletesConnection = {
  __typename?: "TempoHasEventBamCompletesConnection";
  edges: Array<TempoHasEventBamCompletesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type TempoHasEventBamCompletesConnectionSort = {
  node?: InputMaybe<BamCompleteSort>;
};

export type TempoHasEventBamCompletesConnectionWhere = {
  AND?: InputMaybe<Array<TempoHasEventBamCompletesConnectionWhere>>;
  OR?: InputMaybe<Array<TempoHasEventBamCompletesConnectionWhere>>;
  node?: InputMaybe<BamCompleteWhere>;
  node_NOT?: InputMaybe<BamCompleteWhere>;
};

export type TempoHasEventBamCompletesCreateFieldInput = {
  node: BamCompleteCreateInput;
};

export type TempoHasEventBamCompletesDeleteFieldInput = {
  delete?: InputMaybe<BamCompleteDeleteInput>;
  where?: InputMaybe<TempoHasEventBamCompletesConnectionWhere>;
};

export type TempoHasEventBamCompletesDisconnectFieldInput = {
  disconnect?: InputMaybe<BamCompleteDisconnectInput>;
  where?: InputMaybe<TempoHasEventBamCompletesConnectionWhere>;
};

export type TempoHasEventBamCompletesFieldInput = {
  connect?: InputMaybe<Array<TempoHasEventBamCompletesConnectFieldInput>>;
  create?: InputMaybe<Array<TempoHasEventBamCompletesCreateFieldInput>>;
};

export type TempoHasEventBamCompletesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TempoHasEventBamCompletesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TempoHasEventBamCompletesNodeAggregationWhereInput>>;
  date_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  date_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  date_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  date_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  date_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  date_EQUAL?: InputMaybe<Scalars["String"]>;
  date_GT?: InputMaybe<Scalars["Int"]>;
  date_GTE?: InputMaybe<Scalars["Int"]>;
  date_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  date_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  date_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  date_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  date_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  date_LT?: InputMaybe<Scalars["Int"]>;
  date_LTE?: InputMaybe<Scalars["Int"]>;
  date_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  date_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  date_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  date_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  date_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  status_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  status_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  status_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  status_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  status_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  status_EQUAL?: InputMaybe<Scalars["String"]>;
  status_GT?: InputMaybe<Scalars["Int"]>;
  status_GTE?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  status_LT?: InputMaybe<Scalars["Int"]>;
  status_LTE?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type TempoHasEventBamCompletesRelationship = {
  __typename?: "TempoHasEventBamCompletesRelationship";
  cursor: Scalars["String"];
  node: BamComplete;
};

export type TempoHasEventBamCompletesUpdateConnectionInput = {
  node?: InputMaybe<BamCompleteUpdateInput>;
};

export type TempoHasEventBamCompletesUpdateFieldInput = {
  connect?: InputMaybe<Array<TempoHasEventBamCompletesConnectFieldInput>>;
  create?: InputMaybe<Array<TempoHasEventBamCompletesCreateFieldInput>>;
  delete?: InputMaybe<Array<TempoHasEventBamCompletesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TempoHasEventBamCompletesDisconnectFieldInput>>;
  update?: InputMaybe<TempoHasEventBamCompletesUpdateConnectionInput>;
  where?: InputMaybe<TempoHasEventBamCompletesConnectionWhere>;
};

export type TempoHasEventMafCompletesAggregateInput = {
  AND?: InputMaybe<Array<TempoHasEventMafCompletesAggregateInput>>;
  OR?: InputMaybe<Array<TempoHasEventMafCompletesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<TempoHasEventMafCompletesNodeAggregationWhereInput>;
};

export type TempoHasEventMafCompletesConnectFieldInput = {
  connect?: InputMaybe<Array<MafCompleteConnectInput>>;
  where?: InputMaybe<MafCompleteConnectWhere>;
};

export type TempoHasEventMafCompletesConnection = {
  __typename?: "TempoHasEventMafCompletesConnection";
  edges: Array<TempoHasEventMafCompletesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type TempoHasEventMafCompletesConnectionSort = {
  node?: InputMaybe<MafCompleteSort>;
};

export type TempoHasEventMafCompletesConnectionWhere = {
  AND?: InputMaybe<Array<TempoHasEventMafCompletesConnectionWhere>>;
  OR?: InputMaybe<Array<TempoHasEventMafCompletesConnectionWhere>>;
  node?: InputMaybe<MafCompleteWhere>;
  node_NOT?: InputMaybe<MafCompleteWhere>;
};

export type TempoHasEventMafCompletesCreateFieldInput = {
  node: MafCompleteCreateInput;
};

export type TempoHasEventMafCompletesDeleteFieldInput = {
  delete?: InputMaybe<MafCompleteDeleteInput>;
  where?: InputMaybe<TempoHasEventMafCompletesConnectionWhere>;
};

export type TempoHasEventMafCompletesDisconnectFieldInput = {
  disconnect?: InputMaybe<MafCompleteDisconnectInput>;
  where?: InputMaybe<TempoHasEventMafCompletesConnectionWhere>;
};

export type TempoHasEventMafCompletesFieldInput = {
  connect?: InputMaybe<Array<TempoHasEventMafCompletesConnectFieldInput>>;
  create?: InputMaybe<Array<TempoHasEventMafCompletesCreateFieldInput>>;
};

export type TempoHasEventMafCompletesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TempoHasEventMafCompletesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TempoHasEventMafCompletesNodeAggregationWhereInput>>;
  date_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  date_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  date_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  date_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  date_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  date_EQUAL?: InputMaybe<Scalars["String"]>;
  date_GT?: InputMaybe<Scalars["Int"]>;
  date_GTE?: InputMaybe<Scalars["Int"]>;
  date_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  date_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  date_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  date_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  date_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  date_LT?: InputMaybe<Scalars["Int"]>;
  date_LTE?: InputMaybe<Scalars["Int"]>;
  date_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  date_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  date_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  date_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  date_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  normalPrimaryId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  normalPrimaryId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  normalPrimaryId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  normalPrimaryId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  normalPrimaryId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  normalPrimaryId_EQUAL?: InputMaybe<Scalars["String"]>;
  normalPrimaryId_GT?: InputMaybe<Scalars["Int"]>;
  normalPrimaryId_GTE?: InputMaybe<Scalars["Int"]>;
  normalPrimaryId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  normalPrimaryId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  normalPrimaryId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  normalPrimaryId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  normalPrimaryId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  normalPrimaryId_LT?: InputMaybe<Scalars["Int"]>;
  normalPrimaryId_LTE?: InputMaybe<Scalars["Int"]>;
  normalPrimaryId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  normalPrimaryId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  normalPrimaryId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  normalPrimaryId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  normalPrimaryId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  status_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  status_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  status_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  status_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  status_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  status_EQUAL?: InputMaybe<Scalars["String"]>;
  status_GT?: InputMaybe<Scalars["Int"]>;
  status_GTE?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  status_LT?: InputMaybe<Scalars["Int"]>;
  status_LTE?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type TempoHasEventMafCompletesRelationship = {
  __typename?: "TempoHasEventMafCompletesRelationship";
  cursor: Scalars["String"];
  node: MafComplete;
};

export type TempoHasEventMafCompletesUpdateConnectionInput = {
  node?: InputMaybe<MafCompleteUpdateInput>;
};

export type TempoHasEventMafCompletesUpdateFieldInput = {
  connect?: InputMaybe<Array<TempoHasEventMafCompletesConnectFieldInput>>;
  create?: InputMaybe<Array<TempoHasEventMafCompletesCreateFieldInput>>;
  delete?: InputMaybe<Array<TempoHasEventMafCompletesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TempoHasEventMafCompletesDisconnectFieldInput>>;
  update?: InputMaybe<TempoHasEventMafCompletesUpdateConnectionInput>;
  where?: InputMaybe<TempoHasEventMafCompletesConnectionWhere>;
};

export type TempoHasEventQcCompletesAggregateInput = {
  AND?: InputMaybe<Array<TempoHasEventQcCompletesAggregateInput>>;
  OR?: InputMaybe<Array<TempoHasEventQcCompletesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<TempoHasEventQcCompletesNodeAggregationWhereInput>;
};

export type TempoHasEventQcCompletesConnectFieldInput = {
  connect?: InputMaybe<Array<QcCompleteConnectInput>>;
  where?: InputMaybe<QcCompleteConnectWhere>;
};

export type TempoHasEventQcCompletesConnection = {
  __typename?: "TempoHasEventQcCompletesConnection";
  edges: Array<TempoHasEventQcCompletesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type TempoHasEventQcCompletesConnectionSort = {
  node?: InputMaybe<QcCompleteSort>;
};

export type TempoHasEventQcCompletesConnectionWhere = {
  AND?: InputMaybe<Array<TempoHasEventQcCompletesConnectionWhere>>;
  OR?: InputMaybe<Array<TempoHasEventQcCompletesConnectionWhere>>;
  node?: InputMaybe<QcCompleteWhere>;
  node_NOT?: InputMaybe<QcCompleteWhere>;
};

export type TempoHasEventQcCompletesCreateFieldInput = {
  node: QcCompleteCreateInput;
};

export type TempoHasEventQcCompletesDeleteFieldInput = {
  delete?: InputMaybe<QcCompleteDeleteInput>;
  where?: InputMaybe<TempoHasEventQcCompletesConnectionWhere>;
};

export type TempoHasEventQcCompletesDisconnectFieldInput = {
  disconnect?: InputMaybe<QcCompleteDisconnectInput>;
  where?: InputMaybe<TempoHasEventQcCompletesConnectionWhere>;
};

export type TempoHasEventQcCompletesFieldInput = {
  connect?: InputMaybe<Array<TempoHasEventQcCompletesConnectFieldInput>>;
  create?: InputMaybe<Array<TempoHasEventQcCompletesCreateFieldInput>>;
};

export type TempoHasEventQcCompletesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TempoHasEventQcCompletesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TempoHasEventQcCompletesNodeAggregationWhereInput>>;
  date_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  date_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  date_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  date_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  date_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  date_EQUAL?: InputMaybe<Scalars["String"]>;
  date_GT?: InputMaybe<Scalars["Int"]>;
  date_GTE?: InputMaybe<Scalars["Int"]>;
  date_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  date_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  date_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  date_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  date_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  date_LT?: InputMaybe<Scalars["Int"]>;
  date_LTE?: InputMaybe<Scalars["Int"]>;
  date_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  date_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  date_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  date_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  date_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  reason_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  reason_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  reason_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  reason_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  reason_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  reason_EQUAL?: InputMaybe<Scalars["String"]>;
  reason_GT?: InputMaybe<Scalars["Int"]>;
  reason_GTE?: InputMaybe<Scalars["Int"]>;
  reason_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  reason_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  reason_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  reason_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  reason_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  reason_LT?: InputMaybe<Scalars["Int"]>;
  reason_LTE?: InputMaybe<Scalars["Int"]>;
  reason_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  reason_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  reason_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  reason_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  reason_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  result_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  result_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  result_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  result_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  result_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  result_EQUAL?: InputMaybe<Scalars["String"]>;
  result_GT?: InputMaybe<Scalars["Int"]>;
  result_GTE?: InputMaybe<Scalars["Int"]>;
  result_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  result_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  result_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  result_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  result_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  result_LT?: InputMaybe<Scalars["Int"]>;
  result_LTE?: InputMaybe<Scalars["Int"]>;
  result_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  result_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  result_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  result_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  result_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  status_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  status_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  status_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  status_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  status_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  status_EQUAL?: InputMaybe<Scalars["String"]>;
  status_GT?: InputMaybe<Scalars["Int"]>;
  status_GTE?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  status_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  status_LT?: InputMaybe<Scalars["Int"]>;
  status_LTE?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  status_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type TempoHasEventQcCompletesRelationship = {
  __typename?: "TempoHasEventQcCompletesRelationship";
  cursor: Scalars["String"];
  node: QcComplete;
};

export type TempoHasEventQcCompletesUpdateConnectionInput = {
  node?: InputMaybe<QcCompleteUpdateInput>;
};

export type TempoHasEventQcCompletesUpdateFieldInput = {
  connect?: InputMaybe<Array<TempoHasEventQcCompletesConnectFieldInput>>;
  create?: InputMaybe<Array<TempoHasEventQcCompletesCreateFieldInput>>;
  delete?: InputMaybe<Array<TempoHasEventQcCompletesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TempoHasEventQcCompletesDisconnectFieldInput>>;
  update?: InputMaybe<TempoHasEventQcCompletesUpdateConnectionInput>;
  where?: InputMaybe<TempoHasEventQcCompletesConnectionWhere>;
};

export type TempoMafCompleteHasEventMafCompletesAggregationSelection = {
  __typename?: "TempoMafCompleteHasEventMafCompletesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<TempoMafCompleteHasEventMafCompletesNodeAggregateSelection>;
};

export type TempoMafCompleteHasEventMafCompletesNodeAggregateSelection = {
  __typename?: "TempoMafCompleteHasEventMafCompletesNodeAggregateSelection";
  date: StringAggregateSelectionNonNullable;
  normalPrimaryId: StringAggregateSelectionNonNullable;
  status: StringAggregateSelectionNonNullable;
};

export type TempoOptions = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more TempoSort objects to sort Tempos by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TempoSort>>;
};

export type TempoQcCompleteHasEventQcCompletesAggregationSelection = {
  __typename?: "TempoQcCompleteHasEventQcCompletesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<TempoQcCompleteHasEventQcCompletesNodeAggregateSelection>;
};

export type TempoQcCompleteHasEventQcCompletesNodeAggregateSelection = {
  __typename?: "TempoQcCompleteHasEventQcCompletesNodeAggregateSelection";
  date: StringAggregateSelectionNonNullable;
  reason: StringAggregateSelectionNonNullable;
  result: StringAggregateSelectionNonNullable;
  status: StringAggregateSelectionNonNullable;
};

export type TempoRelationInput = {
  hasEventBamCompletes?: InputMaybe<
    Array<TempoHasEventBamCompletesCreateFieldInput>
  >;
  hasEventMafCompletes?: InputMaybe<
    Array<TempoHasEventMafCompletesCreateFieldInput>
  >;
  hasEventQcCompletes?: InputMaybe<
    Array<TempoHasEventQcCompletesCreateFieldInput>
  >;
  samplesHasTempo?: InputMaybe<Array<TempoSamplesHasTempoCreateFieldInput>>;
};

export type TempoSampleSamplesHasTempoAggregationSelection = {
  __typename?: "TempoSampleSamplesHasTempoAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<TempoSampleSamplesHasTempoNodeAggregateSelection>;
};

export type TempoSampleSamplesHasTempoNodeAggregateSelection = {
  __typename?: "TempoSampleSamplesHasTempoNodeAggregateSelection";
  accessLevel: StringAggregateSelectionNullable;
  additionalProperties: StringAggregateSelectionNullable;
  baitSet: StringAggregateSelectionNullable;
  bamCompleteDate: StringAggregateSelectionNullable;
  bamCompleteStatus: StringAggregateSelectionNullable;
  billedBy: StringAggregateSelectionNullable;
  cancerType: StringAggregateSelectionNullable;
  cancerTypeDetailed: StringAggregateSelectionNullable;
  cfDNA2dBarcode: StringAggregateSelectionNullable;
  cmoInfoIgoId: StringAggregateSelectionNullable;
  cmoPatientId: StringAggregateSelectionNullable;
  cmoSampleIdFields: StringAggregateSelectionNullable;
  cmoSampleName: StringAggregateSelectionNullable;
  collectionYear: StringAggregateSelectionNullable;
  costCenter: StringAggregateSelectionNullable;
  custodianInformation: StringAggregateSelectionNullable;
  datasource: StringAggregateSelectionNonNullable;
  dmpPatientId: StringAggregateSelectionNullable;
  embargoDate: StringAggregateSelectionNullable;
  genePanel: StringAggregateSelectionNullable;
  igoRequestId: StringAggregateSelectionNullable;
  importDate: StringAggregateSelectionNullable;
  initialPipelineRunDate: StringAggregateSelectionNullable;
  investigatorSampleId: StringAggregateSelectionNullable;
  libraries: StringAggregateSelectionNullable;
  mafCompleteDate: StringAggregateSelectionNullable;
  mafCompleteNormalPrimaryId: StringAggregateSelectionNullable;
  mafCompleteStatus: StringAggregateSelectionNullable;
  oncotreeCode: StringAggregateSelectionNullable;
  preservation: StringAggregateSelectionNullable;
  primaryId: StringAggregateSelectionNullable;
  qcCompleteDate: StringAggregateSelectionNullable;
  qcCompleteReason: StringAggregateSelectionNullable;
  qcCompleteResult: StringAggregateSelectionNullable;
  qcCompleteStatus: StringAggregateSelectionNullable;
  qcReports: StringAggregateSelectionNullable;
  recipe: StringAggregateSelectionNullable;
  sampleCategory: StringAggregateSelectionNonNullable;
  sampleClass: StringAggregateSelectionNonNullable;
  sampleName: StringAggregateSelectionNullable;
  sampleOrigin: StringAggregateSelectionNullable;
  sampleType: StringAggregateSelectionNullable;
  sex: StringAggregateSelectionNullable;
  smileSampleId: StringAggregateSelectionNonNullable;
  smileTempoId: StringAggregateSelectionNullable;
  species: StringAggregateSelectionNullable;
  tissueLocation: StringAggregateSelectionNullable;
  tubeId: StringAggregateSelectionNullable;
  tumorOrNormal: StringAggregateSelectionNullable;
  validationReport: StringAggregateSelectionNullable;
};

export type TempoSamplesHasTempoAggregateInput = {
  AND?: InputMaybe<Array<TempoSamplesHasTempoAggregateInput>>;
  OR?: InputMaybe<Array<TempoSamplesHasTempoAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<TempoSamplesHasTempoNodeAggregationWhereInput>;
};

export type TempoSamplesHasTempoConnectFieldInput = {
  connect?: InputMaybe<Array<SampleConnectInput>>;
  where?: InputMaybe<SampleConnectWhere>;
};

export type TempoSamplesHasTempoConnection = {
  __typename?: "TempoSamplesHasTempoConnection";
  edges: Array<TempoSamplesHasTempoRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type TempoSamplesHasTempoConnectionSort = {
  node?: InputMaybe<SampleSort>;
};

export type TempoSamplesHasTempoConnectionWhere = {
  AND?: InputMaybe<Array<TempoSamplesHasTempoConnectionWhere>>;
  OR?: InputMaybe<Array<TempoSamplesHasTempoConnectionWhere>>;
  node?: InputMaybe<SampleWhere>;
  node_NOT?: InputMaybe<SampleWhere>;
};

export type TempoSamplesHasTempoCreateFieldInput = {
  node: SampleCreateInput;
};

export type TempoSamplesHasTempoDeleteFieldInput = {
  delete?: InputMaybe<SampleDeleteInput>;
  where?: InputMaybe<TempoSamplesHasTempoConnectionWhere>;
};

export type TempoSamplesHasTempoDisconnectFieldInput = {
  disconnect?: InputMaybe<SampleDisconnectInput>;
  where?: InputMaybe<TempoSamplesHasTempoConnectionWhere>;
};

export type TempoSamplesHasTempoFieldInput = {
  connect?: InputMaybe<Array<TempoSamplesHasTempoConnectFieldInput>>;
  create?: InputMaybe<Array<TempoSamplesHasTempoCreateFieldInput>>;
};

export type TempoSamplesHasTempoNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TempoSamplesHasTempoNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TempoSamplesHasTempoNodeAggregationWhereInput>>;
  accessLevel_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  accessLevel_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  accessLevel_EQUAL?: InputMaybe<Scalars["String"]>;
  accessLevel_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_LTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  accessLevel_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  additionalProperties_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  additionalProperties_EQUAL?: InputMaybe<Scalars["String"]>;
  additionalProperties_GT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_GTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_LTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  additionalProperties_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  baitSet_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  baitSet_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  baitSet_EQUAL?: InputMaybe<Scalars["String"]>;
  baitSet_GT?: InputMaybe<Scalars["Int"]>;
  baitSet_GTE?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  baitSet_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  baitSet_LT?: InputMaybe<Scalars["Int"]>;
  baitSet_LTE?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  baitSet_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  bamCompleteDate_EQUAL?: InputMaybe<Scalars["String"]>;
  bamCompleteDate_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  bamCompleteStatus_EQUAL?: InputMaybe<Scalars["String"]>;
  bamCompleteStatus_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_LTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  bamCompleteStatus_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  billedBy_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  billedBy_EQUAL?: InputMaybe<Scalars["String"]>;
  billedBy_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_LTE?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  billedBy_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cancerTypeDetailed_EQUAL?: InputMaybe<Scalars["String"]>;
  cancerTypeDetailed_GT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_GTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_LTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cancerTypeDetailed_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cancerType_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cancerType_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cancerType_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cancerType_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cancerType_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cancerType_EQUAL?: InputMaybe<Scalars["String"]>;
  cancerType_GT?: InputMaybe<Scalars["Int"]>;
  cancerType_GTE?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cancerType_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cancerType_LT?: InputMaybe<Scalars["Int"]>;
  cancerType_LTE?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cancerType_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cfDNA2dBarcode_EQUAL?: InputMaybe<Scalars["String"]>;
  cfDNA2dBarcode_GT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_GTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_LTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cfDNA2dBarcode_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoInfoIgoId_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoInfoIgoId_GT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_GTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_LTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoInfoIgoId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoPatientId_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoPatientId_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_LTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoPatientId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleIdFields_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoSampleIdFields_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleIdFields_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  cmoSampleName_EQUAL?: InputMaybe<Scalars["String"]>;
  cmoSampleName_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_LTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  cmoSampleName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  collectionYear_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  collectionYear_EQUAL?: InputMaybe<Scalars["String"]>;
  collectionYear_GT?: InputMaybe<Scalars["Int"]>;
  collectionYear_GTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  collectionYear_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_LT?: InputMaybe<Scalars["Int"]>;
  collectionYear_LTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  collectionYear_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  costCenter_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  costCenter_EQUAL?: InputMaybe<Scalars["String"]>;
  costCenter_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_LTE?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  costCenter_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  custodianInformation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  custodianInformation_EQUAL?: InputMaybe<Scalars["String"]>;
  custodianInformation_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_LTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  custodianInformation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  datasource_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  datasource_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  datasource_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  datasource_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  datasource_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  datasource_EQUAL?: InputMaybe<Scalars["String"]>;
  datasource_GT?: InputMaybe<Scalars["Int"]>;
  datasource_GTE?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  datasource_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  datasource_LT?: InputMaybe<Scalars["Int"]>;
  datasource_LTE?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  datasource_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  dmpPatientId_EQUAL?: InputMaybe<Scalars["String"]>;
  dmpPatientId_GT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_GTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_LTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  dmpPatientId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  embargoDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  embargoDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  embargoDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  embargoDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  embargoDate_EQUAL?: InputMaybe<Scalars["String"]>;
  embargoDate_GT?: InputMaybe<Scalars["Int"]>;
  embargoDate_GTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  embargoDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_LT?: InputMaybe<Scalars["Int"]>;
  embargoDate_LTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  embargoDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  genePanel_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  genePanel_EQUAL?: InputMaybe<Scalars["String"]>;
  genePanel_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_LTE?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  genePanel_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  igoRequestId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  igoRequestId_EQUAL?: InputMaybe<Scalars["String"]>;
  igoRequestId_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_LTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  igoRequestId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  importDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  importDate_EQUAL?: InputMaybe<Scalars["String"]>;
  importDate_GT?: InputMaybe<Scalars["Int"]>;
  importDate_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_LT?: InputMaybe<Scalars["Int"]>;
  importDate_LTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  importDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  initialPipelineRunDate_EQUAL?: InputMaybe<Scalars["String"]>;
  initialPipelineRunDate_GT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_GTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_LTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  initialPipelineRunDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  investigatorSampleId_EQUAL?: InputMaybe<Scalars["String"]>;
  investigatorSampleId_GT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_LTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  investigatorSampleId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  libraries_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  libraries_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  libraries_EQUAL?: InputMaybe<Scalars["String"]>;
  libraries_GT?: InputMaybe<Scalars["Int"]>;
  libraries_GTE?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  libraries_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  libraries_LT?: InputMaybe<Scalars["Int"]>;
  libraries_LTE?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  libraries_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteDate_EQUAL?: InputMaybe<Scalars["String"]>;
  mafCompleteDate_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteNormalPrimaryId_EQUAL?: InputMaybe<Scalars["String"]>;
  mafCompleteNormalPrimaryId_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteNormalPrimaryId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  mafCompleteStatus_EQUAL?: InputMaybe<Scalars["String"]>;
  mafCompleteStatus_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_LTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  mafCompleteStatus_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  oncotreeCode_EQUAL?: InputMaybe<Scalars["String"]>;
  oncotreeCode_GT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_GTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_LTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  oncotreeCode_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  preservation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  preservation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  preservation_EQUAL?: InputMaybe<Scalars["String"]>;
  preservation_GT?: InputMaybe<Scalars["Int"]>;
  preservation_GTE?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  preservation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  preservation_LT?: InputMaybe<Scalars["Int"]>;
  preservation_LTE?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  preservation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  primaryId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  primaryId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  primaryId_EQUAL?: InputMaybe<Scalars["String"]>;
  primaryId_GT?: InputMaybe<Scalars["Int"]>;
  primaryId_GTE?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  primaryId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  primaryId_LT?: InputMaybe<Scalars["Int"]>;
  primaryId_LTE?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  primaryId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteDate_EQUAL?: InputMaybe<Scalars["String"]>;
  qcCompleteDate_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteDate_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteReason_EQUAL?: InputMaybe<Scalars["String"]>;
  qcCompleteReason_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteReason_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteResult_EQUAL?: InputMaybe<Scalars["String"]>;
  qcCompleteResult_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteResult_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcCompleteStatus_EQUAL?: InputMaybe<Scalars["String"]>;
  qcCompleteStatus_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_LTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcCompleteStatus_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcReports_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  qcReports_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  qcReports_EQUAL?: InputMaybe<Scalars["String"]>;
  qcReports_GT?: InputMaybe<Scalars["Int"]>;
  qcReports_GTE?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  qcReports_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  qcReports_LT?: InputMaybe<Scalars["Int"]>;
  qcReports_LTE?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  qcReports_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  recipe_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  recipe_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  recipe_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  recipe_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  recipe_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  recipe_EQUAL?: InputMaybe<Scalars["String"]>;
  recipe_GT?: InputMaybe<Scalars["Int"]>;
  recipe_GTE?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  recipe_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  recipe_LT?: InputMaybe<Scalars["Int"]>;
  recipe_LTE?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  recipe_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleCategory_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleCategory_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleCategory_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleCategory_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleCategory_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleCategory_GT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_GTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_LTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleCategory_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleClass_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleClass_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleClass_GT?: InputMaybe<Scalars["Int"]>;
  sampleClass_GTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleClass_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_LT?: InputMaybe<Scalars["Int"]>;
  sampleClass_LTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleClass_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleName_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleName_GT?: InputMaybe<Scalars["Int"]>;
  sampleName_GTE?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleName_LT?: InputMaybe<Scalars["Int"]>;
  sampleName_LTE?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleOrigin_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleOrigin_GT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_GTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_LTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleOrigin_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleType_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sampleType_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sampleType_EQUAL?: InputMaybe<Scalars["String"]>;
  sampleType_GT?: InputMaybe<Scalars["Int"]>;
  sampleType_GTE?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleType_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sampleType_LT?: InputMaybe<Scalars["Int"]>;
  sampleType_LTE?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sampleType_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  sex_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  sex_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  sex_EQUAL?: InputMaybe<Scalars["String"]>;
  sex_GT?: InputMaybe<Scalars["Int"]>;
  sex_GTE?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  sex_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  sex_LT?: InputMaybe<Scalars["Int"]>;
  sex_LTE?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  sex_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  smileSampleId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  smileSampleId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  smileSampleId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  smileSampleId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  smileSampleId_EQUAL?: InputMaybe<Scalars["String"]>;
  smileSampleId_GT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_GTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_LTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  smileSampleId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  smileTempoId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  smileTempoId_EQUAL?: InputMaybe<Scalars["String"]>;
  smileTempoId_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_LTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  smileTempoId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  species_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  species_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  species_EQUAL?: InputMaybe<Scalars["String"]>;
  species_GT?: InputMaybe<Scalars["Int"]>;
  species_GTE?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  species_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  species_LT?: InputMaybe<Scalars["Int"]>;
  species_LTE?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  species_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  tissueLocation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  tissueLocation_EQUAL?: InputMaybe<Scalars["String"]>;
  tissueLocation_GT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_GTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_LTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  tissueLocation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  tubeId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  tubeId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  tubeId_EQUAL?: InputMaybe<Scalars["String"]>;
  tubeId_GT?: InputMaybe<Scalars["Int"]>;
  tubeId_GTE?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  tubeId_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  tubeId_LT?: InputMaybe<Scalars["Int"]>;
  tubeId_LTE?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  tubeId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  tumorOrNormal_EQUAL?: InputMaybe<Scalars["String"]>;
  tumorOrNormal_GT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_GTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_LTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  tumorOrNormal_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  validationReport_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  validationReport_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  validationReport_EQUAL?: InputMaybe<Scalars["String"]>;
  validationReport_GT?: InputMaybe<Scalars["Int"]>;
  validationReport_GTE?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  validationReport_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  validationReport_LT?: InputMaybe<Scalars["Int"]>;
  validationReport_LTE?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  validationReport_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type TempoSamplesHasTempoRelationship = {
  __typename?: "TempoSamplesHasTempoRelationship";
  cursor: Scalars["String"];
  node: Sample;
};

export type TempoSamplesHasTempoUpdateConnectionInput = {
  node?: InputMaybe<SampleUpdateInput>;
};

export type TempoSamplesHasTempoUpdateFieldInput = {
  connect?: InputMaybe<Array<TempoSamplesHasTempoConnectFieldInput>>;
  create?: InputMaybe<Array<TempoSamplesHasTempoCreateFieldInput>>;
  delete?: InputMaybe<Array<TempoSamplesHasTempoDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TempoSamplesHasTempoDisconnectFieldInput>>;
  update?: InputMaybe<TempoSamplesHasTempoUpdateConnectionInput>;
  where?: InputMaybe<TempoSamplesHasTempoConnectionWhere>;
};

/** Fields to sort Tempos by. The order in which sorts are applied is not guaranteed when specifying many fields in one TempoSort object. */
export type TempoSort = {
  accessLevel?: InputMaybe<SortDirection>;
  billed?: InputMaybe<SortDirection>;
  billedBy?: InputMaybe<SortDirection>;
  costCenter?: InputMaybe<SortDirection>;
  custodianInformation?: InputMaybe<SortDirection>;
  smileTempoId?: InputMaybe<SortDirection>;
};

export type TempoUpdateInput = {
  accessLevel?: InputMaybe<Scalars["String"]>;
  billed?: InputMaybe<Scalars["Boolean"]>;
  billedBy?: InputMaybe<Scalars["String"]>;
  costCenter?: InputMaybe<Scalars["String"]>;
  custodianInformation?: InputMaybe<Scalars["String"]>;
  hasEventBamCompletes?: InputMaybe<
    Array<TempoHasEventBamCompletesUpdateFieldInput>
  >;
  hasEventMafCompletes?: InputMaybe<
    Array<TempoHasEventMafCompletesUpdateFieldInput>
  >;
  hasEventQcCompletes?: InputMaybe<
    Array<TempoHasEventQcCompletesUpdateFieldInput>
  >;
  samplesHasTempo?: InputMaybe<Array<TempoSamplesHasTempoUpdateFieldInput>>;
  smileTempoId?: InputMaybe<Scalars["String"]>;
};

export type TempoWhere = {
  AND?: InputMaybe<Array<TempoWhere>>;
  OR?: InputMaybe<Array<TempoWhere>>;
  accessLevel?: InputMaybe<Scalars["String"]>;
  accessLevel_CONTAINS?: InputMaybe<Scalars["String"]>;
  accessLevel_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  accessLevel_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  accessLevel_NOT?: InputMaybe<Scalars["String"]>;
  accessLevel_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  accessLevel_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  accessLevel_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  accessLevel_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  accessLevel_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  billed?: InputMaybe<Scalars["Boolean"]>;
  billedBy?: InputMaybe<Scalars["String"]>;
  billedBy_CONTAINS?: InputMaybe<Scalars["String"]>;
  billedBy_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  billedBy_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  billedBy_NOT?: InputMaybe<Scalars["String"]>;
  billedBy_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  billedBy_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  billedBy_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  billedBy_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  billedBy_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  billed_NOT?: InputMaybe<Scalars["Boolean"]>;
  costCenter?: InputMaybe<Scalars["String"]>;
  costCenter_CONTAINS?: InputMaybe<Scalars["String"]>;
  costCenter_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  costCenter_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  costCenter_NOT?: InputMaybe<Scalars["String"]>;
  costCenter_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  costCenter_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  costCenter_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  costCenter_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  costCenter_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  custodianInformation?: InputMaybe<Scalars["String"]>;
  custodianInformation_CONTAINS?: InputMaybe<Scalars["String"]>;
  custodianInformation_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  custodianInformation_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  custodianInformation_NOT?: InputMaybe<Scalars["String"]>;
  custodianInformation_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  custodianInformation_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  custodianInformation_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >;
  custodianInformation_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  custodianInformation_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  hasEventBamCompletesAggregate?: InputMaybe<TempoHasEventBamCompletesAggregateInput>;
  hasEventBamCompletesConnection_ALL?: InputMaybe<TempoHasEventBamCompletesConnectionWhere>;
  hasEventBamCompletesConnection_NONE?: InputMaybe<TempoHasEventBamCompletesConnectionWhere>;
  hasEventBamCompletesConnection_SINGLE?: InputMaybe<TempoHasEventBamCompletesConnectionWhere>;
  hasEventBamCompletesConnection_SOME?: InputMaybe<TempoHasEventBamCompletesConnectionWhere>;
  /** Return Tempos where all of the related BamCompletes match this filter */
  hasEventBamCompletes_ALL?: InputMaybe<BamCompleteWhere>;
  /** Return Tempos where none of the related BamCompletes match this filter */
  hasEventBamCompletes_NONE?: InputMaybe<BamCompleteWhere>;
  /** Return Tempos where one of the related BamCompletes match this filter */
  hasEventBamCompletes_SINGLE?: InputMaybe<BamCompleteWhere>;
  /** Return Tempos where some of the related BamCompletes match this filter */
  hasEventBamCompletes_SOME?: InputMaybe<BamCompleteWhere>;
  hasEventMafCompletesAggregate?: InputMaybe<TempoHasEventMafCompletesAggregateInput>;
  hasEventMafCompletesConnection_ALL?: InputMaybe<TempoHasEventMafCompletesConnectionWhere>;
  hasEventMafCompletesConnection_NONE?: InputMaybe<TempoHasEventMafCompletesConnectionWhere>;
  hasEventMafCompletesConnection_SINGLE?: InputMaybe<TempoHasEventMafCompletesConnectionWhere>;
  hasEventMafCompletesConnection_SOME?: InputMaybe<TempoHasEventMafCompletesConnectionWhere>;
  /** Return Tempos where all of the related MafCompletes match this filter */
  hasEventMafCompletes_ALL?: InputMaybe<MafCompleteWhere>;
  /** Return Tempos where none of the related MafCompletes match this filter */
  hasEventMafCompletes_NONE?: InputMaybe<MafCompleteWhere>;
  /** Return Tempos where one of the related MafCompletes match this filter */
  hasEventMafCompletes_SINGLE?: InputMaybe<MafCompleteWhere>;
  /** Return Tempos where some of the related MafCompletes match this filter */
  hasEventMafCompletes_SOME?: InputMaybe<MafCompleteWhere>;
  hasEventQcCompletesAggregate?: InputMaybe<TempoHasEventQcCompletesAggregateInput>;
  hasEventQcCompletesConnection_ALL?: InputMaybe<TempoHasEventQcCompletesConnectionWhere>;
  hasEventQcCompletesConnection_NONE?: InputMaybe<TempoHasEventQcCompletesConnectionWhere>;
  hasEventQcCompletesConnection_SINGLE?: InputMaybe<TempoHasEventQcCompletesConnectionWhere>;
  hasEventQcCompletesConnection_SOME?: InputMaybe<TempoHasEventQcCompletesConnectionWhere>;
  /** Return Tempos where all of the related QcCompletes match this filter */
  hasEventQcCompletes_ALL?: InputMaybe<QcCompleteWhere>;
  /** Return Tempos where none of the related QcCompletes match this filter */
  hasEventQcCompletes_NONE?: InputMaybe<QcCompleteWhere>;
  /** Return Tempos where one of the related QcCompletes match this filter */
  hasEventQcCompletes_SINGLE?: InputMaybe<QcCompleteWhere>;
  /** Return Tempos where some of the related QcCompletes match this filter */
  hasEventQcCompletes_SOME?: InputMaybe<QcCompleteWhere>;
  samplesHasTempoAggregate?: InputMaybe<TempoSamplesHasTempoAggregateInput>;
  samplesHasTempoConnection_ALL?: InputMaybe<TempoSamplesHasTempoConnectionWhere>;
  samplesHasTempoConnection_NONE?: InputMaybe<TempoSamplesHasTempoConnectionWhere>;
  samplesHasTempoConnection_SINGLE?: InputMaybe<TempoSamplesHasTempoConnectionWhere>;
  samplesHasTempoConnection_SOME?: InputMaybe<TempoSamplesHasTempoConnectionWhere>;
  /** Return Tempos where all of the related Samples match this filter */
  samplesHasTempo_ALL?: InputMaybe<SampleWhere>;
  /** Return Tempos where none of the related Samples match this filter */
  samplesHasTempo_NONE?: InputMaybe<SampleWhere>;
  /** Return Tempos where one of the related Samples match this filter */
  samplesHasTempo_SINGLE?: InputMaybe<SampleWhere>;
  /** Return Tempos where some of the related Samples match this filter */
  samplesHasTempo_SOME?: InputMaybe<SampleWhere>;
  smileTempoId?: InputMaybe<Scalars["String"]>;
  smileTempoId_CONTAINS?: InputMaybe<Scalars["String"]>;
  smileTempoId_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  smileTempoId_IN?: InputMaybe<Array<Scalars["String"]>>;
  smileTempoId_NOT?: InputMaybe<Scalars["String"]>;
  smileTempoId_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  smileTempoId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  smileTempoId_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  smileTempoId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  smileTempoId_STARTS_WITH?: InputMaybe<Scalars["String"]>;
};

export type TemposConnection = {
  __typename?: "TemposConnection";
  edges: Array<TempoEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type UpdateBamCompletesMutationResponse = {
  __typename?: "UpdateBamCompletesMutationResponse";
  bamCompletes: Array<BamComplete>;
  info: UpdateInfo;
};

export type UpdateCohortCompletesMutationResponse = {
  __typename?: "UpdateCohortCompletesMutationResponse";
  cohortCompletes: Array<CohortComplete>;
  info: UpdateInfo;
};

export type UpdateCohortsMutationResponse = {
  __typename?: "UpdateCohortsMutationResponse";
  cohorts: Array<Cohort>;
  info: UpdateInfo;
};

export type UpdateInfo = {
  __typename?: "UpdateInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesCreated: Scalars["Int"];
  nodesDeleted: Scalars["Int"];
  relationshipsCreated: Scalars["Int"];
  relationshipsDeleted: Scalars["Int"];
};

export type UpdateMafCompletesMutationResponse = {
  __typename?: "UpdateMafCompletesMutationResponse";
  info: UpdateInfo;
  mafCompletes: Array<MafComplete>;
};

export type UpdatePatientAliasesMutationResponse = {
  __typename?: "UpdatePatientAliasesMutationResponse";
  info: UpdateInfo;
  patientAliases: Array<PatientAlias>;
};

export type UpdatePatientsMutationResponse = {
  __typename?: "UpdatePatientsMutationResponse";
  info: UpdateInfo;
  patients: Array<Patient>;
};

export type UpdateProjectsMutationResponse = {
  __typename?: "UpdateProjectsMutationResponse";
  info: UpdateInfo;
  projects: Array<Project>;
};

export type UpdateQcCompletesMutationResponse = {
  __typename?: "UpdateQcCompletesMutationResponse";
  info: UpdateInfo;
  qcCompletes: Array<QcComplete>;
};

export type UpdateRequestMetadataMutationResponse = {
  __typename?: "UpdateRequestMetadataMutationResponse";
  info: UpdateInfo;
  requestMetadata: Array<RequestMetadata>;
};

export type UpdateRequestsMutationResponse = {
  __typename?: "UpdateRequestsMutationResponse";
  info: UpdateInfo;
  requests: Array<Request>;
};

export type UpdateSampleAliasesMutationResponse = {
  __typename?: "UpdateSampleAliasesMutationResponse";
  info: UpdateInfo;
  sampleAliases: Array<SampleAlias>;
};

export type UpdateSampleMetadataMutationResponse = {
  __typename?: "UpdateSampleMetadataMutationResponse";
  info: UpdateInfo;
  sampleMetadata: Array<SampleMetadata>;
};

export type UpdateSamplesMutationResponse = {
  __typename?: "UpdateSamplesMutationResponse";
  info: UpdateInfo;
  samples: Array<Sample>;
};

export type UpdateStatusesMutationResponse = {
  __typename?: "UpdateStatusesMutationResponse";
  info: UpdateInfo;
  statuses: Array<Status>;
};

export type UpdateTemposMutationResponse = {
  __typename?: "UpdateTemposMutationResponse";
  info: UpdateInfo;
  tempos: Array<Tempo>;
};

export type RequestsListQueryVariables = Exact<{
  options?: InputMaybe<RequestOptions>;
  where?: InputMaybe<RequestWhere>;
}>;

export type RequestsListQuery = {
  __typename?: "Query";
  requestsConnection: { __typename?: "RequestsConnection"; totalCount: number };
  requests: Array<{
    __typename?: "Request";
    importDate?: string | null;
    totalSampleCount?: number | null;
    igoRequestId: string;
    igoProjectId: string;
    genePanel: string;
    dataAnalystName: string;
    dataAnalystEmail: string;
    dataAccessEmails: string;
    bicAnalysis: boolean;
    investigatorEmail: string;
    investigatorName: string;
    isCmoRequest: boolean;
    labHeadEmail: string;
    labHeadName: string;
    libraryType?: string | null;
    otherContactEmails: string;
    piEmail: string;
    projectManagerName: string;
    qcAccessEmails: string;
    smileRequestId: string;
    hasMetadataRequestMetadata: Array<{
      __typename?: "RequestMetadata";
      importDate: string;
    }>;
    hasSampleSamplesConnection: {
      __typename?: "RequestHasSampleSamplesConnection";
      totalCount: number;
    };
  }>;
};

export type PatientsListQueryVariables = Exact<{
  options?: InputMaybe<PatientOptions>;
  where?: InputMaybe<PatientWhere>;
}>;

export type PatientsListQuery = {
  __typename?: "Query";
  patientsConnection: { __typename?: "PatientsConnection"; totalCount: number };
  patients: Array<{
    __typename?: "Patient";
    smilePatientId: string;
    cmoPatientId?: string | null;
    dmpPatientId?: string | null;
    totalSampleCount?: number | null;
    cmoSampleIds?: string | null;
    consentPartA?: string | null;
    consentPartC?: string | null;
    hasSampleSamples: Array<{
      __typename?: "Sample";
      smileSampleId: string;
      hasMetadataSampleMetadata: Array<{
        __typename?: "SampleMetadata";
        primaryId: string;
        cmoSampleName?: string | null;
        additionalProperties: string;
        cmoPatientId?: string | null;
      }>;
    }>;
    hasSampleSamplesConnection: {
      __typename?: "PatientHasSampleSamplesConnection";
      totalCount: number;
    };
    patientAliasesIsAlias: Array<{
      __typename?: "PatientAlias";
      namespace: string;
      value: string;
    }>;
  }>;
};

export type SamplesListQueryVariables = Exact<{
  where?: InputMaybe<SampleWhere>;
  options?: InputMaybe<SampleOptions>;
  sampleMetadataOptions?: InputMaybe<SampleMetadataOptions>;
  bamCompletesOptions?: InputMaybe<BamCompleteOptions>;
  mafCompletesOptions?: InputMaybe<MafCompleteOptions>;
  qcCompletesOptions?: InputMaybe<QcCompleteOptions>;
}>;

export type SamplesListQuery = {
  __typename?: "Query";
  samplesConnection: { __typename?: "SamplesConnection"; totalCount: number };
  samples: Array<{
    __typename?: "Sample";
    additionalProperties?: string | null;
    baitSet?: string | null;
    cfDNA2dBarcode?: string | null;
    cmoInfoIgoId?: string | null;
    cmoPatientId?: string | null;
    cmoSampleIdFields?: string | null;
    cmoSampleName?: string | null;
    collectionYear?: string | null;
    genePanel?: string | null;
    igoComplete?: boolean | null;
    igoRequestId?: string | null;
    importDate?: string | null;
    investigatorSampleId?: string | null;
    libraries?: string | null;
    oncotreeCode?: string | null;
    preservation?: string | null;
    primaryId?: string | null;
    qcReports?: string | null;
    sampleClass: string;
    sampleName?: string | null;
    sampleOrigin?: string | null;
    sampleType?: string | null;
    sex?: string | null;
    species?: string | null;
    tissueLocation?: string | null;
    tubeId?: string | null;
    tumorOrNormal?: string | null;
    validationReport?: string | null;
    validationStatus?: boolean | null;
    cancerType?: string | null;
    cancerTypeDetailed?: string | null;
    billed?: boolean | null;
    costCenter?: string | null;
    billedBy?: string | null;
    custodianInformation?: string | null;
    accessLevel?: string | null;
    initialPipelineRunDate?: string | null;
    embargoDate?: string | null;
    bamCompleteDate?: string | null;
    bamCompleteStatus?: string | null;
    mafCompleteDate?: string | null;
    mafCompleteNormalPrimaryId?: string | null;
    mafCompleteStatus?: string | null;
    qcCompleteDate?: string | null;
    qcCompleteResult?: string | null;
    qcCompleteReason?: string | null;
    qcCompleteStatus?: string | null;
    recipe?: string | null;
    dmpPatientId?: string | null;
    datasource: string;
    revisable: boolean;
    sampleCategory: string;
    smileSampleId: string;
    hasMetadataSampleMetadata: Array<{
      __typename?: "SampleMetadata";
      additionalProperties: string;
      baitSet?: string | null;
      cfDNA2dBarcode?: string | null;
      cmoInfoIgoId?: string | null;
      cmoPatientId?: string | null;
      cmoSampleIdFields: string;
      cmoSampleName?: string | null;
      collectionYear: string;
      genePanel: string;
      igoComplete?: boolean | null;
      igoRequestId?: string | null;
      importDate: string;
      investigatorSampleId?: string | null;
      libraries: string;
      oncotreeCode?: string | null;
      preservation?: string | null;
      primaryId: string;
      qcReports: string;
      sampleClass: string;
      sampleName?: string | null;
      sampleOrigin?: string | null;
      sampleType: string;
      sex: string;
      species: string;
      tissueLocation?: string | null;
      tubeId?: string | null;
      tumorOrNormal: string;
      hasStatusStatuses: Array<{
        __typename?: "Status";
        validationReport: string;
        validationStatus: boolean;
      }>;
    }>;
    requestsHasSample: Array<{
      __typename?: "Request";
      igoRequestId: string;
      igoProjectId: string;
      genePanel: string;
      dataAnalystName: string;
      dataAnalystEmail: string;
      dataAccessEmails: string;
      bicAnalysis: boolean;
      investigatorEmail: string;
      investigatorName: string;
      isCmoRequest: boolean;
      labHeadEmail: string;
      labHeadName: string;
      libraryType?: string | null;
      otherContactEmails: string;
      piEmail: string;
      projectManagerName: string;
      qcAccessEmails: string;
      smileRequestId: string;
    }>;
    patientsHasSample: Array<{
      __typename?: "Patient";
      smilePatientId: string;
      patientAliasesIsAlias: Array<{
        __typename?: "PatientAlias";
        namespace: string;
        value: string;
      }>;
    }>;
    cohortsHasCohortSample: Array<{
      __typename?: "Cohort";
      cohortId: string;
      hasCohortCompleteCohortCompletes: Array<{
        __typename?: "CohortComplete";
        date: string;
      }>;
    }>;
    hasTempoTempos: Array<{
      __typename?: "Tempo";
      smileTempoId: string;
      billed?: boolean | null;
      billedBy?: string | null;
      costCenter?: string | null;
      custodianInformation?: string | null;
      accessLevel?: string | null;
      hasEventBamCompletes: Array<{
        __typename?: "BamComplete";
        date: string;
        status: string;
      }>;
      hasEventMafCompletes: Array<{
        __typename?: "MafComplete";
        date: string;
        normalPrimaryId: string;
        status: string;
      }>;
      hasEventQcCompletes: Array<{
        __typename?: "QcComplete";
        date: string;
        reason: string;
        result: string;
        status: string;
      }>;
    }>;
  }>;
};

export type RequestPartsFragment = {
  __typename?: "Request";
  igoRequestId: string;
  igoProjectId: string;
  genePanel: string;
  dataAnalystName: string;
  dataAnalystEmail: string;
  dataAccessEmails: string;
  bicAnalysis: boolean;
  investigatorEmail: string;
  investigatorName: string;
  isCmoRequest: boolean;
  labHeadEmail: string;
  labHeadName: string;
  libraryType?: string | null;
  otherContactEmails: string;
  piEmail: string;
  projectManagerName: string;
  qcAccessEmails: string;
  smileRequestId: string;
};

export type SamplePartsFragment = {
  __typename?: "Sample";
  datasource: string;
  revisable: boolean;
  sampleCategory: string;
  sampleClass: string;
  smileSampleId: string;
};

export type SampleMetadataPartsFragment = {
  __typename?: "SampleMetadata";
  additionalProperties: string;
  baitSet?: string | null;
  cfDNA2dBarcode?: string | null;
  cmoInfoIgoId?: string | null;
  cmoPatientId?: string | null;
  cmoSampleIdFields: string;
  cmoSampleName?: string | null;
  collectionYear: string;
  genePanel: string;
  igoComplete?: boolean | null;
  igoRequestId?: string | null;
  importDate: string;
  investigatorSampleId?: string | null;
  libraries: string;
  oncotreeCode?: string | null;
  preservation?: string | null;
  primaryId: string;
  qcReports: string;
  sampleClass: string;
  sampleName?: string | null;
  sampleOrigin?: string | null;
  sampleType: string;
  sex: string;
  species: string;
  tissueLocation?: string | null;
  tubeId?: string | null;
  tumorOrNormal: string;
};

export type TempoPartsFragment = {
  __typename?: "Tempo";
  smileTempoId: string;
  billed?: boolean | null;
  billedBy?: string | null;
  costCenter?: string | null;
  custodianInformation?: string | null;
  accessLevel?: string | null;
};

export type SamplesQueryVariables = Exact<{
  where?: InputMaybe<SampleWhere>;
  hasMetadataSampleMetadataWhere2?: InputMaybe<SampleMetadataWhere>;
  hasMetadataSampleMetadataOptions2?: InputMaybe<SampleMetadataOptions>;
}>;

export type SamplesQuery = {
  __typename?: "Query";
  samples: Array<{
    __typename?: "Sample";
    smileSampleId: string;
    revisable: boolean;
    sampleCategory: string;
    sampleClass: string;
    datasource: string;
    hasMetadataSampleMetadata: Array<{
      __typename?: "SampleMetadata";
      additionalProperties: string;
      baitSet?: string | null;
      cfDNA2dBarcode?: string | null;
      cmoInfoIgoId?: string | null;
      cmoPatientId?: string | null;
      cmoSampleIdFields: string;
      cmoSampleName?: string | null;
      collectionYear: string;
      genePanel: string;
      igoComplete?: boolean | null;
      igoRequestId?: string | null;
      importDate: string;
      investigatorSampleId?: string | null;
      libraries: string;
      oncotreeCode?: string | null;
      preservation?: string | null;
      primaryId: string;
      qcReports: string;
      sampleClass: string;
      sampleName?: string | null;
      sampleOrigin?: string | null;
      sampleType: string;
      sex: string;
      species: string;
      tissueLocation?: string | null;
      tubeId?: string | null;
      tumorOrNormal: string;
    }>;
    hasTempoTempos: Array<{
      __typename?: "Tempo";
      smileTempoId: string;
      billed?: boolean | null;
      billedBy?: string | null;
      costCenter?: string | null;
      custodianInformation?: string | null;
      accessLevel?: string | null;
    }>;
  }>;
};

export type UpdateSamplesMutationVariables = Exact<{
  where?: InputMaybe<SampleWhere>;
  update?: InputMaybe<SampleUpdateInput>;
  connect?: InputMaybe<SampleConnectInput>;
}>;

export type UpdateSamplesMutation = {
  __typename?: "Mutation";
  updateSamples: {
    __typename?: "UpdateSamplesMutationResponse";
    samples: Array<{
      __typename?: "Sample";
      smileSampleId: string;
      revisable: boolean;
      datasource: string;
      sampleCategory: string;
      sampleClass: string;
      hasMetadataSampleMetadata: Array<{
        __typename?: "SampleMetadata";
        additionalProperties: string;
        baitSet?: string | null;
        cfDNA2dBarcode?: string | null;
        cmoInfoIgoId?: string | null;
        cmoPatientId?: string | null;
        cmoSampleIdFields: string;
        cmoSampleName?: string | null;
        collectionYear: string;
        genePanel: string;
        igoComplete?: boolean | null;
        igoRequestId?: string | null;
        importDate: string;
        investigatorSampleId?: string | null;
        libraries: string;
        oncotreeCode?: string | null;
        preservation?: string | null;
        primaryId: string;
        qcReports: string;
        sampleClass: string;
        sampleName?: string | null;
        sampleOrigin?: string | null;
        sampleType: string;
        sex: string;
        species: string;
        tissueLocation?: string | null;
        tubeId?: string | null;
        tumorOrNormal: string;
      }>;
      hasTempoTempos: Array<{
        __typename?: "Tempo";
        smileTempoId: string;
        billed?: boolean | null;
        billedBy?: string | null;
        costCenter?: string | null;
        custodianInformation?: string | null;
        accessLevel?: string | null;
      }>;
    }>;
  };
};

export type GetPatientIdsTripletsQueryVariables = Exact<{
  patientIds: Array<Scalars["String"]> | Scalars["String"];
}>;

export type GetPatientIdsTripletsQuery = {
  __typename?: "Query";
  patientIdsTriplets?: Array<{
    __typename?: "PatientIdsTriplet";
    CMO_ID?: string | null;
    DMP_ID?: string | null;
    PT_MRN?: string | null;
  } | null> | null;
};

export type CohortsListQueryVariables = Exact<{
  where?: InputMaybe<CohortWhere>;
  options?: InputMaybe<CohortOptions>;
  hasCohortCompleteCohortCompletesOptions2?: InputMaybe<CohortCompleteOptions>;
}>;

export type CohortsListQuery = {
  __typename?: "Query";
  cohortsConnection: { __typename?: "CohortsConnection"; totalCount: number };
  cohorts: Array<{
    __typename?: "Cohort";
    cohortId: string;
    smileSampleIds?: Array<string | null> | null;
    totalSampleCount?: number | null;
    billed?: string | null;
    initialCohortDeliveryDate?: string | null;
    endUsers?: string | null;
    pmUsers?: string | null;
    projectTitle?: string | null;
    projectSubtitle?: string | null;
    status?: string | null;
    type?: string | null;
    hasCohortCompleteCohortCompletes: Array<{
      __typename?: "CohortComplete";
      date: string;
      endUsers: string;
      pmUsers: string;
      projectTitle: string;
      projectSubtitle: string;
      status: string;
      type: string;
    }>;
    hasCohortSampleSamplesConnection: {
      __typename?: "CohortHasCohortSampleSamplesConnection";
      totalCount: number;
    };
    hasCohortSampleSamples: Array<{
      __typename?: "Sample";
      smileSampleId: string;
      hasTempoTempos: Array<{
        __typename?: "Tempo";
        smileTempoId: string;
        billed?: boolean | null;
      }>;
    }>;
  }>;
};

export const RequestPartsFragmentDoc = gql`
  fragment RequestParts on Request {
    igoRequestId
    igoProjectId
    genePanel
    dataAnalystName
    dataAnalystEmail
    dataAccessEmails
    bicAnalysis
    investigatorEmail
    investigatorName
    isCmoRequest
    labHeadEmail
    labHeadName
    libraryType
    otherContactEmails
    piEmail
    projectManagerName
    qcAccessEmails
    smileRequestId
  }
`;
export const SamplePartsFragmentDoc = gql`
  fragment SampleParts on Sample {
    datasource
    revisable
    sampleCategory
    sampleClass
    smileSampleId
  }
`;
export const SampleMetadataPartsFragmentDoc = gql`
  fragment SampleMetadataParts on SampleMetadata {
    additionalProperties
    baitSet
    cfDNA2dBarcode
    cmoInfoIgoId
    cmoPatientId
    cmoSampleIdFields
    cmoSampleName
    collectionYear
    genePanel
    igoComplete
    igoRequestId
    importDate
    investigatorSampleId
    libraries
    oncotreeCode
    preservation
    primaryId
    qcReports
    sampleClass
    sampleName
    sampleOrigin
    sampleType
    sex
    species
    tissueLocation
    tubeId
    tumorOrNormal
  }
`;
export const TempoPartsFragmentDoc = gql`
  fragment TempoParts on Tempo {
    smileTempoId
    billed
    billedBy
    costCenter
    custodianInformation
    accessLevel
  }
`;
export const RequestsListDocument = gql`
  query RequestsList($options: RequestOptions, $where: RequestWhere) {
    requestsConnection(where: $where) {
      totalCount
    }
    requests(where: $where, options: $options) {
      ...RequestParts
      importDate
      totalSampleCount
      hasMetadataRequestMetadata {
        importDate
      }
      hasSampleSamplesConnection {
        totalCount
      }
    }
  }
  ${RequestPartsFragmentDoc}
`;

/**
 * __useRequestsListQuery__
 *
 * To run a query within a React component, call `useRequestsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useRequestsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRequestsListQuery({
 *   variables: {
 *      options: // value for 'options'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useRequestsListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    RequestsListQuery,
    RequestsListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RequestsListQuery, RequestsListQueryVariables>(
    RequestsListDocument,
    options
  );
}
export function useRequestsListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RequestsListQuery,
    RequestsListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RequestsListQuery, RequestsListQueryVariables>(
    RequestsListDocument,
    options
  );
}
export type RequestsListQueryHookResult = ReturnType<
  typeof useRequestsListQuery
>;
export type RequestsListLazyQueryHookResult = ReturnType<
  typeof useRequestsListLazyQuery
>;
export type RequestsListQueryResult = Apollo.QueryResult<
  RequestsListQuery,
  RequestsListQueryVariables
>;
export const PatientsListDocument = gql`
  query PatientsList($options: PatientOptions, $where: PatientWhere) {
    patientsConnection(where: $where) {
      totalCount
    }
    patients(where: $where, options: $options) {
      smilePatientId
      cmoPatientId
      dmpPatientId
      totalSampleCount
      cmoSampleIds
      consentPartA
      consentPartC
      hasSampleSamples {
        smileSampleId
        hasMetadataSampleMetadata {
          primaryId
          cmoSampleName
          additionalProperties
          cmoPatientId
        }
      }
      hasSampleSamplesConnection {
        totalCount
      }
      patientAliasesIsAlias {
        namespace
        value
      }
    }
  }
`;

/**
 * __usePatientsListQuery__
 *
 * To run a query within a React component, call `usePatientsListQuery` and pass it any options that fit your needs.
 * When your component renders, `usePatientsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePatientsListQuery({
 *   variables: {
 *      options: // value for 'options'
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePatientsListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PatientsListQuery,
    PatientsListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PatientsListQuery, PatientsListQueryVariables>(
    PatientsListDocument,
    options
  );
}
export function usePatientsListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PatientsListQuery,
    PatientsListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PatientsListQuery, PatientsListQueryVariables>(
    PatientsListDocument,
    options
  );
}
export type PatientsListQueryHookResult = ReturnType<
  typeof usePatientsListQuery
>;
export type PatientsListLazyQueryHookResult = ReturnType<
  typeof usePatientsListLazyQuery
>;
export type PatientsListQueryResult = Apollo.QueryResult<
  PatientsListQuery,
  PatientsListQueryVariables
>;
export const SamplesListDocument = gql`
  query SamplesList(
    $where: SampleWhere
    $options: SampleOptions
    $sampleMetadataOptions: SampleMetadataOptions
    $bamCompletesOptions: BamCompleteOptions
    $mafCompletesOptions: MafCompleteOptions
    $qcCompletesOptions: QcCompleteOptions
  ) {
    samplesConnection(where: $where) {
      totalCount
    }
    samples(where: $where, options: $options) {
      ...SampleParts
      additionalProperties
      baitSet
      cfDNA2dBarcode
      cmoInfoIgoId
      cmoPatientId
      cmoSampleIdFields
      cmoSampleName
      collectionYear
      genePanel
      igoComplete
      igoRequestId
      importDate
      investigatorSampleId
      libraries
      oncotreeCode
      preservation
      primaryId
      qcReports
      sampleClass
      sampleName
      sampleOrigin
      sampleType
      sex
      species
      tissueLocation
      tubeId
      tumorOrNormal
      validationReport
      validationStatus
      cancerType
      cancerTypeDetailed
      billed
      costCenter
      billedBy
      custodianInformation
      accessLevel
      initialPipelineRunDate
      embargoDate
      bamCompleteDate
      bamCompleteStatus
      mafCompleteDate
      mafCompleteNormalPrimaryId
      mafCompleteStatus
      qcCompleteDate
      qcCompleteResult
      qcCompleteReason
      qcCompleteStatus
      recipe
      dmpPatientId
      hasMetadataSampleMetadata(options: $sampleMetadataOptions) {
        ...SampleMetadataParts
        hasStatusStatuses {
          validationReport
          validationStatus
        }
      }
      requestsHasSample {
        ...RequestParts
      }
      patientsHasSample {
        smilePatientId
        patientAliasesIsAlias {
          namespace
          value
        }
      }
      cohortsHasCohortSample {
        cohortId
        hasCohortCompleteCohortCompletes {
          date
        }
      }
      hasTempoTempos {
        ...TempoParts
        hasEventBamCompletes(options: $bamCompletesOptions) {
          date
          status
        }
        hasEventMafCompletes(options: $mafCompletesOptions) {
          date
          normalPrimaryId
          status
        }
        hasEventQcCompletes(options: $qcCompletesOptions) {
          date
          reason
          result
          status
        }
      }
    }
  }
  ${SamplePartsFragmentDoc}
  ${SampleMetadataPartsFragmentDoc}
  ${RequestPartsFragmentDoc}
  ${TempoPartsFragmentDoc}
`;

/**
 * __useSamplesListQuery__
 *
 * To run a query within a React component, call `useSamplesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useSamplesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSamplesListQuery({
 *   variables: {
 *      where: // value for 'where'
 *      options: // value for 'options'
 *      sampleMetadataOptions: // value for 'sampleMetadataOptions'
 *      bamCompletesOptions: // value for 'bamCompletesOptions'
 *      mafCompletesOptions: // value for 'mafCompletesOptions'
 *      qcCompletesOptions: // value for 'qcCompletesOptions'
 *   },
 * });
 */
export function useSamplesListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SamplesListQuery,
    SamplesListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SamplesListQuery, SamplesListQueryVariables>(
    SamplesListDocument,
    options
  );
}
export function useSamplesListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SamplesListQuery,
    SamplesListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SamplesListQuery, SamplesListQueryVariables>(
    SamplesListDocument,
    options
  );
}
export type SamplesListQueryHookResult = ReturnType<typeof useSamplesListQuery>;
export type SamplesListLazyQueryHookResult = ReturnType<
  typeof useSamplesListLazyQuery
>;
export type SamplesListQueryResult = Apollo.QueryResult<
  SamplesListQuery,
  SamplesListQueryVariables
>;
export const SamplesDocument = gql`
  query Samples(
    $where: SampleWhere
    $hasMetadataSampleMetadataWhere2: SampleMetadataWhere
    $hasMetadataSampleMetadataOptions2: SampleMetadataOptions
  ) {
    samples(where: $where) {
      smileSampleId
      revisable
      sampleCategory
      sampleClass
      datasource
      hasMetadataSampleMetadata(
        where: $hasMetadataSampleMetadataWhere2
        options: $hasMetadataSampleMetadataOptions2
      ) {
        ...SampleMetadataParts
      }
      hasTempoTempos {
        ...TempoParts
      }
    }
  }
  ${SampleMetadataPartsFragmentDoc}
  ${TempoPartsFragmentDoc}
`;

/**
 * __useSamplesQuery__
 *
 * To run a query within a React component, call `useSamplesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSamplesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSamplesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      hasMetadataSampleMetadataWhere2: // value for 'hasMetadataSampleMetadataWhere2'
 *      hasMetadataSampleMetadataOptions2: // value for 'hasMetadataSampleMetadataOptions2'
 *   },
 * });
 */
export function useSamplesQuery(
  baseOptions?: Apollo.QueryHookOptions<SamplesQuery, SamplesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SamplesQuery, SamplesQueryVariables>(
    SamplesDocument,
    options
  );
}
export function useSamplesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SamplesQuery, SamplesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SamplesQuery, SamplesQueryVariables>(
    SamplesDocument,
    options
  );
}
export type SamplesQueryHookResult = ReturnType<typeof useSamplesQuery>;
export type SamplesLazyQueryHookResult = ReturnType<typeof useSamplesLazyQuery>;
export type SamplesQueryResult = Apollo.QueryResult<
  SamplesQuery,
  SamplesQueryVariables
>;
export const UpdateSamplesDocument = gql`
  mutation UpdateSamples(
    $where: SampleWhere
    $update: SampleUpdateInput
    $connect: SampleConnectInput
  ) {
    updateSamples(where: $where, update: $update, connect: $connect) {
      samples {
        smileSampleId
        revisable
        datasource
        sampleCategory
        sampleClass
        hasMetadataSampleMetadata {
          ...SampleMetadataParts
        }
        hasTempoTempos {
          ...TempoParts
        }
      }
    }
  }
  ${SampleMetadataPartsFragmentDoc}
  ${TempoPartsFragmentDoc}
`;
export type UpdateSamplesMutationFn = Apollo.MutationFunction<
  UpdateSamplesMutation,
  UpdateSamplesMutationVariables
>;

/**
 * __useUpdateSamplesMutation__
 *
 * To run a mutation, you first call `useUpdateSamplesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSamplesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSamplesMutation, { data, loading, error }] = useUpdateSamplesMutation({
 *   variables: {
 *      where: // value for 'where'
 *      update: // value for 'update'
 *      connect: // value for 'connect'
 *   },
 * });
 */
export function useUpdateSamplesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateSamplesMutation,
    UpdateSamplesMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateSamplesMutation,
    UpdateSamplesMutationVariables
  >(UpdateSamplesDocument, options);
}
export type UpdateSamplesMutationHookResult = ReturnType<
  typeof useUpdateSamplesMutation
>;
export type UpdateSamplesMutationResult =
  Apollo.MutationResult<UpdateSamplesMutation>;
export type UpdateSamplesMutationOptions = Apollo.BaseMutationOptions<
  UpdateSamplesMutation,
  UpdateSamplesMutationVariables
>;
export const GetPatientIdsTripletsDocument = gql`
  query GetPatientIdsTriplets($patientIds: [String!]!) {
    patientIdsTriplets(patientIds: $patientIds) {
      CMO_ID
      DMP_ID
      PT_MRN
    }
  }
`;

/**
 * __useGetPatientIdsTripletsQuery__
 *
 * To run a query within a React component, call `useGetPatientIdsTripletsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPatientIdsTripletsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPatientIdsTripletsQuery({
 *   variables: {
 *      patientIds: // value for 'patientIds'
 *   },
 * });
 */
export function useGetPatientIdsTripletsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPatientIdsTripletsQuery,
    GetPatientIdsTripletsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPatientIdsTripletsQuery,
    GetPatientIdsTripletsQueryVariables
  >(GetPatientIdsTripletsDocument, options);
}
export function useGetPatientIdsTripletsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPatientIdsTripletsQuery,
    GetPatientIdsTripletsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPatientIdsTripletsQuery,
    GetPatientIdsTripletsQueryVariables
  >(GetPatientIdsTripletsDocument, options);
}
export type GetPatientIdsTripletsQueryHookResult = ReturnType<
  typeof useGetPatientIdsTripletsQuery
>;
export type GetPatientIdsTripletsLazyQueryHookResult = ReturnType<
  typeof useGetPatientIdsTripletsLazyQuery
>;
export type GetPatientIdsTripletsQueryResult = Apollo.QueryResult<
  GetPatientIdsTripletsQuery,
  GetPatientIdsTripletsQueryVariables
>;
export const CohortsListDocument = gql`
  query CohortsList(
    $where: CohortWhere
    $options: CohortOptions
    $hasCohortCompleteCohortCompletesOptions2: CohortCompleteOptions
  ) {
    cohortsConnection(where: $where) {
      totalCount
    }
    cohorts(where: $where, options: $options) {
      cohortId
      smileSampleIds
      totalSampleCount
      billed
      initialCohortDeliveryDate
      endUsers
      pmUsers
      projectTitle
      projectSubtitle
      status
      type
      hasCohortCompleteCohortCompletes(
        options: $hasCohortCompleteCohortCompletesOptions2
      ) {
        date
        endUsers
        pmUsers
        projectTitle
        projectSubtitle
        status
        type
      }
      hasCohortSampleSamplesConnection {
        totalCount
      }
      hasCohortSampleSamples {
        smileSampleId
        hasTempoTempos {
          smileTempoId
          billed
        }
      }
    }
  }
`;

/**
 * __useCohortsListQuery__
 *
 * To run a query within a React component, call `useCohortsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCohortsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCohortsListQuery({
 *   variables: {
 *      where: // value for 'where'
 *      options: // value for 'options'
 *      hasCohortCompleteCohortCompletesOptions2: // value for 'hasCohortCompleteCohortCompletesOptions2'
 *   },
 * });
 */
export function useCohortsListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CohortsListQuery,
    CohortsListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CohortsListQuery, CohortsListQueryVariables>(
    CohortsListDocument,
    options
  );
}
export function useCohortsListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CohortsListQuery,
    CohortsListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CohortsListQuery, CohortsListQueryVariables>(
    CohortsListDocument,
    options
  );
}
export type CohortsListQueryHookResult = ReturnType<typeof useCohortsListQuery>;
export type CohortsListLazyQueryHookResult = ReturnType<
  typeof useCohortsListLazyQuery
>;
export type CohortsListQueryResult = Apollo.QueryResult<
  CohortsListQuery,
  CohortsListQueryVariables
>;
