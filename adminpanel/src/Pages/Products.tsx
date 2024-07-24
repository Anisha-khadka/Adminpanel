import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Menu, MenuButton, MenuItem, MenuList, Stack, Text, VStack } from "@chakra-ui/react"
import { Input } from '@chakra-ui/react'
import { color } from "framer-motion";

export default function Products() {
  return (
   <div>
    
      <Box  pt="10px" h="100vh" bg="lightgray">
      <Text textAlign="center">Product Information</Text>
      <Box display="flex" justifyContent="space-between">
      <VStack spacing={4}>
         <Box>
          <Text> SHOW BY</Text>
        <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    CATEGORY BY
  </MenuButton>
  <MenuList>
    <MenuItem>MENS</MenuItem>
    <MenuItem>WOMENS</MenuItem>
    <MenuItem>KIDS</MenuItem>
    <MenuItem>JWELLERY</MenuItem>
    <MenuItem>ELECTRONICS</MenuItem>
    </MenuList>
    </Menu>
        </Box>
        </VStack>
        <Box>
          <Text> BRAND BY</Text>

          <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    BRAND
  </MenuButton>
  <MenuList>
    <MenuItem>VogueVista Couture</MenuItem>
    <MenuItem>UrbanUrbane Attire</MenuItem>
    <MenuItem>ThreadTreasure Creations</MenuItem>
    <MenuItem>EleganceEra Threads</MenuItem>
    </MenuList>
    </Menu>
        
        </Box>

      </Box>

      <Text marginTop="50px">PRODUCT</Text>
      <Input placeholder='Product details' />

      <Box marginLeft="140px">
      <Text marginTop="50px">Category</Text>
      <Input placeholder='Category details' />
      <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
       Category
      </MenuButton>
      <MenuList>
      <MenuItem>MEN</MenuItem>
      <MenuItem>WOMEN</MenuItem>
      <MenuItem>KIDS</MenuItem>
      </MenuList>
      </Menu>

      <Text marginTop="50px">Price</Text>
      <Input placeholder='Price details' />

      <Text marginTop="50px">Stock</Text>
      <Input placeholder='Stock details' />

      <Text marginTop="50px">Order</Text>
      <Input placeholder='Order details' />

      <Text marginTop="50px">Sales</Text>
      <Input placeholder='Sales details' />

      </Box>

        <Box textAlign="center" marginLeft="205px"  marginTop="25px" border="none" width="50px" height="35px" borderRadius="8px"backgroundColor="brown" color="white">
      <Button>Add</Button>
      </Box>



      {/* <Box display="flex" pt="20px"  justifyContent="space-between">
      
      
       <Box>

       </Box>
        <VStack spacing={4}>
         <Box>
          <Text> SHOW BY</Text>
        <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    CATEGORY BY
  </MenuButton>
  <MenuList>
    <MenuItem>MENS</MenuItem>
    <MenuItem>WOMENS</MenuItem>
    <MenuItem>KIDS</MenuItem>
    <MenuItem>JWELLERY</MenuItem>
    <MenuItem>ELECTRONICS</MenuItem>
    </MenuList>
    </Menu>
        </Box>
        </VStack>

        
         <Box>
          <Text> BRAND BY</Text>

          <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    BRAND
  </MenuButton>
  <MenuList>
    <MenuItem>VogueVista Couture</MenuItem>
    <MenuItem>UrbanUrbane Attire</MenuItem>
    <MenuItem>ThreadTreasure Creations</MenuItem>
    <MenuItem>EleganceEra Threads</MenuItem>
    </MenuList>
    </Menu>


       </Box>
       </Box> */}
</Box>

        
         
       
       </div>

       
      
       
      
  
    
  );
}
