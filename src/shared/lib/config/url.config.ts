export const ADMIN_PANEL_URL = '/admin'

export const getSiteUrl = () => process.env.APP_URL as string

export const PUBLIC_URL = {
  root: (url = '') => `${url ? '/' + url : ''}`,

  home: () => '/',
  premium: () => '/premium',

  login: () => '/auth/login',
  register: () => '/auth/register',

  search: () => '/search',
  favorites: () => '/favorites',

  playlist: (slug = '') => PUBLIC_URL.root(`playlist${slug ? '/' + slug : ''}`),
  track: (slug = '') => PUBLIC_URL.root(`track${slug ? '/' + slug : ''}`),
}

export const ADMIN_URL = {
  root: (url = '') => `/admin${url ? '/' + url : ''}`,
}
