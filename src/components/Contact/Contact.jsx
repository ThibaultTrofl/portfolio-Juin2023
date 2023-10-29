import "./Contact.scss";
import ContainerForm from "./MailContact/ContainerForm";

const Contact = () => {
  return (
    <>
      <main className="container">
        {/* <section></section> */}
        <section>
          <ContainerForm />
        </section>
      </main>
    </>
  );
};

export default Contact;
