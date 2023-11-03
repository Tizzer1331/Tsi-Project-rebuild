
import { deckDraw } from './ApiManager.js'


NOTE
// 4 components
// all hide on boot
// 

function CartChoice1(deckIdUrl, profession) {
    console.log("cart Choice 1 triggered")
    const decision11=true
    let skillDiff = 7
    if (profession === "Wizard") {
        skillDiff++
    }
    else {
        skillDiff--
    }
    if (deckDraw(deckIdUrl, skillDiff) >= true) {
        let cartChoice1Success=true 
        console.log("skill "+ cartChoice1Success)
    }
    else { 
        const decision11=true
        let cartChoice1Success=true
        console.log("skill "+ cartChoice1Success)
    }
    return (cartChoice1Success)
}

function CartChoice2(deckIdUrl, profession) {
    console.log("cart Choice 2 triggered")
    const decision12=true
    let skillDiff = 7
    
    if (profession === "Rogue") {
        skillDiff++
    }
    else {
        skillDiff--
    }
    if (deckDraw(deckIdUrl, skillDiff) >= true) { 
        let cartChoice2Success=true 
        console.log("skill "+ cartChoice2Success)
    }
    else {
        let cartChoice2Success=false
        console.log("skill "+ cartChoice2Success)
    }
    return (cartChoice2Success)
}


export { CartChoice1 , CartChoice2}