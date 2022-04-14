import React from "react";
import s from "./Header.module.scss";
import Logo from "../../assets/skiddle-logo-white-landscape.png";

function Header({ search }) {
  return (
    <div className={s.container}>
      <img src={Logo} className={s.image} />
      <input
        type="text"
        placeholder="search for events"
        onChange={(e) => search(e.target.value)}
      ></input>
    </div>
  );
}

export default Header;
