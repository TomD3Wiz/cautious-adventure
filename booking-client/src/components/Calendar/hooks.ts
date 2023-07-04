import { useDisclosure } from "@chakra-ui/react"
import { useCallback, useState } from "react"
import {
  useListEventsQuery,
  useUpdateEventMutation,
} from "rtk-app/store-features/api/calendar-events"

export default function useCalendarControls() {
  const [event, setEvent] = useState()
  const [updateEvent] = useUpdateEventMutation()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data: events, refetch } = useListEventsQuery("")
  const addEventLocal = useCallback(
    (event: any) => {
      let calendarApi = event.view.calendar
      calendarApi.unselect() // clear date selection
      setEvent(event)
      onOpen()
    },
    [setEvent, onOpen],
  )

  const editEventLocal = useCallback(
    (event: any) => {
      let calendarApi = event.view.calendar
      calendarApi.unselect() // clear date selection
      setEvent(event?.event?.toPlainObject({ collapseExtendedProps: true }))
      onOpen()
    },
    [setEvent, onOpen],
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
    [updateEvent],
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
  }
}
