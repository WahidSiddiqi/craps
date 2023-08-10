function startGame() {
    const startScreenDiv = document.getElementById("start-screen");
    const gameScreenDiv = document.getElementById("game-screen");

    startScreenDiv.style.display = "none";
    gameScreenDiv.style.display = "flex";
}

function updateBankrollHTML() {
    document.getElementById("bankroll").innerHTML = "Bankroll: $" + currentBankRollValue;
}

function updateBetAndHTML() {
    if (currentBetValue > currentBankRollValue) {
        currentBetValue = currentBankRollValue;
    }
    document.getElementById("bet-value").innerHTML = "Bet: $" + currentBetValue;
}


function betDecrementer() {
    if (currentBetValue > 100) {
        currentBetValue -= 100;
    }
    updateBetAndHTML();
}

function betIncrementer() {
    if (currentBetValue < currentBankRollValue) {
        currentBetValue += 100;
    }
    updateBetAndHTML();
}

function generateRandomDice() {
    return Math.floor((Math.random() * 6)) + 1;
}

function rollDice() {
    dice1 = generateRandomDice();
    dice2 = generateRandomDice();


    updateBoardHTML();
    determineRoundStatus();
    console.log(currentBankRollValue);
    console.log(currentBetValue);
}

function updateBoardHTML() {
    document.getElementById("dice1").innerHTML = `<img src="./assets/dice${dice1}.png" />`;
    document.getElementById("dice2").innerHTML = `<img src="./assets/dice${dice2}.png" />`;
}

function resetGameBoard() {
    playerPoint = null;
    document.getElementById("player-point-number").innerHTML = "";
}

function determineRoundStatus() {
    const sumDiceRoll = (dice1 + dice2);
    const winningNumbersFirstRoll = [7, 11];
    const losingNumbersFirstRoll = [2, 3, 12];
    const winningRoll = winningNumbersFirstRoll.includes(sumDiceRoll) && (playerPoint === null);
    const losingRoll = losingNumbersFirstRoll.includes(sumDiceRoll) && (playerPoint === null);
    const winningContinuingRoll = (playerPoint === (sumDiceRoll));
    const losingContinuingRoll = (sumDiceRoll === 7);
    const notWinOrLoseRoll = (playerPoint === null);


    if (winningRoll) {
        currentBankRollValue += currentBetValue;
        updateBankrollHTML();
    } else if (losingRoll) {
        currentBankRollValue -= currentBetValue;
        updateBankrollHTML();
        updateBetAndHTML();

        resetGameBoard();
    } else if (winningContinuingRoll) {
        currentBankRollValue += currentBetValue;
        updateBankrollHTML();
        console.log('Winning Continual');
        resetGameBoard();
    } else if (losingContinuingRoll) {
        currentBankRollValue -= currentBetValue;
        updateBankrollHTML();
        updateBetAndHTML();
        console.log("Losing Continual");
        resetGameBoard();

    } else if (notWinOrLoseRoll) {
        playerPoint = (dice1 + dice2);
        document.getElementById("player-point-number").innerHTML = playerPoint;
    }
}

function resetGame() {
    playerPoint = null;
    currentBankRollValue = 1000;
    currentBetValue = 100;
    dice1 = "";
    dice2 = "";

    updateBankrollHTML();
    updateBetAndHTML();
    updateBoardHTML();
}

playerPoint = null;
currentBankRollValue = 1000;
currentBetValue = 100;
dice1 = "";
dice2 = "";


updateBankrollHTML();
updateBetAndHTML();
startGame();
