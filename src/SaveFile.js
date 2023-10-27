

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

function writeSaveGame(charName,saveData){
    // when creating a save game class open and write this as nessecary
    const fs =require('fs');
    console.log("creating new Save Game");
    fs.writeFile(charName+".txt", "SaveData",function(err) {
        if (err){
            return console.error(err);
        }
        console.log("Save Successful under name " + charName);
    });
    fs.close(charName, function(err){
        if(err){
            console.log(err);
        }
        console.log("File Closed successfully");
    });

// const fs = require('fs');
// fs.writeFile('SAVE 1.txt','SAVE DATA GOES HERE',function(err){
//     if (err) throw err;
//     console.log("GAME SAVED as Save 1");

}


// function readSavegame(charName){
//     // PRIME AREA FOR TESTING
//     // CHAR NAME CHECKS
//     const fs = require(fs)

// }
export {SaveGame}