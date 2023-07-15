import type { Setting } from 'types/settings'

const SETTINGS: Setting = {
  baseUrl: import.meta.env.VITE_BASE_URL,
  login: import.meta.env.VITE_LOGIN_URL,
  logout: import.meta.env.VITE_LOGOUT_URL,
}

export default SETTINGS
