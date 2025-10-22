function validasiForm() {
  let nama = document.forms["formValidasi"]["nama"].value;
  let email = document.forms["formValidasi"]["email"].value;
  let password = document.forms["formValidasi"]["password"].value;

  if (nama == "" || email == "" || password == "") {
    alert("Semua field wajib diisi!");
    return false;
  }
  if (nama.length < 3) {
    alert("Nama harus lebih dari 3 karakter!");
    return false;
  }
  let polaEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(polaEmail)) {
    alert("Format email tidak valid!");
    return false;
  }
  if (password.length < 6) {
    alert("Password minimal 6 karakter!");
    return false;
  }
  alert("Form berhasil divalidasi!");
  return true;
}
function togglePassword() {
  const passwordInput = document.getElementById("password");
  const showPasswordCheckbox = document.getElementById("showPassword");

  if (showPasswordCheckbox.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}