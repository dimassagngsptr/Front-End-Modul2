import { Heading, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export const Navbar = () => {
   const data = useSelector((state) => state.regist.value);
   return (
      <Flex justifyContent="space-evenly" alignItems="center">
         <Heading>Network Call Practice</Heading>
         <Flex gap="20px">
            <Link to="/users">
               <Text>Users</Text>
            </Link>
            <Link to="/">
               <Text>Register</Text>
            </Link>
         </Flex>
      </Flex>
   );
};
