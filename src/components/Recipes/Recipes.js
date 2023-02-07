import React from "react";
import lunch from "../../assets/images/lunch-time.png";
import dinner from "../../assets/images/dinner.png";
import "./Recipes.scss";

function Recipes() {
  return (
    <>
      <div className="main-recipes">
        <div className="main-recipe">
          <img src={lunch} alt="" className="main-recipe__icon" />
          <div className="main-recipe-text">
            <h6 className="main-recipe_subtitle">Brazilian Strew</h6>
            <h4 className="main-recipe__title">Lunch</h4>
          </div>
          <h5 className="main-recipe__calories">Cal-123kcal</h5>
        </div>
        <div className="main-recipe">
          <img src={dinner} alt="" className="main-recipe__icon" />
          <div className="main-recipe-text">
            <h6 className="main-recipe_subtitle">Brazilian Strew</h6>
            <h4 className="main-recipe__title">Dinner</h4>
          </div>
          <h5 className="main-recipe__calories">Cal-123kcal</h5>
        </div>
      </div>
    </>
  );
}

export default Recipes;
