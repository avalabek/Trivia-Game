var questions = [{
        question: "Which of these is not a mountain range in Spain?",
        choices: ["Sierra Nevada", " Picos de Europa", " Pyrenees", " Alps"],
        correctAnswer: 3
    }, {
        question: "What city has a beach called 'Kite Surf Beach'?",
        choices: ["Dubai", "Sydney", "Dover", "Santa Monica"],
        correctAnswer: 0
    }, {
        question: "The Chesapeake Bay does not run through which of these states?",
        choices: ["Delaware", "Maryland", "Virginia", "New Jersey"],
        correctAnswer: 3
    }, {
        question: "Which four countries surround Lake Chad?",
        choices: ["Chad, Cameroon, Niger, and Nigeria", "Chad, Mali, Sudan, and Gabon", "Chad, Zimbabwe, Somali, and Sierra Leone", "Chad, Togo, Congo, and Ghana"],
        correctAnswer: 0
    },
    {
        question: "What is the largest desert in the world?",
        choices: ["Gobi", "Arabian", "Sahara", "Sonoran"],
        correctAnswer: 2
    },
    {
        question: "Which city in France is the home of Airbus?",
        choices: ["Albi", "Perpignon", "Toulouse", "Carcassone"],
        correctAnswer: 2
    }
]


var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

    // Display the first question
    setInterval(displayCurrentQuestion(),3000);
    $(this).find(".quizMessage").hide();

    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; // Since we have already displayed the first question on DOM ready
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    //                    $(document).find(".nextButton").toggle();
                    //                    $(document).find(".playAgainButton").toggle();
                    // Change the text in the next button to ask if user wants to play again
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

// This displays the current question AND the choices
function displayCurrentQuestion() {

    

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}