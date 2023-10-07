import React from 'react'

function Tile({tileValue,clickedTile,ClassName}) {
    let hoverClass=null
      if(tileValue==null){
        hoverClass=ClassName
      }

  return (
    <div className={`Tile ${hoverClass}`} onClick={clickedTile} >
      <h2 >{tileValue}</h2>
    </div>
  )
}

export default Tile
