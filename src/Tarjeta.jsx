/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Tarjeta = ({ imagen, clan, lider, miembros, clasificacion }) => {
  return (
    <div className=" w-1/3 p-4">
      <div className="w-full sm:w-1/3 md:w-2/3 lg:w-3/4 mx-auto rounded-lg shadow-md overflow-hidden">
        <img
          src={imagen}
          alt={`${clan} ${lider}`}
          className="w-full h-48 object-cover object-center"
        />
        <div className="p-4">
          <h2 className="text-center sm:text-sm lg:text-4xl font-medium font-serif">
           Clan: {clan}
          </h2>
          <h2 className="text-center sm:text-sm lg:text-2xl font-medium font-serif">
            Lider: {lider}
          </h2>
          <div className='flex items-center lg:text-xl justify-around'>
            <h2>Miembros: {miembros} </h2>
            <h2>Clasificación: #{clasificacion}</h2>
          </div>
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
        miembros="50/50"
        clasificacion="7"
      />
      <Tarjeta
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1InjisA-spdMOVUDZtciJlpRgBUaTqwOGrpYGXoXcw&s"
        clan="Huginn"
        lider="LCRCaraza"
        miembros="50/50"
        clasificacion="8"
      />
      <Tarjeta
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1InjisA-spdMOVUDZtciJlpRgBUaTqwOGrpYGXoXcw&s"
        clan="BlackSail2"
        lider="Zechi"
        miembros="49/50"
        clasificacion="9"
      />
      <Tarjeta
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1InjisA-spdMOVUDZtciJlpRgBUaTqwOGrpYGXoXcw&s"
        clan="Depredadores"
        lider="Fury90"
        miembros="47/50"
        clasificacion="51"
      />
      <Tarjeta
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1InjisA-spdMOVUDZtciJlpRgBUaTqwOGrpYGXoXcw&s"
        clan="Qi"
        lider="Soster"
        miembros="49/50"
        clasificacion="27"
      />
    </div>
  );
};

export default App;
