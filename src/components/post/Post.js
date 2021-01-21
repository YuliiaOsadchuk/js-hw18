import React from "react";

import "./Post.css";

const Post = ({ author, date, content, image }) => {
  return (
    <div className="post-wrapper">
      <div className="header-wrapper">
        <div className="photo">
          <img src={author.photo} alt="logo" />
        </div>
        <div className="text-wrapper">
          <div className="info-block">
            <p className="name text-white text-padding">{author.name} </p>
            <p className="nickname text-grey text-padding">{author.nickname}</p>
            <p className="date text-grey">{date}</p>
          </div>
          <p className="content text-white">{content}</p>
        </div>
      </div>
      <div className="image-wrapper">
        <img src={image} alt="photo" />
      </div>
    </div>
  );
};

export default Post;
