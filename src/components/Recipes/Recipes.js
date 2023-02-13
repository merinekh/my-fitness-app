import React, { useEffect, useState } from "react";
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

  const [nutriments, setNutriments] = useState([]);

  const [breakfastMeal, setBreakfastMeal] = useState([]);
  const [lunchMeal, setLunchMeal] = useState([]);
  const [dinnerMeal, setDinnerMeal] = useState([]);

  useEffect(() => {
    // const apiCall = () => {
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setRecipes(response.data);
        setBreakfastMeal(response.data.meals[0]);
        setLunchMeal(response.data.meals[1]);
        setDinnerMeal(response.data.meals[2]);
        setNutriments(response.data.nutrients);
      })
      .catch(function (error) {
        console.error(error);
      });
    // };
    // apiCall();
  }, []);
  // console.log(nutriments);
  return (
    <>
      <div className="main-recipes">
        <h6 className="main-recipes__title">Your Meal Plan</h6>
        <div className="main-recipe-nutrients">
          <h6 className="main-recipe__nutrients">
            Calories : <br />
            {Math.round(nutriments.calories)}
          </h6>
          <h6 className="main-recipe__nutrients">
            Protein : <br />
            {Math.round(nutriments.protein)}g
          </h6>
          <h6 className="main-recipe__nutrients">
            Carbs : <br />
            {Math.round(nutriments.carbohydrates)}g
          </h6>
          <h6 className="main-recipe__nutrients">
            Fat : <br />
            {Math.round(nutriments.fat)}g
          </h6>
        </div>

        <div className="main-recipe">
          <img src={breakfast} alt="" className="main-recipe__icon" />
          <div className="main-recipe-text">
            <h6 className="main-recipe__subtitle">Breakfast</h6>
            <h4 className="main-recipe__title">{breakfastMeal.title}</h4>
            <a
              target="_blank"
              className="btn main-recipe__link "
              href={breakfastMeal.sourceUrl}
            >
              Recipe Here!
            </a>
          </div>
        </div>

        <div className="main-recipe">
          <img src={lunch} alt="" className="main-recipe__icon" />
          <div className="main-recipe-text">
            <h6 className="main-recipe__subtitle">Lunch</h6>

            <h4 className="main-recipe__title">{lunchMeal.title}</h4>
            <a
              target="_blank"
              className="btn main-recipe__link "
              href={lunchMeal.sourceUrl}
            >
              Recipe Here!
            </a>
          </div>
        </div>

        <div className="main-recipe">
          <img src={dinner} alt="" className="main-recipe__icon" />
          <div className="main-recipe-text">
            <h6 className="main-recipe__subtitle">Dinner</h6>

            <h4 className="main-recipe__title">{dinnerMeal.title}</h4>
            <a
              target="_blank"
              className="btn main-recipe__link "
              href={dinnerMeal.sourceUrl}
            >
              Recipe Here!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipes;
