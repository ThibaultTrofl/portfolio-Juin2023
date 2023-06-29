import "./App.css";

// Import FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faIdCardClip,
  faFolder,
  faMessage,
  faBurger,
} from "@fortawesome/free-solid-svg-icons";
library.add(faIdCardClip, faFolder, faMessage, faBurger);

// Import package
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Import Components
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes></Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
