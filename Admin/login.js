function validateLogin() {
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let emailError = document.getElementById("email-error");
  let passwordError = document.getElementById("password-error");
  let banner = document.getElementById("error-message");

  emailError.innerHTML = "";
  passwordError.innerHTML = "";
  banner.style.display = "none";

  let valid = true;

  if (email == "") {
    emailError.innerHTML = "Enter your email.";
    valid = false;
  } else if (!email.includes("@")) {
    emailError.innerHTML = "Enter a valid email.";
    valid = false;
  }

  if (password == "") {
    passwordError.innerHTML = "Enter your password.";
    valid = false;
  }

  if (!valid) {
    return false;
  }

  let admins = JSON.parse(localStorage.getItem("admins")) || [];
  let found = (email.toLowerCase() == "admin@restaurant.com" && password == "Admin@123");

  for (let i = 0; i < admins.length; i++) {
    if (admins[i].email == email.toLowerCase() && admins[i].password == password) {
      found = true;
    }
  }

  if (found) {
    window.location.href = "dashboard.html";
  } else {
    banner.innerHTML = "Incorrect email or password.";
    banner.style.display = "block";
  }

  return false;
}