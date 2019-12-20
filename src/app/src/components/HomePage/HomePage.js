import React from "react";
import { HomePageContainer, LeftSideContainer } from "./Home.styles";
import SideBar from "./SideBar";
import DisplayBox from "./DisplayBox";
import TimeDateDisplay from "./TimeDateDisplay";
import BottomDescription from "./BottomDescription";

export default function HomePage() {
  return (
    <HomePageContainer>
      <SideBar />
      <LeftSideContainer>
        <DisplayBox />
        <TimeDateDisplay />
        <BottomDescription />
      </LeftSideContainer>
    </HomePageContainer>
  );
}
