import "./App.css";

// Import FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faIdCardClip,
  faFolder,
  faMessage,
  faBurger,
  faMoon,
  faCircleChevronDown,
  faCircleChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
library.add(
  faIdCardClip,
  faFolder,
  faMessage,
  faBurger,
  faMoon,
  faLightbulb,
  faCircleChevronDown,
  faCircleChevronUp
);

// Import package
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
//Import Components
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AboutMe from "./pages/AboutMe/AboutMe.jsx";
import Projects from "./pages/Projects/Projects.jsx";

function App() {
  const [day, setDay] = useState(true);
  return (
    <>
      <Router>
        <Header day={day} setDay={setDay} />
        <Routes>
          <Route path="/" element={<AboutMe day={day} />} />
          <Route path="/projects" element={<Projects day={day} />} />
          {/* <Route path="/projects" />
          <Route path="/contact" /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
