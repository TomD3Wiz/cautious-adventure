import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface CalendarEvent {
  id?: number
  title: string
  start: string
  end: string
  allDay: boolean
}

export interface CalendarEvents {
  events: Array<CalendarEvent>
  nextId: number
}

const initialState: CalendarEvents = {
  events: [],
  nextId: 0,
}

export const calendarEventSlice = createSlice({
  name: "CalenderEvents",
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<CalendarEvent>) => {
      state.events.push({
        id: state.nextId,
        ...action.payload,
      })
      state.nextId += 1
    },
    changeEvent: (state, action: PayloadAction<CalendarEvent>) => {
      state.events[
        state.events.findIndex((val) => val.id == action.payload.id) // Coerce comparison, id being converted to str
      ] = action.payload
    },
    removeEvent: (state, action: PayloadAction<CalendarEvent>) => {
      delete state.events[
        state.events.findIndex((val) => val.id == action.payload.id) // Coerce comparison, id being converted to str
      ]
    },
  },
})

export const { addEvent, changeEvent, removeEvent } = calendarEventSlice.actions

export default calendarEventSlice.reducer
