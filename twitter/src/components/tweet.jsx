import {
   Flex,
   Box,
   Input,
   Text,
   Heading,
   Button,
   Avatar,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
export const Tweets = () => {
   const [tweets, setTweets] = useState([]);
   const userName = useSelector((state) => state.user.value);
   const tweetRef = useRef();
   const getData = async () => {
      try {
         const response = await axios.get(
            "http://localhost:2000/tweets?_sort=id&_order=desc"
         );
         setTweets(response.data);
      } catch (err) {
         console.log(err);
      }
   };
   const handleButton = async () => {
      try {
         const input = {
            tweet: tweetRef.current.value,
            name: userName.name,
            email: userName.email,
         };
         const response = await axios.post(
            "http://localhost:2000/tweets/",
            input
         );
         console.log(response);
         console.log(input);
      } catch (err) {
         console.log(err);
      }
      window.location.reload();
   };

   useEffect(() => {
      getData();
   }, []);

   return (
      <Box width="50%" padding="5px" gap="20px">
         <Box
            border="1px solid"
            borderColor="gray.400"
            rounded="10px"
            height="200px"
            padding="10px">
            <Heading>Beranda</Heading>
            <Flex gap="40px" margin="10px 0">
               <Avatar name={userName.name} />
               <Input placeholder="" size="lg" width="50%" ref={tweetRef} />
            </Flex>
            <Button
               bg="blue.400"
               px="30px"
               rounded="30px"
               color="white"
               onClick={handleButton}>
               Tweet
            </Button>
         </Box>
         <Box>
            {tweets.map((item, index) => {
               return (
                  <Flex gap="20px" alignItems="center" border="1px solid">
                     <Avatar name={userName.name} size="md" />
                     <Text>
                        {item.name} {item.email}
                     </Text>
                     {item.tweet}
                  </Flex>
               );
            })}
         </Box>
      </Box>
   );
};
