import { createApi } from '@reduxjs/toolkit/query/react'
import type { CalendarEvent } from 'types/calendar'

import { commonFetchBase } from './common'

export const bookingEventApi = createApi({
  reducerPath: 'bookingevent',
  baseQuery: commonFetchBase('/api/bookings/v1/booking_event/'),
  endpoints: (builder) => ({
    listEvents: builder.query<Array<CalendarEvent>, number>({
      query: (start_month) => {
        const end_month = start_month + 3
        return `?start__month__gte=${start_month}&start__month__lte=${end_month}`
      },
    }),
    updateEvent: builder.mutation({
      query: ({ uuid, body }) => ({
        url: `${uuid}/`,
        method: 'PUT',
        body: body,
      }),
    }),
    addEvent: builder.mutation({
      query: ({ body }) => ({
        url: '',
        method: 'POST',
        body: body,
      }),
    }),
    deleteEvent: builder.mutation({
      query: (uuid) => ({
        url: `${uuid}/`,
        method: 'DELETE',
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
