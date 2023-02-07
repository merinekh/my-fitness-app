import React from "react";
import "./News.scss";

function News() {
  return (
    <>
      <div class="container-fluid px-1 px-md-4 py-5 mx-auto">
        <div class="row d-flex justify-content-center px-3">
          <div class="card">
            <h2 class="ml-auto mr-4 mt-3 mb-0">Toronto</h2>
            <p class="ml-auto mr-4 mb-0 med-font">Snow</p>
            <h1 class="ml-auto mr-4 large-font">-20&#176;</h1>
            <p class="time-font mb-0 ml-4 mt-auto">
              08:30 <span class="sm-font">AM</span>
            </p>
            <p class="ml-4 mb-4">Wednesday, 18 October 2019</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
