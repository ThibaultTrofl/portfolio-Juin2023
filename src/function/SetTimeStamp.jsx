const SetTimeStamp = (month, year) => {
  const longMonth = [
    "Jan",
    "Fév",
    "Mar",
    "April",
    "Mai",
    "Juin",
    "Juil",
    "Août",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = `31 ${longMonth[month]} ${year} 23:59:59 GMT`;
  const timeStampResult = Date.parse(date);

  return timeStampResult;
};

export default SetTimeStamp;
