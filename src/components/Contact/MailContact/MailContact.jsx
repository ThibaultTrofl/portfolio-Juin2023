import { useEffect, useState } from "react";
import "./MailContact.scss";
import CustomInputContact from "./CustomInputContact/CustomInputContact";
import ValidationInput from "../../../function/ContactFunction/ValidationInput";

const MailContact = ({ alert, setAlert }) => {
  const [firstName, setFirstName] = useState(String);
  const [secondName, setSecondName] = useState(String);
  const [email, setEmail] = useState(String);
  const [subject, setSubject] = useState(String);
  const [message, setMessage] = useState(String);

  const [refresh, setRefresh] = useState(true);
  const handleSubmitForm = (event) => {
    event.preventDefault();
    ValidationInput({ alert, setAlert, email, subject, message, setRefresh });
  };

  useEffect(() => {
    setRefresh(false);
  }, [alert, refresh]);

  return (
    <>
      {!refresh && (
        <div>
          <form
            className="form-box"
            onSubmit={(e) => {
              handleSubmitForm(e);
            }}
          >
            <CustomInputContact
              idName="Prénom"
              type="text"
              setValue={setFirstName}
              value={firstName}
              placeholder="John"
            />
            <CustomInputContact
              idName="Nom de Famille"
              type="text"
              setValue={setSecondName}
              value={secondName}
              placeholder="Doe"
            />
            <CustomInputContact
              idName="Email"
              type="email"
              setValue={setEmail}
              value={email}
              placeholder="john.doe@mail.com"
              alert={alert.email && alert.email}
            />
            <CustomInputContact
              idName="Objet"
              type="text"
              setValue={setSubject}
              value={subject}
              placeholder="Objet"
              alert={alert.subject && alert.subject}
            />
            <CustomInputContact
              idName="Message"
              type="text"
              setValue={setMessage}
              value={message}
              placeholder=""
              alert={alert.message && alert.message}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </>
  );
};

export default MailContact;
