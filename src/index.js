
import {render} from 'react-dom';
import React, { useEffect, useState } from 'react'

function useIncrement(init=0,step=1){
     const [state, setstate] = useState(init)
       function setIncrement(){
          setstate(state=>state+step)
}return [state,setIncrement]
}

function useVisible(bool=true){
        const [isVisible, setisVisible] = useState(bool)
        function toggle(){
          setisVisible(isVisible=>!isVisible)
        }
  return[isVisible, toggle]
}

function useAutoIcrement(initialState=0, step=1, speed=1000){
           const [state, setstate] = useIncrement(initialState,step)
           useEffect(() => {
            const time=setInterval(() => {
              setstate()
              },speed)
              return () => {
                 clearInterval(time)
              }
        }, [])
           return state
}

function Compteur() {
            const autoIncrement = useAutoIcrement()
       
        const [count, setincrement] = useIncrement()
       return <>
             <button onClick={setincrement}>increment {count}</button>
              <h1>{autoIncrement}</h1>

       </>
}

function App(){
            const [isVisible, setstate] = useVisible(true)        
    return <div>
              <input type="checkbox" onChange={setstate} checked={isVisible} />
              {isVisible && <Compteur/>}
           </div>
}


render(<App/>,document.getElementById('root'));
