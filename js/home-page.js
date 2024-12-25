const firebaseConfig = {
    apiKey: "AIzaSyBbzGfLX7ga0LejFvbqx0ksMAYdm2WN_4Q",
    authDomain: "mura-projekat.firebaseapp.com",
    projectId: "mura-projekat",
    storageBucket: "mura-projekat.firebasestorage.app",
    messagingSenderId: "713225343188",
    appId: "1:713225343188:web:d8dd9b1464c7a4d4f86b41"
  };

firebase.initializeApp(firebaseConfig);

const signInOpenModalButton = document.getElementById("sign-in-open-modal-button");
const signInCloseModalButton = document.getElementById("sign-in-close-modal-button");
const signInModal = document.getElementById("sign-in-modal");

const signUpOpenModalButton = document.getElementById("sign-up-open-modal-button");
const signUpCloseModalButton = document.getElementById("sign-up-close-modal-button");
const signUpModal = document.getElementById("sign-up-modal");
const signUpFullName = document.getElementById("sign-up-full-name");
const signUpUserName = document.getElementById("sign-up-username");
const signUpPassword = document.getElementById("sign-up-password");
const signUpConfirmPassword = document.getElementById("sign-up-confirm-password");
const signUpError = document.getElementById("sign-up-error");
const signUpButton = document.getElementById("sign-up-button");

signInOpenModalButton.addEventListener("click", () => {
    signInModal.classList.remove("d-none");
    signInModal.classList.add("d-flex");
});

signInCloseModalButton.addEventListener("click", () => {
    signInModal.classList.remove("d-flex");
    signInModal.classList.add("d-none");
});

signUpOpenModalButton.addEventListener("click", () => {
    signUpModal.classList.remove("d-none");
    signUpModal.classList.add("d-flex");
});

signUpCloseModalButton.addEventListener("click", () => {
    signUpModal.classList.remove("d-flex");
    signUpModal.classList.add("d-none");
});

signUpButton.addEventListener("click", () => {
    const fullName = signUpFullName.value;
    const username = signUpUserName.value;
    const password = signUpPassword.value;
    const confirmPassword = signUpConfirmPassword.value;

    signUpError.innerHTML = "";

    if (!fullName) {
        signUpError.innerHTML = "Please enter full name";
        return;
    }

    if (!username) {
        signUpError.innerHTML = "Please enter username";
        return;
    }

    if (!password) {
        signUpError.innerHTML = "Please enter password";
        return;
    }

    if (!confirmPassword) {
        signUpError.innerHTML = "Please confirm password";
        return;
    }

    if (password !== confirmPassword) {
        signUpError.innerHTML = "Password doesn't match confirmation.";
        return;
    }
});
