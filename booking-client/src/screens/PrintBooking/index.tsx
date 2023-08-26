import { useParams } from 'react-router-dom'

import { Heading, Text, SimpleGrid, Button } from '@chakra-ui/react'
import { useGetEventQuery } from 'rtk-app/store-features/api/calendar-events'

import { Section, PrintContainer } from './style'

export default function PrintBooking() {
  const { bookingId } = useParams()
  const { data: event } = useGetEventQuery(bookingId as string)
  return (
    <>
      <SimpleGrid minChildWidth={'100px'} spacing={1}>
        <Section>
          <Heading textAlign="center" marginBottom={'10px'} size="md">
            Booking Information
          </Heading>
          <Text>
            <strong>Booking Title:</strong> {event?.title}
          </Text>
          <Text>
            <strong>Booked By:</strong> {event?.booked_by_display}
          </Text>
          <Text>
            <strong>Installer:</strong> {event?.installer_display}
          </Text>
          <Text>
            <strong>Invoice Number:</strong> {event?.order_number}
          </Text>
          <Text>
            <strong>Status:</strong> {event?.status_info?.display_name}
          </Text>
        </Section>
        <Section>
          <Heading textAlign="center" marginBottom={'10px'} size="md">
            Client Information
          </Heading>

          <Text>
            <strong>First Name:</strong> {event?.first_name}
          </Text>
          <Text>
            <strong>Last Name: </strong>
            {event?.last_name}
          </Text>
          <Text>
            <strong>Company Name:</strong> {event?.company_name}
          </Text>
          <Text>
            <strong>Phone:</strong> {event?.phone}
          </Text>
          <Text>
            <strong>Email:</strong> {event?.email}
          </Text>
        </Section>
        <Section>
          <Heading textAlign="center" marginBottom={'10px'} size="md">
            Vehicle Information
          </Heading>
          <Text>
            <strong>Make:</strong> {event?.vehicle_make}
          </Text>
          <Text>
            <strong>Model:</strong> {event?.vehicle_model}
          </Text>
          <Text>
            <strong>Year:</strong> {event?.vehicle_year}
          </Text>
          <Text>
            <strong>Registration:</strong> {event?.vehicle_registration}
          </Text>
        </Section>
      </SimpleGrid>
      <Section>
        <Heading textAlign="center" marginBottom={'10px'} size="md">
          Fitting Details
        </Heading>
        <Text textAlign={'left'} whiteSpace={'pre'}>
          {event?.fitting_details}
        </Text>
      </Section>
      <PrintContainer>
        <Button onClick={() => window.print()}>Print</Button>
      </PrintContainer>
    </>
  )
}
