import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { DateTime } from 'luxon'
import { useListStatusQuery } from 'rtk-app/store-features/api/booking-status'
import {
  useAddEventMutation,
  useUpdateEventMutation,
  useDeleteEventMutation,
} from 'rtk-app/store-features/api/calendar-events'
import { useListStaffQuery } from 'rtk-app/store-features/api/staff'

function parseToDateTime(date: any) {
  if (date instanceof Date) {
    return DateTime.fromJSDate(date)
  }
  return DateTime.fromISO(date)
}

function transformDates(event: any) {
  const startDate = parseToDateTime(event.start)
  const endDate = parseToDateTime(event.end)

  return {
    ...event,
    start: startDate.isValid ? startDate.toJSDate() : undefined,
    end: endDate.isValid ? endDate.toJSDate() : undefined,
  }
}

export function useBookingControls(props: any) {
  const { didSubmit, event } = props

  const { data: bookingStatusOptions } = useListStatusQuery('')
  const [addEvent, result] = useAddEventMutation()
  const [updateEvent, updateResult] = useUpdateEventMutation()
  const [deleteEvent, deleteResult] = useDeleteEventMutation()
  const [deleteCount, setDeleteCount] = useState(0)
  const { data: staffOptions } = useListStaffQuery('')

  const { control, handleSubmit, reset } = useForm()

  const save = handleSubmit((data) => {
    if (data.id) {
      updateEvent({
        uuid: data.id,
        body: data,
      })
      return
    }
    addEvent({ body: data })
  })

  const deleteIt = useCallback(() => {
    if (deleteCount < 1) {
      setDeleteCount(1)
      return
    }
    deleteEvent(event.id)
  }, [deleteCount, setDeleteCount, event, deleteEvent])

  useEffect(() => {
    const results = [result, updateResult, deleteResult]
    if (
      didSubmit &&
      results.some((result) => !result.isUninitialized && result.isSuccess)
    ) {
      didSubmit()
    }
  }, [result, didSubmit, updateResult, deleteResult])

  useEffect(() => {
    if (event) {
      reset(transformDates(event))
    }
  }, [event, reset])

  return {
    bookingStatusOptions,
    staffOptions,
    control,
    save,
    deleteIt,
    deleteCount,
  }
}
