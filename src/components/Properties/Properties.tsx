"use client";

import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  LiaBathSolid,
  LiaBedSolid,
  LiaRulerCombinedSolid,
  LiaStarSolid,
} from "react-icons/lia";
import { Transition } from "../Transition";
import { dataProperties } from "./Properties.data";

export function Properties() {
  const [counterHouses, setCounterHouses] = useState(8);
  const dataFilteredHouses = dataProperties.slice(0, counterHouses);

  const loadMoreHouses = () => setCounterHouses(counterHouses + 4);

  return (
    <Transition className="px-4 py-8 md:px-40 md:py-32">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {dataFilteredHouses.map(
          ({
            id,
            location,
            price,
            bedrooms,
            bathroom,
            image,
            star,
            meters,
          }) => (
            <Link
              key={id}
              href={`/properties/${id}`}
              className="cursor-pointer rounded-2xl shadow-light transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative -z-[1]">
                <div className="relative">
                  <div className="absolute right-2 top-2 flex items-center rounded-lg bg-slate-50 px-2 py-1 text-secondary">
                    <LiaStarSolid />
                    <span className="ml-1 font-semibold">{star}</span>
                  </div>
                  <Image
                    src={`/assets/properties/${image}`}
                    alt="Location"
                    width={150}
                    height={150}
                    className="h-[200px] max-h-full w-full rounded-t-2xl object-cover"
                  />
                  <div className="px-3 py-5">
                    <p className="text-secondary">{location}</p>
                    <p className="font-semibold">{formatPrice(price)}</p>
                    <div className="xg:flex mt-2 gap-4">
                      <div className="my-2 flex items-center justify-center rounded-lg bg-slate-300/30 px-2 py-1">
                        <LiaBedSolid />
                        <span className="ml-2">{bedrooms}</span>
                      </div>
                      <div className="my-2 flex items-center justify-center rounded-lg bg-slate-300/30 px-2 py-1">
                        <LiaBathSolid />
                        <span className="ml-2">{bathroom}</span>
                      </div>
                      <div className="my-2 flex items-center justify-center rounded-lg bg-slate-300/30 px-2 py-1">
                        <LiaRulerCombinedSolid />
                        <span className="ml-2">{meters}</span>
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
        {counterHouses < dataProperties.length && (
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
