export function isPalindrome(str: string): boolean {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
 }