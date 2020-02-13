import React from "react";
import { BottomDescriptionContainer } from "./Home.styles";

export default function BottomDescription({feed}) {

  return (
    <BottomDescriptionContainer>
      {feed}
    </BottomDescriptionContainer>
  );
}
