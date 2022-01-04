
import React, { useReducer } from 'react'

const initialState={
    count:0
}
const reducer=(state,action)=>{
     switch (action.type) {
         case 'increment':
             return {count:state.count + action.value};
         case 'decrement':
             return  {count:state.count - action.value};
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
           <button onClick={()=>dispatch({type:'increment',value:1})}>increment1</button>
           <button onClick={()=>dispatch({type:'decrement',value:1})}>decrement1</button>

           <button onClick={()=>dispatch({type:'increment',value:4})}>increment4</button>
           <button onClick={()=>dispatch({type:'decrement',value:4})}>decrement4</button>



           <button onClick={()=>dispatch({type:'init'})}>initalisé</button>
        </div>
    )
}

export default CounterReducer
