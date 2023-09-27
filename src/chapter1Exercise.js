// 1. You should use LET most of the time CONST when you want something to stay the same at all times, and you shouldn't use VAR.
// 2.
// const game = 'Kings Quest';
// game = 'Super Mario';
// console.log(game); // TypeError
// // 3.
// let num1 = 1;
// function foo(){
//     let num1 = 10;
//     console.log(num1); // 10 will be logged
// }
//
// console.log(num1); // 1 will be logged
// foo();
//
// // 4.
// function countI(){
//     for (let i = 0; i<=5; i++){
//         console.log(i); // 0 1 2 3 4 5
//     }
//     console.log("this is" + i); // i is undefined
// }
// countI();
//
// // 5.
// function scoping(){
//     let a = 10;
//     if (a <=10){
//         var b = 5;
//         a = a + 1;
//     }
//     console.log(a); // 11
//     console.log(b); // 5
// }
// scoping()
//
// // 6.
// {
//     let book = 'JavaScript is fun';
//     book = 'JavaScript is fun sometimes';
// }
// let book = 'Python is fun';
// console.log(book); // Python is fun
//
// // 7.
// let outer = function(){
//     if (1<2){
//         var x = 10;
//     }
//     if (2<3){
//         var xSum = 1 + x;
//         console.log(xSum); // 11
//     }
//     function foo (){
//         const z = 1000;
//         console.log(x); //10
//     }
//     foo()
// }
// outer()
//
// // 8.
// let primitive = 'september';
// primitive.vowels = 3;
// primitive.vowels; // undefined
//
// // 9.
// console.log(typeof ('universe')); // string
// console.log(typeof (new String('universe'))); // object
//
// // 10.
// let game = 'Super Mario';
// game.toUpperCase(); // "SUPER MARIO"
// console.log(`This is a great game! ${game}`); // Super Mario
//
// // 11.
// let bigNum = 19393494928383494949505n
// console.log(bigNum.toString());

// Chapter 1.3

// 1.
// let sum = (5 + 8 + 2) * 2;
// console.log(sum); // 30
//
// // 2.
// let cookie = 10;
// console.log(cookie++); // 10
// console.log(cookie); // 11
//
// // 3.
// let cookies = 100;
// console.log(--cookies); // 99
// console.log(cookies); // 99
//
// // 4.
// for (let i = 0; i <= 10; i++){
//     console.log(++i);
// } // 1,3,5,7,9,11
//
// // 5.
// let num1 = 100;
// let num2 = 30;
// let num3 = 80;
// num1 = num2 = num3;
// console.log(num3, num2, num1); // 80, 80, 80
//
// // 6.
// let x = 10;
// let y = 20;
// x+= y*= 3
// console.log(x); // 70
//
// // 7. the first difference is that unlike the == that only requires to have the same value the === also requires to be the same type, like a number.
//
// 8.
// let x;
// let y = 10;
// console.log(x !== y); // true

// 9.
// let x = 0;
// let y = false;
// console.log(x === y); // false
// console.log(x == y); // true
//
// // 10.
// let x = true;
// let y = false;
// console.log(x === y); // false
// console.log(x == y); // false
//
// // 11.
// Symbol() === Symbol(); // false

// 12.
// let a =  true;
// let b = 0;
// let result = a && b;
// console.log(result); // 0

// 13.
// let x = {
//     fruit: 'lemon'
// }
// let y = {
//     juice:'mango'
// }
// console.log(x && y); // { juice: 'mango' }
//
// // 14.
// let username = "Emilina";
// function createUser() {
//     if (username.length >= 6 && username.trim('')) {
//         return true;
//     } else {
//         return false;
//     }
// }
// createUser();

// 15. the invasion !'' is an empty string that ius also a falsy value of true

// 16.
// const x = "null";
// const y = "Bob";
// function logThis(){
//     if (y === "Bob" && !(x)){
//         console.log("msg1");
//     } else{
//         console.log("msg2");
//     }
// }
// logThis() // msg2 will be logged because the message if false
//
// // 17.
// var a = 2;
// var b = 0;
// var c = a || b;
// console.log(c); //2

// 18.
// let user1 = {
//     id: 1
// }
// let user2 = {
//     id: 2
// }
// let user3 = {
//     id: 3
// }
// let x = 10;
// if(x === 10 && typeof(x) === 'number' || !(user1)){
//     console.log(user2 || user3);
// } else{
//     console.log('nope')
// } // id: 2
//
// // 19.
// console.log((undefined || null || 0)); // 0

// 1.3.5

// 1.
// let dessert1 = 'Ice-cream';
// let dessert2 = 'Cupcake';
// let dessert3 = 'Brownie';
// let desserts = `"${dessert1}
// ${dessert2}
// ${dessert3}"`;
// console.log(desserts);
//
// 2.
// let payment = function (){
//     num = 2000;
//     function calculate(){
//         let mortgage = "Your mortgage is ";
//         mortgage += num;
//         console.log(mortgage);
//     }
//         calculate()
//
// }
// payment();

// 1. what will x1 === x2 result in?

// const x1 = 2 * "abc";
// const x2 = 2 * "abc";
// x1 === x2; // false because both x1 and x2 are NaN and NaN cannot equal to itself.
//
// // 2. what will log
//
// console.log(null === undefined); // false
// console.log(null == undefined); // true
//
// // 3. what will log
//
// console.log(null > 0); // false
// console.log(null >= 0); // true
//
// // 4. explain why its false
//
// console.log(undefined > 0); // false. It is false because undefined is a false statement, and therefore it cannot be greater than 0.
//
// // 5. Will statements inside the if block execute?
//
// let x;
// if(x){
//     // will this return true or false
// } // false because there is no statement attached to x
//
// // 6. what will the typeof operator return?
//
// console.log(typeof (1/10)); // number
//
// // 7. Does the following expression evaluate to true or false?
// Number.isNaN(0); // T or F? false

// 1. True or False?

// new Number(0); // false

// 2. Name the 6 values that always evaluate to false/falsy

// '', null, undefined, NaN, 0, false

// 3. True or false?

// 1 == "1" // true
// 1 === "1"; // false

// 4. What will be console.log display in each case?

// console.log(false + 1); // 1
// console.log(false == 0); // true
// console.log(false === 0); // false

// 5. Change the function by adding one symbol only so that "hello world" is logged:

// let a = 1;
// let b = () => {
//     if(!!(a)){
//         console.log("hello world")
//     }
// }
// b(); // I changed the if(!(a)){ to if(!!(a)){

// 6. Filter this array of values for only truthy values:

// const myArr = ["10", 80, true, 0, [], undefined, null, '', NaN]; // const myArr = ["10", 80, true, []];

// 7. Is NaN === NaN true or false and why?

// it is false because NaN cannot be compared to anything and not even itself.

// 8. What values of x and y will be logged to the console?

// let x = 0;
// let y = 1;
// if (!(x) == y) {
//     console.log(x);
// } else {
//     console.log(y);
// } // 0 will be logged

// 1. what does the following code return?

// console.log('41' == 41) // true

// 2. Evaluate the expression 12 * 6 + 'a'. what is its data type?

// the answer is '72a' because once 12 * 6 you get 72 and when you add 72 to a string it becomes a string '72' + 'a' which equals to '72a'

// 3. Evaluate the following. Why do you think the answer is different from question 2?

// let a = 'a' + 4 + 7;
// console.log(a); // 'a47' it is different from question 2 because in question 2 the numbers multiplies but here the string is first and any number after that just get added at the end and no addition is happening.

// 4. Explicitly coerce the boolean value false into a string, using the String() function.

// console.log(String(false)); // "false"

// 1. What does the following return? If the return value is a string data type, explicitly coerce it into a number

// let x = (4 * '4' + +('9')); // "169" will log as a string but in order to change it would have to put it in this format (4 * '4'+ +('9)) then we would get 25 as a number.

// 2. Are the results in A and B different? If so, explain why:

//A.
// console.log(800 + ('8')); // "8008" they are both the same because here there is one string
//B.
// console.log('800' + +('8')); // "8008" they are both the same because here there are 2 strings not just one

// 3.  Re-write the following expression with numerical values instead of booleans and an empty string.

// let x = '';
// let y = true;
// let z = true;
// let result = (x || y <= z); // change to Number((x || y <= z));
// console.log(result) // true before changing to number but 1 after

// 1. Write a function called boolBlazer which:
//  Takes 2 parameters x which is a non-boolean and y which is a boolean
//  Coerce the x parameter by using Number()function
//  Compares x and y using the equality (==) or inequality (!==) operator
//  If the comparison returns true, log the statement 'Is equal'
//  Else if the comparison returns false, log the statement 'Is not equal'
//  Pass the arguments 'hello' and true call the function to execute it.

// function boolBlazer (x,y){
//     if (Number(x) == y){
//         console.log('Is equal');
//     } else {
//         console.log('Is not equal');
//     }
// }
// boolBlazer('hello', true);

// 1. Iterate through the numbers 1 to 10, and at each iteration print i.

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// 2. Iterate through the numbers 1-5, and at each iteration multiply i by 3

// for (let i = 1; i <= 5; i++){
//     console.log(i * 3);
// }

// 3. Can you explain what is happening in the code block below? Notice the semicolon just before the opening curly brace.

// for (var i = 10; i>= 0; i--){
//     console.log(i);
// }

// 4. Analyze the following code, and explain why the for-loop does not execute after the first iteration:

// for (const i = 0; i <= 10; i++) {
//     console.log(i); // 0
// } // the following code does not work because of const, it doesn't allow it.

// 5. A company has a list of employees and their salary in separate arrays.
// You are tasked with the job of printing out the name of each employee
// and the employee’s salary as a string in the format: 'Employee name: Employee salary:'

// let employees = ['Lara', 'Suki', 'Eve', 'Simi', 'Ben', 'Jay'];
// let employeeSalary = [1000, 1300, 957.89, 3230.14, 750, 13900];
// for (let i = 0; i < employees.length; i++){
//     console.log(employees [i] + employeeSalary[i]);
// }

// console.log(employees.length)
// for (let i = 0; i < 6; i++) {
//     console.log(employees[i])
// }
//
// console.log(employeeSalary.length + employees.length);
// console.log(typeof employeeSalary.length)
//
//
// if (employeeSalary.length === employees.length){
//     console.log('Imk cool')
// }
//
// console.log(employees[1])
// console.log(employees.push("Emily"), employeeSalary.push(1000))
//
// for (let i = 0; i < employees.length; i++) {
//     console.log(employees[i] + " " + employeeSalary[i])
// }

// 6. Using a nested for-loop print the following pattern:

// for (let i = 0; i <= 5; i++){
//     for (let j = 0; j <= i; j++){
//         document.write("*");
//     }
//     document.write('<br>');
// }

// 7. Solve for num in the following block of code:

// let num = 0;
// for (let i = 0; i <= 2; i++){
//     for (let k = 0; k <= 2; k++){
//         num ++
//     }
// }
// console.log(num); // 9

// 1. Is the following statement true or false?:
//  A while loop will execute for as till a conditional statement becomes false. // true

// 2. Write the conditional clause in this while loop that will cause the browser window to crash

// let x;
// while (true){
//     console.log("Infinite Loop");
// }

// 3. Write a function called magicBall() that will display 3 random numbers to a user. Use a while loop to complete the code.

// function magicBall(){
//     let chance = 1;
//     while (chance <= 3) {
//         let magicNumber = Math.floor(Math.random() * 11);
//         chance++;
//         console.log(magicNumber)
//     }
// }
// magicBall();


// my own exercises.
// 1. Write a while loop to print numbers from 1 to 10. The program should start at 1 and continue printing numbers until it reaches 10.

// let x = 1;
// while (x <= 10) {
//     console.log(x);
//     x++
// }

// 2. Write a program that uses a while loop to calculate the sum of even numbers from 1 to 20.
// The program should initialize a variable to store the sum, then use a while loop to add the even numbers from 1 to 20 to the sum. Finally, print the sum.

// let number = 1;
// let sum = 0;
//
// while (number <= 20) {
//     if (number % 2 === 0) {
//         sum += number;
//     }
//     number++;
// }
//
// console.log("The sum of even numbers from 1 to 20 is: " + sum);

// 3. Write a  program that calculates the factorial of a given number using a while loop.
// The factorial of a number is the product of all positive integers from 1 to that number.

// steps:
// Ask the user to enter a positive integer (let's call it n).
// Initialize a variable (let's call it result) to 1. This variable will store the factorial value.
// Use a while loop to calculate the factorial. The loop should start at 1 and continue multiplying the result by the current loop variable until the loop variable reaches n.
// Print the factorial value.

// let n = parseInt(prompt('Enter a positive integer:'));
// let results = 1;
//
// let i = 1;
// while (i <= n){
//     results *= i;
//     i++;
// }
//
// console.log(`The factorial value of ${n} is ${results}`);


// 1. Code a do-while loop which will print the number 0, five times.

// let x = 0;
// let times = 0;
//
// do {
//     console.log(x);
//     times++
// }
// while (times < 5);

// 2. Write a do-while loop that will execute once and log a string 'Love and
// Peace' with the conditional x = false. Do not change the value of x inside
// the while statement.

// let x = false;
// do {
//     console.log('Love and Peace');
//     x = true;
// } while (x = false);

// 3. Modify the function in question 2, to infinitely execute a do-while loop. You may change the value of x.

// let x = false;
// do {
//     console.log('Love and Peace');
//     x--
// } while (x <= 0);

// 4. Write a function that takes x as a parameter. x refers to the number of tickets sold
// at a local cinema. Within the body of the function use a do-while loop to inform
// the ticket attendant know how many seats and tickets are available, given a fixed
// number of seats (30)


// function ticketSold(x){
//     let availableSeats = 30;
//     let tickets = x;
//     do {
//         availableSeats--
//         tickets--
//         console.log(`available seats: ${availableSeats}
//         tickets left: ${tickets}`);
//     }while (availableSeats >= 1 && tickets >= 1)
// }
// ticketSold(40);
