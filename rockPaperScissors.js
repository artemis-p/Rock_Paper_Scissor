let userChosen;
let computerChosen;
var result = getResults();
const displayResult = document.getElementById('result-1')
const choices = document.querySelectorAll('.choices');
const userChoice = document.getElementById('name-0');
const computerChoice = document.getElementById('name-1');

//get user's choice
choices.forEach(choice => 
    choice.addEventListener('click', (e) => {
        console.log(e)
        userChosen = e.target.id
        console.log(userChosen)
        getComputerChoice()
        getResults()
        userChoice.innerHTML = userChosen
        computerChoice.innerHTML = computerChosen
        displayResult.innerHTML = result
    }))

//get computer's choice
function getComputerChoice() {
   const randomNumber = Math.round(Math.random() * (5));
   if (randomNumber === 1) {
       return computerChosen = 'rock'
   } else if (randomNumber === 2) {
        return computerChosen = 'paper'
   } else if (randomNumber === 3) {
        return computerChosen = 'scissors'
   } else if (randomNumber === 4) {
        return computerChosen = 'lizard'
   } else if (randomNumber === 5) {
        return computerChosen = 'spock'
   }
}

//get Results
function getResults() {
    if (computerChosen === userChosen) {
        return result = "It's a tie!"
    } else if (computerChosen === "scissors" && userChosen === "paper") {
        return result = "You lost!"
    } else if (computerChosen === "scissors" && userChosen === "rock") {
        return result = "You win!"
    } else if (computerChosen === "scissors" && userChosen === "lizard") {
        return result = "You lost!"
    } else if (computerChosen === "scissors" && userChosen === "spock") {
        return result = "You win!"
    } else if (computerChosen === "rock" && userChosen === "paper") {
        return result = "You win!"
    } else if (computerChosen === "rock" && userChosen === "scissors") {
        return result = "You lost!"
    } else if (computerChosen === "rock" && userChosen === "lizard") {
        return result = "You lost!"
    } else if (computerChosen === "rock" && userChosen === "spock") {
        return result = "You win!"
    } else if (computerChosen === "paper" && userChosen === "rock") {
        return result = "You lost!"
    } else if (computerChosen === "paper" && userChosen === "scissors") {
        return result = "You win!"
    } else if (computerChosen === "paper" && userChosen === "lizard") {
        return result = "You win!"
    } else if (computerChosen === "paper" && userChosen === "spock") {
        return result = "You lost!"
    } else if (computerChosen === "paper" && userChosen === "spock") {
        return result = "You lost!"
    } else if (computerChosen === "lizard" && userChosen === "rock") {
        return result = "You win!"
    } else if (computerChosen === "lizard" && userChosen === "paper") {
        return result = "You lost!"
    } else if (computerChosen === "lizard" && userChosen === "scissors") {
        return result = "You win!"
    } else if (computerChosen === "lizard" && userChosen === "spock") {
        return result = "You lost!"
    } else if (computerChosen === "spock" && userChosen === "rock") {
        return result = "You lost!"
    } else if (computerChosen === "spock" && userChosen === "paper") {
        return result = "You win!"
    } else if (computerChosen === "spock" && userChosen === "scissors") {
        return result = "You lost!"
    } else if (computerChosen === "spock" && userChosen === "lizard") {
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