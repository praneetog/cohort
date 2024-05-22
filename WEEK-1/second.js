// const a = readLine("Enter Your First Name :");
// const b = readLine("Enter  Your Last Name:");

// console.log("Hello, " + a + " " + b + ".");

// OBJECTS

// users = [
//   {
//     firstName: "Praneet",
//     lastName: "Kashyap",
//   },
//   {
//     firstName: "John",
//     lastName: "Wick",
//   },
//   {
//     firstName: "Alice",
//     lastName: "Smith",
//   },
// ];

// for (i = 0; i < users.length; i++) {
//   console.log(users[i]["firstName"]);
// }

// FUNCTIONS

// function calcArithmetic(a, b, func) {
  // In the above line, 'sum' function is passed in 'func' parameter
//   const ans = func(a, b);
//   return ans;
// }

// function sum(a, b) {
//   return a + b;
// }

// const value = calcArithmetic(4, 3, sum);
// console.log(value);

// SET TIMEOUT function (Can be used to delay the execution of a FUNCTION)

// function greet() {
//   console.log("Hello World");
// }

// setTimeout(greet, 3 * 1000); // A delay of 3s

// SET INTERVAL function (Can be used to run the function continously after some intervals)

// function greetInterval() {
//   console.log("Hello World");
// }

// setInterval(greetInterval, 1000); // Runs every second

//Create a counter in JS (Counts down from 30 to 0)

// let count=30
// function countDown() {
//     console.log(count)
//     count--
// }

// function stopCounting(){
//     if(count>=0){
//         countDown()
//     }
// }

// setInterval(stopCounting, 1000);

// const fs = require('fs');

// //Asynchronous function
// function readFile(){
//     return new Promise(function(resolve){
//         fs.readFile("a.txt", "utf-8", function(err,data){
//             resolve(data);
//         })
//     })
// }

// //Callback function to exit
// function onDone(data){
//     console.log(data)
// }

// readFile().then(onDone);


function aysncFunction(){
    let res=new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hiii")
        },1000)
    });
    return res;
}

async function main(){
    let value=await aysncFunction()
    console.log(value)
}

main()