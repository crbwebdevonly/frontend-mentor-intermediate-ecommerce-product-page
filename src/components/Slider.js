import React, { useEffect, useState } from "react";

import Image1 from "../images/image-product-1.jpg";
import Image2 from "../images/image-product-2.jpg";
import Image3 from "../images/image-product-3.jpg";
import Image4 from "../images/image-product-4.jpg";
import ThumbImage1 from "../images/image-product-1-thumbnail.jpg";
import ThumbImage2 from "../images/image-product-2-thumbnail.jpg";
import ThumbImage3 from "../images/image-product-3-thumbnail.jpg";
import ThumbImage4 from "../images/image-product-4-thumbnail.jpg";
import IconLeft from "../images/icon-previous.svg";
import IconRight from "../images/icon-next.svg";

import styled from "styled-components";

//======================================================
const StyledDiv1 = styled.div`
     width: 400%;

     height: 290px;

     display: flex;
     transition: all 0.6s ease-in-out;
     transform: ${(props) => props.move};
`;
//======================================================
//======================================================
//======================================================
//======================================================
//======================================================
//======================================================

const Slider = () => {
     //======================================================
     const [count, setCount] = useState(1);
     //======================================================
     const [shiftX, setShiftX] = useState(`translateX(0vw)`);
     //======================================================
     //======================================================
     useEffect(() => {
          // effect
          setShiftX(`translateX(-${100 * count}vw)`);
          return () => {
               // cleanup
          };
     }, [count]);
     //======================================================
     const changeCount = (direction) => {
          if (direction === "plus") {
               setCount((p) => (p < 2 ? p + 1 : 3));
          } else if (direction === "minus") {
               setCount((p) => (p > 0 ? p - 1 : 0));
          } else setCount(0);
     };
     //======================================================
     //======================================================
     // console.log(count, shiftX);
     //======================================================
     return (
          <>
               <div className="slider-container">
                    {/* <div className="slide-track"> */}
                    <StyledDiv1 move={shiftX}>
                         <div className="item item1">
                              <img src={Image1} alt="" />
                         </div>
                         <div className="item item2">
                              <img src={Image2} alt="" />
                         </div>
                         <div className="item item3">
                              <img src={Image3} alt="" />
                         </div>
                         <div className="item item4">
                              <img src={Image4} alt="" />
                         </div>
                    </StyledDiv1>
                    {/* </div> */}
                    <div
                         className="left-arrow"
                         onClick={() => {
                              changeCount("plus");
                         }}
                    >
                         <img src={IconLeft} alt="" />
                         {/* <img src={ThumbImage1} alt="" /> */}
                    </div>
                    <div
                         className="right-arrow"
                         onClick={() => {
                              changeCount("minus");
                         }}
                    >
                         <img src={IconRight} alt="" />
                    </div>
               </div>
          </>
     );
};

export default Slider;
