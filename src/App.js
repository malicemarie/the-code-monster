import React from "react";

import Navbar from "./components/Navbar";
import Button from "./components/Button";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar
        theme={"midnight"}
        links={"Home"}
        logo={"./codeMonster(light).png"}
      />

      <Button theme={"midnight"} value={"Submit"} size={"monster"} />
      <Button theme={"moon"} value={"Submit"} size={"monster"} />
    </div>
  );
}

export default App;
