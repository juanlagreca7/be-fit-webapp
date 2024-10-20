import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export function RutasProtegidas({ children }) {
  const { usuario, cargando } = useAuth();
  if (cargando) return <h3>Cargando...</h3>;
  if (!usuario) return <Navigate to="/login" />;
  return <>{children}</>;
}
