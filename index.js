
// Target all the id and classes
let id =(id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

// store all thr id and classes inside variable
let username    = id("username"),
    email       = id("email"),
    password    = id("password"),
    form        = id("form"),
    
    errorMessage    = classes("error"),
    successIcon     = classes("success-icon"),
    failureIcon     = classes("failure-icon");
// Target the form and add submit ebent listener

form.addEventListener("submit",(e)=>{
    e.preventDefault();
});

// function for doing all validation
let engine = (id, serial, message) => {
    if(id.value.trim()===""){
        errorMessage[serial].innerHTML= message;

    }else{
            errorMsg[serial].innerHTML = "";
    }
}
