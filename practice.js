let currencyOne = 100;
let currencyTwo = 0;
let exchangeRate = 1.2;

function myCurrency(amount, rate) {
  return amount * rate;
}
currencyTwo = myCurrency(currencyOne, exchangeRate);
console.log(currencyTwo);
