import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/firebase.js";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("No hay un auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState({});
  const [cargando, setCargando] = useState(true);

  const registrar = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const ingresar = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const cerrarSesion = () => {
    auth.signOut(auth);
  };

  const resetearContrasena = (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsuario(currentUser);
      setCargando(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <authContext.Provider
      value={{
        registrar,
        ingresar,
        usuario,
        cerrarSesion,
        cargando,
        resetearContrasena,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
