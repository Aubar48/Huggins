/* eslint-disable react/prop-types */

const Tarjeta2 = ({ nombre, description }) => {
  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="md:w-48 md:mr-4 mb-4 md:mb-0"></div>
      <div>
        <h3 className="text-xl font-semibold font-serif">{nombre}</h3>
        <p className="text-lg text-gray-700 font-serif">{description}</p>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-center">
        <a
          href="https://discord.gg/ncQzqkXA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-semibold hover:underline"
        >
          ¡Contáctanos en Discord!
        </a>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="3000"
        className="flex flex-col"
      >
        <Tarjeta2
          imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1InjisA-spdMOVUDZtciJlpRgBUaTqwOGrpYGXoXcw&s"
          nombre="Gremio Huggins"
          description={`¡Únete a Huggins, donde la camaradería es tan fuerte como el acero y la lealtad es nuestra moneda de cambio! En Nightcrows, somos más que un simple gremio; somos una familia unida por un objetivo común: explorar los oscuros confines del mundo, enfrentar a las criaturas más temibles y forjar nuestro destino juntos.

        Fundado en los albores de la oscuridad, Huggins ha resistido las pruebas del tiempo, emergiendo como un bastión de valentía y determinación en un mundo envuelto en sombras. Nuestros miembros, conocidos como los 'Guardianes de la Noche', son guerreros astutos, magos poderosos y artesanos hábiles que han jurado proteger nuestras tierras y perseguir la gloria eterna.

        En Huggins, encontrarás un hogar donde cada voz es escuchada, cada habilidad es valorada y cada victoria es celebrada. Nuestros maestros artesanos pueden forjar armas legendarias, nuestros sabios pueden desentrañar los misterios del pasado y nuestros guerreros pueden luchar con ferocidad incomparable. Pero más allá de nuestras habilidades individuales, es nuestra unidad lo que nos distingue: en Huggins, siempre estamos juntos, siempre avanzando, siempre desafiando la noche.

        Si estás listo para unirte a una hermandad dedicada a la grandeza y la aventura, busca la marca de Huggins y únete a nosotros en la lucha contra las fuerzas de la oscuridad. Juntos, conquistaremos el amanecer y escribiremos nuestro legado en los anales de la historia de Nightcrows. ¡Únete a Huggins y abraza la noche!`}
        />
      </div>
      <Footer />
    </>
  );
};

export default App;
