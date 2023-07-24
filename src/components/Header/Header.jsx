import logo from "../../assets/icon/logo2.svg";
import logoFR from "../../assets/icon/language-french.svg";
import logoEN from "../../assets/icon/language-english.svg";

import "./Header.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { t, i18n } = useTranslation();
  const size = useWindowSize();
  const navigate = useNavigate();

  const [burger, setBurger] = useState(false);

  const handleBurgerClick = () => {
    setBurger(!burger);
  };
  return (
    <>
      <header>
        <div className={!burger && "glass-header"}></div>
        <nav
          className={
            size.width < 1280
              ? !burger
                ? "nav"
                : "nav-burger"
              : "nav container"
          }
        >
          <img
            src={logo}
            alt={t(`header.altLogo`)}
            onClick={() => {
              navigate("/");
            }}
            className="nav-logo"
          />
          <div className="contain-list-nav">
            <ul
              className={
                size.width <= 601
                  ? !burger
                    ? "hidden"
                    : "setlist-nav"
                  : "setlist-nav"
              }
            >
              <li
                className="list-nav"
                onClick={() => {
                  navigate("/");
                }}
              >
                <FontAwesomeIcon icon="id-card-clip" className="list-icon" />
                <p className="text-nav">{t(`header.about`)}</p>
              </li>
              <li
                className="list-nav"
                onClick={() => {
                  navigate("/projects");
                }}
              >
                <FontAwesomeIcon icon="folder" className="list-icon" />
                <p className="text-nav">{t(`header.projects`)}</p>
              </li>
              <li
                className="list-nav"
                onClick={() => {
                  navigate("/contact");
                }}
              >
                <FontAwesomeIcon icon="message" className="list-icon" />

                <p className="text-nav">{t(`header.contact`)}</p>
              </li>
            </ul>

            {!burger ? (
              <FontAwesomeIcon
                icon="burger"
                className="burger-buttton-nav"
                onClick={handleBurgerClick}
              />
            ) : (
              <FontAwesomeIcon
                icon="burger"
                className="burger-buttton-nav-open"
                onClick={handleBurgerClick}
              />
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
