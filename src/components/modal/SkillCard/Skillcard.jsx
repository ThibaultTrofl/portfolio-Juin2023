const SkillCard = ({ data }) => {
  console.log(data.skills);
  return (
    <>
      <div></div>
      <div>
        {data.skills.map((data) => {
          <p>{data}</p>;
        })}
      </div>
    </>
  );
};

export default SkillCard;
