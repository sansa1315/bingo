import React from 'react'

function BoardNumber(props) {
  const board = props.board || {};
  
  const rows = Array.from({ length: 9 }, (_, rowIdx) => {
    const start = rowIdx * 10 + 1;
    return Array.from({ length: 10 }, (_, i) => start + i);
  });

  return (
    <div className='d-flex flex-column cardBody'>
      {rows.map((row, ri) => (
        <div className='d-flex justify-content-between' key={ri}>
          {row.map((num) => (
            <div
              className={`item d-flex justify-content-center ${board[num] ? 'red' : ''}`}
              key={num}
            >
              <span className='my-auto'>{num}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default BoardNumber