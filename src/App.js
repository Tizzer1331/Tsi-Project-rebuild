import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { deckFetch} from './ApiManager.js'
import { SaveGame, writeSaveGame, readSaveGame } from './SaveFile.js'
import { NameForm, ProfessionForm } from './UserInput.js'

import { CartChoice1, CartChoice2 } from './CartChoice';

function App() {
  //var insted of let for global scope allows functions to run code to adjust it
  var deckUrl = ""
  deckFetch(deckUrl)
  // question , await a result to punt out a result IE I want to complete fetch before progressing
  // console.log("OUT FUNCTION:"+deckUrl)


  //Proto type code to create a class, 
  //later create user form to fill in
  const gameSave1 = new SaveGame(
    "Riddick",
    "Arkvoodle",
    "Warrior", 
    13
  )
  writeSaveGame(gameSave1)
  readSaveGame()
  console.log("game save details:", gameSave1)

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body id="BodyText">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlUT4qvrtfWdRkIGhuQZMFawtAsKd8uh5n-A&usqp=CAU" alt="treasure" />
        <p id="openingText">
          Welcome Adventurer, your recent trip to the Caves of Forwick was most profitable, you looted cleanly
          and managed to escape with your life, now your rations runs empty and the gold weighs heavy on your back.
          You are traversing the forests of the nearby township of Hounds tooth, a town carved into the side of a mountain.
          This is the begining of a choose your own adventure path, you will make the decisions and the action you choose may
          have consequences, but first a few decisions.
        </p>
        <NameForm />
        <ProfessionForm/>

        <div>
          <p>
            You come across a torn up cart, a human cry to your left disturbs your musings on whether any reations
            remain in the cart, what would you like to do?
          </p>
        {/* <button onClick={CartChoice1(deckIdUrl, profession)}>Abandon the cart to help the person in distress</button>
        <button on Click={CartChoice2(deckIdUrl, profession)}>Ignore the cry and loot the abandoned cart for supplies</button> */}
        </div>
        {/* <CartChoice /> */}

      </body>
    </div>
  );
}

export default App;
