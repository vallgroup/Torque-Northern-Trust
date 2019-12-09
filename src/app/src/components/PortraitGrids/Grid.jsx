import React, { useState, useEffect } from "react";
import { GridContainer } from "./styles/GridStyle";
import { data } from "./data";
import GridPortrait from "./GridPortrait";
import { useInterval } from "../../hooks/useInterval";
import FocusedPortrait from "./FocusedPortrait";

export default function Grid() {
  const gridData = data.grid.portraits;
  const [count, setCount] = useState(0);
  const [focusedPortait, setFocus] = useState(gridData[count]);
  const [recentlyClicked, setRecentlyClicked] = useState(false);

  useInterval(() => {
    if (count < 22 && !recentlyClicked) {
      setCount(count + 1);
    } else if (count === 22 && !recentlyClicked) {
      setCount(0);
    }
  }, 5000);

  useEffect(() => {
    function timedFocus() {
      setFocus(gridData[count]);
    }
    return timedFocus();
  }, [count, gridData]);

  const changeFocus = index => {
    setCount(index);
    setRecentlyClicked(true);
    setTimeout(() => {
      setRecentlyClicked(false);
    }, 5000);
  };
  return (
    <GridContainer>
      {gridData.map((portrait, i) => (
        <GridPortrait
          key={i}
          portrait={portrait}
          index={i}
          onClick={changeFocus}
        />
      ))}
      <h1>{count}</h1>
      <FocusedPortrait portrait={focusedPortait} />
    </GridContainer>
  );
}
