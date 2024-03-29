import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import BookingForm from 'components/BookingForm'

import useCalendarControls from './hooks'

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
    dateRangeUpdated,
  } = useCalendarControls()
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'dayGridMonth,timeGridWeek,timeGridDay',
          center: 'title',
          right: 'prev,next today',
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
        datesSet={dateRangeUpdated}
        slotMinTime={'04:00:00'}
        slotMaxTime={'22:00:00'}
        businessHours={{
          startTime: '8:00',
          endTime: '18:00',
        }}
        nowIndicator
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent sx={{ maxWidth: '80%' }}>
          <ModalHeader>Workshop Booking</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <BookingForm didSubmit={didSubmit} cancel={onClose} event={event} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
