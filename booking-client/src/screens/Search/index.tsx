import { SearchIcon } from '@chakra-ui/icons'
import {
  Box,
  Input,
  InputGroup,
  SimpleGrid,
  InputLeftAddon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import BookingForm from 'components/BookingForm'
import EnquiriesForm from 'components/EnquiriesForm'
import EnquiryCard from 'components/EnquiryCard'
import CalendarEventCard from 'components/EventCard'
import { GenericList } from 'components/GenericList'

import { useSearchPageControls } from './hooks'

export default function SearchScreen() {
  const {
    search,
    onChange,
    enquiries,
    events,
    selectedEnquiry,
    setSelectedEnquiry,
    closeAndRefetchExistingEnquiry,
    closeExistingEnquiry,
    selectedEvent,
    setSelectedEvent,
    closeAndRefetchExistingEvent,
    closeExistingEvent,
  } = useSearchPageControls()
  return (
    <Box>
      <Box marginBottom={'20px'}>
        <InputGroup>
          <InputLeftAddon>
            <SearchIcon />
          </InputLeftAddon>
          <Input
            placeholder="Whats on your mind? This ain't facebook, search for something!"
            value={search}
            onChange={onChange}
          />
        </InputGroup>
      </Box>
      <SimpleGrid columns={2}>
        <Box>
          <GenericList
            records={events}
            RecordCardComponent={CalendarEventCard}
            RecordCardProps={{
              onSelect: (record: any) => setSelectedEvent(record),
            }}
          />
        </Box>
        <Box>
          <GenericList
            records={enquiries}
            RecordCardComponent={EnquiryCard}
            RecordCardProps={{
              onSelect: (record: any) => setSelectedEnquiry(record),
            }}
          />
        </Box>
      </SimpleGrid>
      <Modal isOpen={!!selectedEnquiry} onClose={closeExistingEnquiry}>
        <ModalOverlay />
        <ModalContent sx={{ maxWidth: '80%' }}>
          <ModalHeader>Customer Enquiry</ModalHeader>
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
      <Modal isOpen={!!selectedEvent} onClose={closeExistingEvent}>
        <ModalOverlay />
        <ModalContent sx={{ maxWidth: '80%' }}>
          <ModalHeader>Workshop Booking</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedEvent && (
              <BookingForm
                didSubmit={closeAndRefetchExistingEvent}
                cancel={closeExistingEvent}
                event={selectedEvent}
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
