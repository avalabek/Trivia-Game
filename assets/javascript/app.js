// jquery
$(document).ready(function() {
    //declare functions at top of scripts and declare variables at top of functions

    //variables
        
    var userGuess;
    var gameOver = false;
    var currentQuestion;
    var wrong = 0;
    var correct = 0;

    //build an empty prototype for questions
    var questions = { question: undefined, choices: undefined, answer: undefined, photo: undefined};

    //make a constructor for questions prob change this to some other function that is same for all
    function Question(triviaQuestion, possibleChoices, correctAnswer, pictureURL) {
        this.question = triviaQuestion;
        this.choices = possibleChoices;
        this.answer = correctAnswer;
        this.photo = pictureURL;
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


            
            // // //     // add questions to array
             this.questions.push(new Question("Which of these is not a mountain range in Spain?", ["Sierra Nevada", "Picos de Europa", "Pyrenees", "Alps"], "Alps","<img src='assets/images/alps.jpg'>"));
             this.questions.push(new Question("What city has a beach called 'Kite Surf Beach'?", ["Dubai", "Sydney", "Dover", "Santa Monica"], "Dubai", "<img src='assets/images/albadaa.jpg'>"));
             this.questions.push(new Question("The Chesapeake Bay does not run through which of these states?", ["Delaware", "Maryland", "Virginia", "New Jersey"], "New Jersey","<img src='assets/images/chesapeake.jpg'>" ));
             this.questions.push(new Question("Which four countries surround Lake Chad?", ["Chad, Cameroon, Niger, and Nigeria", "Chad, Mali, Sudan, and Gabon", "Chad, Zimbabwe, Somali, and Sierra Leone", "Chad, Togo, Congo, and Ghana"], "Chad,Cameroon,Niger, and Nigeria", "<img src='assets/images/alquadra.jpg'>"));
             this.questions.push(new Question("What is the largest desert in the world?", ["Gobi", "Arabian", "Sahara", "Sonoran"], "Sahara","<img src='assets/images/bigred.jpg'>"));
             this.questions.push(new Question("Which city in France is the home of Airbus?", ["Albi", "Perpignon", "Toulouse", "Carcassone"], "Toulouse", "<img src='assets/images/toulouse.jpg'>"));

            // display first question
            
            setInterval(this.showQuestion(), 3000);
         var numChoices = this.questions[this.currentQuestion].choices.length;
    var choice;
    for (vari = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        this.startGame();
        }


        },


        showQuestion: function() {

            // question with answer choices appears

            $(".question").text(this.questions[this.currentQuestion].question);
            $("#answer1").text(this.questions[this.currentQuestion].choices[0]);
            $("#answer2").text(this.questions[this.currentQuestion].choices[1]);
            $("#answer3").text(this.questions[this.currentQuestion].choices[2]);
            $("#answer4").text(this.questions[this.currentQuestion].choices[3]);
            
            //starts timer for user to answer one question
            questionTimer = setInterval(this.showAnswer, 2000);
            
        },

        showAnswer: function() {
            // console.log(game);
            clearTimer = clearInterval(questionTimer)
            $("#results").text("The correct answer is " + game.questions[game.currentQuestion].answer + ".");
            $("#results").append(this.questions[this.currentQuestion].photo);

            // increment currentQuestion
            currentQuestion++;

            // show next question
            answerTimer = setInterval(this.showQuestion, 2000);
            //users choice is saved for correct/incorrect tally and unanswered
            if (("data-choice") == this.questions[this.currentQuestion].answer) {
                correct++;
            } else {
                wrong++;
            }
            $("#tally").text("You got " + correct + " questions correct and " + wrong + " questions wrong.");
            this.showQuestion();
        }

    };



    //     startGame();
    // }

    // EVENT LISTENERS
var game = new Game();
    //User clicks to start game
    $("#play").click(function() {
        console.log(game);
        //Now call the function to start the game
        game.startGame();
    });

    // user clicks one of the answers
    $(".answer").click(function() {
        alert("You picked the wrong answer.");
        game.showAnswer();

    });

    


});