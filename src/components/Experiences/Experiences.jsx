import axios from "axios";
import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

// Style
// import "./Exp.css";

const Exp = () => {
  const size = useWindowSize();

  const [expIsLoading, setExpIsLoading] = useState(true);
  const [expData, setExpData] = useState();
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    const fectchData = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/aboutme/experiences"
        );
        setExpData(data.response);
        console.log(data);
        setExpIsLoading(false);
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
      {!expIsLoading && (
        <div className="exp-pres pres">
          <div className="background-card"></div>
          {/* <div className="exp-all">
            {expData.map((data, index) => {
              console.log(data);
              if (!seeMore) {
                console.log(index);
                if (index <= setNumberCard) {
                  return (
                    <div className="icon-card">
                      <img
                        src={data.icon}
                        alt={data.exp}
                        key={index}
                        className="exp-icon"
                      />
                    </div>
                  );
                } else {
                  return;
                }
              } else {
                return <div className="icon-card"></div>;
              }
            })}
          </div> */}
          {/* 
          {expData.length > setNumberCard && (
            <button className="see-more" onClick={() => setSeeMore(!seeMore)}>
              {!seeMore ? "Voir plus" : "Voir moins"}
            </button>
          )} */}
        </div>
      )}
    </>
  );
};

export default Exp;
