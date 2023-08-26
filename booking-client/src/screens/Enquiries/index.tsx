import { InfoOutlineIcon } from '@chakra-ui/icons'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  ScaleFade,
  Box,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import EnquiriesForm from 'components/EnquiriesForm'
import EnquiryCard from 'components/EnquiryCard'

import { useEnquiryControls } from './hooks'

export default function EnquiriesScreen() {
  const {
    selectedEnquiry,
    setSelectedEnquiry,
    isOpen,
    onOpen,
    onClose,
    enquiries,
    closeAndRefetchNewEnquiry,
    closeAndRefetchExistingEnquiry,
    closeExistingEnquiry,
  } = useEnquiryControls()
  return (
    <Box textAlign={'left'}>
      <SimpleGrid columns={2} marginBottom={'20px'}>
        <Box>
          {enquiries && enquiries?.length !== 0 && (
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
            record={enquiry}
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
      <Modal isOpen={!!selectedEnquiry} onClose={closeExistingEnquiry}>
        <ModalOverlay />
        <ModalContent sx={{ maxWidth: '80%' }}>
          <ModalHeader>Workshop Booking</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedEnquiry && (
              <EnquiriesForm
                didSubmit={closeAndRefetchExistingEnquiry}
                cancel={closeExistingEnquiry}
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
              didSubmit={closeAndRefetchNewEnquiry}
              cancel={onClose}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
