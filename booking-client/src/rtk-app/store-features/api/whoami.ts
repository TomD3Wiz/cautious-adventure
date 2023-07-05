import { createApi } from "@reduxjs/toolkit/query/react"

import type { User } from "types/staff"
import { commonFetchBase } from "./common"

export const whoAmIApi = createApi({
  reducerPath: "whoami",
  baseQuery: commonFetchBase("/api/bookings/v1/whoami"),
  endpoints: (builder) => ({
    whoAmI: builder.query<User, string>({
      query: () => "",
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useWhoAmIQuery } = whoAmIApi
