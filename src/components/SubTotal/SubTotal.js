import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";

const SubTotal = () => {
    return(
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal (0 items): <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={20.2}
                displayType="text"
                thousandSeparator={true}
                prefix="$"
            />
            <button>Proceed to checkout</button>
        </div>
    )
}
export default SubTotal;