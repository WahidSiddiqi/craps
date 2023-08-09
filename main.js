function myFunction() {
    const startScreenDiv = document.getElementById("startScreen");
    const gameScreenDiv = document.getElementById("gameScreen");

    startScreenDiv.style.display = "none";
    gameScreenDiv.style.display = "block";
}

function updateBankrollHTML() {
    document.getElementById("bankroll").innerHTML = "Bankroll: $" + currentBankRollValue;
}

function updateBetHTML() {
    document.getElementById("bet-value").innerHTML = "Bet: $" + currentBetValue;
}


function betDecrementer() {
    if (currentBetValue > 100) {
        currentBetValue -= 100;
    }
    updateBetHTML();
}

function betIncrementer() {
    if (currentBetValue < currentBankRollValue) {
        currentBetValue += 100;
    }
    updateBetHTML();
}

function generateRandomDice() {
    return Math.floor((Math.random() * 6)) + 1;
}

function rollDice() {
    dice1 = generateRandomDice();
    dice2 = generateRandomDice();

}

currentBankRollValue = 1000;
currentBetValue = 100;
dice1 = 1;
dice2 = 1;

updateBankrollHTML();
updateBetHTML();
