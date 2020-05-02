const cardsDeck = new Cards()
const render = new Renderer()
const logic = new Logic()


cardsDeck.getCard(8)


$('#startBtn').click(function(){
    render.displayFullSet(cardsDeck.cards)
})


let card1
let card2 
let clickCounter = 1

const flip = function(card){
    $(card).toggleClass('clicked')
}

$('#gameContainer').on('click', 'img', function(){
    if($('.clicked').length <=1){
        if(clickCounter%2 !==0){
            card1 = this.closest('.card')
            flip(card1)
            clickCounter++
        } else{
            card2 = this.closest('.card')
            flip(card2)
            clickCounter=1
            setTimeout(function(){
                if(logic.checkMatch(card1, card2)){
                    $(card1).closest('.card').remove()
                    $(card2).closest('.card').remove()
                    logic.checkEndGame()
                } else {
                    flip(card1)
                    flip(card2)
                }
            },1700)
        }
    }
})

