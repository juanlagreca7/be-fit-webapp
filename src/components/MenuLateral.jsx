import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const MenuLateral = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const { cerrarSesion } = useAuth();

  const handleLogout = async () => {
    try {
      await cerrarSesion();
    } catch (error) {
      console.log(error);
    }
  };

  const abrirModal = () => {
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="bg-black h-screen w-64 flex flex-col justify-between flex-shrink-0 overflow-y-auto">
      <div className="p-6">
        <Link to="/">
          <img src="../public/icon.jpg" alt="Logo" className="w-30 h-30" />
        </Link>
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
      <div className="p-6">
        <a
          href="#"
          onClick={abrirModal}
          className="text-[rgba(35,176,183,1)] font-zendots hover:text-white text-xl"
        >
          Cerrar Sesión &#x2192;
        </a>
      </div>

      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-black font-zendots text-lg">
              ¿Estás seguro de que deseas cerrar sesión?
            </h2>
            <div className="flex justify-end mt-4 space-x-4">
              <button
                onClick={cerrarModal}
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-md"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  handleLogout();
                  cerrarModal();
                }}
                className="bg-[rgba(35,176,183,1)] hover:bg-[rgba(29,140,146,1)] text-white px-4 py-2 rounded-md"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuLateral;
