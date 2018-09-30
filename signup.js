function Signup() {


    if (document.getElementById('password').value == document.getElementById("password_verify")) {

        firebase.auth().createUserWithEmailAndPassword(document.getElementById("username").value, document.getElementById("password")).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log("[Firebase Auth Error]" + errorcode + ":" + errorMessage);
            // ...
        });


    }




}