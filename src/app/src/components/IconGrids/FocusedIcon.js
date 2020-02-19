import React from "react";
import {
  FocusedPortaitContainer,
  GridIconOverlay,
  Icon,
  FocusedIconDescriptionContainer,
  FocusedIconDescriptionCopy
} from "../Grids/Grid.style";

export default function FocusedIcon({ icon }) {
  let background_color = '#fff';

  if (icon) {
    // Check to see what background color is served from the API,
    // assign the background color with rgba values
    switch (icon.background_color) {
      case "turquoise":
      background_color = `rgba(100, 200, 175, 0.95)`;
      break;
      case "green":
      background_color = `rgba(40, 145, 65, 0.95)`;
      break;
      case "dark green":
      background_color = `rgba(15, 85, 65, 0.95)`;
      break;
      case "orange":
      background_color = `rgba(190, 155, 55, 0.95)`;
      break;
      case "blue":
      background_color = `rgba(0, 105, 155, 0.95)`;
      break;
      case "gold":
      background_color = `rgba(185, 190, 0, 0.95)`;
      break;
      case "gray":
      background_color = `rgba(100, 100, 105, 0.95)`;
      break;
      default:
      background_color = `rgba(40, 145, 65, 0.95)`;
    }
  }

  const backgroundImage = icon && icon.background_image
    ? icon.background_image.sizes.large
    : ''

  return (
    <FocusedPortaitContainer
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <GridIconOverlay
        backgroundColor={background_color}
      >
        <FocusedIconDescriptionContainer>
          <Icon src={icon ? icon.icon.url : ''} alt="icon" />
          <h2>{icon && icon.title}</h2>
          <FocusedIconDescriptionCopy
            dangerouslySetInnerHTML={{ __html: icon && icon.content }}
          />
        </FocusedIconDescriptionContainer>
      </GridIconOverlay>
    </FocusedPortaitContainer>
  );
}
