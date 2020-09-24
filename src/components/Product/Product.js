import React from "react";
import "./product.css";

const Product = ({ title, price, image, rating }) => {
    return(
        <div className="product__card">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) =>
                        <span key={i} role='img' aria-label="star">⭐</span>
                    )}

                </div>
            </div>
            <img src={image} alt=""/>

            <button>Add to Basket</button>
        </div>
    )
}

export default Product;