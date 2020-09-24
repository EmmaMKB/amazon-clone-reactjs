import React from "react";
import "./home.css"
import Product from "../../components/Product/Product";

const Home = () => {
    return(
        <div className="home">
            <div className="home__container">
                <img
                    src={require("../../assets/images/amazon-banner.jpg")}
                    alt=""
                    className="home__image"
                />
                <div className="home__row">
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Home;