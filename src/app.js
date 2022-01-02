
import { useEffect } from 'react'
import {useIncrement,useIncrement2} from './helper'

 function Compter(){

   const [state, click] = useIncrement(0,1)

        useEffect(() => {
            setInterval(()=>{
                click()
            },1000)
           
        },[])

         useEffect(() => {
             document.title="compteur "+state
         },[state])

    return <div>       
               <h1>{ state}</h1>
              <button onClick={click}>Incrementer </button>
           </div>  

}
export default Compter

