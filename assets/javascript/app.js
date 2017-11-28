 // jquery
    $(document).ready(function() {
        //declare functions at top of scripts and declare variables at top of functions
        
//variables
var questions = [{
        question: "Which of these is not a mountain range in Spain?",
        choices: ["Sierra Nevada", " Picos de Europa", " Pyrenees", " Alps"],
        correctAnswer: "Alps"
    }, {
        question: "What city has a beach called 'Kite Surf Beach'?",
        choices: ["Dubai", "Sydney", "Dover", "Santa Monica"],
        correctAnswer: "Dubai"
    }, {
        question: "The Chesapeake Bay does not run through which of these states?",
        choices: ["Delaware", "Maryland", "Virginia", "New Jersey"],
        correctAnswer: "New Jersey"
    }, {
        question: "Which four countries surround Lake Chad?",
        choices: ["Chad, Cameroon, Niger, and Nigeria", "Chad, Mali, Sudan, and Gabon", "Chad, Zimbabwe, Somali, and Sierra Leone", "Chad, Togo, Congo, and Ghana"],
        correctAnswer: "Chad, Cameroon, Niger, and Nigeria"
    },
    {
        question: "What is the largest desert in the world?",
        choices: ["Gobi", "Arabian", "Sahara", "Sonoran"],
        correctAnswer: "Sahara"
    },
    {
        question: "Which city in France is the home of Airbus?",
        choices: ["Albi", "Perpignon", "Toulouse", "Carcassone"],
        correctAnswer: "Toulouse"
    }
]
console.log(questions[0]["question"]);
console.log(questions[0]["choices"]);
console.log(questions[0].correctAnswer);


$(".question").append(questions[0]["question"]);
$("#choice1").append(questions[0]["choices"][0]);
$("#choice2").append(questions[0]["choices"][1]);
$("#choice3").append(questions[0]["choices"][2]);
$("#choice4").append(questions[0]["choices"][3]);
//closing jquery from top
});

// var wins = 0;
//         var losses = 0;
//         var unanswered = 0;
//         var userGuess;
//         var correctAnswer;


//         // FUNCTIONS
//         var startGame;
//         var resetGame;


//         startGame = function() {
//         //User clicks to start game
// //question with answer choices appears
//         $("#quiz").append(question);
            
//         //countdown timer starts 
        
//         //users choice is saved for correct/incorrect tally and unanswered
        
//         //next question is displayed, old question hidden
   
            
//         };
//         nextQuestion = function(){
//             // correct answer given
//             // new question appears without user input
//             //win/lose/unanswered incremeneted
//         }

//         resetGame = function() {
//             //Resets wins and losses and unanswered counter and restarts timer
//             wins = 0;
//             losses = 0;
//             unanswered = 0;

            

//             startGame();
//         }

//         // EVENT LISTENERS


//         $("#next").click(function() {
//             nextQuestion();
//         })

       
//         //Now call the function to start the game
//         startGame();
    
    
    



    
     //when correct answer guessed, answer appears and correct! text
    //when answer is wrong, answer appears and wrong! text
    //if no choice is made before time up, answer appears and time up! text
    // tally is incremented after each turn
    //when time is up, and answer appears, next question comes up automatically (timer?) no user input
    //after all questions score is displayed with correct/incorrect/unanswered
    //play again button appears when clicked, game restarts
    //restarting game clears out users choices and scores and randomizes
    //questions?
    //watch demo and make sure this happens