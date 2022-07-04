/**
 * Created by zhenhuiWang on 17/12/18.
 *
 * Title: Your order, please
 *
 * Function: Your task is to sort a given string. Each word in the String will contain a single number.
 * This number is the position the word should have in the result.
 *
 * Exercise Link: https://www.codewars.com/kata/your-order-please/train/javascript
 */

let words = 'is2 Thi1s T4est 3a'
function sortNumber(wordA, wordB) {
  var numA = +wordA.match(/\d+/g)[0]
  var numB = +wordB.match(/\d+/g)[0]
  return numA - numB
}

function order(words) {
  words.split(' ').sort(sortNumber).join(' ')
}
