import React from "react";
import { MapPage, PointsOfInterest } from "./Map.styles";
import { MapContainer } from "./Map.styles";

export default function Map() {
  return (
    <MapPage>
      <MapContainer></MapContainer>
      <PointsOfInterest></PointsOfInterest>
    </MapPage>
  );
}
