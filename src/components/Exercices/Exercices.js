import React from "react";
import bodypart from "../../assets/images/body-part.png";
function Exercices() {
  return (
    <>
      <div className="main-exercices">
        <div className="main-exercices-filter">
          <h3 className="main-exercices__bodypart">Chest</h3>
          <h3 className="main-exercices__bodypart">Shoulder</h3>
          <h3 className="main-exercices__bodypart">Abs</h3>
          <h3 className="main-exercices__bodypart">Leg</h3>
        </div>
        <img src={bodypart} alt="" className="main-exercices__info" />
        <div className="main-exercices-info">
          <h7 className="main-exercices__height">Height: 6ft 4inch</h7>
          <h7 className="main-exercices__weight">Weight: 145 lbs</h7>
        </div>
      </div>
    </>
  );
}

export default Exercices;
