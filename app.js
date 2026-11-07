const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginButtonClick() {
  const useName = loginInput.value;
  console.log(useName);
}
loginButton.addEventListener("click", onLoginButtonClick);
