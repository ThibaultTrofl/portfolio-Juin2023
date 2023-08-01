import "./CardCategory.css";

const CardCategory = ({ title, setTab, tab, tabName, id }) => {
  //   console.log(class);
  if (tab === tabName[id]) {
  }
  return (
    <div
      className={
        tab === tabName[id] ? "cardcategory tabSelect" : "cardcategory"
      }
      onClick={() => {
        tab ? setTab(null) : setTab(tabName[id]);
      }}
    >
      {title}
    </div>
  );
};

export default CardCategory;
