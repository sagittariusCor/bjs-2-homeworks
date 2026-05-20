"use strict"
function solveEquation(a, b, c) {
  let discriminant = b**2 - 4*a*c;
  let arr = [];
  if (discriminant < 0) {
    return arr;
  }

  if (discriminant === 0) {
    let x = -b/(2*a);
    arr.push(x);
    return arr;
  }
  
  if (discriminant > 0) {
    let sqrtdiscriminant = Math.sqrt(discriminant);
    let x1 = (-b + sqrtdiscriminant)/(2*a);
    let x2 = (-b - sqrtdiscriminant)/(2*a);
    arr.push(x1, x2);
    return arr;
  }

  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}