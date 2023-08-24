import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'

import {
  Heading,
  Input,
  Text,
  SimpleGrid,
  Textarea,
  Select,
  Button,
} from '@chakra-ui/react'

import { useBookingControls } from './hooks'
import { Section, DateContainer } from './style'

const DATEFORMAT = 'dd/MM/yyyy HH:mm'

export default function BookingForm(props: any) {
  const {
    bookingStatusOptions,
    staffOptions,
    control,
    save,
    deleteIt,
    deleteCount,
    errors,
  } = useBookingControls(props)

  return (
    <>
      <SimpleGrid columns={2} spacing={1} padding={'5px'}>
        <Section>
          <Heading marginBottom={'10px'} size="md">
            Booking Information
          </Heading>
          <SimpleGrid columns={2} spacing={1} padding={'5px'}>
            <Text>Booking Title </Text>
            <Controller
              name="title"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            <Text color={errors.booked_by && 'red'}>Booked By</Text>
            <Controller
              name="booked_by"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <Select {...field}>
                  <option></option>
                  {staffOptions?.map((value) => (
                    <option key={value.id} value={value.user_info.id}>
                      {value.user_info.first_name +
                        ' ' +
                        value.user_info.last_name}
                    </option>
                  ))}
                </Select>
              )}
            />
            <Text color={errors.installer && 'red'}>Installer</Text>
            <Controller
              name="installer"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <Select {...field}>
                  <option></option>
                  {staffOptions?.map((value) => (
                    <option key={value.id} value={value.user_info.id}>
                      {value.user_info.first_name +
                        ' ' +
                        value.user_info.last_name}
                    </option>
                  ))}
                </Select>
              )}
            />
            <Text>Invoice Number</Text>
            <Controller
              name="order_number"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            <Text>Start Time</Text>
            <DateContainer>
              <Controller
                name="start"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    placeholderText="Select Start"
                    onChange={(date) => field.onChange(date)}
                    selected={field.value}
                    dateFormat={DATEFORMAT}
                    showTimeSelect
                  />
                )}
              />
            </DateContainer>
            <Text>End Time</Text>
            <DateContainer>
              <Controller
                name="end"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    placeholderText="Select End"
                    onChange={(date) => field.onChange(date)}
                    selected={field.value}
                    dateFormat={DATEFORMAT}
                    showTimeSelect
                  />
                )}
              />
            </DateContainer>
            <Text color={errors.status && 'red'}>Status</Text>
            <Controller
              name="status"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <Select {...field}>
                  <option></option>
                  {bookingStatusOptions?.map((value) => (
                    <option key={value.id} value={value.id}>
                      {value.display_name}
                    </option>
                  ))}
                </Select>
              )}
            />
          </SimpleGrid>
        </Section>
        <Section>
          <Heading marginBottom={'10px'} size="md">
            Client Information
          </Heading>
          <SimpleGrid columns={2} spacing={1}>
            <Text>First Name</Text>
            <Controller
              name="first_name"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            <Text>Last Name</Text>
            <Controller
              name="last_name"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            <Text>Company Name</Text>
            <Controller
              name="company_name"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            <Text>Phone</Text>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            <Text>Email</Text>
            <Controller
              name="email"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </SimpleGrid>
        </Section>
      </SimpleGrid>
      <SimpleGrid columns={2} spacing={1} padding={'5px'}>
        <Section>
          <Heading marginBottom={'10px'} size="md">
            Vehicle Information
          </Heading>
          <SimpleGrid columns={2} spacing={1}>
            <Text>Registration</Text>
            <Controller
              name="vehicle_registration"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            <Text>Make</Text>
            <Controller
              name="vehicle_make"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            <Text>Model</Text>
            <Controller
              name="vehicle_model"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            <Text>Year</Text>
            <Controller
              name="vehicle_year"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </SimpleGrid>
        </Section>

        <Section>
          <Heading marginBottom={'10px'} size="md">
            Fitting Details
          </Heading>
          <Controller
            name="fitting_details"
            control={control}
            render={({ field }) => (
              <Textarea fontSize="12px" height={'200px'} size="lg" {...field} />
            )}
          />
        </Section>
      </SimpleGrid>
      <Button marginRight="5px" onClick={save}>
        Save
      </Button>
      {props?.event?.id && (
        <>
          <Button marginRight="5px">
            <Link to={`/print/${props.event.id}`}>Print</Link>
          </Button>
          <Button
            colorScheme={deleteCount > 0 ? 'red' : 'orange'}
            onClick={deleteIt}
            marginRight="5px"
          >
            Delete
            {deleteCount > 0 && <span>&nbsp; (Press Again)</span>}
          </Button>
          <Button colorScheme={'red'} onClick={props.cancel}>
            Cancel
          </Button>
        </>
      )}
    </>
  )
}
