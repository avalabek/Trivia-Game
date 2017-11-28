    // jquery
    $(document).ready(function() {
        //declare functions at top of scripts and declare variables at top of functions
        
        //variables
        //build an empty prototype for questions
        var questions = { question: undefined, choices: undefined, answer: undefined };
        
        //make a constructor for questions prob change this to some other function that is same for all
        function Question(triviaQuestion, possibleChoices, correctAnswer) {
            this.question = triviaQuestion;
            this.choices = possibleChoices;
            this.answer = correctAnswer;
            console.log(triviaQuestion);
            console.log(possibleChoices);
            console.log(correctAnswer);
        }
        var oneQuestion = new Question("Which of these is not a mountain range in Spain?", ["Sierra Nevada", "Picos de Europa", "Pyrenees", "Alps"], 3);
        var twoQuestion = new Question("What city has a beach called 'Kite Surf Beach'?", ["Dubai", "Sydney", "Dover", "Santa Monica"], 2);
        var threeQuestion = new Question("The Chesapeake Bay does not run through which of these states?", ["Delaware", "Maryland", "Virginia", "New Jersey"], 3);
        var fourQuestion = new Question("Which four countries surround Lake Chad?", ["Chad, Cameroon, Niger, and Nigeria", "Chad, Mali, Sudan, and Gabon", "Chad, Zimbabwe, Somali, and Sierra Leone", "Chad, Togo, Congo, and Ghana"], 0);
        var fiveQuestion = new Question("What is the largest desert in the world?", ["Gobi", "Arabian", "Sahara", "Sonoran"], 0);
        var sixQuestion = new Question("Which city in France is the home of Airbus?", ["Albi", "Perpignon", "Toulouse", "Carcassone"], 2);


        Question.prototype = {
            // all of these functions will be available to all of the questions these are dummy functions testing
            // win: function(){alert("You win! You got more right than wrong.")}
            // lose: function(){alert("You lose! You got more wrong than right.")}
                }

        var wins = 0;
        var losses = 0;
        var unanswered = 0;
        var userGuess;
        var correctAnswer;


        // FUNCTIONS
        var startGame;
        var resetGame;


        startGame = function() {
        //User clicks to start game

         //if you want randomized questions:            
         // var random = questions[Math.floor(Math.random() * questions.length)];
        
        //question with answer choices appears
        $("#quiz").append(question);
            
        //countdown timer starts 
        
        //users choice is saved for correct/incorrect tally and unanswered
        
        //next question is displayed, old question hidden
   
            
        };
        nextQuestion = function(){
            // correct answer given
            // new question appears without user input
            //win/lose/unanswered incremeneted
        }

        resetGame = function() {
            //Resets wins and losses and unanswered counter and restarts timer
            wins = 0;
            losses = 0;
            unanswered = 0;

            

            startGame();
        }

        // EVENT LISTENERS


        $("#next").click(function() {
            nextQuestion();
        })


            
        
            // increment counters based on win/lose/unanswered
            // if (userGuess===correct answer) how do i tell it the answer for each one?{
            //     win++ 
            // }

            // else(userGuess !==correctAnswer){
            //     lose++
            // }
            // else (the input ===no imput){
            //     unanswered++
            // }

            
            // update counter on HTML
            // $("#score").text(counter);

            // check win or loss how do i do this? 
            if (userGuess === correctAnswer) {
                $("#results").text("You win!").css("color", "blue");
                ++wins;
                $("#wins").text(wins);
//also show picture

                $("#results").on('click', function() {
                    $("#score").text("");

                    resetGame();
                    
                })

            } else if (userGuess===correctAnswer) {

                $("#winOrLose").text("You lose! Click here to play again.").css("color", "red");
                ++losses;
                $("#losses").text(losses);


                $("#winOrLose").on('click', function() {
                    $("#score").text("");
                    resetGame();
                    //location.reload();

                })
            }
        });
        //Now call the function to start the game
        startGame();
    
    
    



    
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