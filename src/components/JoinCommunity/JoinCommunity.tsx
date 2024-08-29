import { FaRegPaperPlane } from "react-icons/fa";
import { Transition } from "../Transition";

export function JoinCommunity() {
  return (
    <Transition className="grid items-center bg-secondary px-4 py-8 md:grid-cols-2 md:px-36 md:py-44">
      <h3 className="max-w-lg text-4xl font-semibold text-white">
        Únete a nuestra comunidad
      </h3>
      <div className="mx-auto mt-5 md:mx-auto">
        <button className="flex w-fit items-center justify-between rounded-lg bg-black px-7 py-5 text-white transition-all duration-100 hover:bg-black/70">
          <FaRegPaperPlane />
          <span className="ml-3">Únete a la comunidad</span>
        </button>
      </div>
    </Transition>
  );
}
