const userAcc = [
  {
    Username: "depuuttt",
    Password: "123",
  },
  {
    Username: "aldi",
    Password: "123",
  },
];

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
        // Perform any desired action here, such as redirecting to another page
      } else {
        // Failed login
        alert("Invalid username or password\nPlease try again.");
        // Display an error message on the page or perform any other desired action
      }
    });
}
