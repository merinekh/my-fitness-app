import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./UserPage.scss";

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
        axios
          .get(API_URL + API_PATH)
          .then((responseData) => {
            setFavorite(response.data);
            setData(responseData.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //=================================Filter Favorite================================
  const favoriteExercices = [];
  const favoriteIds = favorite.map((el) => el.id);
  // console.log("fav", favorite);
  favoriteIds.map((id) => {
    const dataFavorite = data.filter((element) => element.id === id);
    favoriteExercices.push(dataFavorite[0]);
  });
  // const dataFavorite = data.filter((element) => console.log(element.id));
  // console.log(favoriteIds, dataFavorite);

  const card = () => {
    return favoriteExercices.map((element) => {
      return (
        <div className="exercices-card user-card" key={element.id}>
          <h2 className="exercices-card__title">
            {element.name.toUpperCase()}
          </h2>
          <img
            src={element.gifUrl}
            alt="gif-exercice"
            className="exercices-card__image"
          />
          <div className="exercices-card-infos">
            <div className="exercices-card-info">
              <h4 className="exercices-card__subtitle">Targeted: </h4>
              <h3 className="exercices-card__target">
                {element.target.toUpperCase()}
              </h3>
            </div>
            <div className="exercices-card-info">
              <h4 className="exercices-card__subtitle">Body Part: </h4>
              <h3 className="exercices-card__target">
                {element.bodyPart.toUpperCase()}
              </h3>
            </div>
          </div>

          <button
            className="exercices-card__button user-card__delete"
            onClick={handleDelete}
            id={element.id}
          >
            Delete
          </button>
        </div>
      );
    });
  };

  //=================================Delete Favorite================================
  const handleDelete = (e) => {
    axios
      .delete(API_URL + API_PATH + `/favorite/${e.target.id} `, {
        id: e.target.id,
      })
      .then(
        axios
          .get(API_URL + API_PATH + `/favorite`)
          .then((response) => {
            axios
              .get(API_URL + API_PATH)
              .then((responseData) => {
                setFavorite(response.data);
                setData(responseData.data);
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          })
      )
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {" "}
      <div className="user-cards">{card()}</div>
    </>
  );
}

export default UserPage;
