import React from 'react'
import { GridItem } from "../Grids/Grid.style";

function Portrait(props) {
  return (
    <GridItem
      onClick={props.onClick}
      backgroundImage={props.portrait && props.portrait.photo.sizes.medium}
    />
  )
}

export default Portrait
