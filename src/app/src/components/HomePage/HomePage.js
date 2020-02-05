import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import DisplayBox from "./DisplayBox";
import TimeDateDisplay from "./TimeDateDisplay";
import BottomDescription from "./BottomDescription";
import { data } from "./data";

import ntLogo from '../../assets/nt_logo.svg'

import {
  HomePageLogo,
  HomePageContainer,
  LeftSideContainer
} from "./Home.styles";

export default function HomePage() {
  const [count, setCount] = useState(0);

  const backgroundData = data.resting_state.background_images;
  // On first render, randomly pick the background image
  useEffect(() => {
    setCount(Math.floor(Math.random() * (backgroundData.length - 1)));
  }, []);

  const homeContent = data;

  return (
    <HomePageContainer backgroundImage={backgroundData[count].url}>
      <HomePageLogo src={ntLogo} />
      <SideBar />
      <LeftSideContainer>
        <DisplayBox homeContent={homeContent} />
        <TimeDateDisplay />
        <BottomDescription />
      </LeftSideContainer>
    </HomePageContainer>
  );
}
