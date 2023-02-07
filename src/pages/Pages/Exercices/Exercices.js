import React, { useEffect, useState } from "react";
import Exercices from "../../components/Exercices/Exercices";
import "./Page.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

function Page() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [equipment, setEquipment] = useState([]);
  return <div className="exercicePage"></div>;
}

export default Page;
