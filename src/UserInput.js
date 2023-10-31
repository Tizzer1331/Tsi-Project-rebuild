import {useState} from 'react';


function NameForm(){
  const [name, setName]= useState("");
  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(name)
      alert('The Name you entered was: ' + name) 
    }
  return(
    <form onSubmit={handleSubmit}>
      <label for = "CharacterName">Character Name</label><br/>
      <input type="text" value={name}
      onChange={(e) => setName(e.target.value)}/>
      <input type = "submit"/>
    </form>
  )
}

function ProfessionForm(){
  const [profession, setProfession]= useState("warrior");
  const handleSubmit = (event) => {
      event.preventDefault();
      alert("Your profession is " + profession)
    } 
  return(
    <form onSubmit={handleSubmit}>
      <label for = "profession">Profession</label><br/>
      <select onChange={(e) => setProfession(e.target.value)}>
        <option value="warrior">Warrior</option>
        <option value="rogue">Rogue</option>
        <option value="wizard">Wizard</option>
        </select>
      <input type = "submit"/>
    </form>
  )

}


export {NameForm, ProfessionForm }