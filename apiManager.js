class CardsDeck{

    constructor(){
        this.cards = []
    }

    getCard(numOfCards){
        $.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=${numOfCards}`,(randomCards)=>{
            randomCards.cards.forEach(card => this.cards.push(card))
        })
    }

}



// for(let i in randomCards.cards){
//     //     this.cards.push(randomCards.cards[i])
//     // }
