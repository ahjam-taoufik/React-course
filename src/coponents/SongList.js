import React, { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';

const SongList = () => {
    const [Songs, setSongs] = useState([
         {title:'hotel california',id:1},
         {title:'father and son',id:2},
         {title:'I am sailing',id:3},

    ])

  const addSong=()=>{
      setSongs([...Songs, {title:'new Song',id:uuidv1()}])
  }  
       return ( 
           <div className='song-list'>
               <ul>
                   {Songs.map((song)=>(
                       <li key={song.id}>{song.title}</li>
                         ) 
                     )}
               </ul>

               <button onClick={addSong}>add Song</button>
           </div>
        );
}
 
export default SongList;