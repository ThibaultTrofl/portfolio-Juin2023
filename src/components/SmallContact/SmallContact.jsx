import linkedinIcon from "../../assets/icon/linkedin.svg";
import githubIcon from "../../assets/icon/github.svg";
import "./SmallContact.css";

const SmallContact = () => {
  return (
    <>
      <div className="aboutme-pres pres">
        <div className="background-card"></div>
        <div className="pres-all">
          <a
            href="https://www.linkedin.com/in/thibault-trofleau/"
            className="smallContact-line"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn Logo"
              className="skill-icon"
            />
            https://www.linkedin.com/in/thibault-trofleau/
          </a>

          <a
            href="https://github.com/ThibaultTrofl"
            className="smallContact-line"
          >
            <img src={githubIcon} alt="GitHub Logo" className="skill-icon" />
            https://github.com/ThibaultTrofl
          </a>
          <a
            href="https://github.com/ThibaultTrofl"
            className="smallContact-line"
          >
            <img src={githubIcon} alt="GitHub Logo" className="skill-icon" />
            Curriculum vitae
          </a>
        </div>
      </div>
    </>
  );
};

export default SmallContact;
