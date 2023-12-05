import { Box, Flex, List, ListItem } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import CardList from "./CardList";
import { Divider } from "@chakra-ui/react";
import Aside from "./Aside";
import { useState } from "react";
import Interactive from "./Interactive";

const Main = () => {

    const [view, setView] = useState("Dashboard")

  return (

    <Box>
   <Flex>
    <Box flex={1.5}>
        <Sidebar 
        setView={setView}
         />
        </Box>
   
   <Divider 
   orientation="verical"
   color='blue'
   height='100%'
   marginX='2'
    />
    <Box flex={5}>
            {view === "Dashboard" ? <CardList /> : null}
           { view === "Interactive Activity" ? <Interactive /> : null}
    </Box>

   <Box flex={2}>
    <Aside />
  </Box>
   
   </Flex>
   </Box>
  );
}

export default Main;
