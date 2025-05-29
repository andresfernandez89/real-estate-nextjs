import { FloatedSearch } from "../FloatedSearch";

export function Banner() {
  return (
    <div className="relative container mx-auto md:px-4 lg:px-8 xl:px-0">
      <div className="bg-banner relative flex min-h-[60vh] flex-col items-center justify-center bg-cover bg-center bg-no-repeat pt-20 md:rounded-2xl md:pt-0">
        <div className="text-third-client max-w-3xl px-4 text-center md:px-0">
          <h2 className="text-4xl font-semibold md:text-5xl">
            Encontrá tu próximo hogar
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Descubrí las mejores propiedades en un solo lugar
          </p>
        </div>
      </div>
      <FloatedSearch />
    </div>
  );
}
