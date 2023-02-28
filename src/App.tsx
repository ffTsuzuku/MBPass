import { Box, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'
import Accounts from './components/Accounts'
import Sidebar from './components/Sidebar'
import TopNav from './components/TopNav'
function App() {
    return (
        <div className='App'>
            <Flex>
                <Box>
                    <Sidebar />
                </Box>

                <Flex
                    flexWrap={'wrap'}
                    alignItems={'flex-start'}
                    alignContent={'flex-start'}
                >
                    <Box w={'100%'} h={'100px'}>
                        <TopNav />
                    </Box>
                    <Box p={5} h={'100%'}>
                        <Accounts />
                    </Box>
                </Flex>
            </Flex>
        </div>
    )
}

export default App
