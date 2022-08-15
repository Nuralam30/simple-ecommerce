import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {

    // console.log(props.product)
    const { name, img, seller, price, quantity } = props.product;
    return (
        <div className='product'>
            <div className='product-image'>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>by : {seller}</small></p>
                <p>Price : ${price}</p>
                <br />
                <p>Quantity : {quantity}</p>
                <br />
                <button className='main-button'>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;