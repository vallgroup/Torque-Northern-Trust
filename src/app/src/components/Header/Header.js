import React from "react";
import { HeaderContainer, LeftHeaderContent } from "./Header.styles";

export default function Header({ footerText }) {
  return (
    <HeaderContainer>
      <LeftHeaderContent>
        <h1>Logo</h1>
        <h1>{footerText ? footerText : "HeaderText"}</h1>
      </LeftHeaderContent>
      <h1>HomeIcon</h1>
    </HeaderContainer>
  );
}
