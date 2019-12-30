import React from "react";
import { MapPage, PointsOfInterest } from "./Map.styles";
import { MapContainer } from "./Map.styles";
import Header from "../Header/Header";

export default function Map() {
  return (
    <>
      <Header />
      <MapPage>
        <MapContainer></MapContainer>
        <PointsOfInterest></PointsOfInterest>
      </MapPage>
    </>
  );
}
