import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Exercices from "../Exercices/Exercices";
import Nutrition from "../Nutrition/Nutrition";

import "./Main.scss";

function Main() {
  return (
    <div className="main">
      <Nutrition />

      <Exercices />
      <Dashboard />
    </div>
  );
}

export default Main;
