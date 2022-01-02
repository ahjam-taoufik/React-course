import { useState } from 'react';
export function useIncrement(initial, step){
      const [state, setstate] = useState(initial)
      function incr(){
         setstate(e=>e+step)
      }
    return [state , incr]  
}
export function useIncrement2(initial, step){
      const [state, setstate] = useState(initial)
      function incr(){
         setstate(e=>e-step)
      }
    return [state , incr]  
}



    
