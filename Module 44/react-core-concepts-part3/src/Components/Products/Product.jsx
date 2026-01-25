import React, { useState } from 'react';

const Product = ({handleProductAdd}) => {
   const [error , setError] = useState('')
   const handleSubmit = e => 
    {
        e.preventDefault();
        const name = e.target.Product.value;
        const price = e.target.Price.value; 
        const Quantity = e.target.Quantity.value; 
        
        {
            if(parseInt(price,10) === 0 || parseInt(price,10) <= -1 || parseInt(Quantity,10) === 0)
            {
                setError('Please Provide Valid Price/Quantity')
                return;
            }
        }
        const Productitems = 
            {
                name,
                price,
                Quantity,
            }

        handleProductAdd(Productitems)
   }
    return (
        <div>
            <form onSubmit={handleSubmit}>
               <input required type="text" name="Product" placeholder='Type Product Name' /><br/>
               <input required type="text" name="Price" placeholder='Type Price' /><br/>
               <input required type="text" name="Quantity" placeholder='Type Quantity' /><br/>
               <input type="submit" value="submit" />
            </form>
            <p style={{color :'red'}}><small>{error}</small></p>
        </div>
    );
};

export default Product;