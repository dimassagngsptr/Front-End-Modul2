import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const Sidebar = () => {
   const user = useSelector((state) => state.user.value);

   return (
      <Box>
         <Text>{user.name}</Text>
         <Text>{user.email}</Text>
      </Box>
   );
};
