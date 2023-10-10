import { useState } from "react";

export const Button = () => {
   const [display, setDisplay] = useState("block");
   const handleClick = () => {
      setDisplay("none");
   };
   return (
      <button onClick={handleClick} style={{ display: display }}>
         Click me
      </button>
   );
};
