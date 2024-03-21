import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateStartup from "./pages/startup/create/create";
import LoginPage from "./pages/login/login";
import Overview from "./pages/startup/overview/overview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/startup/create" element={<CreateStartup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/startup/overview" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
