import { useState } from "react";

import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div id="navbar" className={isOpen ? "visible" : "invisible"}>
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
