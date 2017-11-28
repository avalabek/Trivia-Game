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
        }
        var oneQuestion = new Question("Which of these is not a mountain range in Spain?", ["Sierra Nevada", "Picos de Europa", "Pyrenees", "Alps"], 3);
        var twoQuestion = new Question("What city has a beach called 'Kite Surf Beach'?", ["Dubai", "Sydney", "Dover", "Santa Monica"], 2);
        var threeQuestion = new Question("The Chesapeake Bay does not run through which of these states?", ["Delaware", "Maryland", "Virginia", "New Jersey"], 3);
        var fourQuestion = new Question("Which four countries surround Lake Chad?", ["Chad, Cameroon, Niger, and Nigeria", "Chad, Mali, Sudan, and Gabon", "Chad, Zimbabwe, Somali, and Sierra Leone", "Chad, Togo, Congo, and Ghana"], 0);
        var fiveQuestion = new Question("What is the largest desert in the world?", ["Gobi", "Arabian", "Sahara", "Sonoran"], 0);
        var sixQuestion = new Question("Which city in France is the home of Airbus?", ["Albi", "Perpignon", "Toulouse", "Carcassone"], 2);


        Question.prototype = {
            // win: function(){alert("You win! You got more right than wrong.")}
            // lose: function(){alert("You lose! You got more wrong than right.")};
        }

        var wins = 0;
        var losses = 0;
        var unanswered = 0;


        // FUNCTIONS
        var startGame;
        var resetGame;


        startGame = function() {
            
            // var random = questions[Math.floor(Math.random() * questions.length)];

            $("#quiz").text(random);
            
        };


        resetGame = function() {
            wins = 0;
            losses = 0;
            unanswered = 0;

            $("#results").text("");

            startGame();
        }

        // EVENT LISTENERS
        $(".btn").on("click", function() {
            // what happens when a crystal is clicked
            var crystalValue = $(this).attr("crystal-value");
            //make the string into integer
            crystalValue = parseInt(crystalValue);

            // update counter by adding crystalValue s
            counter += crystalValue;

            // update counter on HTML
            $("#score").text(counter);

            // check win or loss
            if (counter === targetNumber) {
                $("#winOrLose").text("You win!").css("color", "blue");
                ++wins;
                $("#wins").text(wins);


                $("#winOrLose").on('click', function() {
                    $("#score").text("");

                    resetGame();
                    // location.reload();
                })

            } else if (counter > targetNumber) {

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
    });
    // from hangman
    var wordBank = ["havana", "beruit", "oslo", "istanbul", "nice", "granada", "copenhagen", "oaxaca", "reykjavik", "zagreb", "zurich", "bratislava", "budapest"];

    var city = wordBank[Math.floor(Math.random() * wordBank.length)];

    //array to hold blanks equal to city  length
    var answerArray = [];
    for (var i = 0; i < city.length; i++) {
        answerArray[i] = "_";
    }

    var reload;
    var gameOver;

    var guessCount;

    var correctLetters = 0;
    // Creating variables to hold the number of wins. They start at 0.right now have losses in but will delete once working
    // var wins = 0;

    var guessesLeft = 15;
    //so once you get reload to work use this code with changing consolelog to calling the reload function

    document.onkeyup = function(event) {

        //determines which key was pressed.
        var userGuess = event.key;

        //isn't working as userGuess changes with each guess
        var lettersPicked = [userGuess + " "];
        lettersPicked.push(userGuess)




    }
    //User clicks to start game

    //question with answer choices appears
    //countdown timer starts 
    //users choice is saved for correct/incorrect tally and unanswered
    //next question is displayed, old question hidden
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