import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function Stopwatch() {
   const [active, setActive] = useState(false);
   const [time, setTime] = useState(0);
   const interval = useRef(null);
   const [click, setClick] = useState();

   function isStart() {
      setActive(!active);
      interval.current = setInterval(() => {
         setTime((time) => time + 1);
      }, 1000);
   }

   function isPaused() {
      setActive(active);
      clearInterval(interval.current);
   }

   

   return (
      <Box>
         <Heading>Stopwatch</Heading>
         <Heading>jam:{time}</Heading>
         <Flex>
            <Button onClick={isStart}>Start</Button>
            <Button onClick={isPaused}>Pause</Button>
            <Button>Reset</Button>
         </Flex>
      </Box>
   );
}
