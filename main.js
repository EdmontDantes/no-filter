/******************
 * YOUR CODE HERE *
 ******************/
function onlyOdds (numbers) {
  const numbersOdds = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      numbersOdds.push(numbers[i]);
    }
  }
  return numbersOdds;
}

function onlyEvens (numbers) {
  const numbersEven = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      numbersEven.push(numbers[i]);
    }
  }
  return numbersEven;
}

function shortNamesOnly (names) {
  const namesShort = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].length < 7) {
      namesShort.push(names[i]);
    }
  }
  return namesShort;
}

function dNames (names) {
  const namesThatStartWithD = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i][0] === 'D' || names[i][0] === 'd') {
      namesThatStartWithD.push(names[i]);
    }
  }
  return namesThatStartWithD;
}





/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  dNames,
}
