function callback(user) {
  console.log(`User Data:
  {
    name: ${user.name},
    email: ${user.email},
    age: ${user.age}
  }`);
}

function getUserData(callback) {
  setTimeout(() => {
    const user = {
      name: "John Doe",
      email: "johndoe@example.com",
      age: 25,
    };
    callback(user);
  }, 2000);
}

getUserData(callback);
