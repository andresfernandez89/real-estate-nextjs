import {
  IconBrandLinkedinFilled,
  IconBrandWhatsapp,
  IconPhone,
} from "@tabler/icons-react";

const team = [
  {
    name: "Santiago Nizzi",
    image: "assets/team/santiago-nizzi.jpg",
    description: "Martillero y Corredor Público",
    contact: {
      whatsapp: "2235385108",
      phone: "2235-385108",
      linkedin: "https://www.linkedin.com/in/santiago-juan-nizzi/",
    },
  },
  {
    name: "María Belén Nizzi",
    image: "assets/team/belen-nizzi.jpg",
    description: "Martillero y Corredor Público",
    contact: {
      whatsapp: "2235366800",
      phone: "2235-366800",
      linkedin: "https://www.linkedin.com/in/mariabelennizzi/",
    },
  },
];

export function OurTeam() {
  return (
    <section className="bg-main-client mx-auto px-4 py-[88] lg:px-8">
      <div className="container mx-auto max-w-(--breakpoint-xl)">
        <h1 className="text-center text-2xl font-semibold text-white capitalize lg:text-3xl">
          Nuestro equipo
        </h1>
        <p className="mx-auto my-6 max-w-2xl text-center text-gray-200">
          Somos un equipo familiar y dinámico especializado en mediación
          inmobiliaria desde 2008, enfocados en ventas de inmuebles
          residenciales en Mar del Plata. Ofrecemos asesoramiento profesional,
          herramientas ágiles y tasaciones reales, respaldados por el Colegio de
          Martilleros y una amplia cartera de clientes satisfechos en la ciudad
          y el país.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:gap-x-12 xl:mt-16 xl:grid-cols-2">
          {team.map((person, index) => (
            <div
              key={index}
              className="group hover:bg-main-client-opacity transform rounded-xl border-gray-700 px-4 py-8 pr-0 pl-16 transition-colors duration-300 hover:border-transparent sm:px-8 lg:px-12"
            >
              <div className="flex flex-col sm:-mx-4 sm:flex-row">
                <img
                  className="h-24 w-24 flex-shrink-0 rounded-full object-cover ring-4 ring-gray-300 sm:mx-4"
                  src={person.image}
                  alt={`Foto de perfil de ${person.name}`}
                />
                <div className="mt-4 sm:mx-4 sm:mt-0">
                  <h1 className="text-xl font-semibold text-gray-700 capitalize group-hover:text-white md:text-2xl dark:text-white">
                    {person.name}
                  </h1>
                  <p className="mt-2 text-gray-500 group-hover:text-gray-300 dark:text-gray-300">
                    {person.description}
                  </p>
                  <p className="mt-4 flex cursor-pointer items-center gap-x-2 text-gray-500 group-hover:text-gray-300 dark:text-gray-300">
                    <a
                      className="flex gap-x-1"
                      href={`tel:+${person.contact.phone}`}
                      title="Llamar"
                    >
                      <IconPhone stroke={1} />
                      <span className="mt-[2]">{person.contact.phone}</span>
                    </a>
                  </p>
                </div>
              </div>
              <div className="items-top ms-2 mt-4 flex justify-start">
                <a
                  href={`https://wa.me/${person.contact.whatsapp}`}
                  className="cursor-pointer text-gray-600 group-hover:text-white hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-300"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Contactar"
                >
                  <IconBrandWhatsapp stroke={2} width={32} height={32} />
                </a>
                <a
                  href={person.contact.linkedin}
                  className="mx-2 cursor-pointer text-gray-600 group-hover:text-white hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-300"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Mi perfil"
                >
                  <IconBrandLinkedinFilled width={32} height={32} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
