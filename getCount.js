/**
 * Created by zhenhuiWang on 17/12/18.
 *
 * Title: Vowel Count
 *
 * Function: Return the number (count) of vowels in the given string.
 *
 * Exercise Link: https://www.codewars.com/kata/vowel-count/train/javascript
 */

 function getCount(str) {
   return (str.match(/[aeiou]/ig ) || [].length);
 }
 console.log(getCount(''));
