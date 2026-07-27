alert("login.js Loaded");
window.onerror = function(message, source, line, column, error){
    alert(message + "\nLine: " + line);
};
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBJy1CZlPQy6cxbg7ICW_HmbJ5p_zNEoyk",
  authDomain: "gaonfresh-86378.firebaseapp.com",
  projectId: "gaonfresh-86378",
  storageBucket: "gaonfresh-86378.firebasestorage.app",
  messagingSenderId: "453075606995",
  appId: "1:453075606995:web:6b2cdf65ac8944d7022326"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// reCAPTCHA
window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
  size: "normal"
});

window.recaptchaVerifier.render();

// Send OTP
document.getElementById("sendOtp").addEventListener("click", async () => {

  const phone = document.getElementById("phone").value.trim();

  if (!phone.startsWith("+91") || phone.length !== 13) {
    alert("Mobile number +91XXXXXXXXXX format me likhiye.");
    return;
  }

  try {

    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phone,
      window.recaptchaVerifier
    );

    window.confirmationResult = confirmationResult;

    document.getElementById("otpSection").style.display = "block";

    alert("OTP bhej diya gaya.");

  } catch (error) {

    alert(error.message);
    console.log(error);

  }

});

// Verify OTP
document.getElementById("verifyOtp").addEventListener("click", async () => {

  const code = document.getElementById("otp").value.trim();

  try {

    const result = await window.confirmationResult.confirm(code);

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userPhone", result.user.phoneNumber);

    alert("Login Successful");

    window.location.href = "index.html";

  } catch (error) {

    alert("Wrong OTP");

  }

});
