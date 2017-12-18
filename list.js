/**
 * Created by zhenhuiWang on 17/12/18.
 *
 * Title: Format a string of names like 'Bart, Lisa & Maggie'.
 *
 * Function: Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names,
which should be separated by an ampersand.
 *
 * Exercise Link: https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/train/javascript
 */

 function list(names){
   var newNames = names.map((item, i) => item.name);
   if(newNames.length > 1){
       return (newNames.splice(0,newNames.length-1).join(', ') + ` & ${newNames[newNames.length-1]}`);
   }else if(newNames.length == 1){
       console.log(newNames[0]);
       return newNames[0];
   }else if(newNames.length == 0){
       console.log('===');
       return "Must work with no names";
   }
 }
 list([]);
