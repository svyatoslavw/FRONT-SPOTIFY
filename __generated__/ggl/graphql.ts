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

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createPlaylist: Playlist;
  deleteCategory: Category;
  deletePlaylist: Playlist;
  deleteProfile: User;
  getTokens: AuthResponse;
  githubLogin: AuthResponse;
  githubRedirect: AuthResponse;
  googleLogin: AuthResponse;
  googleRedirect: AuthResponse;
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
  tracks: Array<Track>;
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
  getTrackById: Track;
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


export type QueryGetTrackByIdArgs = {
  id: Scalars['String']['input'];
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
  country: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  favorites?: Maybe<Array<Playlist>>;
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  login: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
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

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: number, email: string, role: UserRole, image: string, name: string } } };

export type GetProfileQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type GetProfileQuery = { __typename?: 'Query', getProfile: { __typename?: 'User', id: number, email: string, name: string, image: string, country: string, login: string, favorites?: Array<{ __typename?: 'Playlist', id: number, createdAt: string, slug: string, name: string, image: string, tracks: Array<{ __typename?: 'Track', id: number, createdAt: string, releaseDate: string, file: string, name: string, image: string, artistId: number, artist: { __typename?: 'User', name: string, image: string } }> }> | null } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const GetProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"favorites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"tracks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"artistId"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProfileQuery, GetProfileQueryVariables>;
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

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createPlaylist: Playlist;
  deleteCategory: Category;
  deletePlaylist: Playlist;
  deleteProfile: User;
  getTokens: AuthResponse;
  githubLogin: AuthResponse;
  githubRedirect: AuthResponse;
  googleLogin: AuthResponse;
  googleRedirect: AuthResponse;
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
  tracks: Array<Track>;
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
  getTrackById: Track;
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


export type QueryGetTrackByIdArgs = {
  id: Scalars['String']['input'];
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
  country: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  favorites?: Maybe<Array<Playlist>>;
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  login: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
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

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: number, email: string, role: UserRole, image: string, name: string } } };

export type GetProfileQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type GetProfileQuery = { __typename?: 'Query', getProfile: { __typename?: 'User', id: number, email: string, name: string, image: string, country: string, login: string, favorites?: Array<{ __typename?: 'Playlist', id: number, createdAt: string, slug: string, name: string, image: string, tracks: Array<{ __typename?: 'Track', id: number, createdAt: string, releaseDate: string, file: string, name: string, image: string, artistId: number, artist: { __typename?: 'User', name: string, image: string } }> }> | null } };


export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(loginInput: {email: $email, password: $password}) {
    user {
      id
      email
      role
      image
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
export const GetProfileDocument = gql`
    query getProfile($id: Float!) {
  getProfile(id: $id) {
    id
    email
    name
    image
    country
    login
    favorites {
      id
      createdAt
      slug
      name
      image
      tracks {
        id
        createdAt
        releaseDate
        file
        name
        image
        artistId
        artist {
          name
          image
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