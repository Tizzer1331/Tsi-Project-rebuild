
async function deckFetch(deckUrl){
    const response = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    const newDeck = await response.json();
    console.log("success?"+newDeck.success);
    console.log("new deck ID:"+newDeck.deck_id);
    deckUrl="https://www.deckofcardsapi.com/api/deck/"+newDeck.deck_id+"/draw/?count=1"
    console.log("IN FUNCTION:"+deckUrl)
}
async function deckDraw(deckUrl,skillReq){
    //Prime real estate for testing code
    let value=0
    let skillSuccess=false
    const response = await fetch(deckUrl);
    const newCard = await response.json();
    if (newCard.value === "KING"){
        value=13;
    }
    else if (newCard.value === "QUEEN"){
        value =12;
    }
    else if (newCard.value === "JACK"){
        value=11;
    }
    else{
        value=newCard.value;
    }
    console.log(value)

if ( value >= skillReq){
    skillSuccess=true;
}
else{
    skillSuccess=false;
}
return(
    skillSuccess
)
}

export {deckFetch}
export {deckDraw}