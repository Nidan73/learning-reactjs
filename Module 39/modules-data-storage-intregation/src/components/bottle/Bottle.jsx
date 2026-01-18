import React from 'react';

const Bottle = ({bottle}) => {
    console.log(bottle)
     return (
        <div className='bottle'>
            {
             <p>Name : {bottle.name}</p>
            }
        </div>
    );
};

export default Bottle;