import { Avatar, Flex, HStack, Heading, Box, Text, Divider } from "@chakra-ui/react";

const Navbar = () => {

    const dashboard = {
        fontWeight: "500"
    }

    const name = {
        color: "blue.300"
    }

    const text = {
        fontSize: "1.2em",
        fontWeight: "400"
    }

  return (
    <>
    <Flex as='nav' justify='space-between' 
    alignItems='center'
    m='20px'
    // bg='gray'
    >
      <Heading as='h3' sx={name}>Pluritongues</Heading>
      <Text sx={dashboard}>Dashboard</Text>
      <HStack>
        <Text sx={text}>Welcome John Doe</Text>
        <Box>AV</Box>
      </HStack>
    </Flex>
    <Divider color='gray.200' />
    </>
  );
}

export default Navbar;
