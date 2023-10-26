import { useEffect, useState } from "react";
import "../DropDown.scss";
import GetMonth from "./../../getMonth";
import GetYear from "./../../getYear";

const DropDownMonth = ({ func, dataFunc, year, utility }) => {
  const [defaultValue, setDefaultValue] = useState(Number);

  useEffect(() => {
    if (utility === "end") {
      setDefaultValue(dataFunc.endMonth);
    } else if (utility === "start") {
      setDefaultValue(dataFunc.startMonth);
    }
  }, []);

  let endDate = 11;
  if (year === GetYear()) {
    endDate = GetMonth();
  }

  const month = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  const handleChangeMonth = (e) => {
    let copyOfFunc = dataFunc;
    if (utility === "end") {
      copyOfFunc.endMonth = Number(e);
    } else if (utility === "start") {
      copyOfFunc.startMonth = Number(e);
    }
    func(copyOfFunc);
    setDefaultValue(Number(e));
  };

  return (
    <>
      <select
        className="form-select"
        id="month"
        name="month"
        value={month[defaultValue]}
        onChange={() => handleChangeMonth(month.indexOf(event.target.value))}
      >
        {month.map((month, index) => {
          if (endDate >= index) {
            return (
              <option value={month} key={index}>
                {month}
              </option>
            );
          }
        })}
      </select>
    </>
  );
};

export default DropDownMonth;
