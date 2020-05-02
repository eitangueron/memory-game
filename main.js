const cardsDeck = new Cards()
const render = new Renderer()
const logic = new Logic()



let attemptsCounter = 0
let card1
let card2 
let clickCounter = 1


cardsDeck.getCard(8)        // add feature of number of pairs and play w/ this  + this is an API *aSync* request



$('#startBtn').click(function(){
    render.displayFullSet(cardsDeck.cards)
    $('#startBtn').text('Play again')
    attemptsCounter = 0                                 // y did var didn't work ? ?
})



$('#gameContainer').on('click', 'img', function(){
    if($('.clicked').length <=1){
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

