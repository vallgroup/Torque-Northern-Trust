import React from "react";
import { FooterContainer, LeftFooterContent } from "./Footer.styles";

export default function Footer({ footerText }) {
  return (
    <FooterContainer>
      <LeftFooterContent>
        <h1>Logo</h1>
        <h1>{footerText ? footerText : "FooterText"}</h1>
      </LeftFooterContent>
      <h1>HomeIcon</h1>
    </FooterContainer>
  );
}
