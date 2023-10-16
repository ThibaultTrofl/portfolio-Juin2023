import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Toggle.css";

const Toggle = ({ day, setDay }) => {
  return (
    <>
      <button
        className="toggle-container"
        onClick={() => {
          setDay(!day);
        }}
      >
        <div className={day ? "flur day" : "flur night"}></div>
        <p className="toggle-containt">
          <FontAwesomeIcon icon="fa-regular fa-lightbulb" className="svg" />
        </p>

        <p className="toggle-containt">
          <FontAwesomeIcon icon="moon" className="svg" />
        </p>
      </button>
    </>
  );
};

export default Toggle;
