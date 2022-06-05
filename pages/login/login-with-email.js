import {Box,Flex,Text,Input,Heading , Link as StyledLink, Button, Icon} from '@chakra-ui/react'
import Link from 'next/link';
import {ChevronLeft} from 'react-feather'
import {useState} from "react";
const LoginWithEmail = () => {
    const [formFields ,setFormFields] = useState({
        email:'',
        password:''
    }); 
    
    const handleChange = (e) => {
        e.preventDefault();
        setFormFields({...formFields, [e.target.name]:e.target.value })
    }
    return (
       <Flex width="100%"   display="flex" alignItems="center" justifyContent="center" flexDirection="row" flexWrap="wrap">
                   <Box width="100%" maxW="380px"  minH="70vh"  display="flex" flexDirection="row" alignItems="center" justifyContent="center" flexWrap="wrap">

           <Heading as="h1" my="15px" fontSize="xl"> Log In</Heading>
           <Box width="100%" my="5px" display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap" flexDirection="row">
               <Text fontWeight="500" fontSize="sm">Email or Username</Text>
               <Link href="/login-with-phone" passHref>
                   <StyledLink fontWeight="500" fontSize="sm" >Log in with phone</StyledLink></Link>
           </Box>
           <Box display="flex" mb="10px" as="form" gap="7px" flexDirection="column" width="100%">
  <Input bgColor="#F1F1F2" name="email" borderWidth="1px" borderColor="blackAlpha.100" rounded="sm" id='email'  py="23px"  type='email' placeholder="Email or Password" />
    <Input bgColor="#F1F1F2" name="password" borderWidth="1px" borderColor="blackAlpha.100" rounded="sm" py="25px" id='password' type='password' placeholder="Password" />
    <Link href="/login-with-phone" passHref>
                   <StyledLink py="3px" color="gray.700" fontSize="xs" >Forget Password</StyledLink></Link>
    <Button bgColor="#F1F1F2" py="25px" mb="10px" rounded="none" >Log In</Button>
    <Box width="full" my="15px" py="10px" textAlign="center" display="flex" alignItems="center" justifyContent="center" flexDirection="row">
        <Icon as={ChevronLeft}/>
        <Text fontSize="sm" fontWeight="500">Go Back</Text>
        
    </Box>

</Box>
           </Box>
       </Flex>
    )
}

export default LoginWithEmail;