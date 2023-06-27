// import logo from "../../assets/img/logo.jpeg";

import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  console.log(t);
  return <h1>{t("header.about")}</h1>;
  //   return (
  //     <>
  //       <nav>
  //         {/* <div>
  //           <img src={logo} alt="" />
  //         </div> */}
  //         {/* <ul> */}
  //         <p>{i18next.t(`header.about`)}</p>
  //         {/* </ul> */}
  //       </nav>
  //     </>
  //   );
};

export default Header;
