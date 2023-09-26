// src/App.js

import React, { useState } from "react";
import ChatDetail from "./components/ChatDetail";
import Chat from "./components/Input";
import { Route, Routes } from "react-router-dom";

function App() {
   const [message, setMessage] = useState("");

   return (
      <div>
         <Routes>
            <Route
               path="/"
               element={<Chat setMessage={setMessage} message={message} />}
            />
            <Route path="/list" element={<ChatDetail message={message} />} />
         </Routes>
      </div>
   );
}

export default App;
