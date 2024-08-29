import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import {
  LiaBathSolid,
  LiaBedSolid,
  LiaRulerCombinedSolid,
  LiaStarSolid,
} from "react-icons/lia";
import { TfiLocationPin } from "react-icons/tfi";
import { PropertyProps } from "./Property.types";

export function Property(props: PropertyProps) {
  const { house } = props;
  return (
    <main className="mx-auto max-w-5xl">
      <div className="my-3 grid py-5 md:grid-cols-[70%,1fr]">
        <div className="px-6">
          <h1 className="mb-4 flex justify-between text-3xl text-secondary">
            <span>House {house.id}</span>
            <span className="font-semibold">{formatPrice(house.price)}</span>
          </h1>
          <div className="my-4 flex gap-5">
            <h2 className="flex items-center gap-3 text-xl">
              <TfiLocationPin />
              {house.location}
            </h2>
            <div className="right-2 top-2 flex items-center rounded-lg bg-secondary px-2 py-1 text-white">
              <LiaStarSolid />
              <span className="ml-1 font-semibold">{house.star}</span>
            </div>
          </div>
          <Image
            src={`/assets/properties/${house.image}`}
            alt={`Casa en ${house.location}`}
            width={1200}
            height={1200}
            className="h-auto w-full rounded-2xl"
            priority
          />
          <div className="mt-4 gap-4 lg:flex">
            <div className="my-1 flex items-center justify-center rounded-lg bg-slate-300/30 px-2 py-1">
              <LiaBedSolid />
              <span className="ml-2">{house.bedrooms}</span>
            </div>
            <div className="my-1 flex items-center justify-center rounded-lg bg-slate-300/30 px-2 py-1">
              <LiaBathSolid />
              <span className="ml-2">{house.bathroom}</span>
            </div>
            <div className="my-1 flex items-center justify-center rounded-lg bg-slate-300/30 px-2 py-1">
              <LiaRulerCombinedSolid />
              <span className="ml-2">{house.meters}</span>
            </div>
          </div>
          <div className="my-3">{house.description}</div>
        </div>
      </div>
    </main>
  );
}
