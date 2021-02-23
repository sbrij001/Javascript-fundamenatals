// undefined represents the absence of a value

// undefined for variable
let name
if (name === undefined) {
  console.log('Please provide a name');
}else{
  console.log(name);
}

// undefined for function arguments
// undefined as the function returned default value
let square = function(num){
  console.log(num);
};

let result = square();
console.log(result);
square(3);

// Null as assigned value
// explicitly done by thee developer
let age = 28;
age = null;
console.log(age);