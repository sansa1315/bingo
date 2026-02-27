import './App.css';
import Player from './components/Player';

import BoardNumber from './components/BoardNumber';
import { useState, useEffect } from 'react';


function App() {
  const [boardNumbers, setBoardNumbers] = useState({});
  // track the winner's name in state so changes trigger renders
  const [winnerName, setWinnerName] = useState(null)


  const numbers = Array.from({length: 90}, (_, i) => i + 1)

  // Pick a random integer index given an array
  function pickRandomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Player components will call this with their name when they have completed their board
  function winner(name) {
    if (name) setWinnerName(name)
  }

  function reset() {
    // reset to an empty object (components expect an object)
    setBoardNumbers({})
    alert("ya gano")
  }

  // When a winner is detected, show an alert and reset the game
  useEffect(() => {
    if (winnerName) {
      alert(`${winnerName} ha ganado!`)
      setBoardNumbers({})
      // reset winner after handling
      setWinnerName(null)
    }
  }, [winnerName])

  function play() {
    // console.log("desde play ganador", winnerName)
    if(winnerName){
      reset();
    }else{
      // Build array of remaining numbers (exclude those already in boardNumbers)
      const remaining = numbers.filter(n => !boardNumbers[n]);
      if (remaining.length === 0) {
        // no more numbers left
        alert('No quedan más números');
        return;
      }
      const randomNumber = pickRandomFromArray(remaining);
      setBoardNumbers({...boardNumbers, [randomNumber]: randomNumber});
    }
  }

  return (
    <div className="container">
    <h1 className='text-center'>Bingo app</h1>
    <div className='row'>
      <div className='col text-center'>
        <Player name={"Player"} won={winner}  board={boardNumbers}></Player>
      </div>
      <div className='col d-flex justify-content-center'>
        <div className='circle '>
          <button className='btn btn-success' onClick={() => play()}>Take a number</button>
        </div>
      </div>
      <div className='col text-center'>
        <Player name={"CPU"} won={winner}  board={boardNumbers}></Player>
      </div>
    </div>
    <BoardNumber board={boardNumbers}></BoardNumber>
    </div>
  );
}

export default App;
