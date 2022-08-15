import React from 'react';
import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import fakeData from './../../fakeData/index';
import Product from './../Product/Product';

const ProductDetail = () => {

    const { productKey } = useParams();
    const product = fakeData.find(pd => pd.key === productKey);

    return (
        <div className='product-details'>
            <Product product={product} showAddToCart={false}></Product>
        </div>
    );
};

export default ProductDetail;