import React from "react";
import Proptypes from "prop-types";
import "./style.css";

const Card = ({ theme, cardImage, value, title }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className={`card ${theme}`}>
            <div>
              <img className="img-fluid" src={cardImage} alt="Gaga" />
            </div>
            <div>
              <span className="card">{title}</span>
            </div>
            <div>
              <p className="card-p">{value}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  theme: Proptypes.string,
  cardImage: Proptypes.string,
  value: Proptypes.string,
  title: Proptypes.string,
};

export default Card;
