import Image from "next/image";
import { Transition } from "../Transition";
export function About() {
  return (
    <Transition className="container mx-auto grid gap-4 px-4 py-8 md:grid-cols-2 md:py-44">
      <div className="mb-7 max-w-xl" id="about">
        <h4 className="text-secondary text-center md:text-left">
          Sobre nosotros
        </h4>
        <h2 className="my-4 text-center text-3xl font-semibold md:text-left">
          Más de 16 años con excelente reputación
        </h2>
        <p className="mt-7 text-center text-pretty md:mb-10 md:text-left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          laudantium asperiores deserunt harum quaerat inventore impedit ab quo
          et, ratione quasi, placeat sed voluptatem adipisci! Sunt odio impedit
          saepe earum.
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
    </Transition>
  );
}
