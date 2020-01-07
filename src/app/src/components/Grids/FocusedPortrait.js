import React from "react";
import {
  FocusedPortaitContainer,
  FocusedDescriptionContainer
} from "./Grid.style";

export default function FocusedPortrait({ portrait }) {
  return (
    <FocusedPortaitContainer backgroundImage={portrait.photo.url}>
      <FocusedDescriptionContainer>
        <h1>
          {portrait.name}
          <span>
            {portrait.date_started}//{portrait.department}
          </span>
        </h1>
        <h1>{portrait.tagline}</h1>
      </FocusedDescriptionContainer>
    </FocusedPortaitContainer>
  );
}
