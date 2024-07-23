import { Search2Icon } from '@chakra-ui/icons';
import './Navbar.css';
import { Input,Box,Text } from '@chakra-ui/react'
export default function Navbar() {
  return (
    <>
     <Box display="flex" justifyContent="space-between" bg="grey" height="6vh" color={'white'}>
        <Text>ShopEazy</Text>
       <Box> 
        <Input className='search-btn' placeholder='Search' />
        <Search2Icon className='search-icon'/></Box>
       
       
        </Box>
    </>
   
  )
}
