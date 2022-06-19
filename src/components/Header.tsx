import { Box, Heading } from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Box 
        border="1px solid white" 
        display="flex" 
        flexDirection="row" 
        justifyContent="space-between" 
        alignItems="center"
        >
        <Heading 
            margin="1vh">
            Contacts
        </Heading>
        <Switch 
            margin="1vh" 
            size="lg"
            />
    </Box>
  )
}

export default Header;