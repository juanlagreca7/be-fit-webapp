import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Administradores() {
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();

  const { registrar } = useAuth();

  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await registrar(usuario.email, usuario.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {/* Titulo */}
      <div>
        <h2>Agregar Administrador</h2>
      </div>
      {/* Formulario */}
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="ejemplo@ejemplo.com"
            onChange={handleChange}
          />
          <label htmlFor="contrasena">Contraseña:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
          {/* Boton */}
          <button>Agregar</button>
        </form>
      </div>
    </div>
  );
}

export default Administradores;
