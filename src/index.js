
import {render} from 'react-dom';
import Compter from './app'



setTimeout(()=>{
  render(   
    <div> 
      salam
    </div>
   ,
   document.getElementById('root')
 );
 
},5000)


render(   
   <div> 
     <Compter/>
   </div>
  ,
  document.getElementById('root')
);
