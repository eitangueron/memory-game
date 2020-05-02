class Cards{

    constructor(){
        this.cards = []
    }

    getCard(numOfCards){
        $.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=${numOfCards}`,(randomCards)=>{
            for(let i in randomCards.cards){
                this.cards.push(randomCards.cards[i])
            }
        })
    }

}


