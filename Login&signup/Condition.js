import { Firebase } from "./class/firebase.js";


const firebase = new Firebase();

async function handleSubmitLogin(e){
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    try{
        await firebase.login(email, password);

    }
    catch(error){
        alert("loi ne:" + error.message)
    }
}


document.getElementById("login-form").addEventListener("submit", handleSubmitLogin)

