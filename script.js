let name = document.getElementById("name");
let company = document.getElementById("company");
let email = document.getElementById("email");
let number = document.getElementById("number");

let submit = document.getElementById("submit");
submit.addEventListener("click", () => checkform());

function checkform() {
  let flag = true;
  if (name.value === "") flag = false;
  if (company.value === "") flag = false;
  if (email.value === "") flag = false;
  if (number.value === "") flag = false;
  if (flag == true) alert("Submitted Successfully..");
  else alert("kindly fill the form correctly..");
}
