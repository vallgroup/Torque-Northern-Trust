import React from "react";
import {
  FocusedPortaitContainer,
  GridIconOverlay,
  Icon,
  FocusedIconDescriptionContainer,
  FocusedIconDescriptionCopy
} from "../Grids/Grid.style";
import {BackgroundTileColor} from '../../styles/appStyles'

export default function FocusedIcon({ icon }) {
  const background_color = BackgroundTileColor(icon && icon.background_color)

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
