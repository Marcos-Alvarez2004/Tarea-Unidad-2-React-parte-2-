import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import zapatilla from "../../images/zapatilla.png";
import perfume from "../../images/perfume.png";
import perfume2 from "../../images/perfume2.png";
import remera from "../../images/remera.png";

const shop = () => {
  return (
    <div className="container-flex">
      <div className="container-grid-shop">
        <div className="card">
          <div className="container-img">
            <img src={zapatilla} alt="zapatilla" />
          </div>
          <div className="card-text">
            <i>
              <TiShoppingCart />
            </i>
            <p>$45.5</p>
          </div>
        </div>

        <div className="card">
          <div className="container-img">
            <img src={perfume} alt="zapatilla" />
          </div>
          <div className="card-text">
            <i>
              <TiShoppingCart />
            </i>
            <p>$55.5</p>
          </div>
        </div>

        <div className="card">
          <div className="container-img">
            <img src={perfume2} alt="zapatilla" />
          </div>
          <div className="card-text">
            <i>
              <TiShoppingCart />
            </i>
            <p>$50</p>
          </div>
        </div>

        <div className="card">
          <div className="container-img">
            <img src={remera} alt="zapatilla" />
          </div>
          <div className="card-text">
            <i>
              <TiShoppingCart />
            </i>
            <p>$25</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default shop;
