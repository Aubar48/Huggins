import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Tarjeta3 from "./Tarjeta3";
import backgroundMusic from "../public/images/latinCrows.mp3";

function Alianza() {
  return (
    <>
      <audio autoPlay loop>
        <source src={backgroundMusic} type="audio/mpeg" />
        Tu navegador no soporta la reproducción de música.
      </audio>
      <Navbar />
      <Banner />
      <Tarjeta3 />
      <Footer />
    </>
  );
}

export default Alianza;
