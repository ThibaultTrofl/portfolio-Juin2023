import "./AboutMe.css";

import Description from "../../components/Description/Description";
import Skills from "../../components/Skills/Skills";
import Experiences from "../../components/Experiences/Experiences";
import Degrees from "../../components/Degrees/Degrees.jsx";

const AboutMe = () => {
  return (
    <main>
      <section className="aboutme-all">
        <div className="left-column">
          <Description />
          <div className="aboutme-skills">
            <Skills />
          </div>
        </div>
        <div className="right-column">
          <div className="aboutme-exp">
            <Experiences />
          </div>
          <div className="aboutme-degrees">
            <Degrees />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
