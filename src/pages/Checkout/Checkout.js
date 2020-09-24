import React from "react";
import "./checkout.css";
import SubTotal from "../../components/SubTotal/SubTotal";

const Checkout = () => {
    return(
        <div className="checkout__page">
            <div className="checkout__left">
                <img
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                    className="checkout__ad"
                />
                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                </div>
            </div>
            <div className="checkout__right">
                <SubTotal />
            </div>
        </div>
    )
}

export default Checkout;