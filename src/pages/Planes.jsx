import MenuLateral from "../components/MenuLateral";

function Planes() {
  return (
    <div className="flex">
      <MenuLateral />
      <div className="flex-grow p-10">
        <h2 className="text-5xl font-zendots">Planes</h2>
      </div>
    </div>
  );
}

export default Planes;
