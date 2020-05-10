class Logic{

    checkMatch(card1, card2){
        return ($(card1).data().id === $(card2).data().id && $(card1).data().gridArea !== $(card2).data().gridArea)
    }

    checkEndGame(){
        if($('img').length ===0){
            if(localStorage.bestScore === undefined){    ////For the first game user plays => just a big num which will be win for sure
                localStorage.bestScore = '2000'
            }
            const bestEver = JSON.parse(localStorage.bestScore) 
            if(attemptsCounter < bestEver){
                localStorage.bestScore = JSON.stringify(attemptsCounter)
                alert(`New record!\nAttempts number:${attemptsCounter}\nBest score ever:${attemptsCounter}`)
            } else{
                alert(`Well done!\nAttempts number:${attemptsCounter}\nBest score ever:${bestEver}`)
            }
        }
    }
}


