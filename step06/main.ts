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
let sum = (val1: number, val2: number) => {
    console.log(val1 - val2);
}
sum(25,10);            //output  15 


//example 2.
let myValue = (box1: number, box2: number, name: string) => {
    console.log(box1 + box2);
    console.log(name);
}
myValue(8,4 ,"hooria");       //output 12 & hooria


//example 3.  ByDefault value (parameter)
let myValue2 = (box1: number, box2: number, name: string ="khan") => {
    console.log(box1 - box2);
    console.log(name);
}
myValue2(50,6);      //output  44  & khan



