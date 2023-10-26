const SetDate = ({ date }) => {
  const DateFormat = new Date(Number(date));
  const longMonth = [
    "Jan",
    "Fév",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juil",
    "Août",
    "Sep",
    "Oct",
    "Nov",
    "Déc",
  ];

  const month = DateFormat.getMonth();
  const finalFormat = longMonth[month] + " " + DateFormat.getFullYear();
  return finalFormat;
};

export default SetDate;
