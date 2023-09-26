import { useEffect, useState } from "react";
import useCounter from "../hooks/counter";

export default function Count() {
   //    const [count, setCount] = useState(0);
   const [count, increment, decrement] = useCounter(0, 5);

   useEffect(() => {
      document.title = `You clicked ${count} times`;
   });
   return (
      <div>
         <p>You Clicked {count}</p>
         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
      </div>
   );
}
