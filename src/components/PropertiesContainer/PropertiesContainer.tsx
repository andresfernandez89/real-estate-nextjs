import { getAllPropertiesFeatured } from "@/services/getAllPropertiesFeatured";
import { Properties } from "../Properties/Properties";
import { Transition } from "../Transition";

export async function PropertiesContainer() {
  const properties = await getAllPropertiesFeatured();
  return (
    <Transition className="container mx-auto my-[88] px-4 md:mt-16 lg:px-8 xl:px-0">
      <Properties data={properties} />
      {/* <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
         {dataFilteredHouses.map(
          ({
            id,
            location,
            price,
            bedrooms,
            bathroom,
            image,

            meters,
          }) => (
            <Link
              key={id}
              href={`/properties/${id}`}
              className="cursor-pointer rounded-xl shadow-light transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative -z-1">
                <div className="relative">
                  <Image
                    src={`/assets/properties/${image}`}
                    alt="Location"
                    width={150}
                    height={150}
                    className="h-[200px] max-h-full w-full rounded-t-xl object-cover"
                  />
                  <div className="px-3 py-5">
                    <p className="text-secondary">{location}</p>
                    <p className="font-semibold">{formatPrice(price)}</p>
                    <div className="mt-2 flex-row gap-1 text-main-client lg:flex">
                      <div className="my-2 flex items-center justify-center rounded-md bg-secondary-client px-2 py-1">
                        <LiaBedSolid />
                        <span className="ml-2">{bedrooms}</span>
                      </div>
                      <div className="my-2 flex items-center justify-center rounded-md bg-secondary-client px-2 py-1">
                        <LiaBathSolid />
                        <span className="ml-2">{bathroom}</span>
                      </div>
                      <div className="my-2 flex items-center justify-center rounded-md bg-secondary-client px-2 py-1">
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
      </div>*/}
    </Transition>
  );
}
