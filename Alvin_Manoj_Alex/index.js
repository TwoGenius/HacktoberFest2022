let questions = [
    {
        "qn": "Any qualities, feelings or ideas are referred to be",
        "option1": "Abstract nouns",
        "option2": "Common nouns",
        "option3": "Proper nouns",
        "correct": "option1"
    },
    {
        "qn": "Words like crowd, army, fleet and swarm are called",
        "option1": "Collective nouns",
        "option2": "Abstract nouns",
        "option3": "Proper nouns",
        "correct": "option1"
    },
    {
        "qn": "A _____ of thieves was caught by the police last week",
        "option1": "group",
        "option2": "gang",
        "option3": "bunch",
        "correct": "option2"
    },
    {
        "qn": "A _____ of geese swam in the pond",
        "option1": "gang",
        "option2": "stack",
        "option3": "gaggle",
        "correct": "option3"
    },
    {
        "qn": "A ____ of wolves chased a _____ of deer",
        "option1": "group, cattle",
        "option2": "pack, herd",
        "option3": "union, colony",
        "correct": "option2"
    },
    {
        "qn": "The Australian hockey _____ won the match against Japan by four goals",
        "option1": "group",
        "option2": "bundle",
        "option3": "team of players",
        "correct": "option3"
    },
    {
        "qn": "Our _____ consists of thirty members",
        "option1": "jury",
        "option2": "committee",
        "option3": "union",
        "correct": "option2"
    },
    {
        "qn": "She bought a ______ of flowers for her sister",
        "option1": "bunch",
        "option2": "bundle",
        "option3": "bouquet",
        "correct": "option3"
    },
    {
        "qn": "The woman carried a _____ of sticks on her head",
        "option1": "bundle",
        "option2": "group",
        "option3": "None of the above",
        "correct": "option1"
    },
    {
        "qn": "A _____ of sheep was grazing in the meadows",
        "option1": "flock",
        "option2": "herd",
        "option3": "colony",
        "correct": "option1"
    }
];

var score = 0;
var check = 0;
var i = 0;
var chosen = "";
var correct = "";

$(".btn-option").click(function () {
    chosen = $(this).attr("id");
    // console.log(chosen);
    if (chosen === correct) {
        $("#" + chosen).addClass("btn-correct");
        score++;
        console.log(score);
    }
    else {
        $("#" + chosen).addClass("btn-wrong");
        $("#" + correct).addClass("btn-correct");
    }

});

$(".btn-continue").click(function () {
    resetParameters();
    // k++;
    // console.log("I got clicked");
    if (questions.length == 0) {
        sessionStorage.setItem("finalScore", score);
        $(".next-link").attr("href", "score.html");
    }
    else {
        nextSequence();
    }
});

$(".score-btn").click(function () {
    if (check == 1) {
        $(".back-link").attr("href", "index.html");
    }
    if (check == 0) {
        var finalScore = sessionStorage.getItem("finalScore");
        printScore(finalScore);
        $(".score-ans").removeClass("hide");    
    }
    check = 1;
    endExam();
})

//call the function loadQuestion()
nextSequence();
// loadQuestion(1);

function loadQuestion(k) {
    if (questions.length == 0) {
        $(".btn-continue").text("Finish");
    }

    $(".question-heading").text(k.qn);
    $("#option1").text(k.option1);
    $("#option2").text(k.option2);
    $("#option3").text(k.option3);
    correct = k.correct;
    // console.log(k);
    // return;
}

function resetParameters() {
    // $("#" + chosen).removeClass("btn-correct btn-wrong");
    // $("#" + correct).removeClass("btn-correct");
    $(".btn-option").removeClass("btn-correct btn-wrong");
}

function nextSequence() {
    loadQuestion(questions.pop());
}

function printScore(score) {
    console.log(score);
    if (score <= 4) {
        $(".score-ans").text("You scored " + score + " points. Better luck next time !");
    }
    else if (score > 4 && score <= 9) {
        $(".score-ans").text("Good try ! You scored " + score + " points.");
    }
    else {
        $(".score-ans").text("Amazing ! You scored a perfect " + score + ".");
    }
}

function endExam() {
    $(".score-btn").text("Back to homepage");
}