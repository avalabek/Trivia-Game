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



        
        var random;
        var wins = 0;
        var losses = 0;
        var unanswered = 0;
        var userGuess;
        var correctAnswer;


        // FUNCTIONS
        var startGame;
        var resetGame;
        var nextQuestion;
        
        

        startGame = function() {
           // var random = questions[Math.floor(Math.random() * questions.length)];

            $(".question").text(questions[0]["question"]);
            $("#choice1").text(questions[0]["choices"][0]);
            $("#choice2").text(questions[0]["choices"][1]);
            $("#choice3").text(questions[0]["choices"][2]);
            $("#choice4").text(questions[0]["choices"][3]);
        //randomize questions        
        

        //question with answer choices appears, should be hidden before or empty
        // $("#quiz").append(question);
            
        //countdown timer starts 
        setTimeout(nextQuestion, 3000);
        
        //users choice is saved for correct/incorrect tally and unanswered
        
        //next question is displayed, old question hidden
   
            
        };
        nextQuestion = function(){
            // correct answer given
            $(".question").text(questions[1]["question"]);
            $("#choice1").text(questions[1]["choices"][0]);
            $("#choice2").text(questions[1]["choices"][1]);
            $("#choice3").text(questions[1]["choices"][2]);
            $("#choice4").text(questions[1]["choices"][3]);
            // new question appears without user input
            //win/lose/unanswered incremeneted
        setTimeout(nextQuestion3,3000)
        
        };

        nextQuestion3 = function(){
            $(".question").text(questions[2]["question"]);
            $("#choice1").text(questions[2]["choices"][0]);
            $("#choice2").text(questions[2]["choices"][1]);
            $("#choice3").text(questions[2]["choices"][2]);
            $("#choice4").text(questions[2]["choices"][3]);
setTimeout(nextQuestion4,3000)
        };
        nextQuestion4 = function(){
            $(".question").text(questions[3]["question"]);
            $("#choice1").text(questions[3]["choices"][0]);
            $("#choice2").text(questions[3]["choices"][1]);
            $("#choice3").text(questions[3]["choices"][2]);
            $("#choice4").text(questions[3]["choices"][3]);
setTimeout(nextQuestion5,3000)
        };
nextQuestion5 = function(){
            $(".question").text(questions[4]["question"]);
            $("#choice1").text(questions[4]["choices"][0]);
            $("#choice2").text(questions[4]["choices"][1]);
            $("#choice3").text(questions[4]["choices"][2]);
            $("#choice4").text(questions[4]["choices"][3]);
setTimeout(nextQuestion6,3000)
        };
        nextQuestion6 = function(){
            $(".question").text(questions[5]["question"]);
            $("#choice1").text(questions[5]["choices"][0]);
            $("#choice2").text(questions[5]["choices"][1]);
            $("#choice3").text(questions[5]["choices"][2]);
            $("#choice4").text(questions[5]["choices"][3]);
setTimeout(correct,3000)
        };

correct = function(){
    $("#results").append("You lose because you chose nothing. The game didn't let you!")
      }

        resetGame = function() {
            //Resets wins and losses and unanswered counter and restarts timer
            wins = 0;
            losses = 0;
            unanswered = 0;

            

            startGame();
        }

        // EVENT LISTENERS
        $("#play").click(function(){
            startGame();
        })

        $("#next").click(function() {
            nextQuestion();
        })

        // closing jquery from top
});
 

       
        //Now call the function to start the game but when this is active, game breaks right now
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

    