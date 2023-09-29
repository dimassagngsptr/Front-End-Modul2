/* eslint-disable no-unused-expressions */
import { Box, Button, Flex, Input, Stack, list } from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function ToDoList() {
   const [getAdd, setAadd] = useState([])
   const inputRef = useRef();
   const addList = () => {
      let list = inputRef.current.value
      if (list === "") {
         alert("please input a list")
      } else{
         setAadd([...getAdd],{list: list, isDone: false});
      }
      inputRef.current.value = "";
      console.log(getAdd);
   };

   return (
      <Stack height="auto">
         <Box
            textAlign="center"
            fontSize="30px"
            fontWeight="bold"
            margin="50px auto"
            width="550px"
            rounded="15px">
            To Do List
            <Flex justifyContent="center" margin="20px 0">
               <Input
                  width="300px"
                  height="40px"
                  border="2px"
                  placeholder="Input your list"
                  ref={inputRef}></Input>
               <Button
                  onClick={addList}
                  margin="0 0 0 20px"
                  bgColor="green.100"
                  color="black">
                  Add list
               </Button>
            </Flex>
            <Flex>{getAdd}</Flex>
         </Box>
      </Stack>
   );
}
