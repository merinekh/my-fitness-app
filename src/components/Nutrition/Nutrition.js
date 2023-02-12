import React from "react";
import { GiMeat, GiWheat } from "react-icons/gi";
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineWaterDrop } from "react-icons/md";
import Recipes from "../Recipes/Recipes";
import "./Nutrition.scss";

function Nutrition() {
  return (
    <>
      <div className="main-nutrition">
        <div className="main-macronutriments">
          <div className="main-macronutriment">
            <GiMeat className="main-macronutriment__icon"></GiMeat>
            <div className="main-macronutriment-text">
              <h4 className="main-macronutriment__subtitle">Protein</h4>
              <h4 className="main-macronutriment__text">15/40g</h4>
            </div>
          </div>
          <div className="main-macronutriment">
            <GiWheat className="main-macronutriment__icon"></GiWheat>
            <div className="main-macronutriment-text">
              <h4 className="main-macronutriment__subtitle">Carbs</h4>
              <h4 className="main-macronutriment__text">15/40g</h4>
            </div>
          </div>

          <div className="main-macronutriment">
            <AiOutlineFire className="main-macronutriment__icon"></AiOutlineFire>
            <div className="main-macronutriment-text">
              <h4 className="main-macronutriment__subtitle">Fat</h4>
              <h4 className="main-macronutriment__text">15/40g</h4>
            </div>
          </div>
          <div className="main-macronutriment">
            <MdOutlineWaterDrop className="main-macronutriment__icon"></MdOutlineWaterDrop>
            <div className="main-macronutriment-text">
              <h4 className="main-macronutriment__subtitle">Water</h4>
              <h4 className="main-macronutriment__text">1/5L</h4>
            </div>
          </div>
        </div>
        <Recipes />
      </div>
    </>
  );
}

export default Nutrition;
