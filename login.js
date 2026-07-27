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
import {
  signInWithPhoneNumber,
  RecaptchaVerifier,
  getAuth
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

document.getElementById("verifyOtp").addEventListener("click", async () => {

  const code = document.getElementById("otp").value;

  try{

    const result = await window.confirmationResult.confirm(code);

    const user = result.user;

    localStorage.setItem("userPhone", user.phoneNumber);
    localStorage.setItem("isLoggedIn","true");

    alert("🎉 Login Successful");

    window.location.href="index.html";

  }catch(error){

    alert("❌ गलत OTP");

  }

});
