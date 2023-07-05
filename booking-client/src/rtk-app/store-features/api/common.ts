import { fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import SETTINGS from "settings/dev"

export function commonFetchBase(apiUrl: string) {
  return fetchBaseQuery({
    baseUrl: `${SETTINGS.baseUrl}${apiUrl}`,
    credentials: "include",
    prepareHeaders(headers, api) {
      const state = api.getState() as any
      const csrf = state?.whoami?.queries['whoAmI("")']?.data?.csrf
      if (csrf) {
        headers.set("X-CSRFToken", csrf)
      }
      return headers
    },
  })
}
