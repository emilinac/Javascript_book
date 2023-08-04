// lexical scoping with const
const num = 10;
function firstFun(){
    console.log(1 + num);
}
function secondFunc(){
    const num = 3;
    firstFun();
}
secondFunc();


// re-assigning with var
var love = 'Rocko';
console.log(love);
love = 'Rockster';
console.log(love);

// re-declaring with var
var love = 'Chuggli';
var love = 'Muggli';
console.log(love);

// re-assigning with let
let apples = 'apples';
console.log(apples);
apples = 'pineapples';
console.log(apples);

// re-declaring with let
{
    let apple = 'apple';
    console.log(apples);
}
let apple = 'pineapple';
console.log(apple);

// re-assigning with const is not possible because its only possible is var and let. The value of the property can be changed
const user = {
    name: "Kauress",
    age: 100
}
user.name = "Rocko";
console.log(user.name);

//re-declaring with const can be re-declared outside their current scope just like let
{
    const veggie = 'spinach';
    console.log(veggie);
}
const veggie = 'peas';
console.log(veggie);