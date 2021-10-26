import React, { useState } from "react";
import "./description.scss";
import IconMinus from "../images/icon-minus.svg";
import IconPlus from "../images/icon-plus.svg";
import IconCart from "../images/icon-cart.svg";
import DesktopPicture from "./DesktopPicture";
const Description = () => {
     //======================================================
     //======================================================
     const [prodQty, setProdQty] = useState(0);
     //======================================================
     // console.log(IconCart);
     //======================================================
     return (
          <div className="description-container">
               <DesktopPicture />
               <div className="desc-wrap">
                    <div className="sub-title">Sneaker Company</div>
                    <div className="title">Fall Limited Edition Sneakers</div>
                    <div className="desc">
                         These low-profile sneakers are your perfect casual wear
                         companion. Featuring a durable rubber outer sole,
                         they’ll withstand everything the weather can offer.
                    </div>
                    <div className="price-wrap">
                         <div className="price">
                              $125.00 <span className="discount">50%</span>
                         </div>

                         <div className="prev-price">$250.00</div>
                    </div>
                    <div className="buttons-wrap">
                         <div className="qty-wrap">
                              <img
                                   src={IconMinus}
                                   alt=""
                                   onClick={() => {
                                        setProdQty((p) => (p > 0 ? p - 1 : 0));
                                   }}
                              />
                              <div className="qty">{prodQty}</div>
                              <img
                                   src={IconPlus}
                                   alt=""
                                   onClick={() => {
                                        setProdQty((p) => p + 1);
                                   }}
                              />
                         </div>
                         <div className="add-cart">
                              {/* <div className="cart-icon"></div> */}
                              <img src={IconCart} alt="" />
                              <div className="text">Add to cart</div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Description;
