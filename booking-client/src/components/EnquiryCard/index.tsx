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
import { DATEFORMAT } from 'components/constants'
import { DateTime } from 'luxon'

import type { EnquiryCardProps } from './types'

export default function EnquiryCard(props: EnquiryCardProps) {
  const { record, onSelect } = props

  return (
    <Card
      textAlign={'left'}
      marginBottom={'10px'}
      backgroundColor={'rgb(0, 174, 239, 0.1)'}
    >
      <CardHeader>
        <SimpleGrid columns={2}>
          <Text>
            <strong>Customer Enquiry</strong>
          </Text>
          <Box textAlign={'right'}>
            <Button onClick={() => onSelect(record)}>
              <SettingsIcon />
            </Button>
          </Box>
        </SimpleGrid>
      </CardHeader>
      <CardBody>
        <SimpleGrid columns={2} spacing={1}>
          <div>
            <Text>{record.company_name}</Text>
            <Text>{record.name}</Text>
            <Text>{record.phone}</Text>
            <Text>{record.email}</Text>
            <Text>{record.is_complete}</Text>
          </div>
          <div>
            <Text whiteSpace={'pre-wrap'}>{record.description}</Text>
          </div>
        </SimpleGrid>
      </CardBody>
      <CardFooter>
        <Text fontSize={'xs'}>
          <em>
            Enquiry Taken by: {record.booked_by_name}&nbsp;
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
