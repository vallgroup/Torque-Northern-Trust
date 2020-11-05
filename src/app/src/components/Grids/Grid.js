import React, { useState, useEffect } from "react";
import { GridContainer, GridItem } from "./Grid.style";
import { useInterval } from "../../hooks/useInterval";
import FocusedPortrait from "./FocusedPortrait";
import { data } from "./data/data";
import { iconData } from "./data/iconData";
import GridIcon from "./GridIcon";
import FocusedIcon from "./FocusedIcon";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Header from "../Header/Header";

import {useNortherTrustActions} from '../../redux/hooks/commands/useNorthernTrustActions'
import {useGridPortraits} from '../../redux/hooks/queries/useGridPortraits'
import {useGridIcons} from '../../redux/hooks/queries/useGridIcons'

export default function Grid() {
  const {
    fetchGridPortraits,
    fetchGridIcons,
  } = useNortherTrustActions()
  const history = useHistory();
  const location = useLocation();
  const params = useParams();

  const gridPortraits = useGridPortraits()
  const gridIcons = useGridIcons()

  const isIconGrid = 0 === location.pathname.indexOf('/icon-grid')

  let gridData = []
  let pageTitle = ''

  if (isIconGrid) {
    pageTitle = gridIcons.grid
      ? gridIcons.grid.title
      : ''
    gridData = gridIcons.grid
      ? gridIcons.grid.tiles
      : []
  } else {
    pageTitle = gridPortraits.grid
      ? gridPortraits.grid.title
      : ''
    gridData = gridPortraits.grid
      ? gridPortraits.grid.portraits
      : []
  }

  const [count, setCount] = useState(0);
  const [focusedItem, setFocus] = useState(gridData[count]);
  const [recentlyClicked, setRecentlyClicked] = useState(false);

  useEffect(() => {
    return isIconGrid
      ? fetchGridIcons(params.slug)
      : fetchGridPortraits(params.slug)
  }, [])

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
      <Header headerText={pageTitle} />
      <GridContainer>
        {!!gridData.length &&
          // if there is data available in gridData, map through it and display each item
          gridData.map((item, i) => {
            if (isIconGrid) {
              return (
                <GridIcon key={i} icon={item} index={i} onClick={changeFocus} />
              );
            } else {
              return (
                <GridItem
                key={i}
                onClick={() => changeFocus(i)}
                backgroundImage={item.photo ? item.photo.url : ''}
                ></GridItem>
              );
            }
          })
        }
        {isIconGrid ? (
          <FocusedIcon icon={focusedItem} />
        ) : (
          <FocusedPortrait portrait={focusedItem} />
        )}
      </GridContainer>
    </>
  );
}
