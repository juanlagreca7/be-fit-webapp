import Home from "./pages/Home";
import Login from "./pages/Login";
import Administradores from "./pages/Administradores";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="administradores" element={<Administradores />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
