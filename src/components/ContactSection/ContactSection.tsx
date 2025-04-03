import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedinFilled,
  IconBrandYoutubeFilled,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import { ComponentType } from "react";
import { FormContact } from "../FormContact";

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
    link: "https://www.instagram.com/nizzi_propiedades/",
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

export function ContactSection() {
  return (
    <section className="bg-main-bg">
      <div className="container mx-auto px-6 py-12">
        <div className="lg:-mx-6 lg:flex lg:items-center">
          {/******************* CONTACT INFO *******************/}
          <div className="justify-items-center lg:mx-6 lg:w-1/2">
            <h1 className="w-[328] text-2xl font-semibold lg:text-3xl">
              Contactanos para <br /> más información
            </h1>
            <div className="mt-6 space-y-8 md:mt-8">
              <p className="-mx-2 flex items-start">
                <IconMapPin
                  className="text-main-client mx-2 h-6 w-6"
                  stroke={2}
                />
                <span className="text-secondary mx-2 w-72 truncate">
                  Mar del Plata - Argentina
                </span>
              </p>
              <p className="text-secondary -mx-2 flex items-start">
                <IconPhone
                  className="text-main-client mx-2 h-6 w-6"
                  stroke={2}
                />
                <a
                  className="flex gap-x-1"
                  href={`tel:+0223 4511861`}
                  title="Llamar"
                >
                  <span className="text-secondary mx-2 truncate">
                    0223 4511861
                  </span>
                </a>
                /
                <a
                  className="flex gap-x-1"
                  href={`tel:0223155366800`}
                  title="Llamar"
                >
                  <span className="text-secondary mx-2 truncate">
                    0223 155366800
                  </span>
                </a>
              </p>
              <p className="-mx-2 flex items-start">
                <IconMail
                  className="text-main-client mx-2 h-6 w-6"
                  stroke={2}
                />
                <span className="text-secondary mx-2 w-72 truncate">
                  info@nizzipropiedades.com
                </span>
              </p>
            </div>
            <div className="mt-6 w-80 md:mt-8">
              <h3 className="text-xl text-slate-900">Follow us</h3>
              <div className="-mx-1.5 mt-4 flex">
                {socialMedia.map((item, index) => (
                  <a
                    key={index}
                    title={item.name}
                    className="text-main-client mx-1.5 transform transition-colors duration-300 hover:opacity-75"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <item.logo className="h-10 w-10" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/******************* FORM *******************/}
          <div className="mt-8 lg:mx-6 lg:w-1/2">
            <div className="mx-auto w-full overflow-hidden rounded-lg border-[1px] border-gray-400 p-8 lg:max-w-xl">
              <FormContact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
