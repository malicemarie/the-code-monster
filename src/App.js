import React from "react";

import Navbar from "./components/Navbar";
import Button from "./components/Button";

import Footer from "./components/Footer";
import Social from "./components/Social";

import Form from "./components/Form";


import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        {" "}
        <Navbar
          theme={"midnight"}
          links={"Home"}
          logo={"./codeMonster(light).png"}
        />
      </div>


      <div>
        <Button theme={"midnight"} value={"Submit"} size={"monster"} />
        <Button theme={"moon"} value={"Submit"} size={"monster"} />
      </div>

      <div>
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

      <div>
        <Footer
          theme={"midnight"}
          footerLogo={"./codeMonster(light).png"}
          logoHeight={"65"}
        />
      </div>

      <Button theme={"midnight"} value={"Submit"} size={"monster"} />

      <Form theme={"sunset"} placeholder1={"Your Name"} placeholder2={"Your Phone Number (optional)"} placeholder3={"Email"} btnValue1={'Submit'} btnValue2={'Clear'} />

    </div>
  );
}

export default App;
