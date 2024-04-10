/* eslint-disable react/prop-types */
const Tarjeta = ({ imagen, nombre, apellido }) => {
  return (
    <div className="w-1/3 p-4">
      <div className="w-full sm:w-1/3 md:w-2/3 lg:w-3/4 mx-auto rounded-lg shadow-md overflow-hidden">
        <img
          src={imagen}
          alt={`${nombre} ${apellido}`}
          className="w-full h-48 object-cover object-center"
        />
        <div className="p-4">
          <h2 className=" sm:text-sm lg:text-4x1 font-medium font-serif">
            {apellido}
          </h2>
          <h2 className=" sm:text-sm lg:text-4xl font-medium font-serif">
            {nombre}
          </h2>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="3000"
      className="flex flex-row"
    >
      <Tarjeta
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1InjisA-spdMOVUDZtciJlpRgBUaTqwOGrpYGXoXcw&s"
        nombre="Titidot"
        apellido="Munning"
      />
      <Tarjeta
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1InjisA-spdMOVUDZtciJlpRgBUaTqwOGrpYGXoXcw&s"
        nombre="SolraCita"
        apellido="Templarios"
      />
      <Tarjeta
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1InjisA-spdMOVUDZtciJlpRgBUaTqwOGrpYGXoXcw&s"
        nombre="Caraza"
        apellido="Huggins"
      />
    </div>
  );
};

export default App;
