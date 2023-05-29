import type { RootState } from "rtk-app/store"
import { useSelector } from "react-redux"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"

import useCalendarControls from "./hooks"

export default function Calendar() {
  const events = useSelector((state: RootState) => state.calendarEvents.events)
  const { addEvent, changeEvent } = useCalendarControls()
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      headerToolbar={{
        left: "dayGridMonth,timeGridWeek,timeGridDay",
        center: "title",
        right: "prev,next today",
      }}
      initialView="timeGridDay"
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      events={events}
      select={addEvent}
      eventChange={changeEvent}
      nowIndicator
    />
  )
}
