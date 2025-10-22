function greet(name,age){
    return "Hello " + name + ",your age is " + age;
}
console.log(greet("Madhu",20));

const greetArrow = (name,age) => {
    return "Hello " + name + " , Your age is " + age;
}
console.log(greetArrow("Dhilip",20));

const myself = {
    name: "Madhu",
    age: 20,
    cityc: "Chennai",
    greet : function(name){
        return ( "Hello " + name + ", your age is " + this.age + " and you live in " + this.cityc );
    }
}

console.log(myself.name);
console.log(myself.greet());

//nested object
const details = {
    name: "Madhu",
    age: 20,
    parents: {
        father : "Dhilip",
        mother : "Sathya",
    },
};

//Normal way
console.log(details.parents.father);

//Destructuring way
const {name , parents : {mother}} = details;
console.log(name,mother);

//ES6 Features:

// let and const

let city= "Cbe";
const pi = 3.14;
city = "Chennai";
// pi= 3.14159; // This will throw an error as pi is a constant, assignment to constant variable.

console.log(city);
console.log(pi);

//Template Literals:
let locat = "Goa";
let message = `Welcome to ${locat}`;
console.log(message);

//default parameters:

function greetDefault(name = "Madhu",age = 20){
    return "Hello " + name + ",your age is " + age;
}
console.log(greetDefault());   //default ha function kulla irrukardha eduthukum
// console.log(greetDefault("Fax",21)); //default override aagum

//spread operator:

const nums = [1,2,3];
// nums.push(4,5);
const newNums = [0,...nums,4,5];  //spread operator
console.log(newNums);

//rest operator:
function sum(...arg){
    return arg;
    // return arg[2];
    }
console.log(sum(1,2)); //rest operator

//Promises ans async/await:

// function getData(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => resolve("Data received"),2000);
//     });
// }

function getData(){
    return new Promise((resolve,reject) => {
        const x=-1;
        // const x=0;  //error
        if(x){
        setTimeout(() => resolve("Data received"),2000);
        }
        else{
        reject("Error: No data found");
        }
    });
}


async function showData() {
    const data = await getData();
    console.log(data);
    
}
showData();