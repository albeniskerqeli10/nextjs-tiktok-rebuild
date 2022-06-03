import { Box,Text,IconButton ,Heading, Icon, Flex } from "@chakra-ui/react";
import {Facebook,User ,Twitter,Square,Twitch} from "react-feather"

const SocialItem = ({icon,text,onClick}) => {
    return (
        <Box onClick={onClick} cursor="pointer" width="100%" h="45px" borderWidth="1px" borderColor="blackAlpha.300" display="flex" alignItems="center" justifyContent="space-between"> 
                <IconButton height="100%" bgColor="transparent"  borderRightWidth="1px" rounded="none" borderColor="blackAlpha.300"  icon={icon}/>
                <Text flex="1" fontSize="sm"  align="center" fontWeight="bold" color="black">{text}</Text>
            </Box>
    )
}

export default SocialItem;