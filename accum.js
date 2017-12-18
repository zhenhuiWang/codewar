/**
 * Created by zhenhuiWang on 17/12/18.
 *
 * Title: Mumbling
 *
 * Function: This time no story, no theory. The examples below show you how to write function accum:
 *
 * Exercise Link: https://www.codewars.com/kata/mumbling/train/javascript
 */

 let s1 ='aDcd';
 function accum(s) {
     return s.split('').map((item, i)=>(
          item.toUpperCase() + item.toLowerCase().repeat(i)
     )).join('-');
 };
 accum(s1);
