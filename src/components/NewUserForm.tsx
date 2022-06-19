import React from 'react'
import { 
    Box, 
    Heading,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button,
    Flex,
} from '@chakra-ui/react'

export const NewUserForm = () => {

    const handleSubmit = () => {
        console.log("submited")
    }
    return (
    <Box 
        display='flex' 
        flexDirection="column" 
        justifyContent='center' 
        alignItems="center"
        border="1px solid grey"
        borderRadius='3vh'
        margin="0vh 3vh 0vh 3vh"
        padding='10px'
        >
        <Heading as='h5' size="md">Add new user:</Heading>
        <FormControl 
            isRequired
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
            <Box display='Flex' flexDirection='row' justifyContent='center' alignItems='center' marginTop='4vh' >
                <Button colorScheme="whatsapp" onClick={handleSubmit}>Add</Button>
            </Box>
            
        </FormControl>
    </Box>
  )
}
