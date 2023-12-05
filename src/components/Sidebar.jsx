import { Icon, List, ListIcon, ListItem } from "@chakra-ui/react";
import { useState } from "react";
// import {EmailIcon, ViewIcon} from "@chakra-ui/icons"

const Sidebar = ({setView}) => {


  return (
    <List spacing='4' margin='20px'>
      <ListItem 
      onClick={() =>setView("Dashboard")}
      style={{color: setView === "Dashboard" ? "blue" : "red"}}
      >
        {/* <ListIcon as={EmailIcon} /> */}
        Dashboard
      </ListItem>

      <ListItem
      onClick={() =>setView("Interactive Activities")}
      style={{color: setView === "Interactive Activities" ? "blue" : "red"}}
      >
        Interactive Activities
      </ListItem>

      <ListItem>
        Patners
      </ListItem>

      <ListItem>
        Teachers
      </ListItem>

      <ListItem>
        User
      </ListItem>
    </List>
  );
}

export default Sidebar;
