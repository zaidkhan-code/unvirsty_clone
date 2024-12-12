import React, { useEffect, useState } from "react";
// import "./navbar.css";
import logo from "../assets/logo.png";
import menu from "../assets/menu-icon.png";
import "./navbar.css";
import { Link } from "react-scroll";
function Navbar() {
  const [color, setcolor] = useState(false);
  const [colour, setcolour] = useState(false);
  function toggle(){
    colour?setcolour(false):setcolour(true)
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setcolor(true) : setcolor(false);
    });
  }, []);
  return (
    <nav className={`container ${color ? "dark-nav" : ""}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={`${colour?"hide-menu":""}`}>
        <li>
          {" "}
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-260} duration={500}>
            {" "}
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} duration={500} offset={-260}>
            Testemonial
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-260}>
            <button className="btn">Contact us</button>
          </Link>
        </li>
      </ul>
      <img src={menu} alt="" className="menu-icon" onClick={toggle}/>
    </nav>
  );
}

export default Navbar;
