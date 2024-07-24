import {
  ArrowRightIcon,
  BellIcon,
  CopyIcon,
  EditIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
    <Box>
      <Text color="gray">MAIN PAGES</Text>
     <HamburgerIcon onClick={toggle} />
     {isOpen && ( <Box float="left" width="200px" mr="20px" >
        <UnorderedList listStyleType="none">
          <ListItem p="10px 0px">
            <EditIcon pr="5px" />
            <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
              Dashboard
            </NavLink>
          </ListItem>
          <ListItem p="10px 0px">
            <CopyIcon pr="5px" />
            <NavLink
              to="/products"
              style={{ textDecoration: "none", color: "black" }}
            >
              Products
            </NavLink>
          </ListItem>
          <ListItem p="10px 0px">
            <ArrowRightIcon pr="5px" />
            <NavLink
              to="/orders"
              style={{ textDecoration: "none", color: "black" }}
            >
              Orders
            </NavLink>
          </ListItem>
          <ListItem p="10px 0px">
            <BellIcon pr="5px" />
            <NavLink
              to="/notification"
              style={{ textDecoration: "none", color: "black" }}
            >
              Notifications
            </NavLink>
          </ListItem>
        </UnorderedList>
      
      </Box>
        )}
      </Box>
    </>
  );
}
