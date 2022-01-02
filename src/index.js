import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function useIncrement(initial, step){
      const [state, setstate] = useState(initial)
      function incr(){
         setstate(e=>e+step)
      }
    return [state , incr]  
}

function Compter(){
   const [state, click] = useIncrement(100,5)
    return <div>       
               <h1>{ state}</h1>
              <button onClick={click}>Incrementer </button>
           </div>  
}

ReactDOM.render(
     
   <div> 
     <Compter/>
   </div>
  ,
  document.getElementById('root')
);

