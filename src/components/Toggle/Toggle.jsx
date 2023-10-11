import { useState } from "react";
import "./Toggle.css";

const Toggle = () => {
  const [day, setDay] = useState(true);
  return (
    <>
      <button
        className="toggle-container"
        onClick={() => {
          setDay(!day);
        }}
      >
        <p className="toggle-containt">Jour</p>
        <div className={day ? "flur day" : "flur night"}></div>
        <p className="toggle-containt">Nuit</p>
      </button>
    </>
  );
};

export default Toggle;
