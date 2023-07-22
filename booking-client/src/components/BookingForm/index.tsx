import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Controller } from 'react-hook-form'

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
  } = useBookingControls(props)
  return (
    <>
      <SimpleGrid columns={2} spacing={5} padding={'5px'}>
        <Section>
          <Heading marginBottom={'10px'} size="md">
            Booking Information
          </Heading>
          <SimpleGrid columns={2} spacing={5} padding={'5px'}>
            <Text>Booking Title</Text>
            <Controller
              name="title"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            <Text>Booked By</Text>
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
            <Text>Installer</Text>
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
            <Text>Order Number</Text>
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
            <Text>Status</Text>
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
          <SimpleGrid columns={2} spacing={5}>
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
            <Text>Address</Text>
            <Controller
              name="address"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            <Text>Suburb</Text>
            <Controller
              name="suburb"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            <Text>State</Text>
            <Controller
              name="state"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            <Text>Post Code</Text>
            <Controller
              name="postcode"
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
      <SimpleGrid columns={2} spacing={5} padding={'5px'}>
        <Section>
          <Heading marginBottom={'10px'} size="md">
            Vehicle Information
          </Heading>
          <SimpleGrid columns={2} spacing={5}>
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
            <Text>Build Description</Text>
            <Controller
              name="vehicle_build_description"
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
              <Textarea height={'300px'} size="lg" {...field} />
            )}
          />
        </Section>
      </SimpleGrid>
      <Button marginRight="5px" onClick={save}>
        Save
      </Button>
      {props?.event?.id && (
        <Button
          colorScheme={deleteCount > 0 ? 'red' : 'orange'}
          onClick={deleteIt}
        >
          Delete
          {deleteCount > 0 && <span>&nbsp; (Press Again)</span>}
        </Button>
      )}
    </>
  )
}
