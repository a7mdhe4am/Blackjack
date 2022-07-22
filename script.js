let player = {
    name: "Ahmed",
    chips: 145,
}




// variables 

let cards = []
let sum = 0
let hasBlackJack = false 
let isAlive = true
let message = ""


let messageEl = document.getElementById('message-el')
let cardsEL = document.getElementById('cards-el')
let sumEl = document.getElementById('sum-el')
let playerEl = document.getElementById('player-el')

playerEl.textContent = player.name + ": $" + player.chips


// generating random card

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
    
}

// starting the game


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard 
    renderGame()
}





function renderGame(){
    cardsEL.textContent = "Cards: "
    sumEl.textContent = "Sum: " + sum
    for (let i = 0; i < cards.length; i++) {
        cardsEL.textContent += cards[i] + " - "
    }
    sumEl.textContent = "sum: " + sum
    if (sum <= 20){
        messageEl.textContent = "Do you want to draw a new card?"
    } else if (sum === 21){
        messageEl.textContent = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        messageEl.textContent = "You're out of the game"
        isAlive = false
    }
}


// getting a new card

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}
}
