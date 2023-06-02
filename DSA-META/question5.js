// Write a program that accepts an email string and validates that email. 
// If email is valid must display success message and If email is not valid must display error message
// Example:  Input - test01*gmail.com
// 	     Output - Invalid Email Id
// 	     Input - student01@gmail.com
// 	     Output - Valid Email Id

function validateEmail(email) {

    if (email.includes('@') && email.includes('.')) {
        return "Success";
    } else {
        return "invalid email";
    }
}

var email1 = "test01*gmail.com";
console.log(validateEmail(email1));

var email2 = "student01@gmail.com"
console.log(validateEmail(email2));
