import { NavLink, Link } from "react-router-dom";

const MenuLateral = () => {
  return (
    <div className="bg-black h-screen w-64 flex flex-col justify-between flex-shrink-0 overflow-y-auto">
      {/* Logo */}
      <div className="p-6">
        <Link to="/">
          <img src="../public/icon.jpg" alt="Logo" className="w-30 h-30" />
        </Link>
        {/* Links */}
        <nav className="flex flex-col justify-around space-y-7">
          <NavLink
            to="/administradores"
            className="text-white font-zendots hover:text-[rgba(35,176,183,1)] text-lg"
          >
            Administradores
          </NavLink>
          <NavLink
            to="/socios"
            className="text-white font-zendots hover:text-[rgba(35,176,183,1)] text-lg"
          >
            Socios
          </NavLink>
          <NavLink
            to="/planes"
            className="text-white font-zendots hover:text-[rgba(35,176,183,1)] text-lg"
          >
            Planes
          </NavLink>
          <NavLink
            to="/pagos"
            className="text-white font-zendots hover:text-[rgba(35,176,183,1)] text-lg"
          >
            Pagos
          </NavLink>
          <NavLink
            to="/rutinas"
            className="text-white font-zendots hover:text-[rgba(35,176,183,1)] text-lg"
          >
            Rutinas
          </NavLink>
          <NavLink
            to="/actividades"
            className="text-white font-zendots hover:text-[rgba(35,176,183,1)] text-lg"
          >
            Actividades
          </NavLink>
          <NavLink
            to="/reservas"
            className="text-white font-zendots hover:text-[rgba(35,176,183,1)] text-lg"
          >
            Reservas
          </NavLink>
          <NavLink
            to="/notificaciones"
            className="text-white font-zendots hover:text-[rgba(35,176,183,1)] text-lg"
          >
            Notificaciones
          </NavLink>
        </nav>
      </div>
      {/* Cerrar sesión */}
      <div className="p-6">
        <a
          href="#"
          className="text-[rgba(35,176,183,1)] font-zendots hover:text-white text-xl"
        >
          Cerrar Sesión &#x2192;
        </a>
      </div>
    </div>
  );
};

export default MenuLateral;
