import { useState } from "react";

export default function ChatDetail({ message }) {
   return (
      <div className="Container">
         <h1>ChitChat - Express Your Feeling</h1>
         <div className="detail">
            <div className="avatar">I</div>
            <div className="message">{message}</div>
         </div>
      </div>
   );
}
