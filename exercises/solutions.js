1. /*
Write a function that takes a boolean value and turns it to the string equivilent.
See how many different ways you can write this function! There are a TON.
*/
dsaf
ads
fads
f


asdf
asd
f
asdf
asdf


asdfasdf
function booleanToString(b){
  if (b===true){
  return "true";
  } else {
  return "false";
  }
}

// VARIATION
function booleanToString(b){
  return b.toString();
}

// VARIATION USING TURNARY OPERATOR
function booleanToString(b){
  return b ? 'true' : 'false';
}

// VARIATION
function booleanToString(b){
  return String(b);
  // instatiating a new String object of b
}

// VARIATION USING ES6
const booleanToString = input => input + "";

// VARIATION AND I'M NOT SURE WHY IT WORKS
function booleanToString(b){
  return `${b}`
}

/*
Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false.
*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
  //Date.parse takes the passed in date string and returns the number of miliseconds passed since January 1, 1970.
}
//VARIATION: you could also do new Date(currentDate) <= new Date(expiration Date);

//VARIATION: A longer way to write this:
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode !== correctCode) {
    return false;
  }
  var cur = Date.parse(currentDate);
  var exp = Date.parse(expirationDate);

  if (cur > exp) {
    return false;
  }
  return true;
}

-----------------------------------------------------------

2. /*
Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
*/

//This method loops through array and counts the number of times arrayOfSheep[i] == true and returns that value
function countSheeps(arrayOfSheep) {
  var num = 0;

  for(var i = 0; i < arrayOfSheep.length; i++)
    if(arrayOfSheep[i] == true)
      num++;

  return num;
}

//VARIATION: Second way is to use a filter method (which takes a "rule" used to filter through the array, in the form of a function) .. Here though, it will just take "Boolean" which is both a constructor and a function.
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
//using (Boolean) is actually the same thing as using arrayOfSheeps.filter(function (x) { return Boolean(x); }); ** confession: I don't really know why **

//USING ES6:
let countSheeps = x => x.filter( s => s ).length;

-----------------------------------------------------------

3. /*
Write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
*HINT* a "series" is like a sequence. You can assume there is a recurring pattern between numbers.
*HINT* if using a loop, use variable 'i' in a simple equation to increase the denomenator

You need to round the answer upto 2 decimal places and return it as String.
If the given value is 0 then it should return 0.00
You will only be given Natural Numbers as arguments.
Examples:

SeriesSum(1) => 1 = "1"
SeriesSum(2) => 1 + 1/4 = "1.25"
SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
*/

function SeriesSum(n) {
  var sum = 0;
  // the sum starts out as being zero and everytime the loop completes, the value of sum is RETAINED and REUSED
  for(var i = 0; i < n; i++) {
    sum += 1 / (3 * i + 1);
    //sum = sum (of previous loop) + 1(which is always the numerator in this example)/(3*i) + 1
  }
  return sum.toFixed(2);
  //.toFixed method rounds to whatever decimal you specify in the argument (in this case 2)
}

-----------------------------------------------------------

4. /*
Mr. Scrooge has a sum of money 'P' that wants to invest, and he wants to know how many years 'Y' this sum has to be kept in the bank in order for this sum of money to amount to 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly, and the new sum is re-invested yearly after paying tax 'T'

Note that the principal is not taxed but only the year's accrued interest

Write a function that returns the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

Assumptions : Assume that Desired Principal 'D' is always greater than the initial principal, however it is best to take into consideration that if the Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.
*/

function calculateYears(principal, interest, tax, desired) {
    // your code
    var years = 0;
    while(principal < desired){
      // use a while loop instead of a for loop because you don't know how long the loop will be running
      principal += (principal * interest) * (1 - tax);
      // note that (principal * interest) is multiplied by (1 - tax) BEFORE it is added to principal
      years++;
    }
    return years;
}

//ES6:
const calculateYears = (P, I, T, D) => {
  let year = 0;
  while (P < D && ++year) P += (P * I) - (P * I * T);
  return year;
};

-----------------------------------------------------------

5. /*
Your task is to make a function that can take any non-negative integer as a argument and return it with it's digits in descending order. Descending order means that you take the highest digit and place the next highest digit immediately after it.

HINT: 85724 is an example of a 'non-negative integer'-- it is not a string, it is a a whole NUMBER.. */

function descendingOrder(n){
  return parseInt(n.toString().split('').sort().reverse().join(''))
}

/* THINK ABOUT THIS IN STEPS:
1. convert integer n into a string so you can sort through it >>> n.toString() >>> toString is a built-in method of the global object String. It also acts as a function that can turn any argument into a string (p.123)
2. split the string into individual strings, so they can be sorted >>> .split('') >>> .split() is a built-in method of the String global object. Use an empty string '' as the separator. This will split the string up by each character into an array.
3. sort through array of string(s) >>> .sort() >>> for single-digit integers, this will sort in ascending order.
4. but we want descending order, so we run >>> .reverse()
5. now we have something like [9,5,4,3,2].. but we want ONE number, and not in an array...
6. JOIN then using >>> .join('') >>> using an empty string '' as separator will join as one single string with no spaces between characters
7. now we have ['95432'].. >>> parseInt() >>> is a global function in JS that takes a string and returns the first !numerical! value.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
http://www.w3schools.com/jsref/jsref_parseint.asp
*/

// ES6:
function descendingOrder(n){
  return parseInt((''+n).split('').sort((x,y)=>y-x).join(''));
}

-----------------------------------------------------------

6. /*
Define to_alternating_case(char*) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase
*/

String.prototype.toAlternatingCase = function () {
    return this.split("").map(function (a) {
      // split string into a group of individual strings so you can replace each
        return a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase();
        // .map is a built-in method for Objects in JS. It takes a function that returns a "rule" that it applies to every element in the array. It then returns a new array with the applied "rule"
        // ? is a turnary operator (AKA "If this thing to the left is true, then do this next thing" if false, then do the thing after the colin)
    }).join('');
};

// ES6:
String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}

-----------------------------------------------------------

7. /*
define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.
*/

function xor(a, b) {
  if ((a === true) && (b !== true)){
  return true
  // write a condition if a is true and b is false
  } else if ((a !== true) && (b === true)){
  return true
  // write a condition if a is false and b is true
  } else {
  return false
  // all other cases will be false
  }
}

// VARIATION
function xor(a, b) {
  return a != b;
}

// VARIATION function xor(a, b) {
  return (a || b) && !(a && b);
}

// ES6
const xor=(a, b)=>a!=b;

// ES 6
const xor = (a, b) => a && !b || b && !a;

-----------------------------------------------------------

8. /*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
*/

function doubleChar(str) {
  var character = '';
  // have to assign variable as empty string otherwise will return undefined.
  for (var i = 0; i < str.length; i++) {
    character = character + str[i] + str[i];
    };
  return character;
};

// VARIATION
function doubleChar(str) {
  return str.split("").map(function (c) {
    return c + c;
  }).join("");
}
// splits string into individual strings, then uses .map to go through each item and change it to the return result of the function defined (c)

// ES6
const doubleChar = (str) => str.split("").map(c => c + c).join("");

-----------------------------------------------------------

9. /*
Write a function powersOfTwo which will return list of all powers of 2 from 0 to n (where n is an exponent).
*/

function powersOfTwo(n){
  var arr = [];
  // declare an empty array and then push values into it
  for (var i=0; i<=n; ++i){
    arr.push(Math.pow(2, i));
    // Math.pow takes two numbers a,b and returs a to the b power
  }

  return arr;
}

-----------------------------------------------------------

10. /*
Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
*/

function remove(s){
  return s.replace(/!$/, '');
  // the $$$ makes sure it removes the ! at the end of the string
}

-----------------------------------------------------------

11. /*
Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
*/

function getGrade (s1, s2, s3) {
  avg = (s1+s2+s3)/3;
  if (avg < 60)  return "F";
    else if (avg < 70) return "D";
    else if (avg < 80) return "C";
    else if (avg < 90) return "B";
    else return "A";
}

// VARIATION using turnary operators
function getGrade (s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}

// VARIATION longer way to do it, more steps
function getGrade (s1, s2, s3) {
  let meanScore = (s1 + s2 + s3)/3;
  if( meanScore >= 90 && meanScore <= 100){
    return 'A';
  } else if( meanScore >= 80 && meanScore < 90) {
    return 'B'
   } else if( meanScore >= 70 && meanScore < 80) {
    return 'C'
   } else if( meanScore >= 60 && meanScore < 70) {
    return 'D'
   } else {
    return 'F'
  }
}

// VARIATION using a switch
function getGrade (s1, s2, s3) {
  // Code here
  var pct = 0;

  for(var j=0;j<arguments.length;j++) {
    pct += arguments[j];
  }

  pct = pct/arguments.length;

  switch(true) {
    case (pct <= 100 && pct >= 90):
      return 'A'
      break;
    case (pct < 90 && pct >= 80):
      return 'B'
      break;
    case (pct < 80 && pct >= 70):
      return 'C'
      break;
    case (pct < 70 && pct >= 60):
      return 'D'
      break;
    case (pct < 60):
      return 'F'
      break;
    default:
      return null;
      break;
  }
}

-----------------------------------------------------------

12. /*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.
*/

function addBinary(a,b){
  return (a+b).toString(2)
}

// ES6:
const addBinary = (a, b) => (a + b).toString(2);

-----------------------------------------------------------

13. /*
Write a function that returns both the minimum and maximum number of the given list/array.
*/

function minMax(arr){
  newArr = [];

  numbers = arr.sort(function(a,b) { return a-b });
  newArr.push(numbers[0], numbers.pop());
  // sorted through array, then plucked out the first item using [0] and the last item by using .pop (since there's no way to know how many items are in the array, you can't hardcode a number) then I pushed them into an empty array (you can push multiple items just by separating them with a comma)
  // my solution was different than most. I don't think it's best practice to use .pop and .shift because they actually remove items from the original array. It works here because I used only .pop.
  return newArr;
}

// VARIATION:
function minMax(arr){
  return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
  // Math.min takes lowest value in array. .apply(Math, arr) allows arr to be put into a new array while including it.
}
// VARIATION
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
  // (...arr) does the same thing as .apply(Math, arr)
}
// RESOURCE https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator

-----------------------------------------------------------

14. /*
Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
*/

function twoDecimalPlaces(n) {
  return Number(n.toFixed(2));
  // because this converts a number into a string, you have to put it inside of a Number object to convert it back. parseInt() will not work for this because once it gets to the decimal point, it cuts the number off there.
}

// ES6
const twoDecimalPlaces = n =>  Number(n.toFixed(2))

-----------------------------------------------------------

15. /*
Your task is to create a function that takes three arguments - operation(string/char), value1(number), value2(number). The function should return result of numbers after applying the chosen operation.
basicOp('+', 4, 7)         // Output: 11
basicOp('-', 15, 18)       // Output: -3
basicOp('*', 5, 5)         // Output: 25
basicOp('/', 49, 7)        // Output: 7
*/

function basicOp(operation, value1, value2) {
  // a switch is preferable to a for loop or a series of if statements because if the operation is '+' the computer won't run the net four statements, which makes the function run faster
    switch (operation) {
      // the switch value is whatever the input is, AKA the value that results depend upon
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

// ES6 -- SUEPR CLEVER
const basicOp = (operation, value1, value2)=> eval(value1 + operation + value2);

-----------------------------------------------------------

16. /*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/

function greet (name, owner) {
  if (name === owner) {
    return 'Hello boss';
  }
  return 'Hello guest';
}

// VARIATION USING TURNARY operator
function greet (name, owner) {
  return name === owner ? 'Hello boss' :   'Hello guest';
}

// ES6
const greet = (name, owner) => `Hello ${name === owner ? 'boss' : 'guest'}`;

-----------------------------------------------------------

17. /*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.
Implement the method stray which accepts such array, and returns that single different number.
The input array will always be valid! (odd-length >= 3)

Examples:
[1, 1, 2] => 2
[17, 17, 3, 17, 17, 17, 17] => 3
*/

function stray(numbers) {
  numbers.sort(function(a,b) { return a-b });
  // sort through array. puts them in ascending order
  if ( numbers[0] === numbers[1] ) {
    // see if the first and second item are the same, if they are then that means the last item is the different one
    return numbers.pop()
    // use .pop to remove last item in array and return it
  } else {
    return numbers[0]
    // if the first two items are not the same, then the first item must be the unique one.
  }
}

// VARIATION
function stray(numbers){
  for (var i in numbers){
     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
  }
}

// VARIATION USING TURNARY OPERATOR
function stray(numbers) {
  numbers = numbers.sort(function(a, b){
    return a > b;
  });
  return numbers[0] === numbers[1] ? numbers[numbers.length -1] : numbers[0];
}

// ES6
const stray = nums => nums.reduce((a, b) => a ^ b);

-----------------------------------------------------------

18. /*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram( "Dermatoglyphics" ) == true
*/

function isIsogram(str){
  var i, j;
  // declares two variables that will each represent consecutive array items
  str = str.toLowerCase();
  // makes it lower case
  for(i = 0; i < str.length; ++i)
  // i starts at [0]
    for(j = i + 1; j < str.length; ++j)
    // j starts at the item in the array just after [i]
      if(str[i] === str[j])
        return false;
  return true;
}

// VARIATION THAT IS MUCH MORE CONFUSING

function isIsogram(str){
  return !/(\w).*\1/i.test(str)
  // '(\w).*\1' equates to: An alphanumeric character, '\w', followed by any number of random characters, '.*', followed by the same alphanumeric character again, '\1'
}
/* Regular expressions are a way to describe an analyze string data.
Regular expressions use forward slashes to encapsulate what it is we're looking for in the string.
\w (with a lower case w) means to look for an alphanumeric character
. represents all other characters
* Means to match the preceding expression zero OR MORE times. In this case where it follows '.' it allows for any number of random characters.
\1 Refers back to your match for the last expression in parentheses. In this case this means the character that matched '(\w)'.
The i makes the data analysis case insensitive
The ! means NOT
*/

-----------------------------------------------------------

19. /*
Write a program that finds the summation of every number between 1 and num. The number will always be a positive integer greater than 0.
For example:
summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

function summation(num) {
  var sum = 0;
  // set sum to 0 at a global level so you can use it both in the loop and to call it at the end.
  for (i=0; i<num; i++) {
    var sum = sum + (num-i);
    // everytime the loop runs after the first time, it remembers the value of sum and uses the new value every time. that's how we are able to continue adding upon it loop after loop.
  }
  return sum;
}

// VARIATION USING TURNARY OPERATOR
var summation = function (num) {
  return (num > 1) ? num + summation(num - 1):num;
}

// VARIATION USING ES6 && SUPER CLEVER
const summation = n => n * (n + 1) / 2;

-----------------------------------------------------------

20. /*
Complete the squareSum method so that it squares each number passed into it and then sums the results together.
For example:
squareSum([1, 2, 2]); // should return 9
*/

function squareSum(numbers) {
  var sum = 0;
  // again, declaring the variable outside the loop to give a starting point
  for (i=0;i<numbers.length;i++) {
    sum += Math.pow(numbers[i], 2);
    // Math.pow returns first argument to the power of the second argument.
  }
  return sum;
}

// VARIATION USING .REDUCE
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

// VARIATION USING .FOREACH
function squareSum(numbers){
  var sum = 0;
  numbers.forEach(function(n) {
    sum += n * n
  });
  return sum;
}

-----------------------------------------------------------

21. /*
write a function that adds on to array of fibbunacci sequence. it will add as many items to the array that you pass into the function.
*/

function fib (n) {
  let start = [1,1];
  for (i=2; i<n; i++) {
    // start with i=2, bc i=0 and i=1 are provided.
    // OR start with i=0, and change the statement to >>> start[i] + arr[i+1]
    newNum = start[i-1] + start[i-2];
    // set this to a variable so you can pass it through .push
    start.push(newNum);
  }
  return start;
}

-----------------------------------------------------------

22. /* BUBBLE SORT
Write a function for how bubblesort works
*/

// Sorting in ascending order
function bubbleSort(arrayToSort){

  var sorted = function(arr){
    // Check if an array is sorted
    var sorted = true;
    // return true or false depending if array is sorted or not
    for(var i=0, length=arr.length;i<length;i++){
      if(arr[i] > arr[i+1]){
        sorted = false;
        break;
      }
    }
    return sorted;
  };
  // While the array is not sorted
  // When the array is sorted, stop checking
  while( !sorted(arrayToSort) ){
  // Run through array
  for(var i=0, length=arrayToSort.length;i<length;i++){
    // Check if current value is greater than the next value
    if( arrayToSort[i] > arrayToSort[i+1] ){
      // If it is, switch the current value and the next
      var placeHolder = arrayToSort[i+1];
      arrayToSort[i+1] = arrayToSort[i];
      arrayToSort[i] = placeHolder;
    }
  }
    return arrayToSort;
  }
}
  // return the array

-----------------------------------------------------------

23. /* You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: array may be empty, in this case return 0.
*/

function positiveSum(arr) {
  var total = 0;
  for (i = 0; i < arr.length; i++) {
    // setup loop to go through array of given length
    if (arr[i] > 0) {
       // if arr[i] is greater than zero
      total += arr[i];
       // add arr[i] to total
    }
  }
  return total;
    // return total
}

// VARIATION USING FOREACH
var sum = 0;
arr.forEach(function(v,i,a) {
  if(v>0){
    sum+=v;
  }
});
return sum;
}

// ES6 VARIATION AND SUPER CLEVER
function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}
/* HOW DOES THIS WORK?!?!??!?!?! CONSIDER:
1. .reduce applies whatever function is put in the parentiesis to every item in the array.
    "a" starts off as the first item in the array
    "b" starts off as the second item
    "a" + ("is b greater than 0? if TRUE, return b and use value of b and add to a. if FALSE, add a+0")
2. the ",0);" at the end of the function is telling it to return 0 if the array is empty
*/

-----------------------------------------------------------

24. /* Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
For example, if this array were passed as an argument:
["Telescopes", "Glasses", "Eyes", "Monocles"]
Your function would return the following array:
["Eyes", "Glasses", "Monocles", "Telescopes"]
*/

function sortByLength (array) {
  let sort = array.sort(function(a, b) {
    // this goes through every item in the array and runs .length.... doing a - b will sort in ascending order. if you wanted descending order, do b - a
    return a.length - b.length;
  });
  return array;
};

// VARIATION USING ES6
function sortByLength (array) {
  return array.sort((a,b) => a.length - b.length);
};

-----------------------------------------------------------
25. /*
create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
HINT: you don't need to change the array, just return what it is asking for.
*/
function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
  // .filter is used to go through every item in array and use typeof to return a specific type
}

// VARIATION USING ES6
const filter_list = l => l.filter(c => typeof c === 'number');

-----------------------------------------------------------
26. /*
Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.

Note! a and b are not ordered!
*/

function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
  //  using recursion
   else return a + GetSum(a-1,b);
}

// VARIATION USING ES 6
const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

// VARIATIONfunction GetSum( a,b )
{
//if both a and b are equal return a
   if(a===b){
     return a;
   }
   var result = 0;

   var x = a, y = b;
 // check the larger and smaller numbers and assign them to x and y
   if(a > b) {
      x = b, y = a;
   }
 //in a loop add the numbers from the smaller one until it reaches the larger number
   for(var i = x; i <=y; i++ ) {
     result += i;
   }
   return result;

}

// VARIATION using two functions instead of recursion
function GetSum( a, b )
{
  if( a < b ){ return loop( a, b ); }
  if( a > b ){ return loop( b, a ); }
  return a;
}

function loop( i, j ){
  var total = 0;
  for( i ; i <= j ; i++ ){
    total += i;
  }
  return total;
}

-----------------------------------------------------------
27. /*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string (meaning only numbers, no letters, spaces, special characters, etc.), return true, else return false.*/

//  RESOURCE: http://www.w3schools.com/jsref/jsref_obj_regexp.asp

function validatePIN (pin) {
  // example of when to use variables to make code more readable.....
  if (!pin.match(/^[0-9a-z]+$/))
    return false;
    else if
    (((!pin.match(/[a-z]/i)))
    &&
    ((pin.length == 4) || (pin.length == 6))){
      return true;
    } else
       return false;
  }

  // REFACTORED CODE:
  function validatePIN (pin){
    var hasOnlyNumbers = pin.match(/^\d+$/);
    // pin.match(/^\d+$/); says 'find a digit'.. if false then everything is false
    var isCorrectLength = ((pin.length == 4) || (pin.length == 6));
    if (hasOnlyNumbers && isCorrectLength){
      return true;
    }

    return false;

  }

  // VARIATION -- DRY!
  function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
  // .test searches for match in string, returns true or false
}
//  | finds any of alternatives specified
  // ^ ==> the beginning of a string or line
// () ==> groups multiple tokens together and creates a capture groupe for extracting a substring or using a backreference
// \d ==> matches any digit
// {4} and {6} ==> a quantifier (matches 4 or 6 of the previous token. \d in this case)
// $ (Matches end of input)

-----------------------------------------------------------
28. /* Compare two strings, return false if the string contains anything but letters*/

function compare(s1, s2) {
  var hasOnlyLetters = function (string){
    return /^[a-z]+$/i.test(string);
  }

  if (!(hasOnlyLetters(s1)){
        return false;
  }

  return true;

}
-----------------------------------------------------------
29. /* convert every character in a string that isn't a letter, to a letter*/

function compare(s1, s2) {

  for (i=0; i<s1.length; i++){
    if (!(s1[i]).match(/^[a-z]+$/gi)){
       return s1.replace(/[^a-z]/gi, '');
    }
  }
}

-----------------------------------------------------------
29. /* find out if each item in a string is a letter, if it is, find the keyboard value. if not, the string returns a value of an empty string */

function findValueStringOne(s1) {
  var sumOfStringOne=0;
  for (i=0; i<s1.length; i++){
    if (!(s1[i]).match(/^[a-z]+$/gi)){
      sumOfStringOne = s1.replace(/./g, '')
      return sumOfStringOne;
      // console.log(sumOfStringOne)
    } else
    sumOfStringOne = sumOfStringOne + s1.charCodeAt(i)
  }
  return sumOfStringOne;
}

-----------------------------------------------------------
30. /* Compare two strings by comparing the sum of their values (ASCII character code).
For comparing treat all letters as UpperCase.
Null-Strings should be treated as if they are empty strings.
If the string contains other characters than letters, treat the whole string as it would be empty.

Examples:
"AD","BC" -> equal
"zz1","" -> equal
*/

function compare(s1, s2) {
  if (/^\D+$/gi.test(s1) && /^\D+$/gi.test(s2))
    return s1.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b) ===
           s2.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b);
  return true;
}

-----------------------------------------------------------
31. /*You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
*/

const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");

-----------------------------------------------------------

32. /*Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.*/
function findOdd(arr) {
  var result, num = 0;

  arr = arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      num++;
    } else {
      num++;
      if (num % 2 != 0) {
        result = arr[i];
        break;
      }
    }
  }
  return result;
}

// VARIATIONfunction findOdd(A) {
  for(var i = 0; i < A.length; i++){
    //Query the number of times that this 'i' element appears
    //then verify if that number of times is odd. If it is true, then return
    //that 'i' element
    if((A.filter(function(item){return item == A[i]; })).length % 2 != 0){
      return A[i];
    }
  }
  return 0;
}

// VARIATION USING WTF ES6 BLOWING MY MIND RN
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

-----------------------------------------------------------

33. /*Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".
*/

function arithmetic(a, b, operator){
  switch(operator) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
  }
}

-----------------------------------------------------------

34. /*
Take 2 strings s1 and s2 including only letters from ato z.
Return a new sorted string, the longest possible, containing distinct letters, - each taken only once - coming from s1 or s2.
*/

function longest(s1, s2) {
  // your code
  s3 = s1 + s2;
  s4 = s3.split("");
  s4 = s4.sort().filter(function(element, index, array){
    return element !== array[index - 1];
  });
  return s4.join("");
}
