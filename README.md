# Node_Test_13_June
https://docs.google.com/document/d/1Uir6yFLnGtdztSsp9krDbQuxbTIJtK10dSkLPKgsr1o/edit


## Node JS Test
*Time Limit - 2 hours*

Test Guidelines:
All questions are mandatory to attempt
Read the question properly and create a working solution for it.
This test focuses on fundamental concepts of Node and JavaScript.
Create a folder and keep all the files with proper naming .
Push it to github.
Fill out the google form: **https://forms.gle/dLdVHLqExgtNEAhk8**


#### Question 1: Write a JavaScript program that uses a for loop to print numbers from 1 to 10.
Example:
  Input: None
  
  Expected Output: 1 2 3 4 5 6 7 8 9 10

#### Question 2: Write a JavaScript program that uses a while loop to calculate the sum of numbers from 1 to 10.
Example:
  Input: None
  
  Expected Output: 55

#### Question3: Write a JavaScript program that uses a for loop to iterate over the characters in a string and counts the number of vowels.
Example:
Input: 
  ```js
  "Hello, World!"
  ```
  Expected Output: 3

#### Question 4: Write a JavaScript program that uses a while loop to reverse a given number.
Example:
  Input: 12345
  
  Expected Output: 54321


#### Question 5: Write a JavaScript program that checks if a given string is a palindrome.
Example:
  Input: 
   ```js 
   "racecar"
   ```
  Expected Output: true


#### Question 6: Write a Node.js program that creates an HTTP server using the built-in 'http' module and responds with "Hello World!" when accessed.

#### Question 7: Modify the previous program to include an HTTP header with the content type 'text/html' in the server response.

#### Question 8: Write a Node.js program that creates a server using the built-in 'http' module. Include a custom module called *"myDateTime"* that returns the current date and time. The server should respond to incoming requests by displaying the current date and time.


#### Question 9: Write a Node.js program that reads the contents of an HTML file and returns the content as the response when accessed via an HTTP server.

#### Question 10: Create a Node.js program that appends the text `"Hello content!"` to a file called `"mynewfile1.txt"` using the `fs.appendFile()` method.

#### Question 11: Modify the previous program to create a new file called "mynewfile2.txt" using the fs.open() method with the "w" flag.

#### Question12: Write a Node.js program that replaces the content of a file called "mynewfile3.txt" with the text "Hello content!" using the fs.writeFile() method.

#### Question13: Implement a Node.js program that appends the text " This is my text." to the end of the file "mynewfile1.txt" using the fs.appendFile() method.

#### Question14: Develop a Node.js program that deletes a file called "mynewfile2.txt" using the fs.unlink() method.

#### Question15: Create a Node.js program that renames a file called "mynewfile1.txt" to "myrenamedfile.txt" using the fs.rename() method.

#### Question16: Write a JavaScript function multiplyByTwo that takes a number as an argument and multiplies it by two. Implement a callback function callback that receives the result of the multiplication and displays it on the console.
  Example Input: 
  ```js 
  multiplyByTwo(5, callback);
  ```
  Expected Output:Result: 10

#### Question 17: Implement a JavaScript function calculateSum that takes an array of numbers as an argument and calculates their sum. The function should accept a callback function callback that receives the calculated sum. Invoke the callback function with the sum of the array elements.
  Example Input:
  ```js 
  calculateSum([2, 4, 6, 8], callback);
  ```
  Expected Output:Sum: 20


#### Question 18 : Create a JavaScript function getUserData that simulates fetching user data from a server asynchronously. The function takes a callback function callback as an argument. Inside the getUserData function, after a delay of 2 seconds, invoke the callback function with a mock user object containing name, email, and age properties.
Example Input: getUserData(callback);
Expected Output:User Data:
```JSON 
{
  name: 'John Doe',
  email: 'johndoe@example.com',
  age: 25
}
```

#### Question 19: Write a JavaScript function getRandomNumber that generates a random number between 1 and 10. Implement a promise that resolves with the generated random number. The promise should be rejected if the generated number is less than 5.
  Example Input:
  ```js 
  getRandomNumber()
  ```
  Expected Output:
  *A promise object that will be resolved with a random number between 1 and 10 if it is greater than or equal to 5. If the generated number is less than 5, the promise should be rejected.*


#### Question 20: Write a JavaScript function checkFileExists that checks if a file exists asynchronously using promises. The function takes a file path as an argument and returns a promise. Inside the function, after a delay of 1 second, check if the file exists. If the file exists, resolve the promise. If the file does not exist, reject the promise.
   Example Input: 
   ```js 
   checkFileExists('/path/to/file.txt')
   ```
  Expected Output:
  *A promise object that will be resolved if the file exists after a delay of 1 second. If the file does not exist, the promise should be rejected.*

