import React from "react";
import "./home.css"

const Home = () => {
    return(
        <div className="home">
            <div className="home__container">
                <img
                    src={require("../../assets/images/amazon-banner.jpg")}
                    alt=""
                    className="home__image"
                />
            </div>
        </div>
    )
}

export default Home;