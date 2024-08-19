import { SearchButton } from "../SearchButton";
import { SearchLocation } from "../SearchLocation";
import { SearchPriceRange } from "../SearchPriceRange";
import { SearchProperty } from "../SearchProperty";
import { Transition } from "../Transition";

export function FloatedSearch() {
  return (
    <Transition className="absolute bottom-10 left-0 right-0 mx-auto w-[75%] md:-bottom-10">
      <div className="flex-col justify-between gap-4 rounded-md bg-white px-3 py-4 shadow-light backdrop-blur md:flex md:flex-row">
        <SearchLocation />
        <SearchProperty />
        <SearchPriceRange />
        <SearchButton />
      </div>
    </Transition>
  );
}
