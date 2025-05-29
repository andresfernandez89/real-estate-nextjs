"use client";
import { ChangeEvent, useState } from "react";
import { Transition } from "../Transition";
import { IconSearch } from "@tabler/icons-react";
//import { IconChevronDown } from "@tabler/icons-react";

type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

const OPERATION_TYPES: Option[] = [
  { value: "", label: "Tipo de operacion", disabled: true },
  { value: "sale", label: "Venta" },
  { value: "rent", label: "Alquiler" },
  { value: "temporaryRent", label: "Alquiler temporal" },
];

const PROPERTY_TYPES: Option[] = [
  { value: "", label: "Tipo de propiedad", disabled: true },
  { value: "allProperties", label: "Todos" },
  { value: "house", label: "Casas y Chalets" },
  { value: "apartment", label: "Departamentos" },
  { value: "garage", label: "Cocheras" },
  { value: "hotel", label: "Hoteles" },
  { value: "land", label: "Lotes" },
  { value: "warehouse", label: "Galpón" },
  { value: "office", label: "Locales y Oficina" },
  { value: "ph", label: "PH/Duplex" },
];

const ROOM_OPTIONS: Option[] = [
  { value: "", label: "Cant. Ambientes", disabled: true },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4 ó más" },
];

export function FloatedSearch() {
  const [selectedOperationType, setSelectedOperationType] = useState(
    OPERATION_TYPES[0].value,
  );
  const [selectedPropertyType, setSelectedPropertyType] = useState(
    PROPERTY_TYPES[0].value,
  );
  const [selectedRooms, setSelectedRooms] = useState(ROOM_OPTIONS[0].value);

  const handleChangeOperation = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOperationType(e.target.value);
  };
  const handleChangeProperty = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPropertyType(e.target.value);
  };
  const handleChangeRooms = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedRooms(e.target.value);
  };

  return (
    <Transition className="bg-secondary-client mt-3 w-auto rounded-lg border px-8 py-4 shadow-sm">
      <section className="bg-secondary-client mx-auto flex w-full flex-col gap-4 rounded-md md:flex-col">
        <div className="mx-auto flex w-full flex-col justify-center gap-x-5 gap-y-1 rounded-md md:flex-row">
          <button className="bg-main-bg border-main-client hover:bg-secondary-client/80 cursor-pointer rounded-lg border border-dotted px-8 py-2.5 transition-colors duration-300">
            Vender
          </button>
          <button className="bg-main-bg hover:bg-secondary-client/80 border-main-client cursor-pointer rounded-lg border border-dotted px-8 py-2.5 transition-colors duration-300">
            Comprar
          </button>
          <button className="bg-main-bg hover:bg-secondary-client/80 border-main-client cursor-pointer rounded-lg border border-dotted px-8 py-2.5 transition-colors duration-300">
            Propiedades
          </button>
          <button className="bg-main-bg hover:bg-secondary-client/80 border-main-client cursor-pointer rounded-lg border border-dotted px-8 py-2.5 transition-colors duration-300">
            Alquileres
          </button>
        </div>
        <div className="mt-2 w-full lg:px-12 xl:px-14">
          <div className="grid w-full gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
            <select
              id="selectOperationType"
              name="operationType"
              value={selectedOperationType}
              onChange={handleChangeOperation}
              className="focus:border-main-client focus:ring-main-client rounded border border-gray-400 bg-white px-2 py-1 text-gray-700 focus:ring-1 focus:outline-none"
            >
              {OPERATION_TYPES.map((item) => (
                <option
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                >
                  {item.label}
                </option>
              ))}
            </select>

            <select
              id="selectPropertyType"
              name="propertyType"
              value={selectedPropertyType}
              onChange={handleChangeProperty}
              className="focus:border-main-client focus:ring-main-client rounded border border-gray-400 bg-white px-2 py-1 text-gray-700 focus:ring-1 focus:outline-none"
            >
              {PROPERTY_TYPES.map((item) => (
                <option
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                >
                  {item.label}
                </option>
              ))}
            </select>

            <select
              id="selectedRooms"
              name="rooms"
              value={selectedRooms}
              onChange={handleChangeRooms}
              className="focus:border-main-client focus:ring-main-client rounded border border-gray-400 bg-white px-2 py-1 text-gray-700 focus:ring-1 focus:outline-none"
            >
              {ROOM_OPTIONS.map((item) => (
                <option
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                >
                  {item.label}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Precio mín."
              className="focus:border-main-client focus:ring-main-client focus:ring-opacity-40 rounded border border-gray-400 bg-white px-2 py-0.5 text-gray-700 placeholder-gray-400/70 focus:ring-1 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Precio max."
              className="focus:border-main-client focus:ring-main-client focus:ring-opacity-40 rounded border border-gray-400 bg-white px-2 py-0.5 text-gray-800 placeholder-gray-400/70 focus:ring-1 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Referencia"
              className="focus:border-main-client focus:ring-main-client focus:ring-opacity-40 rounded border border-gray-400 bg-white px-2 py-0.5 text-gray-800 placeholder-gray-400/70 focus:ring-1 focus:outline-none"
            />
            <div className="flex justify-center md:col-start-1 md:col-end-3 lg:col-start-2 lg:col-end-3">
              <button className="bg-main-client hover:bg-main-client-opacity w-30 rounded-xl border border-gray-400 px-2 py-2 text-center text-white transition-colors duration-300">
                <div className="flex content-center justify-center gap-x-1">
                  <IconSearch stroke={2} />
                  Buscar
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Transition>
  );
}
