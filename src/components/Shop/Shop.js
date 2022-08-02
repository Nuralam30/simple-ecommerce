import React from 'react';
import { useState } from 'react';
import fakeData from './../../fakeData';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10)
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <li>{product.name}</li>)
                }
            </div>
            <div className="cart-container">
                <h1>cart part</h1>
            </div>
        </div>
    );
};

export default Shop;