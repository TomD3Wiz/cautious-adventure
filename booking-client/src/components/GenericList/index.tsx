import { InfoOutlineIcon } from '@chakra-ui/icons'
import { ScaleFade, Box, Text } from '@chakra-ui/react'

export function GenericList(props: any) {
  const { records, RecordCardComponent, RecordCardProps } = props
  return (
    <Box padding={'10px'}>
      {records?.map((record: any) => (
        <ScaleFade key={record.id} in={!!record.id}>
          <RecordCardComponent record={record} {...RecordCardProps} />
        </ScaleFade>
      ))}
      {(!records || records?.length === 0) && (
        <Box marginTop={'50px'} textAlign={'center'}>
          <InfoOutlineIcon color={'GrayText'} boxSize={'16'} />
          <Text color={'GrayText'} fontSize={'3xl'}>
            <em>Nope, nothing to see here</em>
          </Text>
          <Text color={'GrayText'}>
            <em>Pretty sure it's you and not me though :)</em>
          </Text>
        </Box>
      )}
    </Box>
  )
}
