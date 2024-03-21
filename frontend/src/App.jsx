
import React from 'react';
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Patrners from './pages/Partners';
import AdmDashboard from './pages/AdmDashboard';
import Coach from './pages/Coach';
import Dashboard from './pages/Dashboard';
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
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/partners' element={<Patrners />} />
        <Route path='/coach' element={<Coach />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
