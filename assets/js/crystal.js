var win = 0;
var lose = 0;
var score = 0;
var targetScore = 0;

function getRandom(min, max) {
    var randomNum = Math.floor(Math.random() * max) + min;
    return randomNum
}

var randomCrystalNum = getRandom(1, 10)
// console.log(randomCrystalNum)
function checkGameStatus() {
    // console.log("score",score) [run above]
    $("#score").text(score)

    if (score > targetScore) {  // lose condition
        alert('You Lose :(')
        lose = lose + 1
        $("#losses").text(lose)
        score = 0
        // add code that reset the crystal value and the target score
        crystal.blue = getRandom(1, 12)
        crystal.pink = getRandom(1, 12)
        crystal.purple = getRandom(1, 12)
        crystal.red = getRandom(1, 12)
        targetScore = getRandom(100, 225); 
        $("#target").text(targetScore)

    }

    if (score === targetScore) {
        alert('You Win!')
        win = win + 1
        $("#wins").text(win)
        score = 0
        // add code that reset the crystal value and the target score
        crystal.blue = getRandom(1, 12)
        crystal.pink = getRandom(1, 12)
        crystal.purple = getRandom(1, 12)
        crystal.red = getRandom(1, 12)
        targetScore = getRandom(100, 225); 
        $("#target").text(targetScore)
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
targetScore = getRandom(1,12)
// console.log(crystal.red)
// console.log(crystal.pink)
// console.log(crystal.purple)
// console.log(crystal.blue)
// console.log(targetScore)

$("#blue").click(function(){
    // console.log("blue's been clicked");
});
$("#pink").click(function(){
    // console.log("pink's been clicked");
});
$("#purple").click(function(){
    // console.log("purple's been clicked");
});
$("#red").click(function(){
    // console.log("red's been clicked");
});



targetScore = getRandom(19, 120)

// render
$("#target").text(targetScore)

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




