function returnRandomNumber() {
  return Math.random();
}

function returnRandomBetween0To100() {
  return Math.round(returnRandomNumber() * 100)
}

function sumToRandomNumber(num) {
  return `Seu número é ${returnRandomFrom0To100() + num}!`;
}

function subtractRandomNumber(num) {
  return `Seu número é ${returnRandomFrom0To100() - num}!`;
}

function multiplyToRandomNumber(num) {
  return `Seu número é ${returnRandomFrom0To100() * num}!`;
}

function divideRandomNumber(num) {
  return `Seu número é ${returnRandomFrom0To100(num) / num}!`;
}
