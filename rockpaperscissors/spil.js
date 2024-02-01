"use strict"

let userChoice;
let ComputerChoice;
let result;
document.querySelector(".rock").addEventListener("click", klikRock);
document.querySelector(".paper").addEventListener("click", klikPaper);
document.querySelector(".scissors").addEventListener("click", klikScissors);

function klikRock(){
 userChoice = "rock";
makecomputerChoice();
//console.log("ROCK")

}

function klikPaper(){
    userChoice = "paper";
    makecomputerChoice();
    //console.log("PAPER")
}

function klikScissors(){
    userChoice = "scissors";
    makecomputerChoice();
    //console.log("SCISSORS")
}

function makecomputerChoice(){

    console.log("computerChoice", userChoice);
    const randNum = Math.floor(Math.random() * 3);
    if ( randNum === 0) {
    ComputerChoice = "rock";
    } else if ( randNum === 1) {
        ComputerChoice = "paper";
     } else {
        ComputerChoice = "scissors";
     }
     console.log("Random", randNum);

    determineWinner();
}

function determineWinner(){
if (userChoice === ComputerChoice){
    result = "draw";
}else{
 if((userChoice === "rock" && ComputerChoice === "paper")|| (userChoice === "paper"{
}
    result = "win";
    startHandAnimation();

}

function startHandAnimation() {
    document.querySelector("#player1").addEventListener("animationend",handAnimationEnd);

document.querySelector("#player1").classList.add("shake");
document.querySelector("#player2").classList.add("shake");

}

function handAnimationEnd() {
document.querySelector("#player1").classList.remove("shake");
document.querySelector("#player2").classList.remove("shake");
document.querySelector("#player1").classList.remove("rock");
document.querySelector("#player1").classList.remove("paper");
document.querySelector("#player1").classList.remove("scissors");
document.querySelector("#player2").classList.remove("rock");
document.querySelector("#player2").classList.remove("paper");
document.querySelector("#player2").classList.remove("scissors");




if (userChoice === "rock") {
document.querySelector("#player1").classList.add("rock");
} else if (userChoice === "paper"){
 document.querySelector("#player1").classList.add("paper");
} else {
    document.querySelector("#player1").classList.add("scissors");
}
if (ComputerChoice === "rock") {
    document.querySelector("#player2").classList.add("rock");
    } else if (ComputerChoice === "paper"){
     document.querySelector("#player2").classList.add("paper");
    } else {
        document.querySelector("#player2").classList.add("scissors");
    }

function showWinnerScreen(){

    if (result === "win") {
        document.querySelector("#player2").classList.add("rock");
}
}}}