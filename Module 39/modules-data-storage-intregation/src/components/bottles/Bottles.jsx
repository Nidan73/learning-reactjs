import React, { use, useState } from 'react';
import Bottle from '../bottle/bottle';
const Bottles = ({fetchBottles}) => {
    const bottle = use(fetchBottles);
    // console.log(bottle);
     
    const [cart , setCart] = useState([])
     
    const handleCart = (bottle) => {
        console.log("clicked succesfully",bottle)
        const newCart = [...cart ,bottle]
        setCart(newCart);
    }

    return (
        
        <div >
              <h3> Total Bottles : {bottle.length}</h3>
               <h3>Added to Cart : {cart.length}</h3>
           <div className='bottle-container'>
         {  bottle.map( bottle => <Bottle key={bottle.id} 
         
         handleCart = {handleCart}
         bottle = {bottle}></Bottle> )
            }
           </div>
            
        </div>
    );
};

export default Bottles;