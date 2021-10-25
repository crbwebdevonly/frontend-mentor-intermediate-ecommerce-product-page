import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Cart from "./Cart";
import cartIcon from "../images/icon-cart.svg";
import menuIcon from "../images/icon-menu.svg";
import closeIcon from "../images/icon-close.svg";
import logoImg from "../images/logo.svg";
import avatarImg from "../images/image-avatar.png";

const Nav = () => {
     //======================================================
     const cart = useSelector((state) => state.cart);
     const dispatch = useDispatch();
     //======================================================

     //======================================================
     const [showCart, setShowCart] = useState(false);
     const [showMenu, setShowMenu] = useState(false);
     const [showMobileMenuList, setShowMobileMenuList] = useState(true);
     //======================================================
     //======================================================
     console.log(cart);
     //======================================================
     //======================================================
     //======================================================
     return (
          <div className="nav-container">
               <div className="left">
                    <img
                         src={menuIcon}
                         alt=""
                         className="menu-bars"
                         onClick={() => {
                              setShowMenu(true);
                         }}
                    />
                    <img src={logoImg} alt="" />
                    <ul className="desktop-menu-list">
                         <li>Collections</li>
                         <li>Men</li>
                         <li>Women</li>
                         <li>About</li>
                         <li>Contact</li>
                    </ul>
                    {showMobileMenuList && (
                         <>
                              <ul className="mobile-menu-list">
                                   <li className="close">
                                        <img src={closeIcon} alt="" />
                                   </li>
                                   <li>Collections</li>
                                   <li>Men</li>
                                   <li>Women</li>
                                   <li>About</li>
                                   <li>Contact</li>
                              </ul>
                              <div className="model-overlay"></div>
                         </>
                    )}
               </div>
               <div className="right">
                    <div
                         className="cart-icon-wrap"
                         onClick={() => {
                              dispatch(addToCart("cart"));
                              setShowCart(!showCart);
                         }}
                    >
                         <img src={cartIcon} alt="" />
                         {showCart && <Cart />}
                    </div>
                    <img src={avatarImg} alt="" />
               </div>
          </div>
     );
};

export default Nav;
