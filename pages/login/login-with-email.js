import {Box,Flex,Text,FormControl,Input,FormLabel,Heading , Link as StyledLink, Button} from '@chakra-ui/react'
import Link from 'next/link';
const LoginWithEmail = () => {
    return (
       <Flex width="100%" flexDirection="column">
                   <Box width="400px" minH="80vh"  display="flex" flexDirection="column" alignItems="center" justifyContent="center" flexWrap="wrap">

           <Heading as="h1"> Log In</Heading>
           <Box width="100%" my="10px" display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap" flexDirection="row">
               <Text fontWeight="bold" fontSize="sm">Email or Username</Text>
               <Link href="/login-with-phone" passHref>
                   <StyledLink fontWeight="bold" fontSize="sm" >Log in with phone</StyledLink></Link>
           </Box>
           <Box display="flex" as="form" gap="10px" flexDirection="column" width="100%">
  <Input bgColor="#F1F1F2" rounded="none" id='email'  py="25px"  type='email' />
    <Input bgColor="#F1F1F2" rounded="none" py="25px" id='password' type='password' />
    <Link href="/login-with-phone" passHref>
                   <StyledLink color="gray.700" fontSize="sm" >Forget Password</StyledLink></Link>
    <Button bgColor="#F1F1F2" py="25px" rounded="none" >Log In</Button>

</Box>
           </Box>
       </Flex>
    )
}

export default LoginWithEmail;