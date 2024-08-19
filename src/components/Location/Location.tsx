"use client";
import { Map } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { Transition } from "../Transition";
import { MarkerHouse } from "./MarkerHouse";

export function Location() {
  const coordinatePoint = {
    lat: 39.46975,
    lng: -0.37739,
  };

  const centerMarker = (position: { lat: number; lng: number }, fnMap: Map) => {
    fnMap.flyTo({
      lat: position.lat,
      lng: position.lng,
    });
  };

  return (
    <Transition className="py- px-4 md:px-36 md:py-44">
      <h4 className="text-center text-secondary" id="location">
        Localización
      </h4>
      <h2 className="mx-auto my-4 mb-8 max-w-2xl text-center text-3xl font-semibold">
        Disponibles en todo Mar del Plata.
      </h2>
      <MapContainer
        center={coordinatePoint}
        zoom={6}
        scrollWheelZoom={false}
        className="h-[700px]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerHouse selectMarker={centerMarker} />
      </MapContainer>
    </Transition>
  );
}
