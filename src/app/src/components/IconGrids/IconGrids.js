import React, { useState, useEffect, memo } from "react";
import { GridContainer, GridItem } from "../Grids/Grid.style";
import { useInterval } from "../../hooks/useInterval";
import FocusedIcon from "./FocusedIcon";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Icons from './Icons'
import {useNortherTrustActions} from '../../redux/hooks/commands/useNorthernTrustActions'
import {useGridIcons} from '../../redux/hooks/queries/useGridIcons'

import {logEvent} from '../../firebase'
import {CTA_EVENT} from '../../firebase/events'

function PortraitGrids() {
  const {fetchGridIcons} = useNortherTrustActions()
  const history = useHistory();
  const location = useLocation();
  const params = useParams();

  const gridIcons = useGridIcons()

  const [count, setCount] = useState(0);
  const [focusedItem, setFocus] = useState(gridIcons.grid && gridIcons.grid.tiles[0]);
  const [recentlyClicked, setRecentlyClicked] = useState(false);

  useEffect(() => {
    fetchGridIcons(params.slug)
  }, [])

  useEffect(() => {
    setFocus(gridIcons.grid && gridIcons.grid.tiles[0]);
  }, [gridIcons]);

  // when the count increments, change the grid portrait that is in focus
  useEffect(() => {
    function timedFocus() {
      setFocus(gridIcons.grid && gridIcons.grid.tiles[count]);
    }
    !recentlyClicked && timedFocus();
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
    4000,
    // useInterval will check to see if recentlyClicked is true, if it is, it will clear the interval
    recentlyClicked
  );

  // useEffect(() => {
  //   // send user to homepage
  //   function goHome() {
  //     history.push("/");
  //   }
  //   // if the page has not been recently clicked, send the user home in 10 seconds
  //   let timeout = setTimeout(() => {
  //     if (!recentlyClicked) {
  //       goHome();
  //     }
  //   }, 3000);
  //
  //   // clear the timeout when recently clicked is set to true and then set recently clicked to false
  //   return () => {
  //     clearTimeout(timeout);
  //     timeout = null;
  //     setRecentlyClicked(false);
  //   };
  // }, [recentlyClicked, history]);

  // set the focused portrait to the item the user selects, set recentlyClicked to
  // true so the count stops running
  const changeFocus = index => {
    const __itemSelected = (gridIcons.grid && gridIcons.grid.tiles[index])
    logEvent(CTA_EVENT, {
      type: 'Grid Interaction',
      action: 'Grid Item Clicked',
      label: __itemSelected.title,
    })
    // setCount(index);
    setFocus(__itemSelected);
    setRecentlyClicked(true);
  };

  return (
    <>
      <Header headerText={(gridIcons.grid && gridIcons.grid.title) || ''} />
      <GridContainer>
        {gridIcons.grid
          && gridIcons.grid.tiles
          && <Icons
            onClick={changeFocus}
            tiles={gridIcons.grid.tiles}
          />
        }
        <FocusedIcon icon={focusedItem} />
      </GridContainer>
    </>
  );
}

export default memo(PortraitGrids)
