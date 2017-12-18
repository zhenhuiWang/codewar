/**
 * Created by zhenhuiWang on 17/12/18.
 *
 * Title: Get the Middle Character
 *
 * Function:  return the middle character of the word. If the word's length is odd,
 * return the middle character. If the word's length is even, return the middle 2 characters.
 *
 * Exercise Link: https://www.codewars.com/kata/get-the-middle-character/train/javascript
 */
 let sss = 'abc';
 function getmiddle(s){
     let length = sss.length;
     if(length%2 === 0){
         return sss.substr(length/2-1, 2);

     }else{
         return sss.charAt(Math.floor(length/2));
     }
 }
 console.log(getmiddle(sss));
