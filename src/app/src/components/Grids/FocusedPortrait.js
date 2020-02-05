import React from "react";
import {
  FocusedPortaitContainer,
  FocusedDescriptionContainer,
  Span,
  H1
} from "./Grid.style";

export default function FocusedPortrait({ portrait }) {
  return (
    <FocusedPortaitContainer backgroundImage={portrait.photo.url}>
      <FocusedDescriptionContainer>
        <H1>
          {portrait.name}&nbsp;
          <Span>
            {portrait.date_started}/{portrait.department}
          </Span>
        </H1>
        <Span>{portrait.tagline}</Span>
      </FocusedDescriptionContainer>
    </FocusedPortaitContainer>
  );
}
