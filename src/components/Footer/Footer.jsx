import { useTranslation } from "react-i18next";

import "./Footer.css";
const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer>
      <div className="text-footer">
        <p>2023</p>
        <p>
          {t(`footer.madeBy`)}{" "}
          <a href="https://example.com" className="text-bold">
            Thibault TROFLEAU
          </a>{" "}
          {t(`footer.with`)} React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
