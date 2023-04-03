import axios from "axios";
import React, { useEffect, useState } from "react";
import { Star } from "react-bootstrap-icons";
import data from "../../stays.json";
import { ItemFiltered } from "../ItemFiltered";
import "./style.scss";
export const CardsHouse = () => {
  const [place, setPlace] = useState(data);

  useEffect(() => {
    const dataSlice = data.slice(0, 6);
    setPlace(dataSlice);
  }, []);
  return (
    <div className="container-card">
      <div className="container-card__title">
        <h2>Stays in Finland</h2>
        <p>12+ stays</p>
      </div>
      <div className="container-card-houses">
        {place &&
          place.map((item, index) => (
            <div key={index} className="container-card-houses__item">
              <img src={item.photo} alt="house" />
              <div className="container-card-houses__item-description">
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
