"use client";
import { useState } from "react";
import { GrFormDown, GrFormUp, GrHome } from "react-icons/gr";

export function SearchProperty() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative mb-2 flex cursor-pointer items-center justify-between gap-4 rounded-lg border-[1px] px-3 py-2 md:mb-0"
      onClick={() => setIsOpen(!isOpen)}
    >
      <GrHome />
      <div>
        <p>Propiedad</p>
        <p className="text-xs">Selecciona el tipo de propiedad</p>
      </div>
      {isOpen ? <GrFormUp /> : <GrFormDown />}
      {isOpen && (
        <div className="w-[230px} shadow-light absolute top-[70px] left-0 z-50 rounded-lg bg-white p-4">
          <p>Casa</p>
          <p>Departamento</p>
          <p>Terreno</p>
        </div>
      )}
    </div>
  );
}
