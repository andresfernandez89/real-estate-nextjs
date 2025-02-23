"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  LiaBathSolid,
  LiaBedSolid,
  LiaRulerCombinedSolid,
} from "react-icons/lia";
import { Transition } from "../Transition";
import { PropertiesProps } from "./Properties.types";

export function Properties({ data }: { data: PropertiesProps }) {
  const [counterHouses, setCounterHouses] = useState(8);
  const dataFilteredHouses = data.slice(0, counterHouses);
  const loadMoreHouses = () => setCounterHouses(counterHouses + 4);
  return (
    <Transition className="container mx-auto px-4 py-8 md:py-32">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
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
              className="cursor-pointer rounded-xl shadow-light transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative -z-[1]">
                <div className="relative">
                  <Image
                    src={`${thumbnail}`}
                    alt="Location"
                    width={150}
                    height={150}
                    className="h-[200px] max-h-full w-full rounded-t-xl object-cover"
                  />
                  <div className="px-3 py-5">
                    <p className="text-secondary">{neighborhood}</p>
                    <p className="text-secondary">
                      {type}
                      {shortDescription ? ` - ${shortDescription}` : ""}
                    </p>
                    <p className="font-semibold">{price}</p>
                    <div className="mt-2 flex-row justify-stretch gap-1 text-mainClient lg:flex">
                      <div className="my-2 flex flex-grow items-center justify-center rounded-md bg-secondaryClient px-2 py-1">
                        <LiaBedSolid />
                        <span className="ml-2">{2}</span>
                      </div>
                      <div className="my-2 flex flex-grow items-center justify-center rounded-md bg-secondaryClient px-2 py-1">
                        <LiaBathSolid />
                        <span className="ml-2">{2}</span>
                      </div>
                      <div className="my-2 flex flex-grow items-center justify-center rounded-md bg-secondaryClient px-2 py-1">
                        <LiaRulerCombinedSolid />
                        <span className="ml-2">{50}</span>
                      </div>
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
            className="cursor-pointer rounded-xl bg-secondary px-6 py-5 text-white transition-all duration-150 hover:bg-black"
            onClick={loadMoreHouses}
          >
            Ver más viviendas
          </button>
        )}
      </div>
    </Transition>
  );
}
