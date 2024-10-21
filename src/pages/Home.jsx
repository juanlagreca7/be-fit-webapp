import MenuLateral from "../components/MenuLateral";
import { useAuth } from "../context/AuthContext";

function Home() {
  const { usuario, cargando } = useAuth();

  if (cargando) {
    return <h3>Cargando...</h3>;
  }

  return (
    <div className="flex">
      <MenuLateral />
      <div className="flex-grow p-10">
        <h2 className="text-5xl font-zendots">Bienvenido {usuario.email}!</h2>
      </div>
    </div>
  );
}

export default Home;
