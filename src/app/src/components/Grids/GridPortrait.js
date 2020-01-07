import React from "react";
import { GridItem } from "./Grid.style";

export default function GridPortrait({ portrait, onClick, index }) {
  return (
    <GridItem
      backgroundImage={portrait.photo.url}
      onClick={() => onClick(index)}
    ></GridItem>
  );
}
