import React from "react";
import "./product.css";

const Product = () => {
    return(
        <div className="product__card">
            <div className="product__info">
                <p>The Lean startup Home Context</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>99.9</strong>
                </p>
                <div className="product__rating">
                    <span role='img' aria-label="star">⭐</span>
                </div>
            </div>
            <img src={require("../../assets/images/p1.jpg")} alt=""/>

            <button>Add to Basket</button>
        </div>
    )
}

export default Product;