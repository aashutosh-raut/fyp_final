import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateProduct = {
  __typename?: 'AggregateProduct';
  _avg?: Maybe<ProductAvgAggregate>;
  _count?: Maybe<ProductCountAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
  _min?: Maybe<ProductMinAggregate>;
  _sum?: Maybe<ProductSumAggregate>;
};

export type AggregateProductCategory = {
  __typename?: 'AggregateProductCategory';
  _count?: Maybe<ProductCategoryCountAggregate>;
  _max?: Maybe<ProductCategoryMaxAggregate>;
  _min?: Maybe<ProductCategoryMinAggregate>;
};

export type AggregateProductReport = {
  __typename?: 'AggregateProductReport';
  _count?: Maybe<ProductReportCountAggregate>;
  _max?: Maybe<ProductReportMaxAggregate>;
  _min?: Maybe<ProductReportMinAggregate>;
};

export type AggregateProductReview = {
  __typename?: 'AggregateProductReview';
  _avg?: Maybe<ProductReviewAvgAggregate>;
  _count?: Maybe<ProductReviewCountAggregate>;
  _max?: Maybe<ProductReviewMaxAggregate>;
  _min?: Maybe<ProductReviewMinAggregate>;
  _sum?: Maybe<ProductReviewSumAggregate>;
};

export type AggregateRentApprove = {
  __typename?: 'AggregateRentApprove';
  _avg?: Maybe<RentApproveAvgAggregate>;
  _count?: Maybe<RentApproveCountAggregate>;
  _max?: Maybe<RentApproveMaxAggregate>;
  _min?: Maybe<RentApproveMinAggregate>;
  _sum?: Maybe<RentApproveSumAggregate>;
};

export type AggregateRentRequest = {
  __typename?: 'AggregateRentRequest';
  _avg?: Maybe<RentRequestAvgAggregate>;
  _count?: Maybe<RentRequestCountAggregate>;
  _max?: Maybe<RentRequestMaxAggregate>;
  _min?: Maybe<RentRequestMinAggregate>;
  _sum?: Maybe<RentRequestSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type AggregateUserReview = {
  __typename?: 'AggregateUserReview';
  _avg?: Maybe<UserReviewAvgAggregate>;
  _count?: Maybe<UserReviewCountAggregate>;
  _max?: Maybe<UserReviewMaxAggregate>;
  _min?: Maybe<UserReviewMinAggregate>;
  _sum?: Maybe<UserReviewSumAggregate>;
};

export type AggregateUserRole = {
  __typename?: 'AggregateUserRole';
  _count?: Maybe<UserRoleCountAggregate>;
  _max?: Maybe<UserRoleMaxAggregate>;
  _min?: Maybe<UserRoleMinAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export enum CategoryNameEnum {
  Appliances = 'APPLIANCES',
  AppsGames = 'APPS_GAMES',
  ArtsCraftsSewing = 'ARTS_CRAFTS_SEWING',
  AutomotivePartsAccessories = 'AUTOMOTIVE_PARTS_ACCESSORIES',
  Baby = 'BABY',
  BeautyPersonalCare = 'BEAUTY_PERSONAL_CARE',
  Books = 'BOOKS',
  CdsVinyl = 'CDS_VINYL',
  CellPhonesAccessories = 'CELL_PHONES_ACCESSORIES',
  ClothingShoesAndJewelry = 'CLOTHING_SHOES_AND_JEWELRY',
  CollectiblesFineArt = 'COLLECTIBLES_FINE_ART',
  Computers = 'COMPUTERS',
  Electronics = 'ELECTRONICS',
  GardenOutdoor = 'GARDEN_OUTDOOR',
  GroceryGourmetFood = 'GROCERY_GOURMET_FOOD',
  Handmade = 'HANDMADE',
  HealthHouseholdBabyCare = 'HEALTH_HOUSEHOLD_BABY_CARE',
  HomeKitchen = 'HOME_KITCHEN',
  IndustrialScientific = 'INDUSTRIAL_SCIENTIFIC',
  Kindle = 'KINDLE',
  LuggageTravelGear = 'LUGGAGE_TRAVEL_GEAR',
  MoviesTv = 'MOVIES_TV',
  MusicalInstruments = 'MUSICAL_INSTRUMENTS',
  OfficeProducts = 'OFFICE_PRODUCTS',
  Other = 'OTHER',
  PetSupplies = 'PET_SUPPLIES',
  SportsOutdoors = 'SPORTS_OUTDOORS',
  ToolsHomeImprovement = 'TOOLS_HOME_IMPROVEMENT',
  ToysGames = 'TOYS_GAMES',
  VideoGames = 'VIDEO_GAMES'
}

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumCategoryNameEnumFieldUpdateOperationsInput = {
  set?: InputMaybe<CategoryNameEnum>;
};

export type EnumCategoryNameEnumFilter = {
  equals?: InputMaybe<CategoryNameEnum>;
  in?: InputMaybe<Array<CategoryNameEnum>>;
  not?: InputMaybe<NestedEnumCategoryNameEnumFilter>;
  notIn?: InputMaybe<Array<CategoryNameEnum>>;
};

export type EnumCategoryNameEnumWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumCategoryNameEnumFilter>;
  _min?: InputMaybe<NestedEnumCategoryNameEnumFilter>;
  equals?: InputMaybe<CategoryNameEnum>;
  in?: InputMaybe<Array<CategoryNameEnum>>;
  not?: InputMaybe<NestedEnumCategoryNameEnumWithAggregatesFilter>;
  notIn?: InputMaybe<Array<CategoryNameEnum>>;
};

export type EnumProductConditionEnumFieldUpdateOperationsInput = {
  set?: InputMaybe<ProductConditionEnum>;
};

export type EnumProductConditionEnumFilter = {
  equals?: InputMaybe<ProductConditionEnum>;
  in?: InputMaybe<Array<ProductConditionEnum>>;
  not?: InputMaybe<NestedEnumProductConditionEnumFilter>;
  notIn?: InputMaybe<Array<ProductConditionEnum>>;
};

export type EnumProductConditionEnumWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumProductConditionEnumFilter>;
  _min?: InputMaybe<NestedEnumProductConditionEnumFilter>;
  equals?: InputMaybe<ProductConditionEnum>;
  in?: InputMaybe<Array<ProductConditionEnum>>;
  not?: InputMaybe<NestedEnumProductConditionEnumWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ProductConditionEnum>>;
};

export type EnumRoleNameEnumFieldUpdateOperationsInput = {
  set?: InputMaybe<RoleNameEnum>;
};

export type EnumRoleNameEnumFilter = {
  equals?: InputMaybe<RoleNameEnum>;
  in?: InputMaybe<Array<RoleNameEnum>>;
  not?: InputMaybe<NestedEnumRoleNameEnumFilter>;
  notIn?: InputMaybe<Array<RoleNameEnum>>;
};

export type EnumRoleNameEnumWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleNameEnumFilter>;
  _min?: InputMaybe<NestedEnumRoleNameEnumFilter>;
  equals?: InputMaybe<RoleNameEnum>;
  in?: InputMaybe<Array<RoleNameEnum>>;
  not?: InputMaybe<NestedEnumRoleNameEnumWithAggregatesFilter>;
  notIn?: InputMaybe<Array<RoleNameEnum>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyProduct: AffectedRowsOutput;
  createManyProductCategory: AffectedRowsOutput;
  createManyProductReport: AffectedRowsOutput;
  createManyProductReview: AffectedRowsOutput;
  createManyRentApprove: AffectedRowsOutput;
  createManyRentRequest: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyUserReview: AffectedRowsOutput;
  createManyUserRole: AffectedRowsOutput;
  createProduct: Product;
  createProductCategory: ProductCategory;
  createProductReport: ProductReport;
  createProductReview: ProductReview;
  createRentApprove: RentApprove;
  createRentRequest: RentRequest;
  createUser: UserWithToken;
  createUserReview: UserReview;
  createUserRole: UserRole;
  deleteManyProduct: AffectedRowsOutput;
  deleteManyProductCategory: AffectedRowsOutput;
  deleteManyProductReport: AffectedRowsOutput;
  deleteManyProductReview: AffectedRowsOutput;
  deleteManyRentApprove: AffectedRowsOutput;
  deleteManyRentRequest: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyUserReview: AffectedRowsOutput;
  deleteManyUserRole: AffectedRowsOutput;
  deleteProduct?: Maybe<Product>;
  deleteProductCategory?: Maybe<ProductCategory>;
  deleteProductReport?: Maybe<ProductReport>;
  deleteProductReview?: Maybe<ProductReview>;
  deleteRentApprove?: Maybe<RentApprove>;
  deleteRentRequest?: Maybe<RentRequest>;
  deleteUser?: Maybe<User>;
  deleteUserReview?: Maybe<UserReview>;
  deleteUserRole?: Maybe<UserRole>;
  postPicture: Scalars['String'];
  signInUser: UserWithToken;
  updateManyProduct: AffectedRowsOutput;
  updateManyProductCategory: AffectedRowsOutput;
  updateManyProductReport: AffectedRowsOutput;
  updateManyProductReview: AffectedRowsOutput;
  updateManyRentApprove: AffectedRowsOutput;
  updateManyRentRequest: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyUserReview: AffectedRowsOutput;
  updateManyUserRole: AffectedRowsOutput;
  updateProduct?: Maybe<Product>;
  updateProductCategory?: Maybe<ProductCategory>;
  updateProductReport?: Maybe<ProductReport>;
  updateProductReview?: Maybe<ProductReview>;
  updateRentApprove?: Maybe<RentApprove>;
  updateRentRequest?: Maybe<RentRequest>;
  updateUser?: Maybe<User>;
  updateUserReview?: Maybe<UserReview>;
  updateUserRole?: Maybe<UserRole>;
  uploadFile: Scalars['String'];
  upsertProduct: Product;
  upsertProductCategory: ProductCategory;
  upsertProductReport: ProductReport;
  upsertProductReview: ProductReview;
  upsertRentApprove: RentApprove;
  upsertRentRequest: RentRequest;
  upsertUser: User;
  upsertUserReview: UserReview;
  upsertUserRole: UserRole;
};


export type MutationCreateManyProductArgs = {
  data: Array<ProductCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyProductCategoryArgs = {
  data: Array<ProductCategoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyProductReportArgs = {
  data: Array<ProductReportCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyProductReviewArgs = {
  data: Array<ProductReviewCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyRentApproveArgs = {
  data: Array<RentApproveCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyRentRequestArgs = {
  data: Array<RentRequestCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserReviewArgs = {
  data: Array<UserReviewCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserRoleArgs = {
  data: Array<UserRoleCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateProductCategoryArgs = {
  data: ProductCategoryCreateInput;
};


export type MutationCreateProductReportArgs = {
  data: ProductReportCreateInput;
};


export type MutationCreateProductReviewArgs = {
  data: ProductReviewCreateInput;
};


export type MutationCreateRentApproveArgs = {
  data: RentApproveCreateInput;
};


export type MutationCreateRentRequestArgs = {
  data: RentRequestCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUserReviewArgs = {
  data: UserReviewCreateInput;
};


export type MutationCreateUserRoleArgs = {
  data: UserRoleCreateInput;
};


export type MutationDeleteManyProductArgs = {
  where?: InputMaybe<ProductWhereInput>;
};


export type MutationDeleteManyProductCategoryArgs = {
  where?: InputMaybe<ProductCategoryWhereInput>;
};


export type MutationDeleteManyProductReportArgs = {
  where?: InputMaybe<ProductReportWhereInput>;
};


export type MutationDeleteManyProductReviewArgs = {
  where?: InputMaybe<ProductReviewWhereInput>;
};


export type MutationDeleteManyRentApproveArgs = {
  where?: InputMaybe<RentApproveWhereInput>;
};


export type MutationDeleteManyRentRequestArgs = {
  where?: InputMaybe<RentRequestWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyUserReviewArgs = {
  where?: InputMaybe<UserReviewWhereInput>;
};


export type MutationDeleteManyUserRoleArgs = {
  where?: InputMaybe<UserRoleWhereInput>;
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteProductCategoryArgs = {
  where: ProductCategoryWhereUniqueInput;
};


export type MutationDeleteProductReportArgs = {
  where: ProductReportWhereUniqueInput;
};


export type MutationDeleteProductReviewArgs = {
  where: ProductReviewWhereUniqueInput;
};


export type MutationDeleteRentApproveArgs = {
  where: RentApproveWhereUniqueInput;
};


export type MutationDeleteRentRequestArgs = {
  where: RentRequestWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUserReviewArgs = {
  where: UserReviewWhereUniqueInput;
};


export type MutationDeleteUserRoleArgs = {
  where: UserRoleWhereUniqueInput;
};


export type MutationPostPictureArgs = {
  file: Scalars['Upload'];
};


export type MutationSignInUserArgs = {
  data: SignInUserInput;
};


export type MutationUpdateManyProductArgs = {
  data: ProductUpdateManyMutationInput;
  where?: InputMaybe<ProductWhereInput>;
};


export type MutationUpdateManyProductCategoryArgs = {
  data: ProductCategoryUpdateManyMutationInput;
  where?: InputMaybe<ProductCategoryWhereInput>;
};


export type MutationUpdateManyProductReportArgs = {
  data: ProductReportUpdateManyMutationInput;
  where?: InputMaybe<ProductReportWhereInput>;
};


export type MutationUpdateManyProductReviewArgs = {
  data: ProductReviewUpdateManyMutationInput;
  where?: InputMaybe<ProductReviewWhereInput>;
};


export type MutationUpdateManyRentApproveArgs = {
  data: RentApproveUpdateManyMutationInput;
  where?: InputMaybe<RentApproveWhereInput>;
};


export type MutationUpdateManyRentRequestArgs = {
  data: RentRequestUpdateManyMutationInput;
  where?: InputMaybe<RentRequestWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyUserReviewArgs = {
  data: UserReviewUpdateManyMutationInput;
  where?: InputMaybe<UserReviewWhereInput>;
};


export type MutationUpdateManyUserRoleArgs = {
  data: UserRoleUpdateManyMutationInput;
  where?: InputMaybe<UserRoleWhereInput>;
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateProductCategoryArgs = {
  data: ProductCategoryUpdateInput;
  where: ProductCategoryWhereUniqueInput;
};


export type MutationUpdateProductReportArgs = {
  data: ProductReportUpdateInput;
  where: ProductReportWhereUniqueInput;
};


export type MutationUpdateProductReviewArgs = {
  data: ProductReviewUpdateInput;
  where: ProductReviewWhereUniqueInput;
};


export type MutationUpdateRentApproveArgs = {
  data: RentApproveUpdateInput;
  where: RentApproveWhereUniqueInput;
};


export type MutationUpdateRentRequestArgs = {
  data: RentRequestUpdateInput;
  where: RentRequestWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserReviewArgs = {
  data: UserReviewUpdateInput;
  where: UserReviewWhereUniqueInput;
};


export type MutationUpdateUserRoleArgs = {
  data: UserRoleUpdateInput;
  where: UserRoleWhereUniqueInput;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
};


export type MutationUpsertProductArgs = {
  create: ProductCreateInput;
  update: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpsertProductCategoryArgs = {
  create: ProductCategoryCreateInput;
  update: ProductCategoryUpdateInput;
  where: ProductCategoryWhereUniqueInput;
};


export type MutationUpsertProductReportArgs = {
  create: ProductReportCreateInput;
  update: ProductReportUpdateInput;
  where: ProductReportWhereUniqueInput;
};


export type MutationUpsertProductReviewArgs = {
  create: ProductReviewCreateInput;
  update: ProductReviewUpdateInput;
  where: ProductReviewWhereUniqueInput;
};


export type MutationUpsertRentApproveArgs = {
  create: RentApproveCreateInput;
  update: RentApproveUpdateInput;
  where: RentApproveWhereUniqueInput;
};


export type MutationUpsertRentRequestArgs = {
  create: RentRequestCreateInput;
  update: RentRequestUpdateInput;
  where: RentRequestWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertUserReviewArgs = {
  create: UserReviewCreateInput;
  update: UserReviewUpdateInput;
  where: UserReviewWhereUniqueInput;
};


export type MutationUpsertUserRoleArgs = {
  create: UserRoleCreateInput;
  update: UserRoleUpdateInput;
  where: UserRoleWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumCategoryNameEnumFilter = {
  equals?: InputMaybe<CategoryNameEnum>;
  in?: InputMaybe<Array<CategoryNameEnum>>;
  not?: InputMaybe<NestedEnumCategoryNameEnumFilter>;
  notIn?: InputMaybe<Array<CategoryNameEnum>>;
};

export type NestedEnumCategoryNameEnumWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumCategoryNameEnumFilter>;
  _min?: InputMaybe<NestedEnumCategoryNameEnumFilter>;
  equals?: InputMaybe<CategoryNameEnum>;
  in?: InputMaybe<Array<CategoryNameEnum>>;
  not?: InputMaybe<NestedEnumCategoryNameEnumWithAggregatesFilter>;
  notIn?: InputMaybe<Array<CategoryNameEnum>>;
};

export type NestedEnumProductConditionEnumFilter = {
  equals?: InputMaybe<ProductConditionEnum>;
  in?: InputMaybe<Array<ProductConditionEnum>>;
  not?: InputMaybe<NestedEnumProductConditionEnumFilter>;
  notIn?: InputMaybe<Array<ProductConditionEnum>>;
};

export type NestedEnumProductConditionEnumWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumProductConditionEnumFilter>;
  _min?: InputMaybe<NestedEnumProductConditionEnumFilter>;
  equals?: InputMaybe<ProductConditionEnum>;
  in?: InputMaybe<Array<ProductConditionEnum>>;
  not?: InputMaybe<NestedEnumProductConditionEnumWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ProductConditionEnum>>;
};

export type NestedEnumRoleNameEnumFilter = {
  equals?: InputMaybe<RoleNameEnum>;
  in?: InputMaybe<Array<RoleNameEnum>>;
  not?: InputMaybe<NestedEnumRoleNameEnumFilter>;
  notIn?: InputMaybe<Array<RoleNameEnum>>;
};

export type NestedEnumRoleNameEnumWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleNameEnumFilter>;
  _min?: InputMaybe<NestedEnumRoleNameEnumFilter>;
  equals?: InputMaybe<RoleNameEnum>;
  in?: InputMaybe<Array<RoleNameEnum>>;
  not?: InputMaybe<NestedEnumRoleNameEnumWithAggregatesFilter>;
  notIn?: InputMaybe<Array<RoleNameEnum>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  _count?: Maybe<ProductCount>;
  collateralDescription: Scalars['String'];
  condition: ProductConditionEnum;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  isAvailable: Scalars['Boolean'];
  name: Scalars['String'];
  productCategory: ProductCategory;
  productCategoryName: CategoryNameEnum;
  productPicture: Scalars['String'];
  productReport: Array<ProductReport>;
  productReviews: Array<ProductReview>;
  rentApprove: Array<RentApprove>;
  rentRequest: Array<RentRequest>;
  rentingPrice: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};


export type ProductProductReportArgs = {
  cursor?: InputMaybe<ProductReportWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductReportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductReportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductReportWhereInput>;
};


export type ProductProductReviewsArgs = {
  cursor?: InputMaybe<ProductReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductReviewWhereInput>;
};


export type ProductRentApproveArgs = {
  cursor?: InputMaybe<RentApproveWhereUniqueInput>;
  distinct?: InputMaybe<Array<RentApproveScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RentApproveOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RentApproveWhereInput>;
};


export type ProductRentRequestArgs = {
  cursor?: InputMaybe<RentRequestWhereUniqueInput>;
  distinct?: InputMaybe<Array<RentRequestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RentRequestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RentRequestWhereInput>;
};

export type ProductAvgAggregate = {
  __typename?: 'ProductAvgAggregate';
  rentingPrice?: Maybe<Scalars['Float']>;
};

export type ProductAvgOrderByAggregateInput = {
  rentingPrice?: InputMaybe<SortOrder>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  _count?: Maybe<ProductCategoryCount>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  name: CategoryNameEnum;
  products: Array<Product>;
  updatedAt: Scalars['DateTime'];
};


export type ProductCategoryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductCategoryCount = {
  __typename?: 'ProductCategoryCount';
  products: Scalars['Int'];
};

export type ProductCategoryCountAggregate = {
  __typename?: 'ProductCategoryCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ProductCategoryCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductCategoryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: CategoryNameEnum;
  products?: InputMaybe<ProductCreateNestedManyWithoutProductCategoryInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProductCategoryCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: CategoryNameEnum;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProductCategoryCreateNestedOneWithoutProductsInput = {
  connect?: InputMaybe<ProductCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCategoryCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<ProductCategoryCreateWithoutProductsInput>;
};

export type ProductCategoryCreateOrConnectWithoutProductsInput = {
  create: ProductCategoryCreateWithoutProductsInput;
  where: ProductCategoryWhereUniqueInput;
};

export type ProductCategoryCreateWithoutProductsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: CategoryNameEnum;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProductCategoryGroupBy = {
  __typename?: 'ProductCategoryGroupBy';
  _count?: Maybe<ProductCategoryCountAggregate>;
  _max?: Maybe<ProductCategoryMaxAggregate>;
  _min?: Maybe<ProductCategoryMinAggregate>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  name: CategoryNameEnum;
  updatedAt: Scalars['DateTime'];
};

export type ProductCategoryMaxAggregate = {
  __typename?: 'ProductCategoryMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<CategoryNameEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductCategoryMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductCategoryMinAggregate = {
  __typename?: 'ProductCategoryMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<CategoryNameEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductCategoryMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductCategoryOrderByWithAggregationInput = {
  _count?: InputMaybe<ProductCategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<ProductCategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProductCategoryMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductCategoryOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  products?: InputMaybe<ProductOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductCategoryRelationFilter = {
  is?: InputMaybe<ProductCategoryWhereInput>;
  isNot?: InputMaybe<ProductCategoryWhereInput>;
};

export enum ProductCategoryScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type ProductCategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProductCategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProductCategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProductCategoryScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<EnumCategoryNameEnumWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ProductCategoryUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<EnumCategoryNameEnumFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutProductCategoryInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductCategoryUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<EnumCategoryNameEnumFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductCategoryUpdateOneRequiredWithoutProductsInput = {
  connect?: InputMaybe<ProductCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCategoryCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<ProductCategoryCreateWithoutProductsInput>;
  update?: InputMaybe<ProductCategoryUpdateWithoutProductsInput>;
  upsert?: InputMaybe<ProductCategoryUpsertWithoutProductsInput>;
};

export type ProductCategoryUpdateWithoutProductsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<EnumCategoryNameEnumFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductCategoryUpsertWithoutProductsInput = {
  create: ProductCategoryCreateWithoutProductsInput;
  update: ProductCategoryUpdateWithoutProductsInput;
};

export type ProductCategoryWhereInput = {
  AND?: InputMaybe<Array<ProductCategoryWhereInput>>;
  NOT?: InputMaybe<Array<ProductCategoryWhereInput>>;
  OR?: InputMaybe<Array<ProductCategoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  name?: InputMaybe<EnumCategoryNameEnumFilter>;
  products?: InputMaybe<ProductListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductCategoryWhereUniqueInput = {
  name?: InputMaybe<CategoryNameEnum>;
};

export enum ProductConditionEnum {
  ExcellentUsedCondition = 'EXCELLENT_USED_CONDITION',
  GoodUsedCondition = 'GOOD_USED_CONDITION',
  NewWithoutTags = 'NEW_WITHOUT_TAGS',
  NewWithTags = 'NEW_WITH_TAGS',
  Refurbished = 'REFURBISHED',
  VeryUsedCondition = 'VERY_USED_CONDITION'
}

export type ProductCount = {
  __typename?: 'ProductCount';
  productReport: Scalars['Int'];
  productReviews: Scalars['Int'];
  rentApprove: Scalars['Int'];
  rentRequest: Scalars['Int'];
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  _all: Scalars['Int'];
  collateralDescription: Scalars['Int'];
  condition: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  isAvailable: Scalars['Int'];
  name: Scalars['Int'];
  productCategoryName: Scalars['Int'];
  productPicture: Scalars['Int'];
  rentingPrice: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ProductCountOrderByAggregateInput = {
  collateralDescription?: InputMaybe<SortOrder>;
  condition?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isAvailable?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  productCategoryName?: InputMaybe<SortOrder>;
  productPicture?: InputMaybe<SortOrder>;
  rentingPrice?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProductCreateInput = {
  collateralDescription: Scalars['String'];
  condition: ProductConditionEnum;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isAvailable: Scalars['Boolean'];
  name: Scalars['String'];
  productCategory: ProductCategoryCreateNestedOneWithoutProductsInput;
  productPicture: Scalars['String'];
  productReport?: InputMaybe<ProductReportCreateNestedManyWithoutProductInput>;
  productReviews?: InputMaybe<ProductReviewCreateNestedManyWithoutProductInput>;
  rentApprove?: InputMaybe<RentApproveCreateNestedManyWithoutProductInput>;
  rentRequest?: InputMaybe<RentRequestCreateNestedManyWithoutProductInput>;
  rentingPrice: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutProductsInput;
};

export type ProductCreateManyInput = {
  collateralDescription: Scalars['String'];
  condition: ProductConditionEnum;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isAvailable: Scalars['Boolean'];
  name: Scalars['String'];
  productCategoryName: CategoryNameEnum;
  productPicture: Scalars['String'];
  rentingPrice: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type ProductCreateManyProductCategoryInput = {
  collateralDescription: Scalars['String'];
  condition: ProductConditionEnum;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isAvailable: Scalars['Boolean'];
  name: Scalars['String'];
  productPicture: Scalars['String'];
  rentingPrice: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type ProductCreateManyProductCategoryInputEnvelope = {
  data: Array<ProductCreateManyProductCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProductCreateManyUserInput = {
  collateralDescription: Scalars['String'];
  condition: ProductConditionEnum;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isAvailable: Scalars['Boolean'];
  name: Scalars['String'];
  productCategoryName: CategoryNameEnum;
  productPicture: Scalars['String'];
  rentingPrice: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProductCreateManyUserInputEnvelope = {
  data: Array<ProductCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProductCreateNestedManyWithoutProductCategoryInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutProductCategoryInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutProductCategoryInput>>;
  createMany?: InputMaybe<ProductCreateManyProductCategoryInputEnvelope>;
};

export type ProductCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutUserInput>>;
  createMany?: InputMaybe<ProductCreateManyUserInputEnvelope>;
};

export type ProductCreateNestedOneWithoutProductReportInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductReportInput>;
  create?: InputMaybe<ProductCreateWithoutProductReportInput>;
};

export type ProductCreateNestedOneWithoutProductReviewsInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductReviewsInput>;
  create?: InputMaybe<ProductCreateWithoutProductReviewsInput>;
};

export type ProductCreateNestedOneWithoutRentApproveInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutRentApproveInput>;
  create?: InputMaybe<ProductCreateWithoutRentApproveInput>;
};

export type ProductCreateNestedOneWithoutRentRequestInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutRentRequestInput>;
  create?: InputMaybe<ProductCreateWithoutRentRequestInput>;
};

export type ProductCreateOrConnectWithoutProductCategoryInput = {
  create: ProductCreateWithoutProductCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutProductReportInput = {
  create: ProductCreateWithoutProductReportInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutProductReviewsInput = {
  create: ProductCreateWithoutProductReviewsInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutRentApproveInput = {
  create: ProductCreateWithoutRentApproveInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutRentRequestInput = {
  create: ProductCreateWithoutRentRequestInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutUserInput = {
  create: ProductCreateWithoutUserInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateWithoutProductCategoryInput = {
  collateralDescription: Scalars['String'];
  condition: ProductConditionEnum;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isAvailable: Scalars['Boolean'];
  name: Scalars['String'];
  productPicture: Scalars['String'];
  productReport?: InputMaybe<ProductReportCreateNestedManyWithoutProductInput>;
  productReviews?: InputMaybe<ProductReviewCreateNestedManyWithoutProductInput>;
  rentApprove?: InputMaybe<RentApproveCreateNestedManyWithoutProductInput>;
  rentRequest?: InputMaybe<RentRequestCreateNestedManyWithoutProductInput>;
  rentingPrice: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutProductsInput;
};

export type ProductCreateWithoutProductReportInput = {
  collateralDescription: Scalars['String'];
  condition: ProductConditionEnum;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isAvailable: Scalars['Boolean'];
  name: Scalars['String'];
  productCategory: ProductCategoryCreateNestedOneWithoutProductsInput;
  productPicture: Scalars['String'];
  productReviews?: InputMaybe<ProductReviewCreateNestedManyWithoutProductInput>;
  rentApprove?: InputMaybe<RentApproveCreateNestedManyWithoutProductInput>;
  rentRequest?: InputMaybe<RentRequestCreateNestedManyWithoutProductInput>;
  rentingPrice: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutProductsInput;
};

export type ProductCreateWithoutProductReviewsInput = {
  collateralDescription: Scalars['String'];
  condition: ProductConditionEnum;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isAvailable: Scalars['Boolean'];
  name: Scalars['String'];
  productCategory: ProductCategoryCreateNestedOneWithoutProductsInput;
  productPicture: Scalars['String'];
  productReport?: InputMaybe<ProductReportCreateNestedManyWithoutProductInput>;
  rentApprove?: InputMaybe<RentApproveCreateNestedManyWithoutProductInput>;
  rentRequest?: InputMaybe<RentRequestCreateNestedManyWithoutProductInput>;
  rentingPrice: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutProductsInput;
};

export type ProductCreateWithoutRentApproveInput = {
  collateralDescription: Scalars['String'];
  condition: ProductConditionEnum;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isAvailable: Scalars['Boolean'];
  name: Scalars['String'];
  productCategory: ProductCategoryCreateNestedOneWithoutProductsInput;
  productPicture: Scalars['String'];
  productReport?: InputMaybe<ProductReportCreateNestedManyWithoutProductInput>;
  productReviews?: InputMaybe<ProductReviewCreateNestedManyWithoutProductInput>;
  rentRequest?: InputMaybe<RentRequestCreateNestedManyWithoutProductInput>;
  rentingPrice: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutProductsInput;
};

export type ProductCreateWithoutRentRequestInput = {
  collateralDescription: Scalars['String'];
  condition: ProductConditionEnum;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isAvailable: Scalars['Boolean'];
  name: Scalars['String'];
  productCategory: ProductCategoryCreateNestedOneWithoutProductsInput;
  productPicture: Scalars['String'];
  productReport?: InputMaybe<ProductReportCreateNestedManyWithoutProductInput>;
  productReviews?: InputMaybe<ProductReviewCreateNestedManyWithoutProductInput>;
  rentApprove?: InputMaybe<RentApproveCreateNestedManyWithoutProductInput>;
  rentingPrice: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutProductsInput;
};

export type ProductCreateWithoutUserInput = {
  collateralDescription: Scalars['String'];
  condition: ProductConditionEnum;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isAvailable: Scalars['Boolean'];
  name: Scalars['String'];
  productCategory: ProductCategoryCreateNestedOneWithoutProductsInput;
  productPicture: Scalars['String'];
  productReport?: InputMaybe<ProductReportCreateNestedManyWithoutProductInput>;
  productReviews?: InputMaybe<ProductReviewCreateNestedManyWithoutProductInput>;
  rentApprove?: InputMaybe<RentApproveCreateNestedManyWithoutProductInput>;
  rentRequest?: InputMaybe<RentRequestCreateNestedManyWithoutProductInput>;
  rentingPrice: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProductGroupBy = {
  __typename?: 'ProductGroupBy';
  _avg?: Maybe<ProductAvgAggregate>;
  _count?: Maybe<ProductCountAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
  _min?: Maybe<ProductMinAggregate>;
  _sum?: Maybe<ProductSumAggregate>;
  collateralDescription: Scalars['String'];
  condition: ProductConditionEnum;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  isAvailable: Scalars['Boolean'];
  name: Scalars['String'];
  productCategoryName: CategoryNameEnum;
  productPicture: Scalars['String'];
  rentingPrice: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type ProductListRelationFilter = {
  every?: InputMaybe<ProductWhereInput>;
  none?: InputMaybe<ProductWhereInput>;
  some?: InputMaybe<ProductWhereInput>;
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  collateralDescription?: Maybe<Scalars['String']>;
  condition?: Maybe<ProductConditionEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isAvailable?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  productCategoryName?: Maybe<CategoryNameEnum>;
  productPicture?: Maybe<Scalars['String']>;
  rentingPrice?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type ProductMaxOrderByAggregateInput = {
  collateralDescription?: InputMaybe<SortOrder>;
  condition?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isAvailable?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  productCategoryName?: InputMaybe<SortOrder>;
  productPicture?: InputMaybe<SortOrder>;
  rentingPrice?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  collateralDescription?: Maybe<Scalars['String']>;
  condition?: Maybe<ProductConditionEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isAvailable?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  productCategoryName?: Maybe<CategoryNameEnum>;
  productPicture?: Maybe<Scalars['String']>;
  rentingPrice?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type ProductMinOrderByAggregateInput = {
  collateralDescription?: InputMaybe<SortOrder>;
  condition?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isAvailable?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  productCategoryName?: InputMaybe<SortOrder>;
  productPicture?: InputMaybe<SortOrder>;
  rentingPrice?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProductOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithAggregationInput = {
  _avg?: InputMaybe<ProductAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProductCountOrderByAggregateInput>;
  _max?: InputMaybe<ProductMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProductMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProductSumOrderByAggregateInput>;
  collateralDescription?: InputMaybe<SortOrder>;
  condition?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isAvailable?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  productCategoryName?: InputMaybe<SortOrder>;
  productPicture?: InputMaybe<SortOrder>;
  rentingPrice?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithRelationInput = {
  collateralDescription?: InputMaybe<SortOrder>;
  condition?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isAvailable?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  productCategory?: InputMaybe<ProductCategoryOrderByWithRelationInput>;
  productCategoryName?: InputMaybe<SortOrder>;
  productPicture?: InputMaybe<SortOrder>;
  productReport?: InputMaybe<ProductReportOrderByRelationAggregateInput>;
  productReviews?: InputMaybe<ProductReviewOrderByRelationAggregateInput>;
  rentApprove?: InputMaybe<RentApproveOrderByRelationAggregateInput>;
  rentRequest?: InputMaybe<RentRequestOrderByRelationAggregateInput>;
  rentingPrice?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type ProductRelationFilter = {
  is?: InputMaybe<ProductWhereInput>;
  isNot?: InputMaybe<ProductWhereInput>;
};

export type ProductReport = {
  __typename?: 'ProductReport';
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  product: Product;
  productId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type ProductReportCountAggregate = {
  __typename?: 'ProductReportCountAggregate';
  _all: Scalars['Int'];
  comment: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  productId: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ProductReportCountOrderByAggregateInput = {
  comment?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProductReportCreateInput = {
  comment: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  product: ProductCreateNestedOneWithoutProductReportInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutProductReportInput;
};

export type ProductReportCreateManyInput = {
  comment: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  productId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type ProductReportCreateManyProductInput = {
  comment: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type ProductReportCreateManyProductInputEnvelope = {
  data: Array<ProductReportCreateManyProductInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProductReportCreateManyUserInput = {
  comment: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  productId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProductReportCreateManyUserInputEnvelope = {
  data: Array<ProductReportCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProductReportCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<ProductReportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductReportCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ProductReportCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProductReportCreateManyProductInputEnvelope>;
};

export type ProductReportCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ProductReportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductReportCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ProductReportCreateWithoutUserInput>>;
  createMany?: InputMaybe<ProductReportCreateManyUserInputEnvelope>;
};

export type ProductReportCreateOrConnectWithoutProductInput = {
  create: ProductReportCreateWithoutProductInput;
  where: ProductReportWhereUniqueInput;
};

export type ProductReportCreateOrConnectWithoutUserInput = {
  create: ProductReportCreateWithoutUserInput;
  where: ProductReportWhereUniqueInput;
};

export type ProductReportCreateWithoutProductInput = {
  comment: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutProductReportInput;
};

export type ProductReportCreateWithoutUserInput = {
  comment: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  product: ProductCreateNestedOneWithoutProductReportInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProductReportGroupBy = {
  __typename?: 'ProductReportGroupBy';
  _count?: Maybe<ProductReportCountAggregate>;
  _max?: Maybe<ProductReportMaxAggregate>;
  _min?: Maybe<ProductReportMinAggregate>;
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  productId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type ProductReportListRelationFilter = {
  every?: InputMaybe<ProductReportWhereInput>;
  none?: InputMaybe<ProductReportWhereInput>;
  some?: InputMaybe<ProductReportWhereInput>;
};

export type ProductReportMaxAggregate = {
  __typename?: 'ProductReportMaxAggregate';
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type ProductReportMaxOrderByAggregateInput = {
  comment?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProductReportMinAggregate = {
  __typename?: 'ProductReportMinAggregate';
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type ProductReportMinOrderByAggregateInput = {
  comment?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProductReportOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductReportOrderByWithAggregationInput = {
  _count?: InputMaybe<ProductReportCountOrderByAggregateInput>;
  _max?: InputMaybe<ProductReportMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProductReportMinOrderByAggregateInput>;
  comment?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProductReportOrderByWithRelationInput = {
  comment?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum ProductReportScalarFieldEnum {
  Comment = 'comment',
  CreatedAt = 'createdAt',
  Id = 'id',
  ProductId = 'productId',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type ProductReportScalarWhereInput = {
  AND?: InputMaybe<Array<ProductReportScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductReportScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductReportScalarWhereInput>>;
  comment?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  productId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ProductReportScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProductReportScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProductReportScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProductReportScalarWhereWithAggregatesInput>>;
  comment?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  productId?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type ProductReportUpdateInput = {
  comment?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutProductReportInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutProductReportInput>;
};

export type ProductReportUpdateManyMutationInput = {
  comment?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductReportUpdateManyWithWhereWithoutProductInput = {
  data: ProductReportUpdateManyMutationInput;
  where: ProductReportScalarWhereInput;
};

export type ProductReportUpdateManyWithWhereWithoutUserInput = {
  data: ProductReportUpdateManyMutationInput;
  where: ProductReportScalarWhereInput;
};

export type ProductReportUpdateManyWithoutProductInput = {
  connect?: InputMaybe<Array<ProductReportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductReportCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ProductReportCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProductReportCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<ProductReportWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductReportScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductReportWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductReportWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductReportUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<ProductReportUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<ProductReportUpsertWithWhereUniqueWithoutProductInput>>;
};

export type ProductReportUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<ProductReportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductReportCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ProductReportCreateWithoutUserInput>>;
  createMany?: InputMaybe<ProductReportCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ProductReportWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductReportScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductReportWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductReportWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductReportUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ProductReportUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ProductReportUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ProductReportUpdateWithWhereUniqueWithoutProductInput = {
  data: ProductReportUpdateWithoutProductInput;
  where: ProductReportWhereUniqueInput;
};

export type ProductReportUpdateWithWhereUniqueWithoutUserInput = {
  data: ProductReportUpdateWithoutUserInput;
  where: ProductReportWhereUniqueInput;
};

export type ProductReportUpdateWithoutProductInput = {
  comment?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutProductReportInput>;
};

export type ProductReportUpdateWithoutUserInput = {
  comment?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutProductReportInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductReportUpsertWithWhereUniqueWithoutProductInput = {
  create: ProductReportCreateWithoutProductInput;
  update: ProductReportUpdateWithoutProductInput;
  where: ProductReportWhereUniqueInput;
};

export type ProductReportUpsertWithWhereUniqueWithoutUserInput = {
  create: ProductReportCreateWithoutUserInput;
  update: ProductReportUpdateWithoutUserInput;
  where: ProductReportWhereUniqueInput;
};

export type ProductReportUserIdProductIdCompoundUniqueInput = {
  productId: Scalars['String'];
  userId: Scalars['String'];
};

export type ProductReportWhereInput = {
  AND?: InputMaybe<Array<ProductReportWhereInput>>;
  NOT?: InputMaybe<Array<ProductReportWhereInput>>;
  OR?: InputMaybe<Array<ProductReportWhereInput>>;
  comment?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ProductReportWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  userId_productId?: InputMaybe<ProductReportUserIdProductIdCompoundUniqueInput>;
};

export type ProductReview = {
  __typename?: 'ProductReview';
  comment?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  ownersReply?: Maybe<Scalars['String']>;
  product: Product;
  productId: Scalars['String'];
  rating: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type ProductReviewAvgAggregate = {
  __typename?: 'ProductReviewAvgAggregate';
  rating?: Maybe<Scalars['Float']>;
};

export type ProductReviewAvgOrderByAggregateInput = {
  rating?: InputMaybe<SortOrder>;
};

export type ProductReviewCountAggregate = {
  __typename?: 'ProductReviewCountAggregate';
  _all: Scalars['Int'];
  comment: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  ownersReply: Scalars['Int'];
  productId: Scalars['Int'];
  rating: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ProductReviewCountOrderByAggregateInput = {
  comment?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ownersReply?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProductReviewCreateInput = {
  comment?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  ownersReply?: InputMaybe<Scalars['String']>;
  product: ProductCreateNestedOneWithoutProductReviewsInput;
  rating: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutProductReviewsInput;
};

export type ProductReviewCreateManyInput = {
  comment?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  ownersReply?: InputMaybe<Scalars['String']>;
  productId: Scalars['String'];
  rating: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type ProductReviewCreateManyProductInput = {
  comment?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  ownersReply?: InputMaybe<Scalars['String']>;
  rating: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type ProductReviewCreateManyProductInputEnvelope = {
  data: Array<ProductReviewCreateManyProductInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProductReviewCreateManyUserInput = {
  comment?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  ownersReply?: InputMaybe<Scalars['String']>;
  productId: Scalars['String'];
  rating: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProductReviewCreateManyUserInputEnvelope = {
  data: Array<ProductReviewCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProductReviewCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<ProductReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductReviewCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ProductReviewCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProductReviewCreateManyProductInputEnvelope>;
};

export type ProductReviewCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ProductReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductReviewCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ProductReviewCreateWithoutUserInput>>;
  createMany?: InputMaybe<ProductReviewCreateManyUserInputEnvelope>;
};

export type ProductReviewCreateOrConnectWithoutProductInput = {
  create: ProductReviewCreateWithoutProductInput;
  where: ProductReviewWhereUniqueInput;
};

export type ProductReviewCreateOrConnectWithoutUserInput = {
  create: ProductReviewCreateWithoutUserInput;
  where: ProductReviewWhereUniqueInput;
};

export type ProductReviewCreateWithoutProductInput = {
  comment?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  ownersReply?: InputMaybe<Scalars['String']>;
  rating: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutProductReviewsInput;
};

export type ProductReviewCreateWithoutUserInput = {
  comment?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  ownersReply?: InputMaybe<Scalars['String']>;
  product: ProductCreateNestedOneWithoutProductReviewsInput;
  rating: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProductReviewGroupBy = {
  __typename?: 'ProductReviewGroupBy';
  _avg?: Maybe<ProductReviewAvgAggregate>;
  _count?: Maybe<ProductReviewCountAggregate>;
  _max?: Maybe<ProductReviewMaxAggregate>;
  _min?: Maybe<ProductReviewMinAggregate>;
  _sum?: Maybe<ProductReviewSumAggregate>;
  comment?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  ownersReply?: Maybe<Scalars['String']>;
  productId: Scalars['String'];
  rating: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type ProductReviewListRelationFilter = {
  every?: InputMaybe<ProductReviewWhereInput>;
  none?: InputMaybe<ProductReviewWhereInput>;
  some?: InputMaybe<ProductReviewWhereInput>;
};

export type ProductReviewMaxAggregate = {
  __typename?: 'ProductReviewMaxAggregate';
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  ownersReply?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type ProductReviewMaxOrderByAggregateInput = {
  comment?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ownersReply?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProductReviewMinAggregate = {
  __typename?: 'ProductReviewMinAggregate';
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  ownersReply?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type ProductReviewMinOrderByAggregateInput = {
  comment?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ownersReply?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProductReviewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductReviewOrderByWithAggregationInput = {
  _avg?: InputMaybe<ProductReviewAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProductReviewCountOrderByAggregateInput>;
  _max?: InputMaybe<ProductReviewMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProductReviewMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProductReviewSumOrderByAggregateInput>;
  comment?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ownersReply?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProductReviewOrderByWithRelationInput = {
  comment?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ownersReply?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum ProductReviewScalarFieldEnum {
  Comment = 'comment',
  CreatedAt = 'createdAt',
  Id = 'id',
  OwnersReply = 'ownersReply',
  ProductId = 'productId',
  Rating = 'rating',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type ProductReviewScalarWhereInput = {
  AND?: InputMaybe<Array<ProductReviewScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductReviewScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductReviewScalarWhereInput>>;
  comment?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  ownersReply?: InputMaybe<StringNullableFilter>;
  productId?: InputMaybe<StringFilter>;
  rating?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ProductReviewScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProductReviewScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProductReviewScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProductReviewScalarWhereWithAggregatesInput>>;
  comment?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  ownersReply?: InputMaybe<StringNullableWithAggregatesFilter>;
  productId?: InputMaybe<StringWithAggregatesFilter>;
  rating?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type ProductReviewSumAggregate = {
  __typename?: 'ProductReviewSumAggregate';
  rating?: Maybe<Scalars['Int']>;
};

export type ProductReviewSumOrderByAggregateInput = {
  rating?: InputMaybe<SortOrder>;
};

export type ProductReviewUpdateInput = {
  comment?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ownersReply?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutProductReviewsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutProductReviewsInput>;
};

export type ProductReviewUpdateManyMutationInput = {
  comment?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ownersReply?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductReviewUpdateManyWithWhereWithoutProductInput = {
  data: ProductReviewUpdateManyMutationInput;
  where: ProductReviewScalarWhereInput;
};

export type ProductReviewUpdateManyWithWhereWithoutUserInput = {
  data: ProductReviewUpdateManyMutationInput;
  where: ProductReviewScalarWhereInput;
};

export type ProductReviewUpdateManyWithoutProductInput = {
  connect?: InputMaybe<Array<ProductReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductReviewCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ProductReviewCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProductReviewCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<ProductReviewWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductReviewScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductReviewWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductReviewWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductReviewUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<ProductReviewUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<ProductReviewUpsertWithWhereUniqueWithoutProductInput>>;
};

export type ProductReviewUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<ProductReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductReviewCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ProductReviewCreateWithoutUserInput>>;
  createMany?: InputMaybe<ProductReviewCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ProductReviewWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductReviewScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductReviewWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductReviewWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductReviewUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ProductReviewUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ProductReviewUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ProductReviewUpdateWithWhereUniqueWithoutProductInput = {
  data: ProductReviewUpdateWithoutProductInput;
  where: ProductReviewWhereUniqueInput;
};

export type ProductReviewUpdateWithWhereUniqueWithoutUserInput = {
  data: ProductReviewUpdateWithoutUserInput;
  where: ProductReviewWhereUniqueInput;
};

export type ProductReviewUpdateWithoutProductInput = {
  comment?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ownersReply?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutProductReviewsInput>;
};

export type ProductReviewUpdateWithoutUserInput = {
  comment?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ownersReply?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutProductReviewsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductReviewUpsertWithWhereUniqueWithoutProductInput = {
  create: ProductReviewCreateWithoutProductInput;
  update: ProductReviewUpdateWithoutProductInput;
  where: ProductReviewWhereUniqueInput;
};

export type ProductReviewUpsertWithWhereUniqueWithoutUserInput = {
  create: ProductReviewCreateWithoutUserInput;
  update: ProductReviewUpdateWithoutUserInput;
  where: ProductReviewWhereUniqueInput;
};

export type ProductReviewWhereInput = {
  AND?: InputMaybe<Array<ProductReviewWhereInput>>;
  NOT?: InputMaybe<Array<ProductReviewWhereInput>>;
  OR?: InputMaybe<Array<ProductReviewWhereInput>>;
  comment?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  ownersReply?: InputMaybe<StringNullableFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  rating?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ProductReviewWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum ProductScalarFieldEnum {
  CollateralDescription = 'collateralDescription',
  Condition = 'condition',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  IsAvailable = 'isAvailable',
  Name = 'name',
  ProductCategoryName = 'productCategoryName',
  ProductPicture = 'productPicture',
  RentingPrice = 'rentingPrice',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type ProductScalarWhereInput = {
  AND?: InputMaybe<Array<ProductScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductScalarWhereInput>>;
  collateralDescription?: InputMaybe<StringFilter>;
  condition?: InputMaybe<EnumProductConditionEnumFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isAvailable?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  productCategoryName?: InputMaybe<EnumCategoryNameEnumFilter>;
  productPicture?: InputMaybe<StringFilter>;
  rentingPrice?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ProductScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  collateralDescription?: InputMaybe<StringWithAggregatesFilter>;
  condition?: InputMaybe<EnumProductConditionEnumWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  isAvailable?: InputMaybe<BoolWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  productCategoryName?: InputMaybe<EnumCategoryNameEnumWithAggregatesFilter>;
  productPicture?: InputMaybe<StringWithAggregatesFilter>;
  rentingPrice?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type ProductSumAggregate = {
  __typename?: 'ProductSumAggregate';
  rentingPrice?: Maybe<Scalars['Int']>;
};

export type ProductSumOrderByAggregateInput = {
  rentingPrice?: InputMaybe<SortOrder>;
};

export type ProductUpdateInput = {
  collateralDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  condition?: InputMaybe<EnumProductConditionEnumFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAvailable?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  productCategory?: InputMaybe<ProductCategoryUpdateOneRequiredWithoutProductsInput>;
  productPicture?: InputMaybe<StringFieldUpdateOperationsInput>;
  productReport?: InputMaybe<ProductReportUpdateManyWithoutProductInput>;
  productReviews?: InputMaybe<ProductReviewUpdateManyWithoutProductInput>;
  rentApprove?: InputMaybe<RentApproveUpdateManyWithoutProductInput>;
  rentRequest?: InputMaybe<RentRequestUpdateManyWithoutProductInput>;
  rentingPrice?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutProductsInput>;
};

export type ProductUpdateManyMutationInput = {
  collateralDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  condition?: InputMaybe<EnumProductConditionEnumFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAvailable?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  productPicture?: InputMaybe<StringFieldUpdateOperationsInput>;
  rentingPrice?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateManyWithWhereWithoutProductCategoryInput = {
  data: ProductUpdateManyMutationInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithWhereWithoutUserInput = {
  data: ProductUpdateManyMutationInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithoutProductCategoryInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutProductCategoryInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutProductCategoryInput>>;
  createMany?: InputMaybe<ProductCreateManyProductCategoryInputEnvelope>;
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductUpdateWithWhereUniqueWithoutProductCategoryInput>>;
  updateMany?: InputMaybe<Array<ProductUpdateManyWithWhereWithoutProductCategoryInput>>;
  upsert?: InputMaybe<Array<ProductUpsertWithWhereUniqueWithoutProductCategoryInput>>;
};

export type ProductUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutUserInput>>;
  createMany?: InputMaybe<ProductCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ProductUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ProductUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ProductUpdateOneRequiredWithoutProductReportInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductReportInput>;
  create?: InputMaybe<ProductCreateWithoutProductReportInput>;
  update?: InputMaybe<ProductUpdateWithoutProductReportInput>;
  upsert?: InputMaybe<ProductUpsertWithoutProductReportInput>;
};

export type ProductUpdateOneRequiredWithoutProductReviewsInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductReviewsInput>;
  create?: InputMaybe<ProductCreateWithoutProductReviewsInput>;
  update?: InputMaybe<ProductUpdateWithoutProductReviewsInput>;
  upsert?: InputMaybe<ProductUpsertWithoutProductReviewsInput>;
};

export type ProductUpdateOneRequiredWithoutRentApproveInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutRentApproveInput>;
  create?: InputMaybe<ProductCreateWithoutRentApproveInput>;
  update?: InputMaybe<ProductUpdateWithoutRentApproveInput>;
  upsert?: InputMaybe<ProductUpsertWithoutRentApproveInput>;
};

export type ProductUpdateOneRequiredWithoutRentRequestInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutRentRequestInput>;
  create?: InputMaybe<ProductCreateWithoutRentRequestInput>;
  update?: InputMaybe<ProductUpdateWithoutRentRequestInput>;
  upsert?: InputMaybe<ProductUpsertWithoutRentRequestInput>;
};

export type ProductUpdateWithWhereUniqueWithoutProductCategoryInput = {
  data: ProductUpdateWithoutProductCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithWhereUniqueWithoutUserInput = {
  data: ProductUpdateWithoutUserInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithoutProductCategoryInput = {
  collateralDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  condition?: InputMaybe<EnumProductConditionEnumFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAvailable?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  productPicture?: InputMaybe<StringFieldUpdateOperationsInput>;
  productReport?: InputMaybe<ProductReportUpdateManyWithoutProductInput>;
  productReviews?: InputMaybe<ProductReviewUpdateManyWithoutProductInput>;
  rentApprove?: InputMaybe<RentApproveUpdateManyWithoutProductInput>;
  rentRequest?: InputMaybe<RentRequestUpdateManyWithoutProductInput>;
  rentingPrice?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutProductsInput>;
};

export type ProductUpdateWithoutProductReportInput = {
  collateralDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  condition?: InputMaybe<EnumProductConditionEnumFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAvailable?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  productCategory?: InputMaybe<ProductCategoryUpdateOneRequiredWithoutProductsInput>;
  productPicture?: InputMaybe<StringFieldUpdateOperationsInput>;
  productReviews?: InputMaybe<ProductReviewUpdateManyWithoutProductInput>;
  rentApprove?: InputMaybe<RentApproveUpdateManyWithoutProductInput>;
  rentRequest?: InputMaybe<RentRequestUpdateManyWithoutProductInput>;
  rentingPrice?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutProductsInput>;
};

export type ProductUpdateWithoutProductReviewsInput = {
  collateralDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  condition?: InputMaybe<EnumProductConditionEnumFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAvailable?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  productCategory?: InputMaybe<ProductCategoryUpdateOneRequiredWithoutProductsInput>;
  productPicture?: InputMaybe<StringFieldUpdateOperationsInput>;
  productReport?: InputMaybe<ProductReportUpdateManyWithoutProductInput>;
  rentApprove?: InputMaybe<RentApproveUpdateManyWithoutProductInput>;
  rentRequest?: InputMaybe<RentRequestUpdateManyWithoutProductInput>;
  rentingPrice?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutProductsInput>;
};

export type ProductUpdateWithoutRentApproveInput = {
  collateralDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  condition?: InputMaybe<EnumProductConditionEnumFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAvailable?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  productCategory?: InputMaybe<ProductCategoryUpdateOneRequiredWithoutProductsInput>;
  productPicture?: InputMaybe<StringFieldUpdateOperationsInput>;
  productReport?: InputMaybe<ProductReportUpdateManyWithoutProductInput>;
  productReviews?: InputMaybe<ProductReviewUpdateManyWithoutProductInput>;
  rentRequest?: InputMaybe<RentRequestUpdateManyWithoutProductInput>;
  rentingPrice?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutProductsInput>;
};

export type ProductUpdateWithoutRentRequestInput = {
  collateralDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  condition?: InputMaybe<EnumProductConditionEnumFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAvailable?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  productCategory?: InputMaybe<ProductCategoryUpdateOneRequiredWithoutProductsInput>;
  productPicture?: InputMaybe<StringFieldUpdateOperationsInput>;
  productReport?: InputMaybe<ProductReportUpdateManyWithoutProductInput>;
  productReviews?: InputMaybe<ProductReviewUpdateManyWithoutProductInput>;
  rentApprove?: InputMaybe<RentApproveUpdateManyWithoutProductInput>;
  rentingPrice?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutProductsInput>;
};

export type ProductUpdateWithoutUserInput = {
  collateralDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  condition?: InputMaybe<EnumProductConditionEnumFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAvailable?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  productCategory?: InputMaybe<ProductCategoryUpdateOneRequiredWithoutProductsInput>;
  productPicture?: InputMaybe<StringFieldUpdateOperationsInput>;
  productReport?: InputMaybe<ProductReportUpdateManyWithoutProductInput>;
  productReviews?: InputMaybe<ProductReviewUpdateManyWithoutProductInput>;
  rentApprove?: InputMaybe<RentApproveUpdateManyWithoutProductInput>;
  rentRequest?: InputMaybe<RentRequestUpdateManyWithoutProductInput>;
  rentingPrice?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpsertWithWhereUniqueWithoutProductCategoryInput = {
  create: ProductCreateWithoutProductCategoryInput;
  update: ProductUpdateWithoutProductCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithWhereUniqueWithoutUserInput = {
  create: ProductCreateWithoutUserInput;
  update: ProductUpdateWithoutUserInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithoutProductReportInput = {
  create: ProductCreateWithoutProductReportInput;
  update: ProductUpdateWithoutProductReportInput;
};

export type ProductUpsertWithoutProductReviewsInput = {
  create: ProductCreateWithoutProductReviewsInput;
  update: ProductUpdateWithoutProductReviewsInput;
};

export type ProductUpsertWithoutRentApproveInput = {
  create: ProductCreateWithoutRentApproveInput;
  update: ProductUpdateWithoutRentApproveInput;
};

export type ProductUpsertWithoutRentRequestInput = {
  create: ProductCreateWithoutRentRequestInput;
  update: ProductUpdateWithoutRentRequestInput;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  collateralDescription?: InputMaybe<StringFilter>;
  condition?: InputMaybe<EnumProductConditionEnumFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isAvailable?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  productCategory?: InputMaybe<ProductCategoryRelationFilter>;
  productCategoryName?: InputMaybe<EnumCategoryNameEnumFilter>;
  productPicture?: InputMaybe<StringFilter>;
  productReport?: InputMaybe<ProductReportListRelationFilter>;
  productReviews?: InputMaybe<ProductReviewListRelationFilter>;
  rentApprove?: InputMaybe<RentApproveListRelationFilter>;
  rentRequest?: InputMaybe<RentRequestListRelationFilter>;
  rentingPrice?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateProduct: AggregateProduct;
  aggregateProductCategory: AggregateProductCategory;
  aggregateProductReport: AggregateProductReport;
  aggregateProductReview: AggregateProductReview;
  aggregateRentApprove: AggregateRentApprove;
  aggregateRentRequest: AggregateRentRequest;
  aggregateUser: AggregateUser;
  aggregateUserReview: AggregateUserReview;
  aggregateUserRole: AggregateUserRole;
  findFirstProduct?: Maybe<Product>;
  findFirstProductCategory?: Maybe<ProductCategory>;
  findFirstProductReport?: Maybe<ProductReport>;
  findFirstProductReview?: Maybe<ProductReview>;
  findFirstRentApprove?: Maybe<RentApprove>;
  findFirstRentRequest?: Maybe<RentRequest>;
  findFirstUser?: Maybe<User>;
  findFirstUserReview?: Maybe<UserReview>;
  findFirstUserRole?: Maybe<UserRole>;
  groupByProduct: Array<ProductGroupBy>;
  groupByProductCategory: Array<ProductCategoryGroupBy>;
  groupByProductReport: Array<ProductReportGroupBy>;
  groupByProductReview: Array<ProductReviewGroupBy>;
  groupByRentApprove: Array<RentApproveGroupBy>;
  groupByRentRequest: Array<RentRequestGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByUserReview: Array<UserReviewGroupBy>;
  groupByUserRole: Array<UserRoleGroupBy>;
  isLoggedIn?: Maybe<Scalars['Boolean']>;
  product?: Maybe<Product>;
  productCategories: Array<ProductCategory>;
  productCategory?: Maybe<ProductCategory>;
  productReport?: Maybe<ProductReport>;
  productReports: Array<ProductReport>;
  productReview?: Maybe<ProductReview>;
  productReviews: Array<ProductReview>;
  products: Array<Product>;
  rentApprove?: Maybe<RentApprove>;
  rentApproves: Array<RentApprove>;
  rentRequest?: Maybe<RentRequest>;
  rentRequests: Array<RentRequest>;
  user?: Maybe<User>;
  userReview?: Maybe<UserReview>;
  userReviews: Array<UserReview>;
  userRole?: Maybe<UserRole>;
  userRoles: Array<UserRole>;
  users: Array<User>;
};


export type QueryAggregateProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryAggregateProductCategoryArgs = {
  cursor?: InputMaybe<ProductCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductCategoryWhereInput>;
};


export type QueryAggregateProductReportArgs = {
  cursor?: InputMaybe<ProductReportWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductReportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductReportWhereInput>;
};


export type QueryAggregateProductReviewArgs = {
  cursor?: InputMaybe<ProductReviewWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductReviewWhereInput>;
};


export type QueryAggregateRentApproveArgs = {
  cursor?: InputMaybe<RentApproveWhereUniqueInput>;
  orderBy?: InputMaybe<Array<RentApproveOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RentApproveWhereInput>;
};


export type QueryAggregateRentRequestArgs = {
  cursor?: InputMaybe<RentRequestWhereUniqueInput>;
  orderBy?: InputMaybe<Array<RentRequestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RentRequestWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAggregateUserReviewArgs = {
  cursor?: InputMaybe<UserReviewWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserReviewWhereInput>;
};


export type QueryAggregateUserRoleArgs = {
  cursor?: InputMaybe<UserRoleWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserRoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserRoleWhereInput>;
};


export type QueryFindFirstProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryFindFirstProductCategoryArgs = {
  cursor?: InputMaybe<ProductCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductCategoryWhereInput>;
};


export type QueryFindFirstProductReportArgs = {
  cursor?: InputMaybe<ProductReportWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductReportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductReportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductReportWhereInput>;
};


export type QueryFindFirstProductReviewArgs = {
  cursor?: InputMaybe<ProductReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductReviewWhereInput>;
};


export type QueryFindFirstRentApproveArgs = {
  cursor?: InputMaybe<RentApproveWhereUniqueInput>;
  distinct?: InputMaybe<Array<RentApproveScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RentApproveOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RentApproveWhereInput>;
};


export type QueryFindFirstRentRequestArgs = {
  cursor?: InputMaybe<RentRequestWhereUniqueInput>;
  distinct?: InputMaybe<Array<RentRequestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RentRequestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RentRequestWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserReviewArgs = {
  cursor?: InputMaybe<UserReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserReviewWhereInput>;
};


export type QueryFindFirstUserRoleArgs = {
  cursor?: InputMaybe<UserRoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserRoleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserRoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserRoleWhereInput>;
};


export type QueryGroupByProductArgs = {
  by: Array<ProductScalarFieldEnum>;
  having?: InputMaybe<ProductScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryGroupByProductCategoryArgs = {
  by: Array<ProductCategoryScalarFieldEnum>;
  having?: InputMaybe<ProductCategoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProductCategoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductCategoryWhereInput>;
};


export type QueryGroupByProductReportArgs = {
  by: Array<ProductReportScalarFieldEnum>;
  having?: InputMaybe<ProductReportScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProductReportOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductReportWhereInput>;
};


export type QueryGroupByProductReviewArgs = {
  by: Array<ProductReviewScalarFieldEnum>;
  having?: InputMaybe<ProductReviewScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProductReviewOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductReviewWhereInput>;
};


export type QueryGroupByRentApproveArgs = {
  by: Array<RentApproveScalarFieldEnum>;
  having?: InputMaybe<RentApproveScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<RentApproveOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RentApproveWhereInput>;
};


export type QueryGroupByRentRequestArgs = {
  by: Array<RentRequestScalarFieldEnum>;
  having?: InputMaybe<RentRequestScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<RentRequestOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RentRequestWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByUserReviewArgs = {
  by: Array<UserReviewScalarFieldEnum>;
  having?: InputMaybe<UserReviewScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserReviewOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserReviewWhereInput>;
};


export type QueryGroupByUserRoleArgs = {
  by: Array<UserRoleScalarFieldEnum>;
  having?: InputMaybe<UserRoleScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserRoleOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserRoleWhereInput>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductCategoriesArgs = {
  cursor?: InputMaybe<ProductCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductCategoryWhereInput>;
};


export type QueryProductCategoryArgs = {
  where: ProductCategoryWhereUniqueInput;
};


export type QueryProductReportArgs = {
  where: ProductReportWhereUniqueInput;
};


export type QueryProductReportsArgs = {
  cursor?: InputMaybe<ProductReportWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductReportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductReportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductReportWhereInput>;
};


export type QueryProductReviewArgs = {
  where: ProductReviewWhereUniqueInput;
};


export type QueryProductReviewsArgs = {
  cursor?: InputMaybe<ProductReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductReviewWhereInput>;
};


export type QueryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryRentApproveArgs = {
  where: RentApproveWhereUniqueInput;
};


export type QueryRentApprovesArgs = {
  cursor?: InputMaybe<RentApproveWhereUniqueInput>;
  distinct?: InputMaybe<Array<RentApproveScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RentApproveOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RentApproveWhereInput>;
};


export type QueryRentRequestArgs = {
  where: RentRequestWhereUniqueInput;
};


export type QueryRentRequestsArgs = {
  cursor?: InputMaybe<RentRequestWhereUniqueInput>;
  distinct?: InputMaybe<Array<RentRequestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RentRequestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RentRequestWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserReviewArgs = {
  where: UserReviewWhereUniqueInput;
};


export type QueryUserReviewsArgs = {
  cursor?: InputMaybe<UserReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserReviewWhereInput>;
};


export type QueryUserRoleArgs = {
  where: UserRoleWhereUniqueInput;
};


export type QueryUserRolesArgs = {
  cursor?: InputMaybe<UserRoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserRoleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserRoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserRoleWhereInput>;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RentApprove = {
  __typename?: 'RentApprove';
  createdAt: Scalars['DateTime'];
  dayOfApproval: Scalars['DateTime'];
  id: Scalars['String'];
  product: Product;
  productId: Scalars['String'];
  rentPeriod: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type RentApproveAvgAggregate = {
  __typename?: 'RentApproveAvgAggregate';
  rentPeriod?: Maybe<Scalars['Float']>;
};

export type RentApproveAvgOrderByAggregateInput = {
  rentPeriod?: InputMaybe<SortOrder>;
};

export type RentApproveCountAggregate = {
  __typename?: 'RentApproveCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  dayOfApproval: Scalars['Int'];
  id: Scalars['Int'];
  productId: Scalars['Int'];
  rentPeriod: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type RentApproveCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  dayOfApproval?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  rentPeriod?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RentApproveCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dayOfApproval: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  product: ProductCreateNestedOneWithoutRentApproveInput;
  rentPeriod: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutRentApproveInput;
};

export type RentApproveCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dayOfApproval: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  productId: Scalars['String'];
  rentPeriod: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type RentApproveCreateManyProductInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dayOfApproval: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  rentPeriod: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type RentApproveCreateManyProductInputEnvelope = {
  data: Array<RentApproveCreateManyProductInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type RentApproveCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dayOfApproval: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  productId: Scalars['String'];
  rentPeriod: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RentApproveCreateManyUserInputEnvelope = {
  data: Array<RentApproveCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type RentApproveCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<RentApproveWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RentApproveCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<RentApproveCreateWithoutProductInput>>;
  createMany?: InputMaybe<RentApproveCreateManyProductInputEnvelope>;
};

export type RentApproveCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<RentApproveWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RentApproveCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RentApproveCreateWithoutUserInput>>;
  createMany?: InputMaybe<RentApproveCreateManyUserInputEnvelope>;
};

export type RentApproveCreateOrConnectWithoutProductInput = {
  create: RentApproveCreateWithoutProductInput;
  where: RentApproveWhereUniqueInput;
};

export type RentApproveCreateOrConnectWithoutUserInput = {
  create: RentApproveCreateWithoutUserInput;
  where: RentApproveWhereUniqueInput;
};

export type RentApproveCreateWithoutProductInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dayOfApproval: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  rentPeriod: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutRentApproveInput;
};

export type RentApproveCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dayOfApproval: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  product: ProductCreateNestedOneWithoutRentApproveInput;
  rentPeriod: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RentApproveGroupBy = {
  __typename?: 'RentApproveGroupBy';
  _avg?: Maybe<RentApproveAvgAggregate>;
  _count?: Maybe<RentApproveCountAggregate>;
  _max?: Maybe<RentApproveMaxAggregate>;
  _min?: Maybe<RentApproveMinAggregate>;
  _sum?: Maybe<RentApproveSumAggregate>;
  createdAt: Scalars['DateTime'];
  dayOfApproval: Scalars['DateTime'];
  id: Scalars['String'];
  productId: Scalars['String'];
  rentPeriod: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type RentApproveListRelationFilter = {
  every?: InputMaybe<RentApproveWhereInput>;
  none?: InputMaybe<RentApproveWhereInput>;
  some?: InputMaybe<RentApproveWhereInput>;
};

export type RentApproveMaxAggregate = {
  __typename?: 'RentApproveMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  dayOfApproval?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  rentPeriod?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type RentApproveMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  dayOfApproval?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  rentPeriod?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RentApproveMinAggregate = {
  __typename?: 'RentApproveMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  dayOfApproval?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  rentPeriod?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type RentApproveMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  dayOfApproval?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  rentPeriod?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RentApproveOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RentApproveOrderByWithAggregationInput = {
  _avg?: InputMaybe<RentApproveAvgOrderByAggregateInput>;
  _count?: InputMaybe<RentApproveCountOrderByAggregateInput>;
  _max?: InputMaybe<RentApproveMaxOrderByAggregateInput>;
  _min?: InputMaybe<RentApproveMinOrderByAggregateInput>;
  _sum?: InputMaybe<RentApproveSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  dayOfApproval?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  rentPeriod?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RentApproveOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  dayOfApproval?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  rentPeriod?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum RentApproveScalarFieldEnum {
  CreatedAt = 'createdAt',
  DayOfApproval = 'dayOfApproval',
  Id = 'id',
  ProductId = 'productId',
  RentPeriod = 'rentPeriod',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type RentApproveScalarWhereInput = {
  AND?: InputMaybe<Array<RentApproveScalarWhereInput>>;
  NOT?: InputMaybe<Array<RentApproveScalarWhereInput>>;
  OR?: InputMaybe<Array<RentApproveScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dayOfApproval?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  productId?: InputMaybe<StringFilter>;
  rentPeriod?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type RentApproveScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<RentApproveScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<RentApproveScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<RentApproveScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  dayOfApproval?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  productId?: InputMaybe<StringWithAggregatesFilter>;
  rentPeriod?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type RentApproveSumAggregate = {
  __typename?: 'RentApproveSumAggregate';
  rentPeriod?: Maybe<Scalars['Int']>;
};

export type RentApproveSumOrderByAggregateInput = {
  rentPeriod?: InputMaybe<SortOrder>;
};

export type RentApproveUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dayOfApproval?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutRentApproveInput>;
  rentPeriod?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRentApproveInput>;
};

export type RentApproveUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dayOfApproval?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rentPeriod?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RentApproveUpdateManyWithWhereWithoutProductInput = {
  data: RentApproveUpdateManyMutationInput;
  where: RentApproveScalarWhereInput;
};

export type RentApproveUpdateManyWithWhereWithoutUserInput = {
  data: RentApproveUpdateManyMutationInput;
  where: RentApproveScalarWhereInput;
};

export type RentApproveUpdateManyWithoutProductInput = {
  connect?: InputMaybe<Array<RentApproveWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RentApproveCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<RentApproveCreateWithoutProductInput>>;
  createMany?: InputMaybe<RentApproveCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<RentApproveWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RentApproveScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RentApproveWhereUniqueInput>>;
  set?: InputMaybe<Array<RentApproveWhereUniqueInput>>;
  update?: InputMaybe<Array<RentApproveUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<RentApproveUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<RentApproveUpsertWithWhereUniqueWithoutProductInput>>;
};

export type RentApproveUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<RentApproveWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RentApproveCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RentApproveCreateWithoutUserInput>>;
  createMany?: InputMaybe<RentApproveCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<RentApproveWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RentApproveScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RentApproveWhereUniqueInput>>;
  set?: InputMaybe<Array<RentApproveWhereUniqueInput>>;
  update?: InputMaybe<Array<RentApproveUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<RentApproveUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<RentApproveUpsertWithWhereUniqueWithoutUserInput>>;
};

export type RentApproveUpdateWithWhereUniqueWithoutProductInput = {
  data: RentApproveUpdateWithoutProductInput;
  where: RentApproveWhereUniqueInput;
};

export type RentApproveUpdateWithWhereUniqueWithoutUserInput = {
  data: RentApproveUpdateWithoutUserInput;
  where: RentApproveWhereUniqueInput;
};

export type RentApproveUpdateWithoutProductInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dayOfApproval?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rentPeriod?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRentApproveInput>;
};

export type RentApproveUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dayOfApproval?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutRentApproveInput>;
  rentPeriod?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RentApproveUpsertWithWhereUniqueWithoutProductInput = {
  create: RentApproveCreateWithoutProductInput;
  update: RentApproveUpdateWithoutProductInput;
  where: RentApproveWhereUniqueInput;
};

export type RentApproveUpsertWithWhereUniqueWithoutUserInput = {
  create: RentApproveCreateWithoutUserInput;
  update: RentApproveUpdateWithoutUserInput;
  where: RentApproveWhereUniqueInput;
};

export type RentApproveUserIdProductIdCompoundUniqueInput = {
  productId: Scalars['String'];
  userId: Scalars['String'];
};

export type RentApproveWhereInput = {
  AND?: InputMaybe<Array<RentApproveWhereInput>>;
  NOT?: InputMaybe<Array<RentApproveWhereInput>>;
  OR?: InputMaybe<Array<RentApproveWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dayOfApproval?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  rentPeriod?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type RentApproveWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  userId_productId?: InputMaybe<RentApproveUserIdProductIdCompoundUniqueInput>;
};

export type RentRequest = {
  __typename?: 'RentRequest';
  createdAt: Scalars['DateTime'];
  dayOfRequest: Scalars['DateTime'];
  id: Scalars['String'];
  product: Product;
  productId: Scalars['String'];
  rentPeriod: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type RentRequestAvgAggregate = {
  __typename?: 'RentRequestAvgAggregate';
  rentPeriod?: Maybe<Scalars['Float']>;
};

export type RentRequestAvgOrderByAggregateInput = {
  rentPeriod?: InputMaybe<SortOrder>;
};

export type RentRequestCountAggregate = {
  __typename?: 'RentRequestCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  dayOfRequest: Scalars['Int'];
  id: Scalars['Int'];
  productId: Scalars['Int'];
  rentPeriod: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type RentRequestCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  dayOfRequest?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  rentPeriod?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RentRequestCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dayOfRequest: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  product: ProductCreateNestedOneWithoutRentRequestInput;
  rentPeriod: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutRentRequestInput;
};

export type RentRequestCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dayOfRequest: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  productId: Scalars['String'];
  rentPeriod: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type RentRequestCreateManyProductInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dayOfRequest: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  rentPeriod: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type RentRequestCreateManyProductInputEnvelope = {
  data: Array<RentRequestCreateManyProductInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type RentRequestCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dayOfRequest: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  productId: Scalars['String'];
  rentPeriod: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RentRequestCreateManyUserInputEnvelope = {
  data: Array<RentRequestCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type RentRequestCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<RentRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RentRequestCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<RentRequestCreateWithoutProductInput>>;
  createMany?: InputMaybe<RentRequestCreateManyProductInputEnvelope>;
};

export type RentRequestCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<RentRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RentRequestCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RentRequestCreateWithoutUserInput>>;
  createMany?: InputMaybe<RentRequestCreateManyUserInputEnvelope>;
};

export type RentRequestCreateOrConnectWithoutProductInput = {
  create: RentRequestCreateWithoutProductInput;
  where: RentRequestWhereUniqueInput;
};

export type RentRequestCreateOrConnectWithoutUserInput = {
  create: RentRequestCreateWithoutUserInput;
  where: RentRequestWhereUniqueInput;
};

export type RentRequestCreateWithoutProductInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dayOfRequest: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  rentPeriod: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutRentRequestInput;
};

export type RentRequestCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dayOfRequest: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  product: ProductCreateNestedOneWithoutRentRequestInput;
  rentPeriod: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RentRequestGroupBy = {
  __typename?: 'RentRequestGroupBy';
  _avg?: Maybe<RentRequestAvgAggregate>;
  _count?: Maybe<RentRequestCountAggregate>;
  _max?: Maybe<RentRequestMaxAggregate>;
  _min?: Maybe<RentRequestMinAggregate>;
  _sum?: Maybe<RentRequestSumAggregate>;
  createdAt: Scalars['DateTime'];
  dayOfRequest: Scalars['DateTime'];
  id: Scalars['String'];
  productId: Scalars['String'];
  rentPeriod: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type RentRequestListRelationFilter = {
  every?: InputMaybe<RentRequestWhereInput>;
  none?: InputMaybe<RentRequestWhereInput>;
  some?: InputMaybe<RentRequestWhereInput>;
};

export type RentRequestMaxAggregate = {
  __typename?: 'RentRequestMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  dayOfRequest?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  rentPeriod?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type RentRequestMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  dayOfRequest?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  rentPeriod?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RentRequestMinAggregate = {
  __typename?: 'RentRequestMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  dayOfRequest?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  rentPeriod?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type RentRequestMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  dayOfRequest?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  rentPeriod?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RentRequestOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RentRequestOrderByWithAggregationInput = {
  _avg?: InputMaybe<RentRequestAvgOrderByAggregateInput>;
  _count?: InputMaybe<RentRequestCountOrderByAggregateInput>;
  _max?: InputMaybe<RentRequestMaxOrderByAggregateInput>;
  _min?: InputMaybe<RentRequestMinOrderByAggregateInput>;
  _sum?: InputMaybe<RentRequestSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  dayOfRequest?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  rentPeriod?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RentRequestOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  dayOfRequest?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  rentPeriod?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum RentRequestScalarFieldEnum {
  CreatedAt = 'createdAt',
  DayOfRequest = 'dayOfRequest',
  Id = 'id',
  ProductId = 'productId',
  RentPeriod = 'rentPeriod',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type RentRequestScalarWhereInput = {
  AND?: InputMaybe<Array<RentRequestScalarWhereInput>>;
  NOT?: InputMaybe<Array<RentRequestScalarWhereInput>>;
  OR?: InputMaybe<Array<RentRequestScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dayOfRequest?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  productId?: InputMaybe<StringFilter>;
  rentPeriod?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type RentRequestScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<RentRequestScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<RentRequestScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<RentRequestScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  dayOfRequest?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  productId?: InputMaybe<StringWithAggregatesFilter>;
  rentPeriod?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type RentRequestSumAggregate = {
  __typename?: 'RentRequestSumAggregate';
  rentPeriod?: Maybe<Scalars['Int']>;
};

export type RentRequestSumOrderByAggregateInput = {
  rentPeriod?: InputMaybe<SortOrder>;
};

export type RentRequestUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dayOfRequest?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutRentRequestInput>;
  rentPeriod?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRentRequestInput>;
};

export type RentRequestUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dayOfRequest?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rentPeriod?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RentRequestUpdateManyWithWhereWithoutProductInput = {
  data: RentRequestUpdateManyMutationInput;
  where: RentRequestScalarWhereInput;
};

export type RentRequestUpdateManyWithWhereWithoutUserInput = {
  data: RentRequestUpdateManyMutationInput;
  where: RentRequestScalarWhereInput;
};

export type RentRequestUpdateManyWithoutProductInput = {
  connect?: InputMaybe<Array<RentRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RentRequestCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<RentRequestCreateWithoutProductInput>>;
  createMany?: InputMaybe<RentRequestCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<RentRequestWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RentRequestScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RentRequestWhereUniqueInput>>;
  set?: InputMaybe<Array<RentRequestWhereUniqueInput>>;
  update?: InputMaybe<Array<RentRequestUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<RentRequestUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<RentRequestUpsertWithWhereUniqueWithoutProductInput>>;
};

export type RentRequestUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<RentRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RentRequestCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RentRequestCreateWithoutUserInput>>;
  createMany?: InputMaybe<RentRequestCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<RentRequestWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RentRequestScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RentRequestWhereUniqueInput>>;
  set?: InputMaybe<Array<RentRequestWhereUniqueInput>>;
  update?: InputMaybe<Array<RentRequestUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<RentRequestUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<RentRequestUpsertWithWhereUniqueWithoutUserInput>>;
};

export type RentRequestUpdateWithWhereUniqueWithoutProductInput = {
  data: RentRequestUpdateWithoutProductInput;
  where: RentRequestWhereUniqueInput;
};

export type RentRequestUpdateWithWhereUniqueWithoutUserInput = {
  data: RentRequestUpdateWithoutUserInput;
  where: RentRequestWhereUniqueInput;
};

export type RentRequestUpdateWithoutProductInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dayOfRequest?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rentPeriod?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRentRequestInput>;
};

export type RentRequestUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dayOfRequest?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutRentRequestInput>;
  rentPeriod?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RentRequestUpsertWithWhereUniqueWithoutProductInput = {
  create: RentRequestCreateWithoutProductInput;
  update: RentRequestUpdateWithoutProductInput;
  where: RentRequestWhereUniqueInput;
};

export type RentRequestUpsertWithWhereUniqueWithoutUserInput = {
  create: RentRequestCreateWithoutUserInput;
  update: RentRequestUpdateWithoutUserInput;
  where: RentRequestWhereUniqueInput;
};

export type RentRequestUserIdProductIdCompoundUniqueInput = {
  productId: Scalars['String'];
  userId: Scalars['String'];
};

export type RentRequestWhereInput = {
  AND?: InputMaybe<Array<RentRequestWhereInput>>;
  NOT?: InputMaybe<Array<RentRequestWhereInput>>;
  OR?: InputMaybe<Array<RentRequestWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dayOfRequest?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  rentPeriod?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type RentRequestWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  userId_productId?: InputMaybe<RentRequestUserIdProductIdCompoundUniqueInput>;
};

export enum RoleNameEnum {
  Admin = 'ADMIN',
  User = 'USER'
}

export type SignInUserInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  password: Scalars['String'];
  productReport: Array<ProductReport>;
  productReviews: Array<ProductReview>;
  products: Array<Product>;
  profilePictureUrl: Scalars['String'];
  rentApprove: Array<RentApprove>;
  rentRequest: Array<RentRequest>;
  updatedAt: Scalars['DateTime'];
  userReviewsBy: Array<UserReview>;
  userReviewsFor: Array<UserReview>;
  userRole: UserRole;
  userRoleName: RoleNameEnum;
  username: Scalars['String'];
};


export type UserProductReportArgs = {
  cursor?: InputMaybe<ProductReportWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductReportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductReportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductReportWhereInput>;
};


export type UserProductReviewsArgs = {
  cursor?: InputMaybe<ProductReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductReviewWhereInput>;
};


export type UserProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type UserRentApproveArgs = {
  cursor?: InputMaybe<RentApproveWhereUniqueInput>;
  distinct?: InputMaybe<Array<RentApproveScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RentApproveOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RentApproveWhereInput>;
};


export type UserRentRequestArgs = {
  cursor?: InputMaybe<RentRequestWhereUniqueInput>;
  distinct?: InputMaybe<Array<RentRequestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RentRequestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RentRequestWhereInput>;
};


export type UserUserReviewsByArgs = {
  cursor?: InputMaybe<UserReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserReviewWhereInput>;
};


export type UserUserReviewsForArgs = {
  cursor?: InputMaybe<UserReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserReviewWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  productReport: Scalars['Int'];
  productReviews: Scalars['Int'];
  products: Scalars['Int'];
  rentApprove: Scalars['Int'];
  rentRequest: Scalars['Int'];
  userReviewsBy: Scalars['Int'];
  userReviewsFor: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  password: Scalars['Int'];
  profilePictureUrl: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userRoleName: Scalars['Int'];
  username: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  profilePictureUrl?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userRoleName?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  productReport?: InputMaybe<ProductReportCreateNestedManyWithoutUserInput>;
  productReviews?: InputMaybe<ProductReviewCreateNestedManyWithoutUserInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutUserInput>;
  profilePictureUrl?: InputMaybe<Scalars['String']>;
  rentApprove?: InputMaybe<RentApproveCreateNestedManyWithoutUserInput>;
  rentRequest?: InputMaybe<RentRequestCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userReviewsBy?: InputMaybe<UserReviewCreateNestedManyWithoutReviewerInput>;
  userReviewsFor?: InputMaybe<UserReviewCreateNestedManyWithoutRevieweeInput>;
  userRole: UserRoleCreateNestedOneWithoutUsersInput;
  username: Scalars['String'];
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  profilePictureUrl?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userRoleName: RoleNameEnum;
  username: Scalars['String'];
};

export type UserCreateManyUserRoleInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  profilePictureUrl?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserCreateManyUserRoleInputEnvelope = {
  data: Array<UserCreateManyUserRoleInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserCreateNestedManyWithoutUserRoleInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutUserRoleInput>>;
  create?: InputMaybe<Array<UserCreateWithoutUserRoleInput>>;
  createMany?: InputMaybe<UserCreateManyUserRoleInputEnvelope>;
};

export type UserCreateNestedOneWithoutProductReportInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProductReportInput>;
  create?: InputMaybe<UserCreateWithoutProductReportInput>;
};

export type UserCreateNestedOneWithoutProductReviewsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProductReviewsInput>;
  create?: InputMaybe<UserCreateWithoutProductReviewsInput>;
};

export type UserCreateNestedOneWithoutProductsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<UserCreateWithoutProductsInput>;
};

export type UserCreateNestedOneWithoutRentApproveInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRentApproveInput>;
  create?: InputMaybe<UserCreateWithoutRentApproveInput>;
};

export type UserCreateNestedOneWithoutRentRequestInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRentRequestInput>;
  create?: InputMaybe<UserCreateWithoutRentRequestInput>;
};

export type UserCreateNestedOneWithoutUserReviewsByInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserReviewsByInput>;
  create?: InputMaybe<UserCreateWithoutUserReviewsByInput>;
};

export type UserCreateNestedOneWithoutUserReviewsForInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserReviewsForInput>;
  create?: InputMaybe<UserCreateWithoutUserReviewsForInput>;
};

export type UserCreateOrConnectWithoutProductReportInput = {
  create: UserCreateWithoutProductReportInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutProductReviewsInput = {
  create: UserCreateWithoutProductReviewsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutProductsInput = {
  create: UserCreateWithoutProductsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRentApproveInput = {
  create: UserCreateWithoutRentApproveInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRentRequestInput = {
  create: UserCreateWithoutRentRequestInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserReviewsByInput = {
  create: UserCreateWithoutUserReviewsByInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserReviewsForInput = {
  create: UserCreateWithoutUserReviewsForInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserRoleInput = {
  create: UserCreateWithoutUserRoleInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutProductReportInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  productReviews?: InputMaybe<ProductReviewCreateNestedManyWithoutUserInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutUserInput>;
  profilePictureUrl?: InputMaybe<Scalars['String']>;
  rentApprove?: InputMaybe<RentApproveCreateNestedManyWithoutUserInput>;
  rentRequest?: InputMaybe<RentRequestCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userReviewsBy?: InputMaybe<UserReviewCreateNestedManyWithoutReviewerInput>;
  userReviewsFor?: InputMaybe<UserReviewCreateNestedManyWithoutRevieweeInput>;
  userRole: UserRoleCreateNestedOneWithoutUsersInput;
  username: Scalars['String'];
};

export type UserCreateWithoutProductReviewsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  productReport?: InputMaybe<ProductReportCreateNestedManyWithoutUserInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutUserInput>;
  profilePictureUrl?: InputMaybe<Scalars['String']>;
  rentApprove?: InputMaybe<RentApproveCreateNestedManyWithoutUserInput>;
  rentRequest?: InputMaybe<RentRequestCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userReviewsBy?: InputMaybe<UserReviewCreateNestedManyWithoutReviewerInput>;
  userReviewsFor?: InputMaybe<UserReviewCreateNestedManyWithoutRevieweeInput>;
  userRole: UserRoleCreateNestedOneWithoutUsersInput;
  username: Scalars['String'];
};

export type UserCreateWithoutProductsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  productReport?: InputMaybe<ProductReportCreateNestedManyWithoutUserInput>;
  productReviews?: InputMaybe<ProductReviewCreateNestedManyWithoutUserInput>;
  profilePictureUrl?: InputMaybe<Scalars['String']>;
  rentApprove?: InputMaybe<RentApproveCreateNestedManyWithoutUserInput>;
  rentRequest?: InputMaybe<RentRequestCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userReviewsBy?: InputMaybe<UserReviewCreateNestedManyWithoutReviewerInput>;
  userReviewsFor?: InputMaybe<UserReviewCreateNestedManyWithoutRevieweeInput>;
  userRole: UserRoleCreateNestedOneWithoutUsersInput;
  username: Scalars['String'];
};

export type UserCreateWithoutRentApproveInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  productReport?: InputMaybe<ProductReportCreateNestedManyWithoutUserInput>;
  productReviews?: InputMaybe<ProductReviewCreateNestedManyWithoutUserInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutUserInput>;
  profilePictureUrl?: InputMaybe<Scalars['String']>;
  rentRequest?: InputMaybe<RentRequestCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userReviewsBy?: InputMaybe<UserReviewCreateNestedManyWithoutReviewerInput>;
  userReviewsFor?: InputMaybe<UserReviewCreateNestedManyWithoutRevieweeInput>;
  userRole: UserRoleCreateNestedOneWithoutUsersInput;
  username: Scalars['String'];
};

export type UserCreateWithoutRentRequestInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  productReport?: InputMaybe<ProductReportCreateNestedManyWithoutUserInput>;
  productReviews?: InputMaybe<ProductReviewCreateNestedManyWithoutUserInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutUserInput>;
  profilePictureUrl?: InputMaybe<Scalars['String']>;
  rentApprove?: InputMaybe<RentApproveCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userReviewsBy?: InputMaybe<UserReviewCreateNestedManyWithoutReviewerInput>;
  userReviewsFor?: InputMaybe<UserReviewCreateNestedManyWithoutRevieweeInput>;
  userRole: UserRoleCreateNestedOneWithoutUsersInput;
  username: Scalars['String'];
};

export type UserCreateWithoutUserReviewsByInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  productReport?: InputMaybe<ProductReportCreateNestedManyWithoutUserInput>;
  productReviews?: InputMaybe<ProductReviewCreateNestedManyWithoutUserInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutUserInput>;
  profilePictureUrl?: InputMaybe<Scalars['String']>;
  rentApprove?: InputMaybe<RentApproveCreateNestedManyWithoutUserInput>;
  rentRequest?: InputMaybe<RentRequestCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userReviewsFor?: InputMaybe<UserReviewCreateNestedManyWithoutRevieweeInput>;
  userRole: UserRoleCreateNestedOneWithoutUsersInput;
  username: Scalars['String'];
};

export type UserCreateWithoutUserReviewsForInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  productReport?: InputMaybe<ProductReportCreateNestedManyWithoutUserInput>;
  productReviews?: InputMaybe<ProductReviewCreateNestedManyWithoutUserInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutUserInput>;
  profilePictureUrl?: InputMaybe<Scalars['String']>;
  rentApprove?: InputMaybe<RentApproveCreateNestedManyWithoutUserInput>;
  rentRequest?: InputMaybe<RentRequestCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userReviewsBy?: InputMaybe<UserReviewCreateNestedManyWithoutReviewerInput>;
  userRole: UserRoleCreateNestedOneWithoutUsersInput;
  username: Scalars['String'];
};

export type UserCreateWithoutUserRoleInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  productReport?: InputMaybe<ProductReportCreateNestedManyWithoutUserInput>;
  productReviews?: InputMaybe<ProductReviewCreateNestedManyWithoutUserInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutUserInput>;
  profilePictureUrl?: InputMaybe<Scalars['String']>;
  rentApprove?: InputMaybe<RentApproveCreateNestedManyWithoutUserInput>;
  rentRequest?: InputMaybe<RentRequestCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userReviewsBy?: InputMaybe<UserReviewCreateNestedManyWithoutReviewerInput>;
  userReviewsFor?: InputMaybe<UserReviewCreateNestedManyWithoutRevieweeInput>;
  username: Scalars['String'];
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  password: Scalars['String'];
  profilePictureUrl: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userRoleName: RoleNameEnum;
  username: Scalars['String'];
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  profilePictureUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userRoleName?: Maybe<RoleNameEnum>;
  username?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  profilePictureUrl?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userRoleName?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  profilePictureUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userRoleName?: Maybe<RoleNameEnum>;
  username?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  profilePictureUrl?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userRoleName?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  profilePictureUrl?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userRoleName?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  productReport?: InputMaybe<ProductReportOrderByRelationAggregateInput>;
  productReviews?: InputMaybe<ProductReviewOrderByRelationAggregateInput>;
  products?: InputMaybe<ProductOrderByRelationAggregateInput>;
  profilePictureUrl?: InputMaybe<SortOrder>;
  rentApprove?: InputMaybe<RentApproveOrderByRelationAggregateInput>;
  rentRequest?: InputMaybe<RentRequestOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  userReviewsBy?: InputMaybe<UserReviewOrderByRelationAggregateInput>;
  userReviewsFor?: InputMaybe<UserReviewOrderByRelationAggregateInput>;
  userRole?: InputMaybe<UserRoleOrderByWithRelationInput>;
  userRoleName?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserReview = {
  __typename?: 'UserReview';
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  rating: Scalars['Int'];
  reviewee: User;
  revieweeUserId: Scalars['String'];
  reviewer: User;
  reviewerUserId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserReviewAvgAggregate = {
  __typename?: 'UserReviewAvgAggregate';
  rating?: Maybe<Scalars['Float']>;
};

export type UserReviewAvgOrderByAggregateInput = {
  rating?: InputMaybe<SortOrder>;
};

export type UserReviewCountAggregate = {
  __typename?: 'UserReviewCountAggregate';
  _all: Scalars['Int'];
  comment: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  rating: Scalars['Int'];
  revieweeUserId: Scalars['Int'];
  reviewerUserId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserReviewCountOrderByAggregateInput = {
  comment?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  revieweeUserId?: InputMaybe<SortOrder>;
  reviewerUserId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserReviewCreateInput = {
  comment: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  rating: Scalars['Int'];
  reviewee: UserCreateNestedOneWithoutUserReviewsForInput;
  reviewer: UserCreateNestedOneWithoutUserReviewsByInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserReviewCreateManyInput = {
  comment: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  rating: Scalars['Int'];
  revieweeUserId: Scalars['String'];
  reviewerUserId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserReviewCreateManyRevieweeInput = {
  comment: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  rating: Scalars['Int'];
  reviewerUserId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserReviewCreateManyRevieweeInputEnvelope = {
  data: Array<UserReviewCreateManyRevieweeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserReviewCreateManyReviewerInput = {
  comment: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  rating: Scalars['Int'];
  revieweeUserId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserReviewCreateManyReviewerInputEnvelope = {
  data: Array<UserReviewCreateManyReviewerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserReviewCreateNestedManyWithoutRevieweeInput = {
  connect?: InputMaybe<Array<UserReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserReviewCreateOrConnectWithoutRevieweeInput>>;
  create?: InputMaybe<Array<UserReviewCreateWithoutRevieweeInput>>;
  createMany?: InputMaybe<UserReviewCreateManyRevieweeInputEnvelope>;
};

export type UserReviewCreateNestedManyWithoutReviewerInput = {
  connect?: InputMaybe<Array<UserReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserReviewCreateOrConnectWithoutReviewerInput>>;
  create?: InputMaybe<Array<UserReviewCreateWithoutReviewerInput>>;
  createMany?: InputMaybe<UserReviewCreateManyReviewerInputEnvelope>;
};

export type UserReviewCreateOrConnectWithoutRevieweeInput = {
  create: UserReviewCreateWithoutRevieweeInput;
  where: UserReviewWhereUniqueInput;
};

export type UserReviewCreateOrConnectWithoutReviewerInput = {
  create: UserReviewCreateWithoutReviewerInput;
  where: UserReviewWhereUniqueInput;
};

export type UserReviewCreateWithoutRevieweeInput = {
  comment: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  rating: Scalars['Int'];
  reviewer: UserCreateNestedOneWithoutUserReviewsByInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserReviewCreateWithoutReviewerInput = {
  comment: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  rating: Scalars['Int'];
  reviewee: UserCreateNestedOneWithoutUserReviewsForInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserReviewGroupBy = {
  __typename?: 'UserReviewGroupBy';
  _avg?: Maybe<UserReviewAvgAggregate>;
  _count?: Maybe<UserReviewCountAggregate>;
  _max?: Maybe<UserReviewMaxAggregate>;
  _min?: Maybe<UserReviewMinAggregate>;
  _sum?: Maybe<UserReviewSumAggregate>;
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  rating: Scalars['Int'];
  revieweeUserId: Scalars['String'];
  reviewerUserId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserReviewListRelationFilter = {
  every?: InputMaybe<UserReviewWhereInput>;
  none?: InputMaybe<UserReviewWhereInput>;
  some?: InputMaybe<UserReviewWhereInput>;
};

export type UserReviewMaxAggregate = {
  __typename?: 'UserReviewMaxAggregate';
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  revieweeUserId?: Maybe<Scalars['String']>;
  reviewerUserId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserReviewMaxOrderByAggregateInput = {
  comment?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  revieweeUserId?: InputMaybe<SortOrder>;
  reviewerUserId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserReviewMinAggregate = {
  __typename?: 'UserReviewMinAggregate';
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  revieweeUserId?: Maybe<Scalars['String']>;
  reviewerUserId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserReviewMinOrderByAggregateInput = {
  comment?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  revieweeUserId?: InputMaybe<SortOrder>;
  reviewerUserId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserReviewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserReviewOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserReviewAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserReviewCountOrderByAggregateInput>;
  _max?: InputMaybe<UserReviewMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserReviewMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserReviewSumOrderByAggregateInput>;
  comment?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  revieweeUserId?: InputMaybe<SortOrder>;
  reviewerUserId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserReviewOrderByWithRelationInput = {
  comment?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  reviewee?: InputMaybe<UserOrderByWithRelationInput>;
  revieweeUserId?: InputMaybe<SortOrder>;
  reviewer?: InputMaybe<UserOrderByWithRelationInput>;
  reviewerUserId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum UserReviewScalarFieldEnum {
  Comment = 'comment',
  CreatedAt = 'createdAt',
  Id = 'id',
  Rating = 'rating',
  RevieweeUserId = 'revieweeUserId',
  ReviewerUserId = 'reviewerUserId',
  UpdatedAt = 'updatedAt'
}

export type UserReviewScalarWhereInput = {
  AND?: InputMaybe<Array<UserReviewScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserReviewScalarWhereInput>>;
  OR?: InputMaybe<Array<UserReviewScalarWhereInput>>;
  comment?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  rating?: InputMaybe<IntFilter>;
  revieweeUserId?: InputMaybe<StringFilter>;
  reviewerUserId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserReviewScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserReviewScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserReviewScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserReviewScalarWhereWithAggregatesInput>>;
  comment?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  rating?: InputMaybe<IntWithAggregatesFilter>;
  revieweeUserId?: InputMaybe<StringWithAggregatesFilter>;
  reviewerUserId?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserReviewSumAggregate = {
  __typename?: 'UserReviewSumAggregate';
  rating?: Maybe<Scalars['Int']>;
};

export type UserReviewSumOrderByAggregateInput = {
  rating?: InputMaybe<SortOrder>;
};

export type UserReviewUpdateInput = {
  comment?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  reviewee?: InputMaybe<UserUpdateOneRequiredWithoutUserReviewsForInput>;
  reviewer?: InputMaybe<UserUpdateOneRequiredWithoutUserReviewsByInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserReviewUpdateManyMutationInput = {
  comment?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserReviewUpdateManyWithWhereWithoutRevieweeInput = {
  data: UserReviewUpdateManyMutationInput;
  where: UserReviewScalarWhereInput;
};

export type UserReviewUpdateManyWithWhereWithoutReviewerInput = {
  data: UserReviewUpdateManyMutationInput;
  where: UserReviewScalarWhereInput;
};

export type UserReviewUpdateManyWithoutRevieweeInput = {
  connect?: InputMaybe<Array<UserReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserReviewCreateOrConnectWithoutRevieweeInput>>;
  create?: InputMaybe<Array<UserReviewCreateWithoutRevieweeInput>>;
  createMany?: InputMaybe<UserReviewCreateManyRevieweeInputEnvelope>;
  delete?: InputMaybe<Array<UserReviewWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserReviewScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserReviewWhereUniqueInput>>;
  set?: InputMaybe<Array<UserReviewWhereUniqueInput>>;
  update?: InputMaybe<Array<UserReviewUpdateWithWhereUniqueWithoutRevieweeInput>>;
  updateMany?: InputMaybe<Array<UserReviewUpdateManyWithWhereWithoutRevieweeInput>>;
  upsert?: InputMaybe<Array<UserReviewUpsertWithWhereUniqueWithoutRevieweeInput>>;
};

export type UserReviewUpdateManyWithoutReviewerInput = {
  connect?: InputMaybe<Array<UserReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserReviewCreateOrConnectWithoutReviewerInput>>;
  create?: InputMaybe<Array<UserReviewCreateWithoutReviewerInput>>;
  createMany?: InputMaybe<UserReviewCreateManyReviewerInputEnvelope>;
  delete?: InputMaybe<Array<UserReviewWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserReviewScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserReviewWhereUniqueInput>>;
  set?: InputMaybe<Array<UserReviewWhereUniqueInput>>;
  update?: InputMaybe<Array<UserReviewUpdateWithWhereUniqueWithoutReviewerInput>>;
  updateMany?: InputMaybe<Array<UserReviewUpdateManyWithWhereWithoutReviewerInput>>;
  upsert?: InputMaybe<Array<UserReviewUpsertWithWhereUniqueWithoutReviewerInput>>;
};

export type UserReviewUpdateWithWhereUniqueWithoutRevieweeInput = {
  data: UserReviewUpdateWithoutRevieweeInput;
  where: UserReviewWhereUniqueInput;
};

export type UserReviewUpdateWithWhereUniqueWithoutReviewerInput = {
  data: UserReviewUpdateWithoutReviewerInput;
  where: UserReviewWhereUniqueInput;
};

export type UserReviewUpdateWithoutRevieweeInput = {
  comment?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  reviewer?: InputMaybe<UserUpdateOneRequiredWithoutUserReviewsByInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserReviewUpdateWithoutReviewerInput = {
  comment?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  reviewee?: InputMaybe<UserUpdateOneRequiredWithoutUserReviewsForInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserReviewUpsertWithWhereUniqueWithoutRevieweeInput = {
  create: UserReviewCreateWithoutRevieweeInput;
  update: UserReviewUpdateWithoutRevieweeInput;
  where: UserReviewWhereUniqueInput;
};

export type UserReviewUpsertWithWhereUniqueWithoutReviewerInput = {
  create: UserReviewCreateWithoutReviewerInput;
  update: UserReviewUpdateWithoutReviewerInput;
  where: UserReviewWhereUniqueInput;
};

export type UserReviewWhereInput = {
  AND?: InputMaybe<Array<UserReviewWhereInput>>;
  NOT?: InputMaybe<Array<UserReviewWhereInput>>;
  OR?: InputMaybe<Array<UserReviewWhereInput>>;
  comment?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  rating?: InputMaybe<IntFilter>;
  reviewee?: InputMaybe<UserRelationFilter>;
  revieweeUserId?: InputMaybe<StringFilter>;
  reviewer?: InputMaybe<UserRelationFilter>;
  reviewerUserId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserReviewWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type UserRole = {
  __typename?: 'UserRole';
  _count?: Maybe<UserRoleCount>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  name: RoleNameEnum;
  updatedAt: Scalars['DateTime'];
  users: Array<User>;
};


export type UserRoleUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type UserRoleCount = {
  __typename?: 'UserRoleCount';
  users: Scalars['Int'];
};

export type UserRoleCountAggregate = {
  __typename?: 'UserRoleCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserRoleCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRoleCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name: RoleNameEnum;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<UserCreateNestedManyWithoutUserRoleInput>;
};

export type UserRoleCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name: RoleNameEnum;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserRoleCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<UserRoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserRoleCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<UserRoleCreateWithoutUsersInput>;
};

export type UserRoleCreateOrConnectWithoutUsersInput = {
  create: UserRoleCreateWithoutUsersInput;
  where: UserRoleWhereUniqueInput;
};

export type UserRoleCreateWithoutUsersInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name: RoleNameEnum;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserRoleGroupBy = {
  __typename?: 'UserRoleGroupBy';
  _count?: Maybe<UserRoleCountAggregate>;
  _max?: Maybe<UserRoleMaxAggregate>;
  _min?: Maybe<UserRoleMinAggregate>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  name: RoleNameEnum;
  updatedAt: Scalars['DateTime'];
};

export type UserRoleMaxAggregate = {
  __typename?: 'UserRoleMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<RoleNameEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserRoleMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRoleMinAggregate = {
  __typename?: 'UserRoleMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<RoleNameEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserRoleMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRoleOrderByWithAggregationInput = {
  _count?: InputMaybe<UserRoleCountOrderByAggregateInput>;
  _max?: InputMaybe<UserRoleMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserRoleMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRoleOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  users?: InputMaybe<UserOrderByRelationAggregateInput>;
};

export type UserRoleRelationFilter = {
  is?: InputMaybe<UserRoleWhereInput>;
  isNot?: InputMaybe<UserRoleWhereInput>;
};

export enum UserRoleScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type UserRoleScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserRoleScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserRoleScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserRoleScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<EnumRoleNameEnumWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserRoleUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<EnumRoleNameEnumFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutUserRoleInput>;
};

export type UserRoleUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<EnumRoleNameEnumFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserRoleUpdateOneRequiredWithoutUsersInput = {
  connect?: InputMaybe<UserRoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserRoleCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<UserRoleCreateWithoutUsersInput>;
  update?: InputMaybe<UserRoleUpdateWithoutUsersInput>;
  upsert?: InputMaybe<UserRoleUpsertWithoutUsersInput>;
};

export type UserRoleUpdateWithoutUsersInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<EnumRoleNameEnumFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserRoleUpsertWithoutUsersInput = {
  create: UserRoleCreateWithoutUsersInput;
  update: UserRoleUpdateWithoutUsersInput;
};

export type UserRoleWhereInput = {
  AND?: InputMaybe<Array<UserRoleWhereInput>>;
  NOT?: InputMaybe<Array<UserRoleWhereInput>>;
  OR?: InputMaybe<Array<UserRoleWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<EnumRoleNameEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type UserRoleWhereUniqueInput = {
  name?: InputMaybe<RoleNameEnum>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  Password = 'password',
  ProfilePictureUrl = 'profilePictureUrl',
  UpdatedAt = 'updatedAt',
  UserRoleName = 'userRoleName',
  Username = 'username'
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  profilePictureUrl?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userRoleName?: InputMaybe<EnumRoleNameEnumFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  profilePictureUrl?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userRoleName?: InputMaybe<EnumRoleNameEnumWithAggregatesFilter>;
  username?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  productReport?: InputMaybe<ProductReportUpdateManyWithoutUserInput>;
  productReviews?: InputMaybe<ProductReviewUpdateManyWithoutUserInput>;
  products?: InputMaybe<ProductUpdateManyWithoutUserInput>;
  profilePictureUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  rentApprove?: InputMaybe<RentApproveUpdateManyWithoutUserInput>;
  rentRequest?: InputMaybe<RentRequestUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userReviewsBy?: InputMaybe<UserReviewUpdateManyWithoutReviewerInput>;
  userReviewsFor?: InputMaybe<UserReviewUpdateManyWithoutRevieweeInput>;
  userRole?: InputMaybe<UserRoleUpdateOneRequiredWithoutUsersInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePictureUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutUserRoleInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutUserRoleInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutUserRoleInput>>;
  create?: InputMaybe<Array<UserCreateWithoutUserRoleInput>>;
  createMany?: InputMaybe<UserCreateManyUserRoleInputEnvelope>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutUserRoleInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutUserRoleInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutUserRoleInput>>;
};

export type UserUpdateOneRequiredWithoutProductReportInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProductReportInput>;
  create?: InputMaybe<UserCreateWithoutProductReportInput>;
  update?: InputMaybe<UserUpdateWithoutProductReportInput>;
  upsert?: InputMaybe<UserUpsertWithoutProductReportInput>;
};

export type UserUpdateOneRequiredWithoutProductReviewsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProductReviewsInput>;
  create?: InputMaybe<UserCreateWithoutProductReviewsInput>;
  update?: InputMaybe<UserUpdateWithoutProductReviewsInput>;
  upsert?: InputMaybe<UserUpsertWithoutProductReviewsInput>;
};

export type UserUpdateOneRequiredWithoutProductsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<UserCreateWithoutProductsInput>;
  update?: InputMaybe<UserUpdateWithoutProductsInput>;
  upsert?: InputMaybe<UserUpsertWithoutProductsInput>;
};

export type UserUpdateOneRequiredWithoutRentApproveInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRentApproveInput>;
  create?: InputMaybe<UserCreateWithoutRentApproveInput>;
  update?: InputMaybe<UserUpdateWithoutRentApproveInput>;
  upsert?: InputMaybe<UserUpsertWithoutRentApproveInput>;
};

export type UserUpdateOneRequiredWithoutRentRequestInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRentRequestInput>;
  create?: InputMaybe<UserCreateWithoutRentRequestInput>;
  update?: InputMaybe<UserUpdateWithoutRentRequestInput>;
  upsert?: InputMaybe<UserUpsertWithoutRentRequestInput>;
};

export type UserUpdateOneRequiredWithoutUserReviewsByInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserReviewsByInput>;
  create?: InputMaybe<UserCreateWithoutUserReviewsByInput>;
  update?: InputMaybe<UserUpdateWithoutUserReviewsByInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserReviewsByInput>;
};

export type UserUpdateOneRequiredWithoutUserReviewsForInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserReviewsForInput>;
  create?: InputMaybe<UserCreateWithoutUserReviewsForInput>;
  update?: InputMaybe<UserUpdateWithoutUserReviewsForInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserReviewsForInput>;
};

export type UserUpdateWithWhereUniqueWithoutUserRoleInput = {
  data: UserUpdateWithoutUserRoleInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutProductReportInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  productReviews?: InputMaybe<ProductReviewUpdateManyWithoutUserInput>;
  products?: InputMaybe<ProductUpdateManyWithoutUserInput>;
  profilePictureUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  rentApprove?: InputMaybe<RentApproveUpdateManyWithoutUserInput>;
  rentRequest?: InputMaybe<RentRequestUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userReviewsBy?: InputMaybe<UserReviewUpdateManyWithoutReviewerInput>;
  userReviewsFor?: InputMaybe<UserReviewUpdateManyWithoutRevieweeInput>;
  userRole?: InputMaybe<UserRoleUpdateOneRequiredWithoutUsersInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutProductReviewsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  productReport?: InputMaybe<ProductReportUpdateManyWithoutUserInput>;
  products?: InputMaybe<ProductUpdateManyWithoutUserInput>;
  profilePictureUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  rentApprove?: InputMaybe<RentApproveUpdateManyWithoutUserInput>;
  rentRequest?: InputMaybe<RentRequestUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userReviewsBy?: InputMaybe<UserReviewUpdateManyWithoutReviewerInput>;
  userReviewsFor?: InputMaybe<UserReviewUpdateManyWithoutRevieweeInput>;
  userRole?: InputMaybe<UserRoleUpdateOneRequiredWithoutUsersInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutProductsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  productReport?: InputMaybe<ProductReportUpdateManyWithoutUserInput>;
  productReviews?: InputMaybe<ProductReviewUpdateManyWithoutUserInput>;
  profilePictureUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  rentApprove?: InputMaybe<RentApproveUpdateManyWithoutUserInput>;
  rentRequest?: InputMaybe<RentRequestUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userReviewsBy?: InputMaybe<UserReviewUpdateManyWithoutReviewerInput>;
  userReviewsFor?: InputMaybe<UserReviewUpdateManyWithoutRevieweeInput>;
  userRole?: InputMaybe<UserRoleUpdateOneRequiredWithoutUsersInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutRentApproveInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  productReport?: InputMaybe<ProductReportUpdateManyWithoutUserInput>;
  productReviews?: InputMaybe<ProductReviewUpdateManyWithoutUserInput>;
  products?: InputMaybe<ProductUpdateManyWithoutUserInput>;
  profilePictureUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  rentRequest?: InputMaybe<RentRequestUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userReviewsBy?: InputMaybe<UserReviewUpdateManyWithoutReviewerInput>;
  userReviewsFor?: InputMaybe<UserReviewUpdateManyWithoutRevieweeInput>;
  userRole?: InputMaybe<UserRoleUpdateOneRequiredWithoutUsersInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutRentRequestInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  productReport?: InputMaybe<ProductReportUpdateManyWithoutUserInput>;
  productReviews?: InputMaybe<ProductReviewUpdateManyWithoutUserInput>;
  products?: InputMaybe<ProductUpdateManyWithoutUserInput>;
  profilePictureUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  rentApprove?: InputMaybe<RentApproveUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userReviewsBy?: InputMaybe<UserReviewUpdateManyWithoutReviewerInput>;
  userReviewsFor?: InputMaybe<UserReviewUpdateManyWithoutRevieweeInput>;
  userRole?: InputMaybe<UserRoleUpdateOneRequiredWithoutUsersInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUserReviewsByInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  productReport?: InputMaybe<ProductReportUpdateManyWithoutUserInput>;
  productReviews?: InputMaybe<ProductReviewUpdateManyWithoutUserInput>;
  products?: InputMaybe<ProductUpdateManyWithoutUserInput>;
  profilePictureUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  rentApprove?: InputMaybe<RentApproveUpdateManyWithoutUserInput>;
  rentRequest?: InputMaybe<RentRequestUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userReviewsFor?: InputMaybe<UserReviewUpdateManyWithoutRevieweeInput>;
  userRole?: InputMaybe<UserRoleUpdateOneRequiredWithoutUsersInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUserReviewsForInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  productReport?: InputMaybe<ProductReportUpdateManyWithoutUserInput>;
  productReviews?: InputMaybe<ProductReviewUpdateManyWithoutUserInput>;
  products?: InputMaybe<ProductUpdateManyWithoutUserInput>;
  profilePictureUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  rentApprove?: InputMaybe<RentApproveUpdateManyWithoutUserInput>;
  rentRequest?: InputMaybe<RentRequestUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userReviewsBy?: InputMaybe<UserReviewUpdateManyWithoutReviewerInput>;
  userRole?: InputMaybe<UserRoleUpdateOneRequiredWithoutUsersInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUserRoleInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  productReport?: InputMaybe<ProductReportUpdateManyWithoutUserInput>;
  productReviews?: InputMaybe<ProductReviewUpdateManyWithoutUserInput>;
  products?: InputMaybe<ProductUpdateManyWithoutUserInput>;
  profilePictureUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  rentApprove?: InputMaybe<RentApproveUpdateManyWithoutUserInput>;
  rentRequest?: InputMaybe<RentRequestUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userReviewsBy?: InputMaybe<UserReviewUpdateManyWithoutReviewerInput>;
  userReviewsFor?: InputMaybe<UserReviewUpdateManyWithoutRevieweeInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutUserRoleInput = {
  create: UserCreateWithoutUserRoleInput;
  update: UserUpdateWithoutUserRoleInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutProductReportInput = {
  create: UserCreateWithoutProductReportInput;
  update: UserUpdateWithoutProductReportInput;
};

export type UserUpsertWithoutProductReviewsInput = {
  create: UserCreateWithoutProductReviewsInput;
  update: UserUpdateWithoutProductReviewsInput;
};

export type UserUpsertWithoutProductsInput = {
  create: UserCreateWithoutProductsInput;
  update: UserUpdateWithoutProductsInput;
};

export type UserUpsertWithoutRentApproveInput = {
  create: UserCreateWithoutRentApproveInput;
  update: UserUpdateWithoutRentApproveInput;
};

export type UserUpsertWithoutRentRequestInput = {
  create: UserCreateWithoutRentRequestInput;
  update: UserUpdateWithoutRentRequestInput;
};

export type UserUpsertWithoutUserReviewsByInput = {
  create: UserCreateWithoutUserReviewsByInput;
  update: UserUpdateWithoutUserReviewsByInput;
};

export type UserUpsertWithoutUserReviewsForInput = {
  create: UserCreateWithoutUserReviewsForInput;
  update: UserUpdateWithoutUserReviewsForInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  productReport?: InputMaybe<ProductReportListRelationFilter>;
  productReviews?: InputMaybe<ProductReviewListRelationFilter>;
  products?: InputMaybe<ProductListRelationFilter>;
  profilePictureUrl?: InputMaybe<StringFilter>;
  rentApprove?: InputMaybe<RentApproveListRelationFilter>;
  rentRequest?: InputMaybe<RentRequestListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userReviewsBy?: InputMaybe<UserReviewListRelationFilter>;
  userReviewsFor?: InputMaybe<UserReviewListRelationFilter>;
  userRole?: InputMaybe<UserRoleRelationFilter>;
  userRoleName?: InputMaybe<EnumRoleNameEnumFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserWithToken = {
  __typename?: 'UserWithToken';
  _count?: Maybe<UserCount>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  password: Scalars['String'];
  productReport: Array<ProductReport>;
  productReviews: Array<ProductReview>;
  products: Array<Product>;
  profilePictureUrl: Scalars['String'];
  rentApprove: Array<RentApprove>;
  rentRequest: Array<RentRequest>;
  token: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userReviewsBy: Array<UserReview>;
  userReviewsFor: Array<UserReview>;
  userRole: UserRole;
  userRoleName: RoleNameEnum;
  username: Scalars['String'];
};


export type UserWithTokenProductReportArgs = {
  cursor?: InputMaybe<ProductReportWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductReportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductReportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductReportWhereInput>;
};


export type UserWithTokenProductReviewsArgs = {
  cursor?: InputMaybe<ProductReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductReviewWhereInput>;
};


export type UserWithTokenProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type UserWithTokenRentApproveArgs = {
  cursor?: InputMaybe<RentApproveWhereUniqueInput>;
  distinct?: InputMaybe<Array<RentApproveScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RentApproveOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RentApproveWhereInput>;
};


export type UserWithTokenRentRequestArgs = {
  cursor?: InputMaybe<RentRequestWhereUniqueInput>;
  distinct?: InputMaybe<Array<RentRequestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RentRequestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RentRequestWhereInput>;
};


export type UserWithTokenUserReviewsByArgs = {
  cursor?: InputMaybe<UserReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserReviewWhereInput>;
};


export type UserWithTokenUserReviewsForArgs = {
  cursor?: InputMaybe<UserReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserReviewWhereInput>;
};

export type CreateProductMutationVariables = Exact<{
  name: Scalars['String'];
  description: Scalars['String'];
  collateralDescription: Scalars['String'];
  rentingPrice: Scalars['Int'];
  isAvailable: Scalars['Boolean'];
  condition: ProductConditionEnum;
  id: Scalars['String'];
  productPicture: Scalars['String'];
  productCategory: CategoryNameEnum;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', name: string, description: string } };

export type CreateProductReportMutationVariables = Exact<{
  comment: Scalars['String'];
  userId: Scalars['String'];
  productId: Scalars['String'];
}>;


export type CreateProductReportMutation = { __typename?: 'Mutation', createProductReport: { __typename?: 'ProductReport', id: string, comment: string, userId: string, productId: string } };

export type CreateProductReviewMutationVariables = Exact<{
  rating: Scalars['Int'];
  comment: Scalars['String'];
  productId: Scalars['String'];
  userId: Scalars['String'];
}>;


export type CreateProductReviewMutation = { __typename?: 'Mutation', createProductReview: { __typename?: 'ProductReview', id: string, rating: number, comment?: string | null, ownersReply?: string | null, productId: string, user: { __typename?: 'User', id: string, username: string, profilePictureUrl: string } } };

export type CreateRentRequestMutationVariables = Exact<{
  rentPeriod: Scalars['Int'];
  dayOfRequest: Scalars['DateTime'];
  userId: Scalars['String'];
  productId: Scalars['String'];
}>;


export type CreateRentRequestMutation = { __typename?: 'Mutation', createRentRequest: { __typename?: 'RentRequest', id: string, userId: string } };

export type CreateUserMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  profilePictureUrl: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserWithToken', id: string, email: string, token: string } };

export type CreateUserReviewMutationVariables = Exact<{
  rating: Scalars['Int'];
  comment: Scalars['String'];
  reviewer: Scalars['String'];
  reviewee: Scalars['String'];
}>;


export type CreateUserReviewMutation = { __typename?: 'Mutation', createUserReview: { __typename?: 'UserReview', id: string, rating: number, comment: string, reviewerUserId: string, revieweeUserId: string } };

export type SignInUserMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInUserMutation = { __typename?: 'Mutation', signInUser: { __typename?: 'UserWithToken', id: string, username: string, email: string, token: string } };

export type UploadPictureMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type UploadPictureMutation = { __typename?: 'Mutation', postPicture: string };

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct?: { __typename?: 'Product', id: string, name: string } | null };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'User', id: string } | null };

export type UpdateProductMutationVariables = Exact<{
  name: Scalars['String'];
  description: Scalars['String'];
  collateralDescription: Scalars['String'];
  rentingPrice: Scalars['Int'];
  isAvailable: Scalars['Boolean'];
  condition: ProductConditionEnum;
  userId: Scalars['String'];
  productId: Scalars['String'];
  productPicture: Scalars['String'];
  productCategory: CategoryNameEnum;
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct?: { __typename?: 'Product', id: string, name: string } | null };

export type UpdateProductReportMutationVariables = Exact<{
  userId: Scalars['String'];
  productId: Scalars['String'];
  comment: Scalars['String'];
}>;


export type UpdateProductReportMutation = { __typename?: 'Mutation', updateProductReport?: { __typename?: 'ProductReport', id: string, comment: string } | null };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  profilePictureUrl: Scalars['String'];
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string } | null };

export type GetProductCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductCategoriesQuery = { __typename?: 'Query', productCategories: Array<{ __typename?: 'ProductCategory', name: CategoryNameEnum, description: string }> };

export type GetProductCategoryFilterQueryVariables = Exact<{
  name: CategoryNameEnum;
}>;


export type GetProductCategoryFilterQuery = { __typename?: 'Query', productCategory?: { __typename?: 'ProductCategory', name: CategoryNameEnum, description: string, products: Array<{ __typename?: 'Product', id: string, name: string, description: string, rentingPrice: number, isAvailable: boolean, condition: ProductConditionEnum, collateralDescription: string, userId: string, productCategoryName: CategoryNameEnum }> } | null };

export type GetProductDetailQueryVariables = Exact<{
  productId: Scalars['String'];
  userId: Scalars['String'];
}>;


export type GetProductDetailQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, name: string, description: string, collateralDescription: string, rentingPrice: number, productPicture: string, isAvailable: boolean, condition: ProductConditionEnum, productCategoryName: CategoryNameEnum, user: { __typename?: 'User', id: string, username: string, profilePictureUrl: string }, allReviews: Array<{ __typename?: 'ProductReview', id: string, rating: number, comment?: string | null, ownersReply?: string | null, productId: string, user: { __typename?: 'User', id: string, username: string, profilePictureUrl: string } }>, personReview: Array<{ __typename?: 'ProductReview', id: string }>, productReport: Array<{ __typename?: 'ProductReport', id: string, comment: string }> } | null, rentRequest?: { __typename?: 'RentRequest', id: string } | null, aggregateProductReview: { __typename?: 'AggregateProductReview', _avg?: { __typename?: 'ProductReviewAvgAggregate', rating?: number | null } | null } };

export type GetProductsQueryVariables = Exact<{
  where?: InputMaybe<ProductWhereInput>;
  take: Scalars['Int'];
  skip: Scalars['Int'];
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput> | ProductOrderByWithRelationInput>;
}>;


export type GetProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, name: string, productCategoryName: CategoryNameEnum, isAvailable: boolean, description: string, collateralDescription: string, rentingPrice: number, condition: ProductConditionEnum, productPicture: string, user: { __typename?: 'User', id: string, username: string }, _count?: { __typename?: 'ProductCount', productReviews: number } | null }>, aggregateProduct: { __typename?: 'AggregateProduct', _count?: { __typename?: 'ProductCountAggregate', _all: number } | null } };

export type GetUserReviewsForQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserReviewsForQuery = { __typename?: 'Query', user?: { __typename?: 'User', userReviewsFor: Array<{ __typename?: 'UserReview', rating: number, comment: string, reviewerUserId: string, revieweeUserId: string }> } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, username: string, email: string, profilePictureUrl: string, createdAt: any, updatedAt: any, _count?: { __typename?: 'UserCount', products: number, productReviews: number, productReport: number, rentRequest: number, rentApprove: number, userReviewsFor: number, userReviewsBy: number } | null }> };

export type GetIsLoggedInQueryVariables = Exact<{ [key: string]: never; }>;


export type GetIsLoggedInQuery = { __typename?: 'Query', isLoggedIn?: boolean | null };

export type GetProductReportsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductReportsQuery = { __typename?: 'Query', productReports: Array<{ __typename?: 'ProductReport', id: string, userId: string, productId: string, comment: string, createdAt: any, updatedAt: any, user: { __typename?: 'User', username: string, email: string }, product: { __typename?: 'Product', name: string } }> };

export type GetRentRequestsQueryVariables = Exact<{
  productId: Scalars['String'];
}>;


export type GetRentRequestsQuery = { __typename?: 'Query', rentRequests: Array<{ __typename?: 'RentRequest', id: string, rentPeriod: number, dayOfRequest: any, createdAt: any, user: { __typename?: 'User', id: string, username: string, profilePictureUrl: string } }> };

export type GetUserDetailQueryVariables = Exact<{
  userid: Scalars['String'];
}>;


export type GetUserDetailQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, email: string, username: string, profilePictureUrl: string, password: string, userRoleName: RoleNameEnum, products: Array<{ __typename?: 'Product', id: string, name: string, rentingPrice: number, productPicture: string, productCategoryName: CategoryNameEnum }>, userReviewsFor: Array<{ __typename?: 'UserReview', id: string, rating: number, comment: string, reviewer: { __typename?: 'User', id: string, username: string, profilePictureUrl: string } }> } | null, aggregateUserReview: { __typename?: 'AggregateUserReview', _avg?: { __typename?: 'UserReviewAvgAggregate', rating?: number | null } | null } };

export type GetUserRoleQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserRoleQuery = { __typename?: 'Query', user?: { __typename?: 'User', userRoleName: RoleNameEnum } | null };


export const CreateProductDocument = gql`
    mutation CreateProduct($name: String!, $description: String!, $collateralDescription: String!, $rentingPrice: Int!, $isAvailable: Boolean!, $condition: ProductConditionEnum!, $id: String!, $productPicture: String!, $productCategory: CategoryNameEnum!) {
  createProduct(
    data: {name: $name, description: $description, collateralDescription: $collateralDescription, rentingPrice: $rentingPrice, isAvailable: $isAvailable, condition: $condition, productPicture: $productPicture, user: {connect: {id: $id}}, productCategory: {connect: {name: $productCategory}}}
  ) {
    name
    description
  }
}
    `;

export function useCreateProductMutation() {
  return Urql.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument);
};
export const CreateProductReportDocument = gql`
    mutation CreateProductReport($comment: String!, $userId: String!, $productId: String!) {
  createProductReport(
    data: {comment: $comment, user: {connect: {id: $userId}}, product: {connect: {id: $productId}}}
  ) {
    id
    comment
    userId
    productId
  }
}
    `;

export function useCreateProductReportMutation() {
  return Urql.useMutation<CreateProductReportMutation, CreateProductReportMutationVariables>(CreateProductReportDocument);
};
export const CreateProductReviewDocument = gql`
    mutation CreateProductReview($rating: Int!, $comment: String!, $productId: String!, $userId: String!) {
  createProductReview(
    data: {rating: $rating, comment: $comment, product: {connect: {id: $productId}}, user: {connect: {id: $userId}}}
  ) {
    id
    rating
    comment
    ownersReply
    productId
    user {
      id
      username
      profilePictureUrl
    }
  }
}
    `;

export function useCreateProductReviewMutation() {
  return Urql.useMutation<CreateProductReviewMutation, CreateProductReviewMutationVariables>(CreateProductReviewDocument);
};
export const CreateRentRequestDocument = gql`
    mutation CreateRentRequest($rentPeriod: Int!, $dayOfRequest: DateTime!, $userId: String!, $productId: String!) {
  createRentRequest(
    data: {rentPeriod: $rentPeriod, dayOfRequest: $dayOfRequest, user: {connect: {id: $userId}}, product: {connect: {id: $productId}}}
  ) {
    id
    userId
  }
}
    `;

export function useCreateRentRequestMutation() {
  return Urql.useMutation<CreateRentRequestMutation, CreateRentRequestMutationVariables>(CreateRentRequestDocument);
};
export const CreateUserDocument = gql`
    mutation CreateUser($username: String!, $email: String!, $password: String!, $profilePictureUrl: String!) {
  createUser(
    data: {username: $username, email: $email, password: $password, profilePictureUrl: $profilePictureUrl, userRole: {connect: {name: USER}}}
  ) {
    id
    email
    token
  }
}
    `;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument);
};
export const CreateUserReviewDocument = gql`
    mutation CreateUserReview($rating: Int!, $comment: String!, $reviewer: String!, $reviewee: String!) {
  createUserReview(
    data: {rating: $rating, comment: $comment, reviewer: {connect: {id: $reviewer}}, reviewee: {connect: {id: $reviewee}}}
  ) {
    id
    rating
    comment
    reviewerUserId
    revieweeUserId
  }
}
    `;

export function useCreateUserReviewMutation() {
  return Urql.useMutation<CreateUserReviewMutation, CreateUserReviewMutationVariables>(CreateUserReviewDocument);
};
export const SignInUserDocument = gql`
    mutation SignInUser($username: String!, $password: String!) {
  signInUser(data: {username: $username, password: $password}) {
    id
    username
    email
    token
  }
}
    `;

export function useSignInUserMutation() {
  return Urql.useMutation<SignInUserMutation, SignInUserMutationVariables>(SignInUserDocument);
};
export const UploadPictureDocument = gql`
    mutation UploadPicture($file: Upload!) {
  postPicture(file: $file)
}
    `;

export function useUploadPictureMutation() {
  return Urql.useMutation<UploadPictureMutation, UploadPictureMutationVariables>(UploadPictureDocument);
};
export const DeleteProductDocument = gql`
    mutation DeleteProduct($id: String!) {
  deleteProduct(where: {id: $id}) {
    id
    name
  }
}
    `;

export function useDeleteProductMutation() {
  return Urql.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument);
};
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: String!) {
  deleteUser(where: {id: $id}) {
    id
  }
}
    `;

export function useDeleteUserMutation() {
  return Urql.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument);
};
export const UpdateProductDocument = gql`
    mutation UpdateProduct($name: String!, $description: String!, $collateralDescription: String!, $rentingPrice: Int!, $isAvailable: Boolean!, $condition: ProductConditionEnum!, $userId: String!, $productId: String!, $productPicture: String!, $productCategory: CategoryNameEnum!) {
  updateProduct(
    data: {name: {set: $name}, description: {set: $description}, collateralDescription: {set: $collateralDescription}, rentingPrice: {set: $rentingPrice}, isAvailable: {set: $isAvailable}, condition: {set: $condition}, productPicture: {set: $productPicture}, user: {connect: {id: $userId}}, productCategory: {connect: {name: $productCategory}}}
    where: {id: $productId}
  ) {
    id
    name
  }
}
    `;

export function useUpdateProductMutation() {
  return Urql.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument);
};
export const UpdateProductReportDocument = gql`
    mutation UpdateProductReport($userId: String!, $productId: String!, $comment: String!) {
  updateProductReport(
    where: {userId_productId: {userId: $userId, productId: $productId}}
    data: {comment: {set: $comment}}
  ) {
    id
    comment
  }
}
    `;

export function useUpdateProductReportMutation() {
  return Urql.useMutation<UpdateProductReportMutation, UpdateProductReportMutationVariables>(UpdateProductReportDocument);
};
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: String!, $email: String!, $username: String!, $password: String!, $profilePictureUrl: String!) {
  updateUser(
    data: {email: {set: $email}, username: {set: $username}, password: {set: $password}, profilePictureUrl: {set: $profilePictureUrl}}
    where: {id: $id}
  ) {
    id
  }
}
    `;

export function useUpdateUserMutation() {
  return Urql.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument);
};
export const GetProductCategoriesDocument = gql`
    query GetProductCategories {
  productCategories {
    name
    description
  }
}
    `;

export function useGetProductCategoriesQuery(options?: Omit<Urql.UseQueryArgs<GetProductCategoriesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProductCategoriesQuery>({ query: GetProductCategoriesDocument, ...options });
};
export const GetProductCategoryFilterDocument = gql`
    query GetProductCategoryFilter($name: CategoryNameEnum!) {
  productCategory(where: {name: ELECTRONICS}) {
    name
    description
    products {
      id
      name
      description
      rentingPrice
      isAvailable
      condition
      collateralDescription
      userId
      productCategoryName
    }
  }
}
    `;

export function useGetProductCategoryFilterQuery(options: Omit<Urql.UseQueryArgs<GetProductCategoryFilterQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProductCategoryFilterQuery>({ query: GetProductCategoryFilterDocument, ...options });
};
export const GetProductDetailDocument = gql`
    query GetProductDetail($productId: String!, $userId: String!) {
  product(where: {id: $productId}) {
    id
    name
    description
    collateralDescription
    rentingPrice
    productPicture
    isAvailable
    condition
    user {
      id
      username
      profilePictureUrl
    }
    productCategoryName
    allReviews: productReviews {
      id
      rating
      comment
      ownersReply
      productId
      user {
        id
        username
        profilePictureUrl
      }
    }
    personReview: productReviews(
      where: {productId: {equals: $productId}, userId: {equals: $userId}}
    ) {
      id
    }
    productReport(where: {userId: {equals: $userId}}) {
      id
      comment
    }
  }
  rentRequest(where: {userId_productId: {userId: $userId, productId: $productId}}) {
    id
  }
  aggregateProductReview(where: {productId: {equals: $productId}}) {
    _avg {
      rating
    }
  }
}
    `;

export function useGetProductDetailQuery(options: Omit<Urql.UseQueryArgs<GetProductDetailQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProductDetailQuery>({ query: GetProductDetailDocument, ...options });
};
export const GetProductsDocument = gql`
    query GetProducts($where: ProductWhereInput, $take: Int!, $skip: Int!, $orderBy: [ProductOrderByWithRelationInput!]) {
  products(where: $where, take: $take, skip: $skip, orderBy: $orderBy) {
    id
    name
    productCategoryName
    isAvailable
    description
    collateralDescription
    rentingPrice
    condition
    productPicture
    productCategoryName
    user {
      id
      username
    }
    _count {
      productReviews
    }
  }
  aggregateProduct(where: $where) {
    _count {
      _all
    }
  }
}
    `;

export function useGetProductsQuery(options: Omit<Urql.UseQueryArgs<GetProductsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProductsQuery>({ query: GetProductsDocument, ...options });
};
export const GetUserReviewsForDocument = gql`
    query GetUserReviewsFor($id: String!) {
  user(where: {id: $id}) {
    userReviewsFor {
      rating
      comment
      reviewerUserId
      revieweeUserId
    }
  }
}
    `;

export function useGetUserReviewsForQuery(options: Omit<Urql.UseQueryArgs<GetUserReviewsForQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserReviewsForQuery>({ query: GetUserReviewsForDocument, ...options });
};
export const GetUsersDocument = gql`
    query GetUsers {
  users(where: {userRoleName: {equals: USER}}) {
    id
    username
    email
    profilePictureUrl
    createdAt
    updatedAt
    _count {
      products
      productReviews
      productReport
      rentRequest
      rentApprove
      userReviewsFor
      userReviewsBy
    }
  }
}
    `;

export function useGetUsersQuery(options?: Omit<Urql.UseQueryArgs<GetUsersQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUsersQuery>({ query: GetUsersDocument, ...options });
};
export const GetIsLoggedInDocument = gql`
    query GetIsLoggedIn {
  isLoggedIn
}
    `;

export function useGetIsLoggedInQuery(options?: Omit<Urql.UseQueryArgs<GetIsLoggedInQueryVariables>, 'query'>) {
  return Urql.useQuery<GetIsLoggedInQuery>({ query: GetIsLoggedInDocument, ...options });
};
export const GetProductReportsDocument = gql`
    query GetProductReports {
  productReports {
    id
    userId
    productId
    comment
    createdAt
    updatedAt
    user {
      username
      email
    }
    product {
      name
    }
  }
}
    `;

export function useGetProductReportsQuery(options?: Omit<Urql.UseQueryArgs<GetProductReportsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProductReportsQuery>({ query: GetProductReportsDocument, ...options });
};
export const GetRentRequestsDocument = gql`
    query GetRentRequests($productId: String!) {
  rentRequests(where: {productId: {equals: $productId}}) {
    id
    rentPeriod
    dayOfRequest
    createdAt
    user {
      id
      username
      profilePictureUrl
    }
  }
}
    `;

export function useGetRentRequestsQuery(options: Omit<Urql.UseQueryArgs<GetRentRequestsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetRentRequestsQuery>({ query: GetRentRequestsDocument, ...options });
};
export const GetUserDetailDocument = gql`
    query GetUserDetail($userid: String!) {
  user(where: {id: $userid}) {
    id
    email
    username
    profilePictureUrl
    password
    userRoleName
    products {
      id
      name
      rentingPrice
      productPicture
      productCategoryName
    }
    userReviewsFor {
      id
      rating
      comment
      reviewer {
        id
        username
        profilePictureUrl
      }
    }
  }
  aggregateUserReview(where: {revieweeUserId: {equals: $userid}}) {
    _avg {
      rating
    }
  }
}
    `;

export function useGetUserDetailQuery(options: Omit<Urql.UseQueryArgs<GetUserDetailQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserDetailQuery>({ query: GetUserDetailDocument, ...options });
};
export const GetUserRoleDocument = gql`
    query GetUserRole($id: String!) {
  user(where: {id: $id}) {
    userRoleName
  }
}
    `;

export function useGetUserRoleQuery(options: Omit<Urql.UseQueryArgs<GetUserRoleQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserRoleQuery>({ query: GetUserRoleDocument, ...options });
};