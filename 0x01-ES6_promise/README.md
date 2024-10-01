ES6 Promises


This project contains tasks for learning to use Promises in ECMAScript 2015 (ES6).

Requirements
All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
Allowed editors: vi, vim, emacs, Visual Studio Code
All your files should end with a new line
A README.md file, at the root of the folder of the project, is mandatory
Your code should use the js extension
Your code will be tested using Jest and the command npm run test
Your code will be verified against lint using ESLint
All of your functions must be exported
Setup
Install NodeJS 12.11.x
(in your home directory):

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
Install Jest, Babel, and ESLint
in your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.

Configuration Files
Add the files below to your project directory

package.json
Click to show/hide file contents
babel.config.js
Click to show/hide file contents
utils.js
Use when you get to tasks requiring uploadPhoto and createUser.

Click to show/hide file contents
.eslintrc.js
Click to show/hide file contents
and…
Don’t forget to run $ npm install when you have the package.json


Tasks To Complete
 0. Keep every promise you make and only make promises you can keep
0-promise.js contains a script that exports a function with the prototype function getResponseFromAPI(), which returns a Promise.

 1. Don't make a promise...if you know you can't keep it
1-promise.js contains a script that exports a function with the prototype getFullResponseFromAPI(success), which returns a Promise. The parameter (success) is a boolean.

When the argument is:
true
Resolve the promise by passing an object with 2 attributes:
status: 200
body: 'Success'
false
Reject the promise with an error object with the message The fake API is not working currently.
 2. Catch me if you can!
2-then.js contains a script that exports a function with the prototype function handleResponseFromAPI(promise), which appends three handlers to the promise argument.

When the Promise resolves, return an object with the following attributes:
status: 200,
body: 'success'
When the Promise rejects, return an empty Error object.
For every resolution, log Got a response from the API to the console.
 3. Handle multiple successful promises
3-all.js contains a script that meets the following requirements.

Import uploadPhoto and createUser from utils.js.
Use the prototype below to collectively resolve all promises and log body firstName lastName to the console. The functions in utils.js return Promises.
function handleProfileSignup()
In the event of an error, log Signup system offline to the console.
 4. Simple promise
4-user-promise.js contains a script that exports a function with the prototype function signUpUser(firstName, lastName), which returns a resolved promise with the object shown below.

{
  firstName: value,
  lastName: value,
}
 5. Reject the promises
5-photo-reject.js contains a script that exports a function with the prototype function uploadPhoto(filename), which returns a Promise rejecting with an Error and the string $fileName cannot be processed, where fileName is a string.

 6. Handle multiple promises
6-final-user.js contains a script that meets the following requirements.

Import signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js.
Export a function named handleProfileSignup that accepts three arguments firstName (string), lastName (string), and fileName (string) and calls the two other functions (signUpUser and uploadPhoto).
When the promises are all settled it should return an array with the following structure:
[
  {
    status: status_of_the_promise,
    value: value || reason // value or error returned by the Promise
  },
  ...
]
 7. Load balancer
7-load_balancer.js contains a script that exports a function with the prototype function loadBalancer(chinaDownload, USDownload), which returns the value returned by the promise that resolved the first, where chinaDownload and USDownload are Promises.

 8. Throw error / try catch
8-try.js contains a script that meets the following requirements.

Exports a function with the prototype function divideFunction(numerator, denominator), where numerator and denominator are numbers.
When the denominator argument is equal to 0, the function should throw a new error with the message cannot divide by 0.
Otherwise it should return the numerator divided by the denominator.
 9. Throw an error
9-try.js contains a script that meets the following requirements.

Export a function named guardrail that accepts a function argument called mathFunction.
The guardrail function should create and return an array named queue.
When the mathFunction function is executed, the value returned by the function should be appended to the queue. If this function throws an error, the error message should be appended to the queue.
In every case, the message Guardrail was processed should be added to the queue.
 10. Await / Async
100-await.js contains a script that meets the following requirements.

Import uploadPhoto and createUser from utils.js.
Export an async function named asyncUploadUser that will call the two functions imported above and return an object with the following format:
{
  photo: response_from_uploadPhoto_function,
  user: response_from_createUser_function,
}
Import uploadPhoto and createUser from utils.js.
If one of the async function fails, return an empty object as shown below:
{
  photo: null,
  user: null,
}
