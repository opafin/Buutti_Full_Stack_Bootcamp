// === equal to
// !== not equal to
// < less than
// > greater than
// <= less than or equal to
// >= greater than or equal to

//don't use == or !=

// === and !== check for value and type
// == and != check for value only

//defined as falsy : false, 0, -0, ´´´´, undefined and NaN

if (console.log("wt")) {
  console.log(true);
} else console.log(false);

// class Mark {
//    isHappy
// }

// class Suzy {
//    isHappy
// }

// mark = new Mark();
// suzy = new Suzy();

let markIsHappy;
let sunIsShining;
let suzyIsHappy;
let isBeachDay;
let playerCount = 2;

let notStressed = true;
let hasIceCream = true;
if (notStressed || hasIceCream) {
  markIsHappy = true;
  playerCount++;
}

let isShining = true;
let notRaining = true;
let temperature = 20;
if (isShining && notRaining && temperature >= 20) isBeachDay = true;

let weekdayIsTuesday = true;
let seesDan = false;
let seesSuzy = true;
if (
  (seesSally && !seesDan && weekdayIsTuesday) ||
  (seesDan && !seesSally && weekdayIsTuesday)
) {
  suzyIsHappy = true;
  playerCount++;
}

//could also use the ternary operator
suzyIsHappy = seesSally != seesDan && weekdayIsTuesday ? true : false;

//so are all the criteria met?
//yes! let's play!

if (
  playerCount === 4 &&
  markIsHappy &&
  isShining &&
  notRaining &&
  temperature >= 20 &&
  suzyIsHappy
)
  console.log("Let's play!");
