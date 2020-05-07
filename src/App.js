import React from "react";

import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Social from "./components/Social";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar
        theme={"midnight"}
        links={"Home"}
        logo={"./codeMonster(light).png"}
      />
      <div>
        <Button theme={"midnight"} value={"Submit"} size={"monster"} />
        <Button theme={"moon"} value={"Submit"} size={"monster"} />
      </div>

      <Footer />

      <Social
        size={"3x"}
        facebookLink={"https://www.facebook.com"}
        twitterLink={"https://www.twitter.com"}
        instagramLink={"https://www.instagram.com"}
        githubLink={"https://www.github.com"}
        googlePlusLink={"https://https://myaccount.google.com/"}
        emailAddress={"support@code-monster.com"}
      />
    </div>
  );
}

export default App;
