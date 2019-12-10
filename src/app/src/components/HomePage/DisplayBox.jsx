import React from "react";
import {
  DisplayContainer,
  DisplayBoxTitle,
  DisplayInnerContainer
} from "./styles/homePage";

export default function DisplayBox() {
  return (
    <DisplayContainer>
      <DisplayInnerContainer>
        <DisplayBoxTitle>Content</DisplayBoxTitle>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
          similique iusto nihil illo voluptates nam quae ad adipisci dolores
          animi sequi! Accusantium dolore recusandae aut error aperiam rem
          laudantium odio!
        </p>
      </DisplayInnerContainer>
    </DisplayContainer>
  );
}
