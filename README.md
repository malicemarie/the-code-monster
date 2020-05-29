# Welcome to

<img src="./public/codeMonster.png" width="400">

## Get Started with React

1. Create an empty GitHub repo and clone it to your local machine.
   <br>
   <img src="./public/proTip.png" width="20">Pro tip: for a seamless React install use the naming convention "lowercase-hyphen"

1. Navigate to the root of your github repo in your text editor (The repo should be empty, this is perfect!)

1. Run the following code in your terminal:

```bash
   npx create-react-app .
```

(If you are new to React App or having trouble you can always [start here](https://reactjs.org/docs/getting-started.html).)

If all is well the React app will automatically install - this takes a few minutes!

## Installing Code Monster & Dependencies

1. Once React has completed, navigate to the root of your new app and run the following to install Code Monster dependencies:

```bash
npm install the-code-monster
```

Be sure you see the-code-monster in your `package.json` under dependencies. If not, re run install with the `--save` flag.

## Import Components

1. Import your components in the `App.js` file at the root of your React App

```javascript
import { Header } from "the-code-monster";
```

or if you would like to use multiple elements:

```javascript
import { Button, Footer } from "the-code-monster";
```

## Props

- You can pass any information you would like into the component using props.
- Call the Component and pass the props in the `App.js` file in the root of your React App

See this example, the client is using the Button and the Header from the-code-monser.

```javascript
import React from "react";
import { Button, Paragraph } from "the-code-monster";

function App() {
  return (
    <div className="App">
      <Button theme={"moon"} value={"Submit"} />

      <Header theme={"midnight"} logo={"logo.png"} />
    </div>
  );
}
```

<img src="./public/proTip.png" width="20">Pro Tip: If the prop name is plural you will likely want to use .map() to move an array of items into the component

Don't forget - you can view further documentation [here](https://DEPLOYED-STORYBOOK-HERE)

## Working Together

### Bootstrap

Code Monster and Bootstrap go hand in hand. Use our themes and compenent designs and add your own bootstrap custom sizing or use the default Code Monster provides.

For example you can add inline styling or addition props to adjust the width of your contact form using bootstrap classes.

```javascript
<div class="row">
  <div class="col-sm-12 col-lg-6"></div>
</div>
```

### Font Awesome

The Social Links are imported icons from Font Awesome. If you are having trouble rendering the social links on your page you can include a [free font awesome key](https://fontawesome.com/) like this:

```javascript
<script
  src="https://kit.fontawesome.com/YOUR KIT NUMBER HERE.js"
  crossorigin="anonymous"
></script>
```

In the head of your `index.html` in the `public` folder provided in your React App setup.
