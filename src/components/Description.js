import React, { useState } from "react";
import "./description.scss";
import IconMinus from "../images/icon-minus.svg";
import IconPlus from "../images/icon-plus.svg";
import IconCart from "../images/icon-cart.svg";
const Description = () => {
     //======================================================
     //======================================================
     const [prodQty, setProdQty] = useState(0);
     //======================================================
     //======================================================
     return (
          <div className="description-container">
               <div className="desktop-picture-wrap">desktop-picture-wrap</div>
               <div className="desc-wrap">
                    <div className="sub-title">Sneaker Company</div>
                    <div className="title">Fall Limited Edition Sneakers</div>
                    <div className="desc">
                         These low-profile sneakers are your perfect casual wear
                         companion. Featuring a durable rubber outer sole,
                         they’ll withstand everything the weather can offer.
                    </div>
                    <div className="price-wrap">
                         <div className="price">$125.00</div>
                         <div className="discount">50%</div>
                         <div className="prev-price">$250.00</div>
                    </div>
                    <div className="buttons-wrap">
                         <div className="qty-wrap">
                              <img src={IconMinus} alt="" />
                              <div className="qty">{prodQty}</div>
                              <img src={IconPlus} alt="" />
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
