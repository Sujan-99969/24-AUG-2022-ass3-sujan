let username = document.getElementById("input_text");
let passWord = document.getElementById("input_password");
let loginFormData = document.getElementById("log_form");
const Authtoken = "jsvsdjf8923r892efd";


let getUserDetails = JSON.parse(localStorage.getItem("userdetails")) || [];
// console.log(getUserDetails);
// loginFormData.addEventListener("load", myScript);


loginFormData.addEventListener("submit", (e) => {
  e.preventDefault();

  localStorage.setItem("token",JSON.stringify(Authtoken))


  getUserDetails.forEach((element) => {
    if (
      username.value === element.userName &&
      passWord.value === element.userPwd
    ) {
window.location.href = "content.html"
// alert("welcome to site");
    } else {
      alert("you are not existing user please sign up..!");
    }
  });


});

