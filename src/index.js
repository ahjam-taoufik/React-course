import {render} from 'react-dom';
import React, { useEffect, useRef, useState }  from 'react'

function App(){
  const [FName, setFName] = useState('');
  const [LName, setLName] = useState('');

  const  refFName = useRef()
   const refLName = useRef()
   const EnterKey = useRef()
   function run(){
     console.log(FName , LName);
   }

   useEffect(() => {
     refFName.current.focus()
    })
    
    function FirstkKey(e){
      if(e.key=='Enter'){
        refLName.current.focus()   
       }
    }

    function LastKey(e){
      if(e.key=='Enter'){
        EnterKey.current.focus()   
       }
    }

  return <div>
            <input onKeyDown={FirstkKey} ref={refFName} value={FName} onChange={(e)=>setFName(e.target.value)} type='text' placeholder='your Fname'    />
            <input onKeyDown={LastKey}  ref={refLName} value={LName} onChange={(e)=>setLName(e.target.value)} type='text' placeholder='your Lname'    />
            <button ref={EnterKey} onClick={run}>Click Me</button> 
        </div>
}


render(<App/>,document.getElementById('root'));
