import React from "react";
import { useState } from "react";

function Nav() {
  const [navBlack, setNavBlack] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const transitionNav = () => {
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
  };

  useState(() => {
    document.addEventListener("scroll", transitionNav);
  });

  const handleClick = () => {
    console.log(toggleMenu);
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  };

  return (
    <div
      className={`nav ${
        navBlack || toggleMenu ? "nav--black" : "nav--transparent"
      } ${toggleMenu && "show"}`}
    >
<<<<<<< Updated upstream
      <button className="nav__burger" onClick={handleClick}></button>

      <nav className="nav__links">
        <a href="/films" className="nav__link">
          Films
        </a>
      </nav>
=======
      <nav className="nav__links"></nav>
      <div className="nav__actions">
        <a href="/*" className="nav__action">
          Films
        </a>
        <a href="/" className="nav__action"></a>
        <a href="/" className="nav__action"></a>
        <a href="/" className="nav__action"></a>
        <a href="/" className="nav__action">
          <img src="./images/avatar.jpg" alt="" />
        </a>
      </div>
>>>>>>> Stashed changes
    </div>
  );
}

export default Nav;
