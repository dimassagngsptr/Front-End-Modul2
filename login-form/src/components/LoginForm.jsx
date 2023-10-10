"use client";

import {
   Flex,
   Box,
   FormControl,
   FormLabel,
   Input,
   Stack,
   Button,
   Text,
   InputGroup,
   InputRightElement,
   useColorModeValue,
   Heading,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { useRef, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
   signOut,
   GoogleAuthProvider,
   signInWithPopup,
} from "firebase/auth";
import { auth } from "../services/firebase";
const provider = new GoogleAuthProvider();

export const Login = () => {
   const [user, setUser] = useState({});
   const emailRef = useRef();
   const passRef = useRef();
   onAuthStateChanged(auth, (userLogin) => {
      setUser(userLogin);
      console.log(userLogin);
   });

   const [showPassword, setShowPassword] = useState(false);
   const onRegister = async () => {
      try {
         await createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passRef.current.value
         );
         emailRef.current.value = "";
         passRef.current.value = "";
      } catch (err) {
         console.error(err);
      }
   };
   const onLogin = async () => {
      try {
         await signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passRef.current.value
         );
         emailRef.current.value = "";
         passRef.current.value = "";
      } catch (err) {
         console.error(err);
      }
   };
   return (
      <Flex
         minH={"100vh"}
         align={"center"}
         justify={"center"}
         bg={useColorModeValue("gray.50", "gray.800")}>
         <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
               <Heading>{user?.email}</Heading>
            </Stack>
            <Box
               rounded={"lg"}
               bg={useColorModeValue("white", "gray.700")}
               boxShadow={"lg"}
               p={5}>
               <Stack spacing={4} width="100%">
                  <FormControl id="email" isRequired>
                     <FormLabel>Email address</FormLabel>
                     <Input type="email" width="400px" ref={emailRef} />
                  </FormControl>
                  <FormControl id="password" isRequired>
                     <FormLabel>Password</FormLabel>
                     <InputGroup>
                        <Input
                           type={showPassword ? "text" : "password"}
                           ref={passRef}
                        />
                        <InputRightElement h={"full"}>
                           <Button
                              variant={"ghost"}
                              onClick={() =>
                                 setShowPassword(
                                    (showPassword) => !showPassword
                                 )
                              }>
                              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                           </Button>
                        </InputRightElement>
                     </InputGroup>
                  </FormControl>
                  <Stack spacing={2}>
                     <Stack
                        direction={{ base: "column", sm: "row" }}
                        align={"start"}
                        justify={"space-between"}></Stack>
                     <Button
                        onClick={onRegister}
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                           bg: "blue.500",
                        }}>
                        Sign up
                     </Button>
                     <Button
                        onClick={onLogin}
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                           bg: "blue.500",
                        }}>
                        Sign in
                     </Button>
                     <Button
                        onClick={() => signOut(auth)}
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                           bg: "blue.500",
                        }}>
                        Sign out
                     </Button>
                     <Button
                        onClick={() => signInWithPopup(auth, provider)}
                        border="1px solid"
                        borderColor="gray.300"
                        bg={"white"}
                        color={"black"}
                        _hover={{
                           bg: "gray.100",
                        }}>
                        <FcGoogle size={"20px"} />
                        <Text px="10px">Sign in with Google</Text>
                     </Button>
                  </Stack>
               </Stack>
            </Box>
         </Stack>
      </Flex>
   );
};
