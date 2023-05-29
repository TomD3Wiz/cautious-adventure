import { useCallback } from "react"
import { useDispatch } from "react-redux"
import {
  addEvent,
  changeEvent,
  removeEvent,
} from "rtk-app/store-features/calendar-events"

export default function useCalendarControls() {
  const dispatch = useDispatch()
  const addEventLocal = useCallback(
    (event: any) => {
      let calendarApi = event.view.calendar
      let title = prompt("Please enter a new title for your event") || "default"

      calendarApi.unselect() // clear date selection
      dispatch(
        addEvent({
          title,
          start: event.startStr,
          end: event.endStr,
          allDay: event.allDay,
        }),
      )
    },
    [dispatch],
  )

  const changeEventLocal = useCallback(
    (event: any) => {
      dispatch(changeEvent(event.event.toPlainObject()))
    },
    [dispatch],
  )

  const removeEventLocal = useCallback(
    (event: any) => {
      dispatch(removeEvent(event.event.toPlainObject()))
    },
    [dispatch],
  )

  return {
    addEvent: addEventLocal,
    changeEvent: changeEventLocal,
    removeEvent: removeEventLocal,
  }
}
