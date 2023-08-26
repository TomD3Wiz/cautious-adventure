import { createApi } from '@reduxjs/toolkit/query/react'
import type { Enquiry } from 'types/enquiry'
import type { searchParams } from 'types/search-params'

import { commonFetchBase } from './common'

export const enquiryEnquiryApi = createApi({
  reducerPath: 'enquiry',
  baseQuery: commonFetchBase('/api/bookings/v1/enquiries/'),
  endpoints: (builder) => ({
    listEnquirys: builder.query<Array<Enquiry>, searchParams>({
      query: (queryObject: searchParams) => {
        let url = ''
        if (queryObject) {
          url = `?${new URLSearchParams(queryObject)}`
        }
        return url
      },
    }),
    getEnquiry: builder.query<Enquiry, string>({
      query: (uuid) => {
        return `${uuid}`
      },
    }),
    updateEnquiry: builder.mutation({
      query: ({ uuid, body }) => ({
        url: `${uuid}/`,
        method: 'PUT',
        body: body,
      }),
    }),
    addEnquiry: builder.mutation({
      query: ({ body }) => ({
        url: '',
        method: 'POST',
        body: body,
      }),
    }),
    deleteEnquiry: builder.mutation({
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
  useListEnquirysQuery,
  useGetEnquiryQuery,
  useUpdateEnquiryMutation,
  useAddEnquiryMutation,
  useDeleteEnquiryMutation,
} = enquiryEnquiryApi
