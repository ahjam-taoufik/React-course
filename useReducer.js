
import React, { useReducer } from 'react'

const initialState={
    count:0
}
const reducer=(state,action)=>{
     switch (action.type) {
         case 'increment':
             return {count:state.count+1};
         case 'decrement':
             return  {count:state.count-1};
         case 'init':
            return initialState;

    
         default:
             return state
     }

}

function CounterReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (

        <div>
            <p>{state.count}</p>
           <button onClick={()=>dispatch({type:'increment'})}>increment</button>
           <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
           <button onClick={()=>dispatch({type:'init'})}>initalisé</button>
        </div>
    )
}

export default CounterReducer
