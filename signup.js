function Signup() {


    if (document.getElementById('password').value == document.getElementById("password_verify").value) {

        firebase.auth().createUserWithEmailAndPassword(document.getElementById("username").value, document.getElementById("password").value).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log("[Firebase Auth Error]" + errorcode + ":" + errorMessage);
            // ...
        });
        console.log("Authentication finished");


    } else {

        alert("パスワードを確認してください。");
    }




}