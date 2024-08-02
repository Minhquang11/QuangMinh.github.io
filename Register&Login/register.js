import { Firebase } from "./class/firebase.js";

const firebase = new Firebase();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function handleSubmitSignup(e) {
  e.preventDefault();
  const email = document.getElementById("emailSignup").value;
  const password = document.getElementById("passwordSignup").value;

  try {
    await firebase.register(email, password);
    Swal.fire({
      text: "Đăng ký thành công",
      icon: "success",
    });
    await sleep(5000);
    window.location.href = "./login.html";
  } catch (error) {
    Swal.fire({
      text: error.message,
      icon: "error",
    });
    await sleep(5000);
  }
}

document
  .getElementById("login-signup")
  .addEventListener("submit", handleSubmitSignup);
