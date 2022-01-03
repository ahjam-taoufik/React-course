
import {render} from 'react-dom';
import React, { useEffect, useState } from 'react'


function App(){
         const [todos, setTodos] = useState([])
         const [isLoading, setisLoading] = useState(true)
          useEffect(() => {
               (async function () {
                    const res=await fetch('https://jsonplaceholder.typicode.com/todos?_limit=200')
                    const data=await res.json()
                    if (data) {  
                      setTodos(data)
                    }
                    setisLoading(false)
               })()        
          }, [])

    if (isLoading.ok) {
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
