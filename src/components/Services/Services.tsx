"use client";

import { Transition } from "../Transition";
import { Slider } from "./Slider";

export function Services() {
  return (
    <Transition className="container mx-auto grid px-4 py-8 md:grid-cols-2 md:gap-28 md:py-46">
      <div className="mb-7 max-w-xl">
        <h4 className="text-secondary text-center md:text-left">Servicios</h4>
        <h2 className="my-4 text-center text-3xl font-semibold md:text-left">
          16 años cumpliendo sueños
        </h2>
        <p className="mt-7 mb-10 text-center text-pretty md:text-left">
          Somos un equipo familiar y dinámico que desde el año 2008 se dedica a
          la mediación en operaciones inmobiliarias con fuerte especialización
          en las ventas de inmuebles residenciales en Mar del Plata. Ponemos a
          disposición de nuestros clientes el asesoramiento, los profesionales
          idóneos y las herramientas necesarias para que de manera ágil y segura
          alcancen el objetivo más conveniente. Contamos con gran alcance y
          hacemos tasaciones reales dentro del mercado actual. Nuestro servicio
          se encuentra avalado por el Colegio de Martilleros de Mar del Plata y
          por una amplia cartera de clientes en la ciudad y el país que pueden
          dar fé de ésto.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Slider />
      </div>
    </Transition>
  );
}
