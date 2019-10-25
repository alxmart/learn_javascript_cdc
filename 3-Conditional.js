
if (true) {
    console.log('This message will print!');
}  // Prints "This message will print!"

//------------------------------------------------------

let sale = true;

// sale = false;

if (sale) {
  console.log('Time to buy!')
};

// -----------------------------------------------------

if (false) {
    console.log('The code in this block will not run.');
  } else {
    console.log('But the code in this block will!');
  }
  // Prints "But the code in this block will!" 

// -------------------------------------------------------

let sale = true;

sale = false;

if (sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}

// ------------------------------------------------------

10 < 12 // Evaluates to true

// ------------------------------------------------------

'apples' === 'oranges' // false

// ------------------------------------------------------

let hungerLevel = 7;

if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}
//-------------------------------------------------------

stopLight = 'green';
pedestrians = 1;

if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}

// -------------------------------------------------------

day = 'Saturday';

if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}

//--------------------------------------------------------

let excited = true;
console.log(!excited); // Prints false

let sleepy = false;
console.log(!sleepy); // Prints true

//---------------------------------------------------------

let mood = 'sleepy';
let tirednessLevel = 5

if (mood === 'sleepy' && tirednessLevel > 8) {
    console.log('time to sleep');
} else {
    console.log('not bed time yet');
}
 
//----------------------------------------------------

let myVariable = 'I Exist!';

if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}

//---------------------------------------------------

let numberOfApples = 0;

if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}

// Prints 'No apples left!'

//------------------------------------------------


let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}
//Output: Great! You've started your work! (TRUTHY)

//---------------------------------------------------

let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
// This string is definitely empty.  (FALSY)

//------------------------------------------------------
username = '';
//username = 'Homer';

let defaultName;

if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

console.log(defaultName);
//------------------------------------------------------

username = '';

let defaultName = username || 'Stranger';

console.log(defaultName);

// short-circuit evaluation.
//---------------------------------------------------


let tool = '';
// Use short circuit evaluation to assign  writingUtensil 
// variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

//-----------------------------------------------------

let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}
//   OU  fazer assim:

let isNightTime = false;

isNightTime ? console.log('Turn on the lights!')
            : console.log('Turn off the lights!');

//------------------------------------------------------

/*  ORIGINAL:
if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}
*/
let isLocked = false;
isLocked ? console.log('You will need a key to open the door.') 
         : console.log('You will not need a key to open the door.');
//----------------------------------------------------------------

/*  ORIGINAL:
if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}
*/
let isCorrect = true;
isCorrect ? console.log('Correct!')
          : console.log('Incorrect!');
//---------------------------------------------
/* ORIGINAL:
if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}
*/
let favoritePhrase = 'Love That!';
(favoritePhrase === 'Love That!') ? console.log('I love that!') 
                                  : console.log("I don't love that!");

// -------------------------------------------------------

let stopLight = 'yellow';

if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}
//----------------------------------------------------


let season = 'spring';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}
// -------------------------------------------------------

let groceryItem = 'papaya';

if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}

// ------------------------------------------------
let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}  // Prints 'Papayas are $1.29'

// ------------------------------------------------------

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {

  case 'first place':
    console.log('You get the gold medal!');
    break;

  case 'second place':
    console.log('You get the silver medal!');
    break;
    
  case 'third place':
    console.log('You get the bronze medal!');
    break;

  default:
    console.log('No medal awarded.');
    break;
}

// ---------------------------------------------------













