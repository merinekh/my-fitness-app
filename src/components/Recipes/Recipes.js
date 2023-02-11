import React, { useState } from "react";
import lunch from "../../assets/images/lunch-time.png";
import dinner from "../../assets/images/dinner.png";
import breakfast from "../../assets/images/break.png";
import "./Recipes.scss";
import axios from "axios";

function Recipes() {
  const options = {
    method: "GET",
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate",
    params: {
      timeFrame: "day",
      targetCalories: "2000",
      diet: "vegetarian",
      exclude: "shellfish, olives",
    },
    headers: {
      "X-RapidAPI-Key": "6c6dc27cbfmsh87e924efc5e11e8p10d664jsn59cdb64049d5",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };
  const [recipes, setRecipes] = useState([]);
  const apiCall = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setRecipes(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  // apiCall();
  const breakfast = recipes.meals[0];
  const lunch = recipes.meals;
  const dinner = recipes.meals;
  console.log(breakfast);
  return (
    <>
      <div className="main-recipes">
        <div className="main-recipe">
          <img src={breakfast} alt="" className="main-recipe__icon" />
          <div className="main-recipe-text">
            <h6 className="main-recipe__subtitle">{breakfast.title}</h6>
            <a href={breakfast.sourceUrl}>Recipe Here!</a>
            <h4 className="main-recipe__title">Breakfast</h4>
          </div>
          <h5 className="main-recipe__calories">Cal-123kcal</h5>
        </div>
        <div className="main-recipe">
          <img src={lunch} alt="" className="main-recipe__icon" />
          <div className="main-recipe-text">
            <h6 className="main-recipe__subtitle">{lunch.title}</h6>
            <h4 className="main-recipe__title">Lunch</h4>
          </div>
          <h5 className="main-recipe__calories">Cal-123kcal</h5>
        </div>
        <div className="main-recipe">
          <img src={dinner} alt="" className="main-recipe__icon" />
          <div className="main-recipe-text">
            <h6 className="main-recipe__subtitle">{dinner.title}</h6>
            <h4 className="main-recipe__title">Dinner</h4>
          </div>
          <h5 className="main-recipe__calories">Cal-123kcal</h5>
        </div>
      </div>
    </>
  );
}

export default Recipes;
