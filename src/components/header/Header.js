import "./header.css";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Header = () => {
    return(
        <div className="header">
            <img className='header__logo'
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                 alt="amazon logo"
            />
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className='header__searchIcon'/>
            </div>
            <div className="header__nav">
                <div className="header__navIten">
                    <span className='navItem__firstLine'>Hello</span>
                    <span className='navItem__secondLine'>Sign In</span>
                </div>
                <div className="header__navIten">
                    <span className='navItem__firstLine'>Return</span>
                    <span className='navItem__secondLine'>& Orders</span>
                </div>
                <div className="header__navIten">
                    <span className='navItem__firstLine'>Your</span>
                    <span className='navItem__secondLine'>Prime</span>
                </div>
            </div>
            <div className="header__basket">
                <ShoppingBasketIcon />
                <span className='navItem__secondLine header__basketCount'>0</span>
            </div>
        </div>
    )
}

export default Header;