import Image from "next/image";
export function About() {
  return (
    <div
      className="container mx-auto grid gap-4 px-4 md:grid-cols-2 lg:px-8 xl:px-0"
      id="about"
    >
      <div className="mb-7 max-w-xl">
        <h4 className="text-secondary text-center md:text-left">
          Sobre nosotros
        </h4>
        <h2 className="my-4 text-center text-3xl font-semibold md:text-left">
          Más de 16 años con excelente reputación
        </h2>
        <p className="mt-7 text-center text-pretty md:mb-10 md:text-left">
          Desde el año 2008 se dedica a la mediación en operaciones
          inmobiliarias con fuerte especialización en las ventas de inmuebles
          residenciales en Mar del Plata. Ponemos a disposición de nuestros
          clientes el asesoramiento, los profesionales idóneos y las
          herramientas necesarias para que de manera ágil y segura alcancen el
          objetivo más conveniente. Contamos con gran alcance y hacemos
          tasaciones reales dentro del mercado actual. Nuestro servicio se
          encuentra avalado por el Colegio de Martilleros de Mar del Plata y por
          una amplia cartera de clientes en la ciudad y el país que pueden dar
          fé de ésto.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/assets/house.jpeg"
          alt="About"
          width={350}
          height={450}
          className="h-auto w-auto"
          priority
        />
      </div>
    </div>
  );
}
