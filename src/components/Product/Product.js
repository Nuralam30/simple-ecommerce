import React from 'react';
import './Product.css';

const Product = (props) => {
    return (
        <div>
            <h2>{props.product.name}</h2>
        </div>
    );
};

export default Product;