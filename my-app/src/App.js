import { useEffect, useState } from "react";
import axios from "axios";
import { Formulir } from "./components/form";
function App() {
   const [list, setList] = useState([]);

   const getData = async () => {
      try {
         //using fetch
         //  const response = await fetch(
         //     "https://jsonplaceholder.typicode.com/posts"
         //  );
         //  const data = await response.json();
         //  setList(data);
         const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
         );
         setList(data);
      } catch (error) {
         console.log(error);
      }
   };

   console.log(list);

   useEffect(() => {
      getData();
   }, []);

   return (
      <div>
         <h1>INI HOME</h1>
         <Formulir />
      </div>
   );
}

export default App;
