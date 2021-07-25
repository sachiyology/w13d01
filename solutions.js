// 1)
What is the difference between a parameter and an argument?

Function parameters are the names listed in the function's definition.
Function arguments are the real values passed to the function.

// 2)
Within a function, what is the difference between return and console.log?

return returns a value to the caller of that function.
console.log just logs out information in console.

// 3)
function checkPalindrome(str) {
 var i =str.replace(/[\W_]/g, '').toLowerCase();
 return i === i.split('').reverse().join('');
}
console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));

// 4)
// Write a function sumArraythat takes an array as an argument.
// The array should contain numbers.
// The function should return the sum of the numbers in the array.
// Use a for loop within the function to iterate over the array and sum the contents.
// Use a variable such as

function sumArray(a){
let sum = 0;

for (let i = 0; i < a.length; i++) {
sum += a[i];
}
return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

function sumArray(array){
let sum = 0;
for (var key in array) {
sum += array[key];
}
return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

5)
// A Prime number is a number that is not evenly divisible by another number except 1 and itself.
// If you want to read more deeply about it, go here.
// To test whether a number is Prime, you only need to test as far as the square root of that number.
// This is advisable for optimization and testing large numbers.

Step1)
// Write a function called checkPrimethat will test whether a number is Prime.
// The function will return true (Boolean) if Prime, false if not.

function checkPrime (num) {
    //2 は素数なので true を返す
    if(num === 2) {
        return true;
    } else {
        for(i = 2; i < num; i++) {
        //2以上の数で割ったとき余りが0になれば false を返す。つまり素数ではない。
            if(num % i === 0) {
                return false;
                break;
            }
            //ループが最後まで行く、つまり割れる数がなかったら true を返す。つまり素数。
            if(i + 1 === num) {
                return true;
            }
        }
    }
}
console.log(checkPrime(11));

Step2)

function printPrimes(num) {

  var prime_num1 = [],
      prime_num2 = [];
  for (var i = 0; i <= num; i++) {
    prime_num2.push(true);
  }
  for (var i = 2; i <= num; i++) {
    if (prime_num2[i]) {
      prime_num1.push(i);
      for (var j = 1; i * j <= num; j++) {
        prime_num2[i * j] = false;
      }
    }
  }

  console.log(prime_num1);
}
printPrimes(97);

6)
const randomMove = () => {
  const randomNumber = (Math.floor(Math.random() * 3))
  if (randomNumber === 0){
    return 'Rock';
  }
  else if (randomNumber === 1){
    return 'Paper';
  }
  else if (randomNumber === 2){
  return 'Scissors';
  }
    }
console.log(randomMove());

let computersMove = randomMove();
// console.log(computersMove);
let usersMove = randomMove();
// console.log(usersMove);

const rockPaperScissors = (computersMove,usersMove) => {
  if (usersMove === computersMove){
    return 'The game is a tie!';
  }
  else if (usersMove === 'Rock'){
    if (computersMove === 'Paper'){
      return 'The computer wins!';
    }
    else {
      return 'You won!';
    }
  }
  else if (usersMove === 'Paper'){
    if (computersMove === 'Scissor'){
      return 'The computer wins!';
    }
    else {
      return 'You won!';
    }
  }
  else if (usersMove === 'Scissor') {
    if (computersMove === 'Rock') {
      return 'The computer wins!';
    }
    else {
      return 'You won!';
    }
  }
}
console.log('cmp:'+ computersMove + ' usr:' + usersMove);
console.log(rockPaperScissors(computersMove, usersMove));
