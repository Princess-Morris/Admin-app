import { Icon, List, ListIcon, ListItem } from "@chakra-ui/react";
import { useState } from "react";
// import {EmailIcon, ViewIcon} from "@chakra-ui/icons"

const Sidebar = ({setView, view}) => {


  return (
    <List spacing='4' margin='20px'>
      <ListItem 
      onClick={() =>setView("Dashboard")}
      style={{color: view === "Dashboard" ? "red" : "blue"}}
      >
        {/* <ListIcon as={EmailIcon} /> */}
        Dashboard
      </ListItem>

      <ListItem
      onClick={() =>setView("Interactive Activities")}
      style={{color: view === "Interactive Activities" ? "red" : "blue"}}
      >
        Interactive Activities
      </ListItem>

      <ListItem
      onClick={() => setView("Partners")}
      style={{ color: view === "Partners" ? "red" : "blue" }}
      >
        Partners
      </ListItem>

      <ListItem
      onClick={() => setView("Teachers")}
      style={{ color: view === "Teachers" ? "red" : "blue" }}
      >
        Teachers
      </ListItem>

      <ListItem
      onClick={() => setView("Users")}
      style={{ color: view ==="Users" ? "red" : "blue" }}
      >
        User
      </ListItem>
    </List>
  );
}

export default Sidebar;
