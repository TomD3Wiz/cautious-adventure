import { createApi } from "@reduxjs/toolkit/query/react"

import type { CalendarEvent } from "types/calendar"
import { commonFetchBase } from "./common"

export const bookingEventApi = createApi({
  reducerPath: "bookingevent",
  baseQuery: commonFetchBase("/api/bookings/v1/booking_event/"),
  endpoints: (builder) => ({
    listEvents: builder.query<Array<CalendarEvent>, string>({
      query: () => "",
    }),
    updateEvent: builder.mutation({
      query: ({ uuid, body }) => ({
        url: `${uuid}/`,
        method: "PUT",
        body: body,
      }),
    }),
    addEvent: builder.mutation({
      query: ({ body }) => ({
        url: "",
        method: "POST",
        body: body,
      }),
    }),
    deleteEvent: builder.mutation({
      query: (uuid) => ({
        url: `${uuid}/`,
        method: "DELETE",
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useListEventsQuery,
  useUpdateEventMutation,
  useAddEventMutation,
  useDeleteEventMutation,
} = bookingEventApi
