import React from 'react';
import './Review.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from './../../fakeData/index';
import ReviewItem from './../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import thankYou from '../../images/giphy.gif';
import { useNavigate } from 'react-router-dom';

const Review = () => {

    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart)

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts)
    }, [])

    const navigate = useNavigate();
    const handleOrderCheckout = () =>{
        navigate('/shipment');
    }

    const removeItem = (productKey) => {
        console.log(productKey + " item removed")
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey)
    }

    let orderSuccess;
    if(orderPlaced){
        orderSuccess = <img src={thankYou} alt="" />
    }

    return (
        <div className="order-review">
            <div className='product-container'>
                {
                    cart.map(pd => <ReviewItem
                        key={pd.key}
                        product={pd}
                        removeItem={removeItem}
                    >
                    </ReviewItem>)
                }
                {
                    orderSuccess
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handleOrderCheckout} className='main-button'>Order Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;