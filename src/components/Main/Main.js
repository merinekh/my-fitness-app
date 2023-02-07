import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Exercices from "../Exercices/Exercices";
import Nutrition from "../Nutrition/Nutrition";
import Recipes from "../Recipes/Recipes";

function Main() {
  return (
    <>
      <Nutrition />
      <Recipes />
      <Exercices />
      <Dashboard />
    </>
  );
}

export default Main;
