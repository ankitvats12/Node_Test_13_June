let str = "racecar";
let isPalindrome = true;
for (let i = 0; i < str.length / 2; i++) {
  if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
    isPalindrome = false;
    break;
  }
}
if (isPalindrome) {
  console.log("True");
} else {
  console.log("False");
}