import React from "react";
import {
  HeaderContainer,
  LeftHeaderContent,
  Logo,
  HomeButton,
  Divider,
  RightHeaderContent,
  HeaderText
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
      <RightHeaderContent>
        <HeaderText>{headerText ? headerText : ""}</HeaderText>
        <Divider></Divider>
        <HomeButton
          src={home_button}
          alt="home-button"
          onClick={() => history.push("/")}
        />
      </RightHeaderContent>
    </HeaderContainer>
  );
}
