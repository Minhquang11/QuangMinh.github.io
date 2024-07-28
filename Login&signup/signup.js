import { Firebase } from "./class/firebase.js";


const firebase = new Firebase();

async function handleSubmitSignup(e){
    e.preventDefault();
    const email = document.getElementById("emailSignup").value;
    const password = document.getElementById("passwordSignup").value;


    try{
        await firebase.register(email, password);

    }
    catch(error){
        alert("loi ne:" + error.message)
    }
}

document.getElementById("login-signup").addEventListener("submit", handleSubmitSignup)

