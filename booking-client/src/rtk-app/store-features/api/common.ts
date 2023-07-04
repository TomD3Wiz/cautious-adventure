import { fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import SETTINGS from "settings/dev"

export function commonFetchBase(apiUrl: string) {
  return fetchBaseQuery({
    baseUrl: `${SETTINGS.baseUrl}${apiUrl}`,
    credentials: "include",
    prepareHeaders(headers) {
      headers.set("X-CSRFToken", "nua9BTy89QG9gyII1oOxRxHL6JR57eYj")
      return headers
    },
  })
}
