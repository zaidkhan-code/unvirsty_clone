import React from "react";
import "./about.css";
import about_image from "../assets/about.png";
import play_icon from "../assets/play-icon.png";
function About({ setPlay }) {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_image} alt="" className="about-image" />
        <img
          src={play_icon}
          alt=""
          onClick={() => {
            setPlay(true);
          }}
          className="play-icon"
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSTY</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>
          University is more than just a place of learning; it's a
          transformative experience that shapes individuals and fuels societal
          progress. It's a vibrant hub where curiosity thrives, minds are
          challenged, and perspectives are broadened.
        </p>{" "}
        <p>
          Universities offer a diverse tapestry of disciplines, from the
          humanities and social sciences to the sciences and engineering. This
          academic diversity allows students to explore their passions, develop
          critical thinking skills, and delve into specialized areas of
          knowledge.
        </p>{" "}
        <p>
          Beyond the classroom, universities are fertile grounds for
          intellectual discourse. Students engage in lively debates, challenge
          conventional wisdom, and collaborate on research projects that push
          the boundaries of human understanding.
        </p>{" "}
      </div>
    </div>
  );
}

export default About;
