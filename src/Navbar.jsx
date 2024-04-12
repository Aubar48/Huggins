import { useState } from "react";


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
            <h1 className="ml-2 text-white text-lg font-semibold font-serif">Huginn</h1>
          </div>
          <div className="hidden md:flex">
            {" "}
            {/* Cambiado "md:block" por "md:flex" */}
            <a
              href="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-semibold font-serif"
            >
              Inicio
            </a>
            <a
              href="#alianza"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-semibold font-serif"
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
export default Navbar