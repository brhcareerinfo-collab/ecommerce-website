import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import {
getAuth,
RecaptchaVerifier,
signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBJy1CZlPQy6cxbg7ICW_HmbJ5p_zNEoyk",
  authDomain: "gaonfresh-86378.firebaseapp.com",
  projectId: "gaonfresh-86378",
  storageBucket: "gaonfresh-86378.firebasestorage.app",
  messagingSenderId: "453075606995",
  appId: "1:453075606995:web:6b2cdf65ac8944d7022326"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
  size: "normal"
});

const appVerifier = window.recaptchaVerifier;

document.getElementById("sendOtp").addEventListener("click", async () => {

const phone = document.getElementById("phone").value;

try{

const confirmationResult = await signInWithPhoneNumber(
auth,
phone,
appVerifier
);

window.confirmationResult = confirmationResult;

document.getElementById("otpSection").style.display="block";

alert("OTP भेज दिया गया।");

}catch(err){

alert(err.message);

}

});
