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
    "\n  mutation addToPlaylist($id: Float!, $trackId: Float!) {\n    addToPlaylist(id: $id, trackId: $trackId) {\n      id\n      name\n      tracks {\n        id\n        name\n      }\n    }\n  }\n": types.AddToPlaylistDocument,
    "\n  mutation createPayment($type: String!, $id: Float!) {\n    createPayment(type: $type, id: $id) {\n      url\n    }\n  }\n": types.CreatePaymentDocument,
    "\n  mutation createPlaylist($id: Float!) {\n    createPlaylist(id: $id) {\n      id\n      name\n      createdAt\n      slug\n      image\n      tracks {\n        id\n        file\n        name\n        image\n        artistId\n        artist {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.CreatePlaylistDocument,
    "\n  mutation createTrack($id: Float!, $dto: TrackDto!) {\n    createTrack(id: $id, dto: $dto) {\n      id\n      file\n      name\n      slug\n      image\n    }\n  }\n": types.CreateTrackDocument,
    "\n  mutation deletePlaylist($id: Float!, $playlistId: Float!) {\n    deletePlaylist(id: $id, playlistId: $playlistId)\n  }\n": types.DeletePlaylistDocument,
    "\n  mutation deleteProfile($id: Float!) {\n    deleteProfile(id: $id) {\n      id\n    }\n  }\n": types.DeleteProfileDocument,
    "\n  mutation getNewTokens($refreshToken: String!) {\n    getNewTokens(refreshToken: $refreshToken) {\n      accessToken\n      refreshToken\n      user {\n        id\n        name\n        email\n        role\n      }\n    }\n  }\n": types.GetNewTokensDocument,
    "\n  mutation login($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      user {\n        id\n        email\n        role\n        name\n      }\n      accessToken\n      refreshToken\n    }\n  }\n": types.LoginDocument,
    "\n  mutation register($email: String!, $name: String!, $password: String!) {\n    register(registerInput: { email: $email, name: $name, password: $password }) {\n      user {\n        id\n        email\n        role\n        name\n      }\n      accessToken\n      refreshToken\n    }\n  }\n": types.RegisterDocument,
    "\n  mutation toggleFavoriteTrack($id: Float!, $trackId: Float!) {\n    toggleFavoriteTrack(id: $id, trackId: $trackId) {\n      likedTracks {\n        id\n        name\n      }\n    }\n  }\n": types.ToggleFavoriteTrackDocument,
    "\n  mutation updatePlaylist($id: Float!, $dto: UpdatePlaylistDto!) {\n    updatePlaylist(id: $id, dto: $dto) {\n      name\n      slug\n      image\n    }\n  }\n": types.UpdatePlaylistDocument,
    "\n  mutation updateProfile($id: Float!, $dto: UserDto!) {\n    updateProfile(id: $id, dto: $dto) {\n      id\n      name\n      image\n      role\n      password\n    }\n  }\n": types.UpdateProfileDocument,
    "\n  mutation uploadMediaFile($file: Upload) {\n    uploadMediaFile(file: $file) {\n      url\n      name\n    }\n  }\n": types.UploadMediaFileDocument,
    "\n  query getPlaylistBySlug($slug: String!) {\n    getPlaylistBySlug(slug: $slug) {\n      id\n      slug\n      image\n      tracks {\n        name\n        slug\n        image\n        file\n        id\n        artist {\n          name\n        }\n      }\n      name\n      userId\n      user {\n        id\n        name\n      }\n    }\n  }\n": types.GetPlaylistBySlugDocument,
    "\n  query getProfile($id: Float!) {\n    getProfile(id: $id) {\n      id\n      email\n      name\n      image\n      country\n      login\n      role\n      tracks {\n        id\n        name\n        slug\n        image\n        file\n      }\n      likedTracks {\n        id\n        file\n        image\n        name\n        slug\n        artistId\n        artist {\n          name\n        }\n      }\n      premium {\n        expiration\n        price\n        image\n        type\n      }\n      favorites {\n        playlist {\n          id\n          name\n          image\n          slug\n          userId\n          user {\n            id\n            name\n          }\n          tracks {\n            id\n            file\n            image\n            name\n            slug\n            artistId\n            artist {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetProfileDocument,
    "\n  query getSearchQuery($searchTerm: String, $categoryId: String) {\n    getSearchQuery(query: { searchTerm: $searchTerm, categoryId: $categoryId }) {\n      tracks {\n        id\n        image\n        name\n        file\n        artist {\n          name\n        }\n      }\n      albums {\n        id\n        image\n        name\n      }\n    }\n  }\n": types.GetSearchQueryDocument,
    "\n  query getTrackById($id: Float!) {\n    getTrackById(id: $id) {\n      id\n      file\n      name\n      slug\n      image\n      artistId\n      artist {\n        name\n      }\n    }\n  }\n": types.GetTrackByIdDocument,
    "\n  query getTrackBySlug($slug: String!) {\n    getTrackBySlug(slug: $slug) {\n      id\n      releaseDate\n      file\n      name\n      slug\n      image\n      artistId\n      artist {\n        name\n      }\n    }\n  }\n": types.GetTrackBySlugDocument,
    "\n  query getAllTracks($searchTerm: String, $categoryId: String) {\n    getAllTracks(query: { searchTerm: $searchTerm, categoryId: $categoryId }) {\n      id\n      file\n      name\n      slug\n      image\n      artistId\n      artist {\n        name\n      }\n    }\n  }\n": types.GetAllTracksDocument,
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
export function graphql(source: "\n  mutation addToPlaylist($id: Float!, $trackId: Float!) {\n    addToPlaylist(id: $id, trackId: $trackId) {\n      id\n      name\n      tracks {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation addToPlaylist($id: Float!, $trackId: Float!) {\n    addToPlaylist(id: $id, trackId: $trackId) {\n      id\n      name\n      tracks {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createPayment($type: String!, $id: Float!) {\n    createPayment(type: $type, id: $id) {\n      url\n    }\n  }\n"): (typeof documents)["\n  mutation createPayment($type: String!, $id: Float!) {\n    createPayment(type: $type, id: $id) {\n      url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createPlaylist($id: Float!) {\n    createPlaylist(id: $id) {\n      id\n      name\n      createdAt\n      slug\n      image\n      tracks {\n        id\n        file\n        name\n        image\n        artistId\n        artist {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createPlaylist($id: Float!) {\n    createPlaylist(id: $id) {\n      id\n      name\n      createdAt\n      slug\n      image\n      tracks {\n        id\n        file\n        name\n        image\n        artistId\n        artist {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createTrack($id: Float!, $dto: TrackDto!) {\n    createTrack(id: $id, dto: $dto) {\n      id\n      file\n      name\n      slug\n      image\n    }\n  }\n"): (typeof documents)["\n  mutation createTrack($id: Float!, $dto: TrackDto!) {\n    createTrack(id: $id, dto: $dto) {\n      id\n      file\n      name\n      slug\n      image\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deletePlaylist($id: Float!, $playlistId: Float!) {\n    deletePlaylist(id: $id, playlistId: $playlistId)\n  }\n"): (typeof documents)["\n  mutation deletePlaylist($id: Float!, $playlistId: Float!) {\n    deletePlaylist(id: $id, playlistId: $playlistId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteProfile($id: Float!) {\n    deleteProfile(id: $id) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation deleteProfile($id: Float!) {\n    deleteProfile(id: $id) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation getNewTokens($refreshToken: String!) {\n    getNewTokens(refreshToken: $refreshToken) {\n      accessToken\n      refreshToken\n      user {\n        id\n        name\n        email\n        role\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation getNewTokens($refreshToken: String!) {\n    getNewTokens(refreshToken: $refreshToken) {\n      accessToken\n      refreshToken\n      user {\n        id\n        name\n        email\n        role\n      }\n    }\n  }\n"];
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
export function graphql(source: "\n  mutation toggleFavoriteTrack($id: Float!, $trackId: Float!) {\n    toggleFavoriteTrack(id: $id, trackId: $trackId) {\n      likedTracks {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation toggleFavoriteTrack($id: Float!, $trackId: Float!) {\n    toggleFavoriteTrack(id: $id, trackId: $trackId) {\n      likedTracks {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updatePlaylist($id: Float!, $dto: UpdatePlaylistDto!) {\n    updatePlaylist(id: $id, dto: $dto) {\n      name\n      slug\n      image\n    }\n  }\n"): (typeof documents)["\n  mutation updatePlaylist($id: Float!, $dto: UpdatePlaylistDto!) {\n    updatePlaylist(id: $id, dto: $dto) {\n      name\n      slug\n      image\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateProfile($id: Float!, $dto: UserDto!) {\n    updateProfile(id: $id, dto: $dto) {\n      id\n      name\n      image\n      role\n      password\n    }\n  }\n"): (typeof documents)["\n  mutation updateProfile($id: Float!, $dto: UserDto!) {\n    updateProfile(id: $id, dto: $dto) {\n      id\n      name\n      image\n      role\n      password\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation uploadMediaFile($file: Upload) {\n    uploadMediaFile(file: $file) {\n      url\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation uploadMediaFile($file: Upload) {\n    uploadMediaFile(file: $file) {\n      url\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPlaylistBySlug($slug: String!) {\n    getPlaylistBySlug(slug: $slug) {\n      id\n      slug\n      image\n      tracks {\n        name\n        slug\n        image\n        file\n        id\n        artist {\n          name\n        }\n      }\n      name\n      userId\n      user {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPlaylistBySlug($slug: String!) {\n    getPlaylistBySlug(slug: $slug) {\n      id\n      slug\n      image\n      tracks {\n        name\n        slug\n        image\n        file\n        id\n        artist {\n          name\n        }\n      }\n      name\n      userId\n      user {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getProfile($id: Float!) {\n    getProfile(id: $id) {\n      id\n      email\n      name\n      image\n      country\n      login\n      role\n      tracks {\n        id\n        name\n        slug\n        image\n        file\n      }\n      likedTracks {\n        id\n        file\n        image\n        name\n        slug\n        artistId\n        artist {\n          name\n        }\n      }\n      premium {\n        expiration\n        price\n        image\n        type\n      }\n      favorites {\n        playlist {\n          id\n          name\n          image\n          slug\n          userId\n          user {\n            id\n            name\n          }\n          tracks {\n            id\n            file\n            image\n            name\n            slug\n            artistId\n            artist {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getProfile($id: Float!) {\n    getProfile(id: $id) {\n      id\n      email\n      name\n      image\n      country\n      login\n      role\n      tracks {\n        id\n        name\n        slug\n        image\n        file\n      }\n      likedTracks {\n        id\n        file\n        image\n        name\n        slug\n        artistId\n        artist {\n          name\n        }\n      }\n      premium {\n        expiration\n        price\n        image\n        type\n      }\n      favorites {\n        playlist {\n          id\n          name\n          image\n          slug\n          userId\n          user {\n            id\n            name\n          }\n          tracks {\n            id\n            file\n            image\n            name\n            slug\n            artistId\n            artist {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getSearchQuery($searchTerm: String, $categoryId: String) {\n    getSearchQuery(query: { searchTerm: $searchTerm, categoryId: $categoryId }) {\n      tracks {\n        id\n        image\n        name\n        file\n        artist {\n          name\n        }\n      }\n      albums {\n        id\n        image\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query getSearchQuery($searchTerm: String, $categoryId: String) {\n    getSearchQuery(query: { searchTerm: $searchTerm, categoryId: $categoryId }) {\n      tracks {\n        id\n        image\n        name\n        file\n        artist {\n          name\n        }\n      }\n      albums {\n        id\n        image\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getTrackById($id: Float!) {\n    getTrackById(id: $id) {\n      id\n      file\n      name\n      slug\n      image\n      artistId\n      artist {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query getTrackById($id: Float!) {\n    getTrackById(id: $id) {\n      id\n      file\n      name\n      slug\n      image\n      artistId\n      artist {\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getTrackBySlug($slug: String!) {\n    getTrackBySlug(slug: $slug) {\n      id\n      releaseDate\n      file\n      name\n      slug\n      image\n      artistId\n      artist {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query getTrackBySlug($slug: String!) {\n    getTrackBySlug(slug: $slug) {\n      id\n      releaseDate\n      file\n      name\n      slug\n      image\n      artistId\n      artist {\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAllTracks($searchTerm: String, $categoryId: String) {\n    getAllTracks(query: { searchTerm: $searchTerm, categoryId: $categoryId }) {\n      id\n      file\n      name\n      slug\n      image\n      artistId\n      artist {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAllTracks($searchTerm: String, $categoryId: String) {\n    getAllTracks(query: { searchTerm: $searchTerm, categoryId: $categoryId }) {\n      id\n      file\n      name\n      slug\n      image\n      artistId\n      artist {\n        name\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;