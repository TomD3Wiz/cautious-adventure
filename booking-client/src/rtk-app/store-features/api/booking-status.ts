import { createApi } from '@reduxjs/toolkit/query/react'
import type { BookingStatus } from 'types/booking-status'

import { commonFetchBase } from './common'

export const bookingStatusApi = createApi({
  reducerPath: 'bookingstatus',
  baseQuery: commonFetchBase('/api/bookings/v1/booking_status/'),
  endpoints: (builder) => ({
    listStatus: builder.query<Array<BookingStatus>, string>({
      query: () => '',
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useListStatusQuery } = bookingStatusApi
