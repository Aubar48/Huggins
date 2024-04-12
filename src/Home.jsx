import Navbar from "./Navbar";
import backgroundMusic from "../public/images/BattleCry.mp3";
import Banner from "./Banner";
import Tarjeta2 from "./Tarjeta2";
import Tarjeta from "./Tarjeta";
function Home() {
  return (
    <>
      <div>
        <Navbar />
        <audio autoPlay loop>
          <source src={backgroundMusic} type="audio/mpeg" />
          Tu navegador no soporta la reproducción de música.
        </audio>
        <div className="bg-gray-300 py-1">
        <Banner />
        <Tarjeta />
        </div>
        
        <section id="alianza" className="">
          <div className="mx-auto">
            <h2 className="text-3xl font-semibold text-center font-serif">
              Sobre Nosotros
            </h2>
            <Tarjeta2 />
            {/* Formulario de contacto u otra información de contacto */}
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
