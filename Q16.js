function multiplyByTwo(number, callback) {
  const result = number * 2;
  callback(result);
}

function callback(result) {
  console.log(`The result is ${result}`);
}

multiplyByTwo(5, callback);
