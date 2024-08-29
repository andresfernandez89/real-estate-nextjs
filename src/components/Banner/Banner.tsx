import { FloatedSearch } from "../FloatedSearch";

export function Banner() {
  return (
    <div className="container relative mx-auto">
      <div className="relative flex min-h-[80vh] flex-col items-center rounded-3xl bg-banner bg-cover bg-center bg-no-repeat pt-20 md:justify-center md:pt-0">
        <div className="max-w-3xl text-center text-white">
          <h2 className="text-5xl font-semibold">Encontrá tu próximo hogar</h2>
          <p className="mt-2 text-xl md:mt-8">
            Somos un equipo familiar y dinámico que desde el año 2008 se dedica
            a la mediación en operaciones inmobiliarias con fuerte
            especialización en las ventas de inmuebles residenciales en Mar del
            Plata.
          </p>
        </div>
        <FloatedSearch />
      </div>
    </div>
  );
}
