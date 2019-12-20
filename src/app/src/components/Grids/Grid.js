import React, { useState, useEffect } from "react";
import { GridContainer } from "./Grid.style";
import GridPortrait from "./GridPortrait";
import { useInterval } from "../../hooks/useInterval";
import FocusedPortrait from "./FocusedPortrait";
import { data } from "./data/data";
import { iconData } from "./data/iconData";
import GridIcon from "./GridIcon";
import FocusedIcon from "./FocusedIcon";
import { useHistory, useLocation } from "react-router-dom";

export default function Grid({ gridType }) {
  const history = useHistory();
  const location = useLocation().pathname;

  let gridData = [];
  // if gridType prop is portrait, the dummy data to gridData
  // this will be changed to proper http requests when available
  if (location === "/grid") {
    gridData = data.grid.portraits;
  } else if (location === "/icon-grid") {
    gridData = iconData.grid.tiles;
  }
  const [count, setCount] = useState(0);
  const [focusedItem, setFocus] = useState(gridData[count]);
  const [recentlyClicked, setRecentlyClicked] = useState(false);

  // setInterval hook

  // when the count increments, change the grid portrait that is in focus
  useEffect(() => {
    function timedFocus() {
      setFocus(gridData[count]);
    }
    return timedFocus();
  }, [count, gridData]);

  useInterval(
    () => {
      // increment the counter if the counter is less than 22 and the page has not been interacted with recently
      if (count < 22 && !recentlyClicked) {
        setCount(count + 1);
        // reset count to 0 when counter reaches 22 and the page has not been interacted with recently
      } else if (count === 22 && !recentlyClicked) {
        setCount(0);
      }
    },
    5000,
    // useInterval will check to see if recentlyClicked is true, if it is, it will clear the interval
    recentlyClicked
  );

  useEffect(() => {
    // send user to homepage
    function goHome() {
      history.push("/");
    }
    // if the page has not been recently clicked, send the user home in 10 seconds
    let timeout = setTimeout(() => {
      if (!recentlyClicked) {
        goHome();
      }
    }, 15000);

    // clear the timeout when recently clicked is set to true and then set recently clicked to false
    return () => {
      clearTimeout(timeout);
      timeout = null;
      setRecentlyClicked(false);
    };
  }, [recentlyClicked, history]);

  // set the focused portrait to the item the user selects, set recentlyClicked to
  // true so the count stops running
  const changeFocus = index => {
    setCount(index);
    setRecentlyClicked(true);
  };

  return (
    <GridContainer>
      {!!gridData.length &&
        // if there is data available in gridData, map through it and display each item
        gridData.map((item, i) => {
          if (location === "/grid") {
            return (
              <GridPortrait
                key={i}
                portrait={item}
                index={i}
                onClick={changeFocus}
              />
            );
          } else if (location === "/icon-grid") {
            return (
              <GridIcon key={i} icon={item} index={i} onClick={changeFocus} />
            );
          } else return null;
        })}
      {location === "/grid" ? (
        <FocusedPortrait portrait={focusedItem} />
      ) : (
        <FocusedIcon icon={focusedItem} />
      )}
    </GridContainer>
  );
}
