import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Avatar,
    Flex,
    Grid,
    Text,
} from '@chakra-ui/react'

import { AiOutlinePlus } from 'react-icons/ai'

import {
    BsCardChecklist,
    BsFillCreditCard2FrontFill,
    BsFillShieldLockFill,
    BsPower,
} from 'react-icons/bs'

import { FiSettings } from 'react-icons/fi'

import { IconType } from 'react-icons'

interface TagData {
    name: string
    count: number
}

interface SideBarMainItem {
    name: string
    icon: IconType
    count: number
}

export default function Sidebar() {
    const tags: TagData[] = [
        { name: 'Subscription', count: 23 },
        { name: 'Streaming Service', count: 12 },
        { name: 'Online Shopping', count: 5 },
        { name: 'Social Media', count: 4 },
        { name: 'Banking', count: 2 },
    ]

    const sidebarMainItems: SideBarMainItem[] = [
        {
            name: 'All Items',
            icon: BsCardChecklist,
            count: 71,
        },
        {
            name: 'Passwords',
            icon: BsFillShieldLockFill,
            count: 12,
        },
        {
            name: 'Payment Cards',
            icon: BsFillCreditCard2FrontFill,
            count: 2,
        },
    ]

    const tagsJSX = tags.map((tag, index) => {
        return (
            <Flex
                justifyContent={'space-between'}
                key={index}
                marginY={2}
                alignContent={'flex-start'}
            >
                <Text>{tag.name}</Text>
                <Text
                    color={'blue.700'}
                    bgColor={'lightgray'}
                    borderRadius={'100px'}
                    w={'40px'}
                    textAlign={'center'}
                    fontWeight={'bold'}
                >
                    {tag.count}
                </Text>
            </Flex>
        )
    })

    const sideBarMainItemsJSX = sidebarMainItems.map((item, index) => {
        const Icon = item.icon
        return (
            <Flex
                w={'100%'}
                justifyContent={'space-between'}
                key={index}
                mt={5}
            >
                <Flex alignItems={'flex-start'} mb={0}>
                    <Icon />
                    <Text ml={2}>{item.name}</Text>
                </Flex>
                <Flex
                    justifyContent={'center'}
                    color={'blue.700'}
                    bgColor={'lightgray'}
                    borderRadius={'100px'}
                    w={'40px'}
                    h={'25px'}
                    alignItems={'center'}
                    fontWeight={'bold'}
                >
                    {item.count}
                </Flex>
            </Flex>
        )
    })

    return (
        <Grid
            h={'100vh'}
            bgColor={'gray.700'}
            color={'purple.50'}
            pl={5}
            pr={5}
            pt={'30px'}
            w={'300px'}
            gridTemplateRows={'.5fr 4fr 1fr'}
        >
            <Flex alignItems={'center'} alignContent={'center'}>
                <Avatar
                    src='https://bit.ly/dan-abramov'
                    borderWidth={'medium'}
                    borderColor={'gray.400'}
                />
                <Text fontWeight={'bold'} ml={3}>
                    {'John Smith'}
                </Text>
            </Flex>
            <Flex alignContent={'flex-start'} flexWrap={'wrap'}>
                {sideBarMainItemsJSX}
                <Accordion allowToggle w={'100%'} mt={5}>
                    <AccordionItem>
                        <AccordionButton pt={3} pb={3} pl={0} pr={0}>
                            <AccordionIcon />
                            <Text textAlign={'left'} w={'100%'} ml={3}>
                                Tags
                            </Text>
                            <AiOutlinePlus />
                        </AccordionButton>
                        <AccordionPanel p={0}>{tagsJSX}</AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Flex>
            <Flex
                flexWrap={'wrap'}
                borderTop={'1px'}
                borderLeft={'0px'}
                borderRight={'0px'}
                borderBottom={'0px'}
                borderWidth={1}
                alignContent={'flex-end'}
                pb={5}
            >
                <Flex alignItems={'center'} w={'100%'}>
                    <FiSettings />
                    <Text ml={3}>Account Settings</Text>
                </Flex>
                <Flex alignItems={'center'} mt={2}>
                    <BsPower />
                    <Text ml={3}>Logout</Text>
                </Flex>
            </Flex>
        </Grid>
    )
}
