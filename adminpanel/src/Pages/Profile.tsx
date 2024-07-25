import {useState} from 'react'
import { Box, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Input } from '@chakra-ui/react'
import { Button } from "@chakra-ui/react";

export default function Notifications() {
  const [firstName, setFirstName]= useState('');
  const [lastName, setLastName]= useState('');
  const [contactNumber, setContactNumber]= useState('');
  const [permanentAddress, setPermanentAddress]= useState('');
  const [temporaryAddress, setTemporaryAddress]= useState('');
  const [users, setUsers]= useState([]);

  const handleCreateUser = () => {
    const newUser = {firstName,lastName,contactNumber,permanentAddress,temporaryAddress};
    setUsers([...users,newUser]);
    setFirstName('');
    setLastName('');
    setContactNumber('');
    setPermanentAddress('');
    setTemporaryAddress('');

  };
  
  return (
     <div>
      <Box pt="10px" h="100vh" bg="lightgray">
        <Text textAlign="center">User Profile</Text>
        <Box display="flex" justifyContent="space-between">
          <VStack spacing={4}>
            <Box marginTop="30px">
              <Text>CREATE USER</Text>
              <Text fontSize="small" marginTop="20px" fontWeight="bold">create a new user profile</Text>
                      <Box display="flex" gap="50px" marginTop="30px">
                   <Input placeholder='First Name' fontWeight="bold"  value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>

                   <Input placeholder='Last Name' fontWeight="bold" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>

                   </Box>
                   <Box marginTop="50px">
                  
                   <Input placeholder ='Contact Number' fontWeight="bold" value={contactNumber} onChange={(e)=>setContactNumber(e.target.value)}/>

                   </Box>
                     <Box marginTop="50px">
                   <Input placeholder ='Permanent Address' fontWeight="bold" value={permanentAddress} onChange={(e)=>setPermanentAddress(e.target.value)}/>
                   </Box>
                   
                   <Box marginTop="50px">
                   <Input placeholder ='Temporary Address' fontWeight="bold" value={temporaryAddress} onChange={(e)=>setTemporaryAddress(e.target.value)}/>
                   </Box>
               </Box>
                   <Button border="none" padding="0 30px 5px" marginTop="80px" marginRight="260px" backgroundColor="lightblue"fontWeight="bold" borderRadius="8px" onClick={handleCreateUser}>Create New User</Button>

                   
                   <Box marginTop="100px" marginRight="100px">

                    <Text textAlign="center" marginTop="-60px" fontWeight="bold">Details of User</Text>
                   
                   <TableContainer marginTop="25px">
  <Table variant='simple'>
    <TableCaption></TableCaption>
    <Thead>
      <Tr display="flex" gap="40px">
        <Th>First Name</Th>
        <Th>Last Name</Th>
        <Th>Contact Number</Th>
        <Th>Permanent Address</Th>
        <Th>Temporary Address</Th>
        
      </Tr>

    </Thead>
    {users.map((user,index) => (
    <Tbody>
    
      <Tr key={index} display="flex" gap="100px">
        <Td>{user.firstName}</Td>
        <Td>{user.lastName}</Td>
        <Td>{user.contactNumber}</Td>
        <Td>{user.permanentAddress}</Td>
        <Td>{user.temporaryAddress}</Td>
        
      </Tr>
   </Tbody>
   

        ))}


    <Tfoot>
      
    </Tfoot>
  </Table>
</TableContainer>
              
</Box>

                   
          </VStack>

         

          

        </Box>
      </Box>
       
    </div> 
  );
}
