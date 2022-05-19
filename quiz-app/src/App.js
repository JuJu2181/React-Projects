import React from "react";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";

export default function App() { 
  return (
    <div className="App">
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </div>
  );
}
