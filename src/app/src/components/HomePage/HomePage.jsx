import React from "react";
import { HomePageContainer, LeftSideContainer } from "./styles/homePage";
import SideBar from "./SideBar";
import DisplayBox from "./DisplayBox";
import TimeDateDisplay from "./TimeDateDisplay";

export default function HomePage() {
  return (
    <HomePageContainer>
      <SideBar />
      <LeftSideContainer>
        <DisplayBox />
        <TimeDateDisplay></TimeDateDisplay>
      </LeftSideContainer>
    </HomePageContainer>
  );
}
