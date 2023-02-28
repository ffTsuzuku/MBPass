import {
    Flex,
    Grid,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Box,
    Text,
} from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { SiRiotgames } from 'react-icons/si'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

interface AccountProps {
    icon: IconType
    password: string
    status: string
}

interface Account {
    name: string
    icon: IconType
    strength: string
    service: string
    categories: string[]
}

const accounts: Account[] = [
    {
        name: 'Tsuzuku',
        icon: SiRiotgames,
        strength: 'weak',
        service: 'RiotGames',
        categories: ['Gaming'],
    },
]

const AccountCard = ({
    name,
    icon: Icon,
    strength,
    service,
    categories,
}: Account) => {
    return (
        <Grid
            mt={5}
            w={'300px'}
            h={'150px'}
            borderRadius={'10px'}
            shadow={'lg'}
            border={'.5px solid'}
            borderColor={'gray.100'}
            p={3}
            gridAutoRows={'1fr 1fr 1fr'}
        >
            <Flex alignItems={'center'}>
                <Icon />
                <Text ml={3} fontWeight={'bold'}>
                    {service}
                </Text>
                <Box ml={'auto'}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HiOutlineDotsHorizontal />}
                            variant='outline'
                        />
                        <MenuList>
                            <MenuItem command='⌘T'>New Tab</MenuItem>
                            <MenuItem command='⌘N'>New Window</MenuItem>
                            <MenuItem command='⌘⇧N'>Open Closed Tab</MenuItem>
                            <MenuItem command='⌘O'>Open File...</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
            <Text>{name}</Text>
            <Flex justifyContent={'space-between'}>
                <Text color={'blue.600'} fontWeight={'semibold'}>
                    {categories.join(',')}
                </Text>
                <Flex
                    bgColor={'red'}
                    color={'red.100'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    fontWeight={'semibold'}
                    fontSize={'13px'}
                    minW={'60px'}
                    borderRadius={'100px'}
                >
                    {strength.toUpperCase()}
                </Flex>
            </Flex>
        </Grid>
    )
}

const Accounts = () => {
    const fakerdata = []
    for (let i = 0; i < 10; i++) {
        fakerdata.push(accounts[0])
    }
    const accountCardsJSX = fakerdata.map((act) => <AccountCard {...act} />)
    return (
        <Flex
            flexWrap={'wrap'}
            justifyContent={'space-between'}
            h={'100%'}
            alignContent={'flex-start'}
        >
            {accountCardsJSX}
        </Flex>
    )
}

export default Accounts
