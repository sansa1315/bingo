import React from 'react'

function BoardNumber(props) {
  return (
    <div className='d-flex cardBody'>
      {
        Object.keys(props.board).map(x =>{
          return(
            <span className='item' key={x}>{x}</span>
          )
        } )
      }
    </div>
  )
}

export default BoardNumber