import React from "react";

import Photo from "./Photo";

import "./PhotosPage.css";

import photoOne from "./img/photoOne.jpg";
import photoTwo from "./img/photoTwo.jpg";
import photoThree from "./img/photoThree.jpg";
import photoFour from "./img/photoFour.jpg";
import photoFive from "./img/photoFive.jpg";

const PhotosPage = () => {
  return (
    <div className="img-wrapper">
      <Photo photoUrl={photoOne} />
      <Photo photoUrl={photoTwo} />
      <Photo photoUrl={photoThree} />
      <Photo photoUrl={photoFour} />
      <Photo photoUrl={photoFive} />
    </div>
  );
};

export default PhotosPage;
