import React from "react";
import Main from "../../components/Main/Main";
import News from "../../components/News/News";
import SideBar from "../../components/SideBar/SideBar";

function HomePage() {
  return (
    <div className="page-container">
      <News />
      <Main />
    </div>
  );
}

export default HomePage;
