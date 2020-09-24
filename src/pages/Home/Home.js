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
                    <Product
                        id={1}
                        title="The lean StartUp"
                        price={99.9}
                        image={require("../../assets/images/p1.jpg")}
                        rating={4}
                    />
                    <Product
                        id={2}
                        title="Cool girl nike shoes"
                        price={39.9}
                        image={require("../../assets/images/p2.jpg")}
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id={3}
                        title="Sewing Bemina Sewing machine"
                        price={129.9}
                        image={require("../../assets/images/p3.jpg")}
                        rating={4}
                    />
                    <Product
                        id={4}
                        title="SKMei watch"
                        price={9.99}
                        image={require("../../assets/images/p4.jpg")}
                        rating={2}
                    />
                    <Product
                        id={5}
                        title="Louis Vuitton shoes"
                        price={129.9}
                        image={require("../../assets/images/p5.jpg")}
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id={6}
                        title="Eloquent Javascript"
                        price={19.9}
                        image={require("../../assets/images/p6.png")}
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;