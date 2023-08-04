// 1. You should use LET most of the time CONST when you want something to stay the same at all times, and you shouldn't use VAR.
// 2.
const game = 'Kings Quest';
game = 'Super Mario';
console.log(game); // TypeError
// 3.
let num1 = 1;
function foo(){
    let num1 = 10;
    console.log(num1); // 10 will be logged
}

console.log(num1); // 1 will be logged
foo();

// 4.
function countI(){
    for (let i = 0; i<=5; i++){
        console.log(i); // 0 1 2 3 4 5
    }
    console.log("this is" + i); // i is undefined
}
countI();

// 5.
function scoping(){
    let a = 10;
    if (a <=10){
        var b = 5;
        a = a + 1;
    }
    console.log(a); // 11
    console.log(b); // 5
}
scoping()

// 6.
{
    let book = 'JavaScript is fun';
    book = 'JavaScript is fun sometimes';
}
let book = 'Python is fun';
console.log(book); // Python is fun

// 7.
let outer = function(){
    if (1<2){
        var x = 10;
    }
    if (2<3){
        var xSum = 1 + x;
        console.log(xSum); // 11
    }
    function foo (){
        const z = 1000;
        console.log(x); //10
    }
    foo()
}
outer()

// 8.
let primitive = 'september';
primitive.vowels = 3;
primitive.vowels; // undefined

// 9.
console.log(typeof ('universe')); // string
console.log(typeof (new String('universe'))); // object

// 10.
let game = 'Super Mario';
game.toUpperCase(); // "SUPER MARIO"
console.log(`This is a great game! ${game}`); // Super Mario

// 11.
let bigNum = 19393494928383494949505n
console.log(bigNum.toString());