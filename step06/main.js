// //<<<<<<<<<<<<function>>>>>>>>>>
// //example 1.
// function funcName() {
//     console.log('My first Function');
// }
// funcName();
// //example 2.
// function add(a: number, b: number): number {
//     return a + b
// }
// let result: number = add(4,2);
// console.log(result);   //output 6            
// let obj={a:1,b:2,c:3};
// for(const key in obj){
//     console.log(key);
// }
//<<<<<<<<< Arrow Function >>>>>>>>>>.
// example 1.
// let myFunc = () =>{
//     console.log("Hello , Arrow Function.");
// }
// myFunc();
// //example 2.   one line code 
// let myFun =(myage:number) => myage;
// console.log(myFun(17));
//parameter & argument 
//example 1.
var sum = function (val1, val2) {
    console.log(val1 - val2);
};
sum(25, 10); //output  15 
//example 2.
var myValue = function (box1, box2, name) {
    console.log(box1 + box2);
    console.log(name);
};
myValue(8, 4, "hooria"); //output 12 & hooria
//example 3.  ByDefault value (parameter)
var myValue2 = function (box1, box2, name) {
    if (name === void 0) { name = "khan"; }
    console.log(box1 - box2);
    console.log(name);
};
myValue2(50, 6);
