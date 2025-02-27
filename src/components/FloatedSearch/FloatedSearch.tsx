import { SearchButton } from "../SearchButton";
import { SearchLocation } from "../SearchLocation";
import { SearchPriceRange } from "../SearchPriceRange";
import { SearchProperty } from "../SearchProperty";
import { Transition } from "../Transition";

export function FloatedSearch() {
  return (
    <Transition className="absolute right-0 bottom-10 left-0 mx-auto w-[75%] md:-bottom-10">
      <div className="shadow-light flex-col justify-between gap-4 rounded-md bg-white px-3 py-4 backdrop-blur-sm md:flex md:flex-row">
        <SearchLocation />
        <SearchProperty />
        <SearchPriceRange />
        <SearchButton />
      </div>
    </Transition>
  );
}
