import React, { useEffect, useState } from "react";
import "./Exercices.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

function ExercicesPage() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://exercisedb.p.rapidapi.com/exercises/equipmentList",
      headers: {
        "X-RapidAPI-Key": "659442a743mshc4062bb3c2f725fp146520jsn7554ae154544",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function ({ data }) {
        setEquipments(data);
        setEquipment(data[0]);
        // console.log(data);
      })
      .catch(function (error) {
        console.error(error);
      });

    // console.log(data);
  }, []);
  // console.log(equipment);
  // =======================Render Equipments========================================
  const dropDown = equipments.map((element, i) => (
    <option key={i} value={element} className="exercices-dropdown__option">
      {element}
    </option>
  ));

  // console.log(newEquipments);

  // ========================Onclick Filter=========================================
  const handleSelect = (e) => {
    const options = {
      method: "GET",
      url: `https://exercisedb.p.rapidapi.com/exercises/equipment/${e}`,
      headers: {
        "X-RapidAPI-Key": "659442a743mshc4062bb3c2f725fp146520jsn7554ae154544",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function ({ data }) {
        setData(data);
        // console.log(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  console.log(data);
  const card = () => {
    return data.map((element) => {
      return (
        <div className="carousel-item exercices-card" key={element.id}>
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
        </div>
      );
    });
  };

  return (
    <div className="exercices">
      <select
        className="exercices-dropdown"
        onChange={(e) => handleSelect(e.target.value.replace(/ /g, "%20"))}
      >
        <option value=""></option>
        {dropDown}
      </select>

      <div
        id="myCarousel"
        class="carousel slide container"
        data-bs-ride="carousel"
      >
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <div className="exercices-cards carousel-inner">{card()}</div>

        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default ExercicesPage;
