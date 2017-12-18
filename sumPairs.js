/**
 * Created by zhenhuiWang on 17/12/18.
 *
 * Title: Sum of Pairs
 *
 * Function: Given a list of integers and a single sum value, return the first two values (parse from the left please)
 in order of appearance that add up to form the sum.
 *
 * Exercise Link: https://www.codewars.com/kata/sum-of-pairs/train/javascript
 */

 var sum_pairs = function(ints, s){
     var seen = {};

     for (var i = 0; i < ints.length; ++i) {
         console.log( seen,s - ints[i],seen[s - ints[i]]);

          if (seen[s - ints[i]]) {
              console.log([s - ints[i], ints[i]]);
              return [s - ints[i], ints[i]];
          }
          seen[ints[i]] = true;


      };

 };
 sum_pairs([10, 5, 2, 3, 7, 5],10);
