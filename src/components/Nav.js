import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Cart from "./Cart";
import cartIcon from "../images/icon-cart.svg";
import menuIcon from "../images/icon-menu.svg";
import logoImg from "../images/logo.svg";
import avatarImg from "../images/image-avatar.png";

const Nav = () => {
     //======================================================
     const cart = useSelector((state) => state.cart);
     const dispatch = useDispatch();
     //======================================================

     //======================================================
     const [showCart, setShowCart] = useState(false);
     //======================================================
     //======================================================
     console.log(cart);
     //======================================================
     //======================================================
     //======================================================
     return (
          <div className="nav-container">
               <div className="left">
                    <img src={menuIcon} alt="" />
                    <img src={logoImg} alt="" />
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
