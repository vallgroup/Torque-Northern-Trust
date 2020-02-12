import React from "react";
import { GridItem, GridIconOverlay, Icon } from "../Grids/Grid.style";

export default function GridIcon({ icon, onClick, index }) {
  let background_color = '#fff';

  if (icon) {
    // Check to see what background color is served from the API,
    // assign the background color with rgba values
    switch (icon.background_color) {
      case "turquoise":
      background_color = `rgba(64, 224, 208, 0.5)`;
      break;
      case "green":
      background_color = `rgba(0, 255, 0, 0.5)`;
      break;
      case "orange":
      background_color = `rgba(255, 165, 0, 0.5)`;
      break;
      case "blue":
      background_color = `rgba(0, 0, 255, 0.5)`;
      break;
      case "gold":
      background_color = `rgba(212, 175, 55, 0.5)`;
      break;
      default:
      background_color = `rgba(0, 255, 0)`;
    }
  }

  return (
    <GridItem
      backgroundImage={(icon.background_image
        && icon.background_image.sizes.medium) || ''}
      onClick={() => onClick(index)}
    >
      <GridIconOverlay backgroundColor={background_color}>
        <Icon src={icon.icon ? icon.icon.sizes.medium : ''} alt="icon" />
        <h1>{icon.title}</h1>
      </GridIconOverlay>
    </GridItem>
  );
}
