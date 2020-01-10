import React, { useEffect, useState } from "react";
import { HomePageContainer, LeftSideContainer } from "./Home.styles";
import SideBar from "./SideBar";
import DisplayBox from "./DisplayBox";
import TimeDateDisplay from "./TimeDateDisplay";
import BottomDescription from "./BottomDescription";
import { backgroundData, data } from "./data";

export default function HomePage() {
  const [count, setCount] = useState(0);

  // On first render, randomly pick the background image
  useEffect(() => {
    setCount(Math.floor(Math.random() * (backgroundData.images.length - 1)));
  }, []);

  const homeContent = data;

  return (
    <HomePageContainer backgroundImage={backgroundData.images[count]}>
      <SideBar />
      <LeftSideContainer>
        <DisplayBox homeContent={homeContent} />
        <TimeDateDisplay />
        <BottomDescription />
      </LeftSideContainer>
    </HomePageContainer>
  );
}
