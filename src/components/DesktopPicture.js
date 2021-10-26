import React, { useState } from "react";
import "./desktoppicture.scss";
import Image1 from "../images/image-product-1.jpg";
import Image2 from "../images/image-product-2.jpg";
import Image3 from "../images/image-product-3.jpg";
import Image4 from "../images/image-product-4.jpg";
import Image1thumbnail from "../images/image-product-1-thumbnail.jpg";
import Image2thumbnail from "../images/image-product-2-thumbnail.jpg";
import Image3thumbnail from "../images/image-product-3-thumbnail.jpg";
import Image4thumbnail from "../images/image-product-4-thumbnail.jpg";

const DesktopPicture = () => {
     //======================================================
     const [image, setImage] = useState(Image1);
     //======================================================
     const [count, setCount] = useState(1);
     //======================================================
     //======================================================
     //======================================================
     return (
          <div className="desktop-picture-wrap">
               <div className="main-picture">
                    <img src={image} alt="" />
               </div>
               <div className="thumbs-wrap">
                    <div
                         className={count === 1 ? "item selected" : "item"}
                         onClick={() => {
                              setImage(Image1);
                              setCount(1);
                         }}
                    >
                         <img src={Image1thumbnail} alt="" />
                    </div>
                    <div
                         className={count === 2 ? "item selected" : "item"}
                         onClick={() => {
                              setImage(Image2);
                              setCount(2);
                         }}
                    >
                         {" "}
                         <img src={Image2thumbnail} alt="" />
                    </div>
                    <div
                         className={count === 3 ? "item selected" : "item"}
                         onClick={() => {
                              setImage(Image3);
                              setCount(3);
                         }}
                    >
                         <img src={Image3thumbnail} alt="" />
                    </div>
                    <div
                         className={count === 4 ? "item selected" : "item"}
                         onClick={() => {
                              setImage(Image4);
                              setCount(4);
                         }}
                    >
                         <img src={Image4thumbnail} alt="" />
                    </div>
               </div>
          </div>
     );
};

export default DesktopPicture;
