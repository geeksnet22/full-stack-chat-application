import React from "react";
import signupImage from "../images/bg-img.png";
import bubble from "../images/bubble.svg";
import "./CoverPhoto.css";

function CoverPhoto() {
  return (
    <div className="coverPhoto">
      <img src={signupImage} alt="cover" />
      <div className="overlap__content__container">
        <img src={bubble} alt="bubble" />
        <p>Converse with anyone with any language</p>
      </div>
    </div>
  );
}

export default CoverPhoto;
