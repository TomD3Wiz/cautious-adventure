import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { useListStatusQuery } from 'rtk-app/store-features/api/booking-status'
import {
  useAddEnquiryMutation,
  useUpdateEnquiryMutation,
  useDeleteEnquiryMutation,
} from 'rtk-app/store-features/api/enquiries'
import { useListStaffQuery } from 'rtk-app/store-features/api/staff'

export function useEnquiryControls(props: any) {
  const { didSubmit, enquiry } = props
  const { data: bookingStatusOptions } = useListStatusQuery('')
  const [addEvent, result] = useAddEnquiryMutation()
  const [updateEvent, updateResult] = useUpdateEnquiryMutation()
  const [deleteEvent, deleteResult] = useDeleteEnquiryMutation()
  const [deleteCount, setDeleteCount] = useState(0)
  const { data: staffOptions } = useListStaffQuery('')

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

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
    deleteEvent(enquiry.id)
  }, [deleteCount, setDeleteCount, enquiry, deleteEvent])

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
    if (enquiry) {
      reset(enquiry)
    }
  }, [enquiry, reset])

  return {
    bookingStatusOptions,
    staffOptions,
    control,
    save,
    deleteIt,
    deleteCount,
    errors,
  }
}
