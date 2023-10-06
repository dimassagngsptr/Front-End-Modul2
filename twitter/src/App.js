import { HomePage } from "./pages/HomePage";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { setData } from "./redux/regist";
import { DashboardPage } from "./pages/Dashboard";
import { Button } from "@chakra-ui/react";

function App() {
   const dispatch = useDispatch();
   let id = localStorage.getItem("id");

   const keepLogin = async () => {
      try {
         let response = await axios.get(`http://localhost:2000/users/${id}`);
         dispatch(setData(response.data));
         console.log(response.data);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      keepLogin();
   }, []);
   console.log(id);

   // console.log(id);

   return (
      <>
         <Routes>
            <Route
               path="/"
               element={id ? <Navigate to="/dashboard" /> : <HomePage />}
            />
            <Route
               path="/dashboard"
               element={id ? <DashboardPage /> : <Navigate to="/" />}
            />
         </Routes>
      </>
   );
}

export default App;
