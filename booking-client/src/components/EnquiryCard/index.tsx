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
  const { enquiry, onSelect } = props

  return (
    <Card marginBottom={'10px'} backgroundColor={'rgb(0, 174, 239, 0.1)'}>
      <CardHeader>
        <SimpleGrid columns={2}>
          <Text>
            <strong>Customer Enquiry</strong>
          </Text>
          <Box textAlign={'right'}>
            <Button onClick={() => onSelect(enquiry)}>
              <SettingsIcon />
            </Button>
          </Box>
        </SimpleGrid>
      </CardHeader>
      <CardBody>
        <SimpleGrid columns={2} spacing={1}>
          <div>
            <Text>{enquiry.name}</Text>
            <Text>{enquiry.company_name}</Text>
            <Text>{enquiry.email}</Text>
            <Text>{enquiry.phone}</Text>
            <Text>{enquiry.is_active}</Text>
            <Text>{enquiry.is_complete}</Text>
            <Text>{enquiry.booked_by}</Text>
          </div>
          <div>
            <Text whiteSpace={'pre-wrap'}>{enquiry.description}</Text>
          </div>
        </SimpleGrid>
      </CardBody>
      <CardFooter>
        <Text fontSize={'xs'}>
          <em>
            Created: {DateTime.fromISO(enquiry.created).toFormat(DATEFORMAT)}{' '}
            Last Modified:{' '}
            {DateTime.fromISO(enquiry.modified).toFormat(DATEFORMAT)}
          </em>
        </Text>
      </CardFooter>
    </Card>
  )
}
