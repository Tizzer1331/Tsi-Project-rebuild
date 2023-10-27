import {useState} from 'react';
import ReactDom from "react-dom/client";

function NameForm(){

    const [name, setName]= useState("");
    const[profession, setProfession] =useState("");
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(profession)
      alert('The Name you entered was:' + name + " Your profession is " + profession) 
    }

    return(
      <form onSubmit={handleSubmit}>
        <label>Enter your name Brave Adventuer:
          <input 
          type= "text"
          value = {name}
          onChange={(e) => setName(e.target.value)}
          
          />
          </label>
        <label> What is your Profession? 
        <select  >
          <option valueProf="Warrior" >Warrior</option>
          <option valueProf="Rogue" >Rogue</option> 
          <option valueProf="Wizard"  >Wizard</option> 
        </select>
        </label>
        <input type ="submit"/>
      </form>
    )
    }

export {NameForm}