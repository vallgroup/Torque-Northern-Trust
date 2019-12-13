import React from "react";
import { GridItem } from "./styles/GridStyle";

export default function GridPortrait({ portrait, onClick, index }) {
  return (
    <GridItem
      style={{ backgroundImage: `url(${portrait.photo.url})` }}
      onClick={() => onClick(index)}
    >
      <h1>{portrait.name}</h1>
    </GridItem>
  );
}
