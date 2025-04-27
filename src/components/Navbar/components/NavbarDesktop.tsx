import { dataHeader } from "@/components/Navbar/Header.data";
import Image from "next/image";
import Link from "next/link";

export function NavbarDesktop() {
  return (
    <div className="hidden items-center justify-between md:flex">
      <div className="h-[70px] w-auto">
        <Link href="/#header-home">
          <Image
            src="/assets/logoNizzi.png"
            alt="Logo Nizzi Propiedades"
            width={200}
            height={70}
            className="h-auto max-h-[70px] object-cover"
            priority
          />
        </Link>
      </div>
      <div className="flex space-x-6">
        {dataHeader.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className="text-main-bg hover:bg-main-client-opacity rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
