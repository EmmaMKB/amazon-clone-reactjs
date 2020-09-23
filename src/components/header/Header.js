import React from "react";

const Header = () => {
    return(
        <div className="header">
            <img className='header__logo'
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                 alt="amazon logo"
            />
            <div className="header__search">
                <input type="text" className="header__searchINput"/>
            </div>
            <div className="header__nav">
                <div className="header__navIten">
                    <span className='navItem__firstLine'>Hello</span>
                    <span className='navItem__firstLine'>Sign In</span>
                </div>
                <div className="header__navIten">
                    <span className='navItem__firstLine'>Return</span>
                    <span className='navItem__firstLine'>& Orders</span>
                </div>
                <div className="header__navIten">
                    <span className='navItem__firstLine'>Your</span>
                    <span className='navItem__firstLine'>Prime</span>
                </div>
            </div>
        </div>
    )
}

export default Header;