import { HomePage } from "./pages/HomePage";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { setData } from "./redux/regist";
import { DashboardPage } from "./pages/Dashboard";

function App() {
   const dispatch = useDispatch();
   const id = localStorage.getItem("id");
   // console.log(id);
   const keepLogin = async () => {
      try {
         const response = await axios.get(`http://localhost:2000/users/${id}`);
         dispatch(setData(response.data));
      } catch (error) {
         console.log(error);
      }
   };

   const data = async () => {
      try {
         const response = await axios.get("http://localhost:2000/users");
         dispatch(setData(response.data));
      } catch (error) {
         console.log(error);
      }
   };
   useEffect(() => {
      keepLogin();
   }, []);
   return (
      <>
         <Routes>
            <Route path="/" element={id ? <Navigate to="/dashboard"/> : <HomePage />} />
            <Route path="/dashboard" element={id ? <DashboardPage /> : <Navigate to="/" />} />
         </Routes>
      </>
   );
}

export default App;
