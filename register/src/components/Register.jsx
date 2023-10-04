"use client";

import {
   Flex,
   Box,
   FormControl,
   FormLabel,
   Input,
   InputGroup,
   Stack,
   Button,
   Heading,
   InputRightElement,
   useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const registSchema = Yup.object().shape({
   name: Yup.string(),
   email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
   password: Yup.string()
      .min(3, "Password must be at least 3 characters at minimum")
      .required("Password is required"),
});

export default function Register() {
   const [showPassword, setShowPassword] = useState(false);

   const handleSubmit = async (data) => {
      try {
         const response = await axios.post(
            "http://localhost:2000/users/",
            data
         );
         console.log(response);
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <Box>
         <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={registSchema}
            onSubmit={(values, action) => {
               handleSubmit(values);
               action.resetForm();
            }}>
            {(props) => {
               return (
                  <Flex minH={"100vh"} align={"center"} justify={"center"}>
                     <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                        <Stack align={"center"}>
                           <Heading fontSize={"4xl"}>
                              Sign in to your account
                           </Heading>
                        </Stack>
                        <Form>
                           <Box rounded={"lg"} boxShadow={"lg"} p={8}>
                              <Stack spacing={4}>
                                 <FormControl id="name">
                                    <FormLabel>Name</FormLabel>
                                    {/* <Input type="text" /> */}
                                    <Input
                                       as={Field}
                                       type="text"
                                       name="name"
                                       placeholder="Input Name"
                                    />
                                    <ErrorMessage
                                       component="div"
                                       name="name"
                                       style={{ color: "red" }}
                                    />
                                 </FormControl>
                                 <FormControl id="email">
                                    <FormLabel>Email address</FormLabel>
                                    <Input
                                       as={Field}
                                       type="text"
                                       name="email"
                                       placeholder="Input email"
                                    />
                                    <ErrorMessage
                                       component="div"
                                       name="email"
                                       style={{ color: "red" }}
                                    />
                                    {/* <Input type="email" /> */}
                                 </FormControl>
                                 <FormControl id="password" isRequired>
                                    <FormLabel>Password</FormLabel>
                                    <InputGroup>
                                       <Input
                                          as={Field}
                                          type={
                                             showPassword ? "text" : "password"
                                          }
                                          name="password"
                                          placeholder="Input Password"
                                       />
                                       <ErrorMessage
                                          component="div"
                                          name="password"
                                          style={{ color: "red" }}
                                       />
                                       {/* <Input
                                       type={showPassword ? "text" : "password"}
                                    /> */}
                                       <InputRightElement h={"full"}>
                                          <Button
                                             variant={"ghost"}
                                             onClick={() =>
                                                setShowPassword(
                                                   (showPassword) =>
                                                      !showPassword
                                                )
                                             }>
                                             {showPassword ? (
                                                <ViewIcon />
                                             ) : (
                                                <ViewOffIcon />
                                             )}
                                          </Button>
                                       </InputRightElement>
                                    </InputGroup>
                                 </FormControl>
                                 <Stack spacing={10}>
                                    <Button
                                       type="submit"
                                       bg={"blue.400"}
                                       color={"white"}
                                       _hover={{
                                          bg: "blue.500",
                                       }}>
                                       Sign in
                                    </Button>
                                 </Stack>
                              </Stack>
                           </Box>
                        </Form>
                     </Stack>
                  </Flex>
               );
            }}
         </Formik>
      </Box>
   );
}
