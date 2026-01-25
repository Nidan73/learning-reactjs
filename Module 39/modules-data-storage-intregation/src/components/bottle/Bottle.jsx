import React from 'react';

const Bottle = ({bottle ,handleCart}) => {
    const { img, name, price, stock } = bottle;
    // console.log(bottle)
     return (
        <div className='bottle'>
              <img src={img} alt="" />
              <p>Name : {name}</p>
              <p>price : {price}</p><p>Remaining : {stock}</p>
              <button onClick={()=> handleCart(bottle)}>Buy Now</button>
            
        </div>
    );
};

export default Bottle;