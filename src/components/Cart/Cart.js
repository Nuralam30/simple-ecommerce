import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price, 0);
    var shipping = 0;

    if (total > 50) {
        shipping = 0;
    }
    else if (total > 20) {
        shipping = 5.46;
    }
    else if (total > 0) {
        shipping = 12.45;
    }


    let vat = (total / 50);

    const valueFixed = num =>{
        const precision = num.toFixed(2)
        return Number(precision)
    }

    const grandTotal = total + shipping + vat;

    return (
        <div className='cart-info'>
            <h3>Order Summary</h3>
            <br />
            <h5>Items ordered : {cart.length}</h5>
            <br />
            <p>Product price : ${valueFixed(total)}</p>
            <p>Shipping cost : ${shipping}</p>
            <p>Vat : {valueFixed(vat)}</p>
            <p> Total Price : ${valueFixed(grandTotal)}</p>
        </div>
    );
};

export default Cart;