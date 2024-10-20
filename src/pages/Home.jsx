import { useAuth } from "../context/AuthContext";

function Home() {
  const { usuario, cerrarSesion, cargando } = useAuth();

  const handleLogout = async () => {
    try {
      await cerrarSesion();
    } catch (error) {
      console.log(error);
    }
  };

  if (cargando) {
    return <h3>Cargando...</h3>;
  }

  return (
    <div>
      <div>
        <h1>BIENVENIDO {usuario.email}!</h1>
      </div>
      <div>
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
    </div>
  );
}

export default Home;
