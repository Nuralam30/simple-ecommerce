import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({product, addProduct, showAddToCart}) => {
    // const {product, addProduct, showAddToCart} = props;
    const { img, name, seller, price, stock, key } = product;
    // console.log(props)
    return (
        <div className='product'>
            <div className='product-image'>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'><Link to={"/product/"+key}>{name}</Link></h4>
                <br />
                <p><small>by : {seller}</small></p>
                <p>price : ${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                
                { showAddToCart && <button onClick={() => {
                    addProduct(product)
                }}
                    className='main-button'>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    add to cart
                </button>}
            </div>

        </div>
    );
};

export default Product;