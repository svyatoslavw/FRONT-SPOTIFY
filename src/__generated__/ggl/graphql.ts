/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Album = {
  __typename?: 'Album';
  category: Category;
  categoryId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  releaseDate: Scalars['String']['output'];
  tracks: Array<Track>;
};

export type AuthDto = {
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  user: User;
};

export type Category = {
  __typename?: 'Category';
  albums: Array<Album>;
  createdAt: Scalars['String']['output'];
  exampleField: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  tracks: Array<Track>;
};

export type CreateCategoryInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export enum EnumUserPremium {
  Duo = 'DUO',
  Family = 'FAMILY',
  Individual = 'INDIVIDUAL',
  Nonepremium = 'NONEPREMIUM',
  Student = 'STUDENT'
}

export type Favorite = {
  __typename?: 'Favorite';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  playlist: Playlist;
  playlistId: Scalars['Int']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type MediaResponse = {
  __typename?: 'MediaResponse';
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addToPlaylist: Playlist;
  createCategory: Category;
  createPayment: PremiumResponse;
  createPlaylist: Playlist;
  createTrack: Track;
  deleteCategory: Category;
  deletePlaylist?: Maybe<Scalars['String']['output']>;
  deleteProfile: User;
  getNewTokens: AuthResponse;
  login: AuthResponse;
  register: AuthResponse;
  toggleFavorite: User;
  toggleFavoriteTrack: User;
  updateCategory: Category;
  updatePlaylist?: Maybe<Playlist>;
  updateProfile: User;
  uploadMediaFile: MediaResponse;
};


export type MutationAddToPlaylistArgs = {
  id: Scalars['Float']['input'];
  trackId: Scalars['Float']['input'];
};


export type MutationCreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput;
};


export type MutationCreatePaymentArgs = {
  id: Scalars['Float']['input'];
  type: Scalars['String']['input'];
};


export type MutationCreatePlaylistArgs = {
  id: Scalars['Float']['input'];
};


export type MutationCreateTrackArgs = {
  dto: TrackDto;
  id: Scalars['Float']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePlaylistArgs = {
  id: Scalars['Float']['input'];
  playlistId: Scalars['Float']['input'];
};


export type MutationDeleteProfileArgs = {
  id: Scalars['Float']['input'];
};


export type MutationGetNewTokensArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  loginInput: AuthDto;
};


export type MutationRegisterArgs = {
  registerInput: AuthDto;
};


export type MutationToggleFavoriteArgs = {
  id: Scalars['Float']['input'];
  playlistId: Scalars['String']['input'];
};


export type MutationToggleFavoriteTrackArgs = {
  id: Scalars['Float']['input'];
  trackId: Scalars['Float']['input'];
};


export type MutationUpdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput;
};


export type MutationUpdatePlaylistArgs = {
  dto: UpdatePlaylistDto;
  id: Scalars['Float']['input'];
};


export type MutationUpdateProfileArgs = {
  dto: UserDto;
  id: Scalars['Float']['input'];
};


export type MutationUploadMediaFileArgs = {
  file?: InputMaybe<Scalars['Upload']['input']>;
};

export type Playlist = {
  __typename?: 'Playlist';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  tracks?: Maybe<Array<Track>>;
  user?: Maybe<User>;
  userId: Scalars['Float']['output'];
};

export type Premium = {
  __typename?: 'Premium';
  createdAt: Scalars['String']['output'];
  expiration?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  price: Scalars['String']['output'];
  type: EnumUserPremium;
  user: User;
  userId: Scalars['Float']['output'];
};

export type PremiumResponse = {
  __typename?: 'PremiumResponse';
  url: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllAlbum: Array<Album>;
  getAllCategory: Array<Category>;
  getAllPlaylist: Array<Playlist>;
  getAllTracks: Array<Track>;
  getAllUsers: Array<User>;
  getCategoryById: Category;
  getHomeTracks: Array<Track>;
  getMainStatistics: Array<StatisticsResponse>;
  getPlaylistById: Playlist;
  getPlaylistBySlug: Playlist;
  getProfile: User;
  getProfileByToken: User;
  getSearchQuery: SearchResult;
  getTrackById: Track;
  getTrackBySlug: Track;
};


export type QueryGetAllTracksArgs = {
  query: SearchInput;
};


export type QueryGetCategoryByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetPlaylistByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetPlaylistBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetProfileArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetSearchQueryArgs = {
  query: SearchInput;
};


export type QueryGetTrackByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetTrackBySlugArgs = {
  slug: Scalars['String']['input'];
};

export type SearchInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
};

export type SearchResult = {
  __typename?: 'SearchResult';
  albums: Array<Album>;
  tracks: Array<Track>;
};

export type StatisticsResponse = {
  __typename?: 'StatisticsResponse';
  name: Scalars['String']['output'];
  value?: Maybe<Scalars['Float']['output']>;
};

export type Track = {
  __typename?: 'Track';
  album: Scalars['String']['output'];
  albumId: Array<Album>;
  artist: User;
  artistId: Scalars['Int']['output'];
  category: Category;
  categoryId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  file: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  releaseDate: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type TrackDto = {
  file: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UpdateCategoryInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdatePlaylistDto = {
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  favorites?: Maybe<Array<Favorite>>;
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  likedTracks?: Maybe<Array<Track>>;
  login: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  premium?: Maybe<Premium>;
  role: UserRole;
  tracks?: Maybe<Array<Track>>;
};

export type UserDto = {
  email?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export enum UserRole {
  Admin = 'ADMIN',
  Artist = 'ARTIST',
  Developer = 'DEVELOPER',
  Moderator = 'MODERATOR',
  User = 'USER'
}

export type AddToPlaylistMutationVariables = Exact<{
  id: Scalars['Float']['input'];
  trackId: Scalars['Float']['input'];
}>;


export type AddToPlaylistMutation = { __typename?: 'Mutation', addToPlaylist: { __typename?: 'Playlist', id: number, name: string, tracks?: Array<{ __typename?: 'Track', id: number, name: string }> | null } };

export type CreatePaymentMutationVariables = Exact<{
  type: Scalars['String']['input'];
  id: Scalars['Float']['input'];
}>;


export type CreatePaymentMutation = { __typename?: 'Mutation', createPayment: { __typename?: 'PremiumResponse', url: string } };

export type CreatePlaylistMutationVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type CreatePlaylistMutation = { __typename?: 'Mutation', createPlaylist: { __typename?: 'Playlist', id: number, name: string, createdAt: string, slug: string, image: string, tracks?: Array<{ __typename?: 'Track', id: number, file: string, name: string, image: string, artistId: number, artist: { __typename?: 'User', id: number, name: string } }> | null } };

export type CreateTrackMutationVariables = Exact<{
  id: Scalars['Float']['input'];
  dto: TrackDto;
}>;


export type CreateTrackMutation = { __typename?: 'Mutation', createTrack: { __typename?: 'Track', id: number, file: string, name: string, slug: string, image: string } };

export type DeletePlaylistMutationVariables = Exact<{
  id: Scalars['Float']['input'];
  playlistId: Scalars['Float']['input'];
}>;


export type DeletePlaylistMutation = { __typename?: 'Mutation', deletePlaylist?: string | null };

export type DeleteProfileMutationVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type DeleteProfileMutation = { __typename?: 'Mutation', deleteProfile: { __typename?: 'User', id: number } };

export type GetNewTokensMutationVariables = Exact<{
  refreshToken: Scalars['String']['input'];
}>;


export type GetNewTokensMutation = { __typename?: 'Mutation', getNewTokens: { __typename?: 'AuthResponse', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: number, name: string, email: string, role: UserRole } } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: number, email: string, role: UserRole, name: string } } };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'AuthResponse', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: number, email: string, role: UserRole, name: string } } };

export type ToggleFavoriteTrackMutationVariables = Exact<{
  id: Scalars['Float']['input'];
  trackId: Scalars['Float']['input'];
}>;


export type ToggleFavoriteTrackMutation = { __typename?: 'Mutation', toggleFavoriteTrack: { __typename?: 'User', likedTracks?: Array<{ __typename?: 'Track', id: number, name: string }> | null } };

export type UpdatePlaylistMutationVariables = Exact<{
  id: Scalars['Float']['input'];
  dto: UpdatePlaylistDto;
}>;


export type UpdatePlaylistMutation = { __typename?: 'Mutation', updatePlaylist?: { __typename?: 'Playlist', name: string, slug: string, image: string } | null };

export type UpdateProfileMutationVariables = Exact<{
  id: Scalars['Float']['input'];
  dto: UserDto;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: { __typename?: 'User', id: number, name: string, image: string, role: UserRole, password: string } };

export type UploadMediaFileMutationVariables = Exact<{
  file?: InputMaybe<Scalars['Upload']['input']>;
}>;


export type UploadMediaFileMutation = { __typename?: 'Mutation', uploadMediaFile: { __typename?: 'MediaResponse', url: string, name: string } };

export type GetPlaylistBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetPlaylistBySlugQuery = { __typename?: 'Query', getPlaylistBySlug: { __typename?: 'Playlist', id: number, slug: string, image: string, name: string, userId: number, tracks?: Array<{ __typename?: 'Track', name: string, slug: string, image: string, file: string, id: number, artist: { __typename?: 'User', name: string } }> | null, user?: { __typename?: 'User', id: number, name: string } | null } };

export type GetProfileQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type GetProfileQuery = { __typename?: 'Query', getProfile: { __typename?: 'User', id: number, email: string, name: string, image: string, country?: string | null, login: string, role: UserRole, tracks?: Array<{ __typename?: 'Track', id: number, name: string, slug: string, image: string, file: string }> | null, likedTracks?: Array<{ __typename?: 'Track', id: number, file: string, image: string, name: string, slug: string, artistId: number, artist: { __typename?: 'User', name: string } }> | null, premium?: { __typename?: 'Premium', expiration?: string | null, price: string, image: string, type: EnumUserPremium } | null, favorites?: Array<{ __typename?: 'Favorite', playlist: { __typename?: 'Playlist', id: number, name: string, image: string, slug: string, userId: number, user?: { __typename?: 'User', id: number, name: string } | null, tracks?: Array<{ __typename?: 'Track', id: number, file: string, image: string, name: string, slug: string, artistId: number, artist: { __typename?: 'User', name: string } }> | null } }> | null } };

export type GetSearchQueryQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetSearchQueryQuery = { __typename?: 'Query', getSearchQuery: { __typename?: 'SearchResult', tracks: Array<{ __typename?: 'Track', id: number, image: string, name: string, file: string, artist: { __typename?: 'User', name: string } }>, albums: Array<{ __typename?: 'Album', id: number, image: string, name: string }> } };

export type GetTrackByIdQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type GetTrackByIdQuery = { __typename?: 'Query', getTrackById: { __typename?: 'Track', id: number, file: string, name: string, slug: string, image: string, artistId: number, artist: { __typename?: 'User', name: string } } };

export type GetTrackBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetTrackBySlugQuery = { __typename?: 'Query', getTrackBySlug: { __typename?: 'Track', id: number, releaseDate: string, file: string, name: string, slug: string, image: string, artistId: number, artist: { __typename?: 'User', name: string } } };

export type GetAllTracksQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllTracksQuery = { __typename?: 'Query', getAllTracks: Array<{ __typename?: 'Track', id: number, file: string, name: string, slug: string, image: string, artistId: number, artist: { __typename?: 'User', name: string } }> };


export const AddToPlaylistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addToPlaylist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"trackId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addToPlaylist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"trackId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"trackId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tracks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<AddToPlaylistMutation, AddToPlaylistMutationVariables>;
export const CreatePaymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPayment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPayment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<CreatePaymentMutation, CreatePaymentMutationVariables>;
export const CreatePlaylistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPlaylist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPlaylist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"tracks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"artistId"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreatePlaylistMutation, CreatePlaylistMutationVariables>;
export const CreateTrackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTrack"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TrackDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTrack"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"dto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<CreateTrackMutation, CreateTrackMutationVariables>;
export const DeletePlaylistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deletePlaylist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"playlistId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePlaylist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"playlistId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"playlistId"}}}]}]}}]} as unknown as DocumentNode<DeletePlaylistMutation, DeletePlaylistMutationVariables>;
export const DeleteProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteProfileMutation, DeleteProfileMutationVariables>;
export const GetNewTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"getNewTokens"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getNewTokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refreshToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]} as unknown as DocumentNode<GetNewTokensMutation, GetNewTokensMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"registerInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const ToggleFavoriteTrackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"toggleFavoriteTrack"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"trackId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleFavoriteTrack"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"trackId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"trackId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likedTracks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ToggleFavoriteTrackMutation, ToggleFavoriteTrackMutationVariables>;
export const UpdatePlaylistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePlaylist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePlaylistDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePlaylist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"dto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<UpdatePlaylistMutation, UpdatePlaylistMutationVariables>;
export const UpdateProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"dto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"password"}}]}}]}}]} as unknown as DocumentNode<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const UploadMediaFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"uploadMediaFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadMediaFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UploadMediaFileMutation, UploadMediaFileMutationVariables>;
export const GetPlaylistBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPlaylistBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPlaylistBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"tracks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetPlaylistBySlugQuery, GetPlaylistBySlugQueryVariables>;
export const GetProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"tracks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"file"}}]}},{"kind":"Field","name":{"kind":"Name","value":"likedTracks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"artistId"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"premium"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"expiration"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"favorites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playlist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tracks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"artistId"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProfileQuery, GetProfileQueryVariables>;
export const GetSearchQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSearchQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSearchQuery"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"searchTerm"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tracks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"albums"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetSearchQueryQuery, GetSearchQueryQueryVariables>;
export const GetTrackByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTrackById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTrackById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"artistId"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetTrackByIdQuery, GetTrackByIdQueryVariables>;
export const GetTrackBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTrackBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTrackBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"artistId"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetTrackBySlugQuery, GetTrackBySlugQueryVariables>;
export const GetAllTracksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllTracks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllTracks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"searchTerm"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"artistId"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllTracksQuery, GetAllTracksQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Album = {
  __typename?: 'Album';
  category: Category;
  categoryId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  releaseDate: Scalars['String']['output'];
  tracks: Array<Track>;
};

export type AuthDto = {
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  user: User;
};

export type Category = {
  __typename?: 'Category';
  albums: Array<Album>;
  createdAt: Scalars['String']['output'];
  exampleField: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  tracks: Array<Track>;
};

export type CreateCategoryInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export enum EnumUserPremium {
  Duo = 'DUO',
  Family = 'FAMILY',
  Individual = 'INDIVIDUAL',
  Nonepremium = 'NONEPREMIUM',
  Student = 'STUDENT'
}

export type Favorite = {
  __typename?: 'Favorite';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  playlist: Playlist;
  playlistId: Scalars['Int']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type MediaResponse = {
  __typename?: 'MediaResponse';
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addToPlaylist: Playlist;
  createCategory: Category;
  createPayment: PremiumResponse;
  createPlaylist: Playlist;
  createTrack: Track;
  deleteCategory: Category;
  deletePlaylist?: Maybe<Scalars['String']['output']>;
  deleteProfile: User;
  getNewTokens: AuthResponse;
  login: AuthResponse;
  register: AuthResponse;
  toggleFavorite: User;
  toggleFavoriteTrack: User;
  updateCategory: Category;
  updatePlaylist?: Maybe<Playlist>;
  updateProfile: User;
  uploadMediaFile: MediaResponse;
};


export type MutationAddToPlaylistArgs = {
  id: Scalars['Float']['input'];
  trackId: Scalars['Float']['input'];
};


export type MutationCreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput;
};


export type MutationCreatePaymentArgs = {
  id: Scalars['Float']['input'];
  type: Scalars['String']['input'];
};


export type MutationCreatePlaylistArgs = {
  id: Scalars['Float']['input'];
};


export type MutationCreateTrackArgs = {
  dto: TrackDto;
  id: Scalars['Float']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePlaylistArgs = {
  id: Scalars['Float']['input'];
  playlistId: Scalars['Float']['input'];
};


export type MutationDeleteProfileArgs = {
  id: Scalars['Float']['input'];
};


export type MutationGetNewTokensArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  loginInput: AuthDto;
};


export type MutationRegisterArgs = {
  registerInput: AuthDto;
};


export type MutationToggleFavoriteArgs = {
  id: Scalars['Float']['input'];
  playlistId: Scalars['String']['input'];
};


export type MutationToggleFavoriteTrackArgs = {
  id: Scalars['Float']['input'];
  trackId: Scalars['Float']['input'];
};


export type MutationUpdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput;
};


export type MutationUpdatePlaylistArgs = {
  dto: UpdatePlaylistDto;
  id: Scalars['Float']['input'];
};


export type MutationUpdateProfileArgs = {
  dto: UserDto;
  id: Scalars['Float']['input'];
};


export type MutationUploadMediaFileArgs = {
  file?: InputMaybe<Scalars['Upload']['input']>;
};

export type Playlist = {
  __typename?: 'Playlist';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  tracks?: Maybe<Array<Track>>;
  user?: Maybe<User>;
  userId: Scalars['Float']['output'];
};

export type Premium = {
  __typename?: 'Premium';
  createdAt: Scalars['String']['output'];
  expiration?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  price: Scalars['String']['output'];
  type: EnumUserPremium;
  user: User;
  userId: Scalars['Float']['output'];
};

export type PremiumResponse = {
  __typename?: 'PremiumResponse';
  url: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllAlbum: Array<Album>;
  getAllCategory: Array<Category>;
  getAllPlaylist: Array<Playlist>;
  getAllTracks: Array<Track>;
  getAllUsers: Array<User>;
  getCategoryById: Category;
  getHomeTracks: Array<Track>;
  getMainStatistics: Array<StatisticsResponse>;
  getPlaylistById: Playlist;
  getPlaylistBySlug: Playlist;
  getProfile: User;
  getProfileByToken: User;
  getSearchQuery: SearchResult;
  getTrackById: Track;
  getTrackBySlug: Track;
};


export type QueryGetAllTracksArgs = {
  query: SearchInput;
};


export type QueryGetCategoryByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetPlaylistByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetPlaylistBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetProfileArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetSearchQueryArgs = {
  query: SearchInput;
};


export type QueryGetTrackByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetTrackBySlugArgs = {
  slug: Scalars['String']['input'];
};

export type SearchInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
};

export type SearchResult = {
  __typename?: 'SearchResult';
  albums: Array<Album>;
  tracks: Array<Track>;
};

export type StatisticsResponse = {
  __typename?: 'StatisticsResponse';
  name: Scalars['String']['output'];
  value?: Maybe<Scalars['Float']['output']>;
};

export type Track = {
  __typename?: 'Track';
  album: Scalars['String']['output'];
  albumId: Array<Album>;
  artist: User;
  artistId: Scalars['Int']['output'];
  category: Category;
  categoryId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  file: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  releaseDate: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type TrackDto = {
  file: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UpdateCategoryInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdatePlaylistDto = {
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  favorites?: Maybe<Array<Favorite>>;
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  likedTracks?: Maybe<Array<Track>>;
  login: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  premium?: Maybe<Premium>;
  role: UserRole;
  tracks?: Maybe<Array<Track>>;
};

export type UserDto = {
  email?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export enum UserRole {
  Admin = 'ADMIN',
  Artist = 'ARTIST',
  Developer = 'DEVELOPER',
  Moderator = 'MODERATOR',
  User = 'USER'
}

export type AddToPlaylistMutationVariables = Exact<{
  id: Scalars['Float']['input'];
  trackId: Scalars['Float']['input'];
}>;


export type AddToPlaylistMutation = { __typename?: 'Mutation', addToPlaylist: { __typename?: 'Playlist', id: number, name: string, tracks?: Array<{ __typename?: 'Track', id: number, name: string }> | null } };

export type CreatePaymentMutationVariables = Exact<{
  type: Scalars['String']['input'];
  id: Scalars['Float']['input'];
}>;


export type CreatePaymentMutation = { __typename?: 'Mutation', createPayment: { __typename?: 'PremiumResponse', url: string } };

export type CreatePlaylistMutationVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type CreatePlaylistMutation = { __typename?: 'Mutation', createPlaylist: { __typename?: 'Playlist', id: number, name: string, createdAt: string, slug: string, image: string, tracks?: Array<{ __typename?: 'Track', id: number, file: string, name: string, image: string, artistId: number, artist: { __typename?: 'User', id: number, name: string } }> | null } };

export type CreateTrackMutationVariables = Exact<{
  id: Scalars['Float']['input'];
  dto: TrackDto;
}>;


export type CreateTrackMutation = { __typename?: 'Mutation', createTrack: { __typename?: 'Track', id: number, file: string, name: string, slug: string, image: string } };

export type DeletePlaylistMutationVariables = Exact<{
  id: Scalars['Float']['input'];
  playlistId: Scalars['Float']['input'];
}>;


export type DeletePlaylistMutation = { __typename?: 'Mutation', deletePlaylist?: string | null };

export type DeleteProfileMutationVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type DeleteProfileMutation = { __typename?: 'Mutation', deleteProfile: { __typename?: 'User', id: number } };

export type GetNewTokensMutationVariables = Exact<{
  refreshToken: Scalars['String']['input'];
}>;


export type GetNewTokensMutation = { __typename?: 'Mutation', getNewTokens: { __typename?: 'AuthResponse', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: number, name: string, email: string, role: UserRole } } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: number, email: string, role: UserRole, name: string } } };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'AuthResponse', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: number, email: string, role: UserRole, name: string } } };

export type ToggleFavoriteTrackMutationVariables = Exact<{
  id: Scalars['Float']['input'];
  trackId: Scalars['Float']['input'];
}>;


export type ToggleFavoriteTrackMutation = { __typename?: 'Mutation', toggleFavoriteTrack: { __typename?: 'User', likedTracks?: Array<{ __typename?: 'Track', id: number, name: string }> | null } };

export type UpdatePlaylistMutationVariables = Exact<{
  id: Scalars['Float']['input'];
  dto: UpdatePlaylistDto;
}>;


export type UpdatePlaylistMutation = { __typename?: 'Mutation', updatePlaylist?: { __typename?: 'Playlist', name: string, slug: string, image: string } | null };

export type UpdateProfileMutationVariables = Exact<{
  id: Scalars['Float']['input'];
  dto: UserDto;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: { __typename?: 'User', id: number, name: string, image: string, role: UserRole, password: string } };

export type UploadMediaFileMutationVariables = Exact<{
  file?: InputMaybe<Scalars['Upload']['input']>;
}>;


export type UploadMediaFileMutation = { __typename?: 'Mutation', uploadMediaFile: { __typename?: 'MediaResponse', url: string, name: string } };

export type GetPlaylistBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetPlaylistBySlugQuery = { __typename?: 'Query', getPlaylistBySlug: { __typename?: 'Playlist', id: number, slug: string, image: string, name: string, userId: number, tracks?: Array<{ __typename?: 'Track', name: string, slug: string, image: string, file: string, id: number, artist: { __typename?: 'User', name: string } }> | null, user?: { __typename?: 'User', id: number, name: string } | null } };

export type GetProfileQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type GetProfileQuery = { __typename?: 'Query', getProfile: { __typename?: 'User', id: number, email: string, name: string, image: string, country?: string | null, login: string, role: UserRole, tracks?: Array<{ __typename?: 'Track', id: number, name: string, slug: string, image: string, file: string }> | null, likedTracks?: Array<{ __typename?: 'Track', id: number, file: string, image: string, name: string, slug: string, artistId: number, artist: { __typename?: 'User', name: string } }> | null, premium?: { __typename?: 'Premium', expiration?: string | null, price: string, image: string, type: EnumUserPremium } | null, favorites?: Array<{ __typename?: 'Favorite', playlist: { __typename?: 'Playlist', id: number, name: string, image: string, slug: string, userId: number, user?: { __typename?: 'User', id: number, name: string } | null, tracks?: Array<{ __typename?: 'Track', id: number, file: string, image: string, name: string, slug: string, artistId: number, artist: { __typename?: 'User', name: string } }> | null } }> | null } };

export type GetSearchQueryQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetSearchQueryQuery = { __typename?: 'Query', getSearchQuery: { __typename?: 'SearchResult', tracks: Array<{ __typename?: 'Track', id: number, image: string, name: string, file: string, artist: { __typename?: 'User', name: string } }>, albums: Array<{ __typename?: 'Album', id: number, image: string, name: string }> } };

export type GetTrackByIdQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type GetTrackByIdQuery = { __typename?: 'Query', getTrackById: { __typename?: 'Track', id: number, file: string, name: string, slug: string, image: string, artistId: number, artist: { __typename?: 'User', name: string } } };

export type GetTrackBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetTrackBySlugQuery = { __typename?: 'Query', getTrackBySlug: { __typename?: 'Track', id: number, releaseDate: string, file: string, name: string, slug: string, image: string, artistId: number, artist: { __typename?: 'User', name: string } } };

export type GetAllTracksQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllTracksQuery = { __typename?: 'Query', getAllTracks: Array<{ __typename?: 'Track', id: number, file: string, name: string, slug: string, image: string, artistId: number, artist: { __typename?: 'User', name: string } }> };


export const AddToPlaylistDocument = gql`
    mutation addToPlaylist($id: Float!, $trackId: Float!) {
  addToPlaylist(id: $id, trackId: $trackId) {
    id
    name
    tracks {
      id
      name
    }
  }
}
    `;
export type AddToPlaylistMutationFn = Apollo.MutationFunction<AddToPlaylistMutation, AddToPlaylistMutationVariables>;

/**
 * __useAddToPlaylistMutation__
 *
 * To run a mutation, you first call `useAddToPlaylistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToPlaylistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToPlaylistMutation, { data, loading, error }] = useAddToPlaylistMutation({
 *   variables: {
 *      id: // value for 'id'
 *      trackId: // value for 'trackId'
 *   },
 * });
 */
export function useAddToPlaylistMutation(baseOptions?: Apollo.MutationHookOptions<AddToPlaylistMutation, AddToPlaylistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddToPlaylistMutation, AddToPlaylistMutationVariables>(AddToPlaylistDocument, options);
      }
export type AddToPlaylistMutationHookResult = ReturnType<typeof useAddToPlaylistMutation>;
export type AddToPlaylistMutationResult = Apollo.MutationResult<AddToPlaylistMutation>;
export type AddToPlaylistMutationOptions = Apollo.BaseMutationOptions<AddToPlaylistMutation, AddToPlaylistMutationVariables>;
export const CreatePaymentDocument = gql`
    mutation createPayment($type: String!, $id: Float!) {
  createPayment(type: $type, id: $id) {
    url
  }
}
    `;
export type CreatePaymentMutationFn = Apollo.MutationFunction<CreatePaymentMutation, CreatePaymentMutationVariables>;

/**
 * __useCreatePaymentMutation__
 *
 * To run a mutation, you first call `useCreatePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentMutation, { data, loading, error }] = useCreatePaymentMutation({
 *   variables: {
 *      type: // value for 'type'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCreatePaymentMutation(baseOptions?: Apollo.MutationHookOptions<CreatePaymentMutation, CreatePaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePaymentMutation, CreatePaymentMutationVariables>(CreatePaymentDocument, options);
      }
export type CreatePaymentMutationHookResult = ReturnType<typeof useCreatePaymentMutation>;
export type CreatePaymentMutationResult = Apollo.MutationResult<CreatePaymentMutation>;
export type CreatePaymentMutationOptions = Apollo.BaseMutationOptions<CreatePaymentMutation, CreatePaymentMutationVariables>;
export const CreatePlaylistDocument = gql`
    mutation createPlaylist($id: Float!) {
  createPlaylist(id: $id) {
    id
    name
    createdAt
    slug
    image
    tracks {
      id
      file
      name
      image
      artistId
      artist {
        id
        name
      }
    }
  }
}
    `;
export type CreatePlaylistMutationFn = Apollo.MutationFunction<CreatePlaylistMutation, CreatePlaylistMutationVariables>;

/**
 * __useCreatePlaylistMutation__
 *
 * To run a mutation, you first call `useCreatePlaylistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlaylistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlaylistMutation, { data, loading, error }] = useCreatePlaylistMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCreatePlaylistMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlaylistMutation, CreatePlaylistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePlaylistMutation, CreatePlaylistMutationVariables>(CreatePlaylistDocument, options);
      }
export type CreatePlaylistMutationHookResult = ReturnType<typeof useCreatePlaylistMutation>;
export type CreatePlaylistMutationResult = Apollo.MutationResult<CreatePlaylistMutation>;
export type CreatePlaylistMutationOptions = Apollo.BaseMutationOptions<CreatePlaylistMutation, CreatePlaylistMutationVariables>;
export const CreateTrackDocument = gql`
    mutation createTrack($id: Float!, $dto: TrackDto!) {
  createTrack(id: $id, dto: $dto) {
    id
    file
    name
    slug
    image
  }
}
    `;
export type CreateTrackMutationFn = Apollo.MutationFunction<CreateTrackMutation, CreateTrackMutationVariables>;

/**
 * __useCreateTrackMutation__
 *
 * To run a mutation, you first call `useCreateTrackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTrackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTrackMutation, { data, loading, error }] = useCreateTrackMutation({
 *   variables: {
 *      id: // value for 'id'
 *      dto: // value for 'dto'
 *   },
 * });
 */
export function useCreateTrackMutation(baseOptions?: Apollo.MutationHookOptions<CreateTrackMutation, CreateTrackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTrackMutation, CreateTrackMutationVariables>(CreateTrackDocument, options);
      }
export type CreateTrackMutationHookResult = ReturnType<typeof useCreateTrackMutation>;
export type CreateTrackMutationResult = Apollo.MutationResult<CreateTrackMutation>;
export type CreateTrackMutationOptions = Apollo.BaseMutationOptions<CreateTrackMutation, CreateTrackMutationVariables>;
export const DeletePlaylistDocument = gql`
    mutation deletePlaylist($id: Float!, $playlistId: Float!) {
  deletePlaylist(id: $id, playlistId: $playlistId)
}
    `;
export type DeletePlaylistMutationFn = Apollo.MutationFunction<DeletePlaylistMutation, DeletePlaylistMutationVariables>;

/**
 * __useDeletePlaylistMutation__
 *
 * To run a mutation, you first call `useDeletePlaylistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePlaylistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePlaylistMutation, { data, loading, error }] = useDeletePlaylistMutation({
 *   variables: {
 *      id: // value for 'id'
 *      playlistId: // value for 'playlistId'
 *   },
 * });
 */
export function useDeletePlaylistMutation(baseOptions?: Apollo.MutationHookOptions<DeletePlaylistMutation, DeletePlaylistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePlaylistMutation, DeletePlaylistMutationVariables>(DeletePlaylistDocument, options);
      }
export type DeletePlaylistMutationHookResult = ReturnType<typeof useDeletePlaylistMutation>;
export type DeletePlaylistMutationResult = Apollo.MutationResult<DeletePlaylistMutation>;
export type DeletePlaylistMutationOptions = Apollo.BaseMutationOptions<DeletePlaylistMutation, DeletePlaylistMutationVariables>;
export const DeleteProfileDocument = gql`
    mutation deleteProfile($id: Float!) {
  deleteProfile(id: $id) {
    id
  }
}
    `;
export type DeleteProfileMutationFn = Apollo.MutationFunction<DeleteProfileMutation, DeleteProfileMutationVariables>;

/**
 * __useDeleteProfileMutation__
 *
 * To run a mutation, you first call `useDeleteProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProfileMutation, { data, loading, error }] = useDeleteProfileMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProfileMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProfileMutation, DeleteProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProfileMutation, DeleteProfileMutationVariables>(DeleteProfileDocument, options);
      }
export type DeleteProfileMutationHookResult = ReturnType<typeof useDeleteProfileMutation>;
export type DeleteProfileMutationResult = Apollo.MutationResult<DeleteProfileMutation>;
export type DeleteProfileMutationOptions = Apollo.BaseMutationOptions<DeleteProfileMutation, DeleteProfileMutationVariables>;
export const GetNewTokensDocument = gql`
    mutation getNewTokens($refreshToken: String!) {
  getNewTokens(refreshToken: $refreshToken) {
    accessToken
    refreshToken
    user {
      id
      name
      email
      role
    }
  }
}
    `;
export type GetNewTokensMutationFn = Apollo.MutationFunction<GetNewTokensMutation, GetNewTokensMutationVariables>;

/**
 * __useGetNewTokensMutation__
 *
 * To run a mutation, you first call `useGetNewTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetNewTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getNewTokensMutation, { data, loading, error }] = useGetNewTokensMutation({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useGetNewTokensMutation(baseOptions?: Apollo.MutationHookOptions<GetNewTokensMutation, GetNewTokensMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetNewTokensMutation, GetNewTokensMutationVariables>(GetNewTokensDocument, options);
      }
export type GetNewTokensMutationHookResult = ReturnType<typeof useGetNewTokensMutation>;
export type GetNewTokensMutationResult = Apollo.MutationResult<GetNewTokensMutation>;
export type GetNewTokensMutationOptions = Apollo.BaseMutationOptions<GetNewTokensMutation, GetNewTokensMutationVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(loginInput: {email: $email, password: $password}) {
    user {
      id
      email
      role
      name
    }
    accessToken
    refreshToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation register($email: String!, $name: String!, $password: String!) {
  register(registerInput: {email: $email, name: $name, password: $password}) {
    user {
      id
      email
      role
      name
    }
    accessToken
    refreshToken
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const ToggleFavoriteTrackDocument = gql`
    mutation toggleFavoriteTrack($id: Float!, $trackId: Float!) {
  toggleFavoriteTrack(id: $id, trackId: $trackId) {
    likedTracks {
      id
      name
    }
  }
}
    `;
export type ToggleFavoriteTrackMutationFn = Apollo.MutationFunction<ToggleFavoriteTrackMutation, ToggleFavoriteTrackMutationVariables>;

/**
 * __useToggleFavoriteTrackMutation__
 *
 * To run a mutation, you first call `useToggleFavoriteTrackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleFavoriteTrackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleFavoriteTrackMutation, { data, loading, error }] = useToggleFavoriteTrackMutation({
 *   variables: {
 *      id: // value for 'id'
 *      trackId: // value for 'trackId'
 *   },
 * });
 */
export function useToggleFavoriteTrackMutation(baseOptions?: Apollo.MutationHookOptions<ToggleFavoriteTrackMutation, ToggleFavoriteTrackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleFavoriteTrackMutation, ToggleFavoriteTrackMutationVariables>(ToggleFavoriteTrackDocument, options);
      }
export type ToggleFavoriteTrackMutationHookResult = ReturnType<typeof useToggleFavoriteTrackMutation>;
export type ToggleFavoriteTrackMutationResult = Apollo.MutationResult<ToggleFavoriteTrackMutation>;
export type ToggleFavoriteTrackMutationOptions = Apollo.BaseMutationOptions<ToggleFavoriteTrackMutation, ToggleFavoriteTrackMutationVariables>;
export const UpdatePlaylistDocument = gql`
    mutation updatePlaylist($id: Float!, $dto: UpdatePlaylistDto!) {
  updatePlaylist(id: $id, dto: $dto) {
    name
    slug
    image
  }
}
    `;
export type UpdatePlaylistMutationFn = Apollo.MutationFunction<UpdatePlaylistMutation, UpdatePlaylistMutationVariables>;

/**
 * __useUpdatePlaylistMutation__
 *
 * To run a mutation, you first call `useUpdatePlaylistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlaylistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlaylistMutation, { data, loading, error }] = useUpdatePlaylistMutation({
 *   variables: {
 *      id: // value for 'id'
 *      dto: // value for 'dto'
 *   },
 * });
 */
export function useUpdatePlaylistMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePlaylistMutation, UpdatePlaylistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePlaylistMutation, UpdatePlaylistMutationVariables>(UpdatePlaylistDocument, options);
      }
export type UpdatePlaylistMutationHookResult = ReturnType<typeof useUpdatePlaylistMutation>;
export type UpdatePlaylistMutationResult = Apollo.MutationResult<UpdatePlaylistMutation>;
export type UpdatePlaylistMutationOptions = Apollo.BaseMutationOptions<UpdatePlaylistMutation, UpdatePlaylistMutationVariables>;
export const UpdateProfileDocument = gql`
    mutation updateProfile($id: Float!, $dto: UserDto!) {
  updateProfile(id: $id, dto: $dto) {
    id
    name
    image
    role
    password
  }
}
    `;
export type UpdateProfileMutationFn = Apollo.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      id: // value for 'id'
 *      dto: // value for 'dto'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, options);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const UploadMediaFileDocument = gql`
    mutation uploadMediaFile($file: Upload) {
  uploadMediaFile(file: $file) {
    url
    name
  }
}
    `;
export type UploadMediaFileMutationFn = Apollo.MutationFunction<UploadMediaFileMutation, UploadMediaFileMutationVariables>;

/**
 * __useUploadMediaFileMutation__
 *
 * To run a mutation, you first call `useUploadMediaFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadMediaFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadMediaFileMutation, { data, loading, error }] = useUploadMediaFileMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadMediaFileMutation(baseOptions?: Apollo.MutationHookOptions<UploadMediaFileMutation, UploadMediaFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadMediaFileMutation, UploadMediaFileMutationVariables>(UploadMediaFileDocument, options);
      }
export type UploadMediaFileMutationHookResult = ReturnType<typeof useUploadMediaFileMutation>;
export type UploadMediaFileMutationResult = Apollo.MutationResult<UploadMediaFileMutation>;
export type UploadMediaFileMutationOptions = Apollo.BaseMutationOptions<UploadMediaFileMutation, UploadMediaFileMutationVariables>;
export const GetPlaylistBySlugDocument = gql`
    query getPlaylistBySlug($slug: String!) {
  getPlaylistBySlug(slug: $slug) {
    id
    slug
    image
    tracks {
      name
      slug
      image
      file
      id
      artist {
        name
      }
    }
    name
    userId
    user {
      id
      name
    }
  }
}
    `;

/**
 * __useGetPlaylistBySlugQuery__
 *
 * To run a query within a React component, call `useGetPlaylistBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlaylistBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlaylistBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetPlaylistBySlugQuery(baseOptions: Apollo.QueryHookOptions<GetPlaylistBySlugQuery, GetPlaylistBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlaylistBySlugQuery, GetPlaylistBySlugQueryVariables>(GetPlaylistBySlugDocument, options);
      }
export function useGetPlaylistBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlaylistBySlugQuery, GetPlaylistBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlaylistBySlugQuery, GetPlaylistBySlugQueryVariables>(GetPlaylistBySlugDocument, options);
        }
export function useGetPlaylistBySlugSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPlaylistBySlugQuery, GetPlaylistBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPlaylistBySlugQuery, GetPlaylistBySlugQueryVariables>(GetPlaylistBySlugDocument, options);
        }
export type GetPlaylistBySlugQueryHookResult = ReturnType<typeof useGetPlaylistBySlugQuery>;
export type GetPlaylistBySlugLazyQueryHookResult = ReturnType<typeof useGetPlaylistBySlugLazyQuery>;
export type GetPlaylistBySlugSuspenseQueryHookResult = ReturnType<typeof useGetPlaylistBySlugSuspenseQuery>;
export type GetPlaylistBySlugQueryResult = Apollo.QueryResult<GetPlaylistBySlugQuery, GetPlaylistBySlugQueryVariables>;
export const GetProfileDocument = gql`
    query getProfile($id: Float!) {
  getProfile(id: $id) {
    id
    email
    name
    image
    country
    login
    role
    tracks {
      id
      name
      slug
      image
      file
    }
    likedTracks {
      id
      file
      image
      name
      slug
      artistId
      artist {
        name
      }
    }
    premium {
      expiration
      price
      image
      type
    }
    favorites {
      playlist {
        id
        name
        image
        slug
        userId
        user {
          id
          name
        }
        tracks {
          id
          file
          image
          name
          slug
          artistId
          artist {
            name
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProfileQuery(baseOptions: Apollo.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
      }
export function useGetProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export function useGetProfileSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileSuspenseQueryHookResult = ReturnType<typeof useGetProfileSuspenseQuery>;
export type GetProfileQueryResult = Apollo.QueryResult<GetProfileQuery, GetProfileQueryVariables>;
export const GetSearchQueryDocument = gql`
    query getSearchQuery($searchTerm: String, $categoryId: String) {
  getSearchQuery(query: {searchTerm: $searchTerm, categoryId: $categoryId}) {
    tracks {
      id
      image
      name
      file
      artist {
        name
      }
    }
    albums {
      id
      image
      name
    }
  }
}
    `;

/**
 * __useGetSearchQueryQuery__
 *
 * To run a query within a React component, call `useGetSearchQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSearchQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSearchQueryQuery({
 *   variables: {
 *      searchTerm: // value for 'searchTerm'
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useGetSearchQueryQuery(baseOptions?: Apollo.QueryHookOptions<GetSearchQueryQuery, GetSearchQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSearchQueryQuery, GetSearchQueryQueryVariables>(GetSearchQueryDocument, options);
      }
export function useGetSearchQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSearchQueryQuery, GetSearchQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSearchQueryQuery, GetSearchQueryQueryVariables>(GetSearchQueryDocument, options);
        }
export function useGetSearchQuerySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSearchQueryQuery, GetSearchQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSearchQueryQuery, GetSearchQueryQueryVariables>(GetSearchQueryDocument, options);
        }
export type GetSearchQueryQueryHookResult = ReturnType<typeof useGetSearchQueryQuery>;
export type GetSearchQueryLazyQueryHookResult = ReturnType<typeof useGetSearchQueryLazyQuery>;
export type GetSearchQuerySuspenseQueryHookResult = ReturnType<typeof useGetSearchQuerySuspenseQuery>;
export type GetSearchQueryQueryResult = Apollo.QueryResult<GetSearchQueryQuery, GetSearchQueryQueryVariables>;
export const GetTrackByIdDocument = gql`
    query getTrackById($id: Float!) {
  getTrackById(id: $id) {
    id
    file
    name
    slug
    image
    artistId
    artist {
      name
    }
  }
}
    `;

/**
 * __useGetTrackByIdQuery__
 *
 * To run a query within a React component, call `useGetTrackByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrackByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrackByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTrackByIdQuery(baseOptions: Apollo.QueryHookOptions<GetTrackByIdQuery, GetTrackByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTrackByIdQuery, GetTrackByIdQueryVariables>(GetTrackByIdDocument, options);
      }
export function useGetTrackByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTrackByIdQuery, GetTrackByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTrackByIdQuery, GetTrackByIdQueryVariables>(GetTrackByIdDocument, options);
        }
export function useGetTrackByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTrackByIdQuery, GetTrackByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTrackByIdQuery, GetTrackByIdQueryVariables>(GetTrackByIdDocument, options);
        }
export type GetTrackByIdQueryHookResult = ReturnType<typeof useGetTrackByIdQuery>;
export type GetTrackByIdLazyQueryHookResult = ReturnType<typeof useGetTrackByIdLazyQuery>;
export type GetTrackByIdSuspenseQueryHookResult = ReturnType<typeof useGetTrackByIdSuspenseQuery>;
export type GetTrackByIdQueryResult = Apollo.QueryResult<GetTrackByIdQuery, GetTrackByIdQueryVariables>;
export const GetTrackBySlugDocument = gql`
    query getTrackBySlug($slug: String!) {
  getTrackBySlug(slug: $slug) {
    id
    releaseDate
    file
    name
    slug
    image
    artistId
    artist {
      name
    }
  }
}
    `;

/**
 * __useGetTrackBySlugQuery__
 *
 * To run a query within a React component, call `useGetTrackBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrackBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrackBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetTrackBySlugQuery(baseOptions: Apollo.QueryHookOptions<GetTrackBySlugQuery, GetTrackBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTrackBySlugQuery, GetTrackBySlugQueryVariables>(GetTrackBySlugDocument, options);
      }
export function useGetTrackBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTrackBySlugQuery, GetTrackBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTrackBySlugQuery, GetTrackBySlugQueryVariables>(GetTrackBySlugDocument, options);
        }
export function useGetTrackBySlugSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTrackBySlugQuery, GetTrackBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTrackBySlugQuery, GetTrackBySlugQueryVariables>(GetTrackBySlugDocument, options);
        }
export type GetTrackBySlugQueryHookResult = ReturnType<typeof useGetTrackBySlugQuery>;
export type GetTrackBySlugLazyQueryHookResult = ReturnType<typeof useGetTrackBySlugLazyQuery>;
export type GetTrackBySlugSuspenseQueryHookResult = ReturnType<typeof useGetTrackBySlugSuspenseQuery>;
export type GetTrackBySlugQueryResult = Apollo.QueryResult<GetTrackBySlugQuery, GetTrackBySlugQueryVariables>;
export const GetAllTracksDocument = gql`
    query getAllTracks($searchTerm: String, $categoryId: String) {
  getAllTracks(query: {searchTerm: $searchTerm, categoryId: $categoryId}) {
    id
    file
    name
    slug
    image
    artistId
    artist {
      name
    }
  }
}
    `;

/**
 * __useGetAllTracksQuery__
 *
 * To run a query within a React component, call `useGetAllTracksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTracksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTracksQuery({
 *   variables: {
 *      searchTerm: // value for 'searchTerm'
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useGetAllTracksQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTracksQuery, GetAllTracksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTracksQuery, GetAllTracksQueryVariables>(GetAllTracksDocument, options);
      }
export function useGetAllTracksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTracksQuery, GetAllTracksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTracksQuery, GetAllTracksQueryVariables>(GetAllTracksDocument, options);
        }
export function useGetAllTracksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllTracksQuery, GetAllTracksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllTracksQuery, GetAllTracksQueryVariables>(GetAllTracksDocument, options);
        }
export type GetAllTracksQueryHookResult = ReturnType<typeof useGetAllTracksQuery>;
export type GetAllTracksLazyQueryHookResult = ReturnType<typeof useGetAllTracksLazyQuery>;
export type GetAllTracksSuspenseQueryHookResult = ReturnType<typeof useGetAllTracksSuspenseQuery>;
export type GetAllTracksQueryResult = Apollo.QueryResult<GetAllTracksQuery, GetAllTracksQueryVariables>;