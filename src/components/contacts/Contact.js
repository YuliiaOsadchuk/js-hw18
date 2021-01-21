import React from "react";

import "./Contact.css";

import femaleIcon from "./img/female.png";
import maleIcon from "./img/male.png";
import unknownGenderIcon from "./img/question-mark.png";

const Contact = ({ firstName, lastName, phone, gender }) => {
  let genderIconSrc = "";
  if (gender === "female") {
    genderIconSrc = femaleIcon;
  } else if (gender === "male") {
    genderIconSrc = maleIcon;
  } else {
    genderIconSrc = unknownGenderIcon;
  }
  return (
    <div className="contact">
      <img src={genderIconSrc} alt="gender icon"></img>
      <div className="contact-info">
        <div className="contact-name">
          <span className="first-name">{firstName}</span>
          <span>{lastName}</span>
        </div>
        <span className="phone-number">{phone}</span>
      </div>
    </div>
  );
};

export default Contact;
