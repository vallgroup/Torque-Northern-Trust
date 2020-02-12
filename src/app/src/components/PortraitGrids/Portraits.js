import React, {memo} from 'react'
import Portrait from "./Portrait";

function Portraits({portraits, onClick}) {
  return (
    portraits && portraits.map((item, i) => (
      <Portrait
        key={i}
        onClick={() => onClick(i)}
        portrait={item}
      />
    ))
  )
}

export default memo(Portraits)
