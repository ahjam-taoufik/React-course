
import {useIncrement,useIncrement2} from './helper'

 function Compter(){
   const [state, click] = useIncrement(100,5)
    return <div>       
               <h1>{ state}</h1>
              <button onClick={click}>Incrementer </button>
           </div>  
}
export default Compter

