/**
 * Created by zhenhuiWang on 17/12/18.
 *
 * Title: Scramblies
 *
 * Function: Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2,
 * otherwise returns false.
 *
 * https: //www.codewars.com/kata/scramblies/train/javascript
 */

 function scramble(str1, str2) {
     var count = {};
     var arr1 = str1.split('');
     var arr2 = str2.split('');
     arr1.forEach(function(item) {
         count[item] = (count[item] || 0) + 1;
     });

     return arr2.every(function(item) {
         return count[item]--;
     });
 }
 console.log(scramble('javscriptsss','javascriptt'));
