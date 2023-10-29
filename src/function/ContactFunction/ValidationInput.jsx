const ValidationInput = ({
  alert,
  setAlert,
  email,
  subject,
  message,
  setRefresh,
}) => {
  const copyOfAlertObject = alert;
  if (!subject) {
    copyOfAlertObject.subject = "Merci de renseigner un objet au message";
  } else {
    copyOfAlertObject.message = "";
  }

  if (!message) {
    copyOfAlertObject.message = "Merci de renseigner un message";
  } else {
    copyOfAlertObject.message = "";
  }

  if (!email) {
    copyOfAlertObject.email = "Merci de renseigner un email";
  } else {
    if (
      !email.endsWith(".fr") &&
      !email.endsWith(".com") &&
      !email.endsWith(".net") &&
      !email.endsWith(".org") &&
      !email.endsWith(".mail") &&
      !email.endsWith(".fr")
    ) {
      copyOfAlertObject.email = "Merci de renseigner un email valide";
    } else {
      copyOfAlertObject.email = "";
    }
  }
  setAlert(copyOfAlertObject);
  setRefresh(true);
  return;
};
export default ValidationInput;
