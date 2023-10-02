import {
   Box,
   Button,
   Flex,
   Heading,
} from "@chakra-ui/react";
import { useState } from "react";
export default function Counter() {
   const [count, setCount] = useState(0);

   function increment() {
      return setCount(count + 1);
   }
   function decrement() {
      return setCount(count - 1);
   }
   

   return (
      <Box display="flex" justifyContent="center" alignItems="center" height="500px">
         <Flex>
            <Button onClick={decrement} margin="0 30px" backgroundColor="red">-</Button>
            <Heading>{count}</Heading>
            <Button onClick={increment} margin="0 30px" backgroundColor="green">+</Button>
         </Flex>
      </Box>
   );
}
