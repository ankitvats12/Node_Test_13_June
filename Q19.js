function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  return new Promise((resolve, reject) => {
    if (randomNumber < 5) {
      reject(new Error("Number is less than 5"));
    } else {
      resolve(randomNumber);
    }
  });
}

getRandomNumber()
  .then((randomNumber) => {
    console.log(randomNumber);
  })
  .catch((error) => {
    console.log(error);
  });
