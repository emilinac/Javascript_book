// Chapter 1.2 learning
// // lexical scoping with const
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
// var love = 'Rocko';
// console.log(love);
// love = 'Rockster';
// console.log(love);
//
// // re-declaring with var
// var love = 'Chuggli';
// var love = 'Muggli';
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
//     name: "Kauress",
//     age: 100
// }
// user.name = "Rocko";
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

// There are 7 data types string, number, biglnt(ES6), boolean, null, undefined, symbol(ES6)

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
// user.name = 'Rocko';
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