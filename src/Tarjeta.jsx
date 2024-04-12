/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Tarjeta = ({ imagen, clan, lider }) => {
  return (
    <div className=" w-1/3 p-4">
      <div className="w-full sm:w-1/3 md:w-2/3 lg:w-3/4 mx-auto rounded-lg shadow-md overflow-hidden">
        <img
          src={imagen}
          alt={`${clan} ${lider}`}
          className="w-full h-48 object-cover object-center"
        />
        <div className="p-4">
          <h2 className=" sm:text-sm lg:text-4x1 font-medium font-serif">
            {clan}
          </h2>
          <h2 className=" sm:text-sm lg:text-4xl font-medium font-serif">
            {lider}
          </h2>
          <Link to="/Alianza" className="block mt-4 text-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Ver más
          </Link>

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
      className="flex flex-row flex-wrap justify-center"
    >
      <Tarjeta
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1InjisA-spdMOVUDZtciJlpRgBUaTqwOGrpYGXoXcw&s"
        clan="Muninn"
        lider="T1t1d0t"
      />
      <Tarjeta
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1InjisA-spdMOVUDZtciJlpRgBUaTqwOGrpYGXoXcw&s"
        clan="Huginn"
        lider="LCRCaraza"
      />
      <Tarjeta
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1InjisA-spdMOVUDZtciJlpRgBUaTqwOGrpYGXoXcw&s"
        clan="Odin"
        lider="ElBicho"
      />
      <Tarjeta
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1InjisA-spdMOVUDZtciJlpRgBUaTqwOGrpYGXoXcw&s"
        clan="Templarios"
        lider="SolraCita"
      />
      <Tarjeta
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1InjisA-spdMOVUDZtciJlpRgBUaTqwOGrpYGXoXcw&s"
        clan="Qi"
        lider="Soster"
      />
    </div>
  );
};

export default App;
