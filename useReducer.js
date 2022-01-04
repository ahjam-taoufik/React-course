
import React, { useReducer } from 'react'

const initialStatet=0
const reducer=(state,action)=>{
     switch (action) {
         case 'increment':
             return state +1;
         case 'decrement':
             return state -1;
         case 'init':
            return initialStatet;

    
         default:
             return state
     }

}

function CounterReducer() {
    const [state, dispatch] = useReducer(reducer, initialStatet)
    return (

        <div>
            <p>{state}</p>
           <button onClick={()=>dispatch('increment')}>increment</button>
           <button onClick={()=>dispatch('decrement')}>decrement</button>
           <button onClick={()=>dispatch('init')}>initalisé</button>
        </div>
    )
}

export default CounterReducer
