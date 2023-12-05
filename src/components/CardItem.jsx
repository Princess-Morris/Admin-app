import { Avatar, Box, Card, CardBody, Text, Flex, VStack, HStack, Spacer } from '@chakra-ui/react';
import React from 'react';

const CardItem = ({item}) => {

    // const desc = {
    //     display: "flex"
    //     direction: "column"
    // }

  return (
    <Card py='20px' width='200px'>
        <CardBody>
            <HStack spacing='10px'>
            <Avatar />
            {/* <Spacer /> */}
            <Text>
            <Text>{item.category}</Text>
            <Text>{item.total}</Text>
            </Text>
            
            </HStack>

        
        </CardBody>
       
    </Card>
  );
}

export default CardItem;
