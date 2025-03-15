// Fahrenheit to Celcius
 let f: number = 50;

 function fahrenheitToCelsius(f: number): number {
    return (f - 32) * 5 / 9;
 }

 let fahrenheitToCelsiusresult = fahrenheitToCelsius(f);
 console.log(`${fahrenheitToCelsius(f)}°C`);

 // Centimeter to Kilometer
 let cm: number = 2300000;

 function cmToKm(cm: number): number {
   return cm / 100000;
}

let cmToKmresult =  cmToKm(cm);
   console.log(`${cmToKm(cm)}km`);

// Odd or Even
function isOdd(num: number): boolean {
   if (num % 2 !== 0) {
      return true;
   }
   return false;
}
console.log(isOdd(100));
console.log(isOdd(105));

// Remove first occurence
let person: string = "Andini";
let teks: string = "Welcome";

function removeFirstOccurrence(str: string, search: string, append: string): string {
   return str.replace(search, '') + " " + append;
}
console.log(removeFirstOccurrence(person, "dini", teks))

//Palindrome
function isPalindrome(str: string): boolean {
   let reversed = str.split('').reverse().join('');
   return str === reversed;
}
console.log(isPalindrome("malam"));
console.log(isPalindrome("pagi"));