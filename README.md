# About 

My project, I chose the game craps



You win if a 7 or 11 roll, or lose if 2, 3, or 12 roll 
(known as “craps”). 

Any other number that rolls becomes the “point” and the point must roll again before a 7 to win.


## Technologies Used

```
HTML
Javascript
CSS
```
## User Stories

```

MVP

-A welcome page that reads the rules of craps
    -Welcome header
    -Game description/Rules
    -Start Button
        -onClick moves game to play screen


-Play Screen
    -Header
        -Bankroll
            -Default value is $1000
        -Game Title
        -Number of my dice roll, will show up after I roll
            -Default value is null/nothing before I roll.
    -Gameboard
        -Numbers of each dice
            -Default value of dice, 00
    -Footer
        - Bet Adjustor
            -Decrementor button
                -Subtracts $100, onClick 
                    -Can only decrement to minimum bet, $100
            -Current bet value is $100
                -Default value is $100
            -Incrementor Button
                -Increments by $100, onClick
                    -Cannot increment past bankroll
        - Roll Dice Button
            -If bankRollStatus is empty, roll button is disabled
            -Rolls dice
                -Determine if I am in firstRoll or not
                    -Roll dice if I am in firstRoll
                        -Generate random dice value, and set to currentroll
                        -Determine gameStatus based on currentRoll
                            -If gameStatus is in win condition
                                -Add bet to bankroll
                                -Reset game
                            -If gameStatus is in loss condition
                                -Sub bet from bankroll
                                    -If bankroll is 0
                                            -Set bankrollStatus to empty 
                                -Reset game
                            -If gameStatus is in continue condition
                                -Set gamepoint
                -If gamePoint is set, I am in different block
                    -Roll dice, onClick
                        -Generate random dice value, and assign new diceRoll to currentRoll 
                            -Determine game status
                                -If game won
                                    -Add bet to bankroll
                                -If game loss
                                    -Sub bet from bankroll
                                        -If bankroll is 0
                                            -Set bankrollStatus to empty 
                                -If game continues
                                    -Do nothing
        -Restart game button
            -If bankRollValue is > 0
                -restartButton is disabled
            -else
                -restartButton is enabled
            -restartButton onClick handler
                -Resets game values
                    -bankroll to $1000
                    -currentRoll = empty
                    -pointValue = empty
                            
                
                    
            
-Have a starting bankroll in the top left corner, title of my game centered at the top, and the players
number at the top right corner, if they didn't have a win/loss roll in the first roll

-The main image object that will change every roll

-Bottom left a bet incrementor, that will have two buttons that can change the bet value, the buttons will be a -/+

-Center button will be a dice roll, to start and continue the game

-The bottom right button will be greyed out until the player loses all his bankroll, and
 then will become clickable to refresh the page with a new bankroll


Extracurricular
Player can choose dice, and background/felt
```

![alt text](https://i.imgur.com/jRjuS8z.png "Wireframe 1")


![alt text](https://i.imgur.com/y8v3Vv3.png "Wireframe 2")
