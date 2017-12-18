/**
 * Created by zhenhuiWang on 17/12/18.
 *
 * Title: Descending Order
 *
 * Function: Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order.
 * Essentially, rearrange the digits to create the highest possible number.
 *
 * https: //www.codewars.com/kata/descending-order/train/javascript
 */

 function descendingOrder(n){
     let nn = `${n}`.split('').sort().reverse().join('');
     console.log(parseInt(nn));
     return nn;
 }
 descendingOrder(1021);
