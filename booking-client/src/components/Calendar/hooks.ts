import { useCallback, useState } from 'react'

import { useDisclosure } from '@chakra-ui/react'
import { isInt } from '@fullcalendar/core/internal'
import {
  useListEventsQuery,
  useUpdateEventMutation,
} from 'rtk-app/store-features/api/calendar-events'

export default function useCalendarControls() {
  const [event, setEvent] = useState()
  const [queryMonth, setMonth] = useState(1)
  const [updateEvent] = useUpdateEventMutation()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data: events, refetch } = useListEventsQuery(queryMonth)

  const addEventLocal = useCallback(
    (event: any) => {
      let calendarApi = event.view.calendar
      calendarApi.unselect() // clear date selection
      setEvent(event)
      onOpen()
    },
    [setEvent, onOpen]
  )

  const editEventLocal = useCallback(
    (event: any) => {
      let calendarApi = event.view.calendar
      calendarApi.unselect() // clear date selection
      setEvent(event?.event?.toPlainObject({ collapseExtendedProps: true }))
      onOpen()
    },
    [setEvent, onOpen]
  )

  const changeEventLocal = useCallback(
    (event: any) => {
      const plainEvent = event.event.toPlainObject({
        collapseExtendedProps: true,
      })
      updateEvent({
        uuid: plainEvent.id,
        body: plainEvent,
      })
    },
    [updateEvent]
  )

  const dateRangeUpdated = useCallback(
    (evt: any) => {
      console.log(evt.start)
      let month = evt?.start?.getMonth()
      month = isInt(month) ? month + 1 : 1
      if (month !== queryMonth) {
        console.log(month)
        setMonth(month)
      }
    },
    [queryMonth, setMonth]
  )

  const didSubmit = useCallback(() => {
    onClose()
    refetch()
  }, [onClose, refetch])

  return {
    addEvent: addEventLocal,
    editEvent: editEventLocal,
    changeEvent: changeEventLocal,
    event,
    isOpen,
    onOpen,
    onClose,
    events,
    didSubmit,
    dateRangeUpdated,
    queryMonth,
  }
}
