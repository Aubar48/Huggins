/* eslint-disable react/prop-types */

const Tarjeta3 = ({ imagen, clan, lider, historia }) => {
    return (
      <div className="w-full sm:w-1/3 p-4">
        <div className="w-full sm:w-1/3 md:w-2/3 lg:w-3/4 mx-auto rounded-lg shadow-md overflow-hidden">
          <img
            src={imagen}
            alt={`${clan} ${lider}`}
            className="w-full h-48 object-cover object-center"
          />
          <div className="p-4">
            <h2 className="sm:text-sm lg:text-4x1 font-medium font-serif">
              {clan}
            </h2>
            <h2 className="sm:text-sm lg:text-4xl font-medium font-serif">
              {lider}
            </h2>
            <p>{historia}</p>
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
        <Tarjeta3
          imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1InjisA-spdMOVUDZtciJlpRgBUaTqwOGrpYGXoXcw&s"
          clan="Qi"
          lider="Soster"
          historia="En los confines de la tierra, el clan de Soster se yergue como guardianes de la serenidad, su propósito enraizado en la protección de la paz contra las garras de la oscuridad, su enemigo más temido, los monstruos que acechan en la penumbra. En el centro de esta comunidad apacible, Soster lidera con gentileza y determinación, instando a sus seguidores a abrazar la compasión sobre la violencia y la integridad sobre la corrupción. Entre los susurros de la naturaleza y los latidos del corazón de la tierra, el clan de Soster y su líder caminan, tejiendo un legado de armonía y valentía en el tejido mismo del mundo."
        />
        <Tarjeta3
          imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1InjisA-spdMOVUDZtciJlpRgBUaTqwOGrpYGXoXcw&s"
          clan="Templarios"
          lider="SolraCita"
          historia="En los callejones oscuros y entre las sombras de la noche, el clan de los Templarios se alza como maestros del engaño y las artes mortales, sus miembros tejiendo hilos de intriga y desafío. En el epicentro de esta oscura hermandad, SolraCita lidera con astucia y determinación, dirigiendo a sus seguidores con maestría en el arte del sigilo y la violencia. Entre los callejones más oscuros y los susurros de traición, los Templarios y su líder avanzan, esculpiendo un legado de misterio y temor en las profundidades de la noche."
        />
        <Tarjeta3
          imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1InjisA-spdMOVUDZtciJlpRgBUaTqwOGrpYGXoXcw&s"
          clan="Odin"
          lider="ElBicho"
          historia="En los campos de batalla olvidados, el clan de Odin se erige como forjador de la paz, sus guerreros transformados en guardianes de la armonía. En el epicentro de esta búsqueda, ElBicho lidera con ferocidad y compasión, empuñando la fuerza para proteger y construir un mañana más pacífico. Entre las ruinas del conflicto y los susurros del pasado, el clan de Odin y su líder marchan, labrando un legado de reconciliación y esperanza en los corazones de aquellos que anhelan la tranquilidad."
        />
        <Tarjeta3
          imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1InjisA-spdMOVUDZtciJlpRgBUaTqwOGrpYGXoXcw&s"
          clan="Huginn"
          lider="LCRCaraza"
          historia="En los bulliciosos mercados de la ciudad, Huginn emerge como un clan de líderes activos y comerciantes, cuyos vínculos se entrelazan en la red de intercambios y alianzas. En su centro, LCRCaraza lidera con diligencia y visión, navegando entre las transacciones con destreza y perspicacia. Entre el trajín de la actividad comercial y la ambición desenfrenada, Huginn y su líder trazan su camino, estableciendo un legado de prosperidad e influencia en los corazones de la ciudad."
        />
        <Tarjeta3
          imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1InjisA-spdMOVUDZtciJlpRgBUaTqwOGrpYGXoXcw&s"
          clan="Muninn"
          lider="T1t1d0t"
          historia="En las sombras de la ciudad, Muninn, una comunidad de Night Crow, se alza como una red clandestina, tejida con secretos y lealtades indomables. En su corazón, T1t1d0t lidera con astucia y determinación, guiando a sus seguidores con la oscuridad como su aliada. Entre callejones oscuros y miradas furtivas, Muninn y su líder desafían los límites de lo posible, forjando un legado de intriga y poder en las noches eternas."
        />
      </div>
    );
  };
  
export  default App;