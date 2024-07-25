import {
  Box,
  Button,

 
  Text,

} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { color } from "framer-motion";
import { useState } from "react";
import { useProductStore } from "../store/ProductStore";

export default function Products() {
  const { posts, addPost } = useProductStore();
  const [id,setId]=useState("");
  const [product, setProductTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [order, setOrder] = useState("");
  const [sales, setSales] = useState("");
  const [image,setImage] =useState("");
  const[succesText,setSuccessText]=useState("");

  

  const handleAddProduct = (e) => {
    e.preventDefault();
    
    const newPost = {
      id,
      image,
      product,
      category,
      price,
      stock,
      order,
      sales,
    };
  
    addPost(newPost);
    setId("");
    setProductTitle("");
    setCategory("");
    setPrice("");
    setStock("");
    setOrder("");
    setSales("");
    setImage("");
    setSuccessText("Sucessfully added product details ");
  };

  return (
    <div>
      <Box pt="10px" h="130vh" bg="lightgray">
        <Text textAlign="center">Product Information</Text>

        <Text marginTop="50px">PRODUCT</Text>

        <Box marginLeft="140px">
          <Text>ID</Text>
          <Input type="number" value={id}  onChange={(e) => setId(e.target.value)}  />
          <Text>Image</Text>
         <Input type="url" value={image} 
         onChange={(e) => setImage(e.target.value)}/>
          <br />
          <Text>Products</Text>
          <Input
            placeholder="Product details"
            type="text"
            value={product}
            onChange={(e) => setProductTitle(e.target.value)}
          />

          <Text marginTop="50px">Category</Text>
          <Input
            placeholder="Category details"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <Text marginTop="50px">Price</Text>
          <Input
            placeholder="Price details"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <Text marginTop="50px">Stock</Text>
          <Input
            placeholder="Stock details"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />

          <Text marginTop="50px">Order</Text>
          <Input
            placeholder="Order details"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          />

          <Text marginTop="50px">Sales</Text>
          <Input
            placeholder="Sales details"
            value={sales}
            onChange={(e) => setSales(e.target.value)}
          />
        </Box>

        <Box
          textAlign="center"
          marginLeft="205px"
          marginTop="25px"
          border="none"
          width="50px"
          height="35px"
          borderRadius="8px"
          backgroundColor="brown"
          color="white"
        >
          <Button onClick={handleAddProduct}>Add</Button>
         
        </Box>
        <Text color="black" ml="60px" >{succesText}</Text>

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
