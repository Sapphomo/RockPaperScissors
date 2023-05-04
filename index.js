let rockEl = document.getElementById(rockbtn)
let paperEl = document.getElementById(paperbtn)
let scissorsEl = document.getElementById(scissorsbtn)
let lizardEl = document.getElementById(lizardbtn)
let spockEl = document.getElementById(spockbtn)

//get buttons clickable
//assign win/lose value to each
//create math random between 0 and 4
//have computerchoose
//display win/loss number
//display win/loss message
//reset game

let choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"] 

function hands() {
    let rando = Math.floor( Math.random() * 3)
    return choices[rando]
}

console.log( hands() )

function rock() {
    //if computer chooses [0] then draw
    //if computer chooses [2 || 3] then win
    //if computer chooses [1 || 4] then lose
}