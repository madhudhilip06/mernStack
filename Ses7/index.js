let age=10;

//if else
    if(age>=18){
        console.log("You can vote");
    }
    else{
        console.log("You cannot vote");
    }

//IF ELSE IF:
let score=50;
if(score>=90){
    console.log("A grade");
}
else if(score>=80){
    console.log("B grade");
}
else {
    console.log("C grade");
}

//Switch case:
let day=9;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

//Ternary operator:
let num=1;
let ans=num%2==0 ? "Even" : "Odd";
console.log(ans);

//LOOP:
//for loop:

// for(declaration; condition; increment/decrement)
for(let i=0;i<=5;i++)
    // for(let i=5;i>=0;i--)
{
    console.log(i);
}

//for of:
const colors=["Red","Green","Blue"];
for(let color of colors){
    console.log(color);
}

//DOM Manipulation:

function changeText(){
    const heading = document.getElementById("title");
    // heading.innerText="Welcome Makkaley!";
    heading.textContent="Hello Makkaley!";
    // heading.style.color="blue";
    console.log(heading);
}


//TASK: Cart add and decrease

function increment(){
    let CountEle=document.getElementById("count");
    let count1=Number(CountEle.innerText);
    count1++;
    CountEle.innerText=count1;
}

function decrement(){
    let CountEle=document.getElementById("count");
    let count1=Number(CountEle.textContent);
    count1--;
    CountEle.innerText=count1;
}

//callback function:
function fetchData(callback){
    setTimeout(()=>{
        console.log("Data fetched");
        callback();
    },2000)
}

function showData(){
    console.log("Showing data");
}
fetchData(showData);

//Promises: using then

function getUSerData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Promises");
            // resolve("User data received");
            reject("User data not received");
        },2000)
    })
}
getUSerData()
    .then((data) => console.log(data))   //used to call resolved data using ".then((data)=>...)"
    .catch((error) => console.log("Error ::" , error));    //for rejecting the promise using ".catch((error)=>...)"