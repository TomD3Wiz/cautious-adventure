import fcav from "assets/fcav-logon.png"
import { Flex, Text, Box, Image } from "@chakra-ui/react"

export default function Header() {
  return (
    <Flex bg="black" h="100px">
      <Image src={fcav} h="100%" />
      <Flex
        color="white"
        alignItems="center"
        paddingLeft="50px"
        flexDirection="column"
        justifyContent="center"
      >
        <Text>Freeway Car Audio Visual - Bookings </Text>
        <Box>
          <Text fontSize="xs">
            95 Lonsdale Street Dandenong, Melbourne VIC 3175
          </Text>
          <Text fontSize="xs">(03) 9794 6477</Text>
        </Box>
      </Flex>
    </Flex>
  )
}
