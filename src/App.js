import React from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Social from "./components/Social";
import Form from "./components/Form";
import Card from "./components/Card";
import Search from "./components/Search";
import Figure from "./components/Figure";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar
          theme={"midnight"}
          links={"Home"}
          logo={"./codeMonster(light).png"}
        />
      </div>

      <div>
        <Button theme={"midnight"} value={"Submit"} size={"monster"} />
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

      <div>
        <Card
          theme={"midnight"}
          cardImage={"./gagamidnight.jpeg"}
          title={"Midnight"}
          value={"Write a caption!"}
        />
      </div>

      <div>
        <Form
          theme={"midnight"}
          placeholder1={"Your Name"}
          placeholder2={"Your Phone Number (optional)"}
          placeholder3={"Email"}
          btnValue1={"Submit"}
          btnValue2={"Clear"}
        />
      </div>

      <div>
        <Figure
          theme={"midnight"}
          caption={"Who are ya gonna call?"}
          imageSrc={"https://www.fillmurray.com/500/500"}
        />
      </div>

      <div>
        <Search
          theme={"midnight"}
          value={"Search"}
          placeholderText={"Start your search here..."}
        />
      </div>
    </div>
  );
}

export default App;
