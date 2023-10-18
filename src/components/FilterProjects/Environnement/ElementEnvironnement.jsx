import { useState } from "react";

const ElementEnvironnement = ({ selectEnvir, setSelectEnvir, data }) => {
  const [selected, setSelected] = useState(false);

  const handleChangeEnvir = (envir) => {
    let newArrayOfSelectEnvir = selectEnvir;
    if (selectEnvir.length > 0 && selectEnvir.includes(envir)) {
      let positionOfEnvir = selectEnvir.indexOf(envir);
      selectEnvir.splice(positionOfEnvir, 1);
    } else {
      newArrayOfSelectEnvir = selectEnvir;
      newArrayOfSelectEnvir.push(envir);
    }
    setSelectEnvir(newArrayOfSelectEnvir);
    setSelected(!selected);
  };

  return (
    <div
      onClick={() => handleChangeEnvir(data)}
      className={
        selected
          ? "filter-list-element-containerEnvir-data-select"
          : "filter-list-element-containerEnvir-data"
      }
    >
      {data}
    </div>
  );
};
export default ElementEnvironnement;
