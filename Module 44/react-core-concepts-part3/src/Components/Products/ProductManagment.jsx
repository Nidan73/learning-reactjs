import React, { useState } from 'react';
import Product from './Product';
import ProductTable from './ProductTable';

const ProductManagment = () => {
    const [product,setProduct] = useState([])

    const handleProductAdd = (items) =>
    {
         const newProduct = [...product,items];
         setProduct(newProduct);
    }
    return (
        <div>
            <Product handleProductAdd = {handleProductAdd}></Product>
            <ProductTable product = {product}></ProductTable>
        </div>
    );
};

export default ProductManagment;