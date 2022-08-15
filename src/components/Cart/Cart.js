import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart)
    // const total = cart.reduce((total, prd) => total + prd.price * prd.quantity, 0);
    let total = 0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price + product.quantity;
    }

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
            <div><p>Product price</p> <p>: ${valueFixed(total)}</p></div>
            <div><p>Shipping cost </p> <p>: ${shipping}</p></div>
            <div><p>Vat </p> <p>: ${valueFixed(vat)}</p></div>
            <div className='total-price'><p> Total Price</p> <p>: ${valueFixed(grandTotal)}</p></div>
            <br />
            {
                props.children
            }
        </div>
    );
};

export default Cart;