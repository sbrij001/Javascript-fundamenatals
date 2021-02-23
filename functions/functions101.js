// Functions -- input, code, output

let greetUser = function(){
  console.log('hello user');
};

greetUser();

let square = function(num){
  let result = (num * num)
  return result;
};

let value = square(5);
console.log(value);

let convertFahrenheitToCelsius = function(temp){
  let celsius = (temp - 32) * 5/9
  console.log(celsius)
};

convertFahrenheitToCelsius(32);