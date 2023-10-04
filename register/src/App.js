import axios from "axios";
import { Navbar } from "./components/Navbar";
import Register from "./components/Register";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setData } from "./redux/registSlice";
import { RegistPage } from "./pages/RegisterPage";
import { Route, Routes } from "react-router-dom";
import { UsersPage } from "./pages/UsersPage";

function App() {
   const dispatch = useDispatch();
   const [list, setList] = useState([]);

   const data = async () => {
      try {
         const response = await axios.get("http://localhost:2000/users");
         dispatch(setData(response.data));
         setList(response);
      } catch (error) {
         console.log(error);
      }
   };
   console.log(list);

   useEffect(() => {
      data();
   }, []);
   return (
      <div>
         <Navbar />
         <Routes>
            <Route path="/" element={<RegistPage />} />
            <Route path="/users" element={<UsersPage />} />
         </Routes>
      </div>
   );
}

export default App;
