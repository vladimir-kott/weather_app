import React, { useState, useEffect } from "react"
import configFile from "./config.json";
import NavMenu from "./components/navMenu";
import Main from "./components/main";

function App() {
  return (
    <div className="App">
      <NavMenu/>
      <Main/>
    </div>
  );
}

export default App;
