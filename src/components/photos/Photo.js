import React from "react";

const Photo = ({ photoUrl }) => {
  return (
    <div className="img-block">
      <img src={photoUrl} alt="photoGallery"></img>
    </div>
  );
};

export default Photo;
