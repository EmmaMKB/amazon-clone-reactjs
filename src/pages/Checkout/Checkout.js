import React from "react";
import "./checkout.css";
import SubTotal from "../../components/SubTotal/SubTotal";
import {useStateValue} from "../../context/StateProvider";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";

const Checkout = () => {
    const [{basket}, dispatch] = useStateValue();
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

                    {
                        basket.map((item, index) => (
                            <CheckoutProduct
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                                title={item.title}
                                id={item.id}
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="checkout__right">
                <SubTotal />
            </div>
        </div>
    )
}

export default Checkout;