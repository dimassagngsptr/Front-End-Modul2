import {
   Table,
   Thead,
   Tbody,
   Tfoot,
   Tr,
   Th,
   Td,
   TableCaption,
   TableContainer,
   Box,
   Flex,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const User = () => {
   const data = useSelector((state) => state.regist.value);
   return (
      <Flex justifyContent="center" alignItems="center">
         <TableContainer width="100vw" textAlign="center">
            <Table variant="simple" textAlign="center">
               <TableCaption>
                  Data Users
               </TableCaption>
               <Thead>
                  <Tr>
                     <Th>Name</Th>
                     <Th>Email</Th>
                     <Th>Password</Th>
                  </Tr>
               </Thead>
               <Tbody>
                  {data.map((item, index) => {
                     return (
                        <Tr key={index}>
                           <Td>{item.name}</Td>
                           <Td>{item.email}</Td>
                           <Td>{item.password}</Td>
                        </Tr>
                     );
                  })}
               </Tbody>
            </Table>
         </TableContainer>
      </Flex>
   );
};
