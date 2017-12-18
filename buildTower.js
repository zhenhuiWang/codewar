/**
 * Created by zhenhuiWang on 17/12/18.
 *
 * Title: Build Tower
 *
 * Function: Build Tower by the following given argument:
number of floors (integer and always greater than 0).
 *
 * Exercise Link: https://www.codewars.com/kata/build-tower/train/javascript
 */

 function towerBuilder(nFloors) {
     let arr = [];
     let s = '*';
     for(let i = 0; i < nFloors; i++){
         console.log(s.repeat(2*i + 1));
         let tower = s.repeat(2*i + 1);
         if(i !== nFloors-1){
             let space = ' '.repeat(nFloors-i-1);
             console.log(space + '*',nFloors-i );
             tower = `${space}${tower}${space}`;
         }
         arr.push(tower);
     }
     console.log(arr);
     return arr;
 }
 towerBuilder(4);
