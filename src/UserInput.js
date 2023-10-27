import {useState} from 'react';
import ReactDom from "react-dom/client";

function NameForm(){
    const [name, setName]= useState("");
    const handleSubmit = (event) => {
      event.preventDefault();
      alert('The Name you entered was: ${name}')
    }
    return(
      <form onSubmit={handleSubmit}>
        <label>Enter your name Brave Adventuer:
          <input 
          type= "text"
          value = {name}
          onChange={(e) => SVGAnimateTransformElement(e.target.value)}
          />
        </label>
        <input type ="submit"/>
      </form>
    )
    }

export {NameForm}