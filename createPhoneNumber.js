/**
 * Created by zhenhuiWang on 17/12/18.
 *
 * Title: Create Phone Number
 *
 * Function: Write a function that accepts an array of 10 integers (between 0 and 9),
 * that returns a string of those numbers in the form of a phone number.
 *
 * Exercise Link: https://www.codewars.com/kata/create-phone-number/train/javascript
 */



/**
 * [createPhoneNumber description]
 * @param  {[type]} arr [description]
 * @return {[type]}         [description]
 */
function createPhoneNumber(numbers){
    let PhoneNumber = numbers.join('');
    let arr1 = PhoneNumber.substring(0,3);
    let arr2 = PhoneNumber.substring(3,6);
    let arr3 = PhoneNumber.substring(6);
    return `(${arr1}) ${arr2}-${arr3}`;

}
console.log(createPhoneNumber(Number));
