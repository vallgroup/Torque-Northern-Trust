import React, { useEffect, useState } from "react";
import { HomePageContainer, LeftSideContainer, Logo } from "./Home.styles";
import SideBar from "./SideBar";
import DisplayBox from "./DisplayBox";
import TimeDateDisplay from "./TimeDateDisplay";
import BottomDescription from "./BottomDescription";
import { backgroundData } from "./data";
import { useInterval } from "../../hooks/useInterval";

export default function HomePage() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    // increment the counter if the counter is less than 3
    if (count < 3) {
      setCount(count + 1);
      // reset count to 0 when counter reaches 3
    } else if (count === 3) {
      setCount(0);
    }
  }, 5000);

  return (
    <HomePageContainer backgroundImage={backgroundData.images[count]}>
      <SideBar />
      <LeftSideContainer>
        <DisplayBox />
        <TimeDateDisplay />
        <BottomDescription />
      </LeftSideContainer>
    </HomePageContainer>
  );
}
