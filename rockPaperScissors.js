let getComputerChoice;
let getUserChoice;
let result = results();


//get Results
function results() {
    if (getComputerChoice === getUserChoice) {
        return result = "It's a tie!"
    } else if (getComputerChoice === "scissors" && getUserChoice === "paper") {
        return result = "You lost!"
    } else if (getComputerChoice === "scissors" && getUserChoice === "rock") {
        return result = "You win!"
    } else if (getComputerChoice === "scissors" && getUserChoice === "lizard") {
        return result = "You lost!"
    } else if (getComputerChoice === "scissors" && getUserChoice === "spock") {
        return result = "You win!"
    } else if (getComputerChoice === "rock" && getUserChoice === "paper") {
        return result = "You win!"
    } else if (getComputerChoice === "rock" && getUserChoice === "scissors") {
        return result = "You lost!"
    } else if (getComputerChoice === "rock" && getUserChoice === "lizard") {
        return result = "You lost!"
    } else if (getComputerChoice === "rock" && getUserChoice === "spock") {
        return result = "You win!"
    } else if (getComputerChoice === "paper" && getUserChoice === "rock") {
        return result = "You lost!"
    } else if (getComputerChoice === "paper" && getUserChoice === "scissors") {
        return result = "You win!"
    } else if (getComputerChoice === "paper" && getUserChoice === "lizard") {
        return result = "You win!"
    } else if (getComputerChoice === "paper" && getUserChoice === "spock") {
        return result = "You lost!"
    } else if (getComputerChoice === "paper" && getUserChoice === "spock") {
        return result = "You lost!"
    } else if (getComputerChoice === "lizard" && getUserChoice === "rock") {
        return result = "You win!"
    } else if (getComputerChoice === "lizard" && getUserChoice === "paper") {
        return result = "You lost!"
    } else if (getComputerChoice === "lizard" && getUserChoice === "scissors") {
        return result = "You win!"
    } else if (getComputerChoice === "lizard" && getUserChoice === "spock") {
        return result = "You lost!"
    } else if (getComputerChoice === "spock" && getUserChoice === "rock") {
        return result = "You lost!"
    } else if (getComputerChoice === "spock" && getUserChoice === "paper") {
        return result = "You win!"
    } else if (getComputerChoice === "spock" && getUserChoice === "scissors") {
        return result = "You lost!"
    } else if (getComputerChoice === "spock" && getUserChoice === "lizard") {
        return result = "You win!"
    }
}

