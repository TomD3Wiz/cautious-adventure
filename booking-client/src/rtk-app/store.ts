import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import calendarEventsReducer from "./store-features/calendar-events"

export const store = configureStore({
  reducer: {
    calendarEvents: calendarEventsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
