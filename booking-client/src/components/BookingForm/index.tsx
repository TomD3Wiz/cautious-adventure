import { useForm, Controller } from "react-hook-form"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import {
  Heading,
  Input,
  Text,
  SimpleGrid,
  Textarea,
  Select,
} from "@chakra-ui/react"

import { Section } from "./style"

// export interface CalendarEvent {
//     id?: number
//     title: string
//     start: string
//     end: string
//     allDay: boolean
//     bookedBy: string
//     orderNumber: string
//     firstName: string
//     address: string
//     suburb: string
//     postcode: string
//     state: string
//     vehicleRegistration: string
//     status: string
//     vehicleMake: string
//     vehicleModel: string
//     vehicleYear: string
//     vehicleBuildDescription: string
//     fittingDetails: string
//   }
export default function BookingForm() {
  const { control, handleSubmit } = useForm()
  return (
    <form>
      <Section>
        <Heading marginBottom={"10px"} size="md">
          General Booking
        </Heading>
        <SimpleGrid columns={2} spacing={5} padding={"5px"}>
          <Text>Booking Title (Not Needed)</Text>
          <Controller
            name="title"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          <Text>Booked By</Text>
          <Controller
            name="bookedBy"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          <Text>Order Number</Text>
          <Controller
            name="orderNumber"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          <Text>Start Time</Text>
          <Controller
            name="start"
            control={control}
            render={({ field }) => (
              <DatePicker
                placeholderText="Select Start"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
                showTimeSelect
              />
            )}
          />
          <Text>End Time</Text>
          <Controller
            name="start"
            control={control}
            render={({ field }) => (
              <DatePicker
                placeholderText="Select End"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
                showTimeSelect
              />
            )}
          />
          <Text>Status</Text>
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <Select {...field}>
                <option value="booked">Booked In</option>
                <option value="cancelled">Cancelled</option>
                <option value="on site">On Site</option>
                <option value="in progress">In progress</option>
                <option value="completed">Completed</option>
              </Select>
            )}
          />
        </SimpleGrid>
      </Section>
      <Section>
        <Heading marginBottom={"10px"} size="md">
          Client Information
        </Heading>
        <SimpleGrid columns={2} spacing={5}>
          <Text>First Name</Text>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          <Text>Last Name</Text>
          <Controller
            name="lastName"
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
          <Text>Phone Number</Text>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </SimpleGrid>
      </Section>
      <Section>
        <Heading marginBottom={"10px"} size="md">
          Vehicle Information
        </Heading>
        <SimpleGrid columns={2} spacing={5}>
          <Text>Registration</Text>
          <Controller
            name="vehicleRegistration"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          <Text>Make</Text>
          <Controller
            name="vehicleMake"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          <Text>Model</Text>
          <Controller
            name="vehicleModel"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          <Text>Year</Text>
          <Controller
            name="vehicleYear"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          <Text>Build Description</Text>
          <Controller
            name="vehicleBuildDescription"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </SimpleGrid>
      </Section>

      <Section>
        <Text>Fitting Details</Text>
        <Controller
          name="fittingDetails"
          control={control}
          render={({ field }) => (
            <Textarea height={"300px"} size="lg" {...field} />
          )}
        />
      </Section>
    </form>
  )
}
