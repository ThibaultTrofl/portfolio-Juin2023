import "./AboutMe.css";

import CardCategory from "../../components/CardCategory/CardCategory";
import { useEffect, useState } from "react";

const AboutMe = () => {
  const [tab, setTab] = useState(null);
  const tabName = ["skills", "exp", "degr"];

  useEffect(() => {
    setTab(null);
  }, []);

  return (
    <main>
      <section className="aboutme-all">
        <div className="aboutme-menu">
          <CardCategory
            title={"Compétences"}
            setTab={setTab}
            tab={tab}
            tabName={tabName}
          />
          <CardCategory
            title={"Expériences"}
            setTab={setTab}
            tab={tab}
            tabName={tabName}
          />
          <CardCategory
            title={"Dîplomes"}
            setTab={setTab}
            tab={tab}
            tabName={tabName}
          />
        </div>
        <div className="aboutme-text">Description</div>
      </section>
    </main>
  );
};

export default AboutMe;
