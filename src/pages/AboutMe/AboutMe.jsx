import "./AboutMe.css";

import Description from "../../components/Description/Description";
import Skills from "../../components/Skills/Skills";
import Experiences from "../../components/Experiences/Experiences";
import Degrees from "../../components/Degrees/Degrees.jsx";
import SmallContact from "../../components/SmallContact/SmallContact.jsx";

const AboutMe = () => {
  return (
    <main>
      <section className="aboutme-all">
        <Description />
        <div className="aboutme-skills card">
          <Skills />
        </div>
        <div className="aboutme-exp card">
          <Experiences />
        </div>
        <div className="aboutme-degrees card">
          <Degrees />
        </div>
        <div className="aboutme-contact card">
          <SmallContact />
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
