import React, { FC, useEffect, useState } from 'react'
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
import { fakeUsers } from '../db/users';
import { user } from '../types/user';

const ContactsTable: FC = () => {

  const [ users, setUsers ] = useState<user[]>();

  useEffect(() => {
    setUsers(fakeUsers);
    console.log('loading users...');
  }, []);


  useEffect(() => {
    // waiting to be filled when the reducer is setted up!
  }, [users]);


  const handleErase = (id: string) => {
    console.log("Erasing..." + id)
  }


  return (
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
  )
}

export default ContactsTable;