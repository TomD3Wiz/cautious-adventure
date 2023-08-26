import { useCallback, useState } from 'react'

import { useSearchEventsQuery } from 'rtk-app/store-features/api/calendar-events'
import { useListEnquirysQuery } from 'rtk-app/store-features/api/enquiries'
import { useEditExistingControls } from 'screens/Enquiries/hooks'
import type { CalendarEvent } from 'types/calendar'
import type { Enquiry } from 'types/enquiry'

type InputEvent = React.ChangeEvent<HTMLInputElement>

export function useSearchPageControls() {
  const [search, setSearch] = useState('')
  const onChange = useCallback(
    (evt: InputEvent) => {
      setSearch(evt.target.value)
    },
    [setSearch]
  )

  const queryParam = {
    search: search,
    results: '50',
  }
  const { data: enquiries, refetch: refetchEnquiries } =
    useListEnquirysQuery(queryParam)
  const { data: events, refetch: refetchEvents } =
    useSearchEventsQuery(queryParam)

  const {
    selected: selectedEnquiry,
    setSelected: setSelectedEnquiry,
    closeAndRefetchExisting: closeAndRefetchExistingEnquiry,
    closeExisting: closeExistingEnquiry,
  } = useEditExistingControls<Enquiry>(refetchEnquiries)

  const {
    selected: selectedEvent,
    setSelected: setSelectedEvent,
    closeAndRefetchExisting: closeAndRefetchExistingEvent,
    closeExisting: closeExistingEvent,
  } = useEditExistingControls<CalendarEvent>(refetchEvents)

  return {
    selectedEnquiry,
    setSelectedEnquiry,
    closeAndRefetchExistingEnquiry,
    closeExistingEnquiry,
    selectedEvent,
    setSelectedEvent,
    closeAndRefetchExistingEvent,
    closeExistingEvent,
    search,
    onChange,
    enquiries,
    events,
  }
}
