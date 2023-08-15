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