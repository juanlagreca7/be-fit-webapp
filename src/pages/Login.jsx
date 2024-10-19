

const Login = () => {
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="../public/images/logo.jpg" alt="Logo" />
        </div>
        {/* Titulo */}
        <h1 className="text-white font-zendots text-center text text-3xl mb-6">
          Iniciar Sesión
        </h1>
        {/* Formulario */}
        <form className="space-y-4">
          <div>
            <label className="text-white font-zendots " htmlFor="email">
              Correo electrónico
            </label>
            <input
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div>
            <label className="text-white font-zendots" htmlFor="contrasena">
              Contraseña
            </label>
            <input
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="password"
              name="contrasena"
              id="contrasena"
            />
          </div>
          {/* Enlace "¿Olvidaste tu contraseña?" */}
          <div className="text-LEFT">
            <a href="#" className="text-sm text-indigo-600 hover:text-white">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          {/* Botón */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[rgba(35,176,183,1)] text-black font-zendots rounded-md hover:bg-[rgba(35,176,183,0.9)] focus:outline-none focus:ring-2 focus:ring-[rgba(35,176,183,1)] focus:ring-offset-2"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
