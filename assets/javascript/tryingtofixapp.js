// jquery
$(document).ready(function() {
    //declare functions at top of scripts and declare variables at top of functions

    //variables
    var game = new Game();
    // console.log(Game);
    var userGuess;
    var gameOver = false;
    //build an empty prototype for questions
    var questions = { question: undefined, choices: undefined, answer: undefined };

    //make a constructor for questions prob change this to some other function that is same for all
    function Question(triviaQuestion, possibleChoices, correctAnswer) {
        this.question = triviaQuestion;
        this.choices = possibleChoices;
        this.answer = correctAnswer;
        // console.log(triviaQuestion);
        // console.log(possibleChoices);
        // console.log(correctAnswer); //these don't work

    }

    Question.prototype = {
        // all of these functions will be available to all of the questions these are dummy functions testing 
        // win: function(){alert("You win! You got more right than wrong.");}
        //lose: function(){alert("You lose! You got more wrong than right.");}

    };

    function Game() {
        this.correct;
        this.wrong;
        this.currentQuestion;
        this.questions = [];
        this.questionTimer;
        this.answerTimer;
    }

    Game.prototype = {
        startGame: function() {
            // initialize game values
            this.correct = 0;
            this.wrong = 0;
            this.currentQuestion = 0; // first question in array

            // add questions to array
            this.questions[this.currentQuestion].question.push(new Question("Which of these is not a mountain range in Spain?", ["Sierra Nevada", "Picos de Europa", "Pyrenees", "Alps"], 3));
            this.questions[this.currentQuestion].question.push(new Question("What city has a beach called 'Kite Surf Beach'?", ["Dubai", "Sydney", "Dover", "Santa Monica"], 2));
            this.questions[this.currentQuestion].question.push(new Question("The Chesapeake Bay does not run through which of these states?", ["Delaware", "Maryland", "Virginia", "New Jersey"], 3));
            this.questions[this.currentQuestion].question.push(new Question("Which four countries surround Lake Chad?", ["Chad, Cameroon, Niger, and Nigeria", "Chad, Mali, Sudan, and Gabon", "Chad, Zimbabwe, Somali, and Sierra Leone", "Chad, Togo, Congo, and Ghana"], 0));
            this.questions[this.currentQuestion].question.push(new Question("What is the largest desert in the world?", ["Gobi", "Arabian", "Sahara", "Sonoran"], 0));
            this.questions[this.currentQuestion].question.push(new Question("Which city in France is the home of Airbus?", ["Albi", "Perpignon", "Toulouse", "Carcassone"], 2));

            // display first question
            this.showQuestion();



            //next question is displayed, old question hidden
            showQuestion();

        },

        showQuestion: function() {

            //question with answer choices appears
            $(".question").text(this.questions[this.currentQuestion].question);
            $("#answer1").text(this.questions[this.currentQuestion].choices[0]);
            $("#answer2").text(this.questions[this.currentQuestion].choices[1]);
            $("#answer3").text(this.questions[this.currentQuestion].choices[2]);
            $("#answer4").text(this.questions[this.currentQuestion].choices[3]);


            //starts timer for user to answer one question
            questionTimer = setTimeout(showAnswer, 3000);
        },

        showAnswer: function() {
            // console.log(game);
            $("#results").text("The correct answer is " + game.questions[game.currentQuestion].answer + ".");

            // increment currentQuestion
            currentQuestion++;

            // show next question
            answerTimer = setTimeout(showQuestion, 3000);
            //users choice is saved for correct/incorrect tally and unanswered
            if (data-choice === this.questions[this.currentQuestion].answer) {
                correct++;
            } else {
                wrong++;
            }
            $("#tally").text("You got " + correct + "questions correct and " + wrong + "questions wrong.");
        }
    }



    //     startGame();
    // }

    // EVENT LISTENERS

    //User clicks to start game
    $("#play").click(function() {
        //Now call the function to start the game
        game.startGame();
    });

    // user clicks one of the answers
    $(".answer").click(function() {
        game.showAnswer();

    });

    // TESTING TO SEE IF TEXT GOES IN BUTTONS CORRECTLY:WORKS
    // $(".question").text("questions here");
    // $("#answer1").text("and how about this?");
    // $("#answer2").text("and how about this?");
    // $("#answer3").text("and how about this?");
    // $("#answer4").text("and how about this?");


    
});









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