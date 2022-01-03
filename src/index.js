
import {render} from 'react-dom';
import React, { useEffect, useState } from 'react'

function useLoadData(url){
  const [state, setstate] = useState({items:[],loading:true})

  useEffect(() => {
    (async function () {
         const res=await fetch(url)
         const data=await res.json()
         if (data) {  
             setstate({
                 items:data,
                 loading:false
             })
         }    
    })()        
}, [])
return [state.items,state.loading]
}


function App(){
            const url='https://jsonplaceholder.typicode.com/todos?_limit=200'
            const [todos,isloading]=useLoadData(url)

    if (isloading) {
      return <h3>Loading .........</h3>
    }     
    return <div>
                <h2>List Todos</h2>
              <ul>
                {todos.map(t=><li key={t.id}>{t.title}</li>)} 
              </ul>
           </div>
}



render(<App/>,document.getElementById('root'));
