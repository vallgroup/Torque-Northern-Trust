import React from "react";
import {
  HeaderContainer,
  LeftHeaderContent,
  Logo,
  HomeButton
} from "./Header.styles";
import { useLocation, useHistory } from "react-router-dom";
import home_button from "../../assets/home_button.svg";
import nt_logo from "../../assets/nt_logo.svg";

export default function Header({ headerText }) {
  const location = useLocation().pathname;
  const history = useHistory();
  return (
    <HeaderContainer position={location === "/" ? "fixed" : null}>
      <LeftHeaderContent>
        <Logo src={nt_logo} alt="" />
      </LeftHeaderContent>
      {<h1>{headerText ? headerText : "HeaderText"}</h1>}
      <HomeButton src={home_button} alt="" onClick={() => history.push("/")} />
    </HeaderContainer>
  );
}
