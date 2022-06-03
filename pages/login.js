import { Box } from "@chakra-ui/react";

const Login = () => {
    return (
        <div>
        <h1>Login</h1>
        <Box as="form" width="400px" bgColor="gray.400" display="flex" alignItems="center" justifyCenter="center" flexDirection="column">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
        </Box>
        </div>
    );
}
export default Login;