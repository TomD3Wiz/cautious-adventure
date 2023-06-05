import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface CalendarEvent {
  id?: number
  title: string
  start: string
  end: string
  allDay: boolean
  bookedBy: string
  orderNumber: string
  firstName: string
  lastName: string
  address: string
  suburb: string
  postcode: string
  state: string
  vehicleRegistration: string
  status: string
  vehicleMake: string
  vehicleModel: string
  vehicleYear: string
  vehicleBuildDescription: string
  fittingDetails: string
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

export const baseEvent = {
  title: "",
  start: "",
  end: "",
  allDay: false,
  bookedBy: "",
  orderNumber: "",
  firstName: "",
  lastName: "",
  address: "",
  suburb: "",
  postcode: "",
  state: "",
  vehicleRegistration: "",
  status: "",
  vehicleMake: "",
  vehicleModel: "",
  vehicleYear: "",
  vehicleBuildDescription: "",
  fittingDetails: "",
}

export function makeBookingEvent(obj: object): CalendarEvent {
  return {
    ...baseEvent,
    ...obj,
  }
}
export default calendarEventSlice.reducer
