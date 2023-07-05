import { createApi } from '@reduxjs/toolkit/query/react';
import type { Staff } from 'types/staff';

import { commonFetchBase } from './common';

export const staffApi = createApi({
  reducerPath: 'staff',
  baseQuery: commonFetchBase('/api/bookings/v1/staff_preferences/'),
  endpoints: (builder) => ({
    listStaff: builder.query<Array<Staff>, string>({
      query: () => '',
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useListStaffQuery } = staffApi;
