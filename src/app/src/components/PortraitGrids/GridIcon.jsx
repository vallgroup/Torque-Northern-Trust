import React from "react";
import { GridItem, GridIconOverlay } from "./styles/GridStyle";

export default function GridIcon({ icon }) {
  console.log(icon);

  return (
    <GridIconOverlay style={{ backgroundColor: icon.background_color }}>
      <GridItem>
        <img src="" alt="" />
        <h1>{icon.title}</h1>
      </GridItem>
    </GridIconOverlay>
  );
}
