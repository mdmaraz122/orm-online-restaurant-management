function validateRegister() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim().toLowerCase();
  let phone = document.getElementById("phone").value.trim();
  let role = document.getElementById("role").value;
  let password = document.getElementById("password").value;
  let confirm = document.getElementById("confirm").value;
  let terms = document.getElementById("terms").checked;
  let banner = document.getElementById("error-message");
  let success = document.getElementById("success-message");

  let errorIds = ["name", "email", "phone", "role", "gender", "password", "confirm", "terms"];
  for (let i = 0; i < errorIds.length; i++) {
    document.getElementById(errorIds[i] + "-error").innerHTML = "";
  }
  banner.style.display = "none";
  success.style.display = "none";

  let genders = document.getElementsByName("gender");
  let gender = "";
  for (let i = 0; i < genders.length; i++) {
    if (genders[i].checked) {
      gender = genders[i].value;
    }
  }

  let valid = true;

  if (name.length < 3) {
    document.getElementById("name-error").innerHTML = "Enter your full name (at least 3 letters).";
    valid = false;
  }

  if (email == "") {
    document.getElementById("email-error").innerHTML = "Enter your email.";
    valid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("email-error").innerHTML = "Enter a valid email.";
    valid = false;
  }

  if (phone.length != 11 || isNaN(phone)) {
    document.getElementById("phone-error").innerHTML = "Phone must be exactly 11 digits.";
    valid = false;
  }

  if (role == "") {
    document.getElementById("role-error").innerHTML = "Select a role.";
    valid = false;
  }

  if (gender == "") {
    document.getElementById("gender-error").innerHTML = "Select a gender.";
    valid = false;
  }

  if (password.length < 8) {
    document.getElementById("password-error").innerHTML = "Password needs at least 8 characters.";
    valid = false;
  } else if (!/[0-9]/.test(password)) {
    document.getElementById("password-error").innerHTML = "Password needs at least one number.";
    valid = false;
  }

  if (confirm != password) {
    document.getElementById("confirm-error").innerHTML = "Passwords do not match.";
    valid = false;
  }

  if (!terms) {
    document.getElementById("terms-error").innerHTML = "You must accept the terms.";
    valid = false;
  }

  if (!valid) {
    return false;
  }

  let admins = JSON.parse(localStorage.getItem("admins")) || [];

  let exists = (email == "admin@restaurant.com");
  for (let i = 0; i < admins.length; i++) {
    if (admins[i].email == email) {
      exists = true;
    }
  }

  if (exists) {
    banner.innerHTML = "This email is already registered.";
    banner.style.display = "block";
    return false;
  }

  admins.push({ name: name, email: email, phone: phone, gender: gender, role: role, password: password });
  localStorage.setItem("admins", JSON.stringify(admins));

  success.innerHTML = "Account created. Taking you to the login page...";
  success.style.display = "block";

  setTimeout(function () {
    window.location.href = "login.html";
  }, 2000);

  return false;
}