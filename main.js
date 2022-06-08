let uName = document.getElementById("uname");

let pass = document.getElementById("pass");

let a = document.getElementById("a")


let sampuname = "uname";

let samppass = "pass"

function newpage(){
    let u_name = uName.value;

    let u_pass = pass.value

    if(u_name != "" && u_pass != ""){
        if(u_name == "uname" && u_pass == "pass"){
            a.href = "/home.html"
        }
        else{
            alert("please type valid usename and password")
        }
    }
    else{
        alert("please enter username and password")
    }
}