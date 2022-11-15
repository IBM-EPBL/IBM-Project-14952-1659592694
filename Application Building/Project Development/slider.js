import React, { useState, useEffect } from "react";
  import image3 from '../images/image3.jpg';
  import download from '../images/download.jpg' 
  import image12 from '../images/image12.jpg' 

import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
const HalfSlider = () => {
  const [image, setImage] = useState([{image:download},{image:image3},{image:image12}]);
  const [x, setX] = useState(0);
 

  useEffect(() => {
    let timer = setTimeout(sliderfunction, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, [x, image]);
  const sliderfunction = () => {
    if (x < image.length - 1) {
      setX(x + 1);
    }
    if (x >= image.length - 1) {
      setX(0);
    }
  };
  const handlerRight = () => {
    if (x < image.length - 1) {
      setX(x + 1);
    }
    if (x >= image.length - 1) {
      setX(0);
    }
  };
  const handlerLeft = () => {

    if (x <= 0) {
      setX(image.length - 1);
    }
    if (x <= image.length - 1 && x > 0) {
      setX(x - 1);
    }

  };


  return (
    <div className="nithiesh ">
      {image.length ? (
        <div style={{ position: "relative" }}>
          <div>
            <div className="imagesss">
              {" "}
              {image.length > 0 ? (
                <img
                  src={image[x].image}
                  className="slider-img"
                  alt="bbj"
                />
              ) : null}
            </div>

            <p onClick={handlerLeft} className="floating-btn btn-left">
              <MdArrowBackIos />
            </p>
            <p onClick={handlerRight} className="floating-btn btn-right">
              <MdArrowForwardIos />
            </p>
          </div>
        </div>
      ) : (
        <p className="loading-error">
          Something went wrong! cannot load images{" "}
        </p>
      )}
    </div>
  );
};

export default HalfSlider;