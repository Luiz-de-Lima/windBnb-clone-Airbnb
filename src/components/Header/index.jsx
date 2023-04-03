import React, { useEffect, useState, useRef } from "react";
import Logo from "../../assets/logo.png";
import { Search } from "react-bootstrap-icons";
import { ModalSearchPlace } from "../ModalSearchPlace";
import "./style.scss";

export const Header = () => {
  const [modal, setModal] = useState(false);
  let modalRef = useRef();
  const handleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setModal(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <header className="header">
      {modal && <ModalSearchPlace ref={modalRef} onClick={handleModal} />}

      <nav>
        <img src={Logo} alt="logo" />
        <div className="search">
          <label className="search-city">Helsinki, Finland</label>
          <a href="" className="search-link">
            add guests
          </a>
          <button className="search-btn" onClick={handleModal}>
            <i className="icon">
              <Search />
            </i>
          </button>
        </div>
      </nav>
    </header>
  );
};
