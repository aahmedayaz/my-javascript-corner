// https://www.w3schools.com/js/js_variables.asp
// https://www.w3schools.com/js/js_strings.asp
// https://www.w3schools.com/js/js_numbers.asp
// https://www.w3schools.com/js/js_arrays.asp
// https://www.w3schools.com/js/js_objects.asp

// ============================================================================================
// Variables & DataType 
// ============================================================================================

var a = "AhmedAyaz";
var b = 55;
var c = true;
var d = null;
var e = undefined;
var f;
var y = {};
var z = {
    name : "ayaz" ,
    age : 15 
};

console.log(a,b,c,d,e,f,y,z);
console.log(typeof(a) , typeof(b) , typeof(c) , typeof(d) , typeof(e) , typeof(f) , typeof(y) , typeof(z));

// OUTPUT :
// /AhmedAyaz 55 true null undefined undefined {} { name: 'ayaz', age: 15 }
// string number boolean object undefined undefined object object

// ============================================================================================
// True = 1 , False = 0
// ============================================================================================

let num1 = true + true;
let num2 = true + false;
let num3 = false + false;
console.log(num1 , num2 , num3);
console.log(typeof(num1) , typeof(num2) , typeof(num3));
// OUTPUT :
// 2 1 0
// number number number


// ============================================================================================
// Concept of Let & Const
// ============================================================================================