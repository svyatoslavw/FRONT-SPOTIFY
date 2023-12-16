/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation createPlaylist($id: Float!) {\n    createPlaylist(id: $id) {\n      id\n      name\n      createdAt\n      slug\n      image\n      tracks {\n        id\n        file\n        name\n        image\n        artistId\n        artist {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.CreatePlaylistDocument,
    "\n  mutation login($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      user {\n        id\n        email\n        role\n        name\n      }\n      accessToken\n      refreshToken\n    }\n  }\n": types.LoginDocument,
    "\n  mutation register($email: String!, $name: String!, $password: String!) {\n    register(registerInput: { email: $email, name: $name, password: $password }) {\n      user {\n        id\n        email\n        role\n        name\n      }\n      accessToken\n      refreshToken\n    }\n  }\n": types.RegisterDocument,
    "\n  query getPlaylistBySlug($slug: String!) {\n    getPlaylistBySlug(slug: $slug) {\n      id\n      slug\n      image\n      tracks {\n        name\n        image\n        file\n        id\n        artist {\n          name\n        }\n      }\n      name\n      user {\n        name\n      }\n    }\n  }\n": types.GetPlaylistBySlugDocument,
    "\n  query getProfile($id: Float!) {\n    getProfile(id: $id) {\n      id\n      email\n      name\n      image\n      country\n      login\n      role\n      premium {\n        expiration\n        price\n        image\n        type\n      }\n      favorites {\n        playlist {\n          id\n          name\n          image\n          slug\n          tracks {\n            id\n            file\n            image\n            name\n            artist {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetProfileDocument,
    "\n  query getSearchQuery($searchTerm: String, $categoryId: String) {\n    getSearchQuery(query: { searchTerm: $searchTerm, categoryId: $categoryId }) {\n      tracks {\n        id\n        image\n        name\n        file\n        artist {\n          name\n        }\n      }\n      albums {\n        id\n        image\n        name\n      }\n    }\n  }\n": types.GetSearchQueryDocument,
    "\n  query getTrackById($id: Float!) {\n    getTrackById(id: $id) {\n      id\n      file\n      name\n      image\n      artistId\n      artist {\n        name\n      }\n    }\n  }\n": types.GetTrackByIdDocument,
    "\n  query getAllTracks($searchTerm: String, $categoryId: String) {\n    getAllTracks(query: { searchTerm: $searchTerm, categoryId: $categoryId }) {\n      id\n      file\n      name\n      image\n      artistId\n      artist {\n        name\n      }\n    }\n  }\n": types.GetAllTracksDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createPlaylist($id: Float!) {\n    createPlaylist(id: $id) {\n      id\n      name\n      createdAt\n      slug\n      image\n      tracks {\n        id\n        file\n        name\n        image\n        artistId\n        artist {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createPlaylist($id: Float!) {\n    createPlaylist(id: $id) {\n      id\n      name\n      createdAt\n      slug\n      image\n      tracks {\n        id\n        file\n        name\n        image\n        artistId\n        artist {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation login($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      user {\n        id\n        email\n        role\n        name\n      }\n      accessToken\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation login($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      user {\n        id\n        email\n        role\n        name\n      }\n      accessToken\n      refreshToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation register($email: String!, $name: String!, $password: String!) {\n    register(registerInput: { email: $email, name: $name, password: $password }) {\n      user {\n        id\n        email\n        role\n        name\n      }\n      accessToken\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation register($email: String!, $name: String!, $password: String!) {\n    register(registerInput: { email: $email, name: $name, password: $password }) {\n      user {\n        id\n        email\n        role\n        name\n      }\n      accessToken\n      refreshToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPlaylistBySlug($slug: String!) {\n    getPlaylistBySlug(slug: $slug) {\n      id\n      slug\n      image\n      tracks {\n        name\n        image\n        file\n        id\n        artist {\n          name\n        }\n      }\n      name\n      user {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPlaylistBySlug($slug: String!) {\n    getPlaylistBySlug(slug: $slug) {\n      id\n      slug\n      image\n      tracks {\n        name\n        image\n        file\n        id\n        artist {\n          name\n        }\n      }\n      name\n      user {\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getProfile($id: Float!) {\n    getProfile(id: $id) {\n      id\n      email\n      name\n      image\n      country\n      login\n      role\n      premium {\n        expiration\n        price\n        image\n        type\n      }\n      favorites {\n        playlist {\n          id\n          name\n          image\n          slug\n          tracks {\n            id\n            file\n            image\n            name\n            artist {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getProfile($id: Float!) {\n    getProfile(id: $id) {\n      id\n      email\n      name\n      image\n      country\n      login\n      role\n      premium {\n        expiration\n        price\n        image\n        type\n      }\n      favorites {\n        playlist {\n          id\n          name\n          image\n          slug\n          tracks {\n            id\n            file\n            image\n            name\n            artist {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getSearchQuery($searchTerm: String, $categoryId: String) {\n    getSearchQuery(query: { searchTerm: $searchTerm, categoryId: $categoryId }) {\n      tracks {\n        id\n        image\n        name\n        file\n        artist {\n          name\n        }\n      }\n      albums {\n        id\n        image\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query getSearchQuery($searchTerm: String, $categoryId: String) {\n    getSearchQuery(query: { searchTerm: $searchTerm, categoryId: $categoryId }) {\n      tracks {\n        id\n        image\n        name\n        file\n        artist {\n          name\n        }\n      }\n      albums {\n        id\n        image\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getTrackById($id: Float!) {\n    getTrackById(id: $id) {\n      id\n      file\n      name\n      image\n      artistId\n      artist {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query getTrackById($id: Float!) {\n    getTrackById(id: $id) {\n      id\n      file\n      name\n      image\n      artistId\n      artist {\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAllTracks($searchTerm: String, $categoryId: String) {\n    getAllTracks(query: { searchTerm: $searchTerm, categoryId: $categoryId }) {\n      id\n      file\n      name\n      image\n      artistId\n      artist {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAllTracks($searchTerm: String, $categoryId: String) {\n    getAllTracks(query: { searchTerm: $searchTerm, categoryId: $categoryId }) {\n      id\n      file\n      name\n      image\n      artistId\n      artist {\n        name\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;