
import './App.css';
import Player from './components/Player';

import BoardNumber from './components/BoardNumber';
import { useState } from 'react';
// import {useDispatch, useSelector} from 'react-redux/es/exports'
// import {getRandomNumber} from "./redux/generateNumbers"


function App() {
  const [boardNumbers, setBoardNumbers] = useState({});
  let ganador = false

  // const [randomNumber, setRandomNumber] = useState(0);



  const numbers = Array.from({length: 90}, (_, i) => i + 1)


  function random() {
      return Math.floor(Math.random() * numbers.length) + 1
  }

  function winner(win) {
    ganador = win
  }

  function reset() {
    setBoardNumbers([])
    alert("ya gano")
  }

  function play() {
    console.log("desde play ganador", ganador)
    if(ganador){
      reset();
    }else{
      let randomNumber = random()
      let test = {}
      while(boardNumbers[randomNumber]){
        randomNumber = random()
      }
      test[randomNumber] = randomNumber;
      setBoardNumbers({...boardNumbers, ...test})
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
        <div className='circle'>
          <button onClick={() => play()}>Click me</button>
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
