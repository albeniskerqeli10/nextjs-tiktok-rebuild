import { Flex, Box,Input, Button, Stack, HStack, IconButton } from "@chakra-ui/react";
import Image from "next/image";
 import {Plus ,MoreVertical ,Search} from "react-feather"
import tiktokLogo from "../../../public/tiktok-2.png";
import { useRouter } from "next/router";
import Link from "next/link";
const Navbar = () => {
  const router = useRouter();


const navigateToLogin = () => {
  router.push("/login");
}

  return (
    <Flex
      as="header"
      width="100%"
      py="5px"
      pb="10px"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      minH="70px"
      flexWrap="wrap"
    >
      <Box cursor="pointer" width="200px" height="70px" display="flex" alignItems="center" justifyContent="center" flexWrap="wrap">
        <Link  href="/" passHref>
        <Image  src={tiktokLogo} alt="tiktok logo"  width="140px" height="50px"/>
        </Link>
      </Box>
      <Box as="form" width="350px" py="2px" height="45px" rounded="full" display="flex" alignItems="center" justifyContent='center' flexDirection="row" bgColor="blackAlpha.100"  boxShadow="none" >
        <Input flex="1" bgColor="transparent" placeholder="Search accounts and videos" shadow="none" rounded="none" border="none" _focus={
         {
          outline:"none"
         }
        }/>
        <IconButton colorScheme="transparent" mx="5px" borderLeft="1px solid lightgray" rounded="none"  icon={<Search color="#A6A7AC" size="20px"/>} _placeholder="#000"/>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <HStack spacing="20px" flexWrap="wrap">
        <Button leftIcon={<Plus/>} colorScheme='gray' size="md" rounded="sm" variant='outline'>Upload</Button>
        <Button onClick={navigateToLogin}  bgColor="#FE2C55" textColor="white" rounded="sm" size="md" px="7"  >Log In</Button>
        <IconButton  aria-label='Menu' colorScheme="transparent" icon={<MoreVertical color="black" />} />
        </HStack>
      </Box>
    </Flex>
  );
};

export default Navbar;
