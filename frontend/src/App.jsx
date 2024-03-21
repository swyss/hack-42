import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateStartup from "./pages/startup/create/create";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/startup/create" element={<CreateStartup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
