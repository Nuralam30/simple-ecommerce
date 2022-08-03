import React from 'react';
import { useState } from 'react';
import fakeData from './../../fakeData';
import './Shop.css';
import Product from './../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);

    const handleAddProduct = (product) => {
        console.log(product)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(pd => <Product
                        addProduct={handleAddProduct}
                        product={pd}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>cart part</h1>
            </div>
        </div>
    );
};

export default Shop;