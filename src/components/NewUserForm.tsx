import { ChangeEvent, Dispatch, ReducerAction, useState } from 'react'
import { usersReducerAction } from '../types/usersReducerTypes';
import { nanoid } from 'nanoid';
import { user } from '../types/user';
import { 
    Box, 
    Heading,
    Input,
    FormControl,
    FormLabel,
    Button,
} from '@chakra-ui/react';

export const NewUserForm = ({dispatch}: {dispatch: (addUserAction: any) => void}) => {

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
        setNewUser({...newUser, [event.target.name] : event.target.value});
    }
    
    const handleSubmit = (): void => {
        if (!newUser.name || !newUser.lastname || !newUser.email) {
            return
        } else {
            dispatch(addUserAction);
        }
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
                <FormControl margin="0px 10px 0px 10px">
                    <FormLabel>Email address</FormLabel>
                    <Input
                        onChange={handleChange} 
                        type='text' 
                        name='email' 
                        value={newUser.email}
                    />
                </FormControl>
                <FormControl margin="0px 10px 0px 10px">
                    <FormLabel>Name</FormLabel>
                    <Input 
                        onChange={handleChange}  
                        type='text' 
                        name='name' 
                        value={newUser.name}
                    />
                </FormControl>
                <FormControl  margin="0px 10px 0px 10px">
                    <FormLabel>Last Name</FormLabel>
                    <Input 
                        onChange={handleChange} 
                        type='text' 
                        name='lastname' 
                        value={newUser.lastname}
                    />
                </FormControl>
                <Box 
                    display='Flex' 
                    flexDirection='row' 
                    justifyContent='center' 
                    alignItems='center' 
                    marginTop='3.5vh'
                    >
                    <Button 
                        size="lg"
                        colorScheme="linkedin"
                        onClick={handleSubmit}
                    >Add
                    </Button>
                </Box>
                
            </FormControl>
        </Box>
  )
}
