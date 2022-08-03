import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price , 0)

    return (
        <div className='cart-info'>
            <h3>Order Summary</h3>
                <br />
            <h5>Items ordered : {cart.length}</h5>
            <p> Total Price : {total}</p>
        </div>
    );
};

export default Cart;