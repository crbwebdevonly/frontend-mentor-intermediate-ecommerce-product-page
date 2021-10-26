import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
     addToCart,
     toggleShowCart,
     toggleShowMobileMenu,
} from "../redux/cartSlice";
import Cart from "./Cart";
import cartIcon from "../images/icon-cart.svg";
import menuIcon from "../images/icon-menu.svg";
import closeIcon from "../images/icon-close.svg";
import logoImg from "../images/logo.svg";
import avatarImg from "../images/image-avatar.png";

const Nav = () => {
     //======================================================
     const { cartItems, showCart, showMobileMenu } = useSelector(
          (state) => state.cart
     );
     const dispatch = useDispatch();
     // console.log(cart);
     //======================================================
     const [screenWidth, setScreenWidth] = useState(1000);
     // const { innerWidth } = window;

     useEffect(() => {
          // effect
          const handlResize = () => {
               setScreenWidth(window.innerWidth);
          };
          window.addEventListener("resize", handlResize);

          return () => {
               // cleanup
               window.removeEventListener("resize", handlResize);
          };
     }, []);
     //======================================================

     //======================================================
     // const [showCart, setShowCart] = useState(false);
     // const [showMenu, setShowMenu] = useState(false);
     // const [showMobileMenuList, setShowMobileMenuList] = useState(false);
     //======================================================
     //======================================================
     // console.log(screenWidth);
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
                              // setShowMobileMenuList(true);
                              dispatch(toggleShowMobileMenu());
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
                    {showMobileMenu && screenWidth < 600 && (
                         <>
                              <ul className="mobile-menu-list">
                                   <li
                                        className="close"
                                        onClick={() => {
                                             dispatch(toggleShowMobileMenu());
                                        }}
                                   >
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
                              // dispatch(addToCart("cart"));
                              dispatch(toggleShowCart());
                         }}
                    >
                         <div className="item-qty">5</div>
                         <img src={cartIcon} alt="" />
                         {showCart && <Cart />}
                    </div>
                    <img src={avatarImg} alt="" className="avatar" />
               </div>
          </div>
     );
};

export default Nav;
