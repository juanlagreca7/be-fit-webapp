export function Alerta({ mensaje }) {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700  py-2 rounded relative mb-2 text-center">
      <span className="sm:inline block">{mensaje}</span>
    </div>
  );
}
