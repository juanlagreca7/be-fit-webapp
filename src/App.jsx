import { RutasProtegidas } from "./components/RutasProtegidas";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Administradores from "./pages/Administradores";
import Socios from "./pages/Socios";
import Planes from "./pages/Planes";
import Pagos from "./pages/Pagos";
import Rutinas from "./pages/Rutinas";
import Actividades from "./pages/Actividades";
import Reservas from "./pages/Reservas";
import Notificaciones from "./pages/Notificaciones";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <RutasProtegidas>
              <div className="flex">
                <Home />
              </div>
            </RutasProtegidas>
          }
        />
        <Route path="login" element={<Login />} />
        <Route
          path="administradores"
          element={
            <RutasProtegidas>
              <div className="flex">
                <Administradores />
              </div>
            </RutasProtegidas>
          }
        />
        <Route
          path="socios"
          element={
            <RutasProtegidas>
              <div className="flex">
                <Socios />
              </div>
            </RutasProtegidas>
          }
        />
        <Route
          path="planes"
          element={
            <RutasProtegidas>
              <div className="flex">
                <Planes />
              </div>
            </RutasProtegidas>
          }
        />
        <Route
          path="pagos"
          element={
            <RutasProtegidas>
              <div className="flex">
                <Pagos />
              </div>
            </RutasProtegidas>
          }
        />
        <Route
          path="rutinas"
          element={
            <RutasProtegidas>
              <div className="flex">
                <Rutinas />
              </div>
            </RutasProtegidas>
          }
        />
        <Route
          path="actividades"
          element={
            <RutasProtegidas>
              <div className="flex">
                <Actividades />
              </div>
            </RutasProtegidas>
          }
        />
        <Route
          path="reservas"
          element={
            <RutasProtegidas>
              <div className="flex">
                <Reservas />
              </div>
            </RutasProtegidas>
          }
        />
        <Route
          path="notificaciones"
          element={
            <RutasProtegidas>
              <div className="flex">
                <Notificaciones />
              </div>
            </RutasProtegidas>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
