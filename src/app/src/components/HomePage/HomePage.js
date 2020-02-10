import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import DisplayBox from "./DisplayBox";
import TimeDateDisplay from "./TimeDateDisplay";
import BottomDescription from "./BottomDescription";
import { data } from "./data";

import { useNortherTrustActions } from "../../redux/hooks/commands/useNorthernTrustActions";
import { useHomeContent } from "../../redux/hooks/queries/useHomeContent";

import ntLogo from '../../assets/nt_logo.svg'

import {
  HomePageLogo,
  HomePageContainer,
  LeftSideContainer
} from "./Home.styles";

export default function HomePage() {
  const { fetchHomeContent } = useNortherTrustActions();

  const homeContent = useHomeContent();

  const [count, setCount] = useState(0);

  const backgroundData = data.resting_state.background_images;

  useEffect(() => {
    return fetchHomeContent();
  }, []);

  // On first render, randomly pick the background image
  useEffect(() => {
    setCount(Math.floor(Math.random() * (backgroundData.length - 1)));
  }, []);

  // const homeContent = data;

  const restingState = homeContent.resting_state || {}

  return (
    <HomePageContainer backgroundImage={backgroundData[count].url}>
      <HomePageLogo src={ntLogo} />
      <SideBar />
      <LeftSideContainer>
        <DisplayBox homeContent={restingState.content} />
        {restingState.weather
          && <TimeDateDisplay weather={restingState.weather} />}
        <BottomDescription feed={restingState.feed} />
      </LeftSideContainer>
    </HomePageContainer>
  );
}
