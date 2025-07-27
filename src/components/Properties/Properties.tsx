"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PropertiesProps } from "./Properties.types";

export function Properties({ data }: { data: PropertiesProps }) {
  const [counterHouses, setCounterHouses] = useState(8);
  const dataFilteredHouses = data.slice(0, counterHouses);
  const loadMoreHouses = () => setCounterHouses(counterHouses + 4);
  return (
    <>
      <div
        id="propierties"
        className="grid justify-items-center gap-2 sm:grid-cols-3 lg:grid-cols-4"
      >
        {dataFilteredHouses.map(
          ({
            reference,
            operation,
            price,
            type,
            neighborhood,
            coords,
            shortDescription,
            thumbnail,
          }) => (
            <Link
              key={reference}
              href={`/properties/${reference}`}
              className="shadow-light w-[363px] cursor-pointer rounded-xl transition-all duration-300 hover:shadow-xl sm:w-[284px]"
            >
              <div className="relative -z-1">
                <div className="relative">
                  <Image
                    src={`${thumbnail}`}
                    alt="Location"
                    width={284}
                    height={284}
                    className="h-[363px] w-[363px] rounded-t-xl object-cover sm:h-[284px] sm:w-[284px]"
                  />
                  <div className="px-3 py-5">
                    <p className="text-secondary">{neighborhood}</p>
                    <p className="text-secondary">
                      {type}
                      {shortDescription ? ` - ${shortDescription}` : ""}
                    </p>
                    <p className="font-semibold">{price}</p>
                    <div className="mt-2 flex-row justify-stretch gap-1 text-sm font-normal lg:flex">
                      <span>{2} ambs.</span>

                      <span className="pl-2 before:pr-2 before:content-['|']">
                        {2} baños
                      </span>

                      <span className="pl-2 before:pr-2 before:content-['|']">
                        {50} m² totales
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ),
        )}
      </div>
      <div className="my-7 text-center">
        {counterHouses < data.length && (
          <button
            className="bg-secondary cursor-pointer rounded-xl px-6 py-5 text-white transition-all duration-150 hover:bg-black"
            onClick={loadMoreHouses}
          >
            Ver más viviendas
          </button>
        )}
      </div>
    </>
  );
}
