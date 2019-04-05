import React from 'react';
import Carrousel from './Carrousel';
import Countdown from './Countdown';

function Featured() {
    return (
        <div style={{position: 'relative'}}>

           <Carrousel />

           <div className="game_name">
               <div className="wrapper">
                  Game Event
               </div>
           </div>

           <Countdown />
            
        </div>
    )
}

export default Featured;
