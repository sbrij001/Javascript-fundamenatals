// Multiple arguments
let add = function(a,b){
  return a + b;
};
let result = add(1,2);
console.log(result);

// Default arguments
let getScoreText = function(playerName='Anonymous', playersScore=0){
  return `Name: ${playerName}, Score: ${playersScore}`;
};
console.log(getScoreText());

// Challenge
// Create a function that figures out 20%
// tip for total spent at a restaurant
// 2 args, total and percentage
// create a default tip percentage
// return total + tip
let tip = function(total,tip=.2){
  let additionalTip =  total * tip;
  let tipPercentage = tip * 100;
  return `A ${tipPercentage}% tip on ${total} would be ${additionalTip}`
};
let billTotal = tip(100);
let secondBillTotal = tip(350, .25);
console.log(billTotal);
console.log(secondBillTotal);