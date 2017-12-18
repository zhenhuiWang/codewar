/**
 * Created by zhenhuiWang on 17/12/18.
 *
 * Title: Sum of two lowest positive integers
 *
 * Function: Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers.
 * No floats or empty arrays will be passed.
 *
 * Exercise Link: https://www.codewars.com/kata/sum-of-two-lowest-positive-integers/train/javascript
 */

 let sumNumbers = [5, 8, 12, 19, 22];
 function sumTwoSmallestNumbers(numbers) {
     numbers.sort(function(a, b){
         return a-b;
     });
     return numbers[0] + numbers[1];
 };
