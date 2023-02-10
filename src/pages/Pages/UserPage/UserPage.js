import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function UserPage() {
  const [favorite, setFavorite] = useState([]);
  const [data, setData] = useState([]);
  // =============Import Equipment info for NavBar=================

  const API_URL = "http://localhost:8080/";
  const API_PATH = "exercices";

  useEffect(() => {
    axios
      .get(API_URL + API_PATH + `/favorite`)
      .then((response) => {
        setFavorite(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(API_URL + API_PATH)
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const favoriteExercices = [];
  const favoriteIds = favorite.map((el) => el.id);
  favoriteIds.map((id) => {
    const dataFavorite = data.filter((element) => element.id === id);
    favoriteExercices.push(dataFavorite[0]);
  });
  console.log(favoriteExercices);
  // const dataFavorite = data.filter((element) => console.log(element.id));
  // console.log(favoriteIds, dataFavorite);
  return <div>UserPage</div>;
}

export default UserPage;
