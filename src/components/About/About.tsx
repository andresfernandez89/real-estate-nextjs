import Image from "next/image";
import { Transition } from "../Transition";
export function About() {
  return (
    <Transition className="grid gap-4 px-4 py-8 md:grid-cols-2 md:px-36 md:py-44">
      <div
        className={"mb-7 flex max-w-xl flex-col items-center justify-center"}
        id="about"
      >
        <h4 className="text-secondary">Sobre nosotros</h4>
        <h2 className="my-4 text-3xl font-semibold">
          Más de 16 años con excelente reputación
        </h2>
        <p className="mb-10 mt-7">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          laudantium asperiores deserunt harum quaerat inventore impedit ab quo
          et, ratione quasi, placeat sed voluptatem adipisci! Sunt odio impedit
          saepe earum.
        </p>
        <button className="px-4 py-3 text-white transition-all duration-200">
          Cargar más
        </button>
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
    </Transition>
  );
}
