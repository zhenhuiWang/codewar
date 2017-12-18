/**
 * Created by zhenhuiWang on 17/12/18.
 *
 * Title: Equal Sides Of An Array
 *
 * Function: You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
 *
 * Exercise Link: https://www.codewars.com/kata/equal-sides-of-an-array/train/javascript
 */


/**
 * [findEvenIndex description]
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
function findEvenIndex(arr) {
  for(let i = 1; i <= arr.length; i++){
      function add(prev, cur){
          return prev + cur;
      }
      if(arr.slice(0,i).reduce(add) === arr.slice(i+1).reduce(add)){
          return i;
      }
  }
  return -1;
}
console.log(findEvenIndex(arr));
