import React from "react";
import { HomePageContainer, LeftSideContainer } from "./styles/homePage";
import SideBar from "./SideBar";
import DisplayBox from "./DisplayBox";
import TimeDateDisplay from "./TimeDateDisplay";
import BottomDescription from "./BottomDescription";

export default function HomePage(props) {
  return (
    <HomePageContainer>
      <SideBar {...props} />
      <LeftSideContainer>
        <DisplayBox />
        <TimeDateDisplay />
        <BottomDescription />
      </LeftSideContainer>
    </HomePageContainer>
  );
}
