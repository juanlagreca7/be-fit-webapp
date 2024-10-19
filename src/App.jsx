import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Administradores from "./pages/Administradores";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="administradores" element={<Administradores />} />
    </Routes>
  );
}

export default App;
