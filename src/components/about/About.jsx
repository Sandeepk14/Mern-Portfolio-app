import "aos/dist/aos.css";
import "./about.css";
import AOS from "aos";
import ME from "../../assets/crop.png";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { VscFolderLibrary } from "react-icons/vsc";

// ..
AOS.init({
  duration: 2000,
});

const about = () => {
  return (
    <section id="about" data-aos="zoom-in-up">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="underline"></div>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Sandeep Kumar" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small> 1+ Years Working </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5> Clients </h5>
              <small> 10+ Worldwide </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5> Projects </h5>
              <small> 20+ Completed </small>
            </article>
          </div>
          <p>
            I'm a skilled software developer with experience in Javascript and
            expertise in frameworks like React, Node.js and Express.js. I'm a
            quick learner and collaborate closely with clients to create
            efficient, scalable, user-friendly solutions that solve real-world
            problems. I love being part of a solution driven tech community. I
            love to teach others about web development and I've made a lot of
            projects with multiple web technologies.
          </p>

          <div className="about__socials">
            <a
              href="https://github.com/Sandeepk14"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaGithub />{" "}
            </a>
            <a
              href="https://linkedin.com/in/sandeep-kumar-100211235"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <BsLinkedin />
            </a>
            <a
              href="https://x.com/raj14_s"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <IoLogoTwitter />{" "}
            </a>
            <a
              href="https://www.instagram.com/t___h___e__s___a___n___d_ee__p/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FiInstagram />{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
