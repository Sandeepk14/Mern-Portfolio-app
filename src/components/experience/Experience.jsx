import "aos/dist/aos.css";
import "./experience.css";
import AOS from "aos";
import Figma from "../../assets/tech/figma.png";
import Git from "../../assets/tech/git.png";
import Javascript from "../../assets/tech/javascript.png";
import MongoDb from "../../assets/tech/mongodb.png";
import css3 from "../../assets/tech/css.png";
import docker from "../../assets/tech/docker.png";
import html5 from "../../assets/tech/html.png";
import node from "../../assets/tech/nodejs.png";
import react from "../../assets/tech/reactjs.png";
import redux from "../../assets/tech/redux.png";
import tailwind from "../../assets/tech/tailwind.png";
import threejs from "../../assets/tech/threejs.svg";

// ..
AOS.init({
  duration: 2000,
});

const skillData = [
  {
    skill: "HTML5",
    img: html5,
  },
  {
    skill: "CSS3",
    img: css3,
  },
  {
    skill: "Javascript",
    img: Javascript,
  },
  {
    skill: "Figma",
    img: Figma,
  },
  {
    skill: "React.Js",
    img: react,
  },
  {
    skill: "Node.Js",
    img: node,
  },
  {
    skill: "Docker",
    img: docker,
  },
  {
    skill: "Git",
    img: Git,
  },
  {
    skill: "MongoDb",
    img: MongoDb,
  },
  {
    skill: "Redux",
    img: redux,
  },
  {
    skill: "TailwindCss",
    img: tailwind,
  },
  {
    skill: "Three.Js",
    img: threejs,
  },
];

const educationData = [
  {
    id: 1,
    cert: "B.Tech IT",
    sch: "Rajkiya Engineering College, Azamgarh",
    year: "2020 - 2024",
  },
  {
    id: 2,
    cert: "Senior Secondary",
    sch: "Bal Krishna I C khatirpur, Ghazipur",
    year: "2018 - 2019",
  },
  {
    id: 3,
    cert: "Matriculation",
    sch: "S R DAHSSBhajayatilari, Ghazipur",
    year: "2016 - 2017",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5> Skills I Have </h5>
      <h2> My Skills & Education </h2>
      <div className="underline"></div>

      <div
        className="container experience__container"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <h4 className="intro">
          {" "}
          I am an highly skilled and motivated individual wiith a strong
          background in the following technologies{" "}
        </h4>
        <div className="experience__frontend">
          <div className="experience__content">
            {skillData.map(({ skill, img }) => {
              return (
                <article className="experience__details" key={img}>
                  <div className="techContainer">
                    <img className="tech__img" src={img} alt="Technology" />
                    <p className="text">{skill}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div
          className="experience__Backend"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <p className="eduTitle"> Education </p>
          <div className="underline"></div>
          <div className="experience__content2">
            {educationData.map(({ id, cert, sch, year }) => {
              return (
                <article className="experience__details" key={id}>
                  <h5 className="cert"> {cert} </h5>
                  <div className="schoolYear">
                    <p> {sch} </p>
                    <small className="year"> {year} </small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
