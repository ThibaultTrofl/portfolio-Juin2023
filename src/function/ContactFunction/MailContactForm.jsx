import axios from "axios";

const MailContactForm = () => {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("Document loaded");

    document
      .querySelector("#form")
      .addEventListener("submit", async (event) => {
        event.preventDefault();

        const data = {
          firstname: document.querySelector("#firstname").value,
          lastname: document.querySelector("#lastname").value,
          email: document.querySelector("#email").value,
          message: document.querySelector("#message").value,
        };

        console.log(data);

        const response = await axios.post(
          "https://site--form-back--tq978s5f6htc.code.run/form",
          data
        );
        console.log(response);
      });
  });
};

export default MailContactForm;
