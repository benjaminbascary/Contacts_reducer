import React, { ChangeEvent, Dispatch, useEffect, useState } from 'react'
import { usersReducerAction } from '../types/usersReducerTypes';
import { nanoid } from 'nanoid';
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
import { user } from '../types/user'

export const NewUserForm = ({dispatch}: any) => {
    const [newUser, setNewUser] = useState<user>({
        id: '',
        name: '',
        lastname: '',
        email: ''
    });

    const addUserAction: usersReducerAction = {
        type: 'addUser',
        payload: {
            id: nanoid(),
            name: newUser.name,
            lastname: newUser.lastname,
            email: newUser.email
        },
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        console.log(event.target.value);
        setNewUser({...newUser, [event.target.name] : event.target.value});
    };

    const handleSubmit = (): void => { 
        dispatch(addUserAction);
    };

    return (
        <Box 
            display='flex' 
            flexDirection="column" 
            justifyContent='center' 
            alignItems="center"
            borderRadius='3vh'
            margin="0vh 3vh 0vh 3vh"
            padding='10px'
            >
            <Heading 
                as='h5' 
                size="md"
                >
                Add new user:
            </Heading>
            <FormControl 
                isRequired
                display='flex' 
                padding="15px" 
                justifyContent="center"
                >
                <Box margin="0px 10px 0px 10px">
                    <FormLabel>Email address</FormLabel>
                    <Input 
                        onChange={handleChange} 
                        isInvalid={false} 
                        type='text' 
                        name='email' 
                        value={newUser.email}/>
                </Box>
                <Box margin="0px 10px 0px 10px">
                    <FormLabel>Name</FormLabel>
                    <Input 
                        onChange={handleChange} 
                        isInvalid={false} 
                        type='text' 
                        name='name' 
                        value={newUser.name}/>
                </Box>
                <Box margin="0px 10px 0px 10px">
                    <FormLabel>Lastname</FormLabel>
                    <Input 
                        onChange={handleChange} 
                        isInvalid={false} 
                        type='text' 
                        name='lastname' 
                        value={newUser.lastname}/>
                </Box>
                <Box 
                    display='Flex' 
                    flexDirection='row' 
                    justifyContent='center' 
                    alignItems='center' 
                    marginTop='4vh'
                    >
                    <Button 
                        colorScheme="linkedin"
                        onClick={handleSubmit}
                    >Add
                    </Button>
                </Box>
                
            </FormControl>
        </Box>
  )
}
