import React from 'react'

function Winner({sendCurentState}) {
  return (

    <>
{  
     (sendCurentState==="X"||sendCurentState==="O")?
     <div className='winner'>
     <h1>{`${sendCurentState} IS WINNER`}</h1>
     </div>:((sendCurentState==="DRAW")?
     <div>
     <h1>{`GAME IS ${sendCurentState}`}</h1>
     </div>:<></>)

     
 }
    
  
    
    </>
 
   
  )
}

export default Winner
