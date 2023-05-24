import fcav from 'assets/fcav-logon.png';
import { Flex } from '@chakra-ui/react'

export default function Header() {
    return (
        <Flex bg='black' h='100px'>
            <img src={fcav} style={{ height: "100%" }} />
            <Flex
                color='white'
                alignItems='center'
                paddingLeft='50px'
            >
                Freeway Car Audio Visual - Bookings
            </Flex>
        </Flex>
    )
}
