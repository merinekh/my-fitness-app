import React from "react";
import bodypart from "../../assets/images/body-part.png";
import "./Exercices.scss";
function Exercices() {
  return (
    <>
      <div className="main-exercices">
        <div className="main-exercices-filter">
          <h2 className="main-exercices__bodypart">Chest</h2>
          <h2 className="main-exercices__bodypart">Shoulder</h2>
          <h2 className="main-exercices__bodypart">Abs</h2>
          <h2 className="main-exercices__bodypart">Leg</h2>
        </div>
        <img src={bodypart} alt="" className="main-exercices__image" />
        <div className="main-exercices-info">
          <h3 className="main-exercices__height">Height: 6ft 4inch</h3>
          <h3 className="main-exercices__weight">Weight: 145 lbs</h3>
        </div>
      </div>
    </>
  );
}

export default Exercices;
