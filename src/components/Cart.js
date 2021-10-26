import React from "react";
import "./cart.scss";
import ThumbImage from "../images/image-product-1-thumbnail.jpg";
import DeleteIcon from "../images/icon-delete.svg";

const Cart = () => {
     //======================================================
     //======================================================
     // const [cartItems, setCartItems]
     const cartItems = [];
     //======================================================
     //======================================================
     return (
          <div className="cart-container">
               <div className="title">Cart</div>
               <hr />
               {!cartItems.length === 0 ? (
                    <h4 className="empty">Your cart is empty.</h4>
               ) : (
                    <>
                         <div className="item-wrap">
                              <div className="thumb-wrap">
                                   <img src={ThumbImage} alt="" />
                              </div>
                              <div className="info-wrap">
                                   <div className="name">
                                        Fall Limited Edition Sneakers
                                   </div>
                                   <div className="qty-price">
                                        $125 * 3 <span>$ 375</span>
                                   </div>
                              </div>
                              <div className="delete-icon">
                                   <img src={DeleteIcon} alt="" />
                              </div>
                         </div>
                         <div className="item-wrap">
                              <div className="thumb-wrap">
                                   <img src={ThumbImage} alt="" />
                              </div>
                              <div className="info-wrap">
                                   <div className="name">
                                        Fall Limited Edition Sneakers
                                   </div>
                                   <div className="qty-price">
                                        $125 * 3 <span>$ 375</span>
                                   </div>
                              </div>
                              <div className="delete-icon">
                                   <img src={DeleteIcon} alt="" />
                              </div>
                         </div>
                         <div className="item-wrap">
                              <div className="thumb-wrap">
                                   <img src={ThumbImage} alt="" />
                              </div>
                              <div className="info-wrap">
                                   <div className="name">
                                        Fall Limited Edition Sneakers
                                   </div>
                                   <div className="qty-price">
                                        $125 * 3 <span>$ 375</span>
                                   </div>
                              </div>
                              <div className="delete-icon">
                                   <img src={DeleteIcon} alt="" />
                              </div>
                         </div>

                         <div className="checkout">Checkout</div>
                    </>
               )}
          </div>
     );
};

export default Cart;
