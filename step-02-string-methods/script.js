// https://www.w3schools.com/js/js_string_methods.asp
// https://www.w3schools.com/js/js_string_search.asp

let firstName1 = "Ahmed Ayaz";
console.log(firstName1.length);
// OUTPUT :
// 10

let firstName2 = "Ahmed Ayaz";
console.log(firstName2.slice(0 , 2));
// OUTPUT :
// Ah

let firstName3 = "Ahmed Ayaz";
console.log(firstName3.slice(-4 , -1));
// OUTPUT :
// Aya

let firstName4 = "Ahmed Ayaz";
console.log(firstName4.slice(7));
// OUTPUT :
// yaz

// substring() is similar to slice()
// The difference is that substring() cannot accept negative indexes.

let firstName5 = "Ahmed Ayaz";
console.log(firstName5.substring(3 , 8));
console.log(firstName5.substring(3));
// OUTPUT :
// ed Ay
// ed Ayaz

// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.

let firstName6 = "Ahmed Ayaz";
console.log(firstName6.substr(4 , 4));
// OUTPUT :
// d Ay

// The replace() method does not change the string it is called on.
// The replace() method returns a new string.
// By default, the replace() method is case sensitive.

let thatName = "Microsoft is my Company";
console.log(thatName.replace("Microsoft" , "TechComp"));
console.log(thatName);
// OUTPUT :
// TechComp is my Company
// Microsoft is my Company

let a = "Hello";
let b = "Peter";
console.log(a.toUpperCase());
console.log(b.toLowerCase());
console.log(a.concat(b));
console.log(a.concat(" " + b));
console.log(a.concat(" " , b));
// OUTPUT :
// HELLO
// peter     
// HelloPeter
// Hello Peter
// Hello Peter

// The trim() method removes whitespace from both sides of a string:

let c = "               I am Hello               ";
console.log(c.length);
console.log(c.trim());
// OUTPUT :
// 40
// I am Hello

let text = "Ahmed Ayaz";
console.log(text.padStart(20 , "*"));
console.log(text.padEnd(20 , "*"));
// OUTPUT :
// **********Ahmed Ayaz
// Ahmed Ayaz**********


// The padStart() and padEnd() method are string methods.
// To pad a number, convert the number to a string first.

let text2 = 45;
let text3 = text2.toString();
console.log(typeof(text3));
// OUTPUT :
// string


let array1 = ["abc" , "defghi" , "jklmnopqr"];
for (let i = 0; i < array1.length; i++) {
    console.log(array1[i].padStart(20 , "-*-"));
}
// OUTPUT :
// -*--*--*--*--*--*abc
// -*--*--*--*--*defghi
// -*--*--*--*jklmnopqr

let id = "Ehmmm";
console.log(id[0]);
console.log(id.charAt(0));
console.log(id.charCodeAt(0));
// OUTPUT :
// E
// E
// 69

let array2 = "Ahmed-Ayaz";
for (let i = 0; i < array2.length; i++) {
    console.log(array2.slice(i , i+1));
}
// OUTPUT :
// A
// h
// m
// e
// d
// -
// A
// y
// a
// z

let array3 = "Ahmed-Ayaz";
for (let i = 0; i < array3.length; i++) {
    console.log(array3.slice(i));
}
// OUTPUT :
// Ahmed-Ayaz
// hmed-Ayaz
// med-Ayaz 
// ed-Ayaz  
// d-Ayaz   
// -Ayaz    
// Ayaz     
// yaz
// az
// z

let text4 = "AhmedAyaz";
for (let i = 0; i < text4.length; i++) {
    console.log(text4.slice(0 , text4.length-i));
}
// OUTPUT :
// AhmedAyaz
// AhmedAya
// AhmedAy
// AhmedA
// Ahmed
// Ahme
// Ahm
// Ah
// A
























