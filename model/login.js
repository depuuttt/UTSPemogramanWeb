const userAcc = [
  {
    UserID: "user-001",
    Username: "depuuttt",
    Password: "123",
    Name: "Depuuttt",
  },
  {
    UserID: "user-002",
    Username: "aldi",
    Password: "123",
    Name: "Aldi Maulana",
  },
];

function setCookie(name, value, minutes) {
  const expires = new Date();
  expires.setTime(expires.getTime() + minutes * 60 * 1000);
  document.cookie = name + "=" + value + ";expires=" + expires.toUTCString();
}

function login() {
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const usernameInput = document.getElementById("username").value;
      const passwordInput = document.getElementById("password").value;

      const user = userAcc.find((account) => {
        return (
          account.Username === usernameInput &&
          account.Password === passwordInput
        );
      });

      if (user) {
        alert("Login Successful!\nYou'll be redirected soon.");
        window.location.assign("../../index.html");
      } else {
        alert("Invalid username or password\nPlease try again.");
      }
    });
}
