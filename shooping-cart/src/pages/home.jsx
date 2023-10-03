import "../input.css";
import { useState, useEffect } from "react";
import Navbar from "../component/navbar";

export const HomePage = () => {
   const [cart, setCart] = useState();

   return <Navbar />;
};
