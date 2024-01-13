import { Box, Flex, List, ListItem } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import CardList from "./CardList";
import { Divider } from "@chakra-ui/react";
import Aside from "./Aside";
import { useState } from "react";
import Interactive from "./Interactive";
import Partners from "./Partners";
import Teachers from "./Teachers";
import Users from "./Users";

const Main = () => {

    const [view, setView] = useState("Dashboard")

  return (

    <Box>
   <Flex>
    <Box flex={1.5}>
        <Sidebar 
        view={view}
        setView={setView}
         />
        </Box>
   
   <Divider 
   orientation="vertical"
   color='gray.500'
   height='100%'
   marginX='2'
    />
    <Box flex={5}>
            {view === "Dashboard" ? <CardList /> : null}
           { view === "Interactive Activities" ? <Interactive /> : null}
           {view === "Partners" ? <Partners /> : null}
           {view === "Teachers" ? <Teachers /> : null}
           {view === "Users" ? <Users /> : null}
    </Box>

   <Box flex={2}>
    <Aside />
  </Box>
   
   </Flex>
   </Box>
  );
}

export default Main;
