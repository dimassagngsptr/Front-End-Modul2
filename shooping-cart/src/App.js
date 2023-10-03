import { HomePage } from "./pages/home";
import { useState, useEffect } from "react";
import axios from "axios";
import {setData} from "./redux/cartSlice"
import {useDispatch} from 'react-redux'


function App() {
   const dispatch = useDispatch();

   const retrieveCart = async () => {
      try {
         const response = await axios.get("http://localhost:2000/cart");
         dispatch(setData(response.data))
      } catch (error) {
         console.log(error);
      }
   };
   useEffect(() => {
      retrieveCart();
   }, []);

   return (
      <div>
         <HomePage />
      </div>
   );
}

export default App;
