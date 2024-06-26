// //<<<<<<< AIRTHMATIC OPERATORS >>>>>>>>//

// //addition
// console.log(5 + 5);  // 10
// //subtraction
// console.log(5 - 4);  // 1
// //multiplication
// console.log(4 * 2);  // 8 
// //division
// console.log(10 / 2); // 5
// //exponent
// console.log(2 ** 5); // 32
// //modulus
// console.log(50 % 4); // 2




// //<<<<<< ASSIGNMENT OPERATOR >>>>>>>

// let x: number = 10;
// //Add Assign OPT(+=):
// console.log(x += 3);          //output  13
// //Sub Assign OPT(-=):
// console.log(x -= 1);          //output  12
// //Mult Assign OPT(*=):
// console.log(x *= 2);          //output  24
// //Div Assign OPT(/=):
// console.log(x /= 1);          //output  24



// //<<<<<< camparison >>>>>>>
// //Variable
// let a:number = 10;
// let b:number = 8;

// //Equality Operators.......
// //equality(==)
// console.log(a == a);           //true
// //strict equality(===)
// console.log(a === b);          //false
// //inequality(!=)
// console.log(a != b);           //true
// //strict inequality(!==)
// console.log(b !== b);          //false

// //Relational Operators......
// //greater than(>)
// console.log(a > b);            //true
// //greater than or equal (>=)
// console.log(a >= a);           //true
// //less than(<)
// console.log(a < b);            //false
// //less than or equal (<=)
// console.log(b <= a);           //true



//<<<<<<<<<< LOgicals OPERatoR >>>>>>>>>

//  && = And  , || = Or   , ! = Not  

let x:number = 4;
let y:number = 6;

//And && OPT 
console.log(x == x && y == 6); //true
console.log(x == y && x == 4); //false

//Or || OPT
console.log(x == x || y == y); //true
console.log(x == y || y == 7); //false

//Not ! OPT
let num1 = 4;
let num2 = 4;
console.log(!(num1 == num2)); //false
console.log(!(num1 == 3));    //true