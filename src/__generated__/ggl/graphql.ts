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

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createPlaylist: Playlist;
  deleteCategory: Category;
  deletePlaylist: Playlist;
  deleteProfile: User;
  getTokens: AuthResponse;
  login: AuthResponse;
  register: AuthResponse;
  toggleFavorite: User;
  updateCategory: Category;
  updateProfile: User;
};


export type MutationCreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput;
};


export type MutationCreatePlaylistArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePlaylistArgs = {
  id: Scalars['String']['input'];
  playlistId: Scalars['String']['input'];
};


export type MutationDeleteProfileArgs = {
  id: Scalars['String']['input'];
};


export type MutationGetTokensArgs = {
  authInput: TokensDto;
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


export type MutationUpdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput;
};


export type MutationUpdateProfileArgs = {
  dto: UserDto;
  id: Scalars['Float']['input'];
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
  getSearchQuery: SearchResult;
  getTrackById: Track;
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
  value: Scalars['Float']['output'];
};

export type TokensDto = {
  accessToken: Scalars['String']['input'];
  refreshToken: Scalars['String']['input'];
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
};

export type UpdateCategoryInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  favorites?: Maybe<Array<Favorite>>;
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  login: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  premium?: Maybe<Premium>;
  role: UserRole;
};

export type UserDto = {
  email: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export enum UserRole {
  Admin = 'ADMIN',
  Developer = 'DEVELOPER',
  Moderator = 'MODERATOR',
  Support = 'SUPPORT',
  User = 'USER'
}

export type CreatePlaylistMutationVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type CreatePlaylistMutation = { __typename?: 'Mutation', createPlaylist: { __typename?: 'Playlist', id: number, name: string, createdAt: string, slug: string, image: string, tracks?: Array<{ __typename?: 'Track', id: number, file: string, name: string, image: string, artistId: number, artist: { __typename?: 'User', id: number, name: string } }> | null } };

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

export type GetPlaylistBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetPlaylistBySlugQuery = { __typename?: 'Query', getPlaylistBySlug: { __typename?: 'Playlist', id: number, slug: string, image: string, name: string, tracks?: Array<{ __typename?: 'Track', name: string, image: string, file: string, id: number, artist: { __typename?: 'User', name: string } }> | null, user?: { __typename?: 'User', name: string } | null } };

export type GetProfileQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type GetProfileQuery = { __typename?: 'Query', getProfile: { __typename?: 'User', id: number, email: string, name: string, image: string, country?: string | null, login: string, role: UserRole, premium?: { __typename?: 'Premium', expiration?: string | null, price: string, image: string, type: EnumUserPremium } | null, favorites?: Array<{ __typename?: 'Favorite', playlist: { __typename?: 'Playlist', id: number, name: string, image: string, slug: string, tracks?: Array<{ __typename?: 'Track', id: number, file: string, image: string, name: string, artist: { __typename?: 'User', name: string } }> | null } }> | null } };

export type GetSearchQueryQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetSearchQueryQuery = { __typename?: 'Query', getSearchQuery: { __typename?: 'SearchResult', tracks: Array<{ __typename?: 'Track', id: number, image: string, name: string, file: string, artist: { __typename?: 'User', name: string } }>, albums: Array<{ __typename?: 'Album', id: number, image: string, name: string }> } };

export type GetTrackByIdQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type GetTrackByIdQuery = { __typename?: 'Query', getTrackById: { __typename?: 'Track', id: number, file: string, name: string, image: string, artistId: number, artist: { __typename?: 'User', name: string } } };

export type GetAllTracksQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllTracksQuery = { __typename?: 'Query', getAllTracks: Array<{ __typename?: 'Track', id: number, file: string, name: string, image: string, artistId: number, artist: { __typename?: 'User', name: string } }> };


export const CreatePlaylistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPlaylist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPlaylist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"tracks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"artistId"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreatePlaylistMutation, CreatePlaylistMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"registerInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const GetPlaylistBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPlaylistBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPlaylistBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"tracks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetPlaylistBySlugQuery, GetPlaylistBySlugQueryVariables>;
export const GetProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"premium"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"expiration"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"favorites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playlist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"tracks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProfileQuery, GetProfileQueryVariables>;
export const GetSearchQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSearchQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSearchQuery"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"searchTerm"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tracks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"albums"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetSearchQueryQuery, GetSearchQueryQueryVariables>;
export const GetTrackByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTrackById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTrackById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"artistId"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetTrackByIdQuery, GetTrackByIdQueryVariables>;
export const GetAllTracksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllTracks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllTracks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"searchTerm"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"artistId"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllTracksQuery, GetAllTracksQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
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

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createPlaylist: Playlist;
  deleteCategory: Category;
  deletePlaylist: Playlist;
  deleteProfile: User;
  getTokens: AuthResponse;
  login: AuthResponse;
  register: AuthResponse;
  toggleFavorite: User;
  updateCategory: Category;
  updateProfile: User;
};


export type MutationCreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput;
};


export type MutationCreatePlaylistArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePlaylistArgs = {
  id: Scalars['String']['input'];
  playlistId: Scalars['String']['input'];
};


export type MutationDeleteProfileArgs = {
  id: Scalars['String']['input'];
};


export type MutationGetTokensArgs = {
  authInput: TokensDto;
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


export type MutationUpdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput;
};


export type MutationUpdateProfileArgs = {
  dto: UserDto;
  id: Scalars['Float']['input'];
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
  getSearchQuery: SearchResult;
  getTrackById: Track;
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
  value: Scalars['Float']['output'];
};

export type TokensDto = {
  accessToken: Scalars['String']['input'];
  refreshToken: Scalars['String']['input'];
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
};

export type UpdateCategoryInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  favorites?: Maybe<Array<Favorite>>;
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  login: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  premium?: Maybe<Premium>;
  role: UserRole;
};

export type UserDto = {
  email: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export enum UserRole {
  Admin = 'ADMIN',
  Developer = 'DEVELOPER',
  Moderator = 'MODERATOR',
  Support = 'SUPPORT',
  User = 'USER'
}

export type CreatePlaylistMutationVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type CreatePlaylistMutation = { __typename?: 'Mutation', createPlaylist: { __typename?: 'Playlist', id: number, name: string, createdAt: string, slug: string, image: string, tracks?: Array<{ __typename?: 'Track', id: number, file: string, name: string, image: string, artistId: number, artist: { __typename?: 'User', id: number, name: string } }> | null } };

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

export type GetPlaylistBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetPlaylistBySlugQuery = { __typename?: 'Query', getPlaylistBySlug: { __typename?: 'Playlist', id: number, slug: string, image: string, name: string, tracks?: Array<{ __typename?: 'Track', name: string, image: string, file: string, id: number, artist: { __typename?: 'User', name: string } }> | null, user?: { __typename?: 'User', name: string } | null } };

export type GetProfileQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type GetProfileQuery = { __typename?: 'Query', getProfile: { __typename?: 'User', id: number, email: string, name: string, image: string, country?: string | null, login: string, role: UserRole, premium?: { __typename?: 'Premium', expiration?: string | null, price: string, image: string, type: EnumUserPremium } | null, favorites?: Array<{ __typename?: 'Favorite', playlist: { __typename?: 'Playlist', id: number, name: string, image: string, slug: string, tracks?: Array<{ __typename?: 'Track', id: number, file: string, image: string, name: string, artist: { __typename?: 'User', name: string } }> | null } }> | null } };

export type GetSearchQueryQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetSearchQueryQuery = { __typename?: 'Query', getSearchQuery: { __typename?: 'SearchResult', tracks: Array<{ __typename?: 'Track', id: number, image: string, name: string, file: string, artist: { __typename?: 'User', name: string } }>, albums: Array<{ __typename?: 'Album', id: number, image: string, name: string }> } };

export type GetTrackByIdQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type GetTrackByIdQuery = { __typename?: 'Query', getTrackById: { __typename?: 'Track', id: number, file: string, name: string, image: string, artistId: number, artist: { __typename?: 'User', name: string } } };

export type GetAllTracksQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllTracksQuery = { __typename?: 'Query', getAllTracks: Array<{ __typename?: 'Track', id: number, file: string, name: string, image: string, artistId: number, artist: { __typename?: 'User', name: string } }> };


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
export const GetPlaylistBySlugDocument = gql`
    query getPlaylistBySlug($slug: String!) {
  getPlaylistBySlug(slug: $slug) {
    id
    slug
    image
    tracks {
      name
      image
      file
      id
      artist {
        name
      }
    }
    name
    user {
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
        tracks {
          id
          file
          image
          name
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
export const GetAllTracksDocument = gql`
    query getAllTracks($searchTerm: String, $categoryId: String) {
  getAllTracks(query: {searchTerm: $searchTerm, categoryId: $categoryId}) {
    id
    file
    name
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