# Welcome to

<img src="./public/codeMonster.png" width="400">

## Get Started with React

1. Create an empty GitHub repo and clone it to your local machine. (Pro tip: for a seamless React install use the naming convention "lovercase-hyphen")

1. Navigate to the root of your github repo in your text editor (The repo should be empty, this is perfect!)

1. Run the following code in your terminal:

```bash
   npx create-react-app .
```

(If you are new to React App or having trouble you can always [start here](https://reactjs.org/docs/getting-started.html).)

If all is well the React app will automatically install - this takes a few minutes!

## Installing Code Monster

1. Once React has completed, navigate to the root of your new app and run the following to install Code Monster dependencies:

```bash
npm install monster
```

## Import Components

1. Import your components in the index.js file at the root of your React App

```javascript
import { Header } from "monster";
```

or if you would like to use multiple elements:

```javascript
import { Button, Footer } from "monster";
```

## Props

- You can pass any information you would like into the component using props.
- View our [documentation](https://github.com/monster) for a full list of available props and classes for each component.
- Call the Component and pass the props in the index.js file in the root of your React App

See this example, the client is using the Button and the Header from code-monser.

```javascript
import React from "react";
import { Button, Paragraph } from "publish-npm-feztheforeigner";

function App() {
  return (
    <div className="App">
      <Button text={"Submit"} />
      <Header
        links={("Home", "Contact")}
        theme={"midnight"}
        logo={"logo.png"}
      />
    </div>
  );
}
```
