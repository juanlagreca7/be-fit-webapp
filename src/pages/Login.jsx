import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Alerta } from "../components/Alerta";

function Login() {
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  
  const { ingresar, resetearContrasena } = useAuth();

  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError();
    try {
      await ingresar(usuario.email, usuario.password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          setError("Por favor ingresa un correo valido.");
          break;
        case "auth/user-not-found":
          setError("No existe ninguna cuenta asociada a este correo.");
          break;
        case "auth/wrong-password":
          setError("Contraseña incorrecta.");
          break;
        case "auth/missing-password":
          setError("Por favor ingresa una contraseña.");
          break;
        default:
          setError("Correo o contraseña incorrecta.");
      }
    }
  };

  const handleResetPassword = async () => {
    if (!usuario.email) return setError("Por favor, ingresa tu correo para restablecer tu contraseña.");
    try {
      await resetearContrasena(usuario.email);
      setError("Te hemos enviado un correo para restablecer tu contraseña.");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("No existe ninguna cuenta con ese correo.");
      } else {
        setError("Ocurrió un error al intentar restablecer la contraseña.");
      }
    }
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center overflow-auto">
      <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-md max-h-screen ">
        {/* Logo */}
        <div className="flex justify-center mb-5">
          <img
            src="../public/images/logo.jpg"
            alt="Logo"
            className="w-80 h-60"
          />
        </div>
        {/* Titulo */}
        <h1 className="text-white font-zendots text-center text text-3xl mb-6">
          Iniciar Sesión
        </h1>
        {/* Formulario */}

        {error && <Alerta mensaje={error} />}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-white font-zendots " htmlFor="email">
              Correo electrónico
            </label>
            <input
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-white font-zendots" htmlFor="password">
              Contraseña
            </label>
            <input
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
            />
          </div>
          {/* Enlace "¿Olvidaste tu contraseña?" */}
          <div className="text-left">
            <a
              href="#"
              className="text-sm text-indigo-600 hover:text-white"
              onClick={handleResetPassword}
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          {/* Botón */}
          <div>
            <button className="w-full py-2 px-4 bg-[rgba(35,176,183,1)] text-black font-zendots rounded-md hover:bg-[rgba(35,176,183,0.9)] focus:outline-none focus:ring-2 focus:ring-[rgba(35,176,183,1)] focus:ring-offset-2">
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
