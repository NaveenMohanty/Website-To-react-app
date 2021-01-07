import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import Touch from "./Touch";
import Feature from "./Feature";

const App = () => {
  return (
    <div>
      <NavBar />
      <Jumbotron />
      <Feature />
      <Touch />
      <Footer />
    </div>
  );
};

export default App;
