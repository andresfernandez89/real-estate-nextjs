import Image from "next/image";
import Link from "next/link";

export function Error404() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <h1 className="mb-6 text-5xl font-semibold">Error 404</h1>
      <h2 className="mb-5 text-3xl">
        !UPS! No se ha encontrado la vivienda que buscas.
      </h2>
      <Image
        src="/assets/404-not-found.jpg"
        alt="Not found"
        width={600}
        height={450}
        className="rounded-lg shadow-light"
      />
      <div className="mt-5 text-center">
        <Link href="/" className="text-while rounded-lg bg-secondary px-3 py-2">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
