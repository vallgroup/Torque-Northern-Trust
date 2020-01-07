import React from "react";
import {
  DisplayContainer,
  DisplayBoxTitle,
  DisplayInnerContainer,
  P
} from "./Home.styles";

export default function DisplayBox() {
  return (
    <DisplayContainer>
      <DisplayInnerContainer>
        <DisplayBoxTitle>Content</DisplayBoxTitle>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
          similique iusto nihil illo voluptates nam quae ad adipisci dolores
          animi sequi! Accusantium dolore recusandae aut error aperiam rem
          laudantium odio!
        </P>
      </DisplayInnerContainer>
    </DisplayContainer>
  );
}
