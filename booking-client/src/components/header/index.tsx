import { CloseIcon } from '@chakra-ui/icons';
import { Flex, Text, Box, Image, Link } from '@chakra-ui/react';
import fcav from 'assets/fcav-logon.png';
import SETTINGS from 'settings/dev';

export default function Header(props: any) {
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
      <Flex
        marginLeft={'auto'}
        color="white"
        // flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text marginRight={'4px'}>
          Welcome, {props?.currentUser?.first_name}
        </Text>
      </Flex>
      <Flex
        marginLeft={'auto'}
        color="white"
        justifyContent="center"
        alignItems="center"
        padding="20px"
      >
        <Link href={SETTINGS.logout} isExternal>
          <CloseIcon boxSize="7" />
        </Link>
      </Flex>
    </Flex>
  );
}
