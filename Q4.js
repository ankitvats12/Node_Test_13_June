let num = 12345;
let reverseNum = 0;
while (num > 0) {
  let remainder = num % 10;
  reverseNum = reverseNum * 10 + remainder;
  num = Math.floor(num / 10);
}
console.log(reverseNum);