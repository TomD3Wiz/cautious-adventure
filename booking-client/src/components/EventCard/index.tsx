import { SettingsIcon } from '@chakra-ui/icons'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  SimpleGrid,
  Box,
  Button,
} from '@chakra-ui/react'
import type { EventCardProps } from 'components/EventCard/types'
import { DATEFORMAT } from 'components/constants'
import { DateTime } from 'luxon'

export default function CalendarEventCard(props: EventCardProps) {
  const { record, onSelect } = props
  return (
    <Card
      textAlign={'left'}
      marginBottom={'10px'}
      backgroundColor={record.backgroundColor}
      color={record.textColor}
    >
      <CardHeader>
        <SimpleGrid columns={2}>
          <Text>
            <strong>Workshop Booking</strong>
          </Text>
          <Box color={'black'} textAlign={'right'}>
            <Button onClick={() => onSelect(record)}>
              <SettingsIcon />
            </Button>
          </Box>
        </SimpleGrid>
      </CardHeader>
      <CardBody>
        <Text>
          <strong>{record.title}</strong>
        </Text>
        <SimpleGrid columns={2}>
          <div>
            <Text>{record.company_name}</Text>
            <Text>{record.first_name + ' ' + record.last_name}</Text>
            <Text>{record.phone}</Text>
            <Text>{record.email}</Text>
            <Text>{record.status_info.display_name}</Text>
          </div>
          <Box>
            <Text>{record.vehicle_make}</Text>
            <Text>{record.vehicle_model}</Text>
            <Text>{record.vehicle_year}</Text>
            <Text>{record.vehicle_registration}</Text>
          </Box>
        </SimpleGrid>
      </CardBody>
      <CardFooter>
        <Text fontSize={'xs'}>
          <em>
            Booked by: {record.booked_by_display}&nbsp;
            <br />
            Installer: {record.installer_display}&nbsp;
            <br />
            Created: {DateTime.fromISO(record.created).toFormat(
              DATEFORMAT
            )}{' '}
            Last Modified:{' '}
            {DateTime.fromISO(record.modified).toFormat(DATEFORMAT)}
          </em>
        </Text>
      </CardFooter>
    </Card>
  )
}
