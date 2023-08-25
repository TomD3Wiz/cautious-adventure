import { Controller } from 'react-hook-form'

import {
  Heading,
  Input,
  Text,
  SimpleGrid,
  Textarea,
  Select,
  Button,
  Checkbox,
} from '@chakra-ui/react'

import { useEnquiryControls } from './hooks'
import { Section } from './style'

export default function EnquiriesForm(props: any) {
  const { staffOptions, control, save, deleteIt, deleteCount, errors } =
    useEnquiryControls(props)

  return (
    <>
      <SimpleGrid columns={2} spacing={1} padding={'5px'}>
        <Section>
          <Heading marginBottom={'10px'} size="md">
            Customer Information
          </Heading>

          <SimpleGrid columns={2} spacing={1}>
            <Text>Company Name</Text>
            <Controller
              name="company_name"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
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
            <Text>Active</Text>
            <Controller
              name="is_active"
              control={control}
              render={({ field }) => <Checkbox {...field} />}
            />
            <Text>Complete</Text>
            <Controller
              name="is_complete"
              control={control}
              render={({ field }) => <Checkbox {...field} />}
            />
          </SimpleGrid>
        </Section>
        <Section>
          <Heading marginBottom={'10px'} size="md">
            Enquiry Details
          </Heading>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Textarea fontSize="12px" height={'400px'} size="lg" {...field} />
            )}
          />
        </Section>
      </SimpleGrid>
      <Button marginRight="5px" onClick={save}>
        Save
      </Button>
      {props?.event?.id && (
        <>
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
