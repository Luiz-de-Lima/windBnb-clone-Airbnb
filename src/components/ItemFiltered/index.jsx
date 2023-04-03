import React, { useState } from "react";
import { Star } from "react-bootstrap-icons";
import "./style.scss";

export const ItemFiltered = ({ data }) => {
  return (
    <div className="container-global">
      <div className="container-item">
        {data &&
          data.map((item, index) => (
            <div key={index} className="container-item__filtered">
              <img src={item.photo} alt="house" />
              <div className="container-item__item-description">
                <p>
                  {item.superHost && (
                    <span className={`${item.superHost ? "host" : ""}`}>
                      super host
                    </span>
                  )}
                  {item.type}
                  <span className="avaliation">
                    <i>
                      <Star />
                    </i>
                    {item.rating}
                  </span>
                </p>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
