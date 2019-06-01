var win = 0;
var lose = 0;
var score =0;


// psydocode 
// make 4 crystals and a random result
// every crystal should have a number between 1- 12
// The random number shown at the start of the game should be between 19 - 120.
// a new number should generate everytime we win or lose
// the crsytal shoud add the prevoius result until it equals the random result


// random number score
var random_number = Math.floor(Math.random() * 19) + 120;

// random number crystal code
var random_crystal = Math.floor(Math.random() * 11) + 1;


var purplecrystal = random_crystal(1, 12);
var pinkcrystal = random_crystal(1, 12);
var bluecrystal = random_crystal(1, 12);
var redcrystal = random_crystal(1, 12);








// $("#result").html('Random Result: ' + random_result);
// example $("#wins").html(wins)




// for (var i = 0; i < 4; i++) {

//     var crystal = $("<div>");
//     crystal.attr({
//         "class": 'crystal',
//         "data-random": random
//     });
//     crystal.css({
//         "background-image": "url('" + images[i] + "')",
//         "background-size": "cover"
//     });

//     $(".crystals").append(crystal);
// }
// $("#previous").html("Total Score: " + previous);
// }


// resetAndStart();


// // Event Delegation
// $(document).on('click', ".crystal", function () {

//     var num = parseInt($(this).attr('data-random'));

//     previous += num;


//     $("#previous").html("Total score: " + previous);

//     console.log(previous);

//     if (previous > random_result) {

//         lost++;

//         $("#lost").html("You lost: " + lost);

//         previous = 0;

//         resetAndStart();

//     }
//     else if (previous === random_result) {

//         win++;

//         $("#win").html("You win: " + win);

//         previous = 0;

//         resetAndStart();

//     }

// });
