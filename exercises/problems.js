1. /*
Write a function that takes a boolean value and turns it to the string equivilent.
See how many different ways you can write this function! There are a TON.
*/

function toString(b){
  if (b==true){
    return 'true';
  } else return 'false';

}

function booleantoString(value){
  if (value) {
    return 'true';
  } else return 'false';
}

function toString(b){
  return b ? 'true' : 'false';
}

function booleanToString(b){
  return b.toString();
}

function toString(b){
  String(b)
}
-----------------------------------------------------------

1a./*
Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false.
*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    var current = Date.parse(currentDate);
    var exp = Date.parse(expirationDate);

    if (enteredCode == correctCode) && (exp > current){
      return true;
    }
    return false;
}


-----------------------------------------------------------
2. /*
Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
*/
function countSheeps(arrayOfSheep) {
  var present = 0;
  for (i=0; i<arrayOfSheep.length; i++){
    if (arrayOfSheep[i]==true)
      present++
  }
  return present;
}

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
  var sum =0;
  for (i=0; i<n.length; i++){
    sum += 1/(i*3 + 1)
  }
return sum;
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



}
-----------------------------------------------------------

5. /*
Your task is to make a function that can take any non-negative integer as a argument and return it with it's digits in descending order. Descending order means that you take the highest digit and place the next highest digit immediately after it.

HINT: 85724 is an example of a 'non-negative integer'-- it is not a string, it is a a whole NUMBER.. */

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

function descendingOrder(n){

  
}
-----------------------------------------------------------

6. /*
Define to_alternating_case(char*) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase
*/



-----------------------------------------------------------

7. /*
define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.
*/



-----------------------------------------------------------

8. /*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
*/



-----------------------------------------------------------

9. /*
Write a function powersOfTwo which will return list of all powers of 2 from 0 to n (where n is an exponent).
*/


-----------------------------------------------------------

10. /*
Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
*/



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



-----------------------------------------------------------

12. /*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.
*/


-----------------------------------------------------------

13. /*
Write a function that returns both the minimum and maximum number of the given list/array.
*/
// RESOURCE https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator


-----------------------------------------------------------

14. /*
Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
*/



-----------------------------------------------------------

15. /*
Your task is to create a function that takes three arguments - operation(string/char), value1(number), value2(number). The function should return result of numbers after applying the chosen operation.
basicOp('+', 4, 7)         // Output: 11
basicOp('-', 15, 18)       // Output: -3
basicOp('*', 5, 5)         // Output: 25
basicOp('/', 49, 7)        // Output: 7
*/



-----------------------------------------------------------

16. /*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/



-----------------------------------------------------------

17. /*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.
Implement the method stray which accepts such array, and returns that single different number.
The input array will always be valid! (odd-length >= 3)

Examples:
[1, 1, 2] => 2
[17, 17, 3, 17, 17, 17, 17] => 3
*/



-----------------------------------------------------------

18. /*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram( "Dermatoglyphics" ) == true
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



-----------------------------------------------------------

20. /*
Complete the squareSum method so that it squares each number passed into it and then sums the results together.
For example:
squareSum([1, 2, 2]); // should return 9
*/



-----------------------------------------------------------

21. /*
write a function that adds on to array of fibbunacci sequence. it will add as many items to the array that you pass into the function.
*/



-----------------------------------------------------------

22. /* BUBBLE SORT
Write a function for how bubblesort works
*/



-----------------------------------------------------------

23. /* You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: array may be empty, in this case return 0.
*/



-----------------------------------------------------------

24. /* Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
For example, if this array were passed as an argument:
["Telescopes", "Glasses", "Eyes", "Monocles"]
Your function would return the following array:
["Eyes", "Glasses", "Monocles", "Telescopes"]
*/



-----------------------------------------------------------
25. /*
create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
HINT: you don't need to change the array, just return what it is asking for.
*/


-----------------------------------------------------------
