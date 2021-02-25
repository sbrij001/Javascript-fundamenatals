let myBook = {
  title: 'All About Love',
  author: 'Bell Hooks',
  pageCount: 326
};

let otherBook = {
  title: 'Pleasure Activism',
  author: 'Adrienne Maree Brown',
  pageCount: 500
};

let getSummary = function(book){
  return{
    summary:`${book.title} by ${book.author}.`,
    PageCountSummary:`${book.title} is ${book.pageCount} pages long.`
  }
};
let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);
console.log(bookSummary.PageCountSummary);

// Challenge Area
// Pass in fahrenheit and return object with fahrenheit, celsius, and kelvin

let conversionCalculator = function(currentFahrenheit){
  return{
    fahrenheit: currentFahrenheit,
    celsius: (currentFahrenheit - 32)  * 1.8,
    kelvin: (currentFahrenheit - 32) * 1.8 + 273.15
  }

};

console.log(conversionCalculator(32));
let degreesInCelsius = conversionCalculator(32).celsius;
console.log(degreesInCelsius);