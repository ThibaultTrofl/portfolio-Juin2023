import { useState } from "react";

import "./Description.css";

import me from "./../../assets/img/me.jpeg";

const Description = () => {
  //   const today = new Date.parse();
  //   const ageStamp = today - 840838320;
  //   const age = ageStamp;

  const [seeMore, setSeeMore] = useState(false);

  return (
    <>
      <div className="aboutme-pres pres">
        <div className="background-card"></div>
        <div className="pres-all">
          <div className="pres-data">
            <img className="pres-img" src={me} alt="picture of me" />
            <div className="pres-data-text">
              <p className="pres-name">
                <span className="pres-name-bold">T</span>hibault{" "}
                <span className="pres-name-bold">T</span>
                rofleau
              </p>
              <div className="pres-data-other">
                <p>27 ans</p>
                <p>Paris, FR</p>
              </div>
            </div>
          </div>

          <article className={!seeMore ? "pres-text short" : "pres-text long"}>
            En reconversion professionnelle, passionnée vers le développement,
            j'ai acquis des compétences solides en React.js et React Native
            grâce à un bootcamp intensif. Actuellement en quête d'une alternance
            enrichissante d'une durée de 15 mois, je suis déterminé à mettre en
            pratique mon savoir-faire tout en apprenant au sein d'une équipe
            dynamique. Mon site personnel reflète mon engagement envers
            l'apprentissage continu et l'innovation technologique. Prêt à
            relever de nouveaux défis, je suis convaincu que cette expérience
            sera l'opportunité idéale pour développer mes compétences et
            contribuer activement à des projets inspirants.
          </article>
          <button className="see-more" onClick={() => setSeeMore(!seeMore)}>
            {!seeMore ? "Voir plus" : "Voir moins"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Description;
