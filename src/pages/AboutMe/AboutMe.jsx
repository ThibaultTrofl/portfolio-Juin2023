import "./AboutMe.css";

import { useEffect, useState } from "react";
import axios from "axios";
import Description from "../../components/Description/Description";
import Skills from "../../components/Skills/Skills";
import Experiences from "../../components/Experiences/Experiences";

const AboutMe = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  return (
    <main>
      <section className="aboutme-all">
        <Description />
        <div className="aboutme-skills card">
          <Skills />
        </div>
        <div className="aboutme-degrees card">
          <Experiences />
        </div>
        <div className="aboutme-exp card">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          reprehenderit iste? Unde reiciendis, dolore voluptas id modi autem
          quo? Odio, ipsum a. Ducimus beatae maxime nobis blanditiis rerum error
          corrupti.
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
