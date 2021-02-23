// Global (convertFahrenheitToCelsius, temp)
  // Local Scope (fahrenheit,celsius)
    // Local Scope (isFreezing)

let convertFahrenheitToCelsius = function(fahrenheit){
  let celsius = (fahrenheit - 32) * 5/9

  if(celsius <=0){
    let isFreezing = true;
  }

  console.log(celsius)
};

let temp = convertFahrenheitToCelsius(32);
console.log(temp);