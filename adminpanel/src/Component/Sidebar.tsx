import { ArrowRightIcon, BellIcon, CopyIcon, EditIcon } from "@chakra-ui/icons";
import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <Text color="gray">MAIN PAGES</Text>
      <Box float="left" mr="20px">
        <UnorderedList listStyleType="none">
          <ListItem p="10px 0px">
            <EditIcon pr="5px"  />
            <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
              Dashboards
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
    </>
  );
}
