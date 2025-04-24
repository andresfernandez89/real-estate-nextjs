import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedinFilled,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { ComponentType } from "react";

interface ISocialMediaItem {
  name: string;
  logo: ComponentType<{ className?: string }>;
  link: string;
}

const socialMedia: ISocialMediaItem[] = [
  {
    name: "Youtube",
    logo: IconBrandYoutubeFilled,
    link: "https://www.youtube.com/channel/UCbRQo2e8LcOEa9m4H4ZjeTA",
  },
  {
    name: "Instagram",
    logo: IconBrandInstagram,
    link: "https://www.instagram.com/nizzipropiedades/",
  },
  {
    name: "Linkedin",
    logo: IconBrandLinkedinFilled,
    link: "https://www.linkedin.com/company/nizzi-propiedades-inmobiliaria/",
  },
  {
    name: "Facebook",
    logo: IconBrandFacebookFilled,
    link: "https://www.facebook.com/NizziPropiedades/",
  },
];

export function Footer() {
  return (
    <div>
      <footer className="bg-main-client">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col items-center text-center">
            <Link href="/#header-home">
              <Image
                src="/assets/logoNizzi.png"
                alt="Logo"
                width={200}
                height={150}
                className="h-auto max-h-[75] object-cover"
                priority
              />
            </Link>
            <div className="-mx-4 mt-6 flex flex-wrap justify-center">
              <Link
                href="/#header-home"
                className="mx-4 text-base text-gray-300 transition-colors duration-300 hover:text-white"
                aria-label="Home"
              >
                Home
              </Link>

              <Link
                href="/#about"
                className="mx-4 text-base text-gray-300 transition-colors duration-300 hover:text-white"
                aria-label="Sobre nosotros"
              >
                Sobre nosotros
              </Link>

              <a
                href="/#"
                className="mx-4 text-base text-gray-300 transition-colors duration-300 hover:text-white"
                aria-label="Propiedades"
              >
                Propiedades
              </a>
              <a
                href="https://www.nizzipropiedades.com/escribanos-notarios.php"
                className="mx-4 text-base text-gray-300 transition-colors duration-300 hover:text-white"
                aria-label="Notarios"
                target="_blank"
              >
                Notarios
              </a>
              <a
                href="https://www.nizzipropiedades.com/blog-inmobiliario/"
                className="mx-4 text-base text-gray-300 transition-colors duration-300 hover:text-white"
                aria-label="Blog"
                target="_blank"
              >
                Blog
              </a>
            </div>
          </div>
          <hr className="my-6 border-gray-300 md:my-10" />
          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-300">
              © Copyright {new Date().getFullYear()}. All Rights Reserved.
            </p>
            <div className="-mx-2 mt-3 flex md:mt-0">
              {socialMedia.map((item, index) => (
                <a
                  key={index}
                  title={item.name}
                  className="mx-1.5 transform text-white transition-colors duration-300 hover:opacity-75"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.logo className="h-7 w-8" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
