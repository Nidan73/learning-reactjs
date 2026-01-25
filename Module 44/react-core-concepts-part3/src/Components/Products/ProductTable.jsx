import React from 'react';

const ProductTable = ({product}) => {
    console.log(product)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>
                            No.
                        </td>
                        <td>
                            Name
                        </td>
                        <td>
                            Price
                        </td>
                        <td>
                           Quantity
                        </td>
                    </tr>
                </thead>
                <tbody>
                  {
                    product.map((product,index) => 
                        <tr>
                            <td>{index+1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.Quantity}</td>
                        </tr>
                    )
                  }
               
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;