import axios from "axios";
import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

// Style
import "./Skills.css";

const Skills = () => {
  const size = useWindowSize();

  const [skillIsLoading, setSkillIsLoading] = useState(true);
  const [skillData, setSkillData] = useState();
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    const fectchData = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/aboutme/skills"
        );
        setSkillData(data.response);
        setSkillIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fectchData();
  }, []);

  var setNumberCard = 5;
  if (size.width < 601) {
    setNumberCard = 5;
  } else if (size.width > 600) {
    setNumberCard = 7;
  }

  return (
    <>
      {!skillIsLoading && (
        <div className="skill-pres pres">
          <div className="background-card"></div>
          <div className="skill-all">
            {!skillIsLoading &&
              skillData.map((data, index) => {
                if (!seeMore) {
                  if (index <= setNumberCard) {
                    return (
                      <div className="icon-card" key={index}>
                        <img
                          src={data.icon}
                          alt={data.skill}
                          className="skill-icon"
                        />
                      </div>
                    );
                  } else {
                    return;
                  }
                } else {
                  return (
                    <div className="icon-card" key={index}>
                      <img
                        src={data.icon}
                        alt={data.skill}
                        className="skill-icon"
                      />
                    </div>
                  );
                }
              })}
          </div>

          {skillData.length > setNumberCard && (
            <button className="see-more" onClick={() => setSeeMore(!seeMore)}>
              {!seeMore ? "Voir plus" : "Voir moins"}
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Skills;
