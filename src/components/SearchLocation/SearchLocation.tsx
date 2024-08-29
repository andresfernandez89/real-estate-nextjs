import { useState } from "react";
import { GrFormDown, GrFormUp, GrLocation } from "react-icons/gr";

export function SearchLocation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative mb-2 flex cursor-pointer items-center justify-between gap-4 rounded-lg border-[1px] px-3 py-2 md:mb-0"
      onClick={() => setIsOpen(!isOpen)}
    >
      <GrLocation />
      <div>
        <p>Localización</p>
        <p className="text-xs">Selecciona tu Localización</p>
      </div>
      {isOpen ? <GrFormUp /> : <GrFormDown />}
      {isOpen && (
        <div className="w-[230px} absolute left-0 top-[70px] z-50 rounded-lg bg-white p-4 shadow-light">
          <p>Centro</p>
          <p>La Perla</p>
          <p>Guemes</p>
        </div>
      )}
    </div>
  );
}
