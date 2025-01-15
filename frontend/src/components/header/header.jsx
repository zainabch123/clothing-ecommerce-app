import { useState } from "react";
import GloLogo from "../../assets/icons/gloLogo.jsx";
import ProfileIcon from "../../assets/icons/profileIcon.jsx";
import SearchIcon from "../../assets/icons/searchIcon.jsx";
import FavouritesIcon from "../../assets/icons/favouritesIcon.jsx";
import BasketIcon from "../../assets/icons/basketIcon.jsx";
import Basket from "../basket/basket.jsx";

import "./header.css";

function Header({ basket }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleOnClickLogin = (event) => {
    setIsVisible(!isVisible);
  };

  return (
    <header className="header">
      <div className="language-options-menu">
        <a href="#" style={{ color: "black" }}>
          United Kingdom | English
        </a>
      </div>
      <div className="logo">
        <GloLogo />
      </div>
      <ul className="user-panel">
        <li
          className="profile-icon"
          style={{ color: "black" }}
          onClick={handleOnClickLogin}
        >
          <ProfileIcon />
        </li>
        <li className="search-icon" style={{ color: "black" }}>
          <SearchIcon />
        </li>
        <li className="favourites-icon" style={{ color: "black" }}>
          <FavouritesIcon />
        </li>
        <li className="basket-icon" style={{ color: "black" }}>
          <BasketIcon />
        </li>
      </ul>

      <Basket basket={basket} />

      {isVisible && (
        <div className="login-portal">
          <form>
            <label htmlFor="email">
              Email
              <input type="email" placeholder="email" id="email" name="email" />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                placeholder="password"
                id="password"
                name="password"
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </header>
  );
}

export default Header;
