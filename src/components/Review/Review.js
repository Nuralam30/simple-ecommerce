import React from 'react';
import './Review.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from './../../fakeData/index';
import ReviewItem from './../ReviewItem/ReviewItem';

const Review = () => {

    const [cart , setCart] = useState([]);

    useEffect( () =>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart)

        const cartProducts = productKeys.map( key => {
            const product = fakeData.find( pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts)
    }, [])

    const removeItem  = (productKey) =>{
        console.log(productKey+ " item removed")
        const newCart = cart.filter( pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey)
    }

    return (
        <div className='order-review'>
            <h1> Order review : {cart.length}</h1>
            {
                cart.map( pd => <ReviewItem 
                    key={pd.key} 
                    product={pd}
                    removeItem={removeItem}
                    >
                    </ReviewItem>)
            }
        </div>
    );
};

export default Review;