var win = 0;
var lose = 0;
var score = 0;
var targetScore = 0;

function getRandom(min, max) {
    var randomNum = Math.floor(Math.random() * max) + min;
    return randomNum
}

function checkGameStatus() {
    console.log("score",score)
    $("#score").text(score)
    console.log("targetScore", targetScore)
    $("#targetScore").text(target)
    if (score > targetScore) {  // lose condition
        alert('You Lose :(')
        lose = lose + 1
        $("#losses").text(lose)
        score = 0
    }

    if (score === targetScore) {
        alert('You Win!')
        win = win + 1
        $("#wins").text(win)
        score = 0
    }
}

var randomCrystalNum = getRandom(1, 10)

var crystal = {
    blue: {
        name: 'Blue',
        value: 0,
    },
    pink: {
        name: 'Pink',
        value: 0
    },
    purple: {
        name: 'Purple',
        value: 0
    },
    red: {
        name: 'Red',
        value: 0
    }
}

crystal.blue = getRandom(1, 12)
crystal.pink = getRandom(1, 12)
crystal.purple = getRandom(1, 12)
crystal.red = getRandom(1, 12)

targetScore = getRandom(19, 120)

$("#blue").click(function () {
    score = score + crystal.blue;
    checkGameStatus()
});

$("#pink").click(function () {
    score = score + crystal.pink;
    checkGameStatus()
});

$("#purple").click(function () {
    score = score + crystal.purple;
    checkGameStatus()
});

$("#red").click(function () {
    score = score + crystal.red;
    checkGameStatus()
});




