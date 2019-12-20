import React from "react";
import { FocusedPortaitContainer } from "./Grid.style";

export default function FocusedPortrait({ portrait }) {
  return (
    <FocusedPortaitContainer
      style={{ backgroundImage: `url(${portrait.photo.url})` }}
    >
      <h1>{portrait.name}</h1>
      <h1>{portrait.department}</h1>
    </FocusedPortaitContainer>
  );
}
