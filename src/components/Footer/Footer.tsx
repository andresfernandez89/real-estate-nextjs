import Link from "next/link";
import {
  LiaFacebookF,
  LiaInstagram,
  LiaLinkedinIn,
  LiaYoutube,
} from "react-icons/lia";
import { dataFooter } from "./Footer.data";

export function Footer() {
  return (
    <div className="bg-black/90 px-4 py-8 md:px-36 md:py-40">
      <div className="grid grid-cols-2 gap-8 text-white md:grid-cols-[1fr,1fr,1fr,_400px]">
        {dataFooter.map(({ id, links }) => (
          <div key={id}>
            {links.map(({ id, name, link }) => (
              <Link key={id} href={link} className="mb-5 block">
                {name}
              </Link>
            ))}
          </div>
        ))}
        <div className="md:text-right">
          <h4 className="mb-6 text-xl font-semibold">Nizzi Propiedades</h4>
          <p>Direccion</p>
          <p>Mar del Plata, Argentina</p>
          <div className="mt-5 flex gap-4 md:justify-end">
            <LiaInstagram
              className="cursor-pointer text-3xl"
              href="https://www.instagram.com/nizzi_propiedades/"
            />
            <LiaFacebookF
              className="cursor-pointer text-3xl"
              href="https://www.facebook.com/NizziPropiedades/"
            />
            <LiaYoutube
              className="cursor-pointer text-3xl"
              href="https://www.youtube.com/channel/UCbRQo2e8LcOEa9m4H4ZjeTA"
            />
            <LiaLinkedinIn
              className="cursor-pointer text-3xl"
              href="https://www.linkedin.com/company/nizzi-propiedades-inmobiliaria/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
