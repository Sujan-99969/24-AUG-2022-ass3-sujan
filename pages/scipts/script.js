let registerFormData = document.getElementById("register_form");
let inputText = document.getElementById("input_text");
let passWord = document.getElementById("input_password");
let userName = document.getElementById("user_name");
let userEmail = document.getElementById("user_email");
let MobileNumber = document.getElementById("mobile_number");
let userPwd = document.getElementById("user_pwd");
let welcomeMsg = document.getElementById("welcomemsg");
// let welcomeName = document.getElementsByClassName("title")
const Authtoken = "jsvsdjf8923r892efd";
const timeSpan = window.location.href;



console.log("clicked", timeSpan);
const fileName = timeSpan.substring(timeSpan.lastIndexOf("/") + 1);

console.log("clicked", fileName);
// alert("clicked")

let personsArray = [];


registerFormData.addEventListener("submit", (e) => {
  // alert("clicked");
  localStorage.setItem("token", JSON.stringify(Authtoken));

  let userdetails = {
    userName: userName.value,
    userEmail: userEmail.value,
    MobileNumber: MobileNumber.value,
    userPwd: userPwd.value,
  };
  personsArray.push(userdetails);

  localStorage.setItem("userdetails", JSON.stringify(personsArray));
  // let authtoken = JSON.parse(localStorage.getItem("token")) || [];

  // if(Authtoken == ){

  // }
  // else{

  // }
});

// welcomeMsg.innerHTML = (`${userName}`)
// console.log(userName);

function logout() {
//   debugger;
  localStorage.removeItem("token");
  // alert("clicked")
}



// function loadcontent(){
//     history.pushState({},"" ,"http://127.0.0.1:5500/pages/about.html")
// }
