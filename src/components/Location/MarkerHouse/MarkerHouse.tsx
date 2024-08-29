import { icon } from "leaflet";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Marker, Popup, useMap } from "react-leaflet";
import { housesData } from "./MarkerHouse.data";
import { MarkerHouseProps } from "./MarkerHouse.types";

export function MarkerHouse(props: MarkerHouseProps) {
  const { selectMarker } = props;
  const fnMap = useMap();
  const customIcon = icon({
    iconUrl: "/assets/marker.svg",
    iconSize: [40, 40],
  });
  return housesData.map(({ id, name, position, image }) => (
    <Marker
      key={id}
      position={position}
      icon={customIcon}
      eventHandlers={{
        click: () => {
          selectMarker(position, fnMap);
        },
      }}
    >
      <Popup>
        <div className="mb-2 flex items-center">
          <span className="mr-3 text-secondary">
            <FaMapMarkerAlt />
          </span>
          <h5 className="text-md text-secondary">{name}</h5>
        </div>
        <Image
          src={`/assets/houses/${image}`}
          alt={name}
          width={100}
          height={100}
          className="h-auto w-full"
        />
        <button className="w-100 mt-2 rounded-lg bg-secondary px-3 py-2 text-white">
          Ver propiedad
        </button>
      </Popup>
    </Marker>
  ));
}
