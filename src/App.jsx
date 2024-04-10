import  Navbar  from './Navbar';
import backgroundMusic from "../public/images/BattleCry.mp3";

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <audio autoPlay loop>
        <source src={backgroundMusic} type="audio/mpeg" />
        Tu navegador no soporta la reproducción de música.
      </audio>
      </div>
      
    </>
  )
}

export default App
