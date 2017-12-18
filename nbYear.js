/**
 * Created by zhenhuiWang on 17/12/18.
 *
 * Title: Growth of a Population
 *
 * Function: the function nb_year should return n number of entire years needed to get a population greater or equal to p.
 *
 * Exercise Link:https://www.codewars.com/kata/growth-of-a-population/train/javascript
 */

 function nbYear(p0, percent, aug, p) {
     if(p0 >= p) {
         return 0;
       } else {
         console.log(nbYear(p0*(1+percent/100)+aug, percent, aug, p));
         return 1+nbYear(p0*(1+percent/100)+aug, percent, aug, p);
       }
 }
 console.log(nbYear(1500, 5, 100, 2000));
