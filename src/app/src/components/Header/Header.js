import React from "react";
import { HeaderContainer, LeftHeaderContent } from "./Header.styles";
import { useLocation } from "react-router-dom";

export default function Header({ headerText }) {
  const location = useLocation().pathname;
  return (
    <HeaderContainer position={location === "/" ? "fixed" : null}>
      <LeftHeaderContent>
        <h1>Logo</h1>
        {location !== "/" && <h1>{headerText ? headerText : "HeaderText"}</h1>}
      </LeftHeaderContent>
      {location !== "/" && <h1>HomeIcon</h1>}
    </HeaderContainer>
  );
}
