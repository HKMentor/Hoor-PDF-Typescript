// In Assignment 12 i practiced the following concepts:
// 1) Synchronous Programming.
// 2) Asynchronous Programming.
// 3) Arrow Function.
// 4) Callback Function.
// 5) Callback Hell.
// 6) Promises.





// //syncronous 

// // Example : Synchronous tasks
// function task1() {
//     console.log("Task 1 started");
//     console.log("Task 1 completed");
// }

// function task2() {
//     console.log("Task 2 started");
//     console.log("Task 2 completed");
// }

// function task3() {
//     console.log("Task 3 started");
//     console.log("Task 3 completed");
// }

// // Synchronous execution
// console.log("Start of synchronous execution");
// task1();  // Task 1 runs
// task2();  // Task 2 waits for Task 1 to finish
// task3();  // Task 3 waits for Task 2 to finish
// console.log("End of synchronous execution")



// // Example: Asynchronous tasks
// console.log("Start of program");

// // Asynchronous operation using setTimeout
// setTimeout(() => {
//     console.log("Asynchronous operation completed after 2 seconds");
// }, 2000);

// console.log("End of program");


// const asyncOperation = () => {
//     console.log("Start of asynchronous operation");
//     setTimeout(() => {
//         console.log("Asynchronous operation completed after 2 seconds");
//     }, 2000);
// };

// // Call the asynchronous operation
// asyncOperation();

//Example 1:
// Arrow function
const double = (x: number) => x * 2;

// Usage
console.log(double(5)); // Output: 10




//Example 2:
// Asynchronous arrow function
const Message = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Hello, world!");
};

// Call the asynchronous function
Message()                          
          //Output  Hello, world!




          


