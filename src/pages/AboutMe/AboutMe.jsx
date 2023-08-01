import "./AboutMe.css";

import CardCategory from "../../components/CardCategory/CardCategory";
import { useEffect, useState } from "react";
import axios from "axios";

import me from "../../assets/img/me.png";
import SkillCard from "../../components/modal/SkillCard/skillcard";

const AboutMe = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tab, setTab] = useState(null);
  var tabName = [];
  const [data, setData] = useState();
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/aboutme");
        setData(data.response[0].aboutme);
        setIsLoading(!isLoading);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
    setTab(null);
  }, []);

  return (
    <main>
      <section className="aboutme-all">
        <div className="aboutme-menu">
          {!isLoading &&
            data.map((data, index) => {
              const name = Object.keys(data);
              tabName.push(name.toString());
              return (
                <CardCategory
                  title={name}
                  setTab={setTab}
                  tab={tab}
                  tabName={tabName}
                  id={index}
                  key={index}
                />
              );
            })}
        </div>
        <div className="aboutme-text">
          <article className="aboutme-descr">
            <p>
              Bienvenue, ce site à pour vocation de montrer mon avancement de
              mes différents projets personnelle.
            </p>
            <p className="aboutme-desc-line">
              Je m'appelle <span>Thibault TROFLEAU</span>, j'ai 27 ans et je
              suis développeur web & mobile depuis cette année.
            </p>

            <p className="aboutme-desc-line">
              A l'origine, je suis titulaire d'un dîplome dans le domaine du
              bâtiment. Après un congé sans solde pendant lequel j'ai eu
              l'occasion de voyager, j'ai souhaité me reconvertir dans le
              développement.
            </p>
            <p className="aboutme-desc-line">
              Au retour de ce voyage je me suis donc inscrit afin de suivre une
              formation au Réacteur, un bootcamp de 10 semaines permettant de
              s'initier et décrouvrir le développement web & mobile par
              l'apprentissage de ReactJs et ReactNative (entre autres).
            </p>
          </article>
          {tab === "skills" && <SkillCard data={data[0]} />}
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
