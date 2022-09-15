//Write a function that checks if a given string (case insensitive) is a palindrome.


function isPalindrome(x) {
let arr = x.split('')

let rev = arr.reverse().join('')

return rev.toLowerCase() === x.toLowerCase()

}
