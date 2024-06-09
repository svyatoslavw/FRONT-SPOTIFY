import { Album, Track, User } from '@/__generated__/ggl/graphql';

export enum EnumUserRoles {
  USER = 'USER',
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
  ARTIST = 'ARTIST',
  DEVELOPER = 'DEVELOPER',
}

export interface IUserState {
  id: number;
  email: string;
  image: string;
  role: EnumUserRoles;
}

export interface IRegister {
  email: string;
  password: string;
  name: string;
  passwordConfirmation: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IAuthResponse extends ITokens {
  user: User;
}

export type TypeParamPlaylistSlug = {
  slug?: string;
};

export interface IPagePlaylistSlug {
  params: TypeParamPlaylistSlug;
  searchParams: TypeSearchDataFilters;
}

export type TypeSearchDataFilters = {
  searchTerm?: string;
  categoryId?: string;
};
export interface ISearchData {
  tracks: Track[];
  albums: Album[];
}
export type TypeParamsFilters = {
  searchParams: TypeSearchDataFilters;
};

export interface IPremium {
  id: number;
  createdAt: string;
  price: number;
  type: EnumUserPremium;
  userId: number;
  users: User[];
  //Order: IOrder[]
}

export const enum EnumUserPremium {
  NONEPREMIUM = 'NONEPREMIUM',
  INDIVIDUAL = 'INDIVIDUAL',
  STUDENT = 'STUDENT',
  DUO = 'DUO',
  FAMILY = 'FAMILY',
}

export interface IUserState {
  id: number;
  email: string;
  image: string;
  role: EnumUserRoles;
}

export interface IRegister {
  email: string;
  password: string;
  name: string;
  passwordConfirmation: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IAuthResponse extends ITokens {
  user: User;
}
