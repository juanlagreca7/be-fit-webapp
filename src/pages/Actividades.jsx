import MenuLateral from "../components/MenuLateral";

function Actividades() {
  return (
    <div className="flex">
      <MenuLateral />
      <div className="flex-grow p-10">
        <h2 className="text-5xl font-zendots">Actividades</h2>
      </div>
    </div>
  );
}

export default Actividades;
