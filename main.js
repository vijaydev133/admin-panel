let uName = document.getElementById("uname");

let pass = document.getElementById("pass");

let a = document.getElementById("a")


// let sampuname = "uname";

// let samppass = "pass"

let arr = [
    {u_Name: "Vijay", password: "vijay@123", email: "sankarvj1999@gmail.com"},
    {u_Name: "Mohan", password: "mohan@123", email: "mohan1999@gmail.com"}
]

let isCorrect = false


function newpage(){
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i].u_Name == uName.value && arr[i].password == pass.value){
           
            isCorrect = true
        }
    
    }
    if(isCorrect){
            a.href = "/home.html"
    }
    else{
        alert("please enter valid username and password")
    }
}

// function newpage(){
//     let u_name = uName.value;

//     let u_pass = pass.value

//     if(u_name != "" && u_pass != ""){
//         if(u_name == "uname" && u_pass == "pass"){
//             a.href = "/home.html"
//         }
//         else{
//             alert("please type valid usename and password")
//         }
//     }
//     else{
//         alert("please enter username and password")
//     }
// }