import Navbar from "./Navbar";
import { Flex, Container, Box } from "@chakra-ui/react";
const Layout = ({ children }) => {
  return (
    <Flex
      as="main"
      width="100%"
      alignItems="center"
      justifyContent="start"
      flexWrap="wrap"
      flexDirection="column"
    >
      <Container
        width="100%"
        display="flex"
        alignItems="center"
        maxW="1140px"
        flexDirection="column"
        justifyContent="center"
      >
        <Navbar />
        <Box
          as="section"
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          justifyContent="center"
        >
          {children}
        </Box>
      </Container>
    </Flex>
  );
};

export default Layout;
