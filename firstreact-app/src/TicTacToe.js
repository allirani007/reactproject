import React, { useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { red } from "@mui/material/colors";

//loop --> map
//parent component  -> child component(data has be passed)-> props
export function TicTacToe() {
  const [board, setboard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  //useState([0,1,2,3,4,5,6,7,8]);
  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    //if winning condition present in the board then we have a winner
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      //console.log(a,b,c);
      if (board[a] !== "null" &&
        board[a] === board[b] &&
        board[b] === board[c]) {
        console.log("Winner is", board[a]);
        return board[a];
      }
    }
    return null;
  };

  const winner = decideWinner(board);

  const [isXturn, setisXturn] = useState(true);

  const handleClick = (index) => {
    //copy the board and replace with "X" in the clicked gamebox
    // update only untouched boxes &  until no winner
    if (winner === null && board[index] === null) {
      const boardcopy = [...board];
      console.log(boardcopy, index);
      boardcopy[index] = isXturn ? "X" : "O";
      const turn = isXturn ? "X" : "O";
      alert("now turn of " + turn);
      setisXturn(!isXturn);
      setboard(boardcopy);
    }
  };

  const present = (currentValue) => currentValue;

  //const array1 = [1, 30, 39, 29, 10, 13];
  const bb = (board.every(present));
  console.log(bb);
  // expected output: true
  const draw = () => {
    const style2 = {
      color: red
    };
    if (winner === null && bb) {
      return (
        <h2 style={style2}>Game Draw</h2>);
    }
  };

  // function getStatus() {
  //   if (winner) {
  //     return "Winner: " + winner;
  //   } else if (board[index]===null) {
  //     return "Draw!";
  //   }
  // }
  const { width, height } = useWindowSize();

  return (
    <div className="full-game">
      {winner ? (
        <Confetti width={width} height={height} gravity={0.01} wind={0} />
      ) : (
        ""
      )}
      <div className="game1">
        {board.map((val, index) => (
          <Gamebox val={val} onPlayerClick={() => handleClick(index)} />
        ))}
      </div>
      {/* <div className="game-info">{getStatus()}</div> */}
      {winner ? <h2>Winner is {winner}</h2> : ""}
      {draw()};

      {/* <draw /> */}
      <button
        onClick={() => {
          setboard([null, null, null, null, null, null, null, null, null]);
          setisXturn(true);
        }}>
        Restart
      </button>
    </div>
  );
}
//{val} -> object destructuring
// function Gamebox({val}){
// //const val="x";
//   const styles={
//     color:val==="X" ? "Green" :"red",
//   };
//      return (<div style={styles} className="game-box">{val}</div>);
// }
//changing val requires Hook
function Gamebox({ val, onPlayerClick }) {
  // const [val,setval]=useState(null);
  //const val="x";
  const styles = {
    color: val === "X" ? "Green" : "red",
  };

  return (
    <div
      onClick={() => onPlayerClick()}
      // onClick={()=>setval(val==="X" ? "O":"X")}
      style={styles}
      className="game-box"
    >
      {val}
    </div>
  );
}
