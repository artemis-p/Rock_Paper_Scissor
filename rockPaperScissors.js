let userChosen;
let result = getResults();
const displayResult = document.getElementById('result')
const choices = document.querySelectorAll('.choices');
const randomNumber = Math.floor(Math.random() * 5);
const userChoice = document.getElementById('.name-0')


//get user's choice
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        getUserChoice = e.target.id

    })
})


//get computer's choice
function getComputerChoice() {
    switch (randomNumber){
        case 0:
            return("rock");
        case 1:
            return("paper");
        case 2:
            return("scissors");
        case 3:
            return("lizard");
        case 4:
            return("spock");
    }
}
console.log(getComputerChoice());

//get Results
function getResults() {
    if (getComputerChoice === userChosen) {
        return result = "It's a tie!"
    } else if (getComputerChoice === "scissors" && userChosen === "paper") {
        return result = "You lost!"
    } else if (getComputerChoice === "scissors" && userChosen === "rock") {
        return result = "You win!"
    } else if (getComputerChoice === "scissors" && userChosen === "lizard") {
        return result = "You lost!"
    } else if (getComputerChoice === "scissors" && userChosen === "spock") {
        return result = "You win!"
    } else if (getComputerChoice === "rock" && userChosen === "paper") {
        return result = "You win!"
    } else if (getComputerChoice === "rock" && userChosen === "scissors") {
        return result = "You lost!"
    } else if (getComputerChoice === "rock" && userChosen === "lizard") {
        return result = "You lost!"
    } else if (getComputerChoice === "rock" && userChosen === "spock") {
        return result = "You win!"
    } else if (getComputerChoice === "paper" && userChosen === "rock") {
        return result = "You lost!"
    } else if (getComputerChoice === "paper" && userChosen === "scissors") {
        return result = "You win!"
    } else if (getComputerChoice === "paper" && userChosen === "lizard") {
        return result = "You win!"
    } else if (getComputerChoice === "paper" && userChosen === "spock") {
        return result = "You lost!"
    } else if (getComputerChoice === "paper" && userChosen === "spock") {
        return result = "You lost!"
    } else if (getComputerChoice === "lizard" && userChosen === "rock") {
        return result = "You win!"
    } else if (getComputerChoice === "lizard" && userChosen === "paper") {
        return result = "You lost!"
    } else if (getComputerChoice === "lizard" && userChosen === "scissors") {
        return result = "You win!"
    } else if (getComputerChoice === "lizard" && userChosen === "spock") {
        return result = "You lost!"
    } else if (getComputerChoice === "spock" && userChosen === "rock") {
        return result = "You lost!"
    } else if (getComputerChoice === "spock" && userChosen === "paper") {
        return result = "You win!"
    } else if (getComputerChoice === "spock" && userChosen === "scissors") {
        return result = "You lost!"
    } else if (getComputerChoice === "spock" && userChosen === "lizard") {
        return result = "You win!"
    }
}




// Play the game

//the user clicks on a button (r,p,s,l,s) - userChosen
//save this in a var - userChosen
//the computer plays a random choice - getComputerChoice - yes
//save this in a var - computerChosen
// compare the two var and decide the winner - getResults getComputerChoice vs userChosen - yes
// print result you win/ you lose - displayResult