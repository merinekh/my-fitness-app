import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  MdOutlineDashboard,
  MdOutlineAnalytics,
  MdLogin,
} from "react-icons/md";
import { GiMuscleUp } from "react-icons/gi";
import gym from "../../assets/images/gym.png";
import "./SideBar.scss";
function SideBar() {
  return (
    <>
      <div className="sidebar">
        {/* <Link to={user ? "/HomePage" : "/"}> */}
        <Link to="/HomePage">
          <img src={gym} alt="L" className="sidebar__logo" />
        </Link>
        <div className="sidebar-nav">
          <NavLink to="/HomePage" className="sidebar-link">
            <MdOutlineDashboard className="sidebar-link__icon" />
          </NavLink>
          <NavLink to="/exercices" className="sidebar-link">
            <GiMuscleUp className="sidebar-link__icon" />
          </NavLink>
          <NavLink to="/userPage" className="sidebar-link">
            <MdOutlineAnalytics className="sidebar-link__icon" />
          </NavLink>
          <NavLink to="/" className="sidebar-link">
            <MdLogin className="sidebar-link__icon" />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default SideBar;
