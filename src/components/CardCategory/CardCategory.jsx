import "./CardCategory.css";

const CardCategory = ({ title, setTab, tab, tabName }) => {
  //   console.log(class);
  return (
    <div className="cardcategory" onClick={setTab()}>
      {title}
    </div>
  );
};

export default CardCategory;
