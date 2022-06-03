import { Box,Text,IconButton ,Heading, Icon, Flex } from "@chakra-ui/react";
import {Facebook,User ,Twitter,Square,Twitch} from "react-feather"
import SocialItem from "../../components/UI/Socialtem"
import {useRouter} from 'next/router'
const Login = () => {
    const router = useRouter();
    
    
    const redirectToEmailPassword = () => {
        return router.push("/login/login-with-email");
    }
    

    return (
        <Flex width="100%" alignItems="center" justifyContent="center" flexDirection="column" flexWrap="wrap">
        <Box width="320px" minH="80vh"  display="flex" flexDirection="column" alignItems="center" justifyContent="center" flexWrap="wrap">
        
        <Heading as="h1" fontSize="2xl" fontWeight="bold">Log In to TikTok</Heading>
        <Text fontSize="sm" py="10px" color="blackAlpha.700" align="center">Manage your account, check notifications, comment on videos, and more</Text>
        <Box my="10px" py="10px" minH="100px" width="100%" display="flex" alignItems="center" gap="11px" justifyContent="center"  flexWrap="wrap">
            <SocialItem text="Use QR Code" icon={<Square size="20"/>}/>
<SocialItem onClick={redirectToEmailPassword} text="Use phone / email / username" icon={<User size="20"/>}/>

<SocialItem text="Continue with Facebook" icon={<Facebook size="20"/>}/>
            <SocialItem text="Continue with Twitter" icon={<Twitter size="20"/>}/>
            <SocialItem text="Continue with Twitch" icon={<Twitch size="20"/>}/>

        </Box>
                    <Text>Don't have an account? Sign Up</Text>
        </Box>
        

        </Flex>
    );
}
export default Login;