import { fahrenheitToCelsius } from './fahrenheitToCelsius';
import { cmToKm } from './cmToKm';
import { isOdd } from './isOdd';
import { removeFirstOccurrence } from './removeFirstOccurrence';
import { isPalindrome } from './isPalindrome';

let f: number = 50;

console.log(`${fahrenheitToCelsius(f)}°C`);
console.log(`${cmToKm(2300000)}km`);
console.log(isOdd(100));
console.log(isOdd(105));
console.log(removeFirstOccurrence("Andini", "dini", "Welcome"));
console.log(isPalindrome("malam"));
console.log(isPalindrome("pagi"));
