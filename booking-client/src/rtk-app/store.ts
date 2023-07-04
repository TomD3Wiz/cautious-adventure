import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { bookingEventApi } from "./store-features/api/calendar-events"
import { bookingStatusApi } from "./store-features/api/booking-status"
import { staffApi } from "./store-features/api/staff"

export const store = configureStore({
  reducer: {
    [bookingEventApi.reducerPath]: bookingEventApi.reducer,
    [bookingStatusApi.reducerPath]: bookingStatusApi.reducer,
    [staffApi.reducerPath]: staffApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(bookingEventApi.middleware)
      .concat(staffApi.middleware)
      .concat(bookingStatusApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
