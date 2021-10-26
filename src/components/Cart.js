import React from "react";
import "./cart.scss";
import ThumbImage from "../images/image-product-1-thumbnail.jpg";
import DeleteIcon from "../images/icon-delete.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, toggleShowCart } from "../redux/cartSlice";

const Cart = () => {
     //======================================================
     const cart = useSelector((state) => state.cart);
     const dispatch = useDispatch();

     //======================================================
     // const [cartItems, setCartItems]
     const { cartItems } = cart;
     //======================================================
     console.log(cart);
     //======================================================
     return (
          <div className="cart-container">
               <div className="title">Cart</div>
               <hr />
               {cartItems.length === 0 ? (
                    <h4 className="empty">Your cart is empty.</h4>
               ) : (
                    <>
                         {cartItems.map((e, i) => (
                              <div className="item-wrap" key={i}>
                                   <div className="thumb-wrap">
                                        <img src={ThumbImage} alt="" />
                                   </div>
                                   <div className="info-wrap">
                                        <div className="name">
                                             Fall Limited Edition Sneakers
                                        </div>
                                        <div className="qty-price">
                                             ${e.price} * {e.prodQty}{" "}
                                             <span>
                                                  $ {e.price * e.prodQty}
                                             </span>
                                        </div>
                                   </div>
                                   <div
                                        className="delete-icon"
                                        onClick={() => {
                                             dispatch(removeFromCart(i));
                                             dispatch(toggleShowCart());
                                        }}
                                   >
                                        <img src={DeleteIcon} alt="" />
                                   </div>
                              </div>
                         ))}

                         <div className="checkout">Checkout</div>
                    </>
               )}
          </div>
     );
};

export default Cart;
