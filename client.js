console.log('JS sourced');

function reverseString(array) {
    let reversedString = "";
    for (let i = array.length - 1; i >= 0; i --) {
        reversedString += array[i];
    } console.log(reversedString);
}

reverseString('hello world');
reverseString('cat');

function takeNumber(number){
    if(number % 3 === 0 && number % 5 === 0){
        return "FizzBuzz";
    }else if (number % 3 === 0){
        return "Fizz";
    }else if(number % 5 === 0){
        return "Buzz";
    }else{
       return number;
    }
}

console.log("Divisible by 3",takeNumber(6));
console.log("Divisible by 5",takeNumber(10));
console.log("Divisible by 3 & 5", takeNumber(15));
console.log("Not divisible by 3 nor 5", takeNumber(16));


function leapYearTest(number) {
    if (number % 400 === 0) {
        return true;
    } else if (number % 100 === 0){
        return false
    } else if (number % 4 === 0){
        return true
    } else {
        return false

    }
}

console.log(leapYearTest(100));
console.log(leapYearTest(4));
console.log(leapYearTest(400));
console.log(leapYearTest(2023));
console.log(leapYearTest(1999));
console.log(leapYearTest(2004));
console.log(leapYearTest(2100));
console.log(leapYearTest(2000));

function testLeapYear(number) {
    if (number % 4 === 0  && number % 100 !== 0) {
        return true; 
    } else if 
        (number % 400 === 0) {
            return true;
        } else {
            return false;
        }
    }

console.log(testLeapYear(100));
console.log(testLeapYear(4));
console.log(testLeapYear(400));
console.log(testLeapYear(2023));
console.log(testLeapYear(1999));
console.log(testLeapYear(2004));
console.log(testLeapYear(2100));
console.log(testLeapYear(2000));


function testBlt(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[0] === 'bread' && array[array.length - 1] === "bread" && array[i] === "bacon" && array[i] === "lettuce" && array[i] === "tomatoes") {
            return true;
        } else {
            return false;
        } 
    }
}
//&& array[i] === "bacon" && array[i] === "lettuce" && array[i] === "tomatoes"

console.log(testBlt(["bread", "bacon", "lettuce", "blue cheese", "tomatoes", "bread"]))
console.log(testBlt(["bread", "lettuce", "bacon", "tomatoes"]));
console.log(testBlt(["bread", "lettuce", "tomatoes", "bacon", "bread"]));
console.log(testBlt(["bread", "lettuce", "tomatoes", "bacon", "bread", "cheese"]));

function oddOrEven(array, word){
let odd = [];
let even = [];
    for (let number of array) {
        if (number % 2 ===0) {
            even.push(number);
        } else {
            odd.push(number);
        }
    }
    if (word === 'odd') {
    return [...even, ...odd]; 
    } else {
        return [...odd, ...even];
    } 
}

console.log(oddOrEven([ 0, 6, 3, 1, 4 ], "even"));
console.log(oddOrEven([ 0, 6, 3, 1, 4 ], "odd"));


function countString(array, string) {
    let sum = 0;
    for (let item of array) {
        let result = item.toLowerCase();
        if (result === string) {
            sum += 1
        }
    } return sum;
}

console.log(countString(["apple", "pizza", "orange", "apple", "sour apple"], "apple"));
console.log(countString(["apple", "pizza", "orange", "apple", "sour apple"], "pizza"));
console.log(countString(["sour", "soiree", "Sour", "sour", "sour"], "sour"));

function numbers(num){
    let sum = 0;
    for (let i = num; i > 0; i--){
        sum += i;
    }
    return sum;
}

console.log(numbers(4));
console.log(numbers(6));
console.log(numbers(1));
console.log(numbers(5));