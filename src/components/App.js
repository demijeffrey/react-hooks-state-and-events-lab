import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  // const appClass = false ? "App dark" : "App light"
  const [appClass, setAppClass] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  // console.log({ darkMode, setDarkMode })

  function handleClick () {
    setDarkMode(!darkMode)
    setAppClass(!appClass)
  }

  return (
    <div className={appClass ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
