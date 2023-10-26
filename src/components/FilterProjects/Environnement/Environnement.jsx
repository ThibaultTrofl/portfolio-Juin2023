import ElementEnvironnement from "./ElementEnvironnement";

const Environnement = ({ envirFilter, selectEnvir, setSelectEnvir }) => {
  return (
    <>
      <h3 className="filter-list-element-title">Environnement</h3>
      <div className="filter-list-element-containerEnvir">
        {envirFilter.map((data, index) => {
          return (
            <ElementEnvironnement
              key={index}
              selectEnvir={selectEnvir}
              setSelectEnvir={setSelectEnvir}
              data={data}
            />
          );
        })}
        <div className="filter-list-element-containerEnvir-data">blablabla</div>
      </div>
    </>
  );
};

export default Environnement;
