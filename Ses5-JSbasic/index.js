//VARIABLES:

// var name = "Madhumitha Dhilipkumar";
// console.log(name);
// let age = 20;
// age = 21;
// console.log(age);
// const company = "Guvi";
// console.log(company);

// var name = "Madhumitha Dhilipkumar";
// function sayHello(){
//     var name = "Madhumitha Dhilipkumar";
//     const name = "Madhumitha Dhilipkumar";   //will give error
//     let name = "Madhumitha Dhilipkumar";
//     name = "Dhilip";
//     console.log("Hello " + name);
// }
// console.log("Hello I'm outside func " + name);

// sayHello();

//DATA TYPES:

// function dataType(){
//     let studentName = "Madhumitha"; //string
//     let age = 20; //number
//     let isEnrolled = true; //boolean => true/false
//     let address = null; // null => empty value -> object
//     let phoneNumber;     //undefined => value not assigned
//     let subjects = ["HTML", "CSS", "JS"]; //array => collection of similar data types -> object
//     let student = {       //object => collection of key-value pairs
//         name: "Madhumitha",
//         age: 20,
//         isEnrolled: true
//     };
//     console.log(
//         typeof studentName, 
//         age, 
//         typeof isEnrolled, 
//         address, 
//         phoneNumber, 
//         subjects, 
//         student
//     );
// }
// dataType();

//OPERATORS in JS: + - * / % ++ -- == === != < > <= >= && || !

// function operators(){
//     let a=5;
//     let b=2;
    // console.log("a + b = ", a + b);
    // console.log("a - b = ", a - b);
    // console.log("a * b = ", a * b);
    // console.log("a / b = ", a / b);
    // console.log("a % b = ", a % b);
    // a++;
    // console.log("a++ = ", a);
    // console.log("a++ = ", a++);
    // ++a;
    // console.log("++a = ", a);
    // console.log("++a = ", ++a);
    // b--;
    // console.log("b-- = ", b);
    // console.log("b-- = ", b--);
    // --b;
    // console.log("--b = ", b);
    // console.log("--b = ", --b);

//     console.log("a == b = ", a == b);
//     console.log("a != b = ", a != b);
//     console.log("a < b = ", a < b);
//     console.log("a > b = ", a > b);
//     console.log("a <= b = ", a <= b);
//     const c= true && true;
//     console.log("a && b = ", c);
//     const d= true || true;
//     console.log("a || b = ", d);
// }
// operators();

//ARRAYS :

function arrayFun(){
    let fruits = ["Apple", "Banana" , "Grape"];
    fruits.push("Orange"); //add element at the end
    fruits.pop(); //remove element from the end
    fruits.splice(1,2); //remove element from specific index
    fruits.slice(1,2) //returns new array from specific index
    fruits[1] = "Mango"; //update element at specific index
    console.log(fruits);
}
arrayFun();

//OBJECTS:

// function objectFun(){
//     let student = {name:"Mad", age:20, isEnrolled:true};
//     student.name="Dhilip"; //updating value
//     student.phoneNumber = 1234567890;
//     console.log(student);
//     console.log(student.name); //accessing value using dot notation
// }
// objectFun();