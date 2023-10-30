import { deckDraw } from './ApiManager.js'

function CartChoice1(deckIdUrl, profession) {
    console.log("cart Choice 1 triggered")
    let skillDiff = 7
    let cartChoice1Success = false
    if (profession === "Wizard") {
        skillDiff++
    }
    else {
        skillDiff--
    }
    if (deckDraw(deckIdUrl, skillDiff) === true) {
        cartChoice1Success = true
        console.log("skill "+ cartChoice1Success)
    }
    else {
        cartChoice1Success = false
        console.log("skill "+ cartChoice1Success)
    }
    return (cartChoice1Success)
}

function CartChoice2(deckIdUrl, profession) {
    console.log("cart Choice 1 triggered")
    let skillDiff = 7
    let cartChoice2Success = false
    if (profession === "Wizard") {
        skillDiff++
    }
    else {
        skillDiff--
    }
    if (deckDraw(deckIdUrl, skillDiff) === true) {
        cartChoice2Success = true
        console.log("skill "+ cartChoice2Success)
    }
    else {
        cartChoice2Success = false
        console.log("skill "+ cartChoice2Success)
    }
    return (cartChoice2Success)
}
export { CartChoice1 , CartChoice2}