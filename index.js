
// Target all the id and classes
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

// store all thr id and classes inside variable
let username    = id("username"),
    email       = id("email"),
    password    = id("password"),
    form        = id("form"),
    errorMsg    = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

// Target the form and add submit ebent listener
form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank");
});

// function for doing all validation
let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

    // icons
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";

    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

    // icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
}
};
