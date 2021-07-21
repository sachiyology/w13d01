1)
What is the difference between a parameter and an argument?

Function parameters are the names listed in the function's definition.
Function arguments are the real values passed to the function.

2)
Within a function, what is the difference between return and console.log?

return returns a value to the caller of that function.
console.log just logs out information in console.

3)
function checkPalindrome(str) {
 var i =str.replace(/[\W_]/g, '').toLowerCase();
 return i === i.split('').reverse().join('');
}
console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));
