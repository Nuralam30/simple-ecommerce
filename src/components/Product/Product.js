import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    // console.log(props)
    return (
        <div className='product'>
            <div className='product-image'>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>by : {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button onClick={() => {
                    props.addProduct(props.product)
                }}
                    className='main-button'>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    add to cart
                </button>
            </div>

        </div>
    );
};

export default Product;