import { useState } from "react";
import Tarjeta from "./Tarjeta";
import Tarjeta2 from "./Tarjeta2";
import imagenBienvenidos from "../public/images/huggins2.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center py-4">
          {" "}
          {/* Añadido "items-center" para centrar verticalmente */}
          <div className="flex items-center">
            {" "}
            {/* Agregado "items-center" para centrar verticalmente */}
            <img className="h-8" src="/images/huggins.png" alt="Logo" />
            <h1 className="ml-2 text-white text-lg font-semibold">Huggins</h1>
          </div>
          <div className="hidden md:flex">
            {" "}
            {/* Cambiado "md:block" por "md:flex" */}
            <a
              href="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Inicio
            </a>
            <a
              href="#alianza"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Alianza
            </a>
          </div>
          <div className="block md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a
            href="/"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Inicio
          </a>
          <a
            href="#alianza"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Alianza
          </a>
        </div>
      )}
    </nav>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <section
        data-aos="fade-down"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="3000"
        className="bg-gray-300 py-1"
      >
        <div className=" mx-auto text-center">
          {/* Agrega la imagen de fondo */}
          <div className="relative">
            <img
              className="mx-auto object-cover sm:w-full sm:h-96 lg:w-full lg:h-96 shadow-2xl"
              src={imagenBienvenidos}
              alt="Imagen de bienvenida"
            />
            {/* Agrega el texto encima de la imagen */}
            <h2 className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:text-3xl lg:text-6xl font-mono font-bold text-slate-100">
              Bienvenidos a Huggins
            </h2>
          </div>
          {/* Contenido de la landing page */}
          <Tarjeta />
        </div>
      </section>
      <section id="alianza" className="">
        <div className="mx-auto">
          <h2 className="text-3xl font-semibold text-center">Sobre Nosotros</h2>
          <Tarjeta2 />
          {/* Formulario de contacto u otra información de contacto */}
        </div>
      </section>
    </div>
  );
};

export default App;
