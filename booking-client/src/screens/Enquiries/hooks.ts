import { useState, useCallback } from 'react'

import { useDisclosure } from '@chakra-ui/react'
import { useListEnquirysQuery } from 'rtk-app/store-features/api/enquiries'
import type { Enquiry } from 'types/enquiry'

export function useEditExistingControls<Type>(refetch: VoidFunction) {
  const [selected, setSelected] = useState<Type>()
  const closeAndRefetchExisting = useCallback(() => {
    setSelected(undefined)
    refetch()
  }, [setSelected, refetch])
  const closeExisting = useCallback(() => {
    setSelected(undefined)
  }, [setSelected])

  return {
    selected,
    setSelected,
    closeAndRefetchExisting,
    closeExisting,
  }
}

export function useEnquiryControls() {
  const { data: enquiries, refetch } = useListEnquirysQuery({
    is_complete: 'false',
  })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const closeAndRefetchNewEnquiry = useCallback(() => {
    onClose()
    refetch()
  }, [onClose, refetch])

  const {
    selected: selectedEnquiry,
    setSelected: setSelectedEnquiry,
    closeAndRefetchExisting: closeAndRefetchExistingEnquiry,
    closeExisting: closeExistingEnquiry,
  } = useEditExistingControls<Enquiry>(refetch)

  return {
    selectedEnquiry,
    setSelectedEnquiry,
    isOpen,
    onOpen,
    onClose,
    enquiries,
    closeAndRefetchNewEnquiry,
    closeAndRefetchExistingEnquiry,
    closeExistingEnquiry,
  }
}
