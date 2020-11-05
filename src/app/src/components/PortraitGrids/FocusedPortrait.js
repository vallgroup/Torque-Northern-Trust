import React from "react";
import {
  FocusedPortaitContainer,
  FocusedDescriptionContainer,
  Span,
  H1
} from "../Grids/Grid.style";

export default function FocusedPortrait({ portrait }) {
  // console.log(portrait)
  if (!portrait) return null
  return (
    <FocusedPortaitContainer
      backgroundImage={portrait.photo
        ? portrait.photo.sizes.large
        : ''}
    >
      <FocusedDescriptionContainer>
        <H1>
          {portrait.name}&nbsp;
          <Span>
            {portrait.department}
          </Span>
        </H1>
        <Span>{portrait.tagline}</Span>
      </FocusedDescriptionContainer>
    </FocusedPortaitContainer>
  );
}
