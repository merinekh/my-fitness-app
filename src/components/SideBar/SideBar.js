import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdOutlineDashboard,
  MdManageAccounts,
  MdOutlineAnalytics,
  MdOutlineFastfood,
} from "react-icons/md";
import { GiMuscleUp } from "react-icons/gi";
import "./SideBar.scss";
function SideBar() {
  return (
    <>
      <div className="sidebar">
        <img src="" alt="LOGO" className="sidebar__logo" />
        <div className="sidebar-nav">
          <NavLink className="sidebar-link">
            <MdOutlineDashboard className="sidebar-link__icon" />
          </NavLink>
          <NavLink className="sidebar-link">
            <GiMuscleUp className="sidebar-link__icon" />
          </NavLink>
          <NavLink className="sidebar-link">
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
