// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

export class Firebase {
    constructor() {
        this.firebaseConfig = {
            apiKey: "AIzaSyAnSyGPdeYd5WHvoo3m0e1RSqW132EVnFQ",
            authDomain: "spckjsiqm.firebaseapp.com",
            projectId: "spckjsiqm",
            storageBucket: "spckjsiqm.appspot.com",
            messagingSenderId: "157606723617",
            appId: "1:157606723617:web:a6889df068b5bb3c562360",
            measurementId: "G-HKBMSFGPYF"
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
