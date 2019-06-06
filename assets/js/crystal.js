var win = 0;
var lose = 0;
var score = 0;
var targetScore = 0;

function getRandom(min, max){
    var randomNum = Math.floor(Math.random() * max) + min;
    return randomNum
}

var randomCrystalNum = getRandom(1, 10)
// console.log(randomCrystalNum)

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




// psydocode 
// make 4 crystals and a random result
// every crystal should have a number between 1- 12
// The random number shown at the start of the game should be between 19 - 120.
// a new number should generate everytime we win or lose
// the crsytal shoud add the prevoius result until it equals the random result


// random number score

// random number crystal code



// var purplecrystal = random_crystal(1, 12);
// var pinkcrystal = random_crystal(1, 12);
// var bluecrystal = random_crystal(1, 12);
// var redcrystal = random_crystal(1, 12);












// $("#result").html('Random Result: ' + random_result);
// example $("#wins").html(wins)


// for (var i = 0; i < 4; i++) {

//     var crystal = $("<div>");
// }




//     console.log(previous);

//         losses++;

//         $("#losses").html("You losses: " + losses);

//     }
//     else if (previous === random_result) {
//         win++;
//         $("#wins").html("You wins: " + win);
//       
//     }

// });
