var questions = [{
    question: "Which of these is not a mountain range in Spain?",
    choices: ["Sierra Nevada", "Picos de Europa", "Pyrenees", "Alps"],
    correctAnswer: 3
}, {
    question: "What city has a beach called 'Kite Surf Beach'?",
    choices: ["Dubai", "Sydney", "Dover", "Santa Monica"],
    correctAnswer: 2
}, {
    question: "The Chesapeake Bay does not run through which of these states?",
    choices: ["Delaware", "Maryland", "Virginia", "New Jersey"],
    correctAnswer: 3
}, {
    question: "What is the longest river?",
    choices: ["Nile", "Amazon", "Mississippi", "Yangtze"],
    correctAnswer: 0
}, {
    question: "What is the busiest tube station in the London?",
    choices: ["Waterloo", "Baker Street", "Kings Cross", "Victoria"],
    correctAnswer: 0
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
$(document).ready(function () {

    
//User clicks to start game
//questions cycle through in random?
//question with answer appears
//countdown timer starts
//users choice is saved 
//next question is displayed, old question hidden
//when correct answer guessed, image appears and correct! text
//when answer is wrong, correct answer is given but no photos.
//if no choice is made before time up next question comes up and incorrect
// tally is incremented
//after all questions score is displayed
//play again button appears when clicked, game reloads
//reloading game clears out users choices and scores and randomizes
//questions
//watch demo and make sure this happens

