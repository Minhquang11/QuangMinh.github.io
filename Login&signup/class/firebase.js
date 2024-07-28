// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

export class Firebase {
    constructor() {
        this.firebaseConfig = {
            apiKey: "AIzaSyCsmc_Bzob_MMEHYEfvU-FhZzP-NaPBOhY",
            authDomain: "final-project-jsi09.firebaseapp.com",
            projectId: "final-project-jsi09",
            storageBucket: "final-project-jsi09.appspot.com",
            messagingSenderId: "1650737987",
            appId: "1:1650737987:web:66c054fb2c585c072b25f6",
        };

        this.app = initializeApp(this.firebaseConfig);
        this.auth = getAuth(this.app);
        console.log("Firebase initialized");
    }

    async register(email, password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
            return userCredential;
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    }

    async login(email, password) {
        try {
            const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
            return userCredential;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }

    async logout() {
        try {
            await signOut(this.auth);
            console.log('User logged out successfully');
        } catch (error) {
            console.error('Logout error:', error);
            throw error;
        }
    }
}
