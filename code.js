// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function subtract(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x-y;
    } else {
        return false;
    }
}
//sayHello() Exercise 1-9
function sayHello(input){
    if (input === undefined || input == true || input == false) {
        return "Hello, World!"
    } else {
        return "Hello, " + input + "!";
    }
    // if (input === "Alex") {
    //     return "Hello, Alex!";
    // } else if (input === "Pat") {
    //     return "Hello, Pat!"
    // }
    // else {
    //     return "Hello, Jane!";
    // }
}
//isFive() Exercise 10
function isFive(num){
    if (typeof num === 'number' && num === 5) {
        return num;
    } else {
        return false;
    }
}
//isEven() Exercise 11
function isEven(num){
    if (num % 2 === 0 && num !== false){
    return true;
    } else {
        return false;
    }
}
//isVowel() Exercise 12
function isVowel(str){
    return str === "a" || str === "e" || str === "i" || str === "o" || str === "u" || str === "A" || str === "E" || str === "I" || str === "O" || str === "U"
}
//add() Exercise 13
function add(x,y) {
    if (!isNaN(x) && !isNaN(y)) {
        return parseFloat(x) + parseFloat(y);
    } else {
        return isNaN;
    }
}