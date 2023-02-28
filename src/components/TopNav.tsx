import { Flex, Input } from '@chakra-ui/react'

const TopNav = () => {
    return (
        <Flex
            padding={3}
            borderBottom={'1px solid'}
            w={'100%'}
            h={'100px'}
            alignItems={'center'}
            borderColor={'gray.300'}
        >
            <Input
                placeholder='Search..'
                size='lg'
                w={'500px'}
                borderRadius={'100px'}
                borderColor={'gray.300'}
                fontWeight={'bold'}
                color={'gray.600'}
            />
        </Flex>
    )
}

export default TopNav
