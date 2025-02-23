import { FloatedSearch } from "../FloatedSearch";

export function Banner() {
  return (
    <div className="container relative mx-auto md:px-4">
      <div className="relative flex min-h-[60vh] flex-col items-center bg-banner bg-cover bg-center bg-no-repeat pt-20 md:justify-center md:rounded-2xl md:pt-0">
        <div className="max-w-3xl px-4 text-center text-thirdClient md:px-0">
          <h2 className="text-5xl font-semibold">Encontrá tu próximo hogar</h2>
        </div>
        <FloatedSearch />
      </div>
    </div>
  );
}
