const cardsDeck = new CardsDeck()
const render = new Renderer()
const logic = new Logic()



let attemptsCounter = 0
let card1
let card2 
let clickCounter = 1


cardsDeck.getCard(8)        //this is an API *aSync* request
                            // To do: add feature of number of card pairs and play w/ this & the grid 



$('#startBtn').click(function(){
    render.displayFullSet(cardsDeck.cards)
    $('#startBtn').text('Play again')
    attemptsCounter = 0                                 
})



$('#gameContainer').on('click', 'img', function(){
    if($('.clicked').length <=1){               //eleminating option for user to click while cards havent flliped yet (visuall elegence)
        if(clickCounter%2 !==0){
            card1 = this.closest('.card')
            render.flip(card1)
            clickCounter++
        } else{
            card2 = this.closest('.card')
            render.flip(card2)
            clickCounter=1
            attemptsCounter++
            setTimeout(function(){
                if(logic.checkMatch(card1, card2)){
                    $(card1).closest('.card').remove()
                    $(card2).closest('.card').remove()
                    logic.checkEndGame()
                } else {
                    render.flip(card1)
                    render.flip(card2)
                }
            },1700)
        }
    }
})

