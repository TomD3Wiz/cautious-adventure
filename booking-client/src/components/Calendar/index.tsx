import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import BookingForm from "components/BookingForm"
import useCalendarControls from "./hooks"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react"

export default function Calendar() {
  const {
    addEvent,
    editEvent,
    changeEvent,
    isOpen,
    onClose,
    event,
    events,
    didSubmit,
  } = useCalendarControls()
  return (
    <>
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
        events={events as any}
        select={addEvent}
        eventClick={editEvent}
        eventChange={changeEvent}
        nowIndicator
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent sx={{ maxWidth: "80%" }}>
          <ModalHeader>Workshop Booking</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <BookingForm didSubmit={didSubmit} event={event} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
