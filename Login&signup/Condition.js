        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
        import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
        
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyAyTW4s8JgrWIDPBhdPXMBEMoRuZViYfAA",
            authDomain: "spck-19e21.firebaseapp.com",
            projectId: "spck-19e21",
            storageBucket: "spck-19e21.appspot.com",
            messagingSenderId: "701815580026",
            appId: "1:701815580026:web:f0d80c09bc36ca24d322c3",
            measurementId: "G-7LG4CCBKDZ"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);

        document.getElementById("signup").addEventListener("submit", function (e) {
            e.preventDefault();

            function check() {
                let username = document.getElementById('username').value.trim();
                let email = document.getElementById('email').value.trim();
                let pw = document.getElementById('password').value.trim();

                let lowerCaseLetter = /[a-z]/;
                let upperCaseLetter = /[A-Z]/;
                let numbers = /[0-9]/;

                if (username.length == 0) {
                    alert("Please input your username");
                    document.getElementById('username').focus();
                    return false;
                }
                if (email.length == 0) {
                    alert("Please input your email");
                    document.getElementById('email').focus();
                    return false;
                }
                if (pw.length == 0) {
                    alert("Please input your password");
                    document.getElementById('password').focus();
                    return false;
                }
                if (pw.length < 8) {
                    alert("Password must be at least 8 characters.");
                    document.getElementById('password').focus();
                    return false;
                }
                if (!pw.match(lowerCaseLetter)) {
                    alert("Password must contain a lowercase letter");
                    document.getElementById('password').focus();
                    return false;
                }
                if (!pw.match(upperCaseLetter)) {
                    alert("Password must contain an uppercase letter");
                    document.getElementById('password').focus();
                    return false;
                }
                if (!pw.match(numbers)) {
                    alert("Password must contain a number");
                    document.getElementById('password').focus();
                    return false;
                }
                return true;
            }

            if (check()) {
                set(ref(db, 'user/' + document.getElementById("username").value), {
                    username: document.getElementById("username").value,
                    email: document.getElementById("email").value,
                    password: document.getElementById("password").value,
                })
                .then(() => {
                    alert("Signup Successful!");
                   
                })
                .catch((error) => {
                    console.error("Error writing to database: ", error);
                });
            }
        });