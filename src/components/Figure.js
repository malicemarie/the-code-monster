import React from "react";
import "./style.css";

const Figure = ({ caption, imageSrc, theme }) => {
  return (
    <div>
      <figure className={`${theme} figure`}>
        <img className="figureImage" alt="placeholder" src={imageSrc} />
        <div>
          <p className="figureLabel">{caption}</p>
        </div>
      </figure>
    </div>
  );
};
export default Figure;
