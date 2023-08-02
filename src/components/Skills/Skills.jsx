import axios from "axios";
import { useEffect, useState } from "react";

const Skills = () => {
  const [skillIsLoading, setSkillIsLoading] = useState(true);
  const [skillData, setSkillData] = useState();
  console.log(skillData);
  useEffect(() => {
    const fectchData = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/aboutme/skills"
        );
        setSkillData(data.response);
        setSkillIsLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fectchData();
  }, []);
  return (
    <>
      {!skillIsLoading &&
        skillData.map((data, index) => {
          console.log(data);
          return <p key={index}>{data.skill}</p>;
        })}
    </>
  );
};

export default Skills;
