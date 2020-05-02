class Logic{

    constructor(){

    }

    checkMatch(card1, card2){
        if($(card1).data().id === $(card2).data().id && $(card1).data().gridArea !== $(card2).data().gridArea){
            return true
        } else{
            return false
        }
    }

    checkEndGame(){
        if($('img').length ===0){
            // return true
            alert(`End game!`)
            // clickCounter = 1
        }
    }

}