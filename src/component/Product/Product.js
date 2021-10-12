import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
const Product = (props) => {
    // console.log(props);
    const {name , img , price ,stock ,seller , star} = props.product;
    // const cartIcon = <FontAwesomeIcon icon={faShoppingBag} />
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="Product-Show">
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price:{price}</p>
                <p><small>Only {stock} left in stock.</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                ></Rating>
                <br/>

                <button
                onClick={() => props.handleAddToCart(props.product)}
                className="btn-regular"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
            
            
        </div>
    );
};

export default Product;