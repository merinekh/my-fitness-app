import React, { useEffect, useState } from "react";
import "./Exercices.scss";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";

function ExercicesPage() {
  const [data, setData] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [equipments, setEquipments] = useState([]);

  // =============Import Equipment info for NavBar=================

  const API_URL = "http://localhost:8080/";
  const API_PATH = "exercices";

  useEffect(() => {
    axios
      .get(API_URL + API_PATH)
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(API_URL + API_PATH + `/equipments`)
      .then((response) => {
        setEquipments(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     url: "https://exercisedb.p.rapidapi.com/exercises/equipmentList",
  //     headers: {
  //       "X-RapidAPI-Key": "659442a743mshc4062bb3c2f725fp146520jsn7554ae154544",
  //       "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then(function ({ data }) {
  //       setEquipments(data);
  //       setEquipment(data[0]);
  //       // console.log(data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });

  //   // console.log(data);
  // }, []);
  // // console.log(equipment);
  // setEquipments(listOfEquipments);
  // setEquipment(data[0]);
  // console.log(allExercices);
  // =======================Render Equipments========================================
  const dropDown = equipments.map((element, i) => (
    <option key={i} value={element} className="exercices-dropdown__option">
      {element.toUpperCase()}
    </option>
  ));

  // console.log(newEquipments);

  // ========================OnclickHandler Filter=========================================
  const handleSelect = (e) => {
    // const options = {
    //   method: "GET",
    //   url: `https://exercisedb.p.rapidapi.com/exercises/equipment/${e}`,
    //   headers: {
    //     "X-RapidAPI-Key": "659442a743mshc4062bb3c2f725fp146520jsn7554ae154544",
    //     "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    //   },
    // };
    // axios
    //   .request(options)
    //   .then(function ({ data }) {
    //     setData(data);
    //     // console.log(data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    const dataFilter = data.filter((element) => element.equipment === e);
    setEquipment(dataFilter);
  };
  // console.log(equipment);

  // ========================OnclickHandler Save Exercice=========================================

  const handleSave = (e) => {
    console.log(e.target.id);
    axios
      .post(API_URL + API_PATH + `/favorite/${e.target.id}`, {
        id: e.target.id,
      })
      .then(alert("Saved"))
      .catch((err) => {
        console.log(err);
      });
  };

  // ========================Card Generator===============================================
  const card = () => {
    return equipment.map((element) => {
      return (
        <Carousel.Item key={element.id}>
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

                <h4 className="exercices-card__subtitle">Body Part: </h4>
                <h3 className="exercices-card__target">
                  {element.bodyPart.toUpperCase()}
                </h3>
              </div>
            </div>

            <button
              className="exercices-card__button"
              onClick={handleSave}
              id={element.id}
            >
              Save
            </button>
          </div>
        </Carousel.Item>
      );
    });
  };

  //=================================Carousel=============================================
  const [index, setIndex] = useState(0);

  const handleSelect2 = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="exercices">
      <select
        className="exercices-dropdown selectpicker"
        data-style="btn-primary"
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value="">Select Equipment</option>
        {dropDown}
      </select>

      <Carousel
        className="exercices-cards carousel-inner"
        activeIndex={index}
        onSelect={handleSelect2}
      >
        {card()}
      </Carousel>
    </div>
  );
}

export default ExercicesPage;
