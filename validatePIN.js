/**
 * Created by zhenhuiWang on 17/12/18.
 *
 * Title: Regex validate PIN code
 *
 * Function: If the function is passed a valid PIN string, return true, else return false.
 *
 * Exercise Link: https://www.codewars.com/kata/regex-validate-pin-code/train/javascript
 */

 function validatePIN (pin) {
     let filter = /^(\d{4}|\d{6})$/;
     return filter.test(pin);
 }
 console.log(validatePIN (444444));
