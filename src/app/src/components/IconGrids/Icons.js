import React, {memo} from 'react'
import Icon from "./Icon";

function Icons({tiles, onClick}) {
  return (
    tiles && tiles.map((item, i) => (
      <Icon
        key={i}
        onClick={() => onClick(i)}
        icon={item}
        index={i}
      />
    ))
  )
}

export default memo(Icons)
