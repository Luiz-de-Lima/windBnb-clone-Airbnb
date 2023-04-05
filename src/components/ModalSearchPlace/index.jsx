import React, { useState } from "react";
import { Button } from "../Buttons";
import { Search, XLg } from "react-bootstrap-icons";
import dataJson from "../../stays.json";
import { ItemFiltered } from "../ItemFiltered";
import "./style.scss";

export const ModalSearchPlace = ({ onClick }) => {
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [valueInput, setValueInput] = useState("");
  const [numberPeople, setNumberPeople] = useState(0);
  const [filter, setFilter] = useState([]);

  const handleAdults = (tipo) => {
    if (tipo === "+") {
      setAdult(adult + 1);
    } else if (tipo === "-" && adult > 0) {
      setAdult(adult - 1);
    }
  };

  const handleChildren = (tipo) => {
    if (tipo === "+") {
      setChildren(children + 1);
    } else if (tipo === "-" && children > 0) {
      setChildren(children - 1);
    } else {
      setChildren(0);
    }
  };

  const handleChange = (e) => {
    // const value = .toLowerCase();
    setValueInput(e.target.value);
  };
  const handleNumperPeople = (e) => {
    setNumberPeople(e.target.value);
  };
  const handleSearchPlace = () => {
    if (valueInput.length > 3 || numberPeople > 0) {
      const filteredPlace = dataJson.filter((item) => {
        return (
          item.city.toLowerCase() === valueInput &&
          item.maxGuests >= numberPeople
        );
      });
      console.log(filteredPlace);
      setFilter(filteredPlace);
    } else {
      alert("campo(s) vazio");
    }
  };

  return (
    <div className="search-modal">
      <div className="modal-close">
        <p>Edit your search</p>
        <button onClick={onClick} className={"modal-close-btn"}>
          <i>
            <XLg />
          </i>
        </button>
      </div>

      <div className="search-container">
        <div className="search-container__input">
          <input
            type="text"
            name=""
            id=""
            value={valueInput}
            placeholder="Location"
            className="search-place__input-location"
            onChange={handleChange}
            list={"sugestion"}
          />
          <input
            type="number"
            name=""
            id=""
            value={numberPeople}
            placeholder="Add guests"
            className="search-place__number-of-guests"
            onChange={handleNumperPeople}
            min={0}
          />
        </div>

        <button className="search-btn" onClick={handleSearchPlace}>
          <i className="icon">
            <Search />
          </i>
          Search
        </button>
      </div>
      <div className="number-people container-global">
        {numberPeople > 1 && (
          <>
            <div className="adults">
              <p className="people">Adultos</p>
              <p className="age">Ages 13 or above</p>
              <div className="buttons">
                <Button className={"button"} onClick={() => handleAdults("-")}>
                  -
                </Button>

                <span>{adult}</span>
                <Button
                  tipo={"aumentar"}
                  className={"button"}
                  lassName={"button"}
                  onClick={() => handleAdults("+")}
                >
                  +
                </Button>
              </div>
            </div>
            <div className="children">
              <p className="people">Crianças</p>
              <p className="age">Ages 2 -12</p>
              <div className="buttons">
                <Button
                  className={"button"}
                  onClick={() => handleChildren("-")}
                >
                  -
                </Button>
                <span>{children}</span>
                <Button
                  tipo={"aumentar"}
                  className={"button"}
                  onClick={() => handleChildren("+")}
                >
                  +
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
      <ItemFiltered data={filter} />
    </div>
  );
};
