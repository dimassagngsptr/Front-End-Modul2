import { useState } from "react";

export default function Home() {
   const [likes, setLikes] = useState(0);

   function handleClick() {
      return setLikes(likes + 1);
   }
   function handleClick2() {
      return setLikes(likes - 1);
   }
   function reset () {
      return setLikes(0);
   }
   return (
      <div>
         <h1>Likes {likes}</h1>
         <button onClick={handleClick}>Like </button>
         <button onClick={handleClick2}>Unlike </button>
         <button onClick={reset}>Reset </button>
      </div>
   );
}
