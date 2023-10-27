import logo from './logo.svg';
import './App.css';
import {deckFetch,deckDraw}from './ApiManager.js'
import {SaveGame} from './SaveFile.js'
import {NameForm} from './UserInput.js'

function App() {
  //var insted of let for global scope allows functions to run code to adjust it
 var deckUrl=""
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
  );

  console.log("game save details:", gameSave1)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome Adventurer, your recent trip to the Caves of Forwick was most profitable, you looted cleanly
          and managed to escape with your life, now your pack runs empty and the gold weighs heavy on your back.
          You are traversing the forests of the nearby township of Hounds tooth, a town carved into the side of a mountain.
          This is the begining of a choose your own adventure path, you will make the decisions and the action you choose may
          have consequences, but first a few decisions.
        </p>
        

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
