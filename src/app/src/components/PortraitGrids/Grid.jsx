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

  // setInterval hook
  useInterval(() => {
    // increment the counter if the counter is less than 22 and the page has not been interacted with recently
    if (count < 22 && !recentlyClicked) {
      setCount(count + 1);
      // reset count to 0 when counter reaches 22 and the page has not been interacted with recently
    } else if (count === 22 && !recentlyClicked) {
      setCount(0);
    }
  }, 5000);

  // when the count increments, change the grid portrait that is in focus
  useEffect(() => {
    function timedFocus() {
      setFocus(gridData[count]);
    }
    return timedFocus();
  }, [count, gridData]);

  // set the focused portrait to the item the user selects, set recentlyClicked to true so the count stops running
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
      <FocusedPortrait portrait={focusedPortait} />
    </GridContainer>
  );
}
