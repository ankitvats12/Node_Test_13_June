function calculateSum(array, callback) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  callback(sum);
}

function callback(sum) {
  console.log(`The sum is ${sum}`);
}

calculateSum([2, 4, 6, 8], callback);
