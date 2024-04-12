import HuginMunin from "../public/images/hugin-munin.webp";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
        <img src={HuginMunin} alt="Cuervo" className="w-full h-full mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Fuera de Servicio
        </h1>
        <p className="text-gray-600 text-center mb-4">
          Lo sentimos, parece que has llegado a un lugar donde no deberías
          estar. Nuestro cuervo mensajero se ha tomado un descanso y no puede
          encontrar el camino correcto.
        </p>
        <p className="text-gray-600 text-center mb-4">
          Puedes intentar volver atrás y encontrar un nuevo camino, o puedes
          contactarnos para informarnos sobre este problema.
        </p>
        <a href="/" className="text-blue-500 hover:underline">
          Regresar a la página de inicio
        </a>
      </div>
    </>
  );
};

export default NotFound;
