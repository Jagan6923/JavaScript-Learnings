document.getElementById("form-validate").addEventListener("submit", function (event) {
    // console.log(event);
    event.preventDefault() // for avoid reloading

    let username = document.getElementById("usename").value.trim()
    let email = document.getElementById("email").value.trim()
    let password = document.getElementById("password").value.trim()
    let confirmPassword = document.getElementById("confirm-password").value.trim()


    let usernameError = document.getElementById("username-error")
    let emailError = document.getElementById("email-error")
    let passwordError = document.getElementById("password-error")
    let confirmPasswordError = document.getElementById("confirm-password-error")

    let isValid = true;

    // Jeyaraman S
    // jagan@gmail.com
    let usernamePattern = /^[A-Za-z]+ [A-Za-z]$/;
    let emailPattern = /^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/

    if (username === "") {
        usernameError.textContent = "Username is required"
        isValid = false
    }
    else if (!usernamePattern.test(username)) {
        usernameError.textContent = "Username should be first name and last name"
        isValid = false
    }
    else if (usernamePattern.test(username)) {
        usernameError.textContent = ""
        isValid = true
    }


    if (email === "") {
        emailError.textContent = "Email is required"
        isValid = false
    }
    else if (!emailPattern.test(email)) {
        emailError.textContent = "Email should be in the format of example@example.com"
        isValid = false
    }
    else if (emailPattern.test(email)) {
        emailError.textContent = ""
        isValid = true
    }

    if (password === "") {
        passwordError.textContent = "Password is required"
        isValid = false
    }
    else if (password.length < 3 || password.length > 10) {
        passwordError.textContent = "Password should be at least 8 characters long"
        isValid = false
    }
    else if (password.length > 3 && password.length < 10) {
        passwordError.textContent = ""
        isValid = true
    }

    if (confirmPassword === "") {
        confirmPasswordError.textContent = "Confirm Password is required"
        isValid = false
    }

    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Passwords do not match"
        isValid = false
    }
    else if (password.value === confirmPassword.value) {
        confirmPasswordError.textContent = ""
        isValid = true
    }


    if (isValid) {
        alert(`Hi ${username}! You have successfully registered!`)
        console.log(username, email, password);

    }
})




