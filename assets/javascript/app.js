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
        choices: ["Santa Monica", "Sydney", "Dubai", "Dover" ],
        correctAnswer: "Dubai"
    }, {
        question: "The Chesapeake Bay does not run through which of these states?",
        choices: ["New Jersey", "Delaware", "Maryland", "Virginia"],
        correctAnswer: "New Jersey"
    }, {
        question: "Which four countries surround Lake Chad?",
        choices: ["Chad, Zimbabwe, Somali, and Sierra Leone","Chad, Cameroon, Niger, and Nigeria", "Chad, Togo, Congo, and Ghana","Chad, Mali, Sudan, and Gabon",],
        correctAnswer: "Chad, Cameroon, Niger, and Nigeria"
    },
    {
        question: "What is the largest desert in the world?",
        choices: ["Sonoran","Arabian","Sahara","Gobi" ],
        correctAnswer: "Sahara"
    },
    {
        question: "Which city in France is the home of Airbus?",
        choices: ["Carcassone", "Perpignon", "Toulouse","Albi" ],
        correctAnswer: "Toulouse"
    }
]
        
        var wins = 0;
        var losses = 0;
        var unanswered = 0;
        var userGuess;
        var correctAnswer;

        // FUNCTIONS
        var startGame;
        var resetGame;
        //var nextQuestion;

        startGame = function() {
           
            $(".question").text(questions[0]["question"]);
            $("#choice1").text(questions[0]["choices"][0]);
            $("#choice2").text(questions[0]["choices"][1]);
            $("#choice3").text(questions[0]["choices"][2]);
            $("#choice4").text(questions[0]["choices"][3]);              
                       
        //countdown timer starts,next question is displayed, old question hidden
        setTimeout(answer, 5000);
            
   //TODO users choice is saved for correct/incorrect tally and unanswered
                   
        };
        answer = function(){
            $("#results").text("The Alps is the correct answer.");
           $("#results").append("<img src='assets/images/alps.jpg' style=>");
           setTimeout(nextQuestion, 5000);
         };

        nextQuestion = function(){
            // correct answer given
            $("#results").hide();
            $(".question").text(questions[1]["question"]);
            $("#choice1").text(questions[1]["choices"][0]);
            $("#choice2").text(questions[1]["choices"][1]);
            $("#choice3").text(questions[1]["choices"][2]);
            $("#choice4").text(questions[1]["choices"][3]);
            // new question appears without user input
            //win/lose/unanswered incremeneted
        setTimeout(nextAnswer,5000)
        
         };
         nextAnswer = function(){
            $("#results").show();
            $("#results").text("Dubai is the correct answer.");
           $("#results").append("<img src='assets/images/albada3.jpg'>");
           setTimeout(nextQuestion3, 5000);
         };

        nextQuestion3 = function(){
            $("#results").hide();
            $(".question").text(questions[2]["question"]);
            $("#choice1").text(questions[2]["choices"][0]);
            $("#choice2").text(questions[2]["choices"][1]);
            $("#choice3").text(questions[2]["choices"][2]);
            $("#choice4").text(questions[2]["choices"][3]);
        setTimeout(nextAnswer3,5000)
        };
        nextAnswer3 = function(){
            $("#results").show();
            $("#results").text("New Jersey is the correct answer.");
           $("#results").append("<img src='assets/images/chesapeake.jpg'>");
           setTimeout(nextQuestion4, 5000);
         };
        nextQuestion4 = function(){
            $("#results").hide();
            $(".question").text(questions[3]["question"]);
            $("#choice1").text(questions[3]["choices"][0]);
            $("#choice2").text(questions[3]["choices"][1]);
            $("#choice3").text(questions[3]["choices"][2]);
            $("#choice4").text(questions[3]["choices"][3]);
        setTimeout(nextAnswer4,5000)
        };
        nextAnswer4 = function(){
            $("#results").show();
            $("#results").text("Chad, Cameroon, Niger, and Nigeria is the correct answer.");
           $("#results").append("<img src='assets/images/alquadra.jpg'>");
           setTimeout(nextQuestion5, 5000);
         };
        nextQuestion5 = function(){
            $("#results").hide();
            $(".question").text(questions[4]["question"]);
            $("#choice1").text(questions[4]["choices"][0]);
            $("#choice2").text(questions[4]["choices"][1]);
            $("#choice3").text(questions[4]["choices"][2]);
            $("#choice4").text(questions[4]["choices"][3]);
        setTimeout(nextAnswer5, 5000)
        };
        nextAnswer5 = function(){
            $("#results").show();
            $("#results").text("The Sahara is the correct answer.");
           $("#results").append("<img src='assets/images/bigred.JPG'>");
           setTimeout(nextQuestion6, 5000);
         };

        nextQuestion6 = function(){
            $("#results").hide();
            $(".question").text(questions[5]["question"]);
            $("#choice1").text(questions[5]["choices"][0]);
            $("#choice2").text(questions[5]["choices"][1]);
            $("#choice3").text(questions[5]["choices"][2]);
            $("#choice4").text(questions[5]["choices"][3]);
        setTimeout(nextAnswer6,5000)
        };
        nextAnswer6 = function(){
            $("#results").show();
            $("#results").text("Toulouse is the correct answer.");
           $("#results").append("<img src='assets/images/toulouse2.jpg'>");
           setTimeout(gameOver, 5000);
         };

        gameOver = function(){
        $("#results").hide();
        $("#results").show();
        $("#results").text("Game over! Click to play again.");
        $(".question").hide(); 
        $("#choice1").hide();
        $("#choice2").hide();
        $("#choice3").hide();
        $("#choice4").hide();
    
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

    