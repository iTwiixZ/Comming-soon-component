const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validate(input){
if (input.value.match(validRegex)){
    document.getElementById(error).textContent = "Success !";
    return true;
} else {
    document.getElementById(error).textContent = "Please enter a provide email";
    return false;
}

}
