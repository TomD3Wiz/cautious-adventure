import { useState } from 'react'

import { InfoOutlineIcon } from '@chakra-ui/icons'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  ScaleFade,
  Box,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import EnquiriesForm from 'components/EnquiriesForm'
import EnquiryCard from 'components/EnquiryCard'
import { useListEnquirysQuery } from 'rtk-app/store-features/api/enquiries'
import type { Enquiry } from 'types/enquiry'

export default function EnquiriesScreen() {
  const { data: enquiries, refetch } = useListEnquirysQuery(
    `?${new URLSearchParams({ is_complete: 'false' })}`
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry>()

  return (
    <Box textAlign={'left'}>
      <SimpleGrid columns={2} marginBottom={'20px'}>
        <Box>
          {enquiries?.length !== 0 && (
            <Heading size="lg">Outstanding Enquiries</Heading>
          )}
        </Box>
        <Box textAlign={'right'}>
          <Button onClick={onOpen}>New Enquiry</Button>
        </Box>
      </SimpleGrid>
      {enquiries?.map((enquiry) => (
        <ScaleFade key={enquiry.id} in={!!enquiry.id}>
          <EnquiryCard
            enquiry={enquiry}
            onSelect={(enquiry) => setSelectedEnquiry(enquiry)}
          />
        </ScaleFade>
      ))}
      {enquiries?.length === 0 && (
        <Box textAlign={'center'}>
          <InfoOutlineIcon color={'GrayText'} boxSize={'16'} />
          <Text color={'GrayText'} fontSize={'3xl'}>
            <em>No Outstanding Enquiries</em>
          </Text>
          <Text color={'GrayText'}>
            <em>Time for a smoko?</em>
          </Text>
          <Text color={'GrayText'}>
            <em>or make some calls and get more customers!</em>
          </Text>
        </Box>
      )}
      <Modal
        isOpen={!!selectedEnquiry}
        onClose={() => setSelectedEnquiry(undefined)}
      >
        <ModalOverlay />
        <ModalContent sx={{ maxWidth: '80%' }}>
          <ModalHeader>Workshop Booking</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedEnquiry && (
              <EnquiriesForm
                didSubmit={() => {
                  setSelectedEnquiry(undefined)
                  refetch()
                }}
                cancel={() => setSelectedEnquiry(undefined)}
                enquiry={selectedEnquiry}
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent sx={{ maxWidth: '80%' }}>
          <ModalHeader>Workshop Booking</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EnquiriesForm
              didSubmit={() => {
                onClose()
                refetch()
              }}
              cancel={onClose}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
