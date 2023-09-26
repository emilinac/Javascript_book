// Chapter 1.2 learning
// // lexical scoping with const,
// const num = 10;
// function firstFun(){
//     console.log(1 + num);
// }
// function secondFunc(){
//     const num = 3;
//     firstFun();
// }
// secondFunc();
//
//
// // re-assigning with var
// var love = 'Rock';
// console.log(love);
// love = 'Rockstar';
// console.log(love);
//
// // re-declaring with var
// var love = 'Chugging';
// var love = 'Muggle';
// console.log(love);
//
// // re-assigning with let
// let apples = 'apples';
// console.log(apples);
// apples = 'pineapples';
// console.log(apples);
//
// // re-declaring with let
// {
//     let apple = 'apple';
//     console.log(apples);
// }
// let apple = 'pineapple';
// console.log(apple);
//
// // re-assigning with const is not possible because its only possible is var and let. The value of the property can be changed
// const user = {
//     name: "kansas",
//     age: 100
// }
// user.name = "Rock";
// console.log(user.name);
//
// //re-declaring with const can be re-declared outside their current scope just like let
// {
//     const veggie = 'spinach';
//     console.log(veggie);
// }
// const veggie = 'peas';
// console.log(veggie);

// Primitive data type

// Immutability

// let game = 'Super Mario';
// game.toUpperCase();
// console.log(game);

// copy by value
// let a = 10;
// let b = a;
// a = 100;
// console.log(b);

// There are 7 data types string, number, bigint(ES6), boolean, null, undefined, symbol(ES6)

// let num1 = new Number(1);
// let num2 = num1 + 2;
// console.log(num2);
// console.log(typeof(num1));
// console.log(typeof(num2));
//
// let universe = "universe";
// universe.toUpperCase();
// universe.length;

// non-primitive data types

// let user ={
//     role:'developer'
// }
// user.employed= true;
// user.name = 'Rock';
// console.log(user);

// Chapter 1.3 learning

// Arithmetic operators

// let x = 2 + 3 * 6;
// x = 2 + 18;
// x = 20;

// associative operators

// let num1 = 100;
// let num2 = 30;
// let num3 = 80;
// let num = num1 - num2 + num3;
//
// // Strict equality (===) and strict inequality (!==) operators
//
// let num1 = 10;
// let num2 = "10";
// typeof (num1); // number
// typeof (num2); // string
// num1 === num2; // false
// num1 !== num2; // true
//
// // Loose equality (==) and inequality (!=) operators
//
// let num1 = 10;
// let num2 = "10";
// console.log(num1 == num2); // true
// console.log(num1 != num2); // false
// console.log("Hello");
//

// Logical NOT(!)
// if (!(2 === 'two')){
//     console.log('2 is not strictly equal to two');
// }
//
// // Logical AND (&&)
// let user1 = ''; // empty strings are falsy values
// let user2 = 'TJ';
// console.log(user1 && user2);// "" the log is empty
//
// let num1 = 10;
// let num2 = 20;
// let a = 1;
// let b = 2;
// if (num1 < num2 && a < b){
//     console.log(true);
// } else {
//     console.log(false);
// }
//
// // Logical OR ||
// let breakfast = true;
// let dinner = false;
// console.log(breakfast || dinner); // true will log
//
// let x = false;
// let y = false;
// let z = 0;
// console.log(x || y || z); // 0 will log

// Concatenation with the addition operator
// let firstName1 = 'Jyoti';
// let lastName1 = 'TJ';
// let greeting1 = 'Hello,' + ' ' + firstName1 + ' ' + lastName1 + ' Welcome!';
// console.log(greeting1); // Hello, Jyoti TJ Welcome!
//
//
// let firstName2 = 'Jyoti';
// let lastName2 = 'TJ';
// let greeting2 = 'Hello, Welcome ';
// greeting2 += firstName2 + ' and ' + lastName2;
// console.log(greeting2); // Hello, Welcome Jyoti and TJ
//
// let num = 30;
// let score = "The score is ";
// score += num;
// console.log(score); // The score is 30
//
// // Template literals
//
// let firstName3 = 'Jyoti';
// let lastName3 = 'TJ';
// let greetings3 = `Hello ${firstName3} ${lastName3} Welcome!`
// console.log(greetings3); // Hello Jyoti TJ Welcome!
//
// let firstName4 = 'Jyoti';
// let lastName4 = 'TJ';
// let fullGreeting = `Hello
// ${firstName4}
// ${lastName4}
// Welcome!`;
// console.log(fullGreeting);
//
// // Void Operator
//
// console.log(void 0); // undefined
//
// <a href="javascript:void(0);" onClick="alert('Page would not reload.')">Hello!</a>
//
// console.log(void 2 == '2'); // false
// console.log(void (2 == '2')); // undefined
//
// // Typeof operator
//
// let users = 10;
// let planet = 'Earth';
// let teamMember = {};
// console.log(typeof (users)); // "number"
// console.log(typeof (planet)); // "string"
// console.log(typeof (teamMember)); // "object"
//
// let nope = null;
// if (nope === null){
//     console.log("null value"); // "null value"
// }
// // simplified
//
// let nope = null;
// console.log(nope); // null
//
// // Typeof Undefined
//
// let x;
// if (x) {
//     console.log(x);
// } else {
//     console.log('Not assigned a value'); // Not assigned a value will be logged
// }
//
// // simplified
// let x;
// console.log(x); // undefined
//
// // typeof being used
// let x;
// if (typeof (x) === 'undefined'){
//     console.log('x is undefined'); // condition is fulfilled
// } else {
//     console.log(' x has a value'); // condition is not fulfilled
// }
//
// // Checking for null and undefined
//
// let y;
// if (typeof y === 'undefined' || y === null) {
//     console.log('y is either undefined or null')
// }else{
//     console.log('y is neither undefined or null')
// }// y is either undefined of null
//
// // Nullish coalescing operator
// const doesExist = 100 ?? null;
// console.log(doesExist); // 100
//
// let num1;
// let num2 = 90;
// console.log(num1 ?? num2);

// console.log(typeof (NaN)); // number
// console.log(0 % 0); // NaN
// let infinity;
// console.log(infinity % infinity); // NaN
// console.log('apples'* 2); // NaN
// console.log(NaN * 2); // NaN
// console.log(null > 0); // NaN
//
// // checking for NaN
// console.log(Number.isNaN(NaN)); // true
// console.log(Number.isNaN(0/0)); // true
// Number.isNaN(Number.NaN); // true
//
// Number.isNaN(20); // false because 20 is a number
// Number.isNaN("hello"); // false because hello is not a number datatype
// Number.isNaN('123')

// 1.3.8 Comparison

// there are 6 falsy values.  '' empty string, 0, false, null, undefined, NaN. everything else will be truthy. 'false', '10', [] an empty array, {} an empty object, function() an empty function.

// if (!(variable)){
    // statement will execute as !(false) is true
// }

// Boolean ({}) // true
// Boolean ([]) // true
// let foo = () => {};
// Boolean (foo); // true
//
// let a = ""; // false
// let b = 0; // false
// let c = []; // true
// console.log(!!(a)); // false
// console.log(!!(b)); // false
// console.log(!!(c)); // true
//
// console.log(null == undefined); // true
// console.log(null == null); // true
// console.log(undefined == undefined); // true
//
// console.log(0 == false); // true
// console.log("" == 0); // true
// console.log("" == false); // true
//
// console.log([] == false); // will return true
// console.log([] == true); // will return false
//
// console.log(false === "") // false
// console.log("" === false) // false
// console.log(null === undefined) // false
// console.log(infinity === infinity); // true
// console.log(false === false); // true
// console.log(true === true); // true

// console.log(1+ +('123')); // 124
// console.log(2 * '9'); // 18
// console.log(1 / 'one'); // NaN
// console.log(1 - true); // 0 because in this case true is = to 1 so 1-1=0 if in case was 2 then it would be 2-1=1
// console.log(1 >= false); //true
// console.log(0 == false); // true


// console.log(Number("10") + 1); // 11
// console.log(Number(true)); // 1
// console.log(Number(false)>= 0); // true

// let x =  null;
// console.log(Number(x)); // 0

// let y = NaN;
// console.log(Number(y)); // NaN because it cannot be converted

// let z = '';
// console.log(Number(z)); // 0

// Boolean coercion

// console.log('Hello World!' == true); // false
// console.log('false' == false); // false
// console.log('' == false); // true
//
// console.log(Boolean('Nintendo')); // true
// console.log(Boolean(0)); // false
// console.log(Boolean({})); // true
//
// console.log(Boolean('Nintendo') <= 10); // true because nintendo is a boolean and the boolean is considered to be 1

// for (let i = 10; i >= 0; i--){
//     console.log(i);
// }
//
// for (let i = 0; i <= 3; i++){
//     for (let j = 0; j <= 2; j++){
//         console.log('Inner loop value of j:' + j);
//     }
//     console.log('Outer loop value of i:' + i);
// }

// let x = 0;
// while(x <= 3){
//     console.log(x);
//     x++
// }

// while (true){
//     console.log('on no! This loop will crash your browser!')
// }

// let loading = 0;
// while (loading <= 100){
//     console.log(`The website is still loading! It is curently at ${loading}%`)
//     loading++
// }
// console.log('The website finaly loaded!')
//
// for (let i = 5; i >= 1; i--){
//     if (i % 2 !== 0){
//         console.log(i);
//
//     }
//     console.log(i);
// }

// do while statements

function ticketCount(x){
    do {
        console.log(`The number of available tickets  left are ${x}`);
        x--
    }
    while (x >= 0);
}
ticketCount(10);