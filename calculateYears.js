/**
 * Created by zhenhuiWang on 17/12/18.
 *
 * Title: Money, Money, Money
 *
 * Function: calculateYears
 *
 * Exercise Link: https://www.codewars.com/kata/money-money-money/train/javascript
 */

 function calculateYears(principal, interest, tax, desired) {
     let year = 0;
     while(principal < desired){
         let currentYearInterest = principal*interest;
         let currentYearInterestTax = currentYearInterest*tax;
         principal = principal + currentYearInterest - currentYearInterestTax;
         year++;

     }
     console.log(year,principal);

     return year;

 }
 calculateYears(1000, 0.05, 0.18, 1100);
