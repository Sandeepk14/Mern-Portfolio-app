import React from "react";
import "./nav.css";
import { AiFillThunderbolt, AiOutlineHome } from "react-icons/ai";
import {
  FcAbout,
  FcContacts,
  FcFlashOn,
  FcHome,
  FcLike,
  FcProcess,
} from "react-icons/fc";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        {" "}
        <FcHome className="icon" /> <small>Home</small>{" "}
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        {" "}
        <FcAbout className="icon" /> <small>About</small>{" "}
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        {" "}
        <FcFlashOn className="icon" /> <small>Skills</small>{" "}
      </a>

      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        {" "}
        <FcProcess className="icon" /> <small>Experience</small>{" "}
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        {" "}
        <FcLike className="icon" /> <small>Services</small>{" "}
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        {" "}
        <FcContacts className="icon" /> <small>Contact</small>{" "}
      </a>
    </nav>
  );
};

export default Nav;
