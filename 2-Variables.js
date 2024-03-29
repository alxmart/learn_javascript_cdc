
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
console.log(changeMe); // Output: false


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
console.log(gainedDollar,lostDollar);  // Output: 4 49


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


let newVariable;
console.log(typeof newVariable);  // Output: undefined

newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);     // Output: string

newVariable = 1;
console.log(typeof newVariable);    // Output: number





