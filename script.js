let parameters = {
    count: false,
    letters: false,
    numbers: false,
    special: false
};

let strengthBar = document.getElementById("strength-bar");

function strengthChecker() {
    let password = document.getElementById("password").value;

    // Check conditions
    parameters.letters = /[A-Za-z]/.test(password);
    parameters.numbers = /[0-9]/.test(password);
    parameters.special = /[!\"$%&/()=?@~`\\.\';:+=^*_-]/.test(password);
    parameters.count = password.length > 7;

    let barLength = Object.values(parameters).filter(value => value);

    // Clear previous bars
    strengthBar.innerHTML = "";

    for (let i in barLength) {
        let span = document.createElement("span");
        span.classList.add("strength");
        strengthBar.appendChild(span);
    }

    let spanRef = document.getElementsByClassName("strength");

    for (let i = 0; i < spanRef.length; i++) {
        switch (spanRef.length - 1) {
            case 0:
                spanRef[i].style.background = "#ff3e36"; // Weak
                break;
            case 1:
                spanRef[i].style.background = "#ff691f"; // Medium
                break;
            case 2:
                spanRef[i].style.background = "#ffda36"; // Strong
                break;
            case 3:
                spanRef[i].style.background = "#0be881"; // Very Strong
                break;
        }
    }
}

// Toggle Password Visibility
function toggle() {
    let passwordInput = document.getElementById("password");
    let icon = document.querySelector("#toggle i");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}
