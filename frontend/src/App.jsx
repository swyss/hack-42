import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Patrners from "./pages/Partners";
import AdmDashboard from "./pages/AdmDashboard";
import Coach from "./pages/Coach";
import Dashboard from "./pages/Dashboard";
import Request from "./pages/Request";
import CreateStartup from "./pages/startup/create/create";
import LoginPage from "./pages/login/login";
import Overview from "./pages/startup/overview/overview";
import RequestAdm from "./pages/RequestAdm";
export const UserContext = React.createContext(null);
function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/startup/create" element={<CreateStartup />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/startup/overview" element={<Overview />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/partners" element={<Patrners />} />
          <Route path="/coach" element={<Coach />} />
          <Route path="/request" element={<Request />} />
          <Route path="/requestadm" element={<RequestAdm />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
