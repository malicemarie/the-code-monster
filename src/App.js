import React from "react";
import Header from "./components/Header";
import Button from "./components/Button";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Button theme={"midnight"} value={"Submit"} />
      <Header theme={"midnight"} links={"Home"} logo={"./codeMonster.png"} />
    </div>
  );
}

export default App;
