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

4)
Write a function sumArraythat takes an array as an argument.
The array should contain numbers.
The function should return the sum of the numbers in the array.
Use a for loop within the function to iterate over the array and sum the contents.
Use a variable such as

function sumArray(a){
let sum = 0;
for (let i = 0; i < a.length; i++) {
sum += a[i];
}
return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));
