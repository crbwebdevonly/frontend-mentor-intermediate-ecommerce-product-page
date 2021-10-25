import React from "react";
import "./description.scss"
const Description = () => {
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
                         <div className="qty-wrap"></div>
                         <div className="add-cart">
                              <div className="cart-icon"></div>
                              <div className="text">Add to cart</div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Description;
