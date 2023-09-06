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

// 15. the invasion !('') is an empty string that ius also a falsy value of true

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
//         let mortagage = "Your mortagage is ";
//         mortagage += num;
//         console.log(mortagage);
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

new Number(0); // false

// 2. Name the 6 values that always evaluate to false/falsy

// '', null, undefined, NaN, 0, false

// 3. True or false?

1 == "1" // true
1 === "1"; // false

// 4. What will be console.log display in each case?

console.log(false + 1); // 1
console.log(false == 0); // true
console.log(false === 0); // false

// 5. Change the function by adding one symbol only so that "hello world" is logged:

let a = 1;
let b = () => {
    if(!!(a)){
        console.log("hello world")
    }
}
b(); // I changed the if(!(a)){ to if(!!(a)){

// 6. Filter this array of values for only truthy values:

const myArr = ["10", 80, true, 0, [], undefined, null, '', NaN]; // const myArr = ["10", 80, true, []];

// 7. Is NaN === NaN true or false and why?

// it is false because NaN cannot be compared to anything and not even itself.

// 8. What values of x and y will be logged to the console?

let x = 0;
let y = 1;
if (!(x) == y) {
    console.log(x);
} else {
    console.log(y);
} // 0 will be logged