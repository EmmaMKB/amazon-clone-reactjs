import "./header.css";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";

const Header = () => {
    const [{basket}, dispatch] = useStateValue();

    return(
        <div className="header">
            <Link to='/'>
                <img className='header__logo'
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                 alt="amazon logo"
                />
            </Link>
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
            <Link to='/checkout'>
                <div className="header__basket">
                    <ShoppingBasketIcon />
                    <span className='navItem__secondLine header__basketCount'>{basket.length}</span>
                </div>
            </Link>
        </div>
    )
}

export default Header;