
/* ====================================================
   LIÇÃO 1: INTRODUCTION TO JAVASCRIPT
==================================================== */

// 2> Console
// =================================

console.log(48);

console.log(4);

console.log(5);


// 3> Comments
//==================================


// Prints 5 to the console
console.log(5);

console.log(5);  // Prints 5

/*
This is all commented
console.log(10);
None of this is going to run!
console.log(99);
*/

console.log(/*IGNORED!*/ 5);  // Still just prints 5

// the beginning of the book Catch-22 by Joseph Heller.

// Opening Line
console.log('It was love at first sight.');

console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');

/*
 console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.'); 
*/


// 4> Data Types
// ==============================


console.log('Location of Codecademy headquarters: 575 Broadway, New York City');

console.log(40);

console.log('JavaScript')

console.log('JavaScript');

console.log(2011);

console.log('Woohoo! I love to code! #codecademy');

console.log(20.49);


// 5> Arithmetic Operators
// ==================================

console.log(3 + 4); // Prints 7

console.log(5 - 1); // Prints 4

console.log(4 * 2); // Prints 8

console.log(9 / 3); // Prints 3

console.log(11 % 3);  // Prints 2


// 6> String Concatenation
// ==============================


console.log('hi' + 'ya'); // Prints 'hiya'

console.log('wo' + 'ah'); // Prints 'woah'

console.log('I love to ' + 'code.');  // Prints 'I love to code.'

console.log('front ' + 'space'); // Prints 'front space'

console.log('back' + ' space');  // Prints 'back space'

console.log('no' + 'space'); // Prints 'nospace'

console.log('middle' + ' ' + 'space');  // Prints 'middle space'

console.log('One' + ', ' + 'two' + ', ' + 'three!');  // Prints 'One, two, three!'

console.log('Hello' + 'World');

console.log('Hello ' + 'World');


// 7> Properties
// =================================

console.log('Hello'.length); // Prints 5

console.log('Teaching the world how to code'.length);


// 8> Methods
// ====================================

console.log('hello'.toUpperCase()); // Prints 'HELLO'

console.log('Hey'.startsWith('H')); // Prints true

// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

// 9> Built-in Objects
// ==========================

console.log(Math.random()); // Prints a random number between 0 and 1

Math.random() * 50;

console.log(Math.random() * 50);  // To generate a random number between 0 and 50, we could multiply this result by 50

console.log(Math.random() * 100);

console.log(Math.floor(Math.random() * 50));

console.log(Math.floor(Math.random() * 100));

console.log(Math.ceil(43.8));  // resultado= 44

console.log(Number.isInteger(2017));    // resultado = true

// ====================================================
/*   FIM DA LIÇÃO: INTRODUCTION TO JAVASCRIPT
======================================================= */


// ====================================================
/*   LIÇÃO 2: VARIABLES
======================================================= */

// 2> Create a Variable: var
/* =========================== */

var myName = 'Arya';
console.log(myName);
// Output: Arya

var favoriteFood = 'pizza';

var numOfSlices = 8;

console.log(favoriteFood);

console.log(numOfSlices);


// 3> Create a Variable: let
/* =========================== */

let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas

meal = 'Burrito';
console.log(meal); // Output: Burrito


let price;
console.log(price); // Output: undefined

price = 350;
console.log(price); // Output: 350


let changeMe = true;
changeMe = false;
console.log(changeMe);


// 4> Create a Variable: const
/* =========================== */

const myName = 'Gilberto';
console.log(myName); // Output: Gilberto

const entree = 'Enchiladas';
console.log(entree);

// 5> Mathematical Assigment Operators
/* ==================================== */

let w = 4;
w = w + 1;

console.log(w); // Output: 5

let w = 4;
w += 1;

console.log(w); // Output: 5


let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15


let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100


let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4


let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements.
console.log('The value of levelUp:', levelUp);
console.log('The value of powerLevel:', powerLevel);
console.log('The value of multiplyMe:', multiplyMe);
console.log('The value of quarterMe:', quarterMe);


/* 6> The Increment and Decrement Operator
=========================================== */

let a = 10;
a++;
console.log(a); // Output: 11

let b = 20;
b--;
console.log(b); // Output: 19


let gainedDollar = 3;
let lostDollar = 50;

gainedDollar ++;
lostDollar --;

console.log(gainedDollar,lostDollar);

/* 7> String Concatenation with Variables
========================================= */

let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.');
// Output: 'I own a pet armadillo.'

let favoriteAnimal = 'Fefinha'
console.log('My favorite animal: ' + favoriteAnimal);


/* 8> String Interpolation
=========================== */

let myName = 'Alex';
let myCity = 'New York';

console.log(`My name is ${myName}. My favorite city is ${myCity}.`)

/* 9> typeof Operator
====================== */

const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true;
console.log(typeof unknown3); // Output: boolean


let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable); // Output: string

newVariable = 1;
console.log(typeof newVariable);  // Output: number



// ====================================================
/*   LIÇÃO: CONDITIONAL STATEMENTS
======================================================= */


/* 2> The if keyword
======================================== */

if (true) {
    console.log('This message will print!');
  }
  // Prints "This message will print!"



let sale = true;

sale = false;

if (sale) {
  console.log('Time to buy!')
};


/* 3>  If ... Else Statements
======================================== */

if (false) {
    console.log('The code in this block will not run.');
  } else {
    console.log('But the code in this block will!');
  }
  // Prints "But the code in this block will!"

//------------------------------------------------------------

  let sale = true;

  sale = false;

  if(sale) {
    console.log('Time to buy!');
  } else {
    console.log('Time to wait for a sale.');
  }


/* 4>  Comparision Operators
======================================== */

  let hungerLevel = 7;

  if (hungerLevel > 7) {
    console.log('Time to eat!');
  } else {
    console.log('We can eat later!');
  }


  /* 5> Logical Operators
======================================== */

if (stopLight === 'green' && pedestrians === 0) {
    console.log('Go!');
  } else {
    console.log('Stop');
  }


  if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend!');
  } else {
    console.log('Do some work.');
  }

// -------------------------------------------------------

  let excited = true;
  console.log(!excited); // Prints false

  let sleepy = false;
  console.log(!sleepy); // Prints true

  // ---------------------------------------------------

  let mood = 'sleepy';
  let tirednessLevel = 6;

  if (mood === 'sleepy' && tirednessLevel > 8) {
    console.log('time to sleep');
  } else {
      console.log('not bed time yet');
    }

/*    6> Truty and Falsy
=========================== */

let myVariable = 'I Exist!';

if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}

//----------------------------------------------------

let numberOfApples = 0;

if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}

// Prints 'No apples left!'

// ----------------------------------------------------


let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

// -------------------------------------------------------------------

let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// --------------------------------------------------------------------


/* 7>  Truthy And Falsy Assigment
======================================== */

let username;

let defaultName = username || 'Stranger';

console.log(defaultName);


// ----------------------------------------------------------------------

let tool = '';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);


// ----------------------------------------------------------------------

/* 8>  Ternary Operator
======================================== */


let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

// ou

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

// -----------------------------------------------------------------------------------------


let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');


/*  ORIGINAL:
if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}
------------------------------------------------------------------------ */

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

/*  ORIGINAL:
if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}
 ----------------------------------------------------------------------- */

let favoritePhrase = 'Love That!';

(favoritePhrase === 'Love That!') ? console.log('I love that!') :  console.log("I don't love that!");

/*
if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}
---------------------------------------------------------------------------------------------------------- */

/* 8> Else IF Statement
---------------------------- */

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

// -------------------------------------------------------------------------------------

let season = 'summer';

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

/*    10>  The Switch Keyword
----------------------------------------*/

let groceryItem = 'papaya';

if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}

// -----------------------------------------

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
}

// Prints 'Papayas are $1.29'

// -----------------------------------------------

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










