import React, { useEffect, useState } from "react";
import Board from "./Board";
import Winner from "./Winner";
import Reset from "./Reset";

function MainPage() {
  //state for puting value for the tile
  const [mark, setMark] = useState("X");

  //creating array for storing value of tile
  const [tileClick, setTileClick] = useState(Array(9).fill(null));

  //if there is an win statement there will appear a cross this state enble the class forr it
  const [doCrossClass, setDoCrossClass] = useState(null);

  //checking state for wiing or draw
  const [curentState, setCurentState] = useState(null);

  //push the value of the tile in to tileclick array
  const handleTileStatus = (value) => {
    if (tileClick[value] === null && doCrossClass === null) {
      const newTileClick = [...tileClick];
      console.log(value);
      newTileClick[value] = mark;
      mark === "X" ? setMark("O") : setMark("X");
      setTileClick(newTileClick);
    } else {
      return;
    }
  };

  //creating winning combination depends on tileclick array also set crossclass
  const winningCombination = [
    { combination: [0, 1, 2], crossclass: "row1" },
    { combination: [3, 4, 5], crossclass: "row2" },
    { combination: [6, 7, 8], crossclass: "row3" },
    { combination: [0, 3, 6], crossclass: "col1" },
    { combination: [1, 4, 7], crossclass: "col2" },
    { combination: [2, 5, 8], crossclass: "col3" },
    { combination: [0, 4, 8], crossclass: "rightDia" },
    { combination: [2, 4, 6], crossclass: "leftDia" },
  ];


  //function for game status
  const winner = () => {
    for (const { combination, crossclass } of winningCombination) {
      const rider1 = tileClick[combination[0]];
      const rider2 = tileClick[combination[1]];
      const rider3 = tileClick[combination[2]];

      if (rider1 != null && rider1 === rider2 && rider2 === rider3) {
        setDoCrossClass(crossclass);
        setCurentState(rider1);
        return
      }
    }
    
    const tileClickArrayFullFill = tileClick.every(
      (element) => element != null
    );
    if (tileClickArrayFullFill) {
      setCurentState("DRAW");
    }
  };



  useEffect(() => {
    winner();
  }, [mark]);



  //function for reset
  const reeset=()=>{
  setMark("X")
  setTileClick(Array(9).fill(null))
  setDoCrossClass(null)
  setCurentState(null)
  }

  return (
    <div className="MainPage">
      <h1 className="H1">Play Game</h1>
      <Board
        sendCrossClass={doCrossClass}
        tile={tileClick}
        hoverMarkClassName={`${mark}-hover`}
        clickedTileArg={handleTileStatus}
      />
      <Winner sendCurentState={curentState} />
      <Reset sendOnclick={reeset}></Reset>
    </div>
  );
}

export default MainPage;
