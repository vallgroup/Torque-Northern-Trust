import React from "react";
import {
  FocusedPortaitContainer,
  GridIconOverlay,
  Icon
} from "./styles/GridStyle";

export default function FocusedIcon({ icon }) {
  let background_color;

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
  return (
    <FocusedPortaitContainer
      style={{ backgroundImage: `url(${icon.background_image.url})` }}
    >
      <GridIconOverlay
        style={{
          backgroundColor: background_color
        }}
      >
        <Icon src={icon.icon.url} alt="icon" />
        <h1>{icon.title}</h1>
        {icon.content}
      </GridIconOverlay>
    </FocusedPortaitContainer>
  );
}
