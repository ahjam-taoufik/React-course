import { useState } from "react";
import validator from 'validator';

const SongForm = ({addSong}) => {
    const [title, settitle] = useState('')
        
  const handleFrom=(e)=>{
        e.preventDefault()

    
      if(!validator.isEmpty(title) ) 
      {
          addSong(title)
          settitle('')
      }else{
          alert('vous devez remplire le champ')
      }
  }


    return ( 
        <div>
          <form onSubmit={handleFrom}>
             <input type="text" value={title}  onChange={(e)=>{settitle(e.target.value)}}  />
              <input type="submit"  />
          </form>
        </div>
       
     );
}
 
export default SongForm;