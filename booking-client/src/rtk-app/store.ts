import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { bookingStatusApi } from './store-features/api/booking-status';
import { bookingEventApi } from './store-features/api/calendar-events';
import { staffApi } from './store-features/api/staff';
import { whoAmIApi } from './store-features/api/whoami';

export const store = configureStore({
  reducer: {
    [bookingEventApi.reducerPath]: bookingEventApi.reducer,
    [bookingStatusApi.reducerPath]: bookingStatusApi.reducer,
    [staffApi.reducerPath]: staffApi.reducer,
    [whoAmIApi.reducerPath]: whoAmIApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(bookingEventApi.middleware)
      .concat(staffApi.middleware)
      .concat(bookingStatusApi.middleware)
      .concat(whoAmIApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
