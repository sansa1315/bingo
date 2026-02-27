import { useState, useEffect } from 'react';

function Player(props) {
    const [player, setPlayeer] = useState({})
    const numbers = Array.from({length: 90}, (_, i) => i + 1)
    function random() {
        return Math.floor(Math.random() * numbers.length) + 1
    }


    const fillPlayerBoard = () => {
        let test = {};
        while (Object.keys(test).length < 15) {
            let randumNumber = random()
            test[randumNumber] = randumNumber
      }
      setPlayeer({...test})
    }

    function checkWinner() {
        if(Object.keys(props.board).length > 0){
            
            for (const number in player) {
                if (!props.board.hasOwnProperty(number)){                    
                    return
                }
            }
            
            if (typeof props.won === 'function') props.won(props.name)
            return
        }else{
            return false
        }
    }

    useEffect(() => {
        fillPlayerBoard();
      }, []);

    checkWinner();

    return (
        <div className='card'>
            <h3>{props.name}</h3>
            <div className='d-flex cardBody  '>
                {
                    Object.keys(player).map((x,i) => {
                        return(
                            <div className={`item d-flex justify-content-center  ${props.board[x] ? "red" : ""}`} key={i} >
                                <span className='my-auto'>{x}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Player