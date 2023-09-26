import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Chat({ message, setMessage }) {
   const textRef = useRef();
   const navigate = useNavigate();

   const onSubmit = () => {
      if (!textRef.current.value) {
         alert("Please input text");
      } else {
         setMessage(textRef.current.value);
         navigate("/list");
      }
   };
   return (
      <div className="container">
         <h1>ChitChat - Express Your Feeling</h1>
         <div className="input">
            <textarea className="textArea" ref={textRef} id="text"></textarea>
            <button onClick={onSubmit} className="submit">
               Submit
            </button>
         </div>
      </div>
   );
}
