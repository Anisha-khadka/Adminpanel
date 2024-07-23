import { Box, SimpleGrid } from "@chakra-ui/react";


export default function Dashboard() {
  return (
    <div>
      <Box display="flex" flexDirection="column" pt="10px" h="50vh" justifyContent="center" bg="lightgray">
       <Box bg="white" w="100%" h="3vh" p="6px" m="4px" textAlign="center">Ecommerce</Box>
       
       <SimpleGrid column={2} spacing={10}>
       <Box bg='teal' height='80px'>Total Users</Box>
       <Box bg='teal' height='80px'>Total Orders</Box>
       <Box bg='teal' height='80px'>Total Products</Box>
       <Box bg='teal' height='80px'>Total Reviews</Box>
       </SimpleGrid>
      </Box>
    </div>
  )
}
