import MailContact from "./MailContact";
import { useState } from "react";

const ContainerForm = () => {
  const [alert, setAlert] = useState({
    email: "",
    subject: "",
    message: "",
  });
  return <MailContact alert={alert} setAlert={setAlert} />;
};

export default ContainerForm;
