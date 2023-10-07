import React from 'react'
import Tile from './Tile'
import Cross from './Cross'

function Board({tile,clickedTileArg,hoverMarkClassName,sendCrossClass}) {
    console.log(hoverMarkClassName)
  return (
    <div className='Board'>

        <Tile clickedTile={()=>clickedTileArg(0)} ClassName={hoverMarkClassName} tileValue={tile[0]} />
        <Tile clickedTile={()=>clickedTileArg(1)} ClassName={hoverMarkClassName} tileValue={tile[1]}/>
        <Tile clickedTile={()=>clickedTileArg(2)} ClassName={hoverMarkClassName} tileValue={tile[2]}/>
        <Tile clickedTile={()=>clickedTileArg(3)} ClassName={hoverMarkClassName} tileValue={tile[3]}/>
        <Tile clickedTile={()=>clickedTileArg(4)} ClassName={hoverMarkClassName} tileValue={tile[4]}/>
        <Tile clickedTile={()=>clickedTileArg(5)} ClassName={hoverMarkClassName} tileValue={tile[5]}/>
        <Tile clickedTile={()=>clickedTileArg(6)} ClassName={hoverMarkClassName} tileValue={tile[6]}/>
        <Tile clickedTile={()=>clickedTileArg(7)} ClassName={hoverMarkClassName} tileValue={tile[7]}/>
        <Tile clickedTile={()=>clickedTileArg(8)} ClassName={hoverMarkClassName} tileValue={tile[8]}/>
        <Cross crossClass={sendCrossClass}></Cross>
      
    </div>
  )
}

export default Board
