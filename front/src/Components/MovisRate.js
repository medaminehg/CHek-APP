import React from 'react'

function MovisRate(props) {
    let stars=[]
    for (let i=0 ;i<5 ;i++){
        if (i<props.Mrate) {
            stars.push(<span className='sta' key={i}>★</span>)
            
        } else {
            stars.push(<span className='star' key={i}>★</span>)
            
        }
    }
  return (
    
      <div>{stars}</div>
    
  )
}

export default MovisRate


