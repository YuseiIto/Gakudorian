function Signin(email, password) {

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("[Firebase Auth]" + errorCode + ":" + errorMessage);
        // ...
    });


    var user = firebase.auth().currentUser;

    if (user) {
        // User is signed in.
        alert(user.email + " is signed in.");
    } else {
        // No user is signed in.
    }

}