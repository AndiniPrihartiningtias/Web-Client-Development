"use strict";
// Fahrenheit to Celcius
let f = 50;
function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
}
let fahrenheitToCelsiusresult = fahrenheitToCelsius(f);
console.log(`${fahrenheitToCelsius(f)}°C`);
// Centimeter to Kilometer
let cm = 2300000;
function cmToKm(cm) {
    return cm / 100000;
}
let cmToKmresult = cmToKm(cm);
console.log(`${cmToKm(cm)}km`);
// Odd or Even
function isOdd(num) {
    if (num % 2 !== 0) {
        return true;
    }
    return false;
}
console.log(isOdd(100));
console.log(isOdd(105));
// Remove first occurence
let person = "Andini";
let teks = "Welcome";
function removeFirstOccurrence(str, search, append) {
    return str.replace(search, '') + " " + append;
}
console.log(removeFirstOccurrence(person, "dini", teks));
//Palindrome
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("malam"));
console.log(isPalindrome("pagi"));
