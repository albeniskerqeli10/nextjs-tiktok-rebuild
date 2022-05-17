import { Flex, Box, Input } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <Flex
      as="header"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      border="2px solid red"
      flexWrap="wrap"
    >
      <Box>Tiktok</Box>
      <Box as="form">
        <Input placeholder="Search" />
      </Box>
    </Flex>
  );
};

export default Navbar;
