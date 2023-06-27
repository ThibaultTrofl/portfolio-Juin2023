import "./App.css";

// Import FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope, faKey, faListAlt);

// Import package
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Import Components
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes></Routes>
      </Router>
    </>
  );
}

export default App;
