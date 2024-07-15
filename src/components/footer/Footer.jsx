import React from "react";
import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { BsLinkedin } from "react-icons/bs";
// ..
AOS.init({
  duration: 2000,
});

const Footer = () => {
  return (
    <footer id="footer" data-aos="zoom-in-down">
      <a href="#" className="footer__logo">
        Sandeep Kumar
      </a>

      <div className="footer__socials">
        <a href="https://github.com/Sandeepk14">
          <FaGithub />
        </a>
        <a href="https://x.com/raj14_s">
          <IoLogoTwitter />
        </a>
        <a href="https://linkedin.com/in/sandeep-kumar-100211235">
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/t___h___e__s___a___n___d_ee__p/">
          <FiInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; Copyright <b className="name">Sandeep Kumar</b>. All rights
          reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
