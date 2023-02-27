import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import TopNav from './components/TopNav'
function App() {
    return (
        <div className='App'>
            <Flex>
                <Sidebar />
                <TopNav />
            </Flex>
        </div>
    )
}

export default App
