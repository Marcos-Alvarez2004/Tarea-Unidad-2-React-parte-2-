import React from "react";
import producto1 from "../images/producto1.png";
import producto2 from "../images/producto2.png";
import producto3 from "../images/producto3.png";

function Main() {
  return (
    <section className="section-content">
      <div className="container-grid">
        <div className="content-img">
          <img src={producto1} alt="" />
          <span className="text-content-img">Nuevos Productos!</span>
        </div>

        <div className="content-img">
          <img src={producto2} alt="" />
          <span className="text-content-img">Nuevos Productos!</span>
        </div>

        <div className="content-img">
          <img src={producto3} alt="" />
          <span className="text-content-img">Nuevos Productos!</span>
        </div>
      </div>
    </section>
  );
}

export default Main;
