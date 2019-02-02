/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/
function addFee(price) {
	let fee = price * 1 / 100;
	let resultMoney = price - fee;
	return resultMoney;
}
const gbpToUsd = 1.31;
const gbpToBrl = 4.79;
function convertToUSD(price) {
	let convertWithFee = addFee(price) * gbpToUsd;
	return convertWithFee;
}
function convertToBRL(price) {
	let convertWithFee = addFee(price) * gbpToBrl;
	return convertWithFee;
}

/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

var product = 'The life and times of Mozafar Haider';
var price = 10;
var priceInUSD = convertToUSD(price);
var priceInBRL = convertToBRL(price);

console.log('Product: ' + product);
console.log('Price in USD: ' + priceInUSD);
console.log('Price in BRL: ' + priceInBRL);
