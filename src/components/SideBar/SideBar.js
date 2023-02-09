import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  MdOutlineDashboard,
  MdManageAccounts,
  MdOutlineAnalytics,
  MdOutlineFastfood,
} from "react-icons/md";
import { GiMuscleUp } from "react-icons/gi";
import gym from "../../assets/images/gym.png";
import "./SideBar.scss";
function SideBar() {
  return (
    <>
      <div className="sidebar">
        <Link to="/">
          <img src={gym} alt="L" className="sidebar__logo" />
        </Link>
        <div className="sidebar-nav">
          <NavLink to="/" className="sidebar-link">
            <MdOutlineDashboard className="sidebar-link__icon" />
          </NavLink>
          <NavLink to="/exercices" className="sidebar-link">
            <GiMuscleUp className="sidebar-link__icon" />
          </NavLink>
          <NavLink to="/userPage" className="sidebar-link">
            <MdOutlineAnalytics className="sidebar-link__icon" />
          </NavLink>
          <NavLink className="sidebar-link">
            <MdOutlineFastfood className="sidebar-link__icon" />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default SideBar;
