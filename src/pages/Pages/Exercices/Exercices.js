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

  return (
    <div className="exercices">
      <select
        className="exercices-dropdown"
        onChange={(e) => handleSelect(e.target.value.replace(/ /g, "%20"))}
      >
        {dropDown}
      </select>
    </div>
  );
}

export default ExercicesPage;
