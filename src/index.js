import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Compter(){
   const [state, setstate] = useState(0)
   
    function click(event){
       event.preventDefault()
      setstate(e=>e+1)
   }
    return <div>
               <h1>{state}</h1>
              <button onClick={click}>Incrementer </button>
             
              <hr/>
           </div>  
}

ReactDOM.render(
     
   <div> 
     <Compter/>
   </div>
  ,
  document.getElementById('root')
);

