import { useState } from "react";
export default function useCounter(val, step) {
   const [count, setCount] = useState(val);

   function increment() {
      setCount(count + step);
   }
   function decrement() {
      setCount(count - step);
   }
   return [count, increment, decrement];
}
