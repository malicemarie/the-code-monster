import React from "react";

import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Form from "./components/Form";

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

      <Form theme={"sunset"} placeholder1={"Your Name"} placeholder2={"Your Phone Number (optional)"} placeholder3={"Email"} btnValue1={'Submit'} btnValue2={'Clear'} />
    </div>
  );
}

export default App;
