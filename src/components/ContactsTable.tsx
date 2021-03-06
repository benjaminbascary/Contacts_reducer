import { FC, useEffect, useReducer, useState } from 'react'
import { usersReducer } from '../reducers/usersReducer';
import { NewUserForm } from './NewUserForm';
import { usersReducerAction } from '../types/usersReducerTypes';
import { localStorageUsers as localStorage } from '../localstorage/usersLocalStorageHandler';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from '@chakra-ui/react';

const ContactsTable: FC = () => {

  const [ show, setShow] = useState<boolean>(false);
  const [ users, dispatch ] = useReducer(usersReducer, [], localStorage.getUsers);

  useEffect(() => {
    localStorage.setUsers(users);
  }, [users]);

  const handleErase = (id: string) => {
    const userToDelete = users.filter(eachUser => {
      return eachUser.id === id;
    });
    const deleteUserAction: usersReducerAction = {
      type: "deleteUser",
      payload: userToDelete[0]
    } 
    dispatch(deleteUserAction);
  }

  const handleShow = () => {
    setShow(previousValue => !previousValue);
  }

  return (
    <>
    <Button size="lg" colorScheme="pink" marginLeft="2vh" onClick={handleShow}>{show ? 'Close' : '+ Add new user'}</Button>
    {
      show && <NewUserForm dispatch={dispatch} />
    }
    <TableContainer margin="0vh 3vh 0vh 3vh">
      <Table variant='striped' size="sm">
        <TableCaption placement='top'>Contacts</TableCaption>
        <Thead>
          <Tr>
            <Th fontSize="2vh">ID</Th>
            <Th fontSize="2vh">Name</Th>
            <Th fontSize="2vh">Lastname </Th>
            <Th fontSize="2vh">Mail</Th>
            <Th fontSize="2vh" isNumeric>Action</Th>
          </Tr>
        </Thead>

        <Tbody>
          {
            users &&
              users.map(eachUser => {
                return (
                  <Tr key={eachUser.id}>
                    <Td>{eachUser.id}</Td>
                    <Td>{eachUser.name}</Td>
                    <Td>{eachUser.lastname}</Td>
                    <Td>{eachUser.email}</Td>
                    <Td isNumeric>
                      <Button 
                        colorScheme="red" 
                        onClick={() => handleErase(eachUser.id)}
                        data-testid='erasebutton'
                        >Erase
                      </Button>
                    </Td>           
                  </Tr>
                )
              })
          }
        </Tbody>

      </Table>
    </TableContainer>
    </>
  )
}

export default ContactsTable;