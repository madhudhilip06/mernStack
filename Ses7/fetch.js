// console.log("Fetch API Example");
// console.log("response :::" , response);
//fetching user data from a public API and logging it to the console
const fetchUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")   
    .then((response) =>   response.json())
    .then((data) => {
        console.log("data :::" , data);
        const userList = document.getElementById("userList");
        data.forEach((user) => {
            const list=document.createElement("li");  //users ha single single ha kamika use pannuvom
            console.log(user);
            list.textContent=user.name;        //already list create pannitom adhula name mattum print pannanum and creat panna list ha user list ooda append pannanum
            userList.appendChild(list);       //list ha print pannanum adhuku already oru 
    });
})    .catch((error) => {
        console.log("Error fetching user data:", error);
    });
};

// list la print pannanum