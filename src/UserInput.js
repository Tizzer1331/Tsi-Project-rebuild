import {useState} from 'react';




// function NameForm(){

//     const [name, setName]= useState("");
//     const[profession, setProfession] =useState("");
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       console.log(profession)
//       alert('The Name you entered was: ' + name + " Your profession is " + profession) 
//     }

//     return(
//       <form onSubmit={handleSubmit}>
//         <label>Enter your name Brave Adventuer:
//           <input 
//           type= "text"
//           value = {name}
//           onChange={(e) => setName(e.target.value)}
//           />
//           </label>

//         <label> What is your Profession? 
//         <select onChange={(e)=> setProfession(e.target.value)}> 
//           <option selected value="Warrior" >Warrior</option>
//           <option value="Rogue" >Rogue</option> 
//           <option value="Wizard"  >Wizard</option> 
//         </select>
//         </label>
//         <input type ="submit"/>
//       </form>
//     )"
//     }

// export {NameForm}


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
  const [profession, setProfession]= useState("");
  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(profession);
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