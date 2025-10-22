//form and validation
function handleSubmit(event){
    event.preventDefault(); //inoru page ku navigtae aagama angae yae irrukum
    console.log("Form submitted");
    const name=document.getElementById("username").value;
    const email=document.getElementById("email").value;
    const error=document.getElementById("error");
    if(name === "" || email === ""){
        error.innerText="All fields are required";
        error.style.color="red";
    }
    else{
        error.innerHTML="";
        alert("Submitted");
        return;
    }
    console.log(name,email);
}

// const handleSubmit = (event) => {
//     event.preventDefault(); //inoru page ku navigtae aagama angae yae irrukum
//     console.log("Form submitted");
//     const name=document.getElementById("username").value;
//     console.log(name);
// }