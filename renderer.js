
const gridAreas = []
const rows = 4
const columns = 4

const creatGridAreasArray = function(){
    for(let x=1; x<rows+1; x++){
        for(let y=1; y<columns+1; y++){
            gridAreas.push(`${x}/${y}`)
        }
    }
}


const getRandomLocation = function(gridAreasArray){       
    gridArea = gridAreasArray[Math.floor(Math.random()*gridAreasArray.length)]
    gridAreasArray.splice(gridAreasArray.indexOf(gridArea),1)
    return gridArea
}

const source = $('#card-template').html()
const template = Handlebars.compile(source)


class Renderer{
    constructor(){

    }

    displayFullSet(cardDeck){

        creatGridAreasArray()

        if($('img').length===0){
            for(let i in cardDeck){
                const girdArea1 = getRandomLocation(gridAreas)
                const girdArea2 = getRandomLocation(gridAreas)
                const newHTML1 = template({imgSrc:cardDeck[i].image, value:cardDeck[i].value, suit:cardDeck[i].suit, girdArea:girdArea1})
                const newHTML2 = template({imgSrc:cardDeck[i].image, value:cardDeck[i].value, suit:cardDeck[i].suit, girdArea:girdArea2})
                $('#gameContainer').append(newHTML1)
                $('#gameContainer').append(newHTML2)

                // $('#gameContainer').append(`<img src=${cardDeck[i].image} data-id="${cardDeck[i].value} of ${cardDeck[i].suit}" data-grid-area="${girdArea1}" style="grid-area: ${girdArea1}">`)
                // $('#gameContainer').append(`<img src=${cardDeck[i].image} data-id="${cardDeck[i].value} of ${cardDeck[i].suit}" data-grid-area="${girdArea2}" style="grid-area: ${girdArea2}">`)
            }
        }
    }

}


// imgSrc
// value
// suit
// gridArea
