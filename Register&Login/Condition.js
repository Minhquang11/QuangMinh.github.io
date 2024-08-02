import { Firebase } from "./class/firebase.js";

const firebase = new Firebase();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function handleSubmitLogin(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await firebase.login(email, password);
    Swal.fire({
      text: "Đăng nhập thành công",
      icon: "success",
    });
    await sleep(5000);
    window.location.href = "../Home/Home.html";
  } catch (error) {
    Swal.fire({
      text: error.message,
      icon: "error",
    });
    await sleep(5000);
  }
}

document
  .getElementById("login-form")
  .addEventListener("submit", handleSubmitLogin);
