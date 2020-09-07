import React from "react";
import Navbar from "./Navbar";
import Name from "./Name";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Name />
    </React.Fragment>
  );
}

export default App;
