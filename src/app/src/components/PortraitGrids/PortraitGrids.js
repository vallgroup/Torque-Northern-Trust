import React, { useState, useEffect, memo } from "react";
import { GridContainer, GridItem } from "../Grids/Grid.style";
import { useInterval } from "../../hooks/useInterval";
import FocusedPortrait from "./FocusedPortrait";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Portrait from './Portrait'
import {useNortherTrustActions} from '../../redux/hooks/commands/useNorthernTrustActions'
import {useGridPortraits} from '../../redux/hooks/queries/useGridPortraits'

function PortraitGrids() {
  const {fetchGridPortraits} = useNortherTrustActions()
  const history = useHistory();
  const location = useLocation();
  const params = useParams();

  const gridPortraits = useGridPortraits()
console.log(gridPortraits)
  const [count, setCount] = useState(0);
  const [focusedItem, setFocus] = useState(gridPortraits.grid && gridPortraits.grid.portraits[count]);
  const [recentlyClicked, setRecentlyClicked] = useState(false);

  useEffect(() => {
    if (!gridPortraits.grid) {
      fetchGridPortraits(params.slug)
    }
  }, [])

  // when the count increments, change the grid portrait that is in focus
  useEffect(() => {
    function timedFocus() {
      setFocus(gridPortraits.grid && gridPortraits.grid.portraits[count]);
    }
    return timedFocus();
  }, [count]);

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
    }, 150000);

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
    <>
      <Header headerText={(gridPortraits.grid && gridPortraits.grid.title) || ''} />
      <GridContainer>
        {gridPortraits.grid
          && gridPortraits.grid.portraits
          && gridPortraits.grid.portraits.map((item, i) => (
            <Portrait
              key={i}
              onClick={() => changeFocus(i)}
              portrait={item}
            />
          ))
        }
        <FocusedPortrait portrait={focusedItem} />
      </GridContainer>
    </>
  );
}

export default memo(PortraitGrids)
