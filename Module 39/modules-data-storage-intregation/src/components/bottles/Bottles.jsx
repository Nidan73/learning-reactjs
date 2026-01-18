import React, { use } from 'react';
import Bottle from '../bottle/bottle';
const Bottles = ({fetchBottles}) => {
    const bottle = use(fetchBottles);
    // console.log(bottle);
    return (
        
        <div >
              <h3> Total Bottles : {bottle.length}</h3>
           <div className='bottle-container'>
         {  bottle.map( bottle => <Bottle key={bottle.id} bottle = {bottle}></Bottle> )
            }
           </div>
            
        </div>
    );
};

export default Bottles;