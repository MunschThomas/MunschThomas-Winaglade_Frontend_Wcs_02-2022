import { useState } from "react";

import "./styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    const navbar = document.getElementById("navbar");
    setIsOpen(!isOpen);
    if (navbar.classList.contains("visible")) {
      navbar.classList.remove("visible");
      navbar.classList.add("invisible");
    } else if (navbar.classList.contains("invisible")) {
      navbar.classList.remove("invisible");
      navbar.classList.add("visible");
    } else {
      navbar.classList.add("visible");
    }
  };

  return (
    <div>
      <div id="navbar" className="">
        <ul>
          <li className="nav">
            <a href="#" className="navLink">
              Lien 1
            </a>
          </li>
          <li className="nav">
            <a href="#" className="navLink">
              Lien 2
            </a>
          </li>
          <li className="nav">
            <a href="#" className="navLink">
              Lien 3
            </a>
          </li>
        </ul>
      </div>
      <div id="menu-burger" className={isOpen && "clicked"} onClick={openMenu}>
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </div>
  );
};

export default Navbar;
