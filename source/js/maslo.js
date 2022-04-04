function Validate() {
    if(document.myForm.email.value == "") {
        alert("Пожалуйста проверьте свой email");
        document.myForm.email.focus()
        return false
    } else if(document.myForm.password.value = ""){
        alert("Пожалуйста проверьте ваш пароль");
        document.myForm.password.focus()
        return false
    } else if(document.myForm.password.value.length < 5) {
        alert("Пароль должен содержать не менее трех символов!");
        document.myForm.password.focus()
        return false
    } else if(document.myForm.email.indexOf("@") !== -1) {
       alert("Логин должен содержать символ @");
        document.myForm.email.focus()
        return false
    } else {
        return true
    }
}