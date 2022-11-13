
// Slå tärning knappen
const rollDice = document.querySelector(".btn-roll");

// Håll poäng
const holdRoll = document.querySelector(".btn-hold");

// Varje tärningskast
let diceRoll;

// Player 0 sparade poäng
let score0 = 0;

// Player 1 sparade poäng
let score1 = 0;

// Summan av poäng under spelarens runda
let roundPoints = 0;

// Poäng som krävs för att vinna
let winningScore;

// Player 0 startar spelet
let player0 = true;
let player1 = false;

// Indikation för vem som börjar
document.getElementById("name-0").style.backgroundColor = "violet";


// När man klickar får man ett nummer mellan 1 & 6 
// Den första bilden uppdateras till det numret
// Får man 1 nollas poängen och turen går över till nästa spelare
rollDice.addEventListener("click", function () {
    const numbers = [1, 2, 3, 4, 5, 6];
    diceRoll = numbers[Math.floor(Math.random() * 6)];
    if (player0) {
        if (diceRoll === 1) {
            document.getElementById("dice-1").src = "img/dice-1.png";
            roundPoints = 0;
            nextPlayer()
        }
        else if (diceRoll === 2) {
            document.getElementById("dice-1").src = "img/dice-2.png";
            roundPoints += 2;
        }
        else if (diceRoll === 3) {
            document.getElementById("dice-1").src = "img/dice-3.png";
            roundPoints += 3;
        }
        else if (diceRoll === 4) {
            document.getElementById("dice-1").src = "img/dice-4.png";
            roundPoints += 4;
        }
        else if (diceRoll === 5) {
            document.getElementById("dice-1").src = "img/dice-5.png";
            roundPoints += 5;
        }
        else if (diceRoll === 6) {
            document.getElementById("dice-1").src = "img/dice-6.png";
            roundPoints += 6;
        }
        console.log(diceRoll);
        document.getElementById("score-0").innerHTML = roundPoints;
    }

    else if (player1) {
        if (diceRoll === 1) {
            document.getElementById("dice-2").src = "img/dice-1.png";
            roundPoints = 0;
            nextPlayer()
        }
        else if (diceRoll === 2) {
            document.getElementById("dice-2").src = "img/dice-2.png";
            roundPoints += 2;
        }
        else if (diceRoll === 3) {
            document.getElementById("dice-2").src = "img/dice-3.png";
            roundPoints += 3;
        }
        else if (diceRoll === 4) {
            document.getElementById("dice-2").src = "img/dice-4.png";
            roundPoints += 4;
        }
        else if (diceRoll === 5) {
            document.getElementById("dice-2").src = "img/dice-5.png";
            roundPoints += 5;
        }
        else if (diceRoll === 6) {
            document.getElementById("dice-2").src = "img/dice-6.png";
            roundPoints += 6;
        }
        document.getElementById("score-1").innerHTML = roundPoints;
    }
})


// Hold knappen sparar rundans samlade poäng
// och lägger ihop det med spelarens totala summa
holdRoll.addEventListener("click", function () {
    if (player0) {
        score0 += roundPoints;
        document.getElementById("current-0").innerHTML = score0;
        console.log(score0);
    }
    else {
        score1 += roundPoints;
        document.getElementById("current-1").innerHTML = score1;
        console.log(score1);
    }
    determineWinner();
    nextPlayer();
})


// Funktion för att byta spelare
// Ger en färgindikation på sidan vem som kör
// Nollar senaste spelarens samlade poäng
function nextPlayer() {
    roundPoints = 0;
    if (player0) {
        document.getElementById("name-1").style.backgroundColor = "violet";
        document.getElementById("name-0").style.backgroundColor = "white";
        document.getElementById("score-0").innerHTML = 0;
        player0 = false;
        player1 = true;
    }
    else if (player1) {
        document.getElementById("name-0").style.backgroundColor = "violet";
        document.getElementById("name-1").style.backgroundColor = "white";
        document.getElementById("score-1").innerHTML = 0;
        player0 = true;
        player1 = false;
    }
}


// Bestämmer hur många poäng som krävs för att vinna
function determineWinner(winningScore) {
    winningScore = parseInt(document.querySelector(".final-score").value);
    if (score0 >= winningScore) {
        window.alert("Player 1 won. Please reset the game.");
    }

    else if (score1 >= winningScore) {
        window.alert("Player 2 won. Please reset the game.");
    }

}

