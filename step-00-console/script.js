console.log("Hello JavaScript !");
// OUTPUT : 
// Hello JavaScript !

var name1 = "Ahmed Ayaz";
console.log("This is" + name1);
console.log("This is" , name1);
// OUTPUT :
// This isAhmed Ayaz
// This is Ahmed Ayaz

var age = 18;
console.log("my age is "+ age);
console.log("my age is ", age);
// OUTPUT :
// my age is 18 //(All is White)
// my age is  18 //(18 is Yellow)

console.log("Ayaz\tAyaz\nAyaz\tAyaz\nAyaz\tAyaz");
// OUTPUT :
// Ayaz    Ayaz
// Ayaz    Ayaz
// Ayaz    Ayaz

var name2 = "Ahmed Ayaz";
console.log("My name is " + name2);
console.log(`My name is ${name2}`);
// OUTPUT :
// My name is Ahmed Ayaz
// My name is Ahmed Ayaz

var name3 = "Ahmed Ayaz";
console.log(`${name3}\t${name3}\n${name3}\t${name3}\n${name3}\t${name3}`);
// OUTPUT :
// Ahmed Ayaz      Ahmed Ayaz
// Ahmed Ayaz      Ahmed Ayaz
// Ahmed Ayaz      Ahmed Ayaz

var name4 = ["Ahmed" , "Ayaz"];
console.log(name4);
console.table(name4);
// OUTPUT :  
// [ 'Ahmed', 'Ayaz' ]
// ┌─────────┬─────────┐
// │ (index) │ Values  │
// ├─────────┼─────────┤
// │    0    │ 'Ahmed' │
// │    1    │ 'Ayaz'  │
// └─────────┴─────────┘

var name5 = [
    {
        firstname : "Ahmed" ,
        age : 20 ,
        Alpha : 'a'
    } 
        ,
    {
        firstname : "Zunair" ,
        age : 22 ,
        Alpha : 'c'
    } 
        ,
    {
        firstname : "Ali" ,
        age : 18 ,
        Alpha : 'z'
    }
];

console.log(name5);
console.table(name5);

// OUTPUT :
// [
//     { firstname: 'Ahmed', age: 20, Alpha: 'a' }, 
//     { firstname: 'Zunair', age: 22, Alpha: 'c' },
//     { firstname: 'Ali', age: 18, Alpha: 'z' }    
//   ]
//   ┌─────────┬───────────┬─────┬───────┐
//   │ (index) │ firstname │ age │ Alpha │
//   ├─────────┼───────────┼─────┼───────┤
//   │    0    │  'Ahmed'  │ 20  │  'a'  │
//   │    1    │ 'Zunair'  │ 22  │  'c'  │
//   │    2    │   'Ali'   │ 18  │  'z'  │
//   └─────────┴───────────┴─────┴───────┘

var name6 = [25 , 16 ,2 ,1 ,35 , 25 ,47 ,-2 ,-5 ,0 ,-6];
console.time();
for (let index = 0; index < name6.length; index++) {
    console.log(name6[index])
};

console.timeEnd();

// OUTPUT :
// 25
// 47
// -2
// -5
// 0
// -6
// default: 13.121ms