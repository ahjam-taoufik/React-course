import React, { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import SongForm from './SongForm';

const SongList = () => {
    const [Songs, setSongs] = useState([
         {title:'hotel california',id:1},
         {title:'father and son',id:2},
         {title:'I am sailing',id:3},

    ])

  const addSong=(title)=>{
      setSongs([...Songs, {title:title,id:uuidv1()}])
  }  
       return ( 
           <div className='song-list'>
               <ul>
                   {Songs.map((song)=>(
                       <li key={song.id}>{song.title}</li>
                         ) 
                     )}
               </ul>

              <SongForm addSong={addSong}/>
           </div>
        );
}
 
export default SongList;