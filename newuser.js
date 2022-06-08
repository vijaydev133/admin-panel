let uName = document.getElementById("u-name");

let uEmail = document.getElementById("email");

let uPass = document.getElementById("pass");

let rupass = document.getElementById("re-pass");

let arr = [
  { u_Name: "Vijay", password: "vijay@123", email: "sankarvj1999@gmail.com" },
  { u_Name: "Mohan", password: "mohan@123", email: "mohan1999@gmail.com" },
];

function register() {
  let u_name = uName.value;

  let u_email = uEmail.value;

  let u_pass = uPass.value;

  let r_upass = rupass.value;

  if (u_name != "" && u_email != "" && u_pass != "" && r_upass != "") {
    if (u_pass == r_upass) {
      let newElement = { u_Name: u_name, password: u_pass, email: u_email };

      arr.push(newElement);
      alert("Registered successfully");
    }
    else{
    alert("password and retype password is not same");
    }
  }
  else{
      alert("fill every field")
  }
}

console.log(arr);
