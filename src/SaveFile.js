

class SaveGame{
    constructor(
        charName,
        deckUrl,
        profession,
        health
    )
    {
    this.charName=charName
    this.deckUrl=deckUrl
    this.profession=profession
    this.health=health
    }
}


function writeSaveGame(saveData){
localStorage.setItem("saveGameData",JSON.stringify(saveData))
}
function readSaveGame(){
    console.log("READ FILE: "+localStorage.getItem("saveGameData"))
}

export {SaveGame}
export{writeSaveGame}
export{readSaveGame}