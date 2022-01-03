import {render} from 'react-dom';
import React, { useCallback, useState } from 'react'
import Button from './Button';

//=====================================================================


function App(){
  const [count , setCount]=useState(0)

  function increment(){
    setCount(count=>count+1)
  }

  const incr= useCallback(increment,[])
     return(
       <div>
          count : {count}
         <Button onClick={incr}  />
       </div>
     )
}


render(<App/>,document.getElementById('root'));
