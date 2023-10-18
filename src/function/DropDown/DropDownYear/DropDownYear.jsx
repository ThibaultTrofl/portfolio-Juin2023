import "../DropDown.scss";

const DropDownYear = ({ func, dataFunc, utility }) => {
  const today = new Date();
  const startDate = 2023;
  const endDate = today.getFullYear();

  const mapDate = () => {
    for (let i = startDate; i <= endDate; i++) {
      return <option value={i.toString}>{i}</option>;
    }
  };

  const handleChangeYear = (e) => {
    let copyOfFunc = dataFunc;
    if (utility === "start") {
      copyOfFunc.startYear = Number(e);
    } else if (utility === "end") {
      copyOfFunc.endYear = Number(e);
    }

    console.log(copyOfFunc);
    func(copyOfFunc);
  };

  return (
    <>
      <select
        className="form-select"
        id="year"
        name="year"
        value={dataFunc.startYear}
        onChange={(e) => handleChangeYear(e.target.value)}
      >
        {mapDate()}
      </select>
    </>
  );
};

export default DropDownYear;
