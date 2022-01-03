
import React from 'react'

const colorRondom=()=>'#'+(Math.random()*0xFFFFFF<<0).toString(16);

function Button(props){
    return (
                <div>
                  <button onClick={props.onClick} 
                    style={{background:colorRondom()}}>
                     click me
                  </button>        
                </div> 
    )
}
export default React.memo(Button)
