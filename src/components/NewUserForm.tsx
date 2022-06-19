import React from 'react'
import { 
    Box, 
    Heading,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'

export const NewUserForm = () => {
  return (
    <Box 
        display='flex' 
        flexDirection="column" 
        justifyContent='center' 
        alignItems="center"
        >
        <Heading>Add new user:</Heading>
        <FormControl 
            display='flex' 
            padding="15px" 
            justifyContent="center"
            >
            <Box margin="0px 10px 0px 10px">
                <FormLabel>Email address</FormLabel>
                <Input type='text' />
            </Box>
            <Box margin="0px 10px 0px 10px">
                <FormLabel>Name</FormLabel>
                <Input type='text' />
            </Box>
            <Box margin="0px 10px 0px 10px">
                <FormLabel>Lastname</FormLabel>
                <Input type='text' />
            </Box>
        </FormControl>
    </Box>
  )
}
