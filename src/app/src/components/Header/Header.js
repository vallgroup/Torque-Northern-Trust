import React from "react";
import {
  HeaderContainer,
  LeftHeaderContent,
  Logo,
  HomeButton,
  Divider,
  RightHeaderContent,
  HeaderText,
  GoBackBtn
} from "./Header.styles";
import { useLocation, useHistory } from "react-router-dom";
import home_button from "../../assets/home_button.svg";
import nt_logo from "../../assets/nt_logo.svg";

export default function Header({
  headerText,
  position,
  goBack,
}) {
  const location = useLocation().pathname;
  const history = useHistory();
  return (
    <HeaderContainer
      position={position || `top`}
    >
      <LeftHeaderContent>
        <Logo src={nt_logo} alt="" />
      </LeftHeaderContent>
      <RightHeaderContent>
        {goBack
          && true === goBack
          && <GoBackBtn
            onClick={e => history.goBack()}
          >
            {`Go Back`}
          </GoBackBtn>
        }
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
