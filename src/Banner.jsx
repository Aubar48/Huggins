import imagenBienvenidos from "../public/images/huggins2.jpg";
import './banner.css'; // Archivo CSS para estilos personalizados

function Banner() {
  return (
    <section
        data-aos="fade-down"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="3000"
        className="bg-gray-300 py-1 "
      >
        <div className=" mx-auto text-center">
          {/* Agrega la imagen de fondo */}
          <div className="relative ">
            <img
              className="mx-auto object-cover sm:w-full sm:h-96 shadow-2xl shadow-black "
              src={imagenBienvenidos}
              alt="Imagen de bienvenida"
            />
            {/* Agrega el texto encima de la imagen */}
            <h2 className="neon-text absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-sm:text-xl sm:text-3xl lg:text-6xl font-serif font-bold">
              Bienvenidos a Latin Crows
            </h2>
          </div>
          {/* Contenido de la landing page */}
        </div>
      </section>
  )
}

export default Banner