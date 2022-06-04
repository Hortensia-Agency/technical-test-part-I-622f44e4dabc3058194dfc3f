import React from "react";

import "./App.css";
import Available from "./components/available/Available";
import Choose from "./components/choose/Choose";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Recommand from "./components/recommand/recommand";
import Services from "./components/services/Services";
import Update from "./components/update/Update";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Recommand />
      <Services />
      <Choose />
      <Available />
      <Update />
      <Footer />
    </div>
  );
}

export default App;
