import { Counter } from "./components/counter";
import { Home } from "./components/todolist";
// import { List } from "./components/todolist";

function App() {
   const onStorage = () => {
      localStorage.setItem("id", 10);
   };
   const data = localStorage.getItem("id");
   console.log(data);
   return (
      <div>
         <h1>Ini Home</h1>
         <button onClick={onStorage}>Storage</button>
         <Counter />
         <div>
           <Home/>
         </div>
      </div>
   );
}

export default App;
