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
      {homeContent
        && <DisplayInnerContainer>
          <DisplayBoxTitle>{homeContent.title}</DisplayBoxTitle>
          <P
            dangerouslySetInnerHTML={{
              __html: homeContent.description
            }}
          />
        </DisplayInnerContainer>
      }
    </DisplayContainer>
  );
}
