import React from "react";
import meter from "../../assets/images/meter.png";
import meterwithout from "../../assets/images/meterwithout.png";
import cardio from "../../assets/images/cardio.png";

function Dashboard() {
  return (
    <>
      <div className="main-dashboard">
        <div className="main-dashboard-content">
          <div className="main-upper">
            <h3 className="main-upper__title">Calories</h3>
            <img src={meter} alt="" className="main-upper__image" />
          </div>
          <div className="main-down">
            <div className="main-left">
              <h6 className="main-left__subtitle">Consumed</h6>
              <h5 className="main-left__text">130 cal</h5>
            </div>
            <div className="main-right">
              <h6 className="main-right__subtitle">Remaining</h6>
              <h5 className="main-right__text">70 cal</h5>
            </div>
          </div>
        </div>
        <div className="main-dashboard-content">
          <div className="main-upper">
            <h3 className="main-upper__title">Heart</h3>
            <img src={cardio} alt="" className="main-upper__image" />
          </div>
          <div className="main-down">
            <div className="main-left">
              <h6 className="main-left__subtitle">Today</h6>
              <h5 className="main-left__text">110 BPM</h5>
            </div>
            <div className="main-right">
              <h6 className="main-right__subtitle">Yesterday</h6>
              <h5 className="main-right__text">130 cal</h5>
            </div>
          </div>
        </div>
        <div className="main-dashboard-content">
          <div className="main-upper">
            <h3 className="main-upper__title">Water</h3>
            <img src={meterwithout} alt="" className="main-upper__image" />
          </div>
          <div className="main-down">
            <div className="main-left">
              <h6 className="main-left__subtitle">Consumed</h6>
              <h5 className="main-left__text">3 L</h5>
            </div>
            <div className="main-right">
              <h6 className="main-right__subtitle">Remaining</h6>
              <h5 className="main-right__text">2 L</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
