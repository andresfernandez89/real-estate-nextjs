import { useState } from "react";
import { GrFormDown, GrFormUp, GrTag } from "react-icons/gr";

export function SearchPriceRange() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative mb-2 flex cursor-pointer items-center justify-between gap-4 rounded-lg border-[1px] px-3 py-2 md:mb-0"
      onClick={() => setIsOpen(!isOpen)}
    >
      <GrTag />
      <div>
        <p>Rango de precio</p>
        <p className="text-xs">Selecciona tu rango de precio</p>
      </div>
      {isOpen ? <GrFormUp /> : <GrFormDown />}
      {isOpen && (
        <div className="w-[230px} absolute left-0 top-[70px] z-50 rounded-lg bg-white p-4 shadow-light">
          <p>Cualquier rango</p>
          <p>15000 - 30000</p>
          <p>30000 - 60000</p>
        </div>
      )}
    </div>
  );
}
