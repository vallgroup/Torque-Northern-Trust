import React from "react";
import {
  DisplayContainer,
  DisplayBoxTitle,
  DisplayInnerContainer,
  P
} from "./Home.styles";

export default function DisplayBox({ homeContent }) {
  return (
    <DisplayContainer>
      <DisplayInnerContainer>
        <DisplayBoxTitle>{homeContent.resting_state.title}</DisplayBoxTitle>
        <P
          dangerouslySetInnerHTML={{
            __html: homeContent.resting_state.content
          }}
        />
      </DisplayInnerContainer>
    </DisplayContainer>
  );
}
