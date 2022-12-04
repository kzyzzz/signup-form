function passCompare(){
    console.log("pass compare");

    let passOne = document.getElementById("password");
    let passTwo = document.getElementById("confirm-password");

    let errorMsg = document.querySelector(".error-msg");

    if (passOne.value == passTwo.value) {
        passOne.classList.remove('error');
        passTwo.classList.remove('error');
        errorMsg.classList.add('disabled');
    } else {
        errorMsg.classList.remove('disabled');
        passOne.classList.add('error');
        passTwo.classList.add('error');
    }
}